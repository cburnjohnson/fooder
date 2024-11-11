import placeholderImage from './assets/placeholder.webp';

export default function Card() {
  return (
    <div className='bg-light-100 max-w-full w-96 mx-auto mt-14 rounded-md border-2 border-accent py-5 px-4 f'>
      <h2 className='text-5xl text-accent uppercase text-center font-bold'>
        MCDONALDS
      </h2>

      <div className='mt-4'>
        <div>
          <img src={placeholderImage} alt='' className='w-full max-w-full rounded border-accent border-2' />
        </div>
      </div>
    </div>
  );
}
