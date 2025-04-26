export default function Th(props: { children: React.ReactNode }) {
  return (
    <th scope="col" className="p-2 font-bold">
      {props.children}
    </th>
  );
}
