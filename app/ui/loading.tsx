import Image from 'next/image';
import Spinner from './assets/Spinner.gif';

export function LoadingComponent() {
  return (
    <div className="w-full h-full fixed top-0 left-0 bg-hub-primary-light/50 opacity-75 z-50">
      <div className="flex justify-center items-center mt-[50vh]">
        <Image alt="" width={100} height={100} src={Spinner} />
      </div>
    </div>
  );
}
