import { useState } from 'react';
import { CardBack } from './components/Card/CardBack';
import { CardFront } from './components/Card/CardFront';

function App() {
  const [cardNumber] = useState('2233322222333355');
  const [cvc] = useState('232');
  return (
    <>
      <div className='flex px-5 pt-8 pb-12 flex-col justify-center relative bg-mobile-background  bg-cover'>
        <div className='flex justify-end'>
          <CardBack cvc={cvc} />
        </div>

        <div className='flex'>
          <CardFront cardNumber={cardNumber} />
        </div>
      </div>
    </>
  );
}

export default App;
