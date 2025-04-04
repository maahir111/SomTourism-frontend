import React from 'react'
import Header from "./Header"

function Upcoming() {
    return (
        <div >
            <Header/>
            <div className='flex justify-center flex-col items-center '>
                <h1 className='text-2xl text-center mt-40 text-[#FF8126] font-bold '>UPCOMING</h1>
                <div className=' w-36 h-4 rounded-b-2xl border-b-2 -mt-3 border-[#FF8126] '></div>
            </div>
        </div>

        
    )
}

export default Upcoming
