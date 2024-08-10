import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import Topbar from './components/Topbaar/topbar'
import Home from './pages/Home/Home'
import Single from './pages/single/single'
import Write from './pages/write/write'
import Setting from './pages/setting/setting'
import Login from './pages/login/login'
import Register from './pages/register/register'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
function App() {
  const user =false
  const router = createBrowserRouter([
    {
      path: "/",
      element:<><Topbar /> <Home /></>,
    },
    {
      // user : false ,
      path: "/register",
      element:user ?<Home /> :<Register />,
    },
    {
      path: "/single",
      element: <Single />,
    },
    {
      path: "/Setting",
      element:user?<Setting /> : <Register />,
    },
    {
      path: "/Write",
      element: user ?<Register />:<Write />,
    },
    {
      path: "/Login",
      element:user ?<Home />: <Login />,
    },
    

  ]);
  return (
    <>
  
   <RouterProvider router={router} />
      </>
  )
}

export default App
