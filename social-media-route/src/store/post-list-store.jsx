
import { createContext,useState,useEffect,useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  fetching:false,
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload.data, ...currPostList];
  } 

  else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload.posts
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer( postListReducer,[]); 
  let[fetching,Setfetching]=useState(false)

 
  useEffect(()=>{
    //this method  abort signal to cancel api//
    //  const controller=new AbortController();
  //  const signal=controller.signal;
      Setfetching(true)
    fetch("https://dummyjson.com/posts")
    .then((resp) => resp.json())
    .then((data) => {
       
     addInitialPosts(data.posts);
     Setfetching(false)
   })
   
//     return ()=>{
//        // controller.abort();
// //       // console.log("postlist deactivated")
// //     }
//  },
},[]) 

  const addPost = (data) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
       data
      },
    });
  };

  const addInitialPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
      posts
    }
  }) 
};

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };
  
 






      
  return (
    <PostList.Provider value={{ postList, addPost,addInitialPosts, fetching,deletePost }}>
      {children}
    </PostList.Provider>
  );
};


// const DEFAULT_POST_LIST = [
//   {
//     id: "1",
//     title: "Going to Mumbai",
//     body: "Hi Friends, I am going to Mumbai for my vacations. Hope to enjoy a lot. Peace out.",
//     reactions: 2,
//     userId: "user-9",
//     tags: ["vacation", "Mumbai", "Enjoying"],
//   },
//   {
//     id: "2",
//     title: "Paas ho bhai",
//     body: "4 saal ki masti k baad bhi ho gaye hain paas. Hard to believe.",
//     reactions: 15,
//     userId: "user-12",
//     tags: ["Graduating", "Unbelievable"],
//   },
// ];

export default PostListProvider;
