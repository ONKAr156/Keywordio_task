import React, { useState } from 'react'
import Donut from '../components/Donut'

const Dashboard = () => {
    const [toggle, setToggle] = useState(true)
    const [data1, setData1] = useState(true)
    const [data2, setData2] = useState(false)
    const [result, setResult] = useState([
        {
            campaign: "Cosmetics",
            clicks: 712,
            cost: 4272,
            coversations: 8,
            revenue: 16568
        },
        {
            campaign: "Serums",
            clicks: 3961,
            cost: 472,
            coversations: 115,
            revenue: 362526
        },
        {
            campaign: "Facewash",
            clicks: 9462,
            cost: 4272,
            coversations: 123,
            revenue: 266800
        },
        {
            campaign: "Shampoos",
            clicks: 439,
            cost: 4272,
            coversations: 5,
            revenue: 11029
        },
        {
            campaign: "Conditioners",
            clicks: 1680,
            cost: 4272,
            coversations: 49,
            revenue: 175245
        },
        {
            campaign: "Fashwash 2",
            clicks: 4978,
            cost: 4272,
            coversations: 189,
            revenue: 623106
        },
        {
            campaign: "Total",
            clicks: 26510,
            cost: 143819,
            coversations: 489,
            revenue: 623106
        },
    ])



    const [sortOrder, setSortOrder] = useState({
        column: null,
        ascending: true,
    })


    const handleSort = term => {
        const copy = [...result]

        const isAscending = sortOrder.column === term ? !sortOrder.ascending : true

        copy.sort((pre, next) => {
            if (pre[term] < next[term]) return isAscending ? -1 : 1;
            if (pre[term] > next[term]) return isAscending ? 1 : -1;
            return 0
        })

        setResult(copy);
        setSortOrder({
            column: term,
            ascending: isAscending
        })
    }

    const table = <table className='w-full'>
        <thead >
            <tr >
                <th>
                    <div className=' h-full flex justify-center items-center py-2 gap-1'>
                        <p className=' text-slate-800 font-semibold  text-xs md:text-base cursor-pointer'>Campaign</p>
                        <p className='flex flex-col items-center justify-center h-4   '>
                            <i onClick={e => handleSort('campaign')} className="cursor-pointer text-xs h-[50%]  bi bi-chevron-up"></i>
                            <i onClick={e => handleSort('campaign')} className="cursor-pointer text-xs h-[50%]  bi bi-chevron-down"></i>
                        </p>

                    </div>
                </th>
                <th >
                    <div className=' h-full flex justify-center items-center py-2 gap-1'>
                        <p className=' text-slate-800 font-semibold text-xs md:text-base'>Click</p>
                        <p className='flex flex-col items-center justify-center h-4   '>
                            <i onClick={e => handleSort('clicks')} className="cursor-pointer text-xs h-[50%]  bi bi-chevron-up"></i>
                            <i onClick={e => handleSort('clicks')} className="cursor-pointer text-xs h-[50%]  bi bi-chevron-down"></i>
                        </p>

                    </div>
                </th>
                <th >
                    <div className=' h-full flex justify-center items-center py-2 gap-1'>
                        <p className=' text-slate-800 font-semibold text-xs md:text-base'>Cost</p>
                        <p className='flex flex-col items-center justify-center h-4   '>
                            <i onClick={e => handleSort('cost')} className="cursor-pointer text-xs h-[50%]  bi bi-chevron-up"></i>
                            <i onClick={e => handleSort('cost')} className="cursor-pointer text-xs h-[50%]  bi bi-chevron-down"></i>
                        </p>

                    </div>
                </th>
                <th >
                    <div className=' h-full flex justify-center items-center py-2 gap-1'>
                        <p className=' text-slate-800 font-semibold text-xs md:text-base'>Conversation</p>
                        <p className='flex flex-col items-center justify-center h-4   '>
                            <i onClick={e => handleSort('coversations')} className="cursor-pointer text-xs h-[50%]  bi bi-chevron-up"></i>
                            <i onClick={e => handleSort('coversations')} className="cursor-pointer text-xs h-[50%]  bi bi-chevron-down"></i>
                        </p>

                    </div>
                </th>
                <th >
                    <div className=' h-full flex justify-center items-center py-2 gap-1'>
                        <p className=' text-slate-800 font-semibold text-xs md:text-base'>Revenue</p>
                        <p className='flex flex-col items-center justify-center h-4   '>
                            <i onClick={e => handleSort('revenue')} className="cursor-pointer text-xs h-[50%]  bi bi-chevron-up"></i>
                            <i onClick={e => handleSort('revenue')} className="cursor-pointer text-xs h-[50%]  bi bi-chevron-down"></i>
                        </p>

                    </div>
                </th>



            </tr>
        </thead>
        <tbody>
            {
                result && result.map((item) => <tr className='text-center  border-2  text-slate-500  ' key={item.id}>
                    <td className='py-2' >{item.campaign}</td>
                    <td className='py-2' >{item.clicks}</td>
                    <td className='py-2' >USD {item.cost}</td>
                    <td className='py-2' >{item.coversations}</td>
                    <td className='py-2' >USD {item.revenue}</td>

                </tr>)
            }
        </tbody>
    </table>
    return <>
        <div className='h-screen bg-slate-100 '>
            <div className=' grid grid-cols-12 '>
                <div className='col-span-12 md:col-span-6 '>
                    <div className='m-4'>
                        <div className='h-[20rem] md:h-[24.4rem] bg-slate-50 border-2 rounded-md'>
                            <div className='flex justify-between items-center p-3 '>
                                <p className='font-semibold text-base  md:text-lg text-gray-600 '>Ad Insights</p>
                                <p><i className=" text-gray-300 text-xl bi bi-question-circle"></i></p>
                            </div>
                            <hr />
                            {table}
                        </div>
                        <hr />
                    </div>
                </div>

                <div className='relative h-[22rem]  md:h-[25rem] col-span-12 md:col-span-6'>
                    <div className='m-4'>
                        <div className='h-[20rem] md:h-[24.4rem] bg-slate-50 border-2 rounded-md'>
                            <div className='flex justify-between items-center p-3'>
                                <p className='font-semibold text-base md:text-lg text-gray-600 '>Ad Insight</p>
                                <div>
                                    {
                                        toggle ? <select class="form-select">
                                            <option selected>Click</option>
                                            <option value="1">Male</option>
                                            <option value="2">Female</option>
                                            <option value="3">Unknown</option>
                                        </select> : false
                                    }

                                    <span className='mx-2'><i className=" text-gray-300 text-xl bi bi-question-circle"></i></span>
                                </div>
                            </div>
                            <hr />
                            <div className='h-[70%]'>
                                {
                                    toggle ? <Donut /> : <ShowData />
                                }
                            </div>

                            <div className='absolute cursor-pointer  top-4    md:top-80 right-32  md:right-20 bg-slate-400    rounded-2xl  '>
                                <i onClick={e => { setToggle(!toggle), setData1(!data1), setData2(false) }} className={`${data1 ? "text-2xl text-slate-50 bg-blue-500 py-1 px-2 rounded-full    bi bi-opencollective" : "mx-2 text-xl   bi bi-opencollective"}`}></i>
                                <i onClick={e => { setToggle(!toggle), setData2(!data2), setData1(false) }} className={`${data2 ? "text-2xl text-slate-50 bg-blue-500 py-1 px-2 rounded-full   bi bi-columns" : "mx-2 text-xl   bi bi-columns"}`}></i>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>

    </>
}

const ShowData = () => {
    const [group, setGroup] = useState([
        {
            group: "Male",
            clicks: 348,
            cost: 12582,
            coversations: 42,
            revenue: 62118
        },
        {
            group: "Female",
            clicks: 692,
            cost: 24912,
            coversations: 35,
            revenue: 5175
        },
        {
            group: "Unknown",
            clicks: 102,
            cost: 3943,
            coversations: 3,
            revenue: 4489
        },
        {
            group: "Total",
            clicks: 216,
            cost: 4272,
            coversations: 80,
            revenue: 71782
        },
    ])
    const [sortGroupOrder, setSortGroupOrder] = useState({
        column: null,
        ascending: true,
    })
    const handleSortGroup = term => {
        const copy = [...group]

        const isAscending = sortGroupOrder.column === term ? !sortGroupOrder.ascending : true

        copy.sort((pre, next) => {
            if (pre[term] < next[term]) return isAscending ? -1 : 1;
            if (pre[term] > next[term]) return isAscending ? 1 : -1;
            return 0
        })

        setGroup(copy);
        setSortGroupOrder({
            column: term,
            ascending: isAscending
        })
    }

    const table = <table className='w-full'>
        <thead >
            <tr>
                <th>
                    <div className=' h-full flex justify-center items-center py-2 gap-1'>
                        <p className=' text-slate-800 font-semibold text-xs md:text-base'>Group</p>
                        <p className='flex flex-col items-center justify-center h-4   '>
                            <i onClick={e => handleSortGroup('group')} className="cursor-pointer text-xs h-[50%]  bi bi-chevron-up"></i>
                            <i onClick={e => handleSortGroup('group')} className="cursor-pointer text-xs h-[50%]  bi bi-chevron-down"></i>
                        </p>

                    </div>
                </th>
                <th >
                    <div className=' h-full flex justify-center items-center py-2 gap-1'>
                        <p className=' text-slate-800  font-semibold text-xs md:text-base'>Click</p>
                        <p className='flex flex-col items-center justify-center h-4   '>
                            <i onClick={e => handleSortGroup('clicks')} className="cursor-pointer text-xs h-[50%]  bi bi-chevron-up"></i>
                            <i onClick={e => handleSortGroup('clicks')} className="cursor-pointer text-xs h-[50%]  bi bi-chevron-down"></i>
                        </p>

                    </div>
                </th>
                <th >
                    <div className=' h-full flex justify-center items-center py-2 gap-1'>
                        <p className=' text-slate-800 font-semibold text-xs md:text-base'>Cost</p>
                        <p className='flex flex-col items-center justify-center h-4   '>
                            <i onClick={e => handleSortGroup('cost')} className="cursor-pointer text-xs h-[50%]  bi bi-chevron-up"></i>
                            <i onClick={e => handleSortGroup('cost')} className="cursor-pointer text-xs h-[50%]  bi bi-chevron-down"></i>
                        </p>

                    </div>
                </th>
                <th >
                    <div className=' h-full flex justify-center items-center py-2 gap-1'>
                        <p className=' text-slate-800 font-semibold text-xs md:text-base'>Conversation</p>
                        <p className='flex flex-col items-center justify-center h-4   '>
                            <i onClick={e => handleSortGroup('coversations')} className="cursor-pointer text-xs h-[50%]  bi bi-chevron-up"></i>
                            <i onClick={e => handleSortGroup('coversations')} className="cursor-pointer text-xs h-[50%]  bi bi-chevron-down"></i>
                        </p>

                    </div>
                </th>
                <th >
                    <div className=' h-full flex justify-center items-center py-2 gap-1'>
                        <p className=' text-slate-800 font-semibold text-xs md:text-base'>Revenue</p>
                        <p className='flex flex-col items-center justify-center h-4   '>
                            <i onClick={e => handleSortGroup('revenue')} className="cursor-pointer text-xs h-[50%]  bi bi-chevron-up"></i>
                            <i onClick={e => handleSortGroup('revenue')} className="cursor-pointer text-xs h-[50%]  bi bi-chevron-down"></i>
                        </p>

                    </div>
                </th>



            </tr>
        </thead>
        <tbody>
            {
                group && group.map((item) => <tr className='text-center p-3 border-2  text-slate-500' key={item.id}>
                    <td className='py-2'>{item.group}</td>
                    <td className='py-2'>{item.clicks}</td>
                    <td className='py-2'>USD    {item.cost}</td>
                    <td className='py-2'>{item.coversations}</td>
                    <td className='py-2'>USD    {item.revenue}</td>

                </tr>)
            }
        </tbody>
    </table>

    return <>
        {table}
    </>
}

export default Dashboard