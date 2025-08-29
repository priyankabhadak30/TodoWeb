import React from 'react'
import Home from './componets/Home/Home'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './componets/About/About'
import Alltodos from './componets/Alltodos/Alltodos'
import Register from './componets/Register'
import Login from './componets/login'
import Layout from './layout/Layout'
import Aboutpage from './pages/Aboutpage'
import PrivateRoutes from './Routes/PrivateRoutes'
import Homepage from './pages/Homepage'
import Alltodospage from './pages/Alltodospage'
import Errorpage from './pages/Errorpage'
import Detailspage from './pages/Detailspage'
function App() {
    const router=createBrowserRouter([{path:'/',element:<PrivateRoutes><Layout/></PrivateRoutes>,errorElement:<Errorpage/>, children:[{path:'/',element:<Homepage/>},{path:'/about',element:<Aboutpage/>},{path:'/alltodos',element:<Alltodospage/>},{path:'/details/:id',element:<Detailspage/>}]},{path:'/reg',element:<Register/>}, { path: '/login', element: <Login /> } ])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
