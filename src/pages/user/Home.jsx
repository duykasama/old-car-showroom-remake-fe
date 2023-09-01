import { useEffect } from "react";
import Hero from "../../components/hero/Hero";
import PrioritizedPosts from "../../components/ui/user/PrioritizedPosts";
import WebInfo from "../../components/ui/user/webinfo/WebInfo";
// import { fetchPosts } from "../../lib/apiCaller";

function Home() {
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = () => {
    fetch("https://localhost:44345/WeatherForecast")
      .then((resp) => resp.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("An error occurred: ", error.message));
      // const result = fetchPosts();
      // console.log(result);
  };

  return (
    <main className="flex flex-col justify-between items-center gap-4">
      <Hero />
      <PrioritizedPosts />
      <WebInfo />
    </main>
  );
}

export default Home;
