import React from 'react'
import { useRef } from "react";
import { HiArrowCircleUp } from "react-icons/hi";
import { NavLink } from 'react-router-dom';

function Scroll() {
    const scrollToHeader = () => {
        document.querySelector("#header")?.scrollIntoView({ behavior: "smooth" });
    };
    return (
        
        <div >
            <button onClick={scrollToHeader} className='fixed sm:bottom-20 sm:right-20 bottom-10 right-10 z-50 text-5xl text-[#FFB904] '><HiArrowCircleUp /></button>
        </div>
)
}

export default Scroll
