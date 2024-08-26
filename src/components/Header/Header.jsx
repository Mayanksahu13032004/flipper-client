import React from 'react'
import {Link, NavLink} from 'react-router-dom'

export default function Header() {
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <h1 className='text-green-800 font-bold text-3xl'>NEXT INVEST</h1>
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <Link
                            to="login"
                            className="text-white bg-green-800  focus:ring-4 focus:ring-gray-300 font-medium  text-xl px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none "
                        >
                           LOGIN
                        </Link>
                        <Link
                            to="register"
                            className="text-red-600  border-solid border-2 border-red-600 focus:ring-4  font-medium  text-xl px-4 lg:px-5 py-2 lg:py-2.5 mr-2  "
                        >
                           REGISTER
                        </Link>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                to="/"
                                    className={({isActive}) =>
                                        `block py-2   pr-4 pl-3 duration-200 ${isActive ? "text-black" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0  lg:p-0`
                                    }
                                >
                                    Investement Opportunites
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                // to="/works"
                                    className={({isActive}) =>
                                        `block   py-2 pr-4 pl-3 duration-200 ${isActive ? "text-black" : "text-gray-700"} border-b border-gray-100  lg:hover:bg-transparent lg:border-0  lg:p-0`
                                    }
                                >
                                    How it works
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                // to="/about"
                                    className={({isActive}) =>
                                        `block   py-2 pr-4 pl-3 duration-200 ${isActive ? "text-black" : "text-gray-700"} border-b border-gray-100  lg:hover:bg-transparent lg:border-0  lg:p-0`
                                    }
                                >
                                    About 
                                </NavLink>
                            </li>
                           
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
