import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from "../images/logo.jpg"

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    return <>
        <div className='h-full px-6 py-3 flex justify-between items-center '>
            <Link to={'/'} className='h-5 md:h-8 '>
                {/* <img className='object-contain h-full w-full' src={logo} /> */}
                <h1 className='text-lg md:text-2xl text-gray-700 font-bold '>APP LOGO</h1>
            </Link>
            <div className='hidden md:block cursor-pointer'>
                <Link className='mx-2 font-semibold' to={'/'}>Dashboard</Link>
                <Link className='mx-2 font-semibold' to={'/ads'}>Create Ads</Link>
            </div>


            <div className='block md:hidden '>
                <p
                    onClick={e => setToggle(!toggle)} >
                    <i className='bi bi-list text-xl'></i>
                </p>

            </div>


        </div>
        <div onMouseLeave={e=>setToggle(false)}>
            {
                toggle ? <ShowNav /> : false
            }
        </div>

    </>
}

const ShowNav = () => {

    return <>
        <div className=' h-[5rem] w-full bg-slate-400 text-black '>
            <div className='cursor-pointer flex flex-col '>
                <Link className='m-2 font-semibold' to={'/'}>Dashboard</Link>
                <Link className='m-2 font-semibold' to={'/ads'}>Create Ads</Link>
            </div>
        </div>

    </>
}




export default Navbar