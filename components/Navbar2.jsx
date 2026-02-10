"use client";
import { Button } from 'flowbite-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from "react";

export default function Navbar2() {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-white fixed z-50 min-w-full border-gray-200 dark:bg-gray-900 lg:px-20">
            <div className="max-w-screen flex flex-wrap items-center justify-between mx-auto p-4">

                <Image
                    src="/home2.png"
                    className="h-16 w-16 xl:w-28 xl:h-28"
                    alt="Flowbite Logo"
                    width={112}
                    height={112}
                />


                <button
                    onClick={handleToggle}
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10  justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-default"
                    aria-expanded={isOpen}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>
                <div className={`${isOpen ? "block" : "hidden"} w-full lg:block lg:w-auto`} id="navbar-default">
                    <ul className="font-medium flex flex-col p-4  md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 lg:flex-row xl:space-x-8 rtl:space-x-reverse lg:mt-0 lg:border-0 lg:bg-white dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <Link href="/">
                                <span className="text-customGold hover:border-b-2 hover:border-customGold ml-4 cursor-pointer">Homepage</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/AboutUs">
                                <span className="text-customGold hover:border-b-2 hover:border-customGold ml-4 cursor-pointer">About Us</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/Accomodation">
                                <span className="text-customGold hover:border-b-2 hover:border-customGold ml-4 cursor-pointer">Accommodation</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/Treatment">
                                <span className="text-customGold hover:border-b-2 hover:border-customGold ml-4 cursor-pointer">Atyurvedic Treatments</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/Gallery">
                                <span className="text-customGold hover:border-b-2 hover:border-customGold ml-4 cursor-pointer">Gallery</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/ContactUs">
                                <span className="text-customGold hover:border-b-2 hover:border-customGold ml-4 cursor-pointer">Blog</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/ContactUs">
                                <button className="text-customGold hover:border-b-2 hover:border-customGold ml-4 bg-[#001F2B] py-1 px-2 rounded-lg cursor-pointer">Contact Us</button>
                            </Link>
                        </li>
                        <li>

                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
