import React, { useState } from 'react'
import media from "../images/media_ads_ss.jpg"
import xyz from "../images/1.jpg"
import { Link, useNavigate } from 'react-router-dom'
const Ads = () => {
  const [data1, setData1] = useState(true)
  const [data2, setData2] = useState(true)
  const [selected, setSelected] = useState("")

  const navigate = useNavigate()
  const handelChange = (arg) => {
    if (arg == "first") {
      if (data1 == true) {
        setSelected("first")
        console.log("cliked 1");
      }
      setData1(!data1)

    }
    if (arg == "second") {
      if (data2 == true) {
        setSelected("second")
        console.log("cliked 2");
      }
      setData2(!data2)
    }
  }

  const handelCheck = (arg) => {

    if (selected == "") {
      alert("please select one")
    }

    if (selected == "first") {
      navigate("/adsform")
    }
    if (selected == "second") {
      navigate("/mediaform")
    }
  }


  return <>
    <div className='container p-10 bg-gray-200 h-screen scroll-smooth '>
      <div className=' h-[30rem]  relative bg-slate-50 md:h-full border-2 rounded-lg '>
        <h3 className='m-2 text-base md:text-xl font-semibold text-gray-700'>Create Ads</h3>
        <div className='my-4 h-fit flex gap-4 justify-center items-center'>
          <div className='h-[20rem] md:h-full w-[20rem]  md:w-[22rem]  shadow-2xl rounded-xl cursor-pointer' >

            <p className='m-3'>
              <input onChange={e => handelChange("first")} id="checkbox1" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
            </p>
            <label htmlFor="checkbox1">
              <div className='flex flex-col gap-4 justify-between items-center  cursor-pointer'>
                <p>
                  <img className='object-contain' src={xyz} alt="" />
                </p>
                <div className=' w-full text-center'>
                  <p className='text-gray-400 text-base'>Create</p>
                  <p className='text-lg font-bold my-3 '>Text Ads </p>
                </div>
              </div>

            </label>
          </div>

          <div className='h-[20rem] md:h-full w-[20rem]  md:w-[22rem]  shadow-2xl rounded-xl'>
            <p className='m-3'>
              <input onChange={e => handelChange("second")} id="checkbox2" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
            </p>
            <label htmlFor="checkbox2">
              <div className='flex flex-col gap-4 justify-between items-center cursor-pointer'>
                <p>
                  <img src={media} alt="" />
                </p>
                <div className='w-full text-center'>
                  <p className='text-gray-400 text-base'>Create</p>
                  <p className='text-lg font-bold my-3'>Text Media</p>
                </div>
              </div>
            </label>
          </div>

        </div>
        <div className='absolute bottom-3 right-2 '>
          <button
            onClick={handelCheck}

            className={`  bg-blue-500 text-slate-100 px-14 py-2 rounded-sm font-semibold`}>Next</button>
        </div>

      </div>

    </div>

  </>
}

export default Ads