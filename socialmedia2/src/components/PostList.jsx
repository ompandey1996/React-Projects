import { useContext, useEffect, useState} from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelComeMessage from "./WelComeMessage";
import LoadingSpinner from "./LoadingSpinner";
const PostList = () => {
  const { postList,fetching } = useContext(PostListData);
  
   
//    useEffect(()=>{
//     //this method  abort signal to cancel api//
//     //  const controller=new AbortController();
//     //  const signal=controller.signal;
//       Setfetching(true)
//      fetch("https://dummyjson.com/posts")
//     .then((resp) => resp.json())
//     .then((data) => {
        
//       addInitialPosts(data.posts);
//       Setfetching(false)
//     })
    
//     return ()=>{
//       // controller.abort();
//       // console.log("postlist deactivated")
//     }
// },[])
   

   
  return (
    <>
    {fetching && <LoadingSpinner/>}
    { !fetching && postList.length===0 && <WelComeMessage/>}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostList;