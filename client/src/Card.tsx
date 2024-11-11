import CardBody from './CardBody';

export default function Card() {
  return (
    <div className='bg-light-100 max-w-full w-96 mx-auto mt-14 rounded-md border-2 border-accent py-5 px-4 f'>
      <h2 className='text-5xl text-accent uppercase text-center font-bold'>
        MCDONALDS
      </h2>

      <CardBody />
    </div>
  );
}
