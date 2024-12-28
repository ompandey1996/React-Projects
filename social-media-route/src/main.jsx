import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import {RouterProvider,createBrowserRouter } from "react-router-dom"
import App from "./routes/App.jsx"
import CreatePost from './components/CreatePost.jsx';
import PostList from './components/PostList.jsx';

//to display which link   will display which page we need to give CREATEBROWSERROUTER 
   
//  layout routs as the name suggest here all  layout raoutes will be defined     this is done because when we changing path   only that page is   showing but we  also that every page should display with header footer everytime//
  const router=createBrowserRouter([
    // layout routes as multiple path defined of layout
    {path:"/",element:<App/>,
      //   here  in app  we need to use outlet outlet helps in showing content based on route
    children:[
      {path:"/",element:<PostList/>},
        {path:"/create-post",element:<CreatePost/>},
    ]    
  }
  ])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*  we want different different url for different web pages   for this we need rouder provider */}
    <RouterProvider router={router}/>
  </StrictMode>,
)
