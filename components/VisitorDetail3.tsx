'use client'
import { useState, useRef } from 'react';

export default function VisitorDetail3() {
    const [dragging, setDragging] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);
    interface FileData {
        name: string;
        size: number;
    }
    
    const [uploadedFile, setUploadedFile] = useState<FileData | undefined>(undefined);
    

    const handleDrop = (e:any) => {
        e.preventDefault();
        setDragging(false);
        const file = e.dataTransfer.files[0];
        console.log('File yang diunggah:', file);
        // Simpan informasi file yang diunggah
        setUploadedFile(file);
    };

    const handleDragOver = (e:any) => {
        e.preventDefault();
        setDragging(true);
    };

    const handleDragLeave = () => {
        setDragging(false);
    };

    const handleAreaClick = () => {
        fileInputRef.current!.click(); // Operator non-null assertion (!) digunakan untuk memberi tahu TypeScript bahwa nilai tersebut pasti tidak null atau undefined
    };
    
    

    const handleFileInputChange = (e:any) => {
        const file = e.target.files[0];
        console.log('File yang diunggah:', file);
        // Simpan informasi file yang diunggah
        setUploadedFile(file);
    };

    return (
        <>
            <h1 className='mb-5 text-5xl'>Book Your Visit</h1>
            <p className='text-sm'>3/3 VISITOR DETAILS</p>
            <form className="grid grid-cols-2 mt-12 mb-12 gap-x-10 gap-y-14"
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}>
                <p className="col-span-2">Help us verify your identity by uploading a photo of your ID/KTP or Passport</p>
                <div className={`bg-[#1A1A1A] p-5 col-span-2 cursor-pointer ${dragging ? 'border-dashed border-2 border-blue-500' : ''}`}
                    onClick={handleAreaClick}>
                    {uploadedFile ? (
                        <div className="flex justify-between items-center">
                            <div className='flex gap-5 items-center'>
                                <svg className="w-6 h-6 text-[#BAFF00] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M10 3v4a1 1 0 0 1-1 1H5m14-4v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1Z"/>
                                </svg>
                                <div className='text-left'>
                                    <p className="text-md font-semibold">{uploadedFile.name}</p>
                                    <p className="text-[#6A6A6A]">{(uploadedFile.size / 1024).toFixed(2)} KB</p>
                                </div>
                            </div>
                            <svg onClick={() => setUploadedFile(undefined)} className="w-6 h-6 text-red-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6"/>
                            </svg>

                        </div>
                    ) : (
                        <>
                            <div className='text-center'>
                                <p className="font-bold text-xl">Drag & Drop</p>
                                <p className="my-5 text-[#6A6A6A]">or select file from device max. 2MB</p>
                                <input ref={fileInputRef} className="hidden" type="file" onChange={handleFileInputChange} />
                                <p className="underline text-xl">Upload</p>
                            </div>
                        </>
                    )}
                </div>
            </form>
        </>
    );
}