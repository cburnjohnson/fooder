import Navbar from './Navbar';
import Card from './Card';
// import Burger from './assets/burger.svg';

function App() {
  return (
    <div className='bg-dark-100 h-dvh'>
      <Navbar />

      <div className='absolute w-full h-full background'></div>

      <main className='relative z-10'>
        <Card />
      </main>
    </div>
  );
}

export default App;
