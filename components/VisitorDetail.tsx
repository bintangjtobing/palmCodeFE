import AutocompleteElement from "./AutoComplete"
import {getApiData, postApiData, getCSRF} from "@/function/api";
import { useEffect, useState } from "react";
import axios from "axios";

export default function VisitorDetail({
    handleChange,
    handleCountry,
    validationError,
    validationCountry
}:{
    handleChange:any,
    handleCountry:any,
    validationError:any,
    validationCountry:any
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
            <h1 className='mb-5 text-5xl bodoni-moda'>Book Your Visit</h1>
            <p className='text-sm inter'>1/3 VISITOR DETAILS</p>
            <form className="grid grid-cols-2 mt-12 mb-12 gap-x-10 gap-y-14 inter">
                <div className="">
                    <input onChange={handleChange} name="name" className="py-5 px-4 bg-[#232323] w-full mb-1" type="text" placeholder="Name"/>
                    {validationError?.map((error:any) => (
                        error.path[0] === "name" && (
                            <p key={error.path[0]} className="text-red-500">{error.message}</p>
                        )
                    ))}
                </div>
                <div>
                    <AutocompleteElement data={dataCountries} label={'country'} handleChange={handleChange} handleCountry={handleCountry} hiddenAvatar={false}/>
                    <p className={`text-red-500 ${!validationCountry ? `` : `hidden`}`}>Please select your country</p>
                </div>
                <div>
                    <input onChange={handleChange} name="email" className="py-5 px-4 bg-[#232323] w-full" type="email" placeholder="Email"/>
                    {validationError?.map((error:any) => (
                        error.path[0] === "email" && (
                            <p key={error.path[0]} className="text-red-500">{error.message}</p>
                        )
                    ))}
                </div>
                <div>
                    <input onChange={handleChange} name="whatsapp_number" className="py-5 px-4 bg-[#232323] w-full" type="text" placeholder="Whatsapp number + (country code)"/>
                    {validationError?.map((error:any) => (
                        error.path[0] === "whatsapp_number" && (
                            <p key={error.path[0]} className="text-red-500">{error.message}</p>
                        )
                    ))}
                </div>
            </form>
        </>
    )
}