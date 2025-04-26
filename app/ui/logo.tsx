import { lusitana } from '@/app/ui/fonts/fonts';
import Image from 'next/image';
import logo from '../ui/assets/banner.png';

interface LogoProps {
  width?: number;
  height?: number;
}

export default function Logo({ width, height }: LogoProps) {
  return (
    <div className={`${lusitana.className} `}>
      <Image src={logo} width={width} height={height} alt="logo" />
    </div>
  );
}
