import { useEffect, useState } from "react";
import axios from "../../lib/api/axios";
import SearchBar from "../../components/SearchBar";
import Post from "../../components/post/Post";
import Pagination from "../../components/Pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { faFaceSadTear } from "@fortawesome/free-regular-svg-icons";
import endPoints from "../../data/endPoints.json";

const PAGE_SIZE = 12;

function CarInventory() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageTracker, setCurrentPageTracker] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    setIsLoading(true);

    const getPosts = async () => {
      try {
        const response = await axios.get(endPoints.POSTS, {
          headers: {
            "Content-Type": "application/json",
          },
          params: { pageSize: PAGE_SIZE, offset: currentPage },
          withCredentials: true,
          signal: controller.signal,
        });
        if (isMounted) {
          setPosts(response.data.posts);
          setLastPage(response.data.lastPage);
          await new Promise((r) => setTimeout(r, 300));
          setIsLoading(false);
        }
      } catch (error) {
        console.log("An error occurred: ", error);
      }
    };

    getPosts();
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [currentPage]);

  const handlePaginationSubmit = (event) => {
    event.preventDefault();
    setCurrentPage(currentPageTracker);
    console.log("Mutate current page");
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <main className="grid grid-cols-5 px-20 my-10 gap-6">
      <SearchBar changePosts={setPosts} changeLoadingStatus={setIsLoading} />
      {isLoading ? (
        <div className="col-span-4 w-full h-full flex justify-center items-center">
          <FontAwesomeIcon icon={faSpinner} className="text-5xl animate-spin" />
        </div>
      ) : posts && posts.length > 0 ? (
        <div className="col-span-4 grid grid-cols-4 grid-rows-3 gap-8">
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="col-span-4 flex flex-col justify-center items-center">
          <FontAwesomeIcon
            icon={faFaceSadTear}
            className="text-5xl text-red-500"
          />
          <p className="text-3xl font-light">There is no posts to display</p>
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
