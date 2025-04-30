import Image from 'next/image';
import logo from '../ui/assets/banner.png';

interface LogoProps {
  width?: number;
  height?: number;
}

export default function Logo({ width, height }: LogoProps) {
  return (
    <div>
      <Image src={logo} width={width} height={height} alt="logo" />
    </div>
  );
}
