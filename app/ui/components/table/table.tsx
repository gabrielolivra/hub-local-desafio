export default function Table(props: { children: React.ReactNode }) {
  return <table className="min-w-full text-gray-900">{props.children}</table>;
}
