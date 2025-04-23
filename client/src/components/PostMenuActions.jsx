import {useUser, useAuth} from "@clerk/clerk-react";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";

const PostMenuActions= ({post}) => {
    const {user} = useUser();
    const {getToken} = useAuth();

    const {isPending, error, data:savedPosts} = useQuery({
        queryKey:["savedPosts"],
        queryFn: async ()=>{
            const token=await getToken()
            return axios.get(`${import.meta.env.VITE_API_URL}/users/saved`,{
                headers:{
                    Authorization: `Bearer ${token}`,
                },
            });
        },
    });

    const isSaved = savedPosts?.data?.some(p=>p===post._id) || false ;


    const deleteMutation = useMutation({
        muattaionFn: async ()=>{
            const token = getToken();
            return axios.delete(`${import.meta.env.VITE_API_URL}/posts/${post._id}`)
        }
    });

    return (
        <div className=''>
            <h1 className="mt-8 mb-8 mb-4 text-sm font-medium">Actions</h1>
            {isPending ? "Loading..." : error ? "Saved post fetching failed!": (<div className="flex items-center gap-2 py-2 text-sm cursor-pointer">
            <svg
                       xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 48 48"
                       width="20px"
                       height="20px"
                
                    >
                       <path
                       d="M12 4c10.3 4 9 5.3 9 7v34l15-9 15 9V7c0-1.7-1.3-3-3-3H12z"
                       stock="black"
                       strokeWidth="2"
                       fill={isSaved ? "black" : "none"}
                       />
                    </svg> 
                    <span>Save this Post</span>
            </div>)}
            { user && post.user.username === user.username &&
                (<div className="flex items-center gap-2 py-2 text-sm cursor-pointer">
             <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="pink"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                width="20px"
                height="20px"
                >
                <polyline points="3 6 5 6 21 6" />
                <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                <path d="M10 11v6" />
                <path d="M14 11v6" />
                <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
                </svg>
                    <span>Delete this Post</span>
            </div>)}
            
            

        </div>
    );
};

export default PostMenuActions 

