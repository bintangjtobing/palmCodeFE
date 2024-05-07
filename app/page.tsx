import Image from 'next/image';
import VisitorDetail from '../components/VisitorDetail';

export default function Home() {
  return (
    <>
      <div className="h-screen w-screen absolute z-20" style={{
        backgroundImage: 'url("/background1.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}></div>
      <div className="h-screen w-screen absolute top-40 z-20" style={{
        backgroundImage: 'url("/background2.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}></div>
      <div className='absolute w-full bottom-20 z-20'>
        <p  className='text-9xl text-center font-medium opacity-5'>BOOK VISIT</p>
      </div>
        <div className='container mx-auto flex items-center justify-center h-full'>
          <div className='absolute top-20'>
            <Image
              className='mx-auto'
              src='/Frame 4.svg'
              width='100'
              height='100'
              />
          </div>
          <div className='grid grid-cols-3 z-30'>
            <Image
              className='col-span-1'
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
