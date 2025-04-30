export default function Table(props: { children: React.ReactNode, classProps?: string }) {
  return <table className={`${props.classProps}min-w-full text-gray-900 `}>{props.children}</table>;
}
