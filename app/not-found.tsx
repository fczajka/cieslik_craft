import Link from 'next/link';
import { siteAssets } from '@/features/home/data/home-content';

export default function NotFound() {
  return (
    <main
      className='flex h-screen w-full flex-col items-center justify-center bg-cover bg-center bg-no-repeat'
      style={{ backgroundImage: `url("${siteAssets.notFound}")` }}
    >
      <div className='flex flex-col items-center justify-center rounded-[10px] bg-[#212121]/90 px-8 max-[767.98px]:px-8 max-[575.98px]:px-4'>
        <p className='text-[96px] text-[#FCFCFC] max-[767.98px]:text-[80px] max-[575.98px]:text-[48px]'>
          ERROR 404
        </p>
        <p className='text-[64px] text-[#FCFCFC] max-[767.98px]:text-[48px] max-[575.98px]:text-[32px]'>
          Page not found
        </p>
        <Link
          className='my-12 rounded-[25px] bg-[#FCFCFC] px-4 py-2 text-[28px] text-[#212121] max-[767.98px]:my-8 max-[767.98px]:text-[24px] max-[575.98px]:my-6.5 max-[575.98px]:text-[16px]'
          href='/'
        >
          Click here to go to the home page
        </Link>
      </div>
    </main>
  );
}
