import AutocompleteElement from "./AutoComplete"
import getApiData from "@/function/api";
import { useEffect, useState } from "react";

export default function VisitorDetail({
    handleChange,
    handleCountry,
}:{
    handleChange:any,
    handleCountry:any
}) {
    const [dataCountries, setDataCountries] = useState<{ value: string | number; label: string; flagSrc: string; }[]>([]);


    useEffect(() => {
        const getData = async () => {
            try {
                const { data, status }: { data: any[]; status: number } = await getApiData({ endPoint: 'countries' });
    
                if (status === 200) {
                    const newData = data.map((item: { id: string | number; country_name: string; icon_name: string }) => ({
                        value: item.id,
                        label: item.country_name,
                        flagSrc: item.icon_name
                    }));
    
                    setDataCountries(newData);
                } else {
                    console.error(`Failed to fetch data. Status: ${status}`);
                }
            } catch (error) {
                console.error('An error occurred while fetching data:', error);
            }
        };
    
        getData();
    }, []);
    

    return (
        <>
            <h1 className='mb-5 text-5xl'>Book Your Visit</h1>
            <p className='text-sm'>1/3 VISITOR DETAILS</p>
            <form className="grid grid-cols-2 mt-12 mb-12 gap-x-10 gap-y-14">
                <input onChange={handleChange} name="name" className="py-5 px-4 bg-[#232323]" type="text" placeholder="Name"/>
                <AutocompleteElement data={dataCountries} label={'country'} handleChange={handleChange} handleCountry={handleCountry} hiddenAvatar={false}/>
                <input onChange={handleChange} name="email" className="py-5 px-4 bg-[#232323]" type="email" placeholder="Email"/>
                <input onChange={handleChange} name="whatsapp_number" className="py-5 px-4 bg-[#232323]" type="text" placeholder="Whatsapp number"/>
            </form>
        </>
    )
}