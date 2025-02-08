/* eslint-disable no-unused-vars */
import React ,{useEffect,useState}from 'react'
import styles from './LayOut.module.css'
import SideBar from '../Sidebar/Sidebar'
import { Outlet } from 'react-router-dom';
export default function LayOut() {
let [count, setCount] = useState(0);
  return (
    <>
 <div className="lg:flex">
 <SideBar/>

<Outlet/>
 </div>
    </>
  )
}
