import { CardBack } from './components/Card/CardBack';

function App() {
  return (
    <>
      <div className='p-10 relative min-h-[30vh] bg-mobile-background bg-center bg-cover'>
        <div className='flex justify-end'>
          <CardBack />
        </div>
      </div>
    </>
  );
}

export default App;
