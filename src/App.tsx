import { useState } from 'react';
import { CardBack } from './components/Card/CardBack/CardBack';
import { CardFront } from './components/Card/CardFront/CardFront';
import { Form } from './components/Form/Form';

function App() {
  const [cardNumber] = useState('');
  const [cvc] = useState('0');
  return (
    <>
      <div className='flex px-8 pt-8 pb-12 flex-col justify-center relative bg-mobile-background  bg-cover'>
        <div className='flex justify-end'>
          <CardBack cvc={cvc} />
        </div>
        <div className='flex'>
          <CardFront cardNumber={cardNumber} />
        </div>
      </div>
      <Form />
    </>
  );
}

export default App;
