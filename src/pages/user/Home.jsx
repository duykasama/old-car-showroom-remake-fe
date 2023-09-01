import { useEffect, useState } from "react";
import Hero from "../../components/hero/Hero";
import PrioritizedPosts from "../../components/ui/user/PrioritizedPosts";
import WebInfo from "../../components/ui/user/webinfo/WebInfo";
import { fetchPrioritizedPosts } from "../../lib/api/fetchPosts";

function Home() {
const [priorPosts, setPriorPosts] = useState([]);

  useEffect(() => {
    fetchPriorPosts();
  }, []);

  const fetchPriorPosts = async () => {
    setPriorPosts(await fetchPrioritizedPosts());
  };

  console.log(priorPosts);

  return (
    <main className="flex flex-col justify-between items-center gap-4">
      <Hero />
      <PrioritizedPosts posts={priorPosts} />
      <WebInfo />
    </main>
  );
}

export default Home;
