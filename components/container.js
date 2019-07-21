export default function Container(props) {
  return (
    <div className="container flex-grow mx-auto px-4 w-3/5">
      {props.children}
    </div>
  );
}
