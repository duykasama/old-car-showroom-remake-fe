import Hero from "../../components/Hero";
import PrioritizedPosts from "../../components/ui/user/PrioritizedPosts";
import WebInfo from "../../components/ui/user/WebInfo";

function Home() {
  return (
    <main className="bg-slate-800 flex flex-col justify-center items-center gap-4">
      <Hero />
      <PrioritizedPosts />
      <WebInfo />
    </main>
  );
}

export default Home;
