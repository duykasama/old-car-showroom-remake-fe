import { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar";
import fetchPosts from "../../lib/api/fetchPosts";
import Post from "../../components/post/Post";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faAnglesLeft,
  faAnglesRight,
} from "@fortawesome/free-solid-svg-icons";

function CarInventory() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageTracker, setCurrentPageTracker] = useState(1);
  const [lastPage, setLastPage] = useState(1);

  useEffect(() => {
    getPosts();
    setLastPage(10);
  }, []);

  async function getPosts() {
    setPosts(await fetchPosts(12, 1));
  }

  const handlePaginationSubmit = (event) => {
    event.preventDefault();
    setCurrentPage(currentPageTracker);
    console.log("Mutate current page");
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
  };

  return (
    <main className="grid grid-cols-5 px-20 my-10 gap-6">
      <SearchBar />
      <div className="col-span-4 grid grid-cols-4 grid-rows-3 gap-8">
        {posts && posts.map((post) => <Post key={post.id} post={post} />)}
      </div>
      <nav className="flex gap-4 justify-end items-center col-span-5">
        {currentPage == 1 || (
          <>
            <div className="cursor-pointer hover:scale-110 transition">
              <FontAwesomeIcon icon={faAnglesLeft} />
            </div>
            <div className="cursor-pointer hover:scale-110 transition">
              <FontAwesomeIcon icon={faAngleLeft} />
              <span>Previous</span>
            </div>
          </>
        )}
        <form onSubmit={handlePaginationSubmit} className="w-fit">
          <input
            type="number"
            min={1}
            onChange={(event) => setCurrentPageTracker(event.target.value)}
            value={currentPageTracker}
            className="p-1 w-12"
          />
          <span>of {lastPage}</span>
        </form>
        {currentPage == lastPage || (
          <>
            <div className="cursor-pointer hover:scale-110 transition">
              <span>Next</span>
              <FontAwesomeIcon icon={faAngleRight} />
            </div>
            <div className="cursor-pointer hover:scale-110 transition">
              <FontAwesomeIcon icon={faAnglesRight} />
            </div>
          </>
        )}
      </nav>
    </main>
  );
}

export default CarInventory;
