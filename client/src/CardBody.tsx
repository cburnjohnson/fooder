import placeholderImage from './assets/placeholder.webp';

export default function CardBody() {
  return (
    <div className='mt-4'>
      <div>
        <img
          src={placeholderImage}
          alt=''
          className='w-full max-w-full rounded border-accent border-2'
        />
      </div>

      <div className='flex gap-12 justify-center mt-2'>
        <h3 className='uppercase font-bold text-black text-lg'>Rating</h3>
        <p>4.5</p>
      </div>

      <div className='mt-3 text-center'>
        <h3 className='uppercase font-bold text-black text-base'>
          Description
        </h3>
        <p className='text-sm'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          convallis libero in dui sollicitudin, auctor tincidunt ligula
          fermentum.
        </p>
      </div>

      <div className='mt-6 flex text-center justify-between '>
        <div className='flex-1'>
          <h3 className='uppercase font-bold text-black text-sm'>Address</h3>
          <p className='text-xs'>1234 Main St</p>
        </div>

        <div className='flex-1'>
          <h3 className='uppercase font-bold text-black text-sm'>Hours</h3>
          <p className='text-xs'>Open - Closes at 9PM</p>
        </div>

        <div className='flex-1'>
          <h3 className='uppercase font-bold text-black text-sm'>
            Phone Number
          </h3>
          <p className='text-xs'>541-456-7890</p>
        </div>
      </div>
    </div>
  );
}
