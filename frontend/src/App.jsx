import React from 'react'
import { useForm } from "react-hook-form";//react hook to collect data from form and club as json
import { useState } from 'react';



export default function App() {


  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");
 
  const onSubmit = (data) => {
    setData(data)
    console.log(data)
  }


  return (
    <div>

      <h1 className='text-center mt-3 '>Data Insert from frontend to Mongodb through backend</h1>
   
      <form
          onSubmit={handleSubmit(onSubmit)}
        >
          <label htmlFor="">Title</label>
          <input
            placeholder="Title"
            {...register("title")}
          />


<label htmlFor="">Price</label>
          <input
            placeholder="Price"
            {...register("price")}
          />


<label htmlFor="">Image</label>
          <input
            placeholder="Image"
            {...register("image")}
          />

          <button
            className=" flex justify-center p-2 rounded-md w-1/2 self-center bg-gray-900  text-white hover:bg-gray-800"
            type='submit'
          >
            <span>
              Submit
            </span>
          </button>
        </form>
     
   
    </div>
  )
}
