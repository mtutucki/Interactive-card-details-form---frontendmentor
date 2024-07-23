import useFormattedCardNumber from "../../../hooks/useFormatCardNumber";


type CardBackProps = {
  cvc: string;
};

export function CardBack({ cvc }: CardBackProps) {
  const formattedCardNumber = useFormattedCardNumber(3, cvc);

  return (
    <div className='bg-[#FAFAFC] w-[290px] h-[160px] min-h-full rounded-lg'>
      <div className='h-[10%]'></div>
      <div className='h-1/5 bg-[#2F2F2F]'></div>
      <div className='mx-5 mt-[5%] h-1/5 '>
        <div className='flex justify-end items-center px-5 w-full h-full bg-[#ADB5BF] rounded-md'>
          <p className='text-white text-xs'>
            {formattedCardNumber.split('').map((digit, index) => (
              <span
                className={`${index === cvc.length - 1 ? 'animation' : ''}`}
                key={index}
              >
                {digit}
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
}
