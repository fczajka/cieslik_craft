import type { BoatSummary } from '../data/home-content';
import { boatSummaries } from '../data/home-content';

function BoatCard({ boat }: { boat: BoatSummary }) {
  return (
    <div>
      <div className='flex w-full justify-center'>
        <a
          href={boat.href}
          target='_blank'
          rel='noopener noreferrer'
          aria-label={boat.ariaLabel}
          className='group relative block h-26.25 w-80 bg-center bg-cover transition-all duration-400 ease-in min-[2560px]:h-32.5 min-[2560px]:w-100 max-[767.98px]:h-22.5 max-[767.98px]:w-68.75'
        >
          <span
            className='absolute inset-0 bg-center bg-cover transition-opacity duration-400 ease-in group-hover:opacity-0'
            style={{ backgroundImage: `url("${boat.mutedImage}")` }}
          />
          <span
            className='absolute inset-0 bg-center bg-cover opacity-0 transition-opacity duration-400 ease-in group-hover:opacity-100'
            style={{ backgroundImage: `url("${boat.colorImage}")` }}
          />
        </a>
      </div>
      <div className='w-full text-center'>
        <h2 className='mt-2.5 text-[1.5em] min-[2560px]:text-[40px] max-[575.98px]:text-[16px]'>
          {boat.name}
        </h2>
        {boat.description.map((line) => (
          <h3
            key={line}
            className='my-3 text-[1.17em] min-[2560px]:text-[30px] max-[575.98px]:text-[14px]'
          >
            {line}
          </h3>
        ))}
      </div>
    </div>
  );
}

export function HomeBoats() {
  return (
    <section className='w-full bg-[#FCFCFC] px-2.5 py-8.75'>
      <h2 className='mb-6.25 block w-full text-center text-[32px] min-[2560px]:text-[48px] max-[575.98px]:text-[18px]'>
        Boats from Cieslik Craft&apos;s shipyard:
      </h2>
      <div className='flex h-full w-full flex-row items-center justify-around max-[991.98px]:flex-col [&>*:nth-child(2)]:max-[991.98px]:mt-6.25'>
        {boatSummaries.map((boat) => (
          <BoatCard key={boat.name} boat={boat} />
        ))}
      </div>
    </section>
  );
}
