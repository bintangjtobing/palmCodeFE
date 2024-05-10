import { useEffect, useState } from "react"
import AutocompleteElement from "./AutoComplete"
import SliderElement from "./Slider"
import { getApiData } from "@/function/api"
import Image from "next/image"

export default function VisitorDetail2({
    dataBooking
}:{
    dataBooking:any
}) {

    const [dataCountry, setDataCountry] = useState<any>({})
    useEffect(() => {
        const getCountry = async () => {
            try {
                const {data, status} = await getApiData({endPoint : `countries/${dataBooking?.member?.country_id}`})
                if(status == 200){
                    setDataCountry(data)
                }
            } catch (error) {
                
            }
        }
        getCountry()
    }, [dataBooking])

    return (
        <>
            <h1 className='mb-5 text-5xl'>Thank you, {dataBooking?.member?.name}</h1>
            <p className='text-base'>You,re in!</p>
            <p className='text-base mt-5'>{"Your store visit is booked and you're ready to ride the shopping wave. Here’s your detail:"}</p>
            <div className="grid grid-cols-2 gap-5 mt-5 mb-10">
                <div>
                    <p className="text-gray-400 text-base">Name:</p>
                    <p className="text-lg">{dataBooking?.member?.name}</p>
                </div>
                <div>
                    <p className="text-gray-400 text-base">Country:</p>
                    <p className="text-lg flex items-center gap-2">
                        <Image
                            className="w-5 h-5"
                            src={dataCountry?.icon_name}
                            width={10}
                            height={10}
                            alt="flag icon"
                        />
                        {dataCountry?.country_name}
                    </p>
                </div>
                <div>
                    <p className="text-gray-400 text-base">Email:</p>
                    <p className="text-lg">{dataBooking?.member?.email}</p>
                </div>
                <div>
                    <p className="text-gray-400 text-base">Visit date:</p>
                    <p className="text-lg">{dataBooking?.surfing_booking?.visit_date}</p>
                </div>
            </div>
            <p className="mb-20">We look forward to seeing you at the #Swellmatch store! Your booking details already sent to your email and whatsapp</p>
        </>
    )
}