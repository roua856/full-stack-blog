import { Link } from "react-router-dom"
import Image from "./Image"
import PostListItem from "./PostListItem"
import { useInfiniteQuery, useQuery } from "@tanstack/react-query"
import axios from "axios"

const fetchPosts=async(pageParam)=>{
    const res=await axios.get(`${import.meta.env.VITE_API_URL}/posts`, {
        params:{page: pageParam},
    });
    return res.data;
}
const PostList = () => {

    const {
        data,
        error,
        fetchNextPage,
        hasNextPage,
        isFetching,
        isFetchingNextPage,
        status,
      } = useInfiniteQuery({
        queryKey: ['posts'],
        queryFn: ({pageParam=1})=>fetchPosts(pageParam),
        initialPageParam: 0,
        getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
      })
    
      if (status === "loading") return 'Loading...';
    
      if (status === "error") return 'Something went wrong!';
      console.log(data)

    return (
        <div className='flex flex-col gap-12 mb-8'>
            <PostListItem/>
            
            <PostListItem/>
            <PostListItem/>
            <PostListItem/>
            <PostListItem/>
            <PostListItem/>
            <PostListItem/> 
            <PostListItem/>
            <PostListItem/>
            <PostListItem/>
            <PostListItem/>
        </div>
    )
}

export default PostList