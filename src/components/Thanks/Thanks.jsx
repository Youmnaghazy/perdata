/* eslint-disable no-unused-vars */
import React ,{useEffect,useState}from 'react'
import styles from './Thanks.module.css'
export default function Thanks() {
let [count, setCount] = useState(0);
  return (
    <div className='container'>
    <div className="flex items-center justify-center min-h-screen">
      <div className=" p-8 flex flex-col items-center text-center max-w-lg">
      <img src="/public/thanks.svg" alt="" />
<h1 className='my-4'>Thank You</h1>
<p>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com</p>

      </div>


    </div>
    </div>
  )
}
