export default function Tr({
  children,
  onClick,
}: {
  children: React.ReactNode;
  selected?: boolean;
  onClick?: VoidFunction;
  pointer?: boolean;
}) {
  return (
    <tr className='w-full border-b-2 px-6 py-6 text-sm' onClick={onClick}>
      {children}
    </tr>
  );
}
