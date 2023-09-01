import { useEffect, useState } from "react";
import Hero from "../../components/hero/Hero";
import PrioritizedPosts from "../../components/ui/user/PrioritizedPosts";
import WebInfo from "../../components/ui/user/webinfo/WebInfo";
import axios from "../../lib/api/axios";
import { fetchPrioritizedPosts } from "../../lib/api/fetchPosts";

const AUTH_END_POINT = "/auth";
const POSTS_END_POINT = "/posts";

const email = "email@gmail.com";
const password = "123";

function Home() {
const [priorPosts, setPriorPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    // try {
    //   // const response = await axios.get(
    //   //   POSTS_END_POINT,
    //   //   // JSON.stringify({ email, password }),
    //   //   {
    //   //     headers: {
    //   //       "Content-Type": "application/json",
    //   //     },
    //   //     // withCredentials: true,
    //   //   }
    //   // );

    //   // const response = await axios.post(
    //   //   AUTH_END_POINT,
    //   //   JSON.stringify({ Email: email, Password: password }),
    //   //   {
    //   //     headers: {
    //   //       "Content-Type": "application/json"
    //   //     },
    //   //     withCredentials: true,
    //   //   }
    //   // );

    //   // console.log(JSON.stringify(response?.data));
    //   // const accessToken = response?.data?.token;
    //   // console.log(token);

    // } catch (error) {
    //   console.log(error.message);
    // }
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
