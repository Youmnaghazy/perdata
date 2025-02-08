/* eslint-disable no-unused-vars */
import React ,{useEffect,useState}from 'react'
import styles from './Sidebar.module.css'
import { Link } from 'react-router-dom';
export default function Sidebar() {
let [count, setCount] = useState(0);
  return (
    <div>
      <div
  className="relative side flex h-[calc(100vh)] w-full max-w-[20rem] sm:max-w-[40rem] max-sm:max-w-[40rem] flex-col rounded-xl  bg-clip-border p-4 text-white shadow-xl shadow-blue-gray-900/5">
  <div className="p-4 mb-2">

  </div>
  <nav className="flex min-w-[240px] flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
    <Link to="home"
      className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
      <div className="grid mr-4 place-items-center">
        <div className="w-8 h-8 text-white border border-spacing-1 rounded-full flex items-center justify-center">
         1
        </div>
      </div>
      YOUR INFO
    </Link>
    <Link to="plan"
      className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
      <div className="grid mr-4 place-items-center">
      <div className="w-8 h-8 text-white border border-spacing-1 rounded-full flex items-center justify-center">
         2
        </div>
      </div>
      SELECT PLAN
    </Link>
    <Link to="addOns"
      className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
      <div className="grid mr-4 place-items-center">
      <div className="w-8 h-8 text-white border border-spacing-1 rounded-full flex items-center justify-center">
         3
        </div>
      </div>
      ADD-ONS
      <div className="grid ml-auto place-items-center justify-self-end">
      
      </div>
    </Link>
    <Link to="summary"
      className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
      <div className="grid mr-4 place-items-center">
      <div className="w-8 h-8 text-white border border-spacing-1 rounded-full flex items-center justify-center">
         4
        </div>
      </div>
      SUMMARY
    </Link>
   
    
  </nav>
</div>
    </div>
  )
}
