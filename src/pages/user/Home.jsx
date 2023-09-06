import { useEffect, useState } from "react";
import Hero from "../../components/hero/Hero";
import PrioritizedPosts from "../../components/ui/user/PrioritizedPosts";
import WebInfo from "../../components/ui/user/webinfo/WebInfo";
import fetchPosts from "../../lib/api/fetchPosts";
import useAuth from "../../hooks/useAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

function Home() {
  const [priorPosts, setPriorPosts] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const { auth } = useAuth();

  useEffect(() => {
    setIsloading(true);
    fetchPriorPosts();
    console.log(auth);
  }, []);

  const fetchPriorPosts = async () => {
    setPriorPosts(await fetchPosts(9, 1));
    await new Promise((r) => setTimeout(r, 500));
    setIsloading(false);
  };

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
