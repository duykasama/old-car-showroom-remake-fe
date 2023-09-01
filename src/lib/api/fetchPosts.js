import axios from "./axios";

const POSTS_END_POINT = "/posts";
const PRIOR_POSTS_END_POINT = "/posts/prioritized";

async function fetch(endPoint) {
  let result;
  try {
    const response = await axios.get(endPoint, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    result = response.data;
  } catch (error) {
    console.log("An error occurred: ", error);
  }
  return result;
}

export default async function fetchPosts() {
  return await fetch(POSTS_END_POINT);
}

export async function fetchPrioritizedPosts() {
  return await fetch(PRIOR_POSTS_END_POINT);
}
