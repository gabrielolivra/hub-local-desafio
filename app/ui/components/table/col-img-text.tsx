import Image from 'next/image';
interface imageTable {
  image_url: string;
  width: number;
  height: number;
  user: string;
}

export default function ImageText({
  image_url,
  width,
  height,
  user,
}: imageTable) {
  return (
    <div className="flex items-center gap-3">
      <Image
        src={image_url}
        className="rounded-full"
        width={width}
        height={height}
        alt={`${user}'s profile picture`}
      />
      <p>{user}</p>
    </div>
  );
}
