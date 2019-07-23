export default function Container(props) {
  return (
    <div className="container flex-grow mx-auto px-4 w-full md:w-3/5">
      {props.children}
    </div>
  );
}
