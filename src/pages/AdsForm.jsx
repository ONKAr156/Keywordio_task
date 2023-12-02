import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const AdsForm = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const navigate = useNavigate()

    const handleSubmit = () => {
        setIsSubmitted(true);
        setTimeout(() => {
            setIsSubmitted(false);
            navigate('/ads')

        }, 600);
    };

    useEffect(() => {
        if (isSubmitted) {
            // Additional actions upon submission if needed
        }
    }, [isSubmitted]);


    return <>
        <div>

        </div>
        <div className='container p-10 bg-gray-200 h-screen w-full   scroll-smooth'>
            <div className=' relative bg-slate-50 h-[52rem] w-full md:h-[40rem] border-2 rounded-lg '>
                <h3 className={`${isSubmitted ? "blur-md" : 'm-2 font-semibold text-gray-700'}`}>Create Text & Ads</h3>
                <form action="">
                    <div className={`${isSubmitted ? "blur-md" : 'grid grid-cols-12  p-4 gap-3'}`}>
                        {/* heading */}
                        <div className='col-span-12 md:col-span-6 '>
                            <div className='flex flex-col gap-3'>
                                <div className='flex flex-col gap-2'>
                                    <label for="name" className="form-label">Heading 01</label>
                                    <input type="text" className="form-control p-2 border-2" id="name" placeholder="Add a heading that would make users intersted" />

                                </div>

                                <div className='flex flex-col gap-2'>
                                    <label for="name" className="form-label">Heading 02</label>
                                    <input type="text" className="form-control p-2 border-2" id="name" placeholder="Add a heading that would make users intersted" />

                                </div>
                            </div>
                        </div>
                        {/* desc */}
                        <div className=' text-start col-span-12 md:col-span-6  '>
                            <div>
                                <label for="id" className="form-label">Description 01</label>
                                <textarea rows="5" cols="7" className="resize-none  w-full h-fit border-2 p-2" id="id" placeholder='Add primary text to help users to understand more about your product, services and offers '></textarea>
                            </div>
                        </div>

                        {/* Bussiness */}
                        <div className='col-span-12'>
                            <div className='flex flex-col md:flex-row gap-4  '>
                                <div className='my-2 flex flex-col w-full  gap-3'>
                                    <label for="name" class="form-label">Bussiness Name</label>
                                    <input type="text" class="border-2 p-2" id="name" placeholder="Add your bussiness name" />
                                </div>
                                <div className='my-2 flex flex-col w-full  gap-3'>
                                    <label for="name" class="form-label">Button label</label>
                                    <select className="form-select border-2 p-2">
                                        <option selected>Select a label that suites you </option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className='col-span-12'>
                            <div className='my-2 flex flex-col w-full  gap-3'>
                                <label for="name" class="form-label">Website URL</label>
                                <input type="text" class="border-2 p-2" id="name" placeholder="Add the URL of the landing pageyou want to redirect the user to" />
                            </div>
                        </div>

                    </div>
                </form>


                <div className='absolute bottom-0 right-0  md:bottom-3 md:right-2 '>
                    <Link to={'/ads'}>
                        <button className='mx-2 border-2 bg-slate-100 text-black  px-14 py-2 rounded-sm font-semibold'>Back</button>
                    </Link>

                    {
                        isSubmitted ?
                            <div className="h-screen w-screen    flex items-center justify-center">
                                <div className='bg-white shadow-2xl  h-[10rem] w-[12rem] p-4  '>
                                    <p className='text-center mt-10'><i className=" text-xl text-blue-600 bi bi-check-circle-fill"></i></p>
                                    <h2 className='text-xl text-center'> submitted</h2>
                                </div>
                            </div>
                            :
                            <button className='mx-2 bg-blue-500 text-slate-100 px-14 py-2 rounded-sm font-semibold'
                                onClick={handleSubmit}>Submit</button>
                    }

                    {/* <button onClick={handleSubmit} className='mx-2 bg-blue-500 text-slate-100 px-14 py-2 rounded-sm font-semibold'>Submit</button> */}
                </div>

            </div>

        </div>

    </>
}

export default AdsForm