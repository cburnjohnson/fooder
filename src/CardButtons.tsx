export default function CardButtons({ skipRestaurant }) {
  return (
    <div className='mt-6 flex justify-center gap-6'>
      <button className='bg-dark-100 text-white uppercase font-display px-4 pt-2.5 pb-2 rounded-md text-xl w-28'>Menu</button>
      <button className='bg-accent text-white uppercase font-display px-4 pt-2.5 pb-2 rounded-md text-xl w-28' onClick={skipRestaurant}>
        Pass
      </button>
    </div>
  );
}
