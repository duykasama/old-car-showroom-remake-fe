import { useEffect, useState } from "react";
import Hero from "../../components/hero/Hero";
import PrioritizedPosts from "../../components/ui/user/PrioritizedPosts";
import WebInfo from "../../components/ui/user/webinfo/WebInfo";
import axios from "../../lib/api/axios";
import endPoints from "../../data/endPoints.json"
import useAuth from "../../hooks/useAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

function Home() {
  const [priorPosts, setPriorPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { auth } = useAuth();

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
          params: { pageSize: 9, offset: 1 },
          withCredentials: true,
          signal: controller.signal,
        });
        if (isMounted) {
          setPriorPosts(response.data.posts);
          await new Promise((r) => setTimeout(r, 300));
          setIsLoading(false);
        }
      } catch (error) {
        console.log("An error occurred: ", error);
      }
    };

    getPosts();

    console.log(auth);

    return () => {
      isMounted = false;
      controller.abort();
    }
  }, []);

  return (
    <main className="flex flex-col justify-between items-center gap-28">
      <Hero />
      {isLoading ? (
        <FontAwesomeIcon icon={faSpinner} className="text-5xl animate-spin" />
      ) : (
        <PrioritizedPosts posts={priorPosts} />
      )}

      <WebInfo />
    </main>
  );
}

export default Home;
