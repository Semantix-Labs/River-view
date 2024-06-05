"use client";
import { Button } from 'flowbite-react';
import Link from 'next/link';
import { useState } from "react";


const events = [
    { id: 1, date: '15 June 2024 | 6:00 PM', title: 'Lorem Ipsum Event', description: 'Lorem ipsum dolor sit amet, ...' },
    { id: 2, date: '25 June 2024 | 5:00 PM', title: 'Lorem Ipsum Event', description: 'Lorem ipsum dolor sit amet, ...' },
    { id: 3, date: '05 July 2024 | 10:00 AM', title: 'Lorem Ipsum Event', description: 'Lorem ipsum dolor sit amet, ...' },
    { id: 4, date: '12 July 2024 | 6:30 PM', title: 'Lorem Ipsum Event', description: 'Lorem ipsum dolor sit amet, ...' },
];

function Blog() {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className='min-h-screen'>


            <section>
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
            </section>

            <section className='pt-20'>
                <div className='relative w-full'>
                    <img className='pb-5 w-screen' src="/Blog.png" alt="" />
                    <div class="absolute inset-0  opacity-60 rounded-md"></div>
                    <div class="absolute inset-0 flex items-center justify-center">
                        <h2 className='text-3xl md:text-7xl lg:text-8xl font-bold justify-center text-center text-white'>News & Blogs
                            <p className='text-[8px] lg:px-48 lg:text-xl text-center  font-bold text-white'>Stay updated with the latest in Ayurvedic wellness trends and events at River View Villas. Read articles and guest experiences to learn more about our offerings.
                            </p>
                        </h2>
                    </div>
                </div>
            </section>


            <section>
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {events.map(event => (
                            <div key={event.id} className="p-4 border rounded shadow">
                                <img src={`/images/event-${event.id}.jpg`} alt={event.title} className="w-full h-40 object-cover mb-4" />
                                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                                <p className="text-gray-600 mb-4">{event.date}</p>
                                <p className="text-gray-800 mb-4">{event.description}</p>
                                <Link href={`/event/${event.id}`}>
                                    <p className="text-blue-500 hover:underline">Learn more</p>
                                </Link>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center mt-8">
                        <button className="px-4 py-2 mx-2 border rounded">1</button>
                        <button className="px-4 py-2 mx-2 border rounded">2</button>
                        <button className="px-4 py-2 mx-2 border rounded">3</button>
                        <button className="px-4 py-2 mx-2 border rounded">Next</button>
                        <button className="px-4 py-2 mx-2 border rounded">Last</button>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Blog