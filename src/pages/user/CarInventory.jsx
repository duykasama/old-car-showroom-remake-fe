import { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar";
import fetchPosts, { fetchLastPage } from "../../lib/api/fetchPosts";
import Post from "../../components/post/Post";
import Pagination from "../../components/Pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const PAGE_SIZE = 12;

function CarInventory() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageTracker, setCurrentPageTracker] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getPosts(currentPage);

    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [currentPage]);

  async function getPosts(offset) {
    setPosts(await fetchPosts(PAGE_SIZE, offset));
    setLastPage(await fetchLastPage(PAGE_SIZE));
    await new Promise((r) => setTimeout(r, 500));
    setIsLoading(false);
  }

  const handlePaginationSubmit = (event) => {
    event.preventDefault();
    setCurrentPage(currentPageTracker);
    console.log("Mutate current page");
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <main className="grid grid-cols-5 px-20 my-10 gap-6">
      <SearchBar changePosts={setPosts} />
      {isLoading && (
        <div className="col-span-4 w-full h-full flex justify-center items-center">
          <FontAwesomeIcon icon={faSpinner} className="text-5xl animate-spin" />
        </div>
      )}
      {posts && posts.length > 0 && !isLoading ? (
        <div className="col-span-4 grid grid-cols-4 grid-rows-3 gap-8">
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="col-span-4 grid grid-cols-4 grid-rows-3 gap-8">
          There is no posts
        </div>
      )}
      <div className="col-span-5">
        <Pagination
          handlePaginationSubmit={handlePaginationSubmit}
          currentPage={currentPage}
          currentPageTracker={currentPage}
          lastPage={lastPage}
          goPrev={() => setCurrentPage((prevState) => prevState - 1)}
          goNext={() => setCurrentPage((prevState) => prevState + 1)}
          goToStart={() => setCurrentPage(1)}
          goToEnd={() => setCurrentPage(lastPage)}
        />
      </div>
    </main>
  );
}

export default CarInventory;
