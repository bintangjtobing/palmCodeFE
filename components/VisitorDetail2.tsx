import AutocompleteElement from "./AutoComplete"
import SliderElement from "./Slider"

export default function VisitorDetail2({
    value,
    setValue,
    handleChange,
    handleBoard
}:{
    value: any,
    setValue: any,
    handleChange: any,
    handleBoard: any
}) {
    const data = [
        {label: 'Longboard', value: 'longboard'},
        {label: 'Funboard', value: 'funboard'},
        {label: 'Shortboard', value: 'shortboard'},
        {label: 'Fishboard', value: 'fishboard'},
        {label: 'Gunboard', value: 'gunboard'},
    ]
    return (
        <>
            <h1 className='mb-5 text-5xl'>Book Your Visit</h1>
            <p className='text-sm'>2/3 VISITOR DETAILS</p>
            <form className="grid grid-cols-2 mt-12 mb-12 gap-x-10 gap-y-14">
                <div className="col-span-2">
                    <SliderElement setValue={setValue} value={value}/>
                </div>
                <input onChange={handleChange} name="visit_date" className="py-5 px-4 bg-[#232323]" type="date" placeholder="Visit date"/>
                <AutocompleteElement data={data} hiddenAvatar={true} label={'board'} handleBoard={handleBoard}/>
            </form>
        </>
    )
}