type LabelProps = {
  children: React.ReactNode;
};

export function Label({ children }: LabelProps) {
  return (
    <label className='py-2 text-xs font-bold bg-[#fefefe] uppercase tracking-widest'>
      {children}
    </label>
  );
}
