import { tv } from 'tailwind-variants';

const trVariants = tv({
  base: `w-full border-b-2 flex justify-between py-3 text-sm`,
});

export default function Tr({
  children,
  selected,
  onClick,
  pointer,
}: {
  children: React.ReactNode;
  selected?: boolean;
  onClick?: VoidFunction;
  pointer?: boolean;
}) {
  return (
    <tr className={'w-full border-b-2 flex justify-between py-3 text-sm'} onClick={onClick}>
      {children}
    </tr>
  );
}
