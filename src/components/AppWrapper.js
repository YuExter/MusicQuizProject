export function AppWrapper({ children, id }) {
  return <div id={id} className="container d-flex flex-column align-items-center mb-3">{children}</div>;
}