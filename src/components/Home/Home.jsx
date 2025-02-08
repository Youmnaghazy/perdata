/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React ,{useEffect,useState}from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './Home.module.css'
export default function Home() {
let [count, setCount] = useState(0);
const navigate = useNavigate();
  return (
<>
<div className="container text-start mx-auto px-20 mt-5">
<h1 >Personal info</h1>
<p className='para'>Please provide your name,email address , and phone number</p>


<form className="max-w-lg mt-8  text-start">
<div className="mb-5">
    <label for="name" className="block mb-2 para">Name</label>
    <input type="text" id="name" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-950 focus:border-sky-950 block w-full p-2.5" placeholder="e.g. Stephen King"  />
  </div>
  <div className="mb-5">
    <label for="email" className="block mb-2 para">Email Address</label>
    <input type="email" id="email" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-950 focus:border-sky-950 block w-full p-2.5" placeholder="e.g. stephenking@lorem.com"  />
  </div>
  <div className="mb-5">
    <label for="phone" className="block mb-2 para">Phone Number</label>
    <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" id="phone" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-950 focus:border-sky-950 block w-full p-2.5" placeholder="e.g. +1 234 567 890" />
  </div>
  <div className="flex justify-end ">
<button onClick={()=>navigate ("/Plan")} className="text-white btna font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Next step</button>

</div>
</form>

</div>
</>  


  )
}
