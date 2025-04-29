export default function Th(props: { children: React.ReactNode }) {
  return (
    <th scope="col" className="px-10 font-bold">
      {props.children}
    </th>
  );
}
