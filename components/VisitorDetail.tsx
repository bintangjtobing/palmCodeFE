import AutocompleteElement from "./AutoComplete"

export default function VisitorDetail() {
    return (
        <>
            <h1 className='mb-5 text-5xl'>Book Your Visit</h1>
            <p className='text-sm'>1/3 VISITOR DETAILS</p>
            <form className="grid grid-cols-2 mt-12 mb-12 gap-x-10 gap-y-14">
                <input className="py-5 px-4 bg-[#232323]" type="text" placeholder="Name"/>
                <AutocompleteElement/>
                <input className="py-5 px-4 bg-[#232323]" type="email" placeholder="Email"/>
                <input className="py-5 px-4 bg-[#232323]" type="text" placeholder="Whatsapp number"/>
            </form>
            <button className="px-16 py-4 font-semibold text-black bg-white text-md">Next</button>
        </>
    )
}