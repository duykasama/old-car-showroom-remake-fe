import axios from "./axios";

const POSTS_END_POINT = "/posts";
const LAST_PAGE_END_PONIT = "/posts/last-page";

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

export default async function fetchPosts(pageSize, offset) {
  try {
    const response = await axios.get(POSTS_END_POINT, {
      headers: {
        "Content-Type": "application/json",
      },
      params: { pageSize, offset },
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.log("An error occurred: ", error);
  }
}

export async function fetchLastPage(pageSize) {
  try {
    const response = await axios.get(LAST_PAGE_END_PONIT, {
      headers: {
        "Content-Type": "application/json",
      },
      params: { pageSize },
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.log("An error occurred: ", error);
  }
}
