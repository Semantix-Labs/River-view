"use client";


import Link from 'next/link';
import React, { useState } from 'react';
import { CiLocationOn } from "react-icons/ci";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";

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
        <div className="min-h-screen">
            <section>
                <nav className="bg-white fixed z-50 w-full border-gray-200 dark:bg-gray-900 lg:px-20">
                    <div className="max-w-screen flex flex-wrap items-center justify-between mx-auto p-4">
                        <img
                            src="/home2.png"
                            className="h-16 w-16 xl:w-28 xl:h-28"
                            alt="Flowbite Logo"
                        />
                        <button
                            onClick={handleToggle}
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
                            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 lg:flex-row xl:space-x-8 rtl:space-x-reverse lg:mt-0 lg:border-0 lg:bg-white dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700">
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
                            </ul>
                        </div>
                    </div>
                </nav>
            </section>

            <section className="pt-20">
                <div className="relative w-full">
                    <img className="pb-5 w-screen" src="/ContactUs.png" alt="" />
                    <div className="absolute inset-0 opacity-60 rounded-md"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <h2 className="text-3xl md:text-7xl lg:text-8xl font-bold justify-center text-center text-white">Contact Us</h2>
                    </div>
                </div>
            </section>

            <section>
                <div className="flex flex-col md:flex-row justify-between gap-8 px-5 py-20 lg:px-20 bg-white rounded-lg">
                    <div className="w-full md:w-1/2 p-4">
                        <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
                        <p className="mb-4">
                            Enhance your stay with our unique experiences, including Ayurvedic cooking classes, herbal garden tours, and cultural excursions.
                        </p>
                        <div className="mb-4 flex gap-2">
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M26.25 12.5C26.25 21.25 15 28.75 15 28.75C15 28.75 3.75 21.25 3.75 12.5C3.75 9.51631 4.93526 6.65483 7.04505 4.54505C9.15483 2.43526 12.0163 1.25 15 1.25C17.9837 1.25 20.8452 2.43526 22.955 4.54505C25.0647 6.65483 26.25 9.51631 26.25 12.5Z" stroke="url(#paint0_linear_389_4286)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M15 16.25C17.0711 16.25 18.75 14.5711 18.75 12.5C18.75 10.4289 17.0711 8.75 15 8.75C12.9289 8.75 11.25 10.4289 11.25 12.5C11.25 14.5711 12.9289 16.25 15 16.25Z" stroke="url(#paint1_linear_389_4286)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <defs>
                                    <linearGradient id="paint0_linear_389_4286" x1="15" y1="1.25" x2="15" y2="28.75" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#B89D72" />
                                        <stop offset="1" stopColor="#997C42" />
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_389_4286" x1="15" y1="8.75" x2="15" y2="16.25" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#B89D72" />
                                        <stop offset="1" stopColor="#997C42" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <div className="grid">
                                <p className="font-semibold">Address</p>
                                <p>No 102/7, Kahatana, Watta, Gonagaldeniya, Yattogoda</p>
                            </div>
                        </div>
                        <div className="mb-4 flex gap-2">
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M25 11.25V8.75C25 7.95435 24.6839 7.19129 24.1213 6.62868C23.5587 6.06607 22.7956 5.75 22 5.75H8C7.20435 5.75 6.44129 6.06607 5.87868 6.62868C5.31607 7.19129 5 7.95435 5 8.75V11.25" stroke="url(#paint0_linear_389_4290)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M22.5 11.25H7.5C6.39543 11.25 5.5 12.1454 5.5 13.25V24.5C5.5 25.6046 6.39543 26.5 7.5 26.5H22.5C23.6046 26.5 24.5 25.6046 24.5 24.5V13.25C24.5 12.1454 23.6046 11.25 22.5 11.25Z" stroke="url(#paint1_linear_389_4290)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M15 21.25C17.0711 21.25 18.75 19.5711 18.75 17.5C18.75 15.4289 17.0711 13.75 15 13.75C12.9289 13.75 11.25 15.4289 11.25 17.5C11.25 19.5711 12.9289 21.25 15 21.25Z" stroke="url(#paint2_linear_389_4290)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <defs>
                                    <linearGradient id="paint0_linear_389_4290" x1="15" y1="5.75" x2="15" y2="11.25" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#B89D72" />
                                        <stop offset="1" stopColor="#997C42" />
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_389_4290" x1="15" y1="11.25" x2="15" y2="26.5" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#B89D72" />
                                        <stop offset="1" stopColor="#997C42" />
                                    </linearGradient>
                                    <linearGradient id="paint2_linear_389_4290" x1="15" y1="13.75" x2="15" y2="21.25" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#B89D72" />
                                        <stop offset="1" stopColor="#997C42" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <div className="grid">
                                <p className="font-semibold">Call us</p>
                                <p>0777915867</p>
                            </div>
                        </div>
                        <div className="mb-4 flex gap-2">
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.5 7.5H7.5C6.39543 7.5 5.5 8.39543 5.5 9.5V20.5C5.5 21.6046 6.39543 22.5 7.5 22.5H22.5C23.6046 22.5 24.5 21.6046 24.5 20.5V9.5C24.5 8.39543 23.6046 7.5 22.5 7.5Z" stroke="url(#paint0_linear_389_4288)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M4.99268 8.175L14.6411 15.2412C14.795 15.3471 14.8955 15.3743 15.0001 15.3743C15.1046 15.3743 15.2051 15.3471 15.3591 15.2412L25.0075 8.175" stroke="url(#paint1_linear_389_4288)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <defs>
                                    <linearGradient id="paint0_linear_389_4288" x1="15" y1="7.5" x2="15" y2="22.5" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#B89D72" />
                                        <stop offset="1" stopColor="#997C42" />
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_389_4288" x1="15" y1="7.5" x2="15" y2="15.3743" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#B89D72" />
                                        <stop offset="1" stopColor="#997C42" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <div className="grid">
                                <p className="font-semibold">Mail us</p>
                                <p>info.otelms@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex mt-6 mb-6 lg:mb-0 gap-6 text-xl">
                            <Link href="https://www.facebook.com">
                                <FaFacebookF className="hover:text-blue-600" />
                            </Link>
                            <Link href="https://www.instagram.com">
                                <FaInstagram className="hover:text-pink-600" />
                            </Link>
                            <Link href="https://www.linkedin.com">
                                <FaLinkedinIn className="hover:text-blue-400" />
                            </Link>
                            <Link href="https://www.twitter.com">
                                <FaTwitter className="hover:text-blue-300" />
                            </Link>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 p-4">
                        <h2 className="text-2xl font-bold mb-4">Send a Message</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <input
                                    type="text"
                                    name="fullName"
                                    placeholder="Full Name"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="text"
                                    name="phone"
                                    placeholder="Phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <textarea
                                    name="message"
                                    placeholder="Message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="bg-[#001F2B] text-white px-4 py-2 rounded-md"
                            >
                                Send Message
                            </button>
                            {status && <p className="mt-2">{status}</p>}
                        </form>
                    </div>
                </div>
            </section>

       

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
    );
}

export default ContactUs;
