export default function Th(props: { children: React.ReactNode }) {
  return (
    <th scope="col" className="px-6 py-4 font-bold">
      {props.children}
    </th>
  );
}
