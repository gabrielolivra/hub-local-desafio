export default function Thead(props: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <thead
      className={`rounded-lg text-left text-sm font-normal ${props.className}`}
    >
      {props.children}
    </thead>
  );
}
