import AutocompleteElement from "./AutoComplete"
import SliderElement from "./Slider"

export default function VisitorDetail2() {
    return (
        <>
            <h1 className='mb-5 text-5xl'>Thank you, Bahari</h1>
            <p className='text-base'>You,re in!</p>
            <p className='text-base mt-5'>{"Your store visit is booked and you're ready to ride the shopping wave. Here’s your detail:"}</p>
            <div className="grid grid-cols-2 gap-5 mt-5 mb-10">
                <div>
                    <p className="text-gray-400 text-base">Name:</p>
                    <p className="text-lg">Bahari</p>
                </div>
                <div>
                    <p className="text-gray-400 text-base">Country:</p>
                    <p className="text-lg">Germany</p>
                </div>
                <div>
                    <p className="text-gray-400 text-base">Email:</p>
                    <p className="text-lg">Baharihari49@gmail.com</p>
                </div>
                <div>
                    <p className="text-gray-400 text-base">Visit date:</p>
                    <p className="text-lg">23/04/2024</p>
                </div>
            </div>
            <p className="mb-20">We look forward to seeing you at the #Swellmatch store! Your booking details already sent to your email and whatsapp</p>
        </>
    )
}