/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/home/home'
import Plan from './components/Plan/Plan'
import AddOns from './components/AddOns/AddOns'
import Summary from './components/Summary/Summary'
import Thanks from './components/Thanks/Thanks'
import Notfound from './components/Notfound/Notfound'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import LayOut from './components/LayOut/LayOut'
const routes= createBrowserRouter([
  {path:"" ,element :<LayOut/> , children:[
    {index:true, element:<Home/>},
    {path:"home" , element:<Home/>},
    {path:"plan" , element:<Plan/>},
    {path:"addOns" , element:<AddOns/>},
    {path:"summary" , element:<Summary/>},
    {path:"thanks" , element:<Thanks/>},
    {path:"*" , element:<Notfound/>}

  ]}
])


function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App
