import Image from 'next/image';


interface LogoProps {
  width?: number;
  height?: number;
}

export default function Logo({ width, height }: LogoProps) {
  return (
    <div>
      <Image src={''} width={width} height={height} alt="logo" />
    </div>
  );
}
