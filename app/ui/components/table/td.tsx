import { tv } from 'tailwind-variants';

interface TdProps {
  children: React.ReactNode;
  className?: string;
  nowrap?: boolean;
}

const tdVariants = tv({
  base: 'whitespace-nowrap px-10 py-4',
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
