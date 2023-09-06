import { useEffect, useState } from "react";
import Hero from "../../components/hero/Hero";
import PrioritizedPosts from "../../components/ui/user/PrioritizedPosts";
import WebInfo from "../../components/ui/user/webinfo/WebInfo";
import fetchPosts from "../../lib/api/fetchPosts";
import useAuth from "../../hooks/useAuth";

function Home() {
  const [priorPosts, setPriorPosts] = useState([]);
  const {auth} = useAuth();

  useEffect(() => {
    fetchPriorPosts();
    console.log(auth);
  }, []);

  const fetchPriorPosts = async () => {
    setPriorPosts(await fetchPosts(9, 1));
  };

  return (
    <main className="flex flex-col justify-between items-center gap-28">
      <Hero />
      <PrioritizedPosts posts={priorPosts} />
      <WebInfo />
    </main>
  );
}

export default Home;
