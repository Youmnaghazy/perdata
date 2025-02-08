/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AddOns.module.css";
export default function AddOns() {
  let [count, setCount] = useState(0);
  const navigate = useNavigate();

  return (
    <div>
      <div className="container text-start mx-auto pl-20 mt-6">
        <h1>Pick add-ons</h1>
        <p className="para">Add-ons help enhance your gaming experience.</p>
        <div className="my-9 ">
        <div className="flex items-center justify-between border bg-purple-50 border-gray-300 rounded-lg p-6 mb-4 hover:border-blue-600">
           <label className="flex items-center cursor-pointer">
           <input type="checkbox" checked className="form-checkbox h-5 w-5 text-blue-600 rounded mr-4 "/> 
           <div>
             <h3 className="text-lg font-medium text-gray-900">Online service</h3> 
             <p className="text-sm text-gray-500">Access to multiplayer games</p>
              </div> </label> <div>
                 <span className="text-base font-semibold text-blue-600">+$1/mo</span>
                  </div>
                   </div>
                   <div className="flex items-center justify-between border bg-purple-50 border-gray-300 rounded-lg p-6 mb-4 hover:border-blue-600">
           <label className="flex items-center cursor-pointer">
           <input type="checkbox" checked className="form-checkbox h-5 w-5 text-blue-600 rounded mr-4 "/> 
           <div>
             <h3 className="text-lg font-medium text-gray-900">Larger storage</h3> 
             <p className="text-sm text-gray-500">Extra 1 TB of cloud save</p>
              </div> </label> <div>
                 <span className="text-base font-semibold text-blue-600">+$2/mo</span>
                  </div>
                   </div>
                   <div className="flex items-center justify-between border border-gray-300 rounded-lg p-4 mb-4 hover:border-blue-600">
           <label className="flex items-center cursor-pointer">
           <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600 rounded mr-4 "/> 
           <div>
             <h3 className="text-lg font-medium text-gray-900">Customizable profile</h3> 
             <p className="text-sm text-gray-500">Custom theme on your profile</p>
              </div> </label> <div>
                 <span className="text-base font-semibold text-blue-600">+$2/mo</span>
                  </div>
                   </div>

        </div>


        <div className="flex justify-between ">
          <button
            onClick={() => navigate("/Plan")}
            className="text-white btnb font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Go Back
          </button>

          <button
            onClick={() => navigate("/Summary")}
            className="text-white btna font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Next step
          </button>
        </div>
      </div>
    </div>
  );
}
