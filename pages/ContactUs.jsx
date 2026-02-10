"use client";


import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import { CiLocationOn } from "react-icons/ci";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import Map from '../components/Map';
import { FaTiktok } from "react-icons/fa";

function ContactUs() {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState('');

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.fullName || !formData.phone || !formData.email || !formData.message) {
            setStatus('Please fill out all fields.');
            setTimeout(() => {
                setStatus('');
            }, 5000);
            return;
        }

        setStatus('Sending...');
        const res = await fetch('/api/sendEmail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (res.ok) {
            // Meta Pixel: Lead
            if (typeof window !== "undefined" && window.fbq) {
                window.fbq('track', 'Lead');
            }

            setStatus('Message sent successfully!');
            setFormData({
                fullName: '',
                phone: '',
                email: '',
                message: '',
            });
            setTimeout(() => {
                setStatus('');
            }, 5000);
        } else {
            setStatus('Failed to send message.');
            setTimeout(() => {
                setStatus('');
            }, 5000);
        }
    };

    return (
        <div className="min-h-screen ">
            <nav className="bg-white fixed z-50 min-w-full border-gray-200 dark:bg-gray-900 lg:px-20">
                <div className="max-w-screen flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link href="/">
                        <Image
                            src="/Rlogo.png"
                            className="h-16 w-16 xl:w-28 xl:h-28"
                            alt="River View Villas Logo"
                            width={112}
                            height={112}
                        />
                    </Link>


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
                        <ul className="font-medium flex flex-col p-auto md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 lg:flex-row xl:space-x-8 rtl:space-x-reverse lg:mt-0 lg:border-0 lg:bg-white dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700">
                            {/* <li className='my-auto'>
                                <Link href="/">
                                    <span className=" text-[#001F2B8F]  hover:border-b-2  hover:border-customGold ml-4 cursor-pointer">Homepage</span>
                                </Link>
                            </li> */}
                            <li className='my-auto'>
                                <Link href="/AboutUs">
                                    <span className="text-[#001F2B8F]    hover:border-b-2 hover:border-customGold ml-4 cursor-pointer">About Us</span>
                                </Link>
                            </li>
                            <li className='my-auto'>
                                <Link href="/Accomodation">
                                    <span className="text-[#001F2B8F]   hover:border-b-2 hover:border-customGold ml-4 cursor-pointer">Accommodation</span>
                                </Link>
                            </li>
                            <li className='my-auto'>
                                <Link href="/Treatment">
                                    <span className="text-[#001F2B8F]  hover:border-b-2 hover:border-customGold ml-4 cursor-pointer">Ayurvedic Treatments</span>
                                </Link>
                            </li>
                            <li className='my-auto'>
                                <Link href="/Gallery">
                                    <span className="text-[#001F2B8F]  hover:border-b-2 hover:border-customGold ml-4 cursor-pointer">Gallery</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/Packages">
                                    <span className="text-customGold hover:border-b-2 hover:border-customGold ml-4 cursor-pointer hidden md:inline-block">
                                        Our Packages
                                    </span>
                                </Link>
                            </li>
                            <li className='my-auto'>
                                <Link href="/ContactUs">
                                    <span className="text-[#001F2B8F] border-b-2 border-[#001F2B8F] hover:border-b-2 hover:border-customGold ml-4 cursor-pointer">Contact Us</span>
                                </Link>
                            </li>
                            {/* <li className='my-auto'>
                                <Link href="/Accomodation#hh">
                                    <button className="text-white   hover:border-b-2 hover:border-customGold ml-4 bg-[#001F2B] px-[17px]  py-[9px] rounded-lg cursor-pointer">Book Now</button>
                                </Link>
                            </li>*/}

                        </ul>
                    </div>
                </div>
            </nav>


            <section className="pt-20">
                <div className="relative w-full">
                    <Image className="pb-5 w-screen" src="/ContactUs.png" alt="Contact Us Banner" width={1920} height={1080} />
                    <div className="absolute inset-0 opacity-60 rounded-md"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <h2 className="text-3xl md:text-7xl lg:text-8xl font-bold justify-center text-center text-white">Contact Us</h2>
                    </div>
                </div>
            </section>

            <section>
                <div className="flex flex-col md:flex-row justify-between gap-8 px-5 py-20 lg:px-20 bg-white   rounded-lg">
                    <div className="w-full md:w-1/2 p-4">
                        <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
                        <p className="mb-4 ">
                            Enhance your stay with our unique experiences, including Ayurvedic cooking classes, herbal garden tours, and cultural excursions.
                        </p>
                        <div className="mb-4">
                            <div className='flex gap-2'>
                                <span className='my-auto'><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M26.25 12.5C26.25 21.25 15 28.75 15 28.75C15 28.75 3.75 21.25 3.75 12.5C3.75 9.51631 4.93526 6.65483 7.04505 4.54505C9.15483 2.43526 12.0163 1.25 15 1.25C17.9837 1.25 20.8452 2.43526 22.955 4.54505C25.0647 6.65483 26.25 9.51631 26.25 12.5Z" stroke="url(#paint0_linear_389_4286)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M15 16.25C17.0711 16.25 18.75 14.5711 18.75 12.5C18.75 10.4289 17.0711 8.75 15 8.75C12.9289 8.75 11.25 10.4289 11.25 12.5C11.25 14.5711 12.9289 16.25 15 16.25Z" stroke="url(#paint1_linear_389_4286)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <defs>
                                        <linearGradient id="paint0_linear_389_4286" x1="15" y1="1.25" x2="15" y2="28.75" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#B89D72" />
                                            <stop offset="1" stop-color="#997C42" />
                                        </linearGradient>
                                        <linearGradient id="paint1_linear_389_4286" x1="15" y1="8.75" x2="15" y2="16.25" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#B89D72" />
                                            <stop offset="1" stop-color="#997C42" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                </span>
                                <div className='grid'>
                                    <p className="font-semibold">Address</p>
                                    <p>No 102/7C, Mathugama Road, Dharga Town, Sri Lanka</p>
                                </div>
                            </div>
                        </div>
                        <div className="mb-4">
                            <div className='flex gap-2'>
                                <span className='my-auto'><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M27.5008 21.15V24.9C27.5022 25.2481 27.4309 25.5927 27.2914 25.9117C27.1519 26.2307 26.9474 26.517 26.6909 26.7523C26.4343 26.9877 26.1315 27.1669 25.8017 27.2784C25.4719 27.3899 25.1225 27.4313 24.7758 27.4C20.9293 26.9821 17.2345 25.6677 13.9883 23.5625C10.9681 21.6433 8.40744 19.0827 6.48827 16.0625C4.37574 12.8015 3.06107 9.08874 2.65077 5.225C2.61953 4.87933 2.66061 4.53095 2.7714 4.20203C2.88218 3.87311 3.06023 3.57086 3.29423 3.31453C3.52822 3.05819 3.81303 2.85339 4.13051 2.71315C4.44799 2.57292 4.7912 2.50033 5.13827 2.5H8.88827C9.4949 2.49403 10.083 2.70885 10.543 3.10441C11.0029 3.49998 11.3034 4.04931 11.3883 4.65C11.5465 5.85008 11.8401 7.02841 12.2633 8.1625C12.4315 8.6099 12.4678 9.09614 12.3682 9.5636C12.2685 10.0311 12.0368 10.4601 11.7008 10.8L10.1133 12.3875C11.8927 15.5169 14.4838 18.1081 17.6133 19.8875L19.2008 18.3C19.5406 17.9639 19.9697 17.7323 20.4372 17.6326C20.9046 17.5329 21.3909 17.5693 21.8383 17.7375C22.9724 18.1607 24.1507 18.4542 25.3508 18.6125C25.958 18.6982 26.5125 19.004 26.9089 19.4719C27.3054 19.9397 27.516 20.537 27.5008 21.15Z" stroke="url(#paint0_linear_389_4277)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <defs>
                                        <linearGradient id="paint0_linear_389_4277" x1="15.0711" y1="2.49988" x2="15.0711" y2="27.4101" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#B89D72" />
                                            <stop offset="1" stop-color="#997C42" />
                                        </linearGradient>
                                    </defs>
                                </svg>

                                </span>
                                <div className='grid'>
                                    <p className="font-semibold">Phone</p>
                                    <p>+94777217829 / +94777417737</p>
                                </div>
                            </div>

                        </div>
                        <div className="mb-4">
                            <div className='flex gap-2'>
                                <span className='my-auto'><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 5H25C26.375 5 27.5 6.125 27.5 7.5V22.5C27.5 23.875 26.375 25 25 25H5C3.625 25 2.5 23.875 2.5 22.5V7.5C2.5 6.125 3.625 5 5 5Z" stroke="url(#paint0_linear_389_4279)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M27.5 7.5L15 16.25L2.5 7.5" stroke="url(#paint1_linear_389_4279)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <defs>
                                        <linearGradient id="paint0_linear_389_4279" x1="15" y1="5" x2="15" y2="25" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#B89D72" />
                                            <stop offset="1" stop-color="#997C42" />
                                        </linearGradient>
                                        <linearGradient id="paint1_linear_389_4279" x1="15" y1="7.5" x2="15" y2="16.25" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#B89D72" />
                                            <stop offset="1" stop-color="#997C42" />
                                        </linearGradient>
                                    </defs>
                                </svg>


                                </span>
                                <div className='grid'>
                                    <p className="font-semibold">E-mail</p>
                                    <p>riverviewvillas23@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex  space-x-4">
                            <Link href="https://web.facebook.com/riverviewvillas/?_rdc=1&_rdr " className="text-gray-400 hover:text-customGold"><FaFacebookF /></Link>
                            <Link href="https://www.instagram.com/river_view_villas/?hl=en " className="text-gray-400 hover:text-customGold"><FaInstagram /></Link>
                            <Link href="https://www.tiktok.com/@river.view.villas?_t=8n6DFJerj6X&_r=1" className="text-gray-400 hover:text-customGold"><FaTiktok /></Link>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 p-4">
                        <h2 className="text-2xl font-bold mb-4">Send Message</h2>
                        <form onSubmit={handleSubmit}>
                            <div className='grid grid-cols-2 gap-4'>
                                <div className="mb-4">
                                    <label className="block ">Full Name</label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 border-none bg-[#F2F2F2] rounded-lg"
                                        placeholder="Enter your name here"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block ">Phone</label>
                                    <input
                                        type="text"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 border-none bg-[#F2F2F2]   rounded-lg"
                                        placeholder="Enter your phone number"
                                    />
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block ">E-Mail</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-3 border-none bg-[#F2F2F2]  rounded-lg"
                                    placeholder="Enter your e-mail here"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block ">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border-none bg-[#F2F2F2]  rounded-lg"
                                    placeholder="Type your message..."
                                    rows="4"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="px-4 py-2 bg-customBlue text-white rounded-lg"
                            >
                                Send message
                            </button>
                        </form>
                        {status && <p className="mt-4 text-red-500">{status}</p>}
                    </div>
                </div>

            </section >

            <Map />



            {/* footer */}

            <div className='bg-[#001F2B]'>
                <footer className="bg-[#001F2B] mx-5 2xl:px-[15rem] lg:mx-20 text-gray-400 pt-20">
                    <div className=" px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">

                            <div className="mb-6 lg:mb-0 lg:col-span-2">
                                <div className='mb-4  lg:mx-0 w-24 h-24'>
                                    <Image className='text-center' src="/home2.png" alt="River View Villas Logo" width={96} height={96} />
                                </div>
                                <h2 className="text-white text-xl  font-bold mb-2">River View Villas</h2>
                                <p className="text-gray-400 mb-4">Experience holistic health at River View Villas, a luxury Ayurvedic health retreat in Sri Lanka.</p>
                                <div className="flex  space-x-4">
                                    <a href="https://web.facebook.com/riverviewvillas/?_rdc=1&_rdr " className="text-gray-400 hover:text-white"><FaFacebookF /></a>
                                    <a href="https://www.instagram.com/river_view_villas/?hl=en " className="text-gray-400 hover:text-white"><FaInstagram /></a>
                                    <a href="https://www.tiktok.com/@river.view.villas?_t=8n6DFJerj6X&_r=1" className="text-gray-400 hover:text-white"><FaTiktok /></a>
                                </div>
                            </div>
                            <div className="mb-6 lg:mb-0 lg:col-span-1">

                            </div>

                            <div className="mb-6 lg:mb-0 lg:col-span-1">
                                <h3 className="text-white text-lg font-bold mb-2">Page Links</h3>
                                <ul className='grid grid-cols-2 lg:grid-cols-1'>
                                    <li><a href="#" className="text-gray-400 hover:text-white">About us</a></li>
                                    <li><a href="#" className="text-gray-400 hover:text-white">Accommodation</a></li>
                                    <li><a href="#" className="text-gray-400 hover:text-white">Ayurvedic Treatments</a></li>
                                    <li><a href="#" className="text-gray-400 hover:text-white">Gallery</a></li>
                                    {/* <li><a href="#" className="text-gray-400 hover:text-white">News & Blogs</a></li> */}
                                    <li><a href="#" className="text-gray-400 hover:text-white">Contact us</a></li>
                                    <li> <div className="flex inline md:hidden space-x-4">
                                        <a href="#" className="text-gray-400 hover:text-white">Terms of Use</a>

                                    </div></li>
                                    <li> <div className="flex inline md:hidden space-x-4">
                                        <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>

                                    </div></li>
                                </ul>
                            </div>

                            {/* <div className="mb-6 lg:mb-0 lg:col-span-1">
                <h3 className="text-white text-lg font-bold mb-2">Latest News</h3>
                <ul className='grid grid-cols-2 lg:grid-cols-1'>
                  <li><a href="#" className="text-gray-400 hover:text-white">Lorem ipsum</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Lorem ipsum dolor</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Lorem ipsum dolor sit</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Lorem ipsum do</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Lorem ipsum dolor</a></li>
                </ul>
              </div> */}

                            <div className="lg:col-span-2">
                                <h3 className="text-white text-lg font-bold mb-2">Information</h3>
                                <p className="text-gray-400 mb-2 flex"><span className='mr-2'><CiLocationOn color='#B6A176' /></span>No 102/7C, Mathugama Road, Dharga Town, Sri Lanka</p>
                                <p className="text-gray-400 mb-2 flex"><span className='mr-2'><FiPhone color='#B6A176' /></span>+94777217829 / +94777417737</p>
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
    );
}

export default ContactUs;
