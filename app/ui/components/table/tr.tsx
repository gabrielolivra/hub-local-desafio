import { tv } from 'tailwind-variants';

const trVariants = tv({
  base: `w-full border-b-2 border-hub-primary-dark py-3 text-sm hover:bg-hub-secondary-yellow/80`,
  variants: {
    selected: {
      true: 'bg-hub-secondary-yellow',
      false: 'bg-white',
    },
    pointer: {
      true: 'cursor-pointer',
    },
  },
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
    <tr className={trVariants({ selected, pointer })} onClick={onClick}>
      {children}
    </tr>
  );
}
