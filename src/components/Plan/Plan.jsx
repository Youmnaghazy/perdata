/* eslint-disable no-unused-vars */
import React ,{useEffect,useState}from 'react'
import styles from './Plan.module.css'
import { useNavigate } from 'react-router-dom';
export default function Plan() {
let [count, setCount] = useState(0);
const navigate = useNavigate();
  return (
    <div>
      <div className="container text-start mx-auto px-20 mt-6">
<h1 >Select your plan</h1>
<p className='para'>You have the option of monthly or yearly billing</p>

<div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 mt-8">
  
<a href="#" className="block max-w-sm p-9 bg-white border border-red-200 rounded-lg shadow-sm hover:bg-red-100">
<img src="/public/icon1.svg" alt="" />
<h2 className=" texts mt-10 dark:text-white">Arcade</h2>
<p className='para'>$9/mo</p>
</a>
<a href="#" className="block max-w-sm p-9 bg-white border border-red-200 rounded-lg shadow-sm hover:bg-red-100">
<img src="/public/icon2.svg" alt="" />
<h2 className=" texts mt-10 dark:text-white">Advanced</h2>
<p className='para'>$12/mo</p>
</a>
<a href="#" className="block max-w-sm p-9 bg-white border border-red-200 rounded-lg shadow-sm hover:bg-red-100">
<img src="/public/icon3.svg" alt="" />
<h2 className=" texts mt-10 dark:text-white">Pro</h2>
<p className='para'>$15/mo</p>
</a>
</div>
<div className='flex justify-evenly my-16 w-50 bg-gray-100 py-1 rounded'>
  <h4 className='texts'>Monthly</h4>
<label className="switch">
  <input type="checkbox" />
  <span className="slider round"></span>
</label>
<h4 className='texta'>Yearly</h4>

  </div>      
  <div className="flex justify-between ">
<button onClick={()=>navigate ("/Home")} className="text-white btnb font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Go Back</button>

<button onClick={()=>navigate ("/AddOns")} className="text-white btna font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Next step</button>

</div>
</div>

    </div>
  )
}
