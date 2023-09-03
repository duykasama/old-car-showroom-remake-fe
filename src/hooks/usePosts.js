import { useEffect, useState } from "react";
import fetchPosts from "../lib/api/fetchPosts";

export const usePosts = () => {
    const [posts, setPosts] = useState();
    const [lastPage, setLastPage] = useState();

    useEffect(() => {
        fetchPostsFromApi();
        setLastPage(2);
    }, [])

    async function fetchPostsFromApi() {
        setPosts(fetchPosts(12, 1));
    }
}