import { useState, useEffect, useCallback } from 'react';

const useFormattedCardNumber = (nOfNumbers: number, cardNumber: string) => {
  const [formattedCardNumber, setFormattedCardNumber] = useState('');

  const formatCardNumber = useCallback(
    (numberString: string) => {
      const cleanedNumber = numberString.replace(/[^\d]/g, '');
      const paddedNumber = cleanedNumber.padEnd(nOfNumbers, '0');
      const formattedNumber = paddedNumber.match(/.{1,4}/g)?.join(' ') || '';
      return formattedNumber;
    },
    [nOfNumbers]
  );

  useEffect(() => {
    setFormattedCardNumber(formatCardNumber(cardNumber));
  }, [cardNumber, formatCardNumber]);

  return formattedCardNumber;
};

export default useFormattedCardNumber;
