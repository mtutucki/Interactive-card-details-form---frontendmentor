import useFormattedCardNumber from '../../hooks/useFormatCardNumber';
import './CardFront.css';

type CardFrontProps = {
  cardNumber: string;
};

export function CardFront({ cardNumber }: CardFrontProps) {
  const formattedCardNumber = useFormattedCardNumber(16, cardNumber);

  return (
    <div className='flex flex-col justify-between py-6 px-4 absolute top-[7.9rem] w-[290px] h-[160px] bg-card-background bg-cover rounded-lg'>
      <div className='flex items-center gap-3'>
        <div className='w-8 h-8 bg-white rounded-full'></div>
        <div className='w-4 h-4 rounded-full border-2'></div>
      </div>
      <div className=' text-white '>
        <p className='flex justify-between'>
          {formattedCardNumber
            .split(' ')
            .map((group: string, groupIndex: number) => (
              <span
                key={groupIndex}
                className='flex text-center text-xl tracking-wider'
              >
                {group.split('').map((digit: string, digitIndex: number) => {
                  const absoluteIndex = groupIndex * 4 + digitIndex;
                  return (
                    <span
                      key={absoluteIndex}
                      className={`flex text-center text-xl tracking-wider  ${
                        absoluteIndex == cardNumber.length - 1
                          ? 'animation'
                          : ''
                      }`}
                    >
                      {digit}
                    </span>
                  );
                })}
              </span>
            ))}
        </p>
        <div className='flex justify-between pt-3 text-xs uppercase'>
          <div>
            <span>your</span>
            <span className='ml-1'>name</span>
          </div>
          <div>
            <span>00/00</span>
          </div>
        </div>
      </div>
    </div>
  );
}
