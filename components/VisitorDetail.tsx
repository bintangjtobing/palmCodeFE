import AutocompleteElement from "./AutoComplete"

export default function VisitorDetail() {
    return (
        <>
            <h1 className='text-5xl mb-5'>Book Your Visit</h1>
            <p className='text-sm'>1/3 VISITOR DETAILS</p>
            <form className="grid grid-cols-2 mt-12 gap-x-10 gap-y-14 mb-12">
                <input className="py-5 px-4 bg-[#232323]" type="text" placeholder="Name"/>
                <AutocompleteElement/>
                <input className="py-5 px-4 bg-[#232323]" type="text" placeholder="Email"/>
                <input className="py-5 px-4 bg-[#232323]" type="text" placeholder="Whatsaap number"/>
            </form>
            <button className="py-4 px-16 bg-white text-black text-md font-semibold">Next</button>
        </>
    )
}