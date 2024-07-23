import { Input } from './Input';
import { Label } from './Label';

export function Form() {
  return (
    <form className='flex flex-col justify-center px-8 bg-[#fefefe] min-h-calc-100vh-240px'>
      <div className='flex flex-col'>
        <Label>cardholder name</Label>
        <Input
          placeholder='e.g. Jane Aplleseed'
          name='cardholder name'
          type='text'
        />
      </div>
      <div className='flex flex-col pt-5'>
        <Label>card number</Label>
        <Input
          placeholder='e.g. 1234 5678 9123 0000'
          name='card number'
          type='number'
        />
      </div>
      <div className='flex flex-col pt-5'>
        <div className='flex'>
          <div className='flex flex-col w-1/2'>
            <Label>exp. date (mm/yy)</Label>
            <div className='flex'>
              <Input
                placeholder='MM'
                name='month'
                className='mr-4'
                type='number'
              />
              <Input placeholder='YY' name='year' type='number' />
            </div>
          </div>
          <div className='flex flex-col w-1/2 ml-3'>
            <Label>cvc</Label>
            <div className='flex'>
              <Input placeholder='eg. 123' name='month' type='number' />
            </div>
          </div>
        </div>
      </div>
      <button
        type='submit'
        className='mt-10 py-3 px-5 w-full text-white  text-xl bg-[#220930] text-center rounded-lg'
        onClick={(e) => e.preventDefault()}
      >
        Confirm
      </button>
    </form>
  );
}
