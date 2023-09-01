import { Link } from "react-router-dom";

function Service(props) {
  return (
    <div className="flex flex-col justify-start items-center gap-2 p-4 w-72 h-48 bg-slate-200 rounded-md">
      <img src={props.img} />
      <h2 className="font-bold">{props.title}</h2>
      <p className="text-center">{props.description}</p>
    </div>
  );
}

export default Service;
