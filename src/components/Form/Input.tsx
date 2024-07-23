type InputProps = React.ComponentProps<'input'>;

export function Input({ className, ...inputProps }: InputProps) {
  return (
    <input
      {...inputProps}
      className={`py-2 px-5 text-base border-[1px] border-[#E4E4E4] rounded-md w-full ${className}`}
    />
  );
}
