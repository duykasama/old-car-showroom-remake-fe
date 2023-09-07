import axios from "./axios";

const POSTS_END_POINT = "/posts";
const LAST_PAGE_END_POINT = "/posts/last-page";
const SEARCH_END_POINT = "/posts/search";

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

export default async function fetchPosts(pageSize, offset, controllerSignal) {
  try {
    const response = await axios.get(POSTS_END_POINT, {
      headers: {
        "Content-Type": "application/json",
      },
      params: { pageSize, offset },
      withCredentials: true,
      signal: controllerSignal
    });
    return response.data;
  } catch (error) {
    console.log("An error occurred: ", error);
  }
}

export async function fetchLastPage(pageSize) {
  try {
    const response = await axios.get(LAST_PAGE_END_POINT, {
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

export async function searchPosts(pageSize, offset, keyword){
  try {
    const response = await axios.get(SEARCH_END_POINT, {
      headers: {
        "Content-Type": "application/json",
      },
      params: { pageSize, offset, keyword },
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.log("An error occurred: ", error);
  }
}