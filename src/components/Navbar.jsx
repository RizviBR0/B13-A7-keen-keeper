'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiClock } from "react-icons/fi";
import { MdOutlineQueryStats } from "react-icons/md";
import { RiHome3Line } from "react-icons/ri";

const Navbar = () => {
    const pathname = usePathname();

    const links = <>
        <li className={`rounded-md ${pathname === "/" ? "bg-[#244D3F] text-white font-semibold" : ""}`}><Link href="/"><RiHome3Line />Home</Link></li>
        <li className={`rounded-md ${pathname === "/timeline" ? "bg-[#244D3F] text-white font-semibold" : ""}`}><Link href="/timeline"><FiClock />Timeline</Link></li>
        <li className={`rounded-md ${pathname === "/stats" ? "bg-[#244D3F] text-white font-semibold" : ""}`}><Link href="/stats"><MdOutlineQueryStats />Stats</Link></li>
    </>

    return (
        <div className="bg-base-100 shadow-sm">
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="text-xl font-semibold text-[#244D3F]"><span className="font-extrabold text-[#1F2937]">Keen</span>Keeper</a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;