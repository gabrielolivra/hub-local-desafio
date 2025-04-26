import { tv } from 'tailwind-variants';

interface TdProps {
  children: React.ReactNode;
  className?: string;
  nowrap?: boolean;
}

const tdVariants = tv({
  base: 'whitespace-nowrap py-1 px-3',
  variants: {
    nowrap: {
      false: 'whitespace-normal',
      true: 'whitespace-nowrap',
    },
  },
});

export default function Td({ className, children, nowrap = true }: TdProps) {
  return (
    <td className={`${tdVariants({ nowrap })} ${className}`}>{children}</td>
  );
}
