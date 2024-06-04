import React from 'react'
import AyurvedicExperts from '../components/AyurvedicExperts';
import Link from 'next/link';
import { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";


export default function AboutUs() {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div>
            <nav className="bg-white fixed z-50 min-w-full border-gray-200 dark:bg-gray-900 lg:px-20">
                <div className="max-w-screen flex flex-wrap items-center justify-between mx-auto p-4">

                    <img
                        src="/home2.png"
                        className="h-16 w-16 xl:w-28 xl:h-28"
                        alt="Flowbite Logo"
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


            {/* image Section */}
            <section className='pt-20'>
                <div className='relative w-full'>
                    <img className='pb-5 w-screen' src="/AboutUs.png" alt="" />
                    <div class="absolute inset-0  opacity-60 rounded-md"></div>
                    <div class="absolute inset-0 flex items-center justify-center">
                        <h2 className='text-3xl md:text-7xl lg:text-8xl font-bold justify-center text-center text-white'>About Us

                        </h2>
                    </div>
                </div>
            </section>


            {/* History and Origins */}
            <div className='mt-5 px-5 lg:mt-20   '>
                <div className='lg:px-20 2xl:px-72 grid grid-cols-1 mx-auto md:grid-cols-2 gap-8 '>
                    <div className='cols-span-1 mx-auto   my-auto'>
                        <div className='mb-4  md:justify-start  flex justify-center'>
                            <img className='text-center items-cente flex justify-center' src="/home3.png" alt="" />
                        </div>
                        <h2 className="text-3xl md:text-5xl text-center md:text-start font-extrabold text-gray-800 mb-6">History and Origins</h2>
                        <p className="text-lg text-gray-600 text-justify md:text-start max-w-xl ">Since 2005, River View Villas has been dedicated to promoting Ayurvedic wellness. Our history is deeply rooted in the traditions of Ayurveda, aiming to spread inner peace and balance through our holistic practices.</p>

                    </div>
                    <div className='cols-span-1  '>
                        <img src="/AbHistory.png" alt="" />
                    </div>
                </div>
            </div>


            {/* The Wisdom of Ayurveda */}
            <section className='mt-5  lg:mt-20'>
                <div className='lg:px-20  px-5 2xl:px-72 grid grid-cols-1  w-screen md:grid-cols-2 gap-8 '>
                    <div className='cols-span-1 mx-auto'>
                        <img src="/Ab2.png" alt="" />
                    </div>
                    <div className='cols-span-1 mx-auto my-auto'>
                        <div className='mb-4 md:justify-start  flex justify-center'>
                            <img src="/home3.png" alt="" />
                        </div>
                        <h2 className="text-3xl md:text-5xl  text-center md:text-start  font-extrabold text-gray-800 mb-6">The Wisdom of Ayurveda</h2>
                        <p className="text-lg text-gray-600 text-justify md:text-start max-w-xl ">At River View Villas, we embrace the ancient teachings of Ayurveda, focusing on a balanced approach to mental, physical, and spiritual health. Our therapies include Panchakarma, herbal treatments, yoga, and meditation, designed to enhance overall wellness.</p>
                    </div>

                </div>
            </section>


            {/* Ayurvedic Experts */}
            <section>
                <AyurvedicExperts />
            </section>



            {/* Commitment to Sustainability */}
            <section>
                <div className="px-5 py-20 lg:px-20 bg-white">
                    <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className=" text-3xl md:text-5xl mx-auto font-semibold text-gray-900 py-5 tracking-wide uppercase">Commitment to Sustainability</h2>
                        <p className=" mt-2 justify-center mx-auto text-gray-600 max-w-3xl ">We are committed to conserving the environment and maintaining ecological balance. Our practices include the use of locally sourced organic materials, energy-saving programs, and support for the local community. Our efforts have been recognized with various sustainability awards.</p>            </div>
                </div>
                <div className='md:flex grid grid-cols-2 justify-center px-5 lg:px-20 gap-4 lg:gap-16'>
                    <img className='max-w-2xl' src="/commitIcons/12.png" alt="" />
                    <img className='max-w-2xl' src="/commitIcons/13.png" alt="" />
                    <img className='max-w-2xl' src="/commitIcons/17.png" alt="" />
                    <img className='max-w-2xl' src="/commitIcons/14.png" alt="" />
                    <img className='max-w-2xl' src="/commitIcons/15.png" alt="" />
                    <img className='md:max-w-2xl mx-w-sm' src="/commitIcons/16.png" alt="" />
                </div>
            </section>



            {/* Subscribe to our newsletter */}
            <section className="py-20 lg:mx-20 bg-gray-50">
                <div className=" mx-auto max-w-4xl px-4">
                    <form className="flex items-center border  rounded-lg overflow-hidden">
                        <input
                            type="email"
                            placeholder="E-mail"
                            className=" px-4 w-2/3 md:w-full mr-4 py-1 md:py-3 border-gray-600 border rounded-lg outline-none"
                        />
                        <button
                            type="submit"
                            className="bg-[#001F2B] text-[10px] md:text-[13px] lg:[16px] py-1  md:w-5/12 text-white md:px-6 md:py-3 hover:bg-blue-900 rounded-lg"
                        >
                            SUBSCRIBE OUR NEWSLETTER
                        </button>
                    </form>
                </div>
            </section>

            {/* footer */}

            <div className='bg-[#001F2B]'>
                <footer className="bg-[#001F2B] mx-5 2xl:px-[15rem] lg:mx-20 text-gray-400 pt-20">
                    <div className=" px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">

                            <div className="mb-6 lg:mb-0 lg:col-span-2">
                                <div className='mb-4  lg:mx-0 w-24 h-24'>
                                    <img className='text-center' src="./home2.png" alt="" />
                                </div>
                                <h2 className="text-white text-xl  font-bold mb-2">River View Villas</h2>
                                <p className="text-gray-400 mb-4">A Short Description about the Villa lorem ipsum Lorem ipsum dolor sit amet, lit sed do consectetur adipicsing</p>
                                <div className="flex  space-x-4">
                                    <a href="#" className="text-gray-400 hover:text-white"><FaFacebookF /></a>
                                    <a href="#" className="text-gray-400 hover:text-white"><FaInstagram /></a>
                                    <a href="#" className="text-gray-400 hover:text-white"><FaLinkedinIn /></a>
                                    <a href="#" className="text-gray-400 hover:text-white"><FaTwitter /></a>
                                </div>
                            </div>

                            <div className="mb-6 lg:mb-0 lg:col-span-1">
                                <h3 className="text-white text-lg font-bold mb-2">Page Links</h3>
                                <ul className='grid grid-cols-2 lg:grid-cols-1'>
                                    <li><a href="#" className="text-gray-400 hover:text-white">About us</a></li>
                                    <li><a href="#" className="text-gray-400 hover:text-white">Accommodation</a></li>
                                    <li><a href="#" className="text-gray-400 hover:text-white">Ayurvedic Treatments</a></li>
                                    <li><a href="#" className="text-gray-400 hover:text-white">Gallery</a></li>
                                    <li><a href="#" className="text-gray-400 hover:text-white">News & Blogs</a></li>
                                    <li><a href="#" className="text-gray-400 hover:text-white">Contact us</a></li>
                                    <li> <div className="flex inline md:hidden space-x-4">
                                        <a href="#" className="text-gray-400 hover:text-white">Terms of Use</a>

                                    </div></li>
                                    <li> <div className="flex inline md:hidden space-x-4">
                                        <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>

                                    </div></li>
                                </ul>
                            </div>

                            <div className="mb-6 lg:mb-0 lg:col-span-1">
                                <h3 className="text-white text-lg font-bold mb-2">Latest News</h3>
                                <ul className='grid grid-cols-2 lg:grid-cols-1'>
                                    <li><a href="#" className="text-gray-400 hover:text-white">Lorem ipsum</a></li>
                                    <li><a href="#" className="text-gray-400 hover:text-white">Lorem ipsum dolor</a></li>
                                    <li><a href="#" className="text-gray-400 hover:text-white">Lorem ipsum dolor sit</a></li>
                                    <li><a href="#" className="text-gray-400 hover:text-white">Lorem ipsum do</a></li>
                                    <li><a href="#" className="text-gray-400 hover:text-white">Lorem ipsum dolor</a></li>
                                </ul>
                            </div>

                            <div className="lg:col-span-2">
                                <h3 className="text-white text-lg font-bold mb-2">Information</h3>
                                <p className="text-gray-400 mb-2 flex"><span className='mr-2'><CiLocationOn color='#B6A176' /></span>No 102/7C, Mathugama Road, Dharga Town, Sri Lanka</p>
                                <p className="text-gray-400 mb-2 flex"><span className='mr-2'><FiPhone color='#B6A176' /></span>0777217829 / 0777417737</p>
                                <p className="text-gray-400 mb-2 flex"><span className='mr-2'><MdOutlineEmail color='#B6A176' /></span>Riverviewvillas23@Gmail.Com</p>
                            </div>

                        </div>
                        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between">
                            <p className="text-gray-400 ">© 2024 Semantix labs - All Rights Reserved</p>
                            <div className=" hidden md:inline-flex space-x-4">
                                <a href="#" className="text-gray-400 hover:text-white">Terms of Use</a>
                                <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>

        </div>
    )
}
