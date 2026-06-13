export function Footer() {
  return (
    <footer className='flex min-h-[10vh] bg-[#FCFCFC] max-[992.1px]:mb-[10vh] max-[992.1px]:flex-col max-[992.1px]:items-center max-[992.1px]:justify-around'>
      <div className='flex w-[70%] items-center justify-center text-[32px] min-[2560px]:text-[48px] max-[1200px]:text-[20px] max-[992.1px]:w-full max-[992.1px]:text-[22px] max-[575.98px]:py-1 max-[575.98px]:text-[12px]'>
        Made in Poland with passion, precision & performance
      </div>
      <div className='flex w-[30%] flex-col items-center justify-center text-[22px] min-[2560px]:text-[24px] max-[1200px]:text-[18px] max-[992.1px]:w-full max-[575.98px]:py-1 max-[575.98px]:text-[12px]'>
        <a href='tel:+48792525952'>+48 792 525 952</a>
        <a href='mailto:cieslikcraft@gmail.com'>cieslikcraft@gmail.com</a>
      </div>
    </footer>
  );
}
