import { faAngleLeft, faAngleRight, faAnglesLeft, faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Pagination({handlePaginationSubmit, currentPage, lastPage, goPrev, goNext, goToStart, goToEnd}) {
  return (
    <nav className="flex gap-4 justify-end items-center">
      {currentPage == 1 || (
        <>
          <div onClick={goToStart} className="cursor-pointer hover:scale-110 transition">
            <FontAwesomeIcon icon={faAnglesLeft} />
          </div>
          <div onClick={goPrev} className="cursor-pointer hover:scale-110 transition">
            <FontAwesomeIcon icon={faAngleLeft} />
            <span>Previous</span>
          </div>
        </>
      )}
      <form onSubmit={handlePaginationSubmit} className="w-fit">
        <input
          type="number"
          min={1}
          onChange={(event) => console.log(event.target.value)}
          defaultValue={currentPage}
          className="p-1 w-12"
        />
        <span>of {lastPage}</span>
      </form>
      {currentPage == lastPage || (
        <>
          <div onClick={goNext} className="cursor-pointer hover:scale-110 transition">
            <span>Next</span>
            <FontAwesomeIcon icon={faAngleRight} />
          </div>
          <div onClick={goToEnd} className="cursor-pointer hover:scale-110 transition">
            <FontAwesomeIcon icon={faAnglesRight} />
          </div>
        </>
      )}
    </nav>
  );
}

export default Pagination;
