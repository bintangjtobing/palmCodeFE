'use client'
import { useState, useEffect } from 'react';
import VisitorDetail from "./VisitorDetail"
import VisitorDetail2 from "./VisitorDetail2"
import VisitorDetail3 from "./VisitorDetail3"
import VisitorDetail4 from "./VisitorDetail4"
import ProgresElement from './Progres';
import { z } from "zod";
const mime = require('mime-types')
import { postApiData } from '@/function/api';
import { getCSRF } from '@/function/api';
import Cookies from 'js-cookie'
import Swal from 'sweetalert2'

export default function Form() {
    interface FileData {
        name: string;
        size: number;
    }
    
    const [uploadedFile, setUploadedFile] = useState<FileData | null>(null);
    const [selectBoard, setSelectBoard] = useState(null)
    const [currentStep, setCurrentStep] = useState(1);
    const [selectCountry, setSelectCountry] = useState<null>(null)
    const [validationCountry, setValidationCountry] = useState(true)
    // const [validationSurfing, setValidationSurfing] = useState(true)
    const [validationBoard, setValidationBoard] = useState<boolean>(true)
    const [valudationImage, setValidationImage] = useState<boolean>(true)
    const [messageValidationImage, setMessageValidationImage] = useState<string>('Please upload your identity')
    const [dataBody, setDataBody] = useState<{
        name: any;
        email: any;
        whatsapp_number: any;
        surfing_experience: any;
        visit_date: any;
        desired_board: any;
        verification_photo: any;
    }>({
        name: '',
        email: '',
        whatsapp_number: '',
        surfing_experience: '',
        visit_date: '',
        desired_board: '',
        verification_photo: ''
    });
    const [valueSurfing, setValueSurfing] = useState(0)
    const [validationError, setValidationError] = useState<any>(undefined)
    const [dataBooking, setDataBooking] = useState<object>({})
    const [loading, setLoading] = useState<boolean>(false)


    useEffect(() => {
        const getCSRFToken = async () => {
            try {
                const data  = await getCSRF();
                Cookies.set('csrf_token', data, { expires: 1 })
               
            } catch (error) {
                console.log(error);
            }
        }
        getCSRFToken()
    }, [])


    const formSchema1 = z.object({
        name: z.string().min(3).max(30),
        email: z.string().email({message: 'Invalid email format'}), 
        whatsapp_number: z.string().regex(/^\+[1-9]\d{1,14}$/, {message: 'Use +(country code). Ex: +62812345678'}),
        // country_id: z.number()
    })

    const formSchema2 = z.object({
        visit_date: z.string().date()
    })

    const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2 MB
    const allowedImageExtensions = ['png', 'jpg', 'jpeg'];


    

    const handleBoard = (value:any) => {
        setSelectBoard(() => value)
    }
    const handleCountry = (value:any) => {
        setSelectCountry(value)
    }

    const handleChange = (event: any) => {
        const { name, value } = event?.target;
        setDataBody(prevData => ({
            ...prevData,
            country_id: parseInt(selectCountry ?? '0'),
            surfing_experience: valueSurfing,
            desired_board: selectBoard,
            verification_photo: uploadedFile,
            [name]: value
        }));
    };

    useEffect(() => {
        setDataBody(prevData => ({
            ...prevData,
            desired_board: selectBoard,
            verification_photo: uploadedFile
        }));
    }, [selectBoard, uploadedFile]);
    
    
    const nextStep = async () => {
        setValidationError([])
        if (currentStep < 3) {
            // Validasi menggunakan Zod
            try {
              if(currentStep === 1){
                setValidationCountry(selectCountry !== null ? true : false)
                formSchema1.parse(dataBody); 
                if(selectCountry !== null){
                    setCurrentStep(currentStep + 1);
                }
              }else if(currentStep === 2){
                setValidationBoard(selectBoard !== null ? true : false)
                formSchema2.parse(dataBody); 
                if(selectBoard !== null){
                    setCurrentStep(currentStep + 1);
                }
              }
            } catch (error:any) {
                console.error(error.errors);
                setValidationError(error.errors)
            }
        } 
        else {
            setLoading(true)
            try {
                if (uploadedFile !== null) {
                    // Memeriksa apakah file berukuran lebih kecil dari batas maksimum
                    if (uploadedFile.size > MAX_FILE_SIZE) {
                        setMessageValidationImage('File is too large')
                        setLoading(false)
                    } else {
                        // Memeriksa tipe MIME file
                        const mimeType = mime.lookup(uploadedFile.name);
                        const fileExtension = mimeType ? mime.extension(mimeType) : null;
            
                        // Memeriksa apakah file merupakan gambar dan ekstensinya diizinkan
                        if (fileExtension && allowedImageExtensions.includes(fileExtension)) {
                            const {data, status} = await postApiData({endPoint: 'booking', dataBody: dataBody})
                            if(status == 200 || status == 201){
                                const Toast = Swal.mixin({
                                    toast: true,
                                    position: "top-end",
                                    showConfirmButton: false,
                                    timer: 3000,
                                    timerProgressBar: true,
                                    didOpen: (toast) => {
                                      toast.onmouseenter = Swal.stopTimer;
                                      toast.onmouseleave = Swal.resumeTimer;
                                    }
                                  });
                                  Toast.fire({
                                    icon: "success",
                                    title: "Your book visit request has been recorded."
                                  });
                                setDataBooking(data)
                                setCurrentStep(currentStep + 1)
                                setLoading(false)
                            } 
                        } else {
                            setMessageValidationImage('The file type is not supported or is not an image')
                            setLoading(false)
                        }
                    }
                } else {
                    setValidationImage(false);
                    setLoading(false)
                }
            } catch (error:any) {
                let errorMessage = 'An unexpected error occurred.';
                
                // Memeriksa apakah objek error adalah jenis kesalahan Axios dan properti response tersedia
                if (error.isAxiosError && error.response && error.response.data && error.response.data.message) {
                    errorMessage = error.response.data.message;
                }
            
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    }
                });
            
                Toast.fire({
                    icon: "error",
                    title: errorMessage
                });
                setLoading(false)
            }
            
        }
    };
    
    

    // Fungsi untuk menentukan elemen Visitor Detail berdasarkan langkah saat ini
    const renderVisitorDetail = () => {
        switch (currentStep) {
            case 1:
                return <VisitorDetail validationCountry={validationCountry} handleChange={handleChange} handleCountry={handleCountry} validationError={validationError}/>;
            case 2:
                return <VisitorDetail2 validationBoard={validationBoard} setValue={setValueSurfing} handleChange={handleChange} value={valueSurfing} handleBoard={handleBoard} validationError={validationError}/>;
            case 3:
                return <VisitorDetail3 messageValidationImage={messageValidationImage} uploadedFile={uploadedFile} setUploadedFile={setUploadedFile} validationImage={valudationImage}/>;
            case 4:
                return <VisitorDetail4 dataBooking={dataBooking}/>;
            default:
                return null;
        }
    };

    useEffect(() => {
        let timeout: NodeJS.Timeout; // Menentukan tipe variabel timeout
    
        if (currentStep === 4) {
            timeout = setTimeout(() => {
                setCurrentStep(1); // Kembali ke langkah pertama setelah 10 detik
                setDataBody({
                    name: '',
                    email: '',
                    whatsapp_number: '',
                    surfing_experience: '',
                    visit_date: '',
                    desired_board: '',
                    verification_photo: ''
                })
                setValidationError(undefined)
            }, 10000); // 10 detik
        }
        
        return () => clearTimeout(timeout); // Membersihkan timeout saat komponen unmount
    }, [currentStep]);
    

    return (
        <>
            {renderVisitorDetail()}
            {currentStep < 4 && (
                <button disabled={loading} className={`font-semibold text-black bg-white text-md ${currentStep === 3 && loading ? `flex gap-2 items-center px-10 py-2` : `px-16 py-4`}`} onClick={nextStep}>{currentStep === 3 && loading ? <><ProgresElement/> <p>Book my visit</p></>  : currentStep === 3 ? 'Book my visit' : 'Next'}</button>
            )}
            {currentStep === 4 && (
                <p className="text-base text-gray-400">This form will refresh automatically in 10 seconds</p>
            )}
        </>
    );
}
