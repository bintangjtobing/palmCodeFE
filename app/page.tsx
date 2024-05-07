import Image from 'next/image';
import VisitorDetail from '../components/VisitorDetail';

export default function Home() {
  return (
    <>
      <div className="absolute z-20 w-screen h-screen" style={{
        backgroundImage: 'url("/background1.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}></div>
      <div className="absolute z-20 w-screen h-screen top-40" style={{
        backgroundImage: 'url("/background2.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}></div>
      <div className='absolute z-20 w-full bottom-20'>
        {/* <p  className='font-medium text-center text-9xl opacity-5'>BOOK VISIT</p> */}
      </div>
        <div className='container flex items-center justify-center h-full mx-auto'>
          <div className='absolute top-20'>
            <Image className='mx-auto'
              src='/Frame 4.svg'
              width='120'
              height='120'
              />
          </div>
          <div className='z-30 grid grid-cols-3'>
            <Image className='col-span-1'
              src={'/image1.png'}
              width={600}
              height={200}
            />
            <div className='col-span-2 bg-[#020404] text-white p-14'>
              <VisitorDetail/>
            </div>
          </div>
        </div>
    </>
  );
}
