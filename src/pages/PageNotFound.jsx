import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

function PageNotFound() {
  return (
    <main className="flex flex-col justify-center items-center gap-4 h-96 my-32">
      <h2 className="font-semibold">OOPS! PAGE NOT FOUND</h2>
      <div className="text-9xl font-extrabold">404</div>
      <h1 className="text-2xl font-bold">
        WE ARE SORRY, BUT THE PAGE YOU REQUESTED WAS NOT FOUND
      </h1>
      <button onClick={() => history.back()} className="py-2 px-4 bg-slate-800 rounded text-white font-semibold flex items-center gap-2 hover:scale-110 hover:shadow-slate-700 shadow-md transition">
        <FontAwesomeIcon icon={faArrowLeftLong} />
        <span>Go back</span>
      </button>
    </main>
  );
}

export default PageNotFound;
