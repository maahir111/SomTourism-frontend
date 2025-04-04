import React from 'react'
import { useState } from "react";
import logo from "../assets/logo.gif"
import { NavLink , Link } from 'react-router-dom'
import { FaUser } from "react-icons/fa";

function Header() {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div id="header" className="sm:mx-10  sm:my-5 mx-5 my-8">
            <div className="flex mb-12 sm:mb-0  items-center justify-between">
                <div className="sm:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                    <svg className='cursor-pointer' width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="0.324219" width="30" height="30" rx="4" fill="#FF8126" />
                    <path d="M24.5 11.8223H6.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M24.5 15.8223H6.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M24.5 19.8223H6.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                <div className="flex items-center gap-2">
                    <div className="flex items-center  text-[#FF8126] font-bold text-2xl">
                        <img className="sm:w-[80px] sm:-ml-5 w-[60px]" src={logo} alt="logo" />
                        <h1>SomTourist</h1>
                    </div>
                </div>

                <div className='text-3xl sm:hidden text-[#FF8126]'>
                <NavLink to="/login"><FaUser /></NavLink>
                </div>

                <div className={`sm:flex z-50 gap-10 ${menuOpen ? "flex flex-col absolute top-16 left-0 w-full bg-white p-5 shadow-md" : "hidden"}`}>
                    <NavLink to="/home" onClick={() => setMenuOpen(false)}> <h1>Home</h1></NavLink>
                    <NavLink to="/destination" onClick={() => setMenuOpen(false)}> <h1>Destination</h1></NavLink>
                    <NavLink to="/about" onClick={() => setMenuOpen(false)}> <h1>About</h1></NavLink>
                    <NavLink to="/contact" onClick={() => setMenuOpen(false)}> <h1>Contact</h1></NavLink>
                </div>

                <div className="sm:flex hidden gap-5">
                    <NavLink to="/login"><button className="border-[1.9px] border-[#FF8126] px-6 py-2 rounded">Log In</button></NavLink>
                    <NavLink to="/sign"><button className="bg-[#FF8126] text-white px-5 py-2 rounded">Sign Up</button></NavLink>
                </div>
            </div>
            </div>
)
}

export default Header
