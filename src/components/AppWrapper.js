export function AppWrapper({ children, id }) {
  return <div id={id} className="container">{children}</div>;
}