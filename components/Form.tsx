'use client'
import { useState, useEffect } from 'react';
import VisitorDetail from "./VisitorDetail"
import VisitorDetail2 from "./VisitorDetail2"
import VisitorDetail3 from "./VisitorDetail3"
import VisitorDetail4 from "./VisitorDetail4"

export default function Form() {
    const [currentStep, setCurrentStep] = useState(1);
    const [selectBoard, setSelectBoard] = useState()
    const [selectCountry, setSelectCountry] = useState()
    const [dataBody, setDataBody] = useState({})
    const [valueSurfing, setValueSurfing] = useState(0)

    const nextStep = () => {
        if(currentStep < 3){
            setCurrentStep(currentStep + 1);
        }else {
            setCurrentStep(currentStep + 1)
            console.log(dataBody);
        }
        
    };

    const handleCountry = (value:any) => {
        setSelectCountry(value)
    }

    const handleBoard = (value:any) => {
        console.log(value);
        setSelectBoard(value)
    }

    const handleChange = (event: any) => {
        if (event?.target?.name && event?.target?.value) {
            const { name, value } = event?.target;
            setDataBody(prevData => ({
                ...prevData,
                country_id: selectCountry,
                surfing_experience: valueSurfing,
                desired_board: selectBoard,
                [name]: value
            }));
        } else {
            
        }
    };
    

    // Fungsi untuk menentukan elemen Visitor Detail berdasarkan langkah saat ini
    const renderVisitorDetail = () => {
        switch (currentStep) {
            case 1:
                return <VisitorDetail handleChange={handleChange} handleCountry={handleCountry}/>;
            case 2:
                return <VisitorDetail2 setValue={setValueSurfing} handleChange={handleChange} value={valueSurfing} handleBoard={handleBoard}/>;
            case 3:
                return <VisitorDetail3 />;
            case 4:
                return <VisitorDetail4 />;
            default:
                return null;
        }
    };

    useEffect(() => {
        let timeout: NodeJS.Timeout; // Menentukan tipe variabel timeout
    
        if (currentStep === 4) {
            timeout = setTimeout(() => {
                setCurrentStep(1); // Kembali ke langkah pertama setelah 10 detik
            }, 10000); // 10 detik
        }
        
        return () => clearTimeout(timeout); // Membersihkan timeout saat komponen unmount
    }, [currentStep]);
    

    return (
        <>
            {renderVisitorDetail()}
            {currentStep < 4 && (
                <button className="px-16 py-4 font-semibold text-black bg-white text-md" onClick={nextStep}>{currentStep === 3 ? 'Book my visit' : 'Next'}</button>
            )}
            {currentStep === 4 && (
                <p className="text-gray-400 text-base">This form will refresh automatically in 10 seconds</p>
            )}
        </>
    );
}
