/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Summary.module.css";
export default function Summary() {
  let [count, setCount] = useState(0);
  const navigate = useNavigate();

  return (
    <div>
    <div className="container text-start mx-auto pl-20 mt-6">
      <h1>Finishing up</h1>
      <p className="para">Double-check everything looksok before confirming.</p>
      <div className="my-9 ">
      <div className="bg-purple-50 p-4">
      <div className="flex items-center justify-between  border-gray-300 rounded-lg mb-4">
        <div>
            <h3 className="text-lg para font-bold">Arcade (Monthly)</h3>
            <a href="" className="text-slate-400 border-b border-gray-300 ">Change</a>
        </div>
        <div>
            <span className="text-base font-semibold para">+$9/mo</span>
        </div>
  
      </div>
      <div className="border-b border-gray-300">

</div>
      <div className="flex justify-between mt-4">
            <p className=" text-slate-400">Online Service</p>
            <span className=" para">+$1/mo</span>
          </div>
          <div className="flex justify-between">
            <p className=" text-slate-400">Larger storage</p>
            <span className=" para">+$2/mo</span>


          </div>
         
    </div>
    <div className="flex justify-between mt-4 p-4">
    <p className=" text-slate-400">Total (per month)</p>
    <span className=" para font-bold">+$12/mo</span>
      </div>

      </div>


      <div className="flex justify-between ">
        <button
          onClick={() => navigate("/AddOns")}
          className="text-white btnb font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Go Back
        </button>

        <button
          onClick={() => navigate("/Thanks")}
          className="text-white btna font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Confirm
        </button>
      </div>
    </div>
  </div>
 
  );
}
