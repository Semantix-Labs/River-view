import React from 'react'
import Link from 'next/link';
import { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { FaTiktok } from "react-icons/fa";
import Image from 'next/image';


export default function Accomodation() {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        checkInDate: '',
        checkOutDate: '',
        person: 1,
        fullName: '',
        email: '',
        phone: '',
        roomPreference: 'Standard',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log(formData);
    };

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };
    const rooms = [
        {
            title: "Luxury Rooms",
            description: "Elegantly designed with modern amenities and Ayurvedic principles.",
            price: "$100 / Night",
            image: "/path-to-luxury-room-image.jpg",
            link: "/book-luxury-room"
        },
        {
            title: "Suite Rooms",
            description: "Spacious and luxurious, perfect for extended stays.",
            price: "$200 / Night",
            image: "/path-to-suite-room-image.jpg",
            link: "/book-suite-room"
        },
        {
            title: "Standard Rooms",
            description: "Comfortable and affordable options with essential amenities.",
            price: "$80 / Night",
            image: "/path-to-standard-room-image.jpg",
            link: "/book-standard-room"
        },
        {
            title: "Standard Rooms",
            description: "Comfortable and affordable options with essential amenities.",
            price: "$80 / Night",
            image: "/path-to-standard-room-image.jpg",
            link: "/book-standard-room"
        }
    ];
    return (
        <div className=' ' >
            <nav className="bg-white fixed z-50 min-w-full border-gray-200 dark:bg-gray-900 lg:px-20">
                <div className="max-w-screen flex flex-wrap items-center justify-between mx-auto p-4">

                <img
                        src="/Rlogo.png"
                        className="h-16 w-16 xl:w-28 xl:h-28"
                        
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
                        <ul className="font-medium flex flex-col p-auto md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 lg:flex-row xl:space-x-8 rtl:space-x-reverse lg:mt-0 lg:border-0 lg:bg-white dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700">
                            <li className='my-auto'>
                                <Link href="/">
                                    <span className=" text-[#001F2B8F]  hover:border-b-2  hover:border-customGold ml-4 cursor-pointer">Homepage</span>
                                </Link>
                            </li>
                            <li className='my-auto'>
                                <Link href="/AboutUs">
                                    <span className="text-[#001F2B8F]   hover:border-b-2 hover:border-customGold ml-4 cursor-pointer">About Us</span>
                                </Link>
                            </li>
                            <li className='my-auto'>
                                <Link href="/Accomodation">
                                    <span className="text-[#001F2B8F]  border-b-2 border-[#001F2B8F]  hover:border-b-2 hover:border-customGold ml-4 cursor-pointer">Accommodation</span>
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
                            {/* <li className='my-auto'>
                                <Link href="/ContactUs">
                                    <span className="text-[#001F2B8F]  hover:border-b-2 hover:border-customGold ml-4 cursor-pointer">Blog</span>
                                </Link>
                            </li> */}
                            <li className='my-auto'>
                                <Link href="/ContactUs">
                                    <button className="text-white   hover:border-b-2 hover:border-customGold ml-4 bg-[#001F2B] px-[17px]  py-[9px] rounded-lg cursor-pointer">Contact Us</button>
                                </Link>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>

            {/* image Section */}
            <section className='pt-20'>
                <div className='relative w-full'>
                    <img className='pb-5 w-screen' src="/Accom.png" alt="" />
                    <div class="absolute inset-0  opacity-60 rounded-md"></div>
                    <div class="absolute inset-0 flex items-center justify-center">
                        <h2 className='text-3xl md:text-7xl lg:text-8xl font-bold justify-center text-center text-white'>Accommodation</h2>
                    </div>
                </div>
            </section>


            {/* Luxry Rooms */}
            <section className='bg-[#FFFFFF]'>
                <div className='mt-5 winsize  '>
                    <h1 className="text-5xl font-bold text-center mx-5 my-8">Our Luxury Rooms</h1>
                    <p className="text-lg md:text-center mx-5 text-justify max-w-xl md:mx-auto">
                        Our rooms are designed with Ayurvedic principles in mind, featuring natural materials and calming colors. Enjoy amenities such as organic toiletries, yoga mats, and meditation areas.
                    </p>
                    <div className="flex flex-wrap justify-center mx-5  gap-4 md:space-x-4 space-y-4">

                        <div className="relative xl:w-72 xl:h-96 lg:w-56 lg:h-72 md:w-40 md:h-56 w-80 h-96 overflow-hidden mt-20  rounded-lg shadow-lg">
                            <Image

                                src='/Rooms/1.png'
                                layout="fill"
                                objectFit="cover"
                                className="transition-transform duration-500 ease-in-out transform hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                                <p className="text-lg text-[#FFFFFF] font-bold mt-4">$100 / Night</p>
                                <h3 className="text-lg text-white font-semibold">Luxury Rooms</h3>
                                <p className="text-sm text-white  mt-1">Elegantly designed with modern amenities and Ayurvedic principles.</p>

                                <a href='#' className="mt-4 inline-block   text-start text-xl py-2 rounded-lg">
                                    Book Now <i className='pt-1 pl-2'><svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.49992 17.9166C13.8722 17.9166 17.4166 14.3722 17.4166 9.99998C17.4166 5.62773 13.8722 2.08331 9.49992 2.08331C5.12766 2.08331 1.58325 5.62773 1.58325 9.99998C1.58325 14.3722 5.12766 17.9166 9.49992 17.9166Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M9.5 13.1666L12.6667 9.99998L9.5 6.83331" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M6.33325 10H12.6666" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    </i>
                                </a>
                            </div>
                        </div>

                        <div className="relative xl:w-72 xl:h-96 lg:w-56 lg:h-72 md:w-40 md:h-56 w-80 h-96   overflow-hidden rounded-lg  shadow-lg">
                            <Image

                                src='/Rooms/2.png'
                                layout="fill"
                                objectFit="cover"
                                className="transition-transform duration-500 ease-in-out transform hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                                <p className="text-lg text-[#FFFFFF] font-bold mt-4">$100 / Night</p>
                                <h3 className="text-lg text-white font-semibold">Luxury Rooms</h3>
                                <p className="text-sm text-white  mt-1">Elegantly designed with modern amenities and Ayurvedic principles.</p>

                                <a href='#' className="mt-4 inline-block  text-start text-xl py-2 rounded-lg">
                                    Book Now <i className='pt-1 pl-2'><svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.49992 17.9166C13.8722 17.9166 17.4166 14.3722 17.4166 9.99998C17.4166 5.62773 13.8722 2.08331 9.49992 2.08331C5.12766 2.08331 1.58325 5.62773 1.58325 9.99998C1.58325 14.3722 5.12766 17.9166 9.49992 17.9166Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M9.5 13.1666L12.6667 9.99998L9.5 6.83331" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M6.33325 10H12.6666" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    </i>
                                </a>
                            </div>
                        </div>
                        <div className="relative xl:w-72 xl:h-96 lg:w-56 lg:h-72 md:w-40 md:h-56 w-80 h-96  imgemg overflow-hidden  rounded-lg shadow-lg">
                            <Image

                                src='/Rooms/3.png'
                                layout="fill"
                                objectFit="cover"
                                className="transition-transform  duration-500 ease-in-out transform hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                                <p className="text-lg text-[#FFFFFF] font-bold mt-4">$100 / Night</p>
                                <h3 className="text-lg text-white font-semibold">Luxury Rooms</h3>
                                <p className="text-sm text-white  mt-1">Elegantly designed with modern amenities and Ayurvedic principles.</p>

                                <a href='#' className="mt-4 inline   text-start text-xl py-2 rounded-lg">
                                    Book Now <i className='pt-1 pl-2'><svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.49992 17.9166C13.8722 17.9166 17.4166 14.3722 17.4166 9.99998C17.4166 5.62773 13.8722 2.08331 9.49992 2.08331C5.12766 2.08331 1.58325 5.62773 1.58325 9.99998C1.58325 14.3722 5.12766 17.9166 9.49992 17.9166Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M9.5 13.1666L12.6667 9.99998L9.5 6.83331" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M6.33325 10H12.6666" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    </i>
                                </a>
                            </div>
                        </div>
                        <div className="relative xl:w-72 xl:h-96 lg:w-56 lg:h-72 md:w-40 md:h-56 w-80 h-96  overflow-hidden rounded-lg shadow-lg">
                            <Image

                                src='/Rooms/1.png'
                                layout="fill"
                                objectFit="cover"
                                className="transition-transform duration-500 ease-in-out transform hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                                <p className="text-lg text-[#FFFFFF] font-bold mt-4">$100 / Night</p>
                                <h3 className="text-lg text-white font-semibold">Luxury Rooms</h3>
                                <p className="text-sm text-white  mt-1">Elegantly designed with modern amenities and Ayurvedic principles.</p>

                                <a href='#' className="mt-4 inline-block   text-start text-xl py-2 rounded-lg">
                                    Book Now <i className='pt-1 pl-2'><svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.49992 17.9166C13.8722 17.9166 17.4166 14.3722 17.4166 9.99998C17.4166 5.62773 13.8722 2.08331 9.49992 2.08331C5.12766 2.08331 1.58325 5.62773 1.58325 9.99998C1.58325 14.3722 5.12766 17.9166 9.49992 17.9166Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M9.5 13.1666L12.6667 9.99998L9.5 6.83331" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M6.33325 10H12.6666" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    </i>
                                </a>
                            </div>
                        </div>


                    </div>
                </div>
            </section>

            {/* Ayurvedic Amenities */}
            <section className='bg-[#F9F9F9]'>
                <div className='mt-5 lg:mt-20 2xl:px-[20rem] lg:px-20  px-5  '>
                    <div className=' grid grid-cols-1 mx-auto md:grid-cols-2 gap-8 '>
                        <div className='cols-span-1 col-start-1 my-auto'>

                            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-6">Ayurvedic Amenities</h2>
                            <p className="text-lg  max-w-xl flex "><span className='mr-2'><img src="/home4.png" alt="" /></span>Organic, chemical-free toiletries</p>
                            <p className="text-lg  max-w-xl flex "><span className='mr-2'><img src="/home4.png" alt="" /></span>Herbal teas and Ayurvedic beverages</p>
                            <p className="text-lg  max-w-xl flex "><span className='mr-2'><img src="/home4.png" alt="" /></span>Yoga mats and meditation spaces</p>
                            <p className="text-lg  max-w-xl flex "><span className='mr-2 '><img src="/home4.png" alt="" /></span>Rooms designed with natural light and color harmony based on Ayurvedic principles</p>

                        </div>
                        <div className='cols-span-1 flex justify-end '>
                            <img src="/acom2.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>



            {/* Booking Form */}
            <section className='bgImage' style={{ backgroundImage: 'url("/bg3.png") ', backgroundSize: 'cover', }}>
                <div className='mt-5  lg:mt-20 w-screen mx-auto grid grid-cols-1  lg:px-20 py-5 lg:py-20 lg:grid-cols-2 '>

                    <div className='cols-span-1 mx-5 my-auto   mb-5 lg:mb-24 justify-end'>
                        <div className='border border-white   text-white p-10 xl:ml-60'>
                            <p className='max-w-xl text-white '>Book your stay easily with our integrated online booking system. Check room availability, rates, and special promotions with just a few clicks.</p>
                            <p className='max-w-2xl text-white font-extrabold mt-5'>Address</p>
                            <p className='max-w-xl text-white '>No 102/7C, Mathugama Road, Dharga Town, Sri Lanka</p>

                            <p className='max-w-2xl font-extrabold text-white mt-5'>Phone</p>
                            <p className='max-w-xl  text-white'>0777217829 / 0777417737</p>

                            <p className='max-w-2xl text-white font-extrabold mt-5'>E-Mail</p>
                            <p className='max-w-xl text-white '>riverviewvillas23@gmail.com</p>
                        </div>

                    </div>


                    <div className='cols-span-1 mx-5 my-auto'>
                        <div className='xl:mr-48'>
                            <div className="bg-white p-5  sm:p-10 shadow-lg rounded-lg max-w-screen-2xl w-full">
                                <h2 className="text-2xl font-bold mb-6">Booking Information</h2>
                                <form onSubmit={handleSubmit} className="space-y-8">
                                    <div className='grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4'>
                                        <div>
                                            <label className="block text-sm  font-semibold ">Check In Date</label>
                                            <input
                                                type="date"
                                                name="checkInDate"
                                                value={formData.checkInDate}
                                                onChange={handleChange}
                                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-customBlue focus:border-customBlue sm:text-sm"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold ">Check Out Date</label>
                                            <input
                                                type="date"
                                                name="checkOutDate"
                                                value={formData.checkOutDate}
                                                onChange={handleChange}
                                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-customBlue focus:border-customBlue sm:text-sm"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold ">Person</label>
                                            <select
                                                name="person"
                                                value={formData.person}
                                                onChange={handleChange}
                                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-customBlue focus:border-customBlue sm:text-sm"
                                            >
                                                <option value="1">1 person</option>
                                                <option value="2">2 persons</option>
                                                <option value="3">3 persons</option>
                                                <option value="4">4 persons</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold ">Full Name</label>
                                        <input
                                            type="text"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            placeholder="Enter your name here"
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-customBlue focus:border-customBlue sm:text-sm"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold ">E-Mail</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Enter your E-mail here"
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-customBlue focus:border-customBlue sm:text-sm"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold">Phone</label>
                                        <input
                                            type="text"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="Enter your phone number here"
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-customBlue focus:border-customBlue sm:text-sm"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold">Room Preference</label>
                                        <div className="mt-1 flex space-x-4">
                                            <label className="flex items-center">
                                                <input
                                                    type="radio"
                                                    name="roomPreference"
                                                    value="Luxury"
                                                    checked={formData.roomPreference === 'Luxury'}
                                                    onChange={handleChange}
                                                    className="form-radio h-4 w-4 text-indigo-600"
                                                />
                                                <span className="ml-2">Luxury</span>
                                            </label>
                                            <label className="flex items-center">
                                                <input
                                                    type="radio"
                                                    name="roomPreference"
                                                    value="Suite"
                                                    checked={formData.roomPreference === 'Suite'}
                                                    onChange={handleChange}
                                                    className="form-radio h-4 w-4 text-indigo-600"
                                                />
                                                <span className="ml-2">Suite</span>
                                            </label>
                                            <label className="flex items-center">
                                                <input
                                                    type="radio"
                                                    name="roomPreference"
                                                    value="Standard"
                                                    checked={formData.roomPreference === 'Standard'}
                                                    onChange={handleChange}
                                                    className="form-radio h-4 w-4 text-customBlue"
                                                />
                                                <span className="ml-2">Standard</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div>
                                        <button
                                            type="submit"
                                            className="w-1/3 md:w-full bg-customBlue text-white md:py-2 md:px-4 px-2 py-1 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">

                                            Submit Now
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </section>



            {/* Carpe Diem */}
            <section className='bg-[#FFFFFF]'>
                <div className='mt-5 lg:mt-20 2xl:px-[20rem] lg:px-20   px-5 '>
                    <div className=' grid grid-cols-1 mx-auto  md:grid-cols-2 gap-8 '>
                        <div className='cols-span-1 lg:col-start-1 '>

                            <h2 className="text-3xl md:text-5xl text-center lg:text-start font-extrabold text-gray-800 mb-6">Carpe Diem</h2>
                            <p className="text-lg text-justify  flex ">Carpe Diem Villa is located amidst a beautiful tropical garden, featuring a year-round outdoor pool and an Ayurveda resort. The villa offers a stunning river view and includes 4 air-conditioned rooms with attached bathrooms, a hall, and a kitchen. Guests can enjoy various activities such as billiards and fishing, and free bicycle usage is available.</p>
                            <p className='text-lg max-w-xl pt-5 font-semibold'>Amenities</p>
                            <div className='grid grid-cols-3 mt-5 gap-4'>
                                <div className='col-span-1 flex border-r-2 border-r-gray-700'>
                                    <span className='mr-2'><svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.9596 9.10639C18.426 5.78457 17.9105 5.46639 16.2026 4.87775L15.9337 4.77275C14.82 4.38139 12.8169 2.0173 12.158 1.23775C11.4635 0.430108 10.6222 -0.00389977 9.75872 2.64051e-05H6.38117C5.51808 2.64051e-05 5.32 0.175026 5.04713 0.607754L5.01479 0.665026L3.97787 2.9273C3.84043 3.14684 3.72521 3.36639 3.62213 3.56366C3.36947 4.0473 3.2017 4.36866 2.89245 4.46094L1.25723 4.77912C0.481064 5.01139 0 5.7273 0 6.68184V11.2955C0 11.4221 0.0319433 11.5435 0.0888027 11.633C0.145662 11.7225 0.22278 11.7728 0.303191 11.7728H1.83734C1.92976 12.4039 2.15536 12.967 2.47732 13.3703C2.79927 13.7736 3.19856 13.9931 3.61 13.9931C4.02144 13.9931 4.42073 13.7736 4.74268 13.3703C5.06464 12.967 5.29024 12.4039 5.38266 11.7728H12.348C12.4404 12.4039 12.666 12.967 12.988 13.3703C13.3099 13.7736 13.7092 13.9931 14.1206 13.9931C14.5321 13.9931 14.9314 13.7736 15.2533 13.3703C15.5753 12.967 15.8009 12.4039 15.8933 11.7728H17.6437C17.8505 11.772 18.0545 11.6971 18.2401 11.5537C18.4257 11.4103 18.5882 11.2022 18.715 10.9451C18.8419 10.688 18.9298 10.3888 18.9722 10.0702C19.0146 9.7516 19.0103 9.42197 18.9596 9.10639ZM4.09106 4.16821C4.19415 3.97093 4.29319 3.7673 4.42457 3.57321L4.44681 3.50003L5.48372 1.23775C5.61511 1.03094 5.70202 0.938663 6.37106 0.938663H9.74659C10.4798 0.937962 11.1936 1.30954 11.782 1.99821C12.6593 3.03548 13.399 3.84048 14.0337 4.43866H3.92734L4.09106 4.16821ZM3.61202 13.0455C3.37216 13.0455 3.13768 12.9335 2.93824 12.7237C2.73881 12.514 2.58336 12.2158 2.49157 11.867C2.39978 11.5181 2.37576 11.1343 2.42256 10.7639C2.46935 10.3936 2.58486 10.0534 2.75447 9.78646C2.92407 9.51947 3.14017 9.33764 3.37542 9.26398C3.61068 9.19032 3.85452 9.22813 4.07613 9.37262C4.29773 9.51711 4.48714 9.76181 4.6204 10.0758C4.75366 10.3897 4.82479 10.7588 4.82479 11.1364C4.82479 11.6427 4.69701 12.1283 4.46958 12.4863C4.24214 12.8443 3.93367 13.0455 3.61202 13.0455ZM14.1227 13.0455C13.8828 13.0455 13.6483 12.9335 13.4489 12.7237C13.2494 12.514 13.094 12.2158 13.0022 11.867C12.9104 11.5181 12.8864 11.1343 12.9332 10.7639C12.98 10.3936 13.0955 10.0534 13.2651 9.78646C13.4347 9.51947 13.6508 9.33764 13.8861 9.26398C14.1213 9.19032 14.3652 9.22813 14.5868 9.37262C14.8084 9.51711 14.9978 9.76181 15.131 10.0758C15.2643 10.3897 15.3354 10.7588 15.3354 11.1364C15.3354 11.6427 15.2077 12.1283 14.9802 12.4863C14.7528 12.8443 14.4443 13.0455 14.1227 13.0455ZM18.236 10.3632C18.166 10.5054 18.0762 10.6204 17.9735 10.6993C17.8708 10.7781 17.758 10.8188 17.6437 10.8182H15.9277C15.8762 10.1206 15.6637 9.47701 15.3306 9.00989C14.9974 8.54278 14.5668 8.28469 14.1206 8.28469C13.6745 8.28469 13.2439 8.54278 12.9107 9.00989C12.5775 9.47701 12.365 10.1206 12.3136 10.8182H5.41702C5.36559 10.1206 5.15309 9.47701 4.81992 9.00989C4.48675 8.54278 4.05615 8.28469 3.61 8.28469C3.16384 8.28469 2.73325 8.54278 2.40008 9.00989C2.06691 9.47701 1.85441 10.1206 1.80298 10.8182H0.606383V6.68184C0.606383 6.01048 1.19053 5.78457 1.35223 5.7273L2.945 5.40912H15.2081C15.3993 5.54167 15.5975 5.64812 15.8003 5.7273L16.0732 5.82275C17.6255 6.3573 17.9065 6.45912 18.3714 9.35139C18.3989 9.52518 18.401 9.70654 18.3776 9.88181C18.3541 10.0571 18.3057 10.2217 18.236 10.3632Z" fill="#001F2B" fill-opacity="0.72" />
                                    </svg>
                                    </span>Free Parking
                                </div>
                                <div className='col-span-1 flex border-r-2 border-r-gray-700'>
                                    <span className='mr-2'><svg width="16" height="22" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.2857 13.3853C12.2106 13.385 12.1362 13.3998 12.0667 13.4288C11.9973 13.4578 11.9342 13.5004 11.8811 13.5542C11.828 13.608 11.7859 13.672 11.7573 13.7423C11.7286 13.8127 11.714 13.8881 11.7143 13.9642C11.7124 14.7372 11.4763 15.491 11.0378 16.1236C10.5994 16.7563 9.97983 17.2372 9.26286 17.5016C9.13648 17.5479 9.03027 17.6379 8.96291 17.7557C8.89554 17.8736 8.87133 18.0117 8.89454 18.1458C8.91773 18.2799 8.98686 18.4015 9.08976 18.4891C9.19266 18.5767 9.32274 18.6247 9.45714 18.6247C9.52339 18.6245 9.5891 18.6127 9.65143 18.59C10.5889 18.2442 11.3991 17.6152 11.9724 16.7879C12.5457 15.9606 12.8545 14.975 12.8571 13.9642C12.8574 13.8881 12.8428 13.8127 12.8142 13.7423C12.7856 13.672 12.7435 13.608 12.6904 13.5542C12.6372 13.5004 12.5741 13.4578 12.5047 13.4288C12.4353 13.3998 12.3608 13.385 12.2857 13.3853ZM12.2857 13.3853C12.2106 13.385 12.1362 13.3998 12.0667 13.4288C11.9973 13.4578 11.9342 13.5004 11.8811 13.5542C11.828 13.608 11.7859 13.672 11.7573 13.7423C11.7286 13.8127 11.714 13.8881 11.7143 13.9642C11.7124 14.7372 11.4763 15.491 11.0378 16.1236C10.5994 16.7563 9.97983 17.2372 9.26286 17.5016C9.13648 17.5479 9.03027 17.6379 8.96291 17.7557C8.89554 17.8736 8.87133 18.0117 8.89454 18.1458C8.91773 18.2799 8.98686 18.4015 9.08976 18.4891C9.19266 18.5767 9.32274 18.6247 9.45714 18.6247C9.52339 18.6245 9.5891 18.6127 9.65143 18.59C10.5889 18.2442 11.3991 17.6152 11.9724 16.7879C12.5457 15.9606 12.8545 14.975 12.8571 13.9642C12.8574 13.8881 12.8428 13.8127 12.8142 13.7423C12.7856 13.672 12.7435 13.608 12.6904 13.5542C12.6372 13.5004 12.5741 13.4578 12.5047 13.4288C12.4353 13.3998 12.3608 13.385 12.2857 13.3853ZM8.42857 0.561572C8.37509 0.49974 8.30919 0.450194 8.23527 0.41625C8.16136 0.382306 8.08115 0.364746 8 0.364746C7.91885 0.364746 7.83864 0.382306 7.76473 0.41625C7.69082 0.450194 7.62491 0.49974 7.57143 0.561572C7.28572 0.891572 0.571429 8.64368 0.571429 13.9642C0.571429 15.9603 1.35408 17.8747 2.74721 19.2861C4.14033 20.6976 6.02982 21.4905 8 21.4905C9.97018 21.4905 11.8597 20.6976 13.2528 19.2861C14.6459 17.8747 15.4286 15.9603 15.4286 13.9642C15.4286 8.59157 8.71429 0.885783 8.42857 0.561572ZM8 20.3326C6.33353 20.3306 4.73588 19.659 3.5575 18.4652C2.37913 17.2713 1.71625 15.6526 1.71429 13.9642C1.71429 9.80736 6.52 3.63578 8 1.83526C9.48 3.62999 14.2857 9.77262 14.2857 13.9642C14.2837 15.6526 13.6209 17.2713 12.4425 18.4652C11.2641 19.659 9.66647 20.3306 8 20.3326ZM12.2857 13.3853C12.2106 13.385 12.1362 13.3998 12.0667 13.4288C11.9973 13.4578 11.9342 13.5004 11.8811 13.5542C11.828 13.608 11.7859 13.672 11.7573 13.7423C11.7286 13.8127 11.714 13.8881 11.7143 13.9642C11.7124 14.7372 11.4763 15.491 11.0378 16.1236C10.5994 16.7563 9.97983 17.2372 9.26286 17.5016C9.13648 17.5479 9.03027 17.6379 8.96291 17.7557C8.89554 17.8736 8.87133 18.0117 8.89454 18.1458C8.91773 18.2799 8.98686 18.4015 9.08976 18.4891C9.19266 18.5767 9.32274 18.6247 9.45714 18.6247C9.52339 18.6245 9.5891 18.6127 9.65143 18.59C10.5889 18.2442 11.3991 17.6152 11.9724 16.7879C12.5457 15.9606 12.8545 14.975 12.8571 13.9642C12.8574 13.8881 12.8428 13.8127 12.8142 13.7423C12.7856 13.672 12.7435 13.608 12.6904 13.5542C12.6372 13.5004 12.5741 13.4578 12.5047 13.4288C12.4353 13.3998 12.3608 13.385 12.2857 13.3853ZM13.2457 22.1332C13.171 22.1255 13.0956 22.1329 13.0238 22.1548C12.9519 22.1768 12.885 22.2128 12.8269 22.2609C12.7688 22.309 12.7207 22.3683 12.6851 22.4353C12.6496 22.5023 12.6275 22.5757 12.62 22.6513C12.6125 22.727 12.6198 22.8034 12.6414 22.8762C12.6631 22.949 12.6986 23.0167 12.7461 23.0756C12.7936 23.1345 12.8521 23.1833 12.9182 23.2193C12.9843 23.2552 13.0568 23.2777 13.1314 23.2853C19.4457 23.9453 22.8571 25.6705 22.8571 26.9616C22.8571 28.6058 17.2057 30.8984 8 30.8984C-1.20571 30.8984 -6.85714 28.6058 -6.85714 26.9616C-6.85714 25.6705 -3.44571 23.9453 2.86857 23.2853C3.01937 23.2699 3.15796 23.1945 3.25388 23.0756C3.34979 22.9567 3.39516 22.8041 3.38 22.6513C3.36485 22.4985 3.29041 22.3581 3.17306 22.2609C3.05572 22.1638 2.90508 22.1178 2.75429 22.1332C-2.44571 22.6774 -8 24.2347 -8 26.9616C-8 30.2674 0.245715 32.0563 8 32.0563C15.7543 32.0563 24 30.2674 24 26.9616C24 24.2347 18.4457 22.6774 13.2457 22.1332Z" fill="#001F2B" fill-opacity="0.53" />
                                    </svg>
                                    </span>Free Water Bottles
                                </div>
                                <div className='col-span-1 flex'>
                                    <span className='mr-2'><svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_298_1036)">
                                            <path d="M1.11604 6.05844C3.37387 3.52377 6.67295 2.07013 10.1671 2.07013C13.6618 2.07013 16.9609 3.52439 19.2181 6.05907C19.3433 6.20051 19.5199 6.27278 19.6965 6.27278C19.8445 6.27278 19.9938 6.22231 20.1139 6.11888C20.3782 5.89271 20.4055 5.49954 20.1749 5.24034C17.6762 2.43338 14.029 0.823975 10.1671 0.823975C6.30575 0.823975 2.65853 2.43276 0.159284 5.23848C-0.071328 5.49768 -0.0446461 5.89146 0.219636 6.11764C0.483919 6.34444 0.885425 6.31765 1.11604 6.05844Z" fill="#001F2B" fill-opacity="0.57" />
                                            <path d="M16.5862 8.52895C16.7113 8.68036 16.8943 8.75887 17.0792 8.75887C17.2202 8.75887 17.3612 8.71338 17.4794 8.61868C17.752 8.40122 17.7926 8.00868 17.5715 7.74263C15.7673 5.56747 13.0679 4.32007 10.1672 4.32007C7.26706 4.32007 4.56833 5.56747 2.76282 7.74138C2.54111 8.00868 2.5824 8.40122 2.85431 8.61805C3.12748 8.83675 3.52835 8.79438 3.74816 8.52833C5.31099 6.64601 7.65141 5.5656 10.1672 5.5656C12.6842 5.56622 15.024 6.64602 16.5862 8.52895Z" fill="#001F2B" fill-opacity="0.57" />
                                            <path d="M13.8907 10.9427C14.0915 11.2249 14.4885 11.2934 14.7757 11.0972C15.0635 10.9003 15.1334 10.5121 14.9332 10.2292C13.8577 8.71764 12.0763 7.81543 10.1673 7.81543C8.22961 7.81543 6.43364 8.73883 5.3619 10.2853C5.16432 10.5701 5.24056 10.9576 5.53025 11.1514C5.64016 11.2243 5.76404 11.2592 5.88728 11.2592C6.09058 11.2592 6.2907 11.1638 6.41331 10.9863C7.24808 9.78061 8.65145 9.06158 10.1679 9.06158C11.6608 9.06158 13.0534 9.76504 13.8907 10.9427Z" fill="#001F2B" fill-opacity="0.57" />
                                            <path d="M10.1671 14.5316C10.8688 14.5316 11.4377 13.9823 11.4377 13.3047C11.4377 12.6272 10.8688 12.0779 10.1671 12.0779C9.46535 12.0779 8.89648 12.6272 8.89648 13.3047C8.89648 13.9823 9.46535 14.5316 10.1671 14.5316Z" fill="#001F2B" fill-opacity="0.57" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_298_1036">
                                                <rect width="20" height="15" fill="white" transform="translate(0 0.5)" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                    </span>Free Wi-Fi
                                </div>
                                <div className='col-span-1 flex border-r-2 border-r-gray-700'>
                                    <span className='mr-2'><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.40628 9.21681C1.40639 9.40747 1.46647 9.59326 1.57802 9.74788C1.68957 9.9025 1.84694 10.0181 2.02784 10.0783C2.20873 10.1386 2.40399 10.1404 2.58596 10.0835C2.76794 10.0266 2.9274 9.91389 3.04178 9.76135L3.0646 9.7309L3.0872 9.76103C3.16527 9.86517 3.26481 9.95132 3.37907 10.0136C3.49333 10.076 3.61964 10.113 3.74947 10.1223C3.87929 10.1315 4.00959 10.1128 4.13154 10.0673C4.25349 10.0219 4.36425 9.95071 4.45631 9.85871C4.54838 9.76671 4.6196 9.656 4.66516 9.53408C4.71071 9.41216 4.72954 9.28188 4.72037 9.15205C4.7112 9.02222 4.67424 8.89588 4.61199 8.78157C4.54974 8.66727 4.46366 8.56768 4.35958 8.48953H4.35929L4.32892 8.46675L4.35933 8.44397C4.46337 8.36584 4.54941 8.26627 4.61164 8.152C4.67386 8.03773 4.71082 7.91143 4.72 7.78164C4.72919 7.65185 4.71039 7.52161 4.66488 7.39971C4.61937 7.27782 4.54821 7.16712 4.45622 7.07511C4.36422 6.9831 4.25354 6.91192 4.13165 6.86639C4.00977 6.82086 3.87952 6.80204 3.74973 6.81121C3.61994 6.82037 3.49364 6.85731 3.37936 6.91951C3.26508 6.98172 3.16549 7.06775 3.08734 7.17177L3.0646 7.20215L3.0416 7.17142C2.96348 7.06729 2.8639 6.98117 2.74959 6.91888C2.63529 6.85659 2.50893 6.81959 2.37908 6.81038C2.24923 6.80117 2.11892 6.81998 1.99697 6.86552C1.87502 6.91106 1.76428 6.98227 1.67225 7.07434C1.58022 7.1664 1.50905 7.27717 1.46355 7.39913C1.41805 7.5211 1.3993 7.65142 1.40855 7.78126C1.4178 7.91111 1.45485 8.03745 1.51718 8.15173C1.57951 8.26602 1.66567 8.36557 1.76983 8.44365L1.80027 8.46647L1.76983 8.48929C1.65647 8.57359 1.5645 8.68335 1.50136 8.80973C1.43821 8.9361 1.40564 9.07554 1.40628 9.21681ZM3.26541 8.46668C3.26541 8.49972 3.25726 8.53224 3.24169 8.56137C3.22611 8.59051 3.2036 8.61535 3.17613 8.6337C3.14867 8.65206 3.1171 8.66335 3.08422 8.66659C3.05135 8.66983 3.01818 8.66491 2.98766 8.65227C2.95714 8.63963 2.93021 8.61966 2.90925 8.59413C2.88829 8.56859 2.87395 8.53828 2.86751 8.50589C2.86106 8.47349 2.8627 8.44 2.87229 8.40839C2.88187 8.37677 2.8991 8.34801 2.92246 8.32465C2.95056 8.29657 2.98636 8.27744 3.02532 8.2697C3.06429 8.26195 3.10468 8.26593 3.14138 8.28114C3.17809 8.29634 3.20946 8.32209 3.23154 8.35512C3.25361 8.38815 3.2654 8.42699 3.26541 8.46672V8.46668ZM4.05888 9.4609C4.02386 9.49599 3.98169 9.52314 3.93525 9.5405C3.8888 9.55786 3.83917 9.56503 3.78971 9.56152C3.74025 9.55801 3.69212 9.5439 3.6486 9.52015C3.60507 9.4964 3.56717 9.46357 3.53745 9.42388L3.35035 9.17427C3.44543 9.13591 3.53182 9.07878 3.60434 9.0063C3.67687 8.93382 3.73405 8.84746 3.77247 8.7524L4.02179 8.93918C4.06146 8.96893 4.09427 9.00686 4.118 9.05039C4.14173 9.09393 4.15583 9.14205 4.15935 9.19151C4.16287 9.24097 4.15572 9.2906 4.13838 9.33705C4.12105 9.38351 4.09394 9.4257 4.05888 9.46076V9.4609ZM3.78987 7.37178C3.8644 7.36645 3.93866 7.38539 4.00153 7.42578C4.0644 7.46617 4.11251 7.52583 4.13865 7.59583C4.16479 7.66583 4.16757 7.74242 4.14656 7.81413C4.12555 7.88584 4.08189 7.94882 4.02211 7.99365L3.7725 8.18065C3.73403 8.08566 3.67686 7.99936 3.60438 7.92689C3.53191 7.85442 3.44562 7.79725 3.35063 7.75878L3.53752 7.50917C3.56707 7.4693 3.60496 7.43636 3.64854 7.41263C3.69212 7.38891 3.74035 7.37496 3.78987 7.37178ZM2.07041 7.47225C2.10543 7.43717 2.14759 7.41002 2.19402 7.39266C2.24045 7.37529 2.29008 7.36812 2.33953 7.37162C2.38898 7.37512 2.43709 7.38922 2.48062 7.41295C2.52414 7.43668 2.56205 7.4695 2.59178 7.50917L2.77874 7.75878C2.68368 7.7972 2.59734 7.85438 2.52486 7.9269C2.45238 7.99942 2.39525 8.08579 2.35687 8.18086L2.10726 7.99372C2.06758 7.96399 2.03477 7.92608 2.01104 7.88255C1.98731 7.83903 1.97321 7.79091 1.96971 7.74145C1.96621 7.692 1.97338 7.64238 1.99075 7.59594C2.00811 7.5495 2.03525 7.50735 2.07034 7.47232L2.07041 7.47225ZM2.10729 8.93943L2.35669 8.7524C2.395 8.84755 2.45214 8.93398 2.52467 9.00651C2.59719 9.07904 2.68363 9.13617 2.77878 9.17448L2.59178 9.42385C2.56204 9.46352 2.52412 9.49633 2.48059 9.52007C2.43706 9.54381 2.38894 9.55792 2.33948 9.56144C2.29003 9.56496 2.24039 9.55781 2.19394 9.54048C2.14748 9.52314 2.1053 9.49603 2.07024 9.46098C2.03518 9.42592 2.00806 9.38374 1.99072 9.33729C1.97338 9.29084 1.96622 9.2412 1.96974 9.19175C1.97325 9.14229 1.98735 9.09416 2.01108 9.05063C2.03481 9.0071 2.06762 8.96918 2.10729 8.93943Z" fill="#001F2B" fill-opacity="0.72" />
                                        <path d="M5.06483 4.37078C5.056 4.49518 5.07288 4.62007 5.11442 4.73767C5.15595 4.85526 5.22125 4.96305 5.30625 5.05431C5.39125 5.14558 5.49412 5.21837 5.60847 5.26815C5.72282 5.31792 5.8462 5.34363 5.97091 5.34366C5.99232 5.34366 6.01387 5.34292 6.03542 5.34137C6.16527 5.33217 6.29163 5.29516 6.40592 5.23285C6.52022 5.17055 6.61978 5.0844 6.69787 4.98025L6.72076 4.9497L6.74368 4.98025C6.8218 5.08432 6.92136 5.1704 7.03563 5.23266C7.1499 5.29491 7.2762 5.33189 7.40601 5.3411C7.53581 5.3503 7.66607 5.33151 7.78798 5.286C7.90989 5.24049 8.0206 5.16932 8.11262 5.07731C8.20464 4.9853 8.27582 4.8746 8.32134 4.75269C8.36686 4.63079 8.38566 4.50052 8.37646 4.37072C8.36727 4.24092 8.3303 4.11461 8.26805 4.00033C8.20581 3.88606 8.11974 3.78649 8.01567 3.70837L7.98512 3.68548L8.01571 3.66256C8.11974 3.58442 8.20577 3.48484 8.26798 3.37057C8.3302 3.2563 8.36714 3.13 8.37632 3.00022C8.38549 2.87043 8.36668 2.74019 8.32116 2.6183C8.27564 2.49642 8.20447 2.38573 8.11247 2.29373C8.02047 2.20173 7.90978 2.13057 7.78789 2.08505C7.66601 2.03953 7.53576 2.02073 7.40598 2.02991C7.27619 2.03909 7.14989 2.07603 7.03563 2.13825C6.92136 2.20047 6.82178 2.2865 6.74365 2.39053L6.72076 2.42109L6.69784 2.39053C6.61974 2.2864 6.52018 2.20026 6.40589 2.13795C6.29161 2.07564 6.16527 2.03862 6.03542 2.02939C5.90558 2.02016 5.77528 2.03894 5.65333 2.08445C5.53137 2.12997 5.42063 2.20116 5.32859 2.2932C5.23655 2.38525 5.16536 2.496 5.11984 2.61795C5.07433 2.7399 5.05556 2.87021 5.06479 3.00005C5.07402 3.12989 5.11105 3.25623 5.17336 3.37051C5.23567 3.4848 5.32182 3.58436 5.42596 3.66245L5.45651 3.68534L5.42596 3.70826C5.32179 3.78635 5.23563 3.88593 5.17333 4.00024C5.11102 4.11455 5.07402 4.24092 5.06483 4.37078ZM6.86279 3.82748C6.82512 3.86515 6.77403 3.88631 6.72076 3.88631C6.66749 3.88631 6.6164 3.86515 6.57873 3.82748C6.54106 3.78981 6.5199 3.73872 6.5199 3.68545C6.5199 3.63217 6.54106 3.58108 6.57873 3.54341C6.59732 3.52449 6.61948 3.50944 6.64392 3.49912C6.66837 3.48881 6.69461 3.48344 6.72114 3.48333C6.74767 3.48321 6.77396 3.48835 6.79849 3.49845C6.82302 3.50855 6.84531 3.52341 6.86407 3.54217C6.88283 3.56093 6.89769 3.58322 6.90778 3.60775C6.91788 3.63229 6.92302 3.65858 6.9229 3.68511C6.92278 3.71164 6.91741 3.73788 6.90709 3.76232C6.89677 3.78676 6.88172 3.80888 6.86279 3.82748ZM7.71512 4.67977C7.68007 4.71483 7.6379 4.74195 7.59146 4.75929C7.54502 4.77663 7.4954 4.78379 7.44595 4.78028C7.3965 4.77677 7.34839 4.76267 7.30486 4.73894C7.26134 4.71522 7.22342 4.68241 7.19368 4.64275L7.00655 4.39314C7.10164 4.35478 7.18804 4.29765 7.26058 4.22517C7.33311 4.15269 7.3903 4.06634 7.42874 3.97127L7.67806 4.15826C7.71772 4.188 7.75053 4.22592 7.77425 4.26944C7.79798 4.31296 7.81208 4.36108 7.81559 4.41052C7.81911 4.45997 7.81195 4.50959 7.79462 4.55603C7.77729 4.60248 7.75017 4.64465 7.71512 4.6797V4.67977ZM7.44593 2.59061C7.52045 2.58532 7.59469 2.6043 7.65753 2.64471C7.72037 2.68511 7.76845 2.74478 7.79456 2.81478C7.82068 2.88478 7.82344 2.96135 7.80242 3.03304C7.7814 3.10474 7.73774 3.1677 7.67796 3.21252L7.42863 3.39955C7.39014 3.30455 7.33296 3.21825 7.26048 3.14577C7.188 3.0733 7.10169 3.01612 7.00669 2.97764L7.19368 2.72832C7.22318 2.6884 7.26104 2.6554 7.3046 2.63162C7.34817 2.60783 7.3964 2.59384 7.44593 2.59061ZM5.72644 2.69109C5.76148 2.65603 5.80364 2.62891 5.85007 2.61156C5.89651 2.59422 5.94613 2.58706 5.99557 2.59056C6.04501 2.59407 6.09313 2.60815 6.13665 2.63187C6.18017 2.65559 6.21809 2.68839 6.24784 2.72803L6.43483 2.97736C6.33977 3.01581 6.25343 3.073 6.18095 3.14554C6.10846 3.21808 6.05133 3.30446 6.01296 3.39955L5.76335 3.21245C5.72368 3.18272 5.69087 3.1448 5.66713 3.10127C5.6434 3.05775 5.6293 3.00963 5.62578 2.96018C5.62227 2.91072 5.62942 2.86109 5.64677 2.81465C5.66411 2.7682 5.69123 2.72603 5.7263 2.69098L5.72644 2.69109ZM5.62592 4.41065C5.62911 4.36112 5.64307 4.31289 5.66682 4.26932C5.69058 4.22574 5.72355 4.18788 5.76346 4.15837L6.01306 3.97123C6.05138 4.06632 6.1085 4.15269 6.18099 4.22518C6.25348 4.29767 6.33985 4.35479 6.43494 4.39311L6.24784 4.64271C6.20301 4.70248 6.14004 4.74614 6.06835 4.76715C5.99666 4.78816 5.92009 4.7854 5.85009 4.75929C5.78009 4.73318 5.72043 4.68511 5.68002 4.62227C5.6396 4.55944 5.62062 4.48521 5.62589 4.41068L5.62592 4.41065Z" fill="#001F2B" fill-opacity="0.72" />
                                        <path d="M14.3438 12.375C14.642 12.3747 14.928 12.256 15.1389 12.0451C15.3498 11.8342 15.4684 11.5483 15.4688 11.25V9C15.4688 8.70163 15.3502 8.41548 15.1392 8.20451C14.9283 7.99353 14.6421 7.875 14.3438 7.875C14.0454 7.875 13.7592 7.99353 13.5483 8.20451C13.3373 8.41548 13.2188 8.70163 13.2188 9V11.25C13.2191 11.5483 13.3377 11.8342 13.5486 12.0451C13.7595 12.256 14.0455 12.3747 14.3438 12.375ZM13.7812 9C13.7812 8.85082 13.8405 8.70774 13.946 8.60225C14.0515 8.49676 14.1946 8.4375 14.3438 8.4375C14.4929 8.4375 14.636 8.49676 14.7415 8.60225C14.847 8.70774 14.9062 8.85082 14.9062 9V11.25C14.9062 11.3992 14.847 11.5423 14.7415 11.6477C14.636 11.7532 14.4929 11.8125 14.3438 11.8125C14.1946 11.8125 14.0515 11.7532 13.946 11.6477C13.8405 11.5423 13.7812 11.3992 13.7812 11.25V9Z" fill="#001F2B" fill-opacity="0.72" />
                                        <path d="M1.12502 15.75C1.12551 16.1974 1.30346 16.6263 1.61982 16.9427C1.93618 17.2591 2.36511 17.437 2.81252 17.4375H14.2735C14.9632 17.4367 15.6245 17.1624 16.1122 16.6747C16.5999 16.1869 16.8742 15.5257 16.875 14.8359V11.1902C16.8769 8.47406 15.8753 5.85294 14.0625 3.83024V2.8125C14.0625 2.73791 14.0329 2.66637 13.9801 2.61363C13.9274 2.56088 13.8559 2.53125 13.7813 2.53125V1.40625C13.781 1.18255 13.692 0.968094 13.5338 0.809916C13.3757 0.651739 13.1612 0.562761 12.9375 0.5625H11.8125C11.5888 0.562761 11.3744 0.651739 11.2162 0.809916C11.058 0.968094 10.969 1.18255 10.9688 1.40625V2.53125C10.8942 2.53125 10.8226 2.56088 10.7699 2.61363C10.7171 2.66637 10.6875 2.73791 10.6875 2.8125V3.83017C8.8747 5.85289 7.87308 8.47404 7.87502 11.1902V11.25H2.81252C2.44991 11.2499 2.09691 11.3666 1.80585 11.5828C1.51479 11.7991 1.30115 12.1034 1.19662 12.4506C1.09208 12.7978 1.10221 13.1695 1.2255 13.5105C1.34879 13.8515 1.57868 14.1437 1.88109 14.3438C1.64875 14.4975 1.45811 14.7064 1.32618 14.9518C1.19425 15.1972 1.12514 15.4714 1.12502 15.75ZM11.25 3.09375H13.5V3.65625H11.25V3.09375ZM11.5313 1.40625C11.5314 1.33168 11.561 1.2602 11.6137 1.20747C11.6665 1.15474 11.7379 1.12508 11.8125 1.125H12.9375C13.0121 1.12508 13.0836 1.15474 13.1363 1.20747C13.189 1.2602 13.2187 1.33168 13.2188 1.40625V2.53125H11.5313V1.40625ZM8.43752 11.1902C8.4354 8.61881 9.38109 6.1368 11.0938 4.21875H13.6562C15.3688 6.13686 16.3145 8.61883 16.3125 11.1902V14.8359C16.3119 15.3765 16.0969 15.8948 15.7146 16.2771C15.3323 16.6594 14.8141 16.8744 14.2735 16.875H12.5611C12.6476 16.6931 12.6761 16.489 12.6427 16.2903C12.6092 16.0917 12.5155 15.9081 12.3743 15.7645C12.3745 15.7597 12.375 15.7549 12.375 15.75C12.375 15.7451 12.3745 15.7403 12.3743 15.7355C12.465 15.6433 12.5366 15.5341 12.585 15.4142C12.6333 15.2942 12.6575 15.1659 12.6562 15.0366C12.6549 14.9073 12.628 14.7795 12.5771 14.6606C12.5263 14.5417 12.4524 14.434 12.3599 14.3438C12.4524 14.2535 12.5263 14.1458 12.5771 14.0269C12.628 13.908 12.6549 13.7802 12.6562 13.6509C12.6575 13.5216 12.6333 13.3933 12.585 13.2733C12.5366 13.1534 12.465 13.0442 12.3743 12.952C12.3745 12.9472 12.375 12.9424 12.375 12.9375C12.375 12.9326 12.3745 12.9278 12.3743 12.923C12.5102 12.7847 12.6021 12.6093 12.6387 12.4189C12.6752 12.2285 12.6547 12.0316 12.5796 11.8528C12.5046 11.6741 12.3784 11.5215 12.2169 11.4142C12.0554 11.307 11.8658 11.2498 11.6719 11.25H8.43752V11.1902ZM1.68752 12.9375C1.68785 12.6392 1.80648 12.3533 2.01739 12.1424C2.2283 11.9315 2.51425 11.8128 2.81252 11.8125H11.6719C11.7838 11.8125 11.8911 11.8569 11.9702 11.9361C12.0493 12.0152 12.0938 12.1225 12.0938 12.2344C12.0938 12.3463 12.0493 12.4536 11.9702 12.5327C11.8911 12.6118 11.7838 12.6562 11.6719 12.6562H2.81252C2.73792 12.6562 2.66639 12.6859 2.61364 12.7386C2.5609 12.7914 2.53127 12.8629 2.53127 12.9375C2.53127 13.0121 2.5609 13.0836 2.61364 13.1364C2.66639 13.1891 2.73792 13.2188 2.81252 13.2188H11.6719C11.7838 13.2188 11.8911 13.2632 11.9702 13.3423C12.0493 13.4214 12.0938 13.5287 12.0938 13.6406C12.0938 13.7525 12.0493 13.8598 11.9702 13.9389C11.8911 14.0181 11.7838 14.0625 11.6719 14.0625H2.81252C2.51425 14.0622 2.2283 13.9435 2.01739 13.7326C1.80648 13.5217 1.68785 13.2358 1.68752 12.9375ZM2.81252 14.625H11.6719C11.7838 14.625 11.8911 14.6694 11.9702 14.7486C12.0493 14.8277 12.0938 14.935 12.0938 15.0469C12.0938 15.1588 12.0493 15.2661 11.9702 15.3452C11.8911 15.4243 11.7838 15.4688 11.6719 15.4688H2.81252C2.73792 15.4688 2.66639 15.4984 2.61364 15.5511C2.5609 15.6039 2.53127 15.6754 2.53127 15.75C2.53127 15.8246 2.5609 15.8961 2.61364 15.9489C2.66639 16.0016 2.73792 16.0312 2.81252 16.0312H11.6719C11.7838 16.0312 11.8911 16.0757 11.9702 16.1548C12.0493 16.2339 12.0938 16.3412 12.0938 16.4531C12.0938 16.565 12.0493 16.6723 11.9702 16.7514C11.8911 16.8306 11.7838 16.875 11.6719 16.875H2.81252C2.51415 16.875 2.228 16.7565 2.01702 16.5455C1.80604 16.3345 1.68752 16.0484 1.68752 15.75C1.68752 15.4516 1.80604 15.1655 2.01702 14.9545C2.228 14.7435 2.51415 14.625 2.81252 14.625Z" fill="#001F2B" fill-opacity="0.72" />
                                    </svg>

                                    </span>Laundry Service
                                </div>
                                <div className='col-span-1 flex border-r-2 border-r-gray-700'>
                                    <span className='mr-2'><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_298_1054)">
                                            <path d="M15.9084 6.21084L15.5 5.82793V2.73861C15.5 1.50436 14.4289 0.500244 13.1124 0.500244C12.5707 0.500244 12.0708 0.670488 11.6698 0.956542C9.90204 0.142881 7.70136 0.42416 6.23314 1.80058C4.6608 3.27468 4.42846 5.53625 5.53546 7.24346L3.74509 8.92194H2.98878C2.81621 8.92194 2.67628 9.0531 2.67628 9.21491V9.75239H2.10293C1.93037 9.75239 1.79043 9.88355 1.79043 10.0454V10.5828H1.21715C1.04459 10.5828 0.904655 10.714 0.904655 10.8758V11.4133H0.331374C0.2485 11.4133 0.169031 11.4442 0.110406 11.4991L0.0915311 11.5168C0.0329374 11.5717 0 11.6462 0 11.7239V13.6248C0 13.7866 0.139937 13.9178 0.312499 13.9178H2.37796C2.46084 13.9178 2.54031 13.8869 2.59893 13.832L6.04608 10.6003C6.16811 10.4859 6.16811 10.3004 6.04608 10.1859C5.92402 10.0715 5.72621 10.0715 5.60411 10.1859L2.2485 13.3319H0.624999V11.9991H1.21719C1.38975 11.9991 1.52968 11.868 1.52968 11.7062V11.1687H2.103C2.27556 11.1687 2.4155 11.0375 2.4155 10.8757V10.3382H2.98884C3.1614 10.3382 3.30134 10.2071 3.30134 10.0453V9.50779H3.87465C3.95752 9.50779 4.03699 9.47691 4.09562 9.42198L5.90077 7.72967C6.00405 7.84915 6.11483 7.96478 6.23333 8.07587C7.07883 8.86853 8.18795 9.32412 9.37529 9.37123V14.2693C9.37529 14.9477 9.96408 15.4997 10.6878 15.4997H14.6877C15.4113 15.4997 16.0001 14.9477 16.0001 14.2693V6.41797C16 6.3403 15.967 6.2658 15.9084 6.21084ZM13.1124 1.08615C14.0843 1.08615 14.875 1.82742 14.875 2.73858V5.24196L14.313 4.71515C14.3103 4.71257 14.3073 4.71037 14.3045 4.70791C14.2463 3.64956 13.7873 2.60713 12.9269 1.8005C12.7214 1.60787 12.5015 1.4368 12.2705 1.28707C12.5209 1.15904 12.8077 1.08615 13.1124 1.08615ZM11.3497 3.57076V2.92403C11.4311 2.95834 11.5076 3.006 11.5743 3.06858C11.7174 3.20273 11.7963 3.38106 11.7963 3.57076C11.7963 3.76045 11.7174 3.93881 11.5743 4.07296C11.279 4.34988 10.7984 4.34991 10.503 4.07296C10.2077 3.79605 10.2077 3.34549 10.503 3.06861C10.569 3.00679 10.6444 2.95957 10.7247 2.92535V3.57079C10.7247 3.73259 10.8647 3.86375 11.0372 3.86375C11.2098 3.86375 11.3497 3.73253 11.3497 3.57076ZM9.57998 8.78785C8.52811 8.78776 7.47586 8.41232 6.67505 7.66159C5.07333 6.15995 5.07333 3.71654 6.67508 2.21487C7.45102 1.48743 8.4827 1.0868 9.58004 1.0868C10.1469 1.0868 10.6962 1.19399 11.2018 1.39764C10.9919 1.65984 10.842 1.96655 10.7711 2.29963C10.5108 2.34741 10.2624 2.46556 10.0611 2.65423C9.52208 3.1596 9.52208 3.98185 10.0611 4.48722C10.3307 4.7399 10.6846 4.86623 11.0387 4.86623C11.3927 4.86623 11.7468 4.73988 12.0163 4.48722C12.2774 4.24242 12.4212 3.9169 12.4212 3.57073C12.4212 3.22453 12.2774 2.89904 12.0163 2.65423C11.841 2.48994 11.63 2.37943 11.4065 2.32198C11.4737 2.08046 11.5979 1.86047 11.7647 1.67505C12.0226 1.82742 12.2641 2.00789 12.4849 2.2149C13.2608 2.94234 13.6882 3.90952 13.6882 4.93827C13.6882 5.96703 13.2608 6.93421 12.4849 7.66165C11.6839 8.41255 10.6321 8.78793 9.57998 8.78785ZM15.375 14.2694C15.375 14.6248 15.0666 14.9139 14.6875 14.9139H10.6876C10.3085 14.9139 10.0001 14.6248 10.0001 14.2694V9.35817C11.1059 9.26758 12.1327 8.82051 12.9269 8.07593C13.6958 7.35514 14.144 6.446 14.2722 5.50552L15.375 6.53932V14.2694Z" fill="#001F2B" fill-opacity="0.72" />
                                            <path d="M7.98898 3.44665C8.11108 3.33225 8.11108 3.14674 7.98901 3.03234C7.86695 2.91793 7.66914 2.91793 7.54705 3.03234C6.42605 4.0833 6.42605 5.79333 7.54705 6.84426C7.60808 6.90148 7.68805 6.93007 7.76802 6.93007C7.84798 6.93007 7.92795 6.90145 7.98898 6.84426C8.11101 6.72986 8.11101 6.54435 7.98898 6.42995C7.11167 5.60744 7.11167 4.26913 7.98898 3.44665Z" fill="#001F2B" fill-opacity="0.72" />
                                            <path d="M8.98238 6.97492C8.98147 6.97469 8.97791 6.97375 8.977 6.97351C8.81091 6.93048 8.63938 7.02209 8.59341 7.17792C8.54738 7.33363 8.64519 7.49506 8.81122 7.53847C8.83975 7.54606 8.86844 7.54967 8.89669 7.54967C9.03269 7.54967 9.15778 7.46579 9.197 7.33712C9.24444 7.18152 9.14835 7.01936 8.98238 6.97492Z" fill="#001F2B" fill-opacity="0.72" />
                                            <path d="M14.0156 13.3318H11.3594C11.1868 13.3318 11.0469 13.4629 11.0469 13.6248C11.0469 13.7866 11.1868 13.9177 11.3594 13.9177H14.0156C14.1881 13.9177 14.3281 13.7866 14.3281 13.6248C14.3281 13.4629 14.1881 13.3318 14.0156 13.3318Z" fill="#001F2B" fill-opacity="0.72" />
                                            <path d="M6.84737 9.43472C6.78928 9.38022 6.70865 9.34888 6.62646 9.34888C6.54428 9.34888 6.46365 9.38022 6.40553 9.43472C6.3474 9.48921 6.31396 9.56479 6.31396 9.64185C6.31396 9.7189 6.34737 9.79448 6.40553 9.84897C6.46368 9.90347 6.54428 9.93481 6.62646 9.93481C6.70896 9.93481 6.78928 9.90347 6.84737 9.84897C6.90581 9.79448 6.93896 9.7189 6.93896 9.64185C6.93896 9.56479 6.90581 9.48921 6.84737 9.43472Z" fill="#001F2B" fill-opacity="0.72" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_298_1054">
                                                <rect width="16" height="15" fill="white" transform="translate(0 0.5)" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                    </span>Room Service
                                </div>
                                <div className='col-span-1 flex '>
                                    <span className='mr-2'><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.4008 1.81224C16.3899 1.74792 16.3624 1.68757 16.321 1.63714C16.2796 1.58671 16.2258 1.54795 16.1649 1.52467C16.104 1.5014 16.038 1.49443 15.9735 1.50445C15.9091 1.51446 15.8484 1.54112 15.7974 1.58179C14.5683 2.56166 12.9555 2.92236 11.2481 3.30427C8.80527 3.85067 6.03636 4.46994 3.88318 7.08789C2.5386 8.72262 2.31718 10.4801 2.36819 11.6665C2.39616 12.3544 2.52089 13.035 2.73871 13.6881C1.89102 15.0098 1.53949 15.9511 1.52318 15.9955C1.48963 16.0886 1.49425 16.1912 1.53605 16.281C1.57784 16.3707 1.65342 16.4403 1.74629 16.4745C1.83917 16.5087 1.94181 16.5048 2.03184 16.4637C2.12187 16.4226 2.19199 16.3475 2.2269 16.2549C2.23042 16.2449 2.55305 15.3862 3.31478 14.1803C4.46375 14.5216 5.65409 14.7038 6.85255 14.7217C6.89778 14.7222 6.94287 14.7225 6.98779 14.7225C8.18828 14.7225 9.30108 14.5359 10.2974 14.1673C11.5848 13.6962 12.7181 12.8804 13.5732 11.8088C15.5038 9.40873 16.1704 6.82418 16.3897 5.0786C16.6275 3.18484 16.4102 1.86743 16.4008 1.81224ZM15.642 5.01184C15.4324 6.65385 14.8018 9.08441 12.9887 11.3386C12.2208 12.3009 11.204 13.0343 10.0486 13.4594C9.10455 13.8105 8.03869 13.983 6.88299 13.9718C5.82428 13.9556 4.77187 13.8054 3.75092 13.5247C4.02926 13.1271 4.3669 12.6825 4.76799 12.2136C5.21574 12.3037 6.25159 12.4895 7.1768 12.4895C7.35774 12.4902 7.5386 12.4818 7.71869 12.4643C7.81764 12.4543 7.90852 12.4053 7.97137 12.3282C8.03421 12.2511 8.06386 12.1522 8.05379 12.0533C8.04372 11.9544 7.99475 11.8635 7.91767 11.8006C7.84059 11.7378 7.7417 11.7081 7.64276 11.7182C6.9314 11.7904 5.98039 11.6655 5.35676 11.5592C5.84626 11.0415 6.36682 10.554 6.91555 10.0995C7.33584 10.2244 8.35115 10.4771 9.68516 10.4771C10.0383 10.4771 10.3912 10.4593 10.7425 10.4235C10.7922 10.4194 10.8406 10.4054 10.8848 10.3824C10.929 10.3594 10.9682 10.3278 11.0001 10.2895C11.0319 10.2511 11.0558 10.2068 11.0704 10.1591C11.0849 10.1114 11.0898 10.0613 11.0847 10.0117C11.0797 9.96213 11.0648 9.91404 11.0409 9.87027C11.017 9.8265 10.9847 9.78792 10.9457 9.7568C10.9068 9.72568 10.862 9.70264 10.8141 9.68902C10.7661 9.6754 10.7159 9.67149 10.6664 9.6775C9.66304 9.77769 8.65018 9.72243 7.66364 9.51367C8.10046 9.19069 8.56933 8.87583 9.07186 8.57609C9.57438 8.27634 10.0562 7.97608 10.5158 7.67651C10.9828 7.7481 11.4542 7.7866 11.9266 7.79172C12.1858 7.79481 12.4447 7.77439 12.7002 7.73072C12.7488 7.72183 12.7952 7.70342 12.8366 7.67656C12.8781 7.64969 12.9139 7.6149 12.9418 7.57418C12.9698 7.53346 12.9895 7.48761 12.9997 7.43927C13.0099 7.39093 13.0104 7.34106 13.0013 7.2925C12.9921 7.24395 12.9735 7.19768 12.9464 7.15635C12.9194 7.11503 12.8844 7.07945 12.8435 7.05168C12.8027 7.02391 12.7567 7.00448 12.7083 6.99452C12.66 6.98456 12.6101 6.98426 12.5616 6.99363C12.246 7.05298 11.8441 7.05038 11.4788 7.02675C12.1249 6.57524 12.719 6.12629 13.2556 5.6828C13.2939 5.65153 13.3256 5.613 13.3489 5.56943C13.3722 5.52586 13.3867 5.47811 13.3915 5.42893C13.3964 5.37974 13.3914 5.3301 13.377 5.28283C13.3625 5.23557 13.3389 5.19163 13.3074 5.15354C13.2759 5.11544 13.2372 5.08395 13.1935 5.06086C13.1498 5.03777 13.102 5.02355 13.0528 5.019C13.0036 5.01446 12.954 5.01969 12.9068 5.03439C12.8596 5.04909 12.8158 5.07297 12.7779 5.10465C12.2252 5.56131 11.6113 6.02344 10.936 6.49104C10.9872 6.29533 11.0582 6.10533 11.1479 5.92397C11.1958 5.83682 11.2072 5.73419 11.1794 5.63867C11.1517 5.54315 11.0872 5.46256 11 5.41463C10.9129 5.36669 10.8102 5.35534 10.7147 5.38307C10.6192 5.4108 10.5386 5.47534 10.4907 5.56249C10.4759 5.58918 10.1519 6.18553 10.0712 7.07087C9.63058 7.35737 9.16939 7.64439 8.68763 7.93192C8.18015 8.23461 7.70576 8.55218 7.26247 8.87783C7.39153 7.87908 7.70656 6.89245 7.71061 6.87994C7.7393 6.78581 7.72985 6.68418 7.6843 6.59696C7.63874 6.50974 7.56073 6.44392 7.46708 6.4137C7.37344 6.38347 7.27167 6.39127 7.18371 6.4354C7.09576 6.47953 7.02868 6.55646 6.99694 6.6496C6.97545 6.71615 6.49276 8.22565 6.46003 9.50333C5.92751 9.94286 5.42028 10.4122 4.94079 10.909C4.9604 10.4471 5.04783 9.99055 5.20028 9.55406C5.23556 9.46169 5.23294 9.35912 5.19298 9.26867C5.15302 9.17823 5.07895 9.10722 4.9869 9.07111C4.89484 9.03501 4.79225 9.03672 4.70145 9.07587C4.61065 9.11503 4.539 9.18847 4.50207 9.2802C4.48284 9.32913 4.05383 10.4418 4.22933 11.6898C3.86856 12.1094 3.5556 12.5114 3.28855 12.8808C3.1911 12.4624 3.13342 12.0358 3.11628 11.6066C3.05712 10.0822 3.51003 8.72216 4.46238 7.56429C6.45184 5.14554 8.97328 4.58156 11.4118 4.03615C12.9759 3.68631 14.4644 3.35338 15.7242 2.55319C15.7751 3.37349 15.7476 4.19677 15.642 5.01184Z" fill="#001F2B" fill-opacity="0.72" />
                                    </svg>

                                    </span>Forest View
                                </div>
                                <div className='col-span-1 flex '>
                                    <span className='mr-2'><svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_298_1078)">
                                            <path d="M21.7653 6.11776C21.4666 5.31944 20.5742 4.8414 19.7276 5.0539L18.5444 4.34024C18.0975 4.07266 17.5575 4.0203 17.0631 4.19608L12.7346 5.75396L9.18027 0.786217C9.0909 0.661437 8.92693 0.611117 8.78221 0.663137L6.8469 1.36014C6.66815 1.4244 6.57637 1.61922 6.64134 1.79568L8.63784 7.22786L4.33408 8.7769L2.02237 6.21942C1.92921 6.11606 1.78105 6.07866 1.64871 6.1266L0.356554 6.59172C0.177804 6.65564 0.0860226 6.85114 0.150991 7.02726L2.03165 12.1388C2.08115 12.2735 2.2104 12.3625 2.35443 12.3625C2.3558 12.3625 2.35718 12.3625 2.3589 12.3625L9.64296 12.2741C9.68146 12.2738 9.7203 12.2667 9.7564 12.2534L10.4016 12.0205L12.283 17.1327C12.3335 17.2708 12.4655 17.3568 12.6057 17.3568C12.6446 17.3568 12.6845 17.35 12.7233 17.3361L14.6617 16.638C14.8075 16.5857 14.8996 16.4432 14.8865 16.2906L14.407 10.5796L20.7389 8.29886C21.415 8.05542 21.8691 7.41214 21.8691 6.6978C21.8695 6.50468 21.8351 6.31054 21.7653 6.11776ZM7.4048 1.88306L8.77087 1.39108L12.0654 5.99468L9.28374 6.99564L7.4048 1.88306ZM1.85462 9.6694L0.91446 7.11464L1.66521 6.84468L3.63868 9.02748L1.85462 9.6694ZM12.8116 16.5809L10.4601 10.191L13.5902 9.0642L14.1801 16.0886L12.8116 16.5809ZM20.5041 7.66068L14.3482 9.87782L14.2379 8.5644C14.2293 8.45866 14.1712 8.36312 14.0808 8.306C13.9904 8.24888 13.878 8.23732 13.7779 8.27268L9.9018 9.66804C9.81621 9.69898 9.74643 9.76222 9.70793 9.84382C9.66943 9.92576 9.6653 10.0193 9.69658 10.1039L10.1668 11.3816L9.57627 11.5948L2.59437 11.6798L2.09043 10.3086L17.2972 4.83562C17.5946 4.72954 17.9198 4.76116 18.1876 4.9213L18.5169 5.11986L17.5076 5.48332L17.7427 6.12252L19.2683 5.57342L19.501 5.71384C19.5894 5.76756 19.6983 5.7781 19.7949 5.7441C20.3422 5.55132 20.9303 5.84406 21.1194 6.35032C21.161 6.46592 21.1823 6.58288 21.1823 6.69848C21.182 7.1279 20.9094 7.51448 20.5041 7.66068Z" fill="#001F2B" fill-opacity="0.72" />
                                            <path d="M15.8924 6.0653L15.2466 6.29761L15.4816 6.93667L16.1274 6.70436L15.8924 6.0653Z" fill="#001F2B" fill-opacity="0.72" />
                                            <path d="M14.6001 6.53039L13.9543 6.7627L14.1893 7.40176L14.8351 7.16945L14.6001 6.53039Z" fill="#001F2B" fill-opacity="0.72" />
                                            <path d="M13.3084 6.99572L12.6626 7.22803L12.8976 7.86709L13.5434 7.63478L13.3084 6.99572Z" fill="#001F2B" fill-opacity="0.72" />
                                            <path d="M12.0161 7.46081L11.3704 7.69312L11.6053 8.33218L12.2511 8.09987L12.0161 7.46081Z" fill="#001F2B" fill-opacity="0.72" />
                                            <path d="M10.7239 7.9259L10.0781 8.1582L10.3131 8.79727L10.9589 8.56496L10.7239 7.9259Z" fill="#001F2B" fill-opacity="0.72" />
                                            <path d="M9.43168 8.39098L8.78589 8.62329L9.02088 9.26236L9.66667 9.03005L9.43168 8.39098Z" fill="#001F2B" fill-opacity="0.72" />
                                            <path d="M8.13944 8.85632L7.49365 9.08862L7.72864 9.72769L8.37443 9.49538L8.13944 8.85632Z" fill="#001F2B" fill-opacity="0.72" />
                                            <path d="M6.84812 9.32021L6.20215 9.55298L6.43748 10.1919L7.08345 9.95914L6.84812 9.32021Z" fill="#001F2B" fill-opacity="0.72" />
                                            <path d="M5.55589 9.78555L4.90991 10.0183L5.14524 10.6572L5.79122 10.4245L5.55589 9.78555Z" fill="#001F2B" fill-opacity="0.72" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_298_1078">
                                                <rect width="22" height="17" fill="white" transform="translate(0 0.5)" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                    </span>Airport Taxi Service
                                </div>



                            </div>
                        </div>
                        <div className='cols-span-1 flex justify-center lg:justify-end'>
                        <div className='md:flex w-[406px] h-[368px] overflow-hidden '>
                                <img className='w-[300px] h-[300px]' src="/CarpeDiem/vill1.png" alt="" />
                                <img className='w-[314px] h-[279px] mt-[150px] ml-[-150px]' src="/CarpeDiem/vill2.png"  alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* vlla Araliya */}
            <section className='bg-[#F9F9F9]'>

                <div className='mt-5  lg:mt-20 2xl:px-[20rem]  grid grid-cols-1  gap-8 mx-5 lg:px-20 py-5 lg:py-20 md:grid-cols-4 '>

                    <div className='lg:col-span-1 md:col-span-2  md:col-start-1 lg:mt-72   '>
                        <div className='my-auto  w-[232px] h-[278px]'>
                            <img className='w-[232px] h-[278px] object-cover relative ml-3' src="/VillaAraliya/vill1.jpg" alt="" />
                        </div>
                    </div>

                    <div className='col-span-2   my-auto'>

                        <h2 className="text-3xl md:text-5xl text-center font-extrabold text-gray-800 mb-6">Villa Araliya</h2>
                        <p className="text-lg   text-justify flex ">Villa Araliya offers serene accommodations with a focus on Ayurvedic wellness. It features elegantly furnished rooms with modern amenities and beautiful views of the surrounding nature. Guests can enjoy personalized Ayurvedic treatments and therapies during their stay.</p>
                        <p className='text-lg max-w-xl pt-5 font-semibold'>Amenities</p>
                        <div className='grid grid-cols-2 mt-5 gap-4'>
                            <div className='col-span-1 flex border-r-2 border-r-gray-700'>
                                <span className='mr-2'><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_298_1283)">
                                        <path d="M15.9084 6.21084L15.5 5.82793V2.73861C15.5 1.50436 14.4289 0.500244 13.1124 0.500244C12.5707 0.500244 12.0708 0.670488 11.6698 0.956542C9.90204 0.142881 7.70136 0.42416 6.23314 1.80058C4.6608 3.27468 4.42846 5.53625 5.53546 7.24346L3.74509 8.92194H2.98878C2.81621 8.92194 2.67628 9.0531 2.67628 9.21491V9.75239H2.10293C1.93037 9.75239 1.79043 9.88355 1.79043 10.0454V10.5828H1.21715C1.04459 10.5828 0.904655 10.714 0.904655 10.8758V11.4133H0.331374C0.2485 11.4133 0.169031 11.4442 0.110406 11.4991L0.0915311 11.5168C0.0329374 11.5717 0 11.6462 0 11.7239V13.6248C0 13.7866 0.139937 13.9178 0.312499 13.9178H2.37796C2.46084 13.9178 2.54031 13.8869 2.59893 13.832L6.04608 10.6003C6.16811 10.4859 6.16811 10.3004 6.04608 10.1859C5.92402 10.0715 5.72621 10.0715 5.60411 10.1859L2.2485 13.3319H0.624999V11.9991H1.21719C1.38975 11.9991 1.52968 11.868 1.52968 11.7062V11.1687H2.103C2.27556 11.1687 2.4155 11.0375 2.4155 10.8757V10.3382H2.98884C3.1614 10.3382 3.30134 10.2071 3.30134 10.0453V9.50779H3.87465C3.95752 9.50779 4.03699 9.47691 4.09562 9.42198L5.90077 7.72967C6.00405 7.84915 6.11483 7.96478 6.23333 8.07587C7.07883 8.86853 8.18795 9.32412 9.37529 9.37123V14.2693C9.37529 14.9477 9.96408 15.4997 10.6878 15.4997H14.6877C15.4113 15.4997 16.0001 14.9477 16.0001 14.2693V6.41797C16 6.3403 15.967 6.2658 15.9084 6.21084ZM13.1124 1.08615C14.0843 1.08615 14.875 1.82742 14.875 2.73858V5.24196L14.313 4.71515C14.3103 4.71257 14.3073 4.71037 14.3045 4.70791C14.2463 3.64956 13.7873 2.60713 12.9269 1.8005C12.7214 1.60787 12.5015 1.4368 12.2705 1.28707C12.5209 1.15904 12.8077 1.08615 13.1124 1.08615ZM11.3497 3.57076V2.92403C11.4311 2.95834 11.5076 3.006 11.5743 3.06858C11.7174 3.20273 11.7963 3.38106 11.7963 3.57076C11.7963 3.76045 11.7174 3.93881 11.5743 4.07296C11.279 4.34988 10.7984 4.34991 10.503 4.07296C10.2077 3.79605 10.2077 3.34549 10.503 3.06861C10.569 3.00679 10.6444 2.95957 10.7247 2.92535V3.57079C10.7247 3.73259 10.8647 3.86375 11.0372 3.86375C11.2098 3.86375 11.3497 3.73253 11.3497 3.57076ZM9.57998 8.78785C8.52811 8.78776 7.47586 8.41232 6.67505 7.66159C5.07333 6.15995 5.07333 3.71654 6.67508 2.21487C7.45102 1.48743 8.4827 1.0868 9.58004 1.0868C10.1469 1.0868 10.6962 1.19399 11.2018 1.39764C10.9919 1.65984 10.842 1.96655 10.7711 2.29963C10.5108 2.34741 10.2624 2.46556 10.0611 2.65423C9.52208 3.1596 9.52208 3.98185 10.0611 4.48722C10.3307 4.7399 10.6846 4.86623 11.0387 4.86623C11.3927 4.86623 11.7468 4.73988 12.0163 4.48722C12.2774 4.24242 12.4212 3.9169 12.4212 3.57073C12.4212 3.22453 12.2774 2.89904 12.0163 2.65423C11.841 2.48994 11.63 2.37943 11.4065 2.32198C11.4737 2.08046 11.5979 1.86047 11.7647 1.67505C12.0226 1.82742 12.2641 2.00789 12.4849 2.2149C13.2608 2.94234 13.6882 3.90952 13.6882 4.93827C13.6882 5.96703 13.2608 6.93421 12.4849 7.66165C11.6839 8.41255 10.6321 8.78793 9.57998 8.78785ZM15.375 14.2694C15.375 14.6248 15.0666 14.9139 14.6875 14.9139H10.6876C10.3085 14.9139 10.0001 14.6248 10.0001 14.2694V9.35817C11.1059 9.26758 12.1327 8.82051 12.9269 8.07593C13.6958 7.35514 14.144 6.446 14.2722 5.50552L15.375 6.53932V14.2694Z" fill="#001F2B" fill-opacity="0.52" />
                                        <path d="M7.98898 3.44665C8.11108 3.33225 8.11108 3.14674 7.98901 3.03234C7.86695 2.91793 7.66914 2.91793 7.54705 3.03234C6.42605 4.0833 6.42605 5.79333 7.54705 6.84426C7.60808 6.90148 7.68805 6.93007 7.76802 6.93007C7.84798 6.93007 7.92795 6.90145 7.98898 6.84426C8.11101 6.72986 8.11101 6.54435 7.98898 6.42995C7.11167 5.60744 7.11167 4.26913 7.98898 3.44665Z" fill="#001F2B" fill-opacity="0.52" />
                                        <path d="M8.98238 6.97492C8.98147 6.97469 8.97791 6.97375 8.977 6.97351C8.81091 6.93048 8.63938 7.02209 8.59341 7.17792C8.54738 7.33363 8.64519 7.49506 8.81122 7.53847C8.83975 7.54606 8.86844 7.54967 8.89669 7.54967C9.03269 7.54967 9.15778 7.46579 9.197 7.33712C9.24444 7.18152 9.14835 7.01936 8.98238 6.97492Z" fill="#001F2B" fill-opacity="0.52" />
                                        <path d="M14.0156 13.3318H11.3594C11.1868 13.3318 11.0469 13.4629 11.0469 13.6248C11.0469 13.7866 11.1868 13.9177 11.3594 13.9177H14.0156C14.1881 13.9177 14.3281 13.7866 14.3281 13.6248C14.3281 13.4629 14.1881 13.3318 14.0156 13.3318Z" fill="#001F2B" fill-opacity="0.52" />
                                        <path d="M6.84737 9.43472C6.78928 9.38022 6.70865 9.34888 6.62646 9.34888C6.54428 9.34888 6.46365 9.38022 6.40553 9.43472C6.3474 9.48921 6.31396 9.56479 6.31396 9.64185C6.31396 9.7189 6.34737 9.79448 6.40553 9.84897C6.46368 9.90347 6.54428 9.93481 6.62646 9.93481C6.70896 9.93481 6.78928 9.90347 6.84737 9.84897C6.90581 9.79448 6.93896 9.7189 6.93896 9.64185C6.93896 9.56479 6.90581 9.48921 6.84737 9.43472Z" fill="#001F2B" fill-opacity="0.52" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_298_1283">
                                            <rect width="16" height="15" fill="white" transform="translate(0 0.5)" />
                                        </clipPath>
                                    </defs>
                                </svg>

                                </span>Luxurious Rooms
                            </div>
                            <div className='col-span-1 flex '>
                                <span className='mr-2'><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.1287 15.7796L11.2499 15.1937V10H15.4166C15.6376 10 15.8496 9.9122 16.0058 9.75592C16.1621 9.59964 16.2499 9.38768 16.2499 9.16667V8.33333C16.2499 8.11232 16.1621 7.90036 16.0058 7.74408C15.8496 7.5878 15.6376 7.5 15.4166 7.5H14.1453C14.048 6.54424 13.6239 5.65132 12.9446 4.972C12.2653 4.29268 11.3723 3.86857 10.4166 3.77125V3.33333H10.8333C10.9438 3.33333 11.0497 3.28943 11.1279 3.21129C11.206 3.13315 11.2499 3.02717 11.2499 2.91667C11.2499 2.80616 11.206 2.70018 11.1279 2.62204C11.0497 2.5439 10.9438 2.5 10.8333 2.5H9.16659C9.05608 2.5 8.9501 2.5439 8.87196 2.62204C8.79382 2.70018 8.74992 2.80616 8.74992 2.91667C8.74992 3.02717 8.79382 3.13315 8.87196 3.21129C8.9501 3.28943 9.05608 3.33333 9.16659 3.33333H9.58325V3.77125C8.62749 3.86857 7.73458 4.29268 7.05526 4.972C6.37594 5.65132 5.95182 6.54424 5.8545 7.5H4.16659C3.94557 7.5 3.73361 7.5878 3.57733 7.74408C3.42105 7.90036 3.33325 8.11232 3.33325 8.33333V9.16667C3.33325 9.38768 3.42105 9.59964 3.57733 9.75592C3.73361 9.9122 3.94557 10 4.16659 10H8.74992V15.1937L7.87117 15.7796C7.757 15.8557 7.66337 15.9587 7.59861 16.0797C7.53384 16.2006 7.49994 16.3357 7.49992 16.4729V16.6667C7.49992 16.8877 7.58772 17.0996 7.744 17.2559C7.90028 17.4122 8.11224 17.5 8.33325 17.5H11.6666C11.8876 17.5 12.0996 17.4122 12.2558 17.2559C12.4121 17.0996 12.4999 16.8877 12.4999 16.6667V16.4729C12.4999 16.3357 12.466 16.2006 12.4012 16.0797C12.3365 15.9587 12.2428 15.8557 12.1287 15.7796ZM9.99992 4.58333C10.8112 4.58468 11.5941 4.88153 12.2024 5.41836C12.8106 5.95518 13.2024 6.69521 13.3045 7.5H6.69534C6.79745 6.69521 7.18926 5.95518 7.79749 5.41836C8.40571 4.88153 9.18868 4.58468 9.99992 4.58333ZM4.16659 9.16667V8.33333H15.4166V9.16667H4.16659ZM11.6666 16.6667H8.33325V16.4729L9.212 15.8871C9.32618 15.811 9.4198 15.7079 9.48456 15.587C9.54933 15.466 9.58323 15.3309 9.58325 15.1937V10H10.4166V15.1937C10.4166 15.3309 10.4505 15.466 10.5153 15.587C10.58 15.7079 10.6737 15.811 10.7878 15.8871L11.6666 16.4729V16.6667Z" fill="#001F2B" fill-opacity="0.34" />
                                    <path d="M19.3227 12.6667L19.9927 7.61133C20.0085 7.49378 19.9991 7.37419 19.965 7.26058C19.9309 7.14697 19.8729 7.04194 19.795 6.95252C19.717 6.8631 19.6209 6.79135 19.513 6.74207C19.4051 6.69279 19.2879 6.66711 19.1693 6.66675H18.7168C18.5339 6.66725 18.3562 6.72795 18.2111 6.83947C18.0661 6.95099 17.9618 7.10715 17.9143 7.28383L16.8364 11.3097H14.2681C13.9917 11.3098 13.7233 11.4019 13.5051 11.5715C13.2869 11.7411 13.1314 11.9785 13.0631 12.2463L12.9435 12.7084C12.912 12.8303 12.9085 12.9578 12.9334 13.0812C12.9582 13.2047 13.0107 13.3209 13.0869 13.4211C13.163 13.5214 13.261 13.603 13.3732 13.66C13.4855 13.717 13.6093 13.7478 13.7352 13.7501L12.9302 16.9842C12.9169 17.0374 12.9143 17.0926 12.9225 17.1467C12.9306 17.2009 12.9493 17.2529 12.9776 17.2998C13.0058 17.3467 13.043 17.3876 13.0871 17.4201C13.1312 17.4526 13.1812 17.4761 13.2343 17.4892C13.2668 17.497 13.3001 17.5006 13.3335 17.5001C13.4264 17.5001 13.5167 17.469 13.5899 17.4117C13.6632 17.3545 13.7152 17.2744 13.7377 17.1842L14.5927 13.7501H18.0002L18.7606 17.1738C18.7811 17.2663 18.8326 17.349 18.9064 17.4083C18.9803 17.4676 19.0721 17.5 19.1668 17.5001C19.1974 17.5 19.2278 17.4967 19.2577 17.4901C19.3111 17.4782 19.3617 17.456 19.4065 17.4246C19.4514 17.3932 19.4896 17.3533 19.519 17.3071C19.5484 17.261 19.5684 17.2095 19.5779 17.1556C19.5874 17.1017 19.5862 17.0464 19.5743 16.993L18.8018 13.5176C18.9425 13.4193 19.0614 13.2929 19.1511 13.1465C19.2407 13.0001 19.2991 12.8368 19.3227 12.6667ZM13.7502 12.9167L13.8693 12.4547C13.8917 12.3659 13.9429 12.2871 14.0151 12.2307C14.0872 12.1743 14.1761 12.1436 14.2677 12.1434H17.156C17.2477 12.1434 17.3369 12.1132 17.4096 12.0574C17.4824 12.0015 17.5347 11.9233 17.5585 11.8347L18.7168 7.50008H19.1668L18.4968 12.5555C18.4835 12.6548 18.4349 12.746 18.3598 12.8123C18.2847 12.8787 18.1883 12.9157 18.0881 12.9167H13.7502Z" fill="#001F2B" fill-opacity="0.34" />
                                    <path d="M6.90837 13.428C6.98671 13.3275 7.04087 13.2103 7.06667 13.0856C7.09246 12.9608 7.08919 12.8317 7.05712 12.7084L6.93795 12.2476C6.86966 11.9796 6.71412 11.7421 6.49586 11.5723C6.2776 11.4026 6.00904 11.3103 5.73254 11.3101H3.16379L2.08587 7.28383C2.03839 7.10715 1.93409 6.95099 1.78906 6.83947C1.64403 6.72795 1.46632 6.66725 1.28337 6.66675H0.83087C0.712373 6.66713 0.595321 6.69279 0.487524 6.74199C0.379726 6.7912 0.283663 6.86283 0.205744 6.95211C0.127824 7.04138 0.0698405 7.14625 0.0356616 7.25971C0.00148261 7.37317 -0.00810561 7.49262 0.00753669 7.61008L0.677537 12.6667C0.699875 12.8293 0.754109 12.9859 0.837125 13.1275C0.92014 13.2691 1.0303 13.3929 1.16129 13.4917L0.382953 16.993C0.358973 17.1009 0.378843 17.2139 0.43819 17.3072C0.497537 17.4004 0.591502 17.4663 0.699412 17.4903C0.807322 17.5143 0.920338 17.4944 1.0136 17.4351C1.10686 17.3757 1.17272 17.2817 1.1967 17.1738L1.95837 13.7501H5.36462L6.21962 17.1842C6.24216 17.2746 6.29435 17.3549 6.36784 17.4121C6.44133 17.4694 6.53188 17.5003 6.62504 17.5001C6.65904 17.5002 6.69293 17.496 6.72587 17.4876C6.77898 17.4744 6.82896 17.4508 6.87297 17.4183C6.91697 17.3858 6.95414 17.3449 6.98235 17.298C7.01055 17.2511 7.02925 17.1991 7.03736 17.145C7.04547 17.0909 7.04284 17.0357 7.02962 16.9826L6.22295 13.7501H6.25212C6.37889 13.7504 6.50404 13.7215 6.61785 13.6657C6.73165 13.6098 6.83106 13.5285 6.90837 13.428ZM1.91212 12.9167C1.81194 12.9157 1.71548 12.8787 1.64041 12.8123C1.56534 12.746 1.51669 12.6548 1.50337 12.5555L0.83087 7.50008H1.28087L2.44129 11.8334C2.46504 11.922 2.51736 12.0003 2.59014 12.0561C2.66291 12.1119 2.75207 12.1422 2.84379 12.1422H5.73212C5.82376 12.1424 5.9127 12.1732 5.98491 12.2297C6.05711 12.2861 6.10847 12.365 6.13087 12.4538L6.25004 12.9167H1.91212Z" fill="#001F2B" fill-opacity="0.34" />
                                </svg>

                                </span>Organic Dining Options
                            </div>
                            <div className='col-span-2 flex'>
                                <span className='mr-2'><svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.7963 9.20314C8.05621 9.20314 8.26691 8.93977 8.26691 8.61488C8.26691 8.28999 8.05621 8.02661 7.7963 8.02661C7.53638 8.02661 7.32568 8.28999 7.32568 8.61488C7.32568 8.93977 7.53638 9.20314 7.7963 9.20314Z" fill="white" />
                                    <path d="M7.79641 9.39191C7.4537 9.39191 7.1748 9.0433 7.1748 8.61472C7.1748 8.18651 7.4537 7.83789 7.79641 7.83789C8.13913 7.83789 8.41802 8.1865 8.41802 8.61472C8.41802 9.0433 8.13913 9.39191 7.79641 9.39191ZM7.79641 8.21525C7.62012 8.21525 7.47669 8.39435 7.47669 8.61472C7.47669 8.83509 7.62012 9.01456 7.79641 9.01456C7.97271 9.01456 8.11614 8.83509 8.11614 8.61472C8.11614 8.39435 7.97271 8.21525 7.79641 8.21525Z" fill="#001F2B" fill-opacity="0.72" />
                                    <path d="M7.2718 6.79204C7.48663 6.79204 7.66078 6.57435 7.66078 6.30581C7.66078 6.03727 7.48663 5.81958 7.2718 5.81958C7.05697 5.81958 6.88281 6.03727 6.88281 6.30581C6.88281 6.57435 7.05697 6.79204 7.2718 6.79204Z" fill="white" />
                                    <path d="M7.27188 6.98073C6.97412 6.98073 6.73193 6.67781 6.73193 6.30561C6.73193 5.93341 6.97412 5.63086 7.27188 5.63086C7.56964 5.63086 7.81183 5.93341 7.81183 6.30561C7.81183 6.67781 7.56964 6.98073 7.27188 6.98073ZM7.27188 6.00822C7.14054 6.00822 7.03382 6.14162 7.03382 6.30561C7.03382 6.46997 7.14054 6.60337 7.27188 6.60337C7.40322 6.60337 7.50994 6.46997 7.50994 6.30561C7.50994 6.14162 7.40322 6.00822 7.27188 6.00822Z" fill="#001F2B" fill-opacity="0.72" />
                                    <path d="M6.34992 8.2542C6.56475 8.2542 6.73891 8.03651 6.73891 7.76797C6.73891 7.49943 6.56475 7.28174 6.34992 7.28174C6.13509 7.28174 5.96094 7.49943 5.96094 7.76797C5.96094 8.03651 6.13509 8.2542 6.34992 8.2542Z" fill="white" />
                                    <path d="M6.35001 8.44288C6.05225 8.44288 5.81006 8.13997 5.81006 7.76777C5.81006 7.39557 6.05225 7.09302 6.35001 7.09302C6.64762 7.09302 6.88981 7.39557 6.88981 7.76777C6.88981 8.13997 6.64762 8.44288 6.35001 8.44288ZM6.35001 7.47038C6.21867 7.47038 6.11195 7.60378 6.11195 7.76777C6.11195 7.93212 6.21867 8.06553 6.35001 8.06553C6.4812 8.06553 6.58792 7.93212 6.58792 7.76777C6.58792 7.60378 6.4812 7.47038 6.35001 7.47038Z" fill="#001F2B" fill-opacity="0.72" />
                                    <path d="M2.57397 8.83843C1.59203 7.79717 1.58594 5.79578 1.58594 5.79578C1.58594 5.79578 1.59953 5.79438 1.62876 5.78853C2.80352 5.60254 3.94008 6.46559 4.33241 7.86066C4.4985 8.44737 4.77041 9.01466 5.13661 9.56092C5.13661 9.56092 3.55347 9.87709 2.57397 8.83843Z" fill="white" />
                                    <path d="M4.5689 9.79634C3.99535 9.79634 3.12109 9.66589 2.47648 8.98229C1.45319 7.89739 1.43535 5.88161 1.43506 5.79649C1.43476 5.69846 1.49476 5.61628 1.57288 5.60781L1.60472 5.60228C2.85546 5.40328 4.06139 6.32825 4.47486 7.79789C4.6317 8.35176 4.8932 8.90417 5.25228 9.43962C5.28721 9.49158 5.29694 9.56307 5.27793 9.62682C5.25891 9.69058 5.2141 9.73664 5.16044 9.74733C5.13553 9.75212 4.90322 9.79634 4.5689 9.79634ZM2.67165 8.69485C3.35295 9.41677 4.36696 9.44146 4.84514 9.40645C4.55195 8.92222 4.33202 8.42473 4.19022 7.92355C3.83409 6.6577 2.81537 5.8455 1.74343 5.96306C1.77085 6.45244 1.9156 7.89296 2.67165 8.69485Z" fill="#001F2B" fill-opacity="0.72" />
                                    <path d="M3.24484 8.03889C3.20003 8.03889 3.15566 8.0142 3.12589 7.96666C3.11321 7.94639 1.83712 5.9262 0.779041 5.46592C0.700327 5.43165 0.658758 5.32404 0.686176 5.22565C0.713593 5.12726 0.799678 5.07603 0.878393 5.1092C2.0202 5.60633 3.30911 7.64716 3.3635 7.73376C3.41495 7.81594 3.40345 7.93423 3.33786 7.99872C3.31014 8.02562 3.27742 8.03889 3.24484 8.03889Z" fill="#001F2B" fill-opacity="0.72" />
                                    <path d="M3.28238 7.22596C3.27825 7.22596 3.27413 7.22559 3.27 7.22522L2.61434 7.15889C2.53135 7.15078 2.46944 7.05976 2.47607 6.95584C2.483 6.85192 2.55715 6.77748 2.63881 6.783L3.29447 6.84934C3.37746 6.85744 3.43937 6.94847 3.43274 7.05239C3.42625 7.15115 3.36021 7.22596 3.28238 7.22596Z" fill="#001F2B" fill-opacity="0.72" />
                                    <path d="M2.26677 7.48126C2.26309 7.48126 2.25955 7.48126 2.25587 7.48089C2.17273 7.47352 2.11008 7.38286 2.11613 7.27894L2.1574 6.55813C2.1633 6.45421 2.23597 6.37682 2.31866 6.38345C2.4018 6.39082 2.46445 6.48148 2.4584 6.5854L2.41713 7.30621C2.41153 7.40534 2.34519 7.48126 2.26677 7.48126Z" fill="#001F2B" fill-opacity="0.72" />
                                    <path d="M14.4574 6.40303C13.298 9.49273 11.1478 13.2503 10.3993 12.8114C9.65088 12.3726 10.5876 7.90361 11.747 4.8139C12.9064 1.7242 13.8494 1.1838 14.5978 1.62263C15.3463 2.06145 15.6167 3.31332 14.4574 6.40303Z" fill="white" />
                                    <path d="M10.5291 13.0349C10.4594 13.0349 10.3947 13.0172 10.3352 12.9826C9.35564 12.4081 10.6447 7.30711 11.6104 4.73415C12.167 3.25051 12.6978 2.27358 13.2331 1.74697C13.7115 1.27564 14.1922 1.17688 14.6619 1.45179C15.6658 2.04068 15.6435 3.68646 14.594 6.48312C14.0091 8.04193 13.1867 9.74705 12.3941 11.045C11.5865 12.3676 10.9607 13.0349 10.5291 13.0349ZM14.1403 1.6788C13.9058 1.6788 13.6674 1.79967 13.4198 2.04326C12.9292 2.52601 12.4124 3.48525 11.8836 4.89408C10.5495 8.44951 9.94246 12.3355 10.4634 12.6406C10.6577 12.7582 11.2191 12.3473 12.1541 10.8161C12.9229 9.55726 13.753 7.83593 14.3207 6.32318C15.2706 3.79186 15.3422 2.26768 14.5337 1.79377C14.4031 1.71712 14.2724 1.6788 14.1403 1.6788Z" fill="#001F2B" fill-opacity="0.72" />
                                    <path d="M13.8138 6.14155C12.6544 9.23126 10.5042 12.9888 9.75577 12.55C9.00732 12.1111 9.94405 7.64214 11.1034 4.55243C12.2628 1.46272 13.2058 0.922329 13.9543 1.36115C14.7027 1.79998 14.9732 3.05185 13.8138 6.14155Z" fill="white" />
                                    <path d="M9.88558 12.7733C9.81586 12.7733 9.75115 12.7556 9.6916 12.721C8.71209 12.1465 10.0011 7.04548 10.9668 4.47251C11.5234 2.98887 12.0542 2.01194 12.5896 1.48534C13.0684 1.01401 13.5489 0.915613 14.0184 1.19016C15.0222 1.77904 15 3.42483 13.9504 6.22148C13.3655 7.78029 12.5432 9.48541 11.7506 10.7833C10.9429 12.1059 10.3172 12.7733 9.88558 12.7733ZM13.4969 1.41716C13.2624 1.41716 13.024 1.5384 12.7762 1.78199C12.2856 2.26438 11.7688 3.22362 11.2401 4.63245C9.90592 8.18787 9.29891 12.0739 9.81984 12.379C10.0141 12.4969 10.5756 12.0856 11.5106 10.5545C12.2793 9.29562 13.1095 7.5743 13.6772 6.06154C14.627 3.53022 14.6987 2.00605 13.8902 1.53214C13.7597 1.45549 13.6288 1.41716 13.4969 1.41716Z" fill="#001F2B" fill-opacity="0.72" />
                                    <path d="M11.4419 16.6706V17.2215C11.4419 18.0781 10.8864 18.7725 10.2011 18.7725H6.48489C5.7996 18.7725 5.24414 18.0781 5.24414 17.2215V16.6706C5.24414 16.1989 5.55205 15.814 5.92641 15.814H10.7566C11.137 15.814 11.4419 16.1989 11.4419 16.6706Z" fill="white" />
                                    <path d="M10.2012 18.9614H6.48492C5.71752 18.9614 5.09326 18.1809 5.09326 17.2216V16.6707C5.09326 16.0944 5.46708 15.6252 5.92655 15.6252H10.7567C11.2178 15.6252 11.593 16.0944 11.593 16.6707V17.2216C11.593 18.1809 10.9686 18.9614 10.2012 18.9614ZM5.92655 16.0026C5.6335 16.0026 5.39515 16.3022 5.39515 16.6707V17.2216C5.39515 17.973 5.88395 18.584 6.48492 18.584H10.2012C10.8021 18.584 11.2911 17.973 11.2911 17.2216V16.6707C11.2911 16.3022 11.0514 16.0026 10.7567 16.0026H5.92655Z" fill="#001F2B" fill-opacity="0.72" />
                                    <path d="M15.0287 9.63697V10.6815C15.0287 14.3338 12.6612 17.2933 9.73932 17.2933H6.94836C4.02929 17.2933 1.65894 14.3338 1.65894 10.6815V9.63697C1.65894 9.20176 1.94303 8.8501 2.28843 8.8501H14.3992C14.7474 8.8501 15.0287 9.20176 15.0287 9.63697Z" fill="white" />
                                    <path d="M9.73948 17.4818H6.9485C3.94865 17.4818 1.50806 14.4312 1.50806 10.6816V9.63683C1.50806 9.0988 1.85815 8.66138 2.28857 8.66138H14.3994C14.8297 8.66138 15.1798 9.0988 15.1798 9.63683V10.6816C15.1798 14.4312 12.7393 17.4818 9.73948 17.4818ZM2.28857 9.03874C2.02471 9.03874 1.80994 9.30701 1.80994 9.63683V10.6816C1.80994 14.223 4.11507 17.1044 6.9485 17.1044H9.73948C12.5728 17.1044 14.8779 14.223 14.8779 10.6816V9.63683C14.8779 9.30701 14.6633 9.03874 14.3994 9.03874H2.28857Z" fill="#001F2B" fill-opacity="0.72" />
                                    <path d="M10.5363 16.6706V17.2215C10.5363 18.0781 9.98089 18.7725 9.2956 18.7725H5.57937C4.89408 18.7725 4.33862 18.0781 4.33862 17.2215V16.6706C4.33862 16.1989 4.64654 15.814 5.02089 15.814H9.85108C10.2314 15.814 10.5363 16.1989 10.5363 16.6706Z" fill="white" />
                                    <path d="M9.29565 18.9614H5.5794C4.81201 18.9614 4.18774 18.1809 4.18774 17.2216V16.6707C4.18774 16.0944 4.56156 15.6252 5.02103 15.6252H9.85122C10.3123 15.6252 10.6874 16.0944 10.6874 16.6707V17.2216C10.6874 18.1809 10.063 18.9614 9.29565 18.9614ZM5.02103 16.0026C4.72799 16.0026 4.48963 16.3022 4.48963 16.6707V17.2216C4.48963 17.973 4.97843 18.584 5.5794 18.584H9.29565C9.89662 18.584 10.3856 17.973 10.3856 17.2216V16.6707C10.3856 16.3022 10.1459 16.0026 9.85122 16.0026H5.02103Z" fill="#001F2B" fill-opacity="0.72" />
                                    <path d="M14.1228 9.63705V10.6823C14.1228 14.3352 11.756 17.2937 8.83369 17.2937H6.04124C3.12502 17.2937 0.752197 14.3352 0.752197 10.6823V9.63705C0.752197 9.20311 1.03597 8.84839 1.38313 8.84839H13.4948C13.842 8.84839 14.1228 9.20311 14.1228 9.63705Z" fill="white" />
                                    <path d="M8.83378 17.4825H6.04132C3.04177 17.4825 0.601318 14.4319 0.601318 10.6823V9.63721C0.601318 9.09844 0.951996 8.65991 1.38316 8.65991H13.4949C13.9244 8.65991 14.2738 9.09844 14.2738 9.63721V10.6823C14.2738 14.4319 11.8333 17.4825 8.83378 17.4825ZM1.38316 9.03727C1.11857 9.03727 0.903205 9.30629 0.903205 9.63721V10.6823C0.903205 14.2237 3.20819 17.1052 6.04132 17.1052H8.83378C11.6669 17.1052 13.9719 14.2237 13.9719 10.6823V9.63721C13.9719 9.30629 13.7579 9.03727 13.4949 9.03727H1.38316Z" fill="#001F2B" fill-opacity="0.72" />
                                    <path d="M2.74061 13.6807C2.58375 13.4116 2.4474 13.1227 2.33447 12.8176L2.74061 13.6807Z" fill="white" />
                                    <path d="M2.74081 13.8694C2.69423 13.8694 2.64824 13.8425 2.61861 13.792C2.45528 13.5115 2.31363 13.2105 2.19762 12.8969C2.16254 12.8022 2.19556 12.6901 2.27117 12.6463C2.34724 12.6028 2.43671 12.6437 2.4715 12.7384C2.5794 13.0295 2.71089 13.3092 2.86271 13.5694C2.9118 13.6538 2.89691 13.7717 2.82955 13.8333C2.80272 13.8576 2.77162 13.8694 2.74081 13.8694Z" fill="#001F2B" fill-opacity="0.72" />
                                    <path d="M6.04139 15.7843C4.92318 15.7843 3.90857 15.2193 3.17065 14.3057L6.04139 15.7843Z" fill="white" />
                                    <path d="M6.04139 15.9732C4.92008 15.9732 3.86288 15.4285 3.06439 14.4398C3.00528 14.3664 3.00483 14.247 3.0635 14.173C3.12202 14.0993 3.21754 14.0978 3.27694 14.1715C4.01839 15.0898 5.00026 15.5958 6.04139 15.5958C6.12482 15.5958 6.19233 15.6802 6.19233 15.7845C6.19233 15.8888 6.12482 15.9732 6.04139 15.9732Z" fill="#001F2B" fill-opacity="0.72" />
                                    <path d="M6.63617 4.67673L6.28207 5.89303C6.21703 6.11644 6.02357 6.22922 5.84485 6.14792L4.85195 5.69626C4.42074 5.50011 4.15159 4.9239 4.27911 4.37553C4.35191 4.05928 4.52707 3.82173 4.73989 3.69766C4.93824 3.57909 5.17554 3.55853 5.3968 3.65918L6.43227 4.1302C6.61099 4.2115 6.70121 4.45333 6.63617 4.67673Z" fill="white" />
                                    <path d="M5.96368 6.36294C5.90648 6.36294 5.84885 6.35041 5.79313 6.32498L4.80035 5.87355C4.27957 5.6366 3.98697 4.95522 4.13422 4.32285C4.21515 3.97055 4.41267 3.68016 4.67609 3.52649C4.91429 3.3835 5.19643 3.36729 5.44835 3.4819L6.48387 3.95286C6.73888 4.06894 6.87066 4.42271 6.77794 4.74111L6.42388 5.95757C6.37862 6.11309 6.28826 6.23654 6.16975 6.30582C6.1043 6.34378 6.03428 6.36294 5.96368 6.36294ZM5.1043 3.78371C5.00112 3.78371 4.89852 3.81172 4.80507 3.86773C4.61948 3.97607 4.48122 4.17986 4.42417 4.4275C4.32276 4.86309 4.53797 5.35247 4.90368 5.51904L5.89646 5.97047C5.9451 5.99258 5.99669 5.99 6.04224 5.96384C6.08779 5.93731 6.12258 5.88903 6.14027 5.82859L6.49434 4.61213C6.53075 4.48683 6.48077 4.35306 6.38054 4.30737L5.34516 3.83641C5.26748 3.80103 5.18567 3.78371 5.1043 3.78371Z" fill="#001F2B" fill-opacity="0.72" />
                                    <path d="M7.54674 4.55213L7.99791 5.71714C8.08078 5.93112 8.28241 6.01874 8.4536 5.91516L9.40463 5.33969C9.81766 5.08976 10.0386 4.48234 9.86711 3.95302C9.76897 3.64766 9.5754 3.43359 9.35359 3.3372C9.14663 3.24444 8.90889 3.25414 8.69695 3.38238L7.70516 3.98252C7.53397 4.0861 7.46387 4.33814 7.54674 4.55213Z" fill="white" />
                                    <path d="M8.30573 6.14623C8.1228 6.14623 7.9468 6.01872 7.86189 5.79946L7.41068 4.63421C7.29069 4.32393 7.39108 3.96315 7.63916 3.81243L8.63105 3.21249C8.87177 3.06729 9.15375 3.04702 9.40434 3.15942C9.67734 3.27808 9.89756 3.54194 10.0071 3.88245C10.2048 4.49307 9.96891 5.20762 9.47023 5.50944L8.51932 6.08505C8.45048 6.1267 8.37751 6.14623 8.30573 6.14623ZM7.6825 4.46986L8.13371 5.6351C8.18014 5.7545 8.29172 5.80277 8.38783 5.74528L9.33875 5.16967C9.68884 4.95777 9.86307 4.44369 9.72716 4.02359C9.65007 3.78405 9.49573 3.59869 9.30381 3.51541C9.12796 3.43654 8.93132 3.44981 8.76254 3.55226L7.77079 4.1522C7.67498 4.21042 7.63606 4.35009 7.6825 4.46986Z" fill="#001F2B" fill-opacity="0.72" />
                                </svg>


                                </span>Ayurvedic Treatment Packages
                            </div>
                            <div className='col-span-2 flex '>
                                <span className='mr-2'><svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.10302 11.5884C2.15549 11.5884 1.38477 12.4037 1.38477 13.4058C1.38477 13.93 1.59135 15.149 3.50432 15.149H3.52827C3.70091 15.149 3.84064 15.0083 3.84064 14.8351C3.84064 14.6618 3.70091 14.5212 3.52827 14.5212H3.50432C2.51243 14.5212 2.00951 14.146 2.00951 13.4058C2.00951 12.7498 2.49994 12.2162 3.10302 12.2162C3.36292 12.2162 3.61865 12.3325 3.82315 12.5434C4.07763 12.8061 4.21799 13.1771 4.20778 13.5617C4.2032 13.735 4.3394 13.8792 4.51183 13.8836C4.68488 13.894 4.82774 13.7515 4.83232 13.578C4.84669 13.0252 4.64198 12.4884 4.27067 12.1053C3.94747 11.7721 3.53285 11.5884 3.10302 11.5884Z" fill="#001F2B" fill-opacity="0.6" />
                                    <path d="M20.8595 10.0188C20.8156 9.89278 20.6975 9.80845 20.5646 9.80845H12.0889C12.2722 9.35309 12.3463 8.81404 12.3463 8.40221C12.3463 6.72624 11.1809 5.51001 9.57556 5.51001C8.96914 5.51001 8.37292 5.71718 7.8875 6.09469C7.86792 6.10368 7.84897 6.11477 7.83127 6.12796L1.45282 10.8558C1.42471 10.8767 1.40243 10.902 1.38348 10.9293C0.688342 11.5053 0.238525 12.4016 0.238525 13.4094C0.238525 15.1051 1.5078 16.4914 3.08924 16.5521C3.12256 16.5644 3.15859 16.5711 3.19607 16.5714L12.8621 16.6055C12.8621 16.6055 12.8628 16.6055 12.8632 16.6055C12.934 16.6055 13.0025 16.5814 13.0579 16.537L20.7593 10.368C20.8633 10.2845 20.9032 10.1445 20.8595 10.0188ZM8.1374 6.68104C8.16634 6.66932 8.19362 6.65299 8.2182 6.6327C8.60929 6.30897 9.07868 6.13779 9.57556 6.13779C10.819 6.13779 11.7216 7.09014 11.7216 8.40221C11.7216 8.8967 11.5968 9.56612 11.3269 9.90701L6.12467 13.8667C6.14529 13.7162 6.1557 13.5636 6.1557 13.4092C6.1557 11.7104 4.88205 10.3253 3.29707 10.2686L8.1374 6.68104ZM12.7543 15.9771L3.3004 15.9438C3.26813 15.9323 3.23335 15.9262 3.19711 15.9262C1.91014 15.9262 0.863063 14.797 0.863063 13.4094C0.863063 12.0208 1.91014 10.8912 3.19711 10.8912C4.48409 10.8912 5.53096 12.0208 5.53096 13.4094C5.53096 13.7848 5.45536 14.1477 5.30626 14.4879C5.29126 14.5225 5.28272 14.5581 5.28043 14.5936C5.25711 14.6836 5.27356 14.7828 5.33354 14.8625C5.43766 15.0008 5.63362 15.0278 5.77127 14.9232L11.6662 10.4362H19.6717L12.7543 15.9771Z" fill="#001F2B" fill-opacity="0.6" />
                                </svg>


                                </span>Yoga and Meditation Sessions
                            </div>



                        </div>

                    </div>

                    <div className='col-span-1 hidden lg:inline  justify-end '>
                    <div className='my-auto'>
                            <img className='w-[232px] h-[278px] overflow-hidden object-cover relative ml-3' src="/VillaAraliya/vill2.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>




            {/* Villa Orchid */}
            <section className='bg-[#FFFFFF]'>
                <div className='mt-5 md:my-20 2xl:px-[20rem]  lg:px-20  px-5  '>
                    <div className='grid grid-cols-1 mx-auto  md:grid-cols-2 gap-8 '>
                        <div className='cols-span-1 col-start-1'>

                            <h2 className="text-3xl md:text-5xl  text-center md:text-start font-extrabold text-gray-800 mb-6">Villa Orchid</h2>
                            <p className="text-lg text-justify max-w-xl flex ">Villa Orchid provides a tranquil escape with a strong emphasis on Ayurvedic healing. The villa includes spacious rooms, each designed to enhance relaxation and well-being. Guests can indulge in various Ayurvedic treatments and enjoy the peaceful environment.</p>
                            <p className='text-lg max-w-xl pt-5 font-semibold'>Amenities</p>
                            <div className='grid grid-cols-2 mt-5 gap-4'>

                                <div className='col-span-1 flex border-r-2 border-r-gray-700'>
                                    <span className='mr-2'><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_298_1283)">
                                            <path d="M15.9084 6.21084L15.5 5.82793V2.73861C15.5 1.50436 14.4289 0.500244 13.1124 0.500244C12.5707 0.500244 12.0708 0.670488 11.6698 0.956542C9.90204 0.142881 7.70136 0.42416 6.23314 1.80058C4.6608 3.27468 4.42846 5.53625 5.53546 7.24346L3.74509 8.92194H2.98878C2.81621 8.92194 2.67628 9.0531 2.67628 9.21491V9.75239H2.10293C1.93037 9.75239 1.79043 9.88355 1.79043 10.0454V10.5828H1.21715C1.04459 10.5828 0.904655 10.714 0.904655 10.8758V11.4133H0.331374C0.2485 11.4133 0.169031 11.4442 0.110406 11.4991L0.0915311 11.5168C0.0329374 11.5717 0 11.6462 0 11.7239V13.6248C0 13.7866 0.139937 13.9178 0.312499 13.9178H2.37796C2.46084 13.9178 2.54031 13.8869 2.59893 13.832L6.04608 10.6003C6.16811 10.4859 6.16811 10.3004 6.04608 10.1859C5.92402 10.0715 5.72621 10.0715 5.60411 10.1859L2.2485 13.3319H0.624999V11.9991H1.21719C1.38975 11.9991 1.52968 11.868 1.52968 11.7062V11.1687H2.103C2.27556 11.1687 2.4155 11.0375 2.4155 10.8757V10.3382H2.98884C3.1614 10.3382 3.30134 10.2071 3.30134 10.0453V9.50779H3.87465C3.95752 9.50779 4.03699 9.47691 4.09562 9.42198L5.90077 7.72967C6.00405 7.84915 6.11483 7.96478 6.23333 8.07587C7.07883 8.86853 8.18795 9.32412 9.37529 9.37123V14.2693C9.37529 14.9477 9.96408 15.4997 10.6878 15.4997H14.6877C15.4113 15.4997 16.0001 14.9477 16.0001 14.2693V6.41797C16 6.3403 15.967 6.2658 15.9084 6.21084ZM13.1124 1.08615C14.0843 1.08615 14.875 1.82742 14.875 2.73858V5.24196L14.313 4.71515C14.3103 4.71257 14.3073 4.71037 14.3045 4.70791C14.2463 3.64956 13.7873 2.60713 12.9269 1.8005C12.7214 1.60787 12.5015 1.4368 12.2705 1.28707C12.5209 1.15904 12.8077 1.08615 13.1124 1.08615ZM11.3497 3.57076V2.92403C11.4311 2.95834 11.5076 3.006 11.5743 3.06858C11.7174 3.20273 11.7963 3.38106 11.7963 3.57076C11.7963 3.76045 11.7174 3.93881 11.5743 4.07296C11.279 4.34988 10.7984 4.34991 10.503 4.07296C10.2077 3.79605 10.2077 3.34549 10.503 3.06861C10.569 3.00679 10.6444 2.95957 10.7247 2.92535V3.57079C10.7247 3.73259 10.8647 3.86375 11.0372 3.86375C11.2098 3.86375 11.3497 3.73253 11.3497 3.57076ZM9.57998 8.78785C8.52811 8.78776 7.47586 8.41232 6.67505 7.66159C5.07333 6.15995 5.07333 3.71654 6.67508 2.21487C7.45102 1.48743 8.4827 1.0868 9.58004 1.0868C10.1469 1.0868 10.6962 1.19399 11.2018 1.39764C10.9919 1.65984 10.842 1.96655 10.7711 2.29963C10.5108 2.34741 10.2624 2.46556 10.0611 2.65423C9.52208 3.1596 9.52208 3.98185 10.0611 4.48722C10.3307 4.7399 10.6846 4.86623 11.0387 4.86623C11.3927 4.86623 11.7468 4.73988 12.0163 4.48722C12.2774 4.24242 12.4212 3.9169 12.4212 3.57073C12.4212 3.22453 12.2774 2.89904 12.0163 2.65423C11.841 2.48994 11.63 2.37943 11.4065 2.32198C11.4737 2.08046 11.5979 1.86047 11.7647 1.67505C12.0226 1.82742 12.2641 2.00789 12.4849 2.2149C13.2608 2.94234 13.6882 3.90952 13.6882 4.93827C13.6882 5.96703 13.2608 6.93421 12.4849 7.66165C11.6839 8.41255 10.6321 8.78793 9.57998 8.78785ZM15.375 14.2694C15.375 14.6248 15.0666 14.9139 14.6875 14.9139H10.6876C10.3085 14.9139 10.0001 14.6248 10.0001 14.2694V9.35817C11.1059 9.26758 12.1327 8.82051 12.9269 8.07593C13.6958 7.35514 14.144 6.446 14.2722 5.50552L15.375 6.53932V14.2694Z" fill="#001F2B" fill-opacity="0.52" />
                                            <path d="M7.98898 3.44665C8.11108 3.33225 8.11108 3.14674 7.98901 3.03234C7.86695 2.91793 7.66914 2.91793 7.54705 3.03234C6.42605 4.0833 6.42605 5.79333 7.54705 6.84426C7.60808 6.90148 7.68805 6.93007 7.76802 6.93007C7.84798 6.93007 7.92795 6.90145 7.98898 6.84426C8.11101 6.72986 8.11101 6.54435 7.98898 6.42995C7.11167 5.60744 7.11167 4.26913 7.98898 3.44665Z" fill="#001F2B" fill-opacity="0.52" />
                                            <path d="M8.98238 6.97492C8.98147 6.97469 8.97791 6.97375 8.977 6.97351C8.81091 6.93048 8.63938 7.02209 8.59341 7.17792C8.54738 7.33363 8.64519 7.49506 8.81122 7.53847C8.83975 7.54606 8.86844 7.54967 8.89669 7.54967C9.03269 7.54967 9.15778 7.46579 9.197 7.33712C9.24444 7.18152 9.14835 7.01936 8.98238 6.97492Z" fill="#001F2B" fill-opacity="0.52" />
                                            <path d="M14.0156 13.3318H11.3594C11.1868 13.3318 11.0469 13.4629 11.0469 13.6248C11.0469 13.7866 11.1868 13.9177 11.3594 13.9177H14.0156C14.1881 13.9177 14.3281 13.7866 14.3281 13.6248C14.3281 13.4629 14.1881 13.3318 14.0156 13.3318Z" fill="#001F2B" fill-opacity="0.52" />
                                            <path d="M6.84737 9.43472C6.78928 9.38022 6.70865 9.34888 6.62646 9.34888C6.54428 9.34888 6.46365 9.38022 6.40553 9.43472C6.3474 9.48921 6.31396 9.56479 6.31396 9.64185C6.31396 9.7189 6.34737 9.79448 6.40553 9.84897C6.46368 9.90347 6.54428 9.93481 6.62646 9.93481C6.70896 9.93481 6.78928 9.90347 6.84737 9.84897C6.90581 9.79448 6.93896 9.7189 6.93896 9.64185C6.93896 9.56479 6.90581 9.48921 6.84737 9.43472Z" fill="#001F2B" fill-opacity="0.52" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_298_1283">
                                                <rect width="16" height="15" fill="white" transform="translate(0 0.5)" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                    </span>Spacious Rooms
                                </div>
                                <div className='col-span-1 flex '>
                                    <span className='mr-2'><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.4008 1.81224C16.3899 1.74792 16.3624 1.68757 16.321 1.63714C16.2796 1.58671 16.2258 1.54795 16.1649 1.52467C16.104 1.5014 16.038 1.49443 15.9735 1.50445C15.9091 1.51446 15.8484 1.54112 15.7974 1.58179C14.5683 2.56166 12.9555 2.92236 11.2481 3.30427C8.80527 3.85067 6.03636 4.46994 3.88318 7.08789C2.5386 8.72262 2.31718 10.4801 2.36819 11.6665C2.39616 12.3544 2.52089 13.035 2.73871 13.6881C1.89102 15.0098 1.53949 15.9511 1.52318 15.9955C1.48963 16.0886 1.49425 16.1912 1.53605 16.281C1.57784 16.3707 1.65342 16.4403 1.74629 16.4745C1.83917 16.5087 1.94181 16.5048 2.03184 16.4637C2.12187 16.4226 2.19199 16.3475 2.2269 16.2549C2.23042 16.2449 2.55305 15.3862 3.31478 14.1803C4.46375 14.5216 5.65409 14.7038 6.85255 14.7217C6.89778 14.7222 6.94287 14.7225 6.98779 14.7225C8.18828 14.7225 9.30108 14.5359 10.2974 14.1673C11.5848 13.6962 12.7181 12.8804 13.5732 11.8088C15.5038 9.40873 16.1704 6.82418 16.3897 5.0786C16.6275 3.18484 16.4102 1.86743 16.4008 1.81224ZM15.642 5.01184C15.4324 6.65385 14.8018 9.08441 12.9887 11.3386C12.2208 12.3009 11.204 13.0343 10.0486 13.4594C9.10455 13.8105 8.03869 13.983 6.88299 13.9718C5.82428 13.9556 4.77187 13.8054 3.75092 13.5247C4.02926 13.1271 4.3669 12.6825 4.76799 12.2136C5.21574 12.3037 6.25159 12.4895 7.1768 12.4895C7.35774 12.4902 7.5386 12.4818 7.71869 12.4643C7.81764 12.4543 7.90852 12.4053 7.97137 12.3282C8.03421 12.2511 8.06386 12.1522 8.05379 12.0533C8.04372 11.9544 7.99475 11.8635 7.91767 11.8006C7.84059 11.7378 7.7417 11.7081 7.64276 11.7182C6.9314 11.7904 5.98039 11.6655 5.35676 11.5592C5.84626 11.0415 6.36682 10.554 6.91555 10.0995C7.33584 10.2244 8.35115 10.4771 9.68516 10.4771C10.0383 10.4771 10.3912 10.4593 10.7425 10.4235C10.7922 10.4194 10.8406 10.4054 10.8848 10.3824C10.929 10.3594 10.9682 10.3278 11.0001 10.2895C11.0319 10.2511 11.0558 10.2068 11.0704 10.1591C11.0849 10.1114 11.0898 10.0613 11.0847 10.0117C11.0797 9.96213 11.0648 9.91404 11.0409 9.87027C11.017 9.8265 10.9847 9.78792 10.9457 9.7568C10.9068 9.72568 10.862 9.70264 10.8141 9.68902C10.7661 9.6754 10.7159 9.67149 10.6664 9.6775C9.66304 9.77769 8.65018 9.72243 7.66364 9.51367C8.10046 9.19069 8.56933 8.87583 9.07186 8.57609C9.57438 8.27634 10.0562 7.97608 10.5158 7.67651C10.9828 7.7481 11.4542 7.7866 11.9266 7.79172C12.1858 7.79481 12.4447 7.77439 12.7002 7.73072C12.7488 7.72183 12.7952 7.70342 12.8366 7.67656C12.8781 7.64969 12.9139 7.6149 12.9418 7.57418C12.9698 7.53346 12.9895 7.48761 12.9997 7.43927C13.0099 7.39093 13.0104 7.34106 13.0013 7.2925C12.9921 7.24395 12.9735 7.19768 12.9464 7.15635C12.9194 7.11503 12.8844 7.07945 12.8435 7.05168C12.8027 7.02391 12.7567 7.00448 12.7083 6.99452C12.66 6.98456 12.6101 6.98426 12.5616 6.99363C12.246 7.05298 11.8441 7.05038 11.4788 7.02675C12.1249 6.57524 12.719 6.12629 13.2556 5.6828C13.2939 5.65153 13.3256 5.613 13.3489 5.56943C13.3722 5.52586 13.3867 5.47811 13.3915 5.42893C13.3964 5.37974 13.3914 5.3301 13.377 5.28283C13.3625 5.23557 13.3389 5.19163 13.3074 5.15354C13.2759 5.11544 13.2372 5.08395 13.1935 5.06086C13.1498 5.03777 13.102 5.02355 13.0528 5.019C13.0036 5.01446 12.954 5.01969 12.9068 5.03439C12.8596 5.04909 12.8158 5.07297 12.7779 5.10465C12.2252 5.56131 11.6113 6.02344 10.936 6.49104C10.9872 6.29533 11.0582 6.10533 11.1479 5.92397C11.1958 5.83682 11.2072 5.73419 11.1794 5.63867C11.1517 5.54315 11.0872 5.46256 11 5.41463C10.9129 5.36669 10.8102 5.35534 10.7147 5.38307C10.6192 5.4108 10.5386 5.47534 10.4907 5.56249C10.4759 5.58918 10.1519 6.18553 10.0712 7.07087C9.63058 7.35737 9.16939 7.64439 8.68763 7.93192C8.18015 8.23461 7.70576 8.55218 7.26247 8.87783C7.39153 7.87908 7.70656 6.89245 7.71061 6.87994C7.7393 6.78581 7.72985 6.68418 7.6843 6.59696C7.63874 6.50974 7.56073 6.44392 7.46708 6.4137C7.37344 6.38347 7.27167 6.39127 7.18371 6.4354C7.09576 6.47953 7.02868 6.55646 6.99694 6.6496C6.97545 6.71615 6.49276 8.22565 6.46003 9.50333C5.92751 9.94286 5.42028 10.4122 4.94079 10.909C4.9604 10.4471 5.04783 9.99055 5.20028 9.55406C5.23556 9.46169 5.23294 9.35912 5.19298 9.26867C5.15302 9.17823 5.07895 9.10722 4.9869 9.07111C4.89484 9.03501 4.79225 9.03672 4.70145 9.07587C4.61065 9.11503 4.539 9.18847 4.50207 9.2802C4.48284 9.32913 4.05383 10.4418 4.22933 11.6898C3.86856 12.1094 3.5556 12.5114 3.28855 12.8808C3.1911 12.4624 3.13342 12.0358 3.11628 11.6066C3.05712 10.0822 3.51003 8.72216 4.46238 7.56429C6.45184 5.14554 8.97328 4.58156 11.4118 4.03615C12.9759 3.68631 14.4644 3.35338 15.7242 2.55319C15.7751 3.37349 15.7476 4.19677 15.642 5.01184Z" fill="#001F2B" fill-opacity="0.52" />
                                    </svg>

                                    </span>Herbal Gardens
                                </div>
                                <div className='col-span-1 flex border-r-2 border-r-gray-700'>
                                    <span className='mr-2'><svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.7963 9.20314C8.05621 9.20314 8.26691 8.93977 8.26691 8.61488C8.26691 8.28999 8.05621 8.02661 7.7963 8.02661C7.53638 8.02661 7.32568 8.28999 7.32568 8.61488C7.32568 8.93977 7.53638 9.20314 7.7963 9.20314Z" fill="white" />
                                        <path d="M7.79641 9.39191C7.4537 9.39191 7.1748 9.0433 7.1748 8.61472C7.1748 8.18651 7.4537 7.83789 7.79641 7.83789C8.13913 7.83789 8.41802 8.1865 8.41802 8.61472C8.41802 9.0433 8.13913 9.39191 7.79641 9.39191ZM7.79641 8.21525C7.62012 8.21525 7.47669 8.39435 7.47669 8.61472C7.47669 8.83509 7.62012 9.01456 7.79641 9.01456C7.97271 9.01456 8.11614 8.83509 8.11614 8.61472C8.11614 8.39435 7.97271 8.21525 7.79641 8.21525Z" fill="#001F2B" />
                                        <path d="M7.2718 6.79204C7.48663 6.79204 7.66078 6.57435 7.66078 6.30581C7.66078 6.03727 7.48663 5.81958 7.2718 5.81958C7.05697 5.81958 6.88281 6.03727 6.88281 6.30581C6.88281 6.57435 7.05697 6.79204 7.2718 6.79204Z" fill="white" />
                                        <path d="M7.27188 6.98073C6.97412 6.98073 6.73193 6.67781 6.73193 6.30561C6.73193 5.93341 6.97412 5.63086 7.27188 5.63086C7.56964 5.63086 7.81183 5.93341 7.81183 6.30561C7.81183 6.67781 7.56964 6.98073 7.27188 6.98073ZM7.27188 6.00822C7.14054 6.00822 7.03382 6.14162 7.03382 6.30561C7.03382 6.46997 7.14054 6.60337 7.27188 6.60337C7.40322 6.60337 7.50994 6.46997 7.50994 6.30561C7.50994 6.14162 7.40322 6.00822 7.27188 6.00822Z" fill="#001F2B" />
                                        <path d="M6.34992 8.2542C6.56475 8.2542 6.73891 8.03651 6.73891 7.76797C6.73891 7.49943 6.56475 7.28174 6.34992 7.28174C6.13509 7.28174 5.96094 7.49943 5.96094 7.76797C5.96094 8.03651 6.13509 8.2542 6.34992 8.2542Z" fill="white" />
                                        <path d="M6.35001 8.44288C6.05225 8.44288 5.81006 8.13997 5.81006 7.76777C5.81006 7.39557 6.05225 7.09302 6.35001 7.09302C6.64762 7.09302 6.88981 7.39557 6.88981 7.76777C6.88981 8.13997 6.64762 8.44288 6.35001 8.44288ZM6.35001 7.47038C6.21867 7.47038 6.11195 7.60378 6.11195 7.76777C6.11195 7.93212 6.21867 8.06553 6.35001 8.06553C6.4812 8.06553 6.58792 7.93212 6.58792 7.76777C6.58792 7.60378 6.4812 7.47038 6.35001 7.47038Z" fill="#001F2B" />
                                        <path d="M2.57397 8.83843C1.59203 7.79717 1.58594 5.79578 1.58594 5.79578C1.58594 5.79578 1.59953 5.79438 1.62876 5.78853C2.80352 5.60254 3.94008 6.46559 4.33241 7.86066C4.4985 8.44737 4.77041 9.01466 5.13661 9.56092C5.13661 9.56092 3.55347 9.87709 2.57397 8.83843Z" fill="white" />
                                        <path d="M4.5689 9.79634C3.99535 9.79634 3.12109 9.66589 2.47648 8.98229C1.45319 7.89739 1.43535 5.88161 1.43506 5.79649C1.43476 5.69846 1.49476 5.61628 1.57288 5.60781L1.60472 5.60228C2.85546 5.40328 4.06139 6.32825 4.47486 7.79789C4.6317 8.35176 4.8932 8.90417 5.25228 9.43962C5.28721 9.49158 5.29694 9.56307 5.27793 9.62682C5.25891 9.69058 5.2141 9.73664 5.16044 9.74733C5.13553 9.75212 4.90322 9.79634 4.5689 9.79634ZM2.67165 8.69485C3.35295 9.41677 4.36696 9.44146 4.84514 9.40645C4.55195 8.92222 4.33202 8.42473 4.19022 7.92355C3.83409 6.6577 2.81537 5.8455 1.74343 5.96306C1.77085 6.45244 1.9156 7.89296 2.67165 8.69485Z" fill="#001F2B" />
                                        <path d="M3.24484 8.03889C3.20003 8.03889 3.15566 8.0142 3.12589 7.96666C3.11321 7.94639 1.83712 5.9262 0.779041 5.46592C0.700327 5.43165 0.658758 5.32404 0.686176 5.22565C0.713593 5.12726 0.799678 5.07603 0.878393 5.1092C2.0202 5.60633 3.30911 7.64716 3.3635 7.73376C3.41495 7.81594 3.40345 7.93423 3.33786 7.99872C3.31014 8.02562 3.27742 8.03889 3.24484 8.03889Z" fill="#001F2B" />
                                        <path d="M3.28238 7.22596C3.27825 7.22596 3.27413 7.22559 3.27 7.22522L2.61434 7.15889C2.53135 7.15078 2.46944 7.05976 2.47607 6.95584C2.483 6.85192 2.55715 6.77748 2.63881 6.783L3.29447 6.84934C3.37746 6.85744 3.43937 6.94847 3.43274 7.05239C3.42625 7.15115 3.36021 7.22596 3.28238 7.22596Z" fill="#001F2B" />
                                        <path d="M2.26677 7.48126C2.26309 7.48126 2.25955 7.48126 2.25587 7.48089C2.17273 7.47352 2.11008 7.38286 2.11613 7.27894L2.1574 6.55813C2.1633 6.45421 2.23597 6.37682 2.31866 6.38345C2.4018 6.39082 2.46445 6.48148 2.4584 6.5854L2.41713 7.30621C2.41153 7.40534 2.34519 7.48126 2.26677 7.48126Z" fill="#001F2B" />
                                        <path d="M14.4574 6.40303C13.298 9.49273 11.1478 13.2503 10.3993 12.8114C9.65088 12.3726 10.5876 7.90361 11.747 4.8139C12.9064 1.7242 13.8494 1.1838 14.5978 1.62263C15.3463 2.06145 15.6167 3.31332 14.4574 6.40303Z" fill="white" />
                                        <path d="M10.5291 13.0349C10.4594 13.0349 10.3947 13.0172 10.3352 12.9826C9.35564 12.4081 10.6447 7.30711 11.6104 4.73415C12.167 3.25051 12.6978 2.27358 13.2331 1.74697C13.7115 1.27564 14.1922 1.17688 14.6619 1.45179C15.6658 2.04068 15.6435 3.68646 14.594 6.48312C14.0091 8.04193 13.1867 9.74705 12.3941 11.045C11.5865 12.3676 10.9607 13.0349 10.5291 13.0349ZM14.1403 1.6788C13.9058 1.6788 13.6674 1.79967 13.4198 2.04326C12.9292 2.52601 12.4124 3.48525 11.8836 4.89408C10.5495 8.44951 9.94246 12.3355 10.4634 12.6406C10.6577 12.7582 11.2191 12.3473 12.1541 10.8161C12.9229 9.55726 13.753 7.83593 14.3207 6.32318C15.2706 3.79186 15.3422 2.26768 14.5337 1.79377C14.4031 1.71712 14.2724 1.6788 14.1403 1.6788Z" fill="#001F2B" />
                                        <path d="M13.8138 6.14155C12.6544 9.23126 10.5042 12.9888 9.75577 12.55C9.00732 12.1111 9.94405 7.64214 11.1034 4.55243C12.2628 1.46272 13.2058 0.922329 13.9543 1.36115C14.7027 1.79998 14.9732 3.05185 13.8138 6.14155Z" fill="white" />
                                        <path d="M9.88558 12.7733C9.81586 12.7733 9.75115 12.7556 9.6916 12.721C8.71209 12.1465 10.0011 7.04548 10.9668 4.47251C11.5234 2.98887 12.0542 2.01194 12.5896 1.48534C13.0684 1.01401 13.5489 0.915613 14.0184 1.19016C15.0222 1.77904 15 3.42483 13.9504 6.22148C13.3655 7.78029 12.5432 9.48541 11.7506 10.7833C10.9429 12.1059 10.3172 12.7733 9.88558 12.7733ZM13.4969 1.41716C13.2624 1.41716 13.024 1.5384 12.7762 1.78199C12.2856 2.26438 11.7688 3.22362 11.2401 4.63245C9.90592 8.18787 9.29891 12.0739 9.81984 12.379C10.0141 12.4969 10.5756 12.0856 11.5106 10.5545C12.2793 9.29562 13.1095 7.5743 13.6772 6.06154C14.627 3.53022 14.6987 2.00605 13.8902 1.53214C13.7597 1.45549 13.6288 1.41716 13.4969 1.41716Z" fill="#001F2B" />
                                        <path d="M11.4419 16.6706V17.2215C11.4419 18.0781 10.8864 18.7725 10.2011 18.7725H6.48489C5.7996 18.7725 5.24414 18.0781 5.24414 17.2215V16.6706C5.24414 16.1989 5.55205 15.814 5.92641 15.814H10.7566C11.137 15.814 11.4419 16.1989 11.4419 16.6706Z" fill="white" />
                                        <path d="M10.2012 18.9614H6.48492C5.71752 18.9614 5.09326 18.1809 5.09326 17.2216V16.6707C5.09326 16.0944 5.46708 15.6252 5.92655 15.6252H10.7567C11.2178 15.6252 11.593 16.0944 11.593 16.6707V17.2216C11.593 18.1809 10.9686 18.9614 10.2012 18.9614ZM5.92655 16.0026C5.6335 16.0026 5.39515 16.3022 5.39515 16.6707V17.2216C5.39515 17.973 5.88395 18.584 6.48492 18.584H10.2012C10.8021 18.584 11.2911 17.973 11.2911 17.2216V16.6707C11.2911 16.3022 11.0514 16.0026 10.7567 16.0026H5.92655Z" fill="#001F2B" />
                                        <path d="M15.0287 9.63697V10.6815C15.0287 14.3338 12.6612 17.2933 9.73932 17.2933H6.94836C4.02929 17.2933 1.65894 14.3338 1.65894 10.6815V9.63697C1.65894 9.20176 1.94303 8.8501 2.28843 8.8501H14.3992C14.7474 8.8501 15.0287 9.20176 15.0287 9.63697Z" fill="white" />
                                        <path d="M9.73948 17.4818H6.9485C3.94865 17.4818 1.50806 14.4312 1.50806 10.6816V9.63683C1.50806 9.0988 1.85815 8.66138 2.28857 8.66138H14.3994C14.8297 8.66138 15.1798 9.0988 15.1798 9.63683V10.6816C15.1798 14.4312 12.7393 17.4818 9.73948 17.4818ZM2.28857 9.03874C2.02471 9.03874 1.80994 9.30701 1.80994 9.63683V10.6816C1.80994 14.223 4.11507 17.1044 6.9485 17.1044H9.73948C12.5728 17.1044 14.8779 14.223 14.8779 10.6816V9.63683C14.8779 9.30701 14.6633 9.03874 14.3994 9.03874H2.28857Z" fill="#001F2B" />
                                        <path d="M10.5363 16.6706V17.2215C10.5363 18.0781 9.98089 18.7725 9.2956 18.7725H5.57937C4.89408 18.7725 4.33862 18.0781 4.33862 17.2215V16.6706C4.33862 16.1989 4.64654 15.814 5.02089 15.814H9.85108C10.2314 15.814 10.5363 16.1989 10.5363 16.6706Z" fill="white" />
                                        <path d="M9.29565 18.9614H5.5794C4.81201 18.9614 4.18774 18.1809 4.18774 17.2216V16.6707C4.18774 16.0944 4.56156 15.6252 5.02103 15.6252H9.85122C10.3123 15.6252 10.6874 16.0944 10.6874 16.6707V17.2216C10.6874 18.1809 10.063 18.9614 9.29565 18.9614ZM5.02103 16.0026C4.72799 16.0026 4.48963 16.3022 4.48963 16.6707V17.2216C4.48963 17.973 4.97843 18.584 5.5794 18.584H9.29565C9.89662 18.584 10.3856 17.973 10.3856 17.2216V16.6707C10.3856 16.3022 10.1459 16.0026 9.85122 16.0026H5.02103Z" fill="#001F2B" />
                                        <path d="M14.1228 9.63705V10.6823C14.1228 14.3352 11.756 17.2937 8.83369 17.2937H6.04124C3.12502 17.2937 0.752197 14.3352 0.752197 10.6823V9.63705C0.752197 9.20311 1.03597 8.84839 1.38313 8.84839H13.4948C13.842 8.84839 14.1228 9.20311 14.1228 9.63705Z" fill="white" />
                                        <path d="M8.83378 17.4825H6.04132C3.04177 17.4825 0.601318 14.4319 0.601318 10.6823V9.63721C0.601318 9.09844 0.951996 8.65991 1.38316 8.65991H13.4949C13.9244 8.65991 14.2738 9.09844 14.2738 9.63721V10.6823C14.2738 14.4319 11.8333 17.4825 8.83378 17.4825ZM1.38316 9.03727C1.11857 9.03727 0.903205 9.30629 0.903205 9.63721V10.6823C0.903205 14.2237 3.20819 17.1052 6.04132 17.1052H8.83378C11.6669 17.1052 13.9719 14.2237 13.9719 10.6823V9.63721C13.9719 9.30629 13.7579 9.03727 13.4949 9.03727H1.38316Z" fill="#001F2B" />
                                        <path d="M2.74061 13.6807C2.58375 13.4116 2.4474 13.1227 2.33447 12.8176L2.74061 13.6807Z" fill="white" />
                                        <path d="M2.74081 13.8694C2.69423 13.8694 2.64824 13.8425 2.61861 13.792C2.45528 13.5115 2.31363 13.2105 2.19762 12.8969C2.16254 12.8022 2.19556 12.6901 2.27117 12.6463C2.34724 12.6028 2.43671 12.6437 2.4715 12.7384C2.5794 13.0295 2.71089 13.3092 2.86271 13.5694C2.9118 13.6538 2.89691 13.7717 2.82955 13.8333C2.80272 13.8576 2.77162 13.8694 2.74081 13.8694Z" fill="#001F2B" />
                                        <path d="M6.04139 15.7843C4.92318 15.7843 3.90857 15.2193 3.17065 14.3057L6.04139 15.7843Z" fill="white" />
                                        <path d="M6.04139 15.9732C4.92008 15.9732 3.86288 15.4285 3.06439 14.4398C3.00528 14.3664 3.00483 14.247 3.0635 14.173C3.12202 14.0993 3.21754 14.0978 3.27694 14.1715C4.01839 15.0898 5.00026 15.5958 6.04139 15.5958C6.12482 15.5958 6.19233 15.6802 6.19233 15.7845C6.19233 15.8888 6.12482 15.9732 6.04139 15.9732Z" fill="#001F2B" />
                                        <path d="M6.63617 4.67673L6.28207 5.89303C6.21703 6.11644 6.02357 6.22922 5.84485 6.14792L4.85195 5.69626C4.42074 5.50011 4.15159 4.9239 4.27911 4.37553C4.35191 4.05928 4.52707 3.82173 4.73989 3.69766C4.93824 3.57909 5.17554 3.55853 5.3968 3.65918L6.43227 4.1302C6.61099 4.2115 6.70121 4.45333 6.63617 4.67673Z" fill="white" />
                                        <path d="M5.96368 6.36294C5.90648 6.36294 5.84885 6.35041 5.79313 6.32498L4.80035 5.87355C4.27957 5.6366 3.98697 4.95522 4.13422 4.32285C4.21515 3.97055 4.41267 3.68016 4.67609 3.52649C4.91429 3.3835 5.19643 3.36729 5.44835 3.4819L6.48387 3.95286C6.73888 4.06894 6.87066 4.42271 6.77794 4.74111L6.42388 5.95757C6.37862 6.11309 6.28826 6.23654 6.16975 6.30582C6.1043 6.34378 6.03428 6.36294 5.96368 6.36294ZM5.1043 3.78371C5.00112 3.78371 4.89852 3.81172 4.80507 3.86773C4.61948 3.97607 4.48122 4.17986 4.42417 4.4275C4.32276 4.86309 4.53797 5.35247 4.90368 5.51904L5.89646 5.97047C5.9451 5.99258 5.99669 5.99 6.04224 5.96384C6.08779 5.93731 6.12258 5.88903 6.14027 5.82859L6.49434 4.61213C6.53075 4.48683 6.48077 4.35306 6.38054 4.30737L5.34516 3.83641C5.26748 3.80103 5.18567 3.78371 5.1043 3.78371Z" fill="#001F2B" />
                                        <path d="M7.54674 4.55213L7.99791 5.71714C8.08078 5.93112 8.28241 6.01874 8.4536 5.91516L9.40463 5.33969C9.81766 5.08976 10.0386 4.48234 9.86711 3.95302C9.76897 3.64766 9.5754 3.43359 9.35359 3.3372C9.14663 3.24444 8.90889 3.25414 8.69695 3.38238L7.70516 3.98252C7.53397 4.0861 7.46387 4.33814 7.54674 4.55213Z" fill="white" />
                                        <path d="M8.30573 6.14623C8.1228 6.14623 7.9468 6.01872 7.86189 5.79946L7.41068 4.63421C7.29069 4.32393 7.39108 3.96315 7.63916 3.81243L8.63105 3.21249C8.87177 3.06729 9.15375 3.04702 9.40434 3.15942C9.67734 3.27808 9.89756 3.54194 10.0071 3.88245C10.2048 4.49307 9.96891 5.20762 9.47023 5.50944L8.51932 6.08505C8.45048 6.1267 8.37751 6.14623 8.30573 6.14623ZM7.6825 4.46986L8.13371 5.6351C8.18014 5.7545 8.29172 5.80277 8.38783 5.74528L9.33875 5.16967C9.68884 4.95777 9.86307 4.44369 9.72716 4.02359C9.65007 3.78405 9.49573 3.59869 9.30381 3.51541C9.12796 3.43654 8.93132 3.44981 8.76254 3.55226L7.77079 4.1522C7.67498 4.21042 7.63606 4.35009 7.6825 4.46986Z" fill="#001F2B" />
                                    </svg>


                                    </span>Ayurvedic Treatments
                                </div>
                                <div className='col-span-1 flex '>
                                    <span className='mr-2'><svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.10302 11.5884C2.15549 11.5884 1.38477 12.4037 1.38477 13.4058C1.38477 13.93 1.59135 15.149 3.50432 15.149H3.52827C3.70091 15.149 3.84064 15.0083 3.84064 14.8351C3.84064 14.6618 3.70091 14.5212 3.52827 14.5212H3.50432C2.51243 14.5212 2.00951 14.146 2.00951 13.4058C2.00951 12.7498 2.49994 12.2162 3.10302 12.2162C3.36292 12.2162 3.61865 12.3325 3.82315 12.5434C4.07763 12.8061 4.21799 13.1771 4.20778 13.5617C4.2032 13.735 4.3394 13.8792 4.51183 13.8836C4.68488 13.894 4.82774 13.7515 4.83232 13.578C4.84669 13.0252 4.64198 12.4884 4.27067 12.1053C3.94747 11.7721 3.53285 11.5884 3.10302 11.5884Z" fill="#001F2B" fill-opacity="0.7" />
                                        <path d="M20.8595 10.0188C20.8156 9.89278 20.6975 9.80845 20.5646 9.80845H12.0889C12.2722 9.35309 12.3463 8.81404 12.3463 8.40221C12.3463 6.72624 11.1809 5.51001 9.57556 5.51001C8.96914 5.51001 8.37292 5.71718 7.8875 6.09469C7.86792 6.10368 7.84897 6.11477 7.83127 6.12796L1.45282 10.8558C1.42471 10.8767 1.40243 10.902 1.38348 10.9293C0.688342 11.5053 0.238525 12.4016 0.238525 13.4094C0.238525 15.1051 1.5078 16.4914 3.08924 16.5521C3.12256 16.5644 3.15859 16.5711 3.19607 16.5714L12.8621 16.6055C12.8621 16.6055 12.8628 16.6055 12.8632 16.6055C12.934 16.6055 13.0025 16.5814 13.0579 16.537L20.7593 10.368C20.8633 10.2845 20.9032 10.1445 20.8595 10.0188ZM8.1374 6.68104C8.16634 6.66932 8.19362 6.65299 8.2182 6.6327C8.60929 6.30897 9.07868 6.13779 9.57556 6.13779C10.819 6.13779 11.7216 7.09014 11.7216 8.40221C11.7216 8.8967 11.5968 9.56612 11.3269 9.90701L6.12467 13.8667C6.14529 13.7162 6.1557 13.5636 6.1557 13.4092C6.1557 11.7104 4.88205 10.3253 3.29707 10.2686L8.1374 6.68104ZM12.7543 15.9771L3.3004 15.9438C3.26813 15.9323 3.23335 15.9262 3.19711 15.9262C1.91014 15.9262 0.863063 14.797 0.863063 13.4094C0.863063 12.0208 1.91014 10.8912 3.19711 10.8912C4.48409 10.8912 5.53096 12.0208 5.53096 13.4094C5.53096 13.7848 5.45536 14.1477 5.30626 14.4879C5.29126 14.5225 5.28272 14.5581 5.28043 14.5936C5.25711 14.6836 5.27356 14.7828 5.33354 14.8625C5.43766 15.0008 5.63362 15.0278 5.77127 14.9232L11.6662 10.4362H19.6717L12.7543 15.9771Z" fill="#001F2B" fill-opacity="0.7" />
                                    </svg>


                                    </span>Meditation and Yoga Areas
                                </div>




                            </div>
                        </div>
                        <div className='cols-span-1 flex justify-end'>
                        <div className='md:flex w-[406px] h-[368px] overflow-hidden '>
                                <img className='w-[300px] h-[300px]' src="/VillaOrchid/vill1.png" alt="" />
                                <img className='w-[314px] h-[279px] mt-[150px] ml-[-150px]' src="/VillaOrchid/vill2.png"  alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* Villa Lilly */}
            <section className='bg-[#F9F9F9]'>

                <div className='mt-5 2xl:px-[20rem] lg:mt-20 w-screen  grid grid-cols-1 gap-8  px-5 lg:px-20 py-5 md:py-20  md:grid-cols-4 '>

                    <div className='lg:col-span-1 md:col-span-2 col-start-1 lg:mt-40   '>
                        <div className=''>
                            <img className='w-[232px] h-[278px] object-cover relative ml-3' src="/VillaLilly/vill1.png" alt="" />
                        </div>
                    </div>

                    <div className=' grid  md:col-span-2 col-start-1 mx-auto  my-auto'>

                        <h2 className="text-3xl md:text-5xl text-center font-extrabold text-gray-800 mb-6">Villa Lilly</h2>
                        <p className="text-lg text-justify flex ">Villa Lilly is designed for guests seeking a holistic Ayurvedic experience. The villa offers comfortable accommodations and a range of wellness services, including personalized dietary plans and therapeutic treatments.</p>
                        <p className='text-lg max-w-xl pt-5 font-semibold'>Amenities</p>
                        <div className='grid grid-cols-2 mt-5 text-[12px] sm:text-lg gap-4'>
                            <div className='col-span-1 flex border-r-2 border-r-gray-700'>
                                <span className='mr-2'><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_298_1283)">
                                        <path d="M15.9084 6.21084L15.5 5.82793V2.73861C15.5 1.50436 14.4289 0.500244 13.1124 0.500244C12.5707 0.500244 12.0708 0.670488 11.6698 0.956542C9.90204 0.142881 7.70136 0.42416 6.23314 1.80058C4.6608 3.27468 4.42846 5.53625 5.53546 7.24346L3.74509 8.92194H2.98878C2.81621 8.92194 2.67628 9.0531 2.67628 9.21491V9.75239H2.10293C1.93037 9.75239 1.79043 9.88355 1.79043 10.0454V10.5828H1.21715C1.04459 10.5828 0.904655 10.714 0.904655 10.8758V11.4133H0.331374C0.2485 11.4133 0.169031 11.4442 0.110406 11.4991L0.0915311 11.5168C0.0329374 11.5717 0 11.6462 0 11.7239V13.6248C0 13.7866 0.139937 13.9178 0.312499 13.9178H2.37796C2.46084 13.9178 2.54031 13.8869 2.59893 13.832L6.04608 10.6003C6.16811 10.4859 6.16811 10.3004 6.04608 10.1859C5.92402 10.0715 5.72621 10.0715 5.60411 10.1859L2.2485 13.3319H0.624999V11.9991H1.21719C1.38975 11.9991 1.52968 11.868 1.52968 11.7062V11.1687H2.103C2.27556 11.1687 2.4155 11.0375 2.4155 10.8757V10.3382H2.98884C3.1614 10.3382 3.30134 10.2071 3.30134 10.0453V9.50779H3.87465C3.95752 9.50779 4.03699 9.47691 4.09562 9.42198L5.90077 7.72967C6.00405 7.84915 6.11483 7.96478 6.23333 8.07587C7.07883 8.86853 8.18795 9.32412 9.37529 9.37123V14.2693C9.37529 14.9477 9.96408 15.4997 10.6878 15.4997H14.6877C15.4113 15.4997 16.0001 14.9477 16.0001 14.2693V6.41797C16 6.3403 15.967 6.2658 15.9084 6.21084ZM13.1124 1.08615C14.0843 1.08615 14.875 1.82742 14.875 2.73858V5.24196L14.313 4.71515C14.3103 4.71257 14.3073 4.71037 14.3045 4.70791C14.2463 3.64956 13.7873 2.60713 12.9269 1.8005C12.7214 1.60787 12.5015 1.4368 12.2705 1.28707C12.5209 1.15904 12.8077 1.08615 13.1124 1.08615ZM11.3497 3.57076V2.92403C11.4311 2.95834 11.5076 3.006 11.5743 3.06858C11.7174 3.20273 11.7963 3.38106 11.7963 3.57076C11.7963 3.76045 11.7174 3.93881 11.5743 4.07296C11.279 4.34988 10.7984 4.34991 10.503 4.07296C10.2077 3.79605 10.2077 3.34549 10.503 3.06861C10.569 3.00679 10.6444 2.95957 10.7247 2.92535V3.57079C10.7247 3.73259 10.8647 3.86375 11.0372 3.86375C11.2098 3.86375 11.3497 3.73253 11.3497 3.57076ZM9.57998 8.78785C8.52811 8.78776 7.47586 8.41232 6.67505 7.66159C5.07333 6.15995 5.07333 3.71654 6.67508 2.21487C7.45102 1.48743 8.4827 1.0868 9.58004 1.0868C10.1469 1.0868 10.6962 1.19399 11.2018 1.39764C10.9919 1.65984 10.842 1.96655 10.7711 2.29963C10.5108 2.34741 10.2624 2.46556 10.0611 2.65423C9.52208 3.1596 9.52208 3.98185 10.0611 4.48722C10.3307 4.7399 10.6846 4.86623 11.0387 4.86623C11.3927 4.86623 11.7468 4.73988 12.0163 4.48722C12.2774 4.24242 12.4212 3.9169 12.4212 3.57073C12.4212 3.22453 12.2774 2.89904 12.0163 2.65423C11.841 2.48994 11.63 2.37943 11.4065 2.32198C11.4737 2.08046 11.5979 1.86047 11.7647 1.67505C12.0226 1.82742 12.2641 2.00789 12.4849 2.2149C13.2608 2.94234 13.6882 3.90952 13.6882 4.93827C13.6882 5.96703 13.2608 6.93421 12.4849 7.66165C11.6839 8.41255 10.6321 8.78793 9.57998 8.78785ZM15.375 14.2694C15.375 14.6248 15.0666 14.9139 14.6875 14.9139H10.6876C10.3085 14.9139 10.0001 14.6248 10.0001 14.2694V9.35817C11.1059 9.26758 12.1327 8.82051 12.9269 8.07593C13.6958 7.35514 14.144 6.446 14.2722 5.50552L15.375 6.53932V14.2694Z" fill="#001F2B" fill-opacity="0.52" />
                                        <path d="M7.98898 3.44665C8.11108 3.33225 8.11108 3.14674 7.98901 3.03234C7.86695 2.91793 7.66914 2.91793 7.54705 3.03234C6.42605 4.0833 6.42605 5.79333 7.54705 6.84426C7.60808 6.90148 7.68805 6.93007 7.76802 6.93007C7.84798 6.93007 7.92795 6.90145 7.98898 6.84426C8.11101 6.72986 8.11101 6.54435 7.98898 6.42995C7.11167 5.60744 7.11167 4.26913 7.98898 3.44665Z" fill="#001F2B" fill-opacity="0.52" />
                                        <path d="M8.98238 6.97492C8.98147 6.97469 8.97791 6.97375 8.977 6.97351C8.81091 6.93048 8.63938 7.02209 8.59341 7.17792C8.54738 7.33363 8.64519 7.49506 8.81122 7.53847C8.83975 7.54606 8.86844 7.54967 8.89669 7.54967C9.03269 7.54967 9.15778 7.46579 9.197 7.33712C9.24444 7.18152 9.14835 7.01936 8.98238 6.97492Z" fill="#001F2B" fill-opacity="0.52" />
                                        <path d="M14.0156 13.3318H11.3594C11.1868 13.3318 11.0469 13.4629 11.0469 13.6248C11.0469 13.7866 11.1868 13.9177 11.3594 13.9177H14.0156C14.1881 13.9177 14.3281 13.7866 14.3281 13.6248C14.3281 13.4629 14.1881 13.3318 14.0156 13.3318Z" fill="#001F2B" fill-opacity="0.52" />
                                        <path d="M6.84737 9.43472C6.78928 9.38022 6.70865 9.34888 6.62646 9.34888C6.54428 9.34888 6.46365 9.38022 6.40553 9.43472C6.3474 9.48921 6.31396 9.56479 6.31396 9.64185C6.31396 9.7189 6.34737 9.79448 6.40553 9.84897C6.46368 9.90347 6.54428 9.93481 6.62646 9.93481C6.70896 9.93481 6.78928 9.90347 6.84737 9.84897C6.90581 9.79448 6.93896 9.7189 6.93896 9.64185C6.93896 9.56479 6.90581 9.48921 6.84737 9.43472Z" fill="#001F2B" fill-opacity="0.52" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_298_1283">
                                            <rect width="16" height="15" fill="white" transform="translate(0 0.5)" />
                                        </clipPath>
                                    </defs>
                                </svg>

                                </span> <span className=''>Comfortable Accommodations</span>
                            </div>
                            <div className='col-span-1 flex '>
                                <span className='mr-2'><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.1287 15.7796L11.2499 15.1937V10H15.4166C15.6376 10 15.8496 9.9122 16.0058 9.75592C16.1621 9.59964 16.2499 9.38768 16.2499 9.16667V8.33333C16.2499 8.11232 16.1621 7.90036 16.0058 7.74408C15.8496 7.5878 15.6376 7.5 15.4166 7.5H14.1453C14.048 6.54424 13.6239 5.65132 12.9446 4.972C12.2653 4.29268 11.3723 3.86857 10.4166 3.77125V3.33333H10.8333C10.9438 3.33333 11.0497 3.28943 11.1279 3.21129C11.206 3.13315 11.2499 3.02717 11.2499 2.91667C11.2499 2.80616 11.206 2.70018 11.1279 2.62204C11.0497 2.5439 10.9438 2.5 10.8333 2.5H9.16659C9.05608 2.5 8.9501 2.5439 8.87196 2.62204C8.79382 2.70018 8.74992 2.80616 8.74992 2.91667C8.74992 3.02717 8.79382 3.13315 8.87196 3.21129C8.9501 3.28943 9.05608 3.33333 9.16659 3.33333H9.58325V3.77125C8.62749 3.86857 7.73458 4.29268 7.05526 4.972C6.37594 5.65132 5.95182 6.54424 5.8545 7.5H4.16659C3.94557 7.5 3.73361 7.5878 3.57733 7.74408C3.42105 7.90036 3.33325 8.11232 3.33325 8.33333V9.16667C3.33325 9.38768 3.42105 9.59964 3.57733 9.75592C3.73361 9.9122 3.94557 10 4.16659 10H8.74992V15.1937L7.87117 15.7796C7.757 15.8557 7.66337 15.9587 7.59861 16.0797C7.53384 16.2006 7.49994 16.3357 7.49992 16.4729V16.6667C7.49992 16.8877 7.58772 17.0996 7.744 17.2559C7.90028 17.4122 8.11224 17.5 8.33325 17.5H11.6666C11.8876 17.5 12.0996 17.4122 12.2558 17.2559C12.4121 17.0996 12.4999 16.8877 12.4999 16.6667V16.4729C12.4999 16.3357 12.466 16.2006 12.4012 16.0797C12.3365 15.9587 12.2428 15.8557 12.1287 15.7796ZM9.99992 4.58333C10.8112 4.58468 11.5941 4.88153 12.2024 5.41836C12.8106 5.95518 13.2024 6.69521 13.3045 7.5H6.69534C6.79745 6.69521 7.18926 5.95518 7.79749 5.41836C8.40571 4.88153 9.18868 4.58468 9.99992 4.58333ZM4.16659 9.16667V8.33333H15.4166V9.16667H4.16659ZM11.6666 16.6667H8.33325V16.4729L9.212 15.8871C9.32618 15.811 9.4198 15.7079 9.48456 15.587C9.54933 15.466 9.58323 15.3309 9.58325 15.1937V10H10.4166V15.1937C10.4166 15.3309 10.4505 15.466 10.5153 15.587C10.58 15.7079 10.6737 15.811 10.7878 15.8871L11.6666 16.4729V16.6667Z" fill="#001F2B" fill-opacity="0.34" />
                                    <path d="M19.3227 12.6667L19.9927 7.61133C20.0085 7.49378 19.9991 7.37419 19.965 7.26058C19.9309 7.14697 19.8729 7.04194 19.795 6.95252C19.717 6.8631 19.6209 6.79135 19.513 6.74207C19.4051 6.69279 19.2879 6.66711 19.1693 6.66675H18.7168C18.5339 6.66725 18.3562 6.72795 18.2111 6.83947C18.0661 6.95099 17.9618 7.10715 17.9143 7.28383L16.8364 11.3097H14.2681C13.9917 11.3098 13.7233 11.4019 13.5051 11.5715C13.2869 11.7411 13.1314 11.9785 13.0631 12.2463L12.9435 12.7084C12.912 12.8303 12.9085 12.9578 12.9334 13.0812C12.9582 13.2047 13.0107 13.3209 13.0869 13.4211C13.163 13.5214 13.261 13.603 13.3732 13.66C13.4855 13.717 13.6093 13.7478 13.7352 13.7501L12.9302 16.9842C12.9169 17.0374 12.9143 17.0926 12.9225 17.1467C12.9306 17.2009 12.9493 17.2529 12.9776 17.2998C13.0058 17.3467 13.043 17.3876 13.0871 17.4201C13.1312 17.4526 13.1812 17.4761 13.2343 17.4892C13.2668 17.497 13.3001 17.5006 13.3335 17.5001C13.4264 17.5001 13.5167 17.469 13.5899 17.4117C13.6632 17.3545 13.7152 17.2744 13.7377 17.1842L14.5927 13.7501H18.0002L18.7606 17.1738C18.7811 17.2663 18.8326 17.349 18.9064 17.4083C18.9803 17.4676 19.0721 17.5 19.1668 17.5001C19.1974 17.5 19.2278 17.4967 19.2577 17.4901C19.3111 17.4782 19.3617 17.456 19.4065 17.4246C19.4514 17.3932 19.4896 17.3533 19.519 17.3071C19.5484 17.261 19.5684 17.2095 19.5779 17.1556C19.5874 17.1017 19.5862 17.0464 19.5743 16.993L18.8018 13.5176C18.9425 13.4193 19.0614 13.2929 19.1511 13.1465C19.2407 13.0001 19.2991 12.8368 19.3227 12.6667ZM13.7502 12.9167L13.8693 12.4547C13.8917 12.3659 13.9429 12.2871 14.0151 12.2307C14.0872 12.1743 14.1761 12.1436 14.2677 12.1434H17.156C17.2477 12.1434 17.3369 12.1132 17.4096 12.0574C17.4824 12.0015 17.5347 11.9233 17.5585 11.8347L18.7168 7.50008H19.1668L18.4968 12.5555C18.4835 12.6548 18.4349 12.746 18.3598 12.8123C18.2847 12.8787 18.1883 12.9157 18.0881 12.9167H13.7502Z" fill="#001F2B" fill-opacity="0.34" />
                                    <path d="M6.90837 13.428C6.98671 13.3275 7.04087 13.2103 7.06667 13.0856C7.09246 12.9608 7.08919 12.8317 7.05712 12.7084L6.93795 12.2476C6.86966 11.9796 6.71412 11.7421 6.49586 11.5723C6.2776 11.4026 6.00904 11.3103 5.73254 11.3101H3.16379L2.08587 7.28383C2.03839 7.10715 1.93409 6.95099 1.78906 6.83947C1.64403 6.72795 1.46632 6.66725 1.28337 6.66675H0.83087C0.712373 6.66713 0.595321 6.69279 0.487524 6.74199C0.379726 6.7912 0.283663 6.86283 0.205744 6.95211C0.127824 7.04138 0.0698405 7.14625 0.0356616 7.25971C0.00148261 7.37317 -0.00810561 7.49262 0.00753669 7.61008L0.677537 12.6667C0.699875 12.8293 0.754109 12.9859 0.837125 13.1275C0.92014 13.2691 1.0303 13.3929 1.16129 13.4917L0.382953 16.993C0.358973 17.1009 0.378843 17.2139 0.43819 17.3072C0.497537 17.4004 0.591502 17.4663 0.699412 17.4903C0.807322 17.5143 0.920338 17.4944 1.0136 17.4351C1.10686 17.3757 1.17272 17.2817 1.1967 17.1738L1.95837 13.7501H5.36462L6.21962 17.1842C6.24216 17.2746 6.29435 17.3549 6.36784 17.4121C6.44133 17.4694 6.53188 17.5003 6.62504 17.5001C6.65904 17.5002 6.69293 17.496 6.72587 17.4876C6.77898 17.4744 6.82896 17.4508 6.87297 17.4183C6.91697 17.3858 6.95414 17.3449 6.98235 17.298C7.01055 17.2511 7.02925 17.1991 7.03736 17.145C7.04547 17.0909 7.04284 17.0357 7.02962 16.9826L6.22295 13.7501H6.25212C6.37889 13.7504 6.50404 13.7215 6.61785 13.6657C6.73165 13.6098 6.83106 13.5285 6.90837 13.428ZM1.91212 12.9167C1.81194 12.9157 1.71548 12.8787 1.64041 12.8123C1.56534 12.746 1.51669 12.6548 1.50337 12.5555L0.83087 7.50008H1.28087L2.44129 11.8334C2.46504 11.922 2.51736 12.0003 2.59014 12.0561C2.66291 12.1119 2.75207 12.1422 2.84379 12.1422H5.73212C5.82376 12.1424 5.9127 12.1732 5.98491 12.2297C6.05711 12.2861 6.10847 12.365 6.13087 12.4538L6.25004 12.9167H1.91212Z" fill="#001F2B" fill-opacity="0.34" />
                                </svg>

                                </span>Therapeutic Treatments
                            </div>
                            <div className='col-span-1 flex border-r-2 border-[#001F2B]'>
                                <span className='mr-2'><svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.7963 9.20314C8.05621 9.20314 8.26691 8.93977 8.26691 8.61488C8.26691 8.28999 8.05621 8.02661 7.7963 8.02661C7.53638 8.02661 7.32568 8.28999 7.32568 8.61488C7.32568 8.93977 7.53638 9.20314 7.7963 9.20314Z" fill="white" />
                                    <path d="M7.79641 9.39191C7.4537 9.39191 7.1748 9.0433 7.1748 8.61472C7.1748 8.18651 7.4537 7.83789 7.79641 7.83789C8.13913 7.83789 8.41802 8.1865 8.41802 8.61472C8.41802 9.0433 8.13913 9.39191 7.79641 9.39191ZM7.79641 8.21525C7.62012 8.21525 7.47669 8.39435 7.47669 8.61472C7.47669 8.83509 7.62012 9.01456 7.79641 9.01456C7.97271 9.01456 8.11614 8.83509 8.11614 8.61472C8.11614 8.39435 7.97271 8.21525 7.79641 8.21525Z" fill="#001F2B" fill-opacity="0.72" />
                                    <path d="M7.2718 6.79204C7.48663 6.79204 7.66078 6.57435 7.66078 6.30581C7.66078 6.03727 7.48663 5.81958 7.2718 5.81958C7.05697 5.81958 6.88281 6.03727 6.88281 6.30581C6.88281 6.57435 7.05697 6.79204 7.2718 6.79204Z" fill="white" />
                                    <path d="M7.27188 6.98073C6.97412 6.98073 6.73193 6.67781 6.73193 6.30561C6.73193 5.93341 6.97412 5.63086 7.27188 5.63086C7.56964 5.63086 7.81183 5.93341 7.81183 6.30561C7.81183 6.67781 7.56964 6.98073 7.27188 6.98073ZM7.27188 6.00822C7.14054 6.00822 7.03382 6.14162 7.03382 6.30561C7.03382 6.46997 7.14054 6.60337 7.27188 6.60337C7.40322 6.60337 7.50994 6.46997 7.50994 6.30561C7.50994 6.14162 7.40322 6.00822 7.27188 6.00822Z" fill="#001F2B" fill-opacity="0.72" />
                                    <path d="M6.34992 8.2542C6.56475 8.2542 6.73891 8.03651 6.73891 7.76797C6.73891 7.49943 6.56475 7.28174 6.34992 7.28174C6.13509 7.28174 5.96094 7.49943 5.96094 7.76797C5.96094 8.03651 6.13509 8.2542 6.34992 8.2542Z" fill="white" />
                                    <path d="M6.35001 8.44288C6.05225 8.44288 5.81006 8.13997 5.81006 7.76777C5.81006 7.39557 6.05225 7.09302 6.35001 7.09302C6.64762 7.09302 6.88981 7.39557 6.88981 7.76777C6.88981 8.13997 6.64762 8.44288 6.35001 8.44288ZM6.35001 7.47038C6.21867 7.47038 6.11195 7.60378 6.11195 7.76777C6.11195 7.93212 6.21867 8.06553 6.35001 8.06553C6.4812 8.06553 6.58792 7.93212 6.58792 7.76777C6.58792 7.60378 6.4812 7.47038 6.35001 7.47038Z" fill="#001F2B" fill-opacity="0.72" />
                                    <path d="M2.57397 8.83843C1.59203 7.79717 1.58594 5.79578 1.58594 5.79578C1.58594 5.79578 1.59953 5.79438 1.62876 5.78853C2.80352 5.60254 3.94008 6.46559 4.33241 7.86066C4.4985 8.44737 4.77041 9.01466 5.13661 9.56092C5.13661 9.56092 3.55347 9.87709 2.57397 8.83843Z" fill="white" />
                                    <path d="M4.5689 9.79634C3.99535 9.79634 3.12109 9.66589 2.47648 8.98229C1.45319 7.89739 1.43535 5.88161 1.43506 5.79649C1.43476 5.69846 1.49476 5.61628 1.57288 5.60781L1.60472 5.60228C2.85546 5.40328 4.06139 6.32825 4.47486 7.79789C4.6317 8.35176 4.8932 8.90417 5.25228 9.43962C5.28721 9.49158 5.29694 9.56307 5.27793 9.62682C5.25891 9.69058 5.2141 9.73664 5.16044 9.74733C5.13553 9.75212 4.90322 9.79634 4.5689 9.79634ZM2.67165 8.69485C3.35295 9.41677 4.36696 9.44146 4.84514 9.40645C4.55195 8.92222 4.33202 8.42473 4.19022 7.92355C3.83409 6.6577 2.81537 5.8455 1.74343 5.96306C1.77085 6.45244 1.9156 7.89296 2.67165 8.69485Z" fill="#001F2B" fill-opacity="0.72" />
                                    <path d="M3.24484 8.03889C3.20003 8.03889 3.15566 8.0142 3.12589 7.96666C3.11321 7.94639 1.83712 5.9262 0.779041 5.46592C0.700327 5.43165 0.658758 5.32404 0.686176 5.22565C0.713593 5.12726 0.799678 5.07603 0.878393 5.1092C2.0202 5.60633 3.30911 7.64716 3.3635 7.73376C3.41495 7.81594 3.40345 7.93423 3.33786 7.99872C3.31014 8.02562 3.27742 8.03889 3.24484 8.03889Z" fill="#001F2B" fill-opacity="0.72" />
                                    <path d="M3.28238 7.22596C3.27825 7.22596 3.27413 7.22559 3.27 7.22522L2.61434 7.15889C2.53135 7.15078 2.46944 7.05976 2.47607 6.95584C2.483 6.85192 2.55715 6.77748 2.63881 6.783L3.29447 6.84934C3.37746 6.85744 3.43937 6.94847 3.43274 7.05239C3.42625 7.15115 3.36021 7.22596 3.28238 7.22596Z" fill="#001F2B" fill-opacity="0.72" />
                                    <path d="M2.26677 7.48126C2.26309 7.48126 2.25955 7.48126 2.25587 7.48089C2.17273 7.47352 2.11008 7.38286 2.11613 7.27894L2.1574 6.55813C2.1633 6.45421 2.23597 6.37682 2.31866 6.38345C2.4018 6.39082 2.46445 6.48148 2.4584 6.5854L2.41713 7.30621C2.41153 7.40534 2.34519 7.48126 2.26677 7.48126Z" fill="#001F2B" fill-opacity="0.72" />
                                    <path d="M14.4574 6.40303C13.298 9.49273 11.1478 13.2503 10.3993 12.8114C9.65088 12.3726 10.5876 7.90361 11.747 4.8139C12.9064 1.7242 13.8494 1.1838 14.5978 1.62263C15.3463 2.06145 15.6167 3.31332 14.4574 6.40303Z" fill="white" />
                                    <path d="M10.5291 13.0349C10.4594 13.0349 10.3947 13.0172 10.3352 12.9826C9.35564 12.4081 10.6447 7.30711 11.6104 4.73415C12.167 3.25051 12.6978 2.27358 13.2331 1.74697C13.7115 1.27564 14.1922 1.17688 14.6619 1.45179C15.6658 2.04068 15.6435 3.68646 14.594 6.48312C14.0091 8.04193 13.1867 9.74705 12.3941 11.045C11.5865 12.3676 10.9607 13.0349 10.5291 13.0349ZM14.1403 1.6788C13.9058 1.6788 13.6674 1.79967 13.4198 2.04326C12.9292 2.52601 12.4124 3.48525 11.8836 4.89408C10.5495 8.44951 9.94246 12.3355 10.4634 12.6406C10.6577 12.7582 11.2191 12.3473 12.1541 10.8161C12.9229 9.55726 13.753 7.83593 14.3207 6.32318C15.2706 3.79186 15.3422 2.26768 14.5337 1.79377C14.4031 1.71712 14.2724 1.6788 14.1403 1.6788Z" fill="#001F2B" fill-opacity="0.72" />
                                    <path d="M13.8138 6.14155C12.6544 9.23126 10.5042 12.9888 9.75577 12.55C9.00732 12.1111 9.94405 7.64214 11.1034 4.55243C12.2628 1.46272 13.2058 0.922329 13.9543 1.36115C14.7027 1.79998 14.9732 3.05185 13.8138 6.14155Z" fill="white" />
                                    <path d="M9.88558 12.7733C9.81586 12.7733 9.75115 12.7556 9.6916 12.721C8.71209 12.1465 10.0011 7.04548 10.9668 4.47251C11.5234 2.98887 12.0542 2.01194 12.5896 1.48534C13.0684 1.01401 13.5489 0.915613 14.0184 1.19016C15.0222 1.77904 15 3.42483 13.9504 6.22148C13.3655 7.78029 12.5432 9.48541 11.7506 10.7833C10.9429 12.1059 10.3172 12.7733 9.88558 12.7733ZM13.4969 1.41716C13.2624 1.41716 13.024 1.5384 12.7762 1.78199C12.2856 2.26438 11.7688 3.22362 11.2401 4.63245C9.90592 8.18787 9.29891 12.0739 9.81984 12.379C10.0141 12.4969 10.5756 12.0856 11.5106 10.5545C12.2793 9.29562 13.1095 7.5743 13.6772 6.06154C14.627 3.53022 14.6987 2.00605 13.8902 1.53214C13.7597 1.45549 13.6288 1.41716 13.4969 1.41716Z" fill="#001F2B" fill-opacity="0.72" />
                                    <path d="M11.4419 16.6706V17.2215C11.4419 18.0781 10.8864 18.7725 10.2011 18.7725H6.48489C5.7996 18.7725 5.24414 18.0781 5.24414 17.2215V16.6706C5.24414 16.1989 5.55205 15.814 5.92641 15.814H10.7566C11.137 15.814 11.4419 16.1989 11.4419 16.6706Z" fill="white" />
                                    <path d="M10.2012 18.9614H6.48492C5.71752 18.9614 5.09326 18.1809 5.09326 17.2216V16.6707C5.09326 16.0944 5.46708 15.6252 5.92655 15.6252H10.7567C11.2178 15.6252 11.593 16.0944 11.593 16.6707V17.2216C11.593 18.1809 10.9686 18.9614 10.2012 18.9614ZM5.92655 16.0026C5.6335 16.0026 5.39515 16.3022 5.39515 16.6707V17.2216C5.39515 17.973 5.88395 18.584 6.48492 18.584H10.2012C10.8021 18.584 11.2911 17.973 11.2911 17.2216V16.6707C11.2911 16.3022 11.0514 16.0026 10.7567 16.0026H5.92655Z" fill="#001F2B" fill-opacity="0.72" />
                                    <path d="M15.0287 9.63697V10.6815C15.0287 14.3338 12.6612 17.2933 9.73932 17.2933H6.94836C4.02929 17.2933 1.65894 14.3338 1.65894 10.6815V9.63697C1.65894 9.20176 1.94303 8.8501 2.28843 8.8501H14.3992C14.7474 8.8501 15.0287 9.20176 15.0287 9.63697Z" fill="white" />
                                    <path d="M9.73948 17.4818H6.9485C3.94865 17.4818 1.50806 14.4312 1.50806 10.6816V9.63683C1.50806 9.0988 1.85815 8.66138 2.28857 8.66138H14.3994C14.8297 8.66138 15.1798 9.0988 15.1798 9.63683V10.6816C15.1798 14.4312 12.7393 17.4818 9.73948 17.4818ZM2.28857 9.03874C2.02471 9.03874 1.80994 9.30701 1.80994 9.63683V10.6816C1.80994 14.223 4.11507 17.1044 6.9485 17.1044H9.73948C12.5728 17.1044 14.8779 14.223 14.8779 10.6816V9.63683C14.8779 9.30701 14.6633 9.03874 14.3994 9.03874H2.28857Z" fill="#001F2B" fill-opacity="0.72" />
                                    <path d="M10.5363 16.6706V17.2215C10.5363 18.0781 9.98089 18.7725 9.2956 18.7725H5.57937C4.89408 18.7725 4.33862 18.0781 4.33862 17.2215V16.6706C4.33862 16.1989 4.64654 15.814 5.02089 15.814H9.85108C10.2314 15.814 10.5363 16.1989 10.5363 16.6706Z" fill="white" />
                                    <path d="M9.29565 18.9614H5.5794C4.81201 18.9614 4.18774 18.1809 4.18774 17.2216V16.6707C4.18774 16.0944 4.56156 15.6252 5.02103 15.6252H9.85122C10.3123 15.6252 10.6874 16.0944 10.6874 16.6707V17.2216C10.6874 18.1809 10.063 18.9614 9.29565 18.9614ZM5.02103 16.0026C4.72799 16.0026 4.48963 16.3022 4.48963 16.6707V17.2216C4.48963 17.973 4.97843 18.584 5.5794 18.584H9.29565C9.89662 18.584 10.3856 17.973 10.3856 17.2216V16.6707C10.3856 16.3022 10.1459 16.0026 9.85122 16.0026H5.02103Z" fill="#001F2B" fill-opacity="0.72" />
                                    <path d="M14.1228 9.63705V10.6823C14.1228 14.3352 11.756 17.2937 8.83369 17.2937H6.04124C3.12502 17.2937 0.752197 14.3352 0.752197 10.6823V9.63705C0.752197 9.20311 1.03597 8.84839 1.38313 8.84839H13.4948C13.842 8.84839 14.1228 9.20311 14.1228 9.63705Z" fill="white" />
                                    <path d="M8.83378 17.4825H6.04132C3.04177 17.4825 0.601318 14.4319 0.601318 10.6823V9.63721C0.601318 9.09844 0.951996 8.65991 1.38316 8.65991H13.4949C13.9244 8.65991 14.2738 9.09844 14.2738 9.63721V10.6823C14.2738 14.4319 11.8333 17.4825 8.83378 17.4825ZM1.38316 9.03727C1.11857 9.03727 0.903205 9.30629 0.903205 9.63721V10.6823C0.903205 14.2237 3.20819 17.1052 6.04132 17.1052H8.83378C11.6669 17.1052 13.9719 14.2237 13.9719 10.6823V9.63721C13.9719 9.30629 13.7579 9.03727 13.4949 9.03727H1.38316Z" fill="#001F2B" fill-opacity="0.72" />
                                    <path d="M2.74061 13.6807C2.58375 13.4116 2.4474 13.1227 2.33447 12.8176L2.74061 13.6807Z" fill="white" />
                                    <path d="M2.74081 13.8694C2.69423 13.8694 2.64824 13.8425 2.61861 13.792C2.45528 13.5115 2.31363 13.2105 2.19762 12.8969C2.16254 12.8022 2.19556 12.6901 2.27117 12.6463C2.34724 12.6028 2.43671 12.6437 2.4715 12.7384C2.5794 13.0295 2.71089 13.3092 2.86271 13.5694C2.9118 13.6538 2.89691 13.7717 2.82955 13.8333C2.80272 13.8576 2.77162 13.8694 2.74081 13.8694Z" fill="#001F2B" fill-opacity="0.72" />
                                    <path d="M6.04139 15.7843C4.92318 15.7843 3.90857 15.2193 3.17065 14.3057L6.04139 15.7843Z" fill="white" />
                                    <path d="M6.04139 15.9732C4.92008 15.9732 3.86288 15.4285 3.06439 14.4398C3.00528 14.3664 3.00483 14.247 3.0635 14.173C3.12202 14.0993 3.21754 14.0978 3.27694 14.1715C4.01839 15.0898 5.00026 15.5958 6.04139 15.5958C6.12482 15.5958 6.19233 15.6802 6.19233 15.7845C6.19233 15.8888 6.12482 15.9732 6.04139 15.9732Z" fill="#001F2B" fill-opacity="0.72" />
                                    <path d="M6.63617 4.67673L6.28207 5.89303C6.21703 6.11644 6.02357 6.22922 5.84485 6.14792L4.85195 5.69626C4.42074 5.50011 4.15159 4.9239 4.27911 4.37553C4.35191 4.05928 4.52707 3.82173 4.73989 3.69766C4.93824 3.57909 5.17554 3.55853 5.3968 3.65918L6.43227 4.1302C6.61099 4.2115 6.70121 4.45333 6.63617 4.67673Z" fill="white" />
                                    <path d="M5.96368 6.36294C5.90648 6.36294 5.84885 6.35041 5.79313 6.32498L4.80035 5.87355C4.27957 5.6366 3.98697 4.95522 4.13422 4.32285C4.21515 3.97055 4.41267 3.68016 4.67609 3.52649C4.91429 3.3835 5.19643 3.36729 5.44835 3.4819L6.48387 3.95286C6.73888 4.06894 6.87066 4.42271 6.77794 4.74111L6.42388 5.95757C6.37862 6.11309 6.28826 6.23654 6.16975 6.30582C6.1043 6.34378 6.03428 6.36294 5.96368 6.36294ZM5.1043 3.78371C5.00112 3.78371 4.89852 3.81172 4.80507 3.86773C4.61948 3.97607 4.48122 4.17986 4.42417 4.4275C4.32276 4.86309 4.53797 5.35247 4.90368 5.51904L5.89646 5.97047C5.9451 5.99258 5.99669 5.99 6.04224 5.96384C6.08779 5.93731 6.12258 5.88903 6.14027 5.82859L6.49434 4.61213C6.53075 4.48683 6.48077 4.35306 6.38054 4.30737L5.34516 3.83641C5.26748 3.80103 5.18567 3.78371 5.1043 3.78371Z" fill="#001F2B" fill-opacity="0.72" />
                                    <path d="M7.54674 4.55213L7.99791 5.71714C8.08078 5.93112 8.28241 6.01874 8.4536 5.91516L9.40463 5.33969C9.81766 5.08976 10.0386 4.48234 9.86711 3.95302C9.76897 3.64766 9.5754 3.43359 9.35359 3.3372C9.14663 3.24444 8.90889 3.25414 8.69695 3.38238L7.70516 3.98252C7.53397 4.0861 7.46387 4.33814 7.54674 4.55213Z" fill="white" />
                                    <path d="M8.30573 6.14623C8.1228 6.14623 7.9468 6.01872 7.86189 5.79946L7.41068 4.63421C7.29069 4.32393 7.39108 3.96315 7.63916 3.81243L8.63105 3.21249C8.87177 3.06729 9.15375 3.04702 9.40434 3.15942C9.67734 3.27808 9.89756 3.54194 10.0071 3.88245C10.2048 4.49307 9.96891 5.20762 9.47023 5.50944L8.51932 6.08505C8.45048 6.1267 8.37751 6.14623 8.30573 6.14623ZM7.6825 4.46986L8.13371 5.6351C8.18014 5.7545 8.29172 5.80277 8.38783 5.74528L9.33875 5.16967C9.68884 4.95777 9.86307 4.44369 9.72716 4.02359C9.65007 3.78405 9.49573 3.59869 9.30381 3.51541C9.12796 3.43654 8.93132 3.44981 8.76254 3.55226L7.77079 4.1522C7.67498 4.21042 7.63606 4.35009 7.6825 4.46986Z" fill="#001F2B" fill-opacity="0.72" />
                                </svg>


                                </span>Ayurvedic Wellness Services
                            </div>
                            <div className='col-span-1 flex '>
                                <span className='mr-2'><svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.10302 11.5884C2.15549 11.5884 1.38477 12.4037 1.38477 13.4058C1.38477 13.93 1.59135 15.149 3.50432 15.149H3.52827C3.70091 15.149 3.84064 15.0083 3.84064 14.8351C3.84064 14.6618 3.70091 14.5212 3.52827 14.5212H3.50432C2.51243 14.5212 2.00951 14.146 2.00951 13.4058C2.00951 12.7498 2.49994 12.2162 3.10302 12.2162C3.36292 12.2162 3.61865 12.3325 3.82315 12.5434C4.07763 12.8061 4.21799 13.1771 4.20778 13.5617C4.2032 13.735 4.3394 13.8792 4.51183 13.8836C4.68488 13.894 4.82774 13.7515 4.83232 13.578C4.84669 13.0252 4.64198 12.4884 4.27067 12.1053C3.94747 11.7721 3.53285 11.5884 3.10302 11.5884Z" fill="#001F2B" fill-opacity="0.6" />
                                    <path d="M20.8595 10.0188C20.8156 9.89278 20.6975 9.80845 20.5646 9.80845H12.0889C12.2722 9.35309 12.3463 8.81404 12.3463 8.40221C12.3463 6.72624 11.1809 5.51001 9.57556 5.51001C8.96914 5.51001 8.37292 5.71718 7.8875 6.09469C7.86792 6.10368 7.84897 6.11477 7.83127 6.12796L1.45282 10.8558C1.42471 10.8767 1.40243 10.902 1.38348 10.9293C0.688342 11.5053 0.238525 12.4016 0.238525 13.4094C0.238525 15.1051 1.5078 16.4914 3.08924 16.5521C3.12256 16.5644 3.15859 16.5711 3.19607 16.5714L12.8621 16.6055C12.8621 16.6055 12.8628 16.6055 12.8632 16.6055C12.934 16.6055 13.0025 16.5814 13.0579 16.537L20.7593 10.368C20.8633 10.2845 20.9032 10.1445 20.8595 10.0188ZM8.1374 6.68104C8.16634 6.66932 8.19362 6.65299 8.2182 6.6327C8.60929 6.30897 9.07868 6.13779 9.57556 6.13779C10.819 6.13779 11.7216 7.09014 11.7216 8.40221C11.7216 8.8967 11.5968 9.56612 11.3269 9.90701L6.12467 13.8667C6.14529 13.7162 6.1557 13.5636 6.1557 13.4092C6.1557 11.7104 4.88205 10.3253 3.29707 10.2686L8.1374 6.68104ZM12.7543 15.9771L3.3004 15.9438C3.26813 15.9323 3.23335 15.9262 3.19711 15.9262C1.91014 15.9262 0.863063 14.797 0.863063 13.4094C0.863063 12.0208 1.91014 10.8912 3.19711 10.8912C4.48409 10.8912 5.53096 12.0208 5.53096 13.4094C5.53096 13.7848 5.45536 14.1477 5.30626 14.4879C5.29126 14.5225 5.28272 14.5581 5.28043 14.5936C5.25711 14.6836 5.27356 14.7828 5.33354 14.8625C5.43766 15.0008 5.63362 15.0278 5.77127 14.9232L11.6662 10.4362H19.6717L12.7543 15.9771Z" fill="#001F2B" fill-opacity="0.6" />
                                </svg>


                                </span>Personalized Dietary Plans
                            </div>



                        </div>

                    </div>

                    <div className='col-span-1  hidden lg:inline justify-end'>
                        <div className=''>
                        <img className='w-[232px] h-[278px] object-cover relative ml-3' src="/VillaLilly/vill2.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>



            {/* Lotus Mansion */}
            <section className='bg-[#FFFFFF]'>
                <div className='mt-5 2xl:px-[20rem] lg:mt-20  lg:px-20  px-5  '>
                    <div className='relative grid grid-cols-1 mx-auto  md:grid-cols-2 gap-8 '>
                        <div className='cols-span-1 col-start-1'>

                            <h2 className="text-3xl md:text-5xl text-center md:text-start font-extrabold text-gray-800 mb-6">Lotus Mansion</h2>
                            <p className="text-lg text-justify max-w-xl flex ">Lotus Mansion combines luxury with traditional Ayurvedic practices. The villa features beautifully appointed rooms, a private garden, and exclusive Ayurvedic services. Guests can experience comprehensive wellness programs tailored to their needs.</p>
                            <p className='text-lg max-w-xl pt-5 font-semibold'>Amenities</p>
                            <div className='grid grid-cols-2 mt-5 gap-4'>

                                <div className='col-span-1 flex border-r-2 border-r-gray-700'>
                                    <span className='mr-2'><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_298_1283)">
                                            <path d="M15.9084 6.21084L15.5 5.82793V2.73861C15.5 1.50436 14.4289 0.500244 13.1124 0.500244C12.5707 0.500244 12.0708 0.670488 11.6698 0.956542C9.90204 0.142881 7.70136 0.42416 6.23314 1.80058C4.6608 3.27468 4.42846 5.53625 5.53546 7.24346L3.74509 8.92194H2.98878C2.81621 8.92194 2.67628 9.0531 2.67628 9.21491V9.75239H2.10293C1.93037 9.75239 1.79043 9.88355 1.79043 10.0454V10.5828H1.21715C1.04459 10.5828 0.904655 10.714 0.904655 10.8758V11.4133H0.331374C0.2485 11.4133 0.169031 11.4442 0.110406 11.4991L0.0915311 11.5168C0.0329374 11.5717 0 11.6462 0 11.7239V13.6248C0 13.7866 0.139937 13.9178 0.312499 13.9178H2.37796C2.46084 13.9178 2.54031 13.8869 2.59893 13.832L6.04608 10.6003C6.16811 10.4859 6.16811 10.3004 6.04608 10.1859C5.92402 10.0715 5.72621 10.0715 5.60411 10.1859L2.2485 13.3319H0.624999V11.9991H1.21719C1.38975 11.9991 1.52968 11.868 1.52968 11.7062V11.1687H2.103C2.27556 11.1687 2.4155 11.0375 2.4155 10.8757V10.3382H2.98884C3.1614 10.3382 3.30134 10.2071 3.30134 10.0453V9.50779H3.87465C3.95752 9.50779 4.03699 9.47691 4.09562 9.42198L5.90077 7.72967C6.00405 7.84915 6.11483 7.96478 6.23333 8.07587C7.07883 8.86853 8.18795 9.32412 9.37529 9.37123V14.2693C9.37529 14.9477 9.96408 15.4997 10.6878 15.4997H14.6877C15.4113 15.4997 16.0001 14.9477 16.0001 14.2693V6.41797C16 6.3403 15.967 6.2658 15.9084 6.21084ZM13.1124 1.08615C14.0843 1.08615 14.875 1.82742 14.875 2.73858V5.24196L14.313 4.71515C14.3103 4.71257 14.3073 4.71037 14.3045 4.70791C14.2463 3.64956 13.7873 2.60713 12.9269 1.8005C12.7214 1.60787 12.5015 1.4368 12.2705 1.28707C12.5209 1.15904 12.8077 1.08615 13.1124 1.08615ZM11.3497 3.57076V2.92403C11.4311 2.95834 11.5076 3.006 11.5743 3.06858C11.7174 3.20273 11.7963 3.38106 11.7963 3.57076C11.7963 3.76045 11.7174 3.93881 11.5743 4.07296C11.279 4.34988 10.7984 4.34991 10.503 4.07296C10.2077 3.79605 10.2077 3.34549 10.503 3.06861C10.569 3.00679 10.6444 2.95957 10.7247 2.92535V3.57079C10.7247 3.73259 10.8647 3.86375 11.0372 3.86375C11.2098 3.86375 11.3497 3.73253 11.3497 3.57076ZM9.57998 8.78785C8.52811 8.78776 7.47586 8.41232 6.67505 7.66159C5.07333 6.15995 5.07333 3.71654 6.67508 2.21487C7.45102 1.48743 8.4827 1.0868 9.58004 1.0868C10.1469 1.0868 10.6962 1.19399 11.2018 1.39764C10.9919 1.65984 10.842 1.96655 10.7711 2.29963C10.5108 2.34741 10.2624 2.46556 10.0611 2.65423C9.52208 3.1596 9.52208 3.98185 10.0611 4.48722C10.3307 4.7399 10.6846 4.86623 11.0387 4.86623C11.3927 4.86623 11.7468 4.73988 12.0163 4.48722C12.2774 4.24242 12.4212 3.9169 12.4212 3.57073C12.4212 3.22453 12.2774 2.89904 12.0163 2.65423C11.841 2.48994 11.63 2.37943 11.4065 2.32198C11.4737 2.08046 11.5979 1.86047 11.7647 1.67505C12.0226 1.82742 12.2641 2.00789 12.4849 2.2149C13.2608 2.94234 13.6882 3.90952 13.6882 4.93827C13.6882 5.96703 13.2608 6.93421 12.4849 7.66165C11.6839 8.41255 10.6321 8.78793 9.57998 8.78785ZM15.375 14.2694C15.375 14.6248 15.0666 14.9139 14.6875 14.9139H10.6876C10.3085 14.9139 10.0001 14.6248 10.0001 14.2694V9.35817C11.1059 9.26758 12.1327 8.82051 12.9269 8.07593C13.6958 7.35514 14.144 6.446 14.2722 5.50552L15.375 6.53932V14.2694Z" fill="#001F2B" fill-opacity="0.52" />
                                            <path d="M7.98898 3.44665C8.11108 3.33225 8.11108 3.14674 7.98901 3.03234C7.86695 2.91793 7.66914 2.91793 7.54705 3.03234C6.42605 4.0833 6.42605 5.79333 7.54705 6.84426C7.60808 6.90148 7.68805 6.93007 7.76802 6.93007C7.84798 6.93007 7.92795 6.90145 7.98898 6.84426C8.11101 6.72986 8.11101 6.54435 7.98898 6.42995C7.11167 5.60744 7.11167 4.26913 7.98898 3.44665Z" fill="#001F2B" fill-opacity="0.52" />
                                            <path d="M8.98238 6.97492C8.98147 6.97469 8.97791 6.97375 8.977 6.97351C8.81091 6.93048 8.63938 7.02209 8.59341 7.17792C8.54738 7.33363 8.64519 7.49506 8.81122 7.53847C8.83975 7.54606 8.86844 7.54967 8.89669 7.54967C9.03269 7.54967 9.15778 7.46579 9.197 7.33712C9.24444 7.18152 9.14835 7.01936 8.98238 6.97492Z" fill="#001F2B" fill-opacity="0.52" />
                                            <path d="M14.0156 13.3318H11.3594C11.1868 13.3318 11.0469 13.4629 11.0469 13.6248C11.0469 13.7866 11.1868 13.9177 11.3594 13.9177H14.0156C14.1881 13.9177 14.3281 13.7866 14.3281 13.6248C14.3281 13.4629 14.1881 13.3318 14.0156 13.3318Z" fill="#001F2B" fill-opacity="0.52" />
                                            <path d="M6.84737 9.43472C6.78928 9.38022 6.70865 9.34888 6.62646 9.34888C6.54428 9.34888 6.46365 9.38022 6.40553 9.43472C6.3474 9.48921 6.31396 9.56479 6.31396 9.64185C6.31396 9.7189 6.34737 9.79448 6.40553 9.84897C6.46368 9.90347 6.54428 9.93481 6.62646 9.93481C6.70896 9.93481 6.78928 9.90347 6.84737 9.84897C6.90581 9.79448 6.93896 9.7189 6.93896 9.64185C6.93896 9.56479 6.90581 9.48921 6.84737 9.43472Z" fill="#001F2B" fill-opacity="0.52" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_298_1283">
                                                <rect width="16" height="15" fill="white" transform="translate(0 0.5)" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                    </span>Luxurious Rooms
                                </div>
                                <div className='col-span-1 flex '>
                                    <span className='mr-2'><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.4008 1.81224C16.3899 1.74792 16.3624 1.68757 16.321 1.63714C16.2796 1.58671 16.2258 1.54795 16.1649 1.52467C16.104 1.5014 16.038 1.49443 15.9735 1.50445C15.9091 1.51446 15.8484 1.54112 15.7974 1.58179C14.5683 2.56166 12.9555 2.92236 11.2481 3.30427C8.80527 3.85067 6.03636 4.46994 3.88318 7.08789C2.5386 8.72262 2.31718 10.4801 2.36819 11.6665C2.39616 12.3544 2.52089 13.035 2.73871 13.6881C1.89102 15.0098 1.53949 15.9511 1.52318 15.9955C1.48963 16.0886 1.49425 16.1912 1.53605 16.281C1.57784 16.3707 1.65342 16.4403 1.74629 16.4745C1.83917 16.5087 1.94181 16.5048 2.03184 16.4637C2.12187 16.4226 2.19199 16.3475 2.2269 16.2549C2.23042 16.2449 2.55305 15.3862 3.31478 14.1803C4.46375 14.5216 5.65409 14.7038 6.85255 14.7217C6.89778 14.7222 6.94287 14.7225 6.98779 14.7225C8.18828 14.7225 9.30108 14.5359 10.2974 14.1673C11.5848 13.6962 12.7181 12.8804 13.5732 11.8088C15.5038 9.40873 16.1704 6.82418 16.3897 5.0786C16.6275 3.18484 16.4102 1.86743 16.4008 1.81224ZM15.642 5.01184C15.4324 6.65385 14.8018 9.08441 12.9887 11.3386C12.2208 12.3009 11.204 13.0343 10.0486 13.4594C9.10455 13.8105 8.03869 13.983 6.88299 13.9718C5.82428 13.9556 4.77187 13.8054 3.75092 13.5247C4.02926 13.1271 4.3669 12.6825 4.76799 12.2136C5.21574 12.3037 6.25159 12.4895 7.1768 12.4895C7.35774 12.4902 7.5386 12.4818 7.71869 12.4643C7.81764 12.4543 7.90852 12.4053 7.97137 12.3282C8.03421 12.2511 8.06386 12.1522 8.05379 12.0533C8.04372 11.9544 7.99475 11.8635 7.91767 11.8006C7.84059 11.7378 7.7417 11.7081 7.64276 11.7182C6.9314 11.7904 5.98039 11.6655 5.35676 11.5592C5.84626 11.0415 6.36682 10.554 6.91555 10.0995C7.33584 10.2244 8.35115 10.4771 9.68516 10.4771C10.0383 10.4771 10.3912 10.4593 10.7425 10.4235C10.7922 10.4194 10.8406 10.4054 10.8848 10.3824C10.929 10.3594 10.9682 10.3278 11.0001 10.2895C11.0319 10.2511 11.0558 10.2068 11.0704 10.1591C11.0849 10.1114 11.0898 10.0613 11.0847 10.0117C11.0797 9.96213 11.0648 9.91404 11.0409 9.87027C11.017 9.8265 10.9847 9.78792 10.9457 9.7568C10.9068 9.72568 10.862 9.70264 10.8141 9.68902C10.7661 9.6754 10.7159 9.67149 10.6664 9.6775C9.66304 9.77769 8.65018 9.72243 7.66364 9.51367C8.10046 9.19069 8.56933 8.87583 9.07186 8.57609C9.57438 8.27634 10.0562 7.97608 10.5158 7.67651C10.9828 7.7481 11.4542 7.7866 11.9266 7.79172C12.1858 7.79481 12.4447 7.77439 12.7002 7.73072C12.7488 7.72183 12.7952 7.70342 12.8366 7.67656C12.8781 7.64969 12.9139 7.6149 12.9418 7.57418C12.9698 7.53346 12.9895 7.48761 12.9997 7.43927C13.0099 7.39093 13.0104 7.34106 13.0013 7.2925C12.9921 7.24395 12.9735 7.19768 12.9464 7.15635C12.9194 7.11503 12.8844 7.07945 12.8435 7.05168C12.8027 7.02391 12.7567 7.00448 12.7083 6.99452C12.66 6.98456 12.6101 6.98426 12.5616 6.99363C12.246 7.05298 11.8441 7.05038 11.4788 7.02675C12.1249 6.57524 12.719 6.12629 13.2556 5.6828C13.2939 5.65153 13.3256 5.613 13.3489 5.56943C13.3722 5.52586 13.3867 5.47811 13.3915 5.42893C13.3964 5.37974 13.3914 5.3301 13.377 5.28283C13.3625 5.23557 13.3389 5.19163 13.3074 5.15354C13.2759 5.11544 13.2372 5.08395 13.1935 5.06086C13.1498 5.03777 13.102 5.02355 13.0528 5.019C13.0036 5.01446 12.954 5.01969 12.9068 5.03439C12.8596 5.04909 12.8158 5.07297 12.7779 5.10465C12.2252 5.56131 11.6113 6.02344 10.936 6.49104C10.9872 6.29533 11.0582 6.10533 11.1479 5.92397C11.1958 5.83682 11.2072 5.73419 11.1794 5.63867C11.1517 5.54315 11.0872 5.46256 11 5.41463C10.9129 5.36669 10.8102 5.35534 10.7147 5.38307C10.6192 5.4108 10.5386 5.47534 10.4907 5.56249C10.4759 5.58918 10.1519 6.18553 10.0712 7.07087C9.63058 7.35737 9.16939 7.64439 8.68763 7.93192C8.18015 8.23461 7.70576 8.55218 7.26247 8.87783C7.39153 7.87908 7.70656 6.89245 7.71061 6.87994C7.7393 6.78581 7.72985 6.68418 7.6843 6.59696C7.63874 6.50974 7.56073 6.44392 7.46708 6.4137C7.37344 6.38347 7.27167 6.39127 7.18371 6.4354C7.09576 6.47953 7.02868 6.55646 6.99694 6.6496C6.97545 6.71615 6.49276 8.22565 6.46003 9.50333C5.92751 9.94286 5.42028 10.4122 4.94079 10.909C4.9604 10.4471 5.04783 9.99055 5.20028 9.55406C5.23556 9.46169 5.23294 9.35912 5.19298 9.26867C5.15302 9.17823 5.07895 9.10722 4.9869 9.07111C4.89484 9.03501 4.79225 9.03672 4.70145 9.07587C4.61065 9.11503 4.539 9.18847 4.50207 9.2802C4.48284 9.32913 4.05383 10.4418 4.22933 11.6898C3.86856 12.1094 3.5556 12.5114 3.28855 12.8808C3.1911 12.4624 3.13342 12.0358 3.11628 11.6066C3.05712 10.0822 3.51003 8.72216 4.46238 7.56429C6.45184 5.14554 8.97328 4.58156 11.4118 4.03615C12.9759 3.68631 14.4644 3.35338 15.7242 2.55319C15.7751 3.37349 15.7476 4.19677 15.642 5.01184Z" fill="#001F2B" fill-opacity="0.52" />
                                    </svg>

                                    </span>Private Garden
                                </div>
                                <div className='col-span-2 flex '>
                                    <span className='mr-2'><svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.7963 9.20314C8.05621 9.20314 8.26691 8.93977 8.26691 8.61488C8.26691 8.28999 8.05621 8.02661 7.7963 8.02661C7.53638 8.02661 7.32568 8.28999 7.32568 8.61488C7.32568 8.93977 7.53638 9.20314 7.7963 9.20314Z" fill="white" />
                                        <path d="M7.79641 9.39191C7.4537 9.39191 7.1748 9.0433 7.1748 8.61472C7.1748 8.18651 7.4537 7.83789 7.79641 7.83789C8.13913 7.83789 8.41802 8.1865 8.41802 8.61472C8.41802 9.0433 8.13913 9.39191 7.79641 9.39191ZM7.79641 8.21525C7.62012 8.21525 7.47669 8.39435 7.47669 8.61472C7.47669 8.83509 7.62012 9.01456 7.79641 9.01456C7.97271 9.01456 8.11614 8.83509 8.11614 8.61472C8.11614 8.39435 7.97271 8.21525 7.79641 8.21525Z" fill="#001F2B" />
                                        <path d="M7.2718 6.79204C7.48663 6.79204 7.66078 6.57435 7.66078 6.30581C7.66078 6.03727 7.48663 5.81958 7.2718 5.81958C7.05697 5.81958 6.88281 6.03727 6.88281 6.30581C6.88281 6.57435 7.05697 6.79204 7.2718 6.79204Z" fill="white" />
                                        <path d="M7.27188 6.98073C6.97412 6.98073 6.73193 6.67781 6.73193 6.30561C6.73193 5.93341 6.97412 5.63086 7.27188 5.63086C7.56964 5.63086 7.81183 5.93341 7.81183 6.30561C7.81183 6.67781 7.56964 6.98073 7.27188 6.98073ZM7.27188 6.00822C7.14054 6.00822 7.03382 6.14162 7.03382 6.30561C7.03382 6.46997 7.14054 6.60337 7.27188 6.60337C7.40322 6.60337 7.50994 6.46997 7.50994 6.30561C7.50994 6.14162 7.40322 6.00822 7.27188 6.00822Z" fill="#001F2B" />
                                        <path d="M6.34992 8.2542C6.56475 8.2542 6.73891 8.03651 6.73891 7.76797C6.73891 7.49943 6.56475 7.28174 6.34992 7.28174C6.13509 7.28174 5.96094 7.49943 5.96094 7.76797C5.96094 8.03651 6.13509 8.2542 6.34992 8.2542Z" fill="white" />
                                        <path d="M6.35001 8.44288C6.05225 8.44288 5.81006 8.13997 5.81006 7.76777C5.81006 7.39557 6.05225 7.09302 6.35001 7.09302C6.64762 7.09302 6.88981 7.39557 6.88981 7.76777C6.88981 8.13997 6.64762 8.44288 6.35001 8.44288ZM6.35001 7.47038C6.21867 7.47038 6.11195 7.60378 6.11195 7.76777C6.11195 7.93212 6.21867 8.06553 6.35001 8.06553C6.4812 8.06553 6.58792 7.93212 6.58792 7.76777C6.58792 7.60378 6.4812 7.47038 6.35001 7.47038Z" fill="#001F2B" />
                                        <path d="M2.57397 8.83843C1.59203 7.79717 1.58594 5.79578 1.58594 5.79578C1.58594 5.79578 1.59953 5.79438 1.62876 5.78853C2.80352 5.60254 3.94008 6.46559 4.33241 7.86066C4.4985 8.44737 4.77041 9.01466 5.13661 9.56092C5.13661 9.56092 3.55347 9.87709 2.57397 8.83843Z" fill="white" />
                                        <path d="M4.5689 9.79634C3.99535 9.79634 3.12109 9.66589 2.47648 8.98229C1.45319 7.89739 1.43535 5.88161 1.43506 5.79649C1.43476 5.69846 1.49476 5.61628 1.57288 5.60781L1.60472 5.60228C2.85546 5.40328 4.06139 6.32825 4.47486 7.79789C4.6317 8.35176 4.8932 8.90417 5.25228 9.43962C5.28721 9.49158 5.29694 9.56307 5.27793 9.62682C5.25891 9.69058 5.2141 9.73664 5.16044 9.74733C5.13553 9.75212 4.90322 9.79634 4.5689 9.79634ZM2.67165 8.69485C3.35295 9.41677 4.36696 9.44146 4.84514 9.40645C4.55195 8.92222 4.33202 8.42473 4.19022 7.92355C3.83409 6.6577 2.81537 5.8455 1.74343 5.96306C1.77085 6.45244 1.9156 7.89296 2.67165 8.69485Z" fill="#001F2B" />
                                        <path d="M3.24484 8.03889C3.20003 8.03889 3.15566 8.0142 3.12589 7.96666C3.11321 7.94639 1.83712 5.9262 0.779041 5.46592C0.700327 5.43165 0.658758 5.32404 0.686176 5.22565C0.713593 5.12726 0.799678 5.07603 0.878393 5.1092C2.0202 5.60633 3.30911 7.64716 3.3635 7.73376C3.41495 7.81594 3.40345 7.93423 3.33786 7.99872C3.31014 8.02562 3.27742 8.03889 3.24484 8.03889Z" fill="#001F2B" />
                                        <path d="M3.28238 7.22596C3.27825 7.22596 3.27413 7.22559 3.27 7.22522L2.61434 7.15889C2.53135 7.15078 2.46944 7.05976 2.47607 6.95584C2.483 6.85192 2.55715 6.77748 2.63881 6.783L3.29447 6.84934C3.37746 6.85744 3.43937 6.94847 3.43274 7.05239C3.42625 7.15115 3.36021 7.22596 3.28238 7.22596Z" fill="#001F2B" />
                                        <path d="M2.26677 7.48126C2.26309 7.48126 2.25955 7.48126 2.25587 7.48089C2.17273 7.47352 2.11008 7.38286 2.11613 7.27894L2.1574 6.55813C2.1633 6.45421 2.23597 6.37682 2.31866 6.38345C2.4018 6.39082 2.46445 6.48148 2.4584 6.5854L2.41713 7.30621C2.41153 7.40534 2.34519 7.48126 2.26677 7.48126Z" fill="#001F2B" />
                                        <path d="M14.4574 6.40303C13.298 9.49273 11.1478 13.2503 10.3993 12.8114C9.65088 12.3726 10.5876 7.90361 11.747 4.8139C12.9064 1.7242 13.8494 1.1838 14.5978 1.62263C15.3463 2.06145 15.6167 3.31332 14.4574 6.40303Z" fill="white" />
                                        <path d="M10.5291 13.0349C10.4594 13.0349 10.3947 13.0172 10.3352 12.9826C9.35564 12.4081 10.6447 7.30711 11.6104 4.73415C12.167 3.25051 12.6978 2.27358 13.2331 1.74697C13.7115 1.27564 14.1922 1.17688 14.6619 1.45179C15.6658 2.04068 15.6435 3.68646 14.594 6.48312C14.0091 8.04193 13.1867 9.74705 12.3941 11.045C11.5865 12.3676 10.9607 13.0349 10.5291 13.0349ZM14.1403 1.6788C13.9058 1.6788 13.6674 1.79967 13.4198 2.04326C12.9292 2.52601 12.4124 3.48525 11.8836 4.89408C10.5495 8.44951 9.94246 12.3355 10.4634 12.6406C10.6577 12.7582 11.2191 12.3473 12.1541 10.8161C12.9229 9.55726 13.753 7.83593 14.3207 6.32318C15.2706 3.79186 15.3422 2.26768 14.5337 1.79377C14.4031 1.71712 14.2724 1.6788 14.1403 1.6788Z" fill="#001F2B" />
                                        <path d="M13.8138 6.14155C12.6544 9.23126 10.5042 12.9888 9.75577 12.55C9.00732 12.1111 9.94405 7.64214 11.1034 4.55243C12.2628 1.46272 13.2058 0.922329 13.9543 1.36115C14.7027 1.79998 14.9732 3.05185 13.8138 6.14155Z" fill="white" />
                                        <path d="M9.88558 12.7733C9.81586 12.7733 9.75115 12.7556 9.6916 12.721C8.71209 12.1465 10.0011 7.04548 10.9668 4.47251C11.5234 2.98887 12.0542 2.01194 12.5896 1.48534C13.0684 1.01401 13.5489 0.915613 14.0184 1.19016C15.0222 1.77904 15 3.42483 13.9504 6.22148C13.3655 7.78029 12.5432 9.48541 11.7506 10.7833C10.9429 12.1059 10.3172 12.7733 9.88558 12.7733ZM13.4969 1.41716C13.2624 1.41716 13.024 1.5384 12.7762 1.78199C12.2856 2.26438 11.7688 3.22362 11.2401 4.63245C9.90592 8.18787 9.29891 12.0739 9.81984 12.379C10.0141 12.4969 10.5756 12.0856 11.5106 10.5545C12.2793 9.29562 13.1095 7.5743 13.6772 6.06154C14.627 3.53022 14.6987 2.00605 13.8902 1.53214C13.7597 1.45549 13.6288 1.41716 13.4969 1.41716Z" fill="#001F2B" />
                                        <path d="M11.4419 16.6706V17.2215C11.4419 18.0781 10.8864 18.7725 10.2011 18.7725H6.48489C5.7996 18.7725 5.24414 18.0781 5.24414 17.2215V16.6706C5.24414 16.1989 5.55205 15.814 5.92641 15.814H10.7566C11.137 15.814 11.4419 16.1989 11.4419 16.6706Z" fill="white" />
                                        <path d="M10.2012 18.9614H6.48492C5.71752 18.9614 5.09326 18.1809 5.09326 17.2216V16.6707C5.09326 16.0944 5.46708 15.6252 5.92655 15.6252H10.7567C11.2178 15.6252 11.593 16.0944 11.593 16.6707V17.2216C11.593 18.1809 10.9686 18.9614 10.2012 18.9614ZM5.92655 16.0026C5.6335 16.0026 5.39515 16.3022 5.39515 16.6707V17.2216C5.39515 17.973 5.88395 18.584 6.48492 18.584H10.2012C10.8021 18.584 11.2911 17.973 11.2911 17.2216V16.6707C11.2911 16.3022 11.0514 16.0026 10.7567 16.0026H5.92655Z" fill="#001F2B" />
                                        <path d="M15.0287 9.63697V10.6815C15.0287 14.3338 12.6612 17.2933 9.73932 17.2933H6.94836C4.02929 17.2933 1.65894 14.3338 1.65894 10.6815V9.63697C1.65894 9.20176 1.94303 8.8501 2.28843 8.8501H14.3992C14.7474 8.8501 15.0287 9.20176 15.0287 9.63697Z" fill="white" />
                                        <path d="M9.73948 17.4818H6.9485C3.94865 17.4818 1.50806 14.4312 1.50806 10.6816V9.63683C1.50806 9.0988 1.85815 8.66138 2.28857 8.66138H14.3994C14.8297 8.66138 15.1798 9.0988 15.1798 9.63683V10.6816C15.1798 14.4312 12.7393 17.4818 9.73948 17.4818ZM2.28857 9.03874C2.02471 9.03874 1.80994 9.30701 1.80994 9.63683V10.6816C1.80994 14.223 4.11507 17.1044 6.9485 17.1044H9.73948C12.5728 17.1044 14.8779 14.223 14.8779 10.6816V9.63683C14.8779 9.30701 14.6633 9.03874 14.3994 9.03874H2.28857Z" fill="#001F2B" />
                                        <path d="M10.5363 16.6706V17.2215C10.5363 18.0781 9.98089 18.7725 9.2956 18.7725H5.57937C4.89408 18.7725 4.33862 18.0781 4.33862 17.2215V16.6706C4.33862 16.1989 4.64654 15.814 5.02089 15.814H9.85108C10.2314 15.814 10.5363 16.1989 10.5363 16.6706Z" fill="white" />
                                        <path d="M9.29565 18.9614H5.5794C4.81201 18.9614 4.18774 18.1809 4.18774 17.2216V16.6707C4.18774 16.0944 4.56156 15.6252 5.02103 15.6252H9.85122C10.3123 15.6252 10.6874 16.0944 10.6874 16.6707V17.2216C10.6874 18.1809 10.063 18.9614 9.29565 18.9614ZM5.02103 16.0026C4.72799 16.0026 4.48963 16.3022 4.48963 16.6707V17.2216C4.48963 17.973 4.97843 18.584 5.5794 18.584H9.29565C9.89662 18.584 10.3856 17.973 10.3856 17.2216V16.6707C10.3856 16.3022 10.1459 16.0026 9.85122 16.0026H5.02103Z" fill="#001F2B" />
                                        <path d="M14.1228 9.63705V10.6823C14.1228 14.3352 11.756 17.2937 8.83369 17.2937H6.04124C3.12502 17.2937 0.752197 14.3352 0.752197 10.6823V9.63705C0.752197 9.20311 1.03597 8.84839 1.38313 8.84839H13.4948C13.842 8.84839 14.1228 9.20311 14.1228 9.63705Z" fill="white" />
                                        <path d="M8.83378 17.4825H6.04132C3.04177 17.4825 0.601318 14.4319 0.601318 10.6823V9.63721C0.601318 9.09844 0.951996 8.65991 1.38316 8.65991H13.4949C13.9244 8.65991 14.2738 9.09844 14.2738 9.63721V10.6823C14.2738 14.4319 11.8333 17.4825 8.83378 17.4825ZM1.38316 9.03727C1.11857 9.03727 0.903205 9.30629 0.903205 9.63721V10.6823C0.903205 14.2237 3.20819 17.1052 6.04132 17.1052H8.83378C11.6669 17.1052 13.9719 14.2237 13.9719 10.6823V9.63721C13.9719 9.30629 13.7579 9.03727 13.4949 9.03727H1.38316Z" fill="#001F2B" />
                                        <path d="M2.74061 13.6807C2.58375 13.4116 2.4474 13.1227 2.33447 12.8176L2.74061 13.6807Z" fill="white" />
                                        <path d="M2.74081 13.8694C2.69423 13.8694 2.64824 13.8425 2.61861 13.792C2.45528 13.5115 2.31363 13.2105 2.19762 12.8969C2.16254 12.8022 2.19556 12.6901 2.27117 12.6463C2.34724 12.6028 2.43671 12.6437 2.4715 12.7384C2.5794 13.0295 2.71089 13.3092 2.86271 13.5694C2.9118 13.6538 2.89691 13.7717 2.82955 13.8333C2.80272 13.8576 2.77162 13.8694 2.74081 13.8694Z" fill="#001F2B" />
                                        <path d="M6.04139 15.7843C4.92318 15.7843 3.90857 15.2193 3.17065 14.3057L6.04139 15.7843Z" fill="white" />
                                        <path d="M6.04139 15.9732C4.92008 15.9732 3.86288 15.4285 3.06439 14.4398C3.00528 14.3664 3.00483 14.247 3.0635 14.173C3.12202 14.0993 3.21754 14.0978 3.27694 14.1715C4.01839 15.0898 5.00026 15.5958 6.04139 15.5958C6.12482 15.5958 6.19233 15.6802 6.19233 15.7845C6.19233 15.8888 6.12482 15.9732 6.04139 15.9732Z" fill="#001F2B" />
                                        <path d="M6.63617 4.67673L6.28207 5.89303C6.21703 6.11644 6.02357 6.22922 5.84485 6.14792L4.85195 5.69626C4.42074 5.50011 4.15159 4.9239 4.27911 4.37553C4.35191 4.05928 4.52707 3.82173 4.73989 3.69766C4.93824 3.57909 5.17554 3.55853 5.3968 3.65918L6.43227 4.1302C6.61099 4.2115 6.70121 4.45333 6.63617 4.67673Z" fill="white" />
                                        <path d="M5.96368 6.36294C5.90648 6.36294 5.84885 6.35041 5.79313 6.32498L4.80035 5.87355C4.27957 5.6366 3.98697 4.95522 4.13422 4.32285C4.21515 3.97055 4.41267 3.68016 4.67609 3.52649C4.91429 3.3835 5.19643 3.36729 5.44835 3.4819L6.48387 3.95286C6.73888 4.06894 6.87066 4.42271 6.77794 4.74111L6.42388 5.95757C6.37862 6.11309 6.28826 6.23654 6.16975 6.30582C6.1043 6.34378 6.03428 6.36294 5.96368 6.36294ZM5.1043 3.78371C5.00112 3.78371 4.89852 3.81172 4.80507 3.86773C4.61948 3.97607 4.48122 4.17986 4.42417 4.4275C4.32276 4.86309 4.53797 5.35247 4.90368 5.51904L5.89646 5.97047C5.9451 5.99258 5.99669 5.99 6.04224 5.96384C6.08779 5.93731 6.12258 5.88903 6.14027 5.82859L6.49434 4.61213C6.53075 4.48683 6.48077 4.35306 6.38054 4.30737L5.34516 3.83641C5.26748 3.80103 5.18567 3.78371 5.1043 3.78371Z" fill="#001F2B" />
                                        <path d="M7.54674 4.55213L7.99791 5.71714C8.08078 5.93112 8.28241 6.01874 8.4536 5.91516L9.40463 5.33969C9.81766 5.08976 10.0386 4.48234 9.86711 3.95302C9.76897 3.64766 9.5754 3.43359 9.35359 3.3372C9.14663 3.24444 8.90889 3.25414 8.69695 3.38238L7.70516 3.98252C7.53397 4.0861 7.46387 4.33814 7.54674 4.55213Z" fill="white" />
                                        <path d="M8.30573 6.14623C8.1228 6.14623 7.9468 6.01872 7.86189 5.79946L7.41068 4.63421C7.29069 4.32393 7.39108 3.96315 7.63916 3.81243L8.63105 3.21249C8.87177 3.06729 9.15375 3.04702 9.40434 3.15942C9.67734 3.27808 9.89756 3.54194 10.0071 3.88245C10.2048 4.49307 9.96891 5.20762 9.47023 5.50944L8.51932 6.08505C8.45048 6.1267 8.37751 6.14623 8.30573 6.14623ZM7.6825 4.46986L8.13371 5.6351C8.18014 5.7545 8.29172 5.80277 8.38783 5.74528L9.33875 5.16967C9.68884 4.95777 9.86307 4.44369 9.72716 4.02359C9.65007 3.78405 9.49573 3.59869 9.30381 3.51541C9.12796 3.43654 8.93132 3.44981 8.76254 3.55226L7.77079 4.1522C7.67498 4.21042 7.63606 4.35009 7.6825 4.46986Z" fill="#001F2B" />
                                    </svg>


                                    </span>Exclusive Ayurvedic Services
                                </div>
                                <div className='col-span-1 flex '>
                                    <span className='mr-2'><svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.10302 11.5884C2.15549 11.5884 1.38477 12.4037 1.38477 13.4058C1.38477 13.93 1.59135 15.149 3.50432 15.149H3.52827C3.70091 15.149 3.84064 15.0083 3.84064 14.8351C3.84064 14.6618 3.70091 14.5212 3.52827 14.5212H3.50432C2.51243 14.5212 2.00951 14.146 2.00951 13.4058C2.00951 12.7498 2.49994 12.2162 3.10302 12.2162C3.36292 12.2162 3.61865 12.3325 3.82315 12.5434C4.07763 12.8061 4.21799 13.1771 4.20778 13.5617C4.2032 13.735 4.3394 13.8792 4.51183 13.8836C4.68488 13.894 4.82774 13.7515 4.83232 13.578C4.84669 13.0252 4.64198 12.4884 4.27067 12.1053C3.94747 11.7721 3.53285 11.5884 3.10302 11.5884Z" fill="#001F2B" fill-opacity="0.7" />
                                        <path d="M20.8595 10.0188C20.8156 9.89278 20.6975 9.80845 20.5646 9.80845H12.0889C12.2722 9.35309 12.3463 8.81404 12.3463 8.40221C12.3463 6.72624 11.1809 5.51001 9.57556 5.51001C8.96914 5.51001 8.37292 5.71718 7.8875 6.09469C7.86792 6.10368 7.84897 6.11477 7.83127 6.12796L1.45282 10.8558C1.42471 10.8767 1.40243 10.902 1.38348 10.9293C0.688342 11.5053 0.238525 12.4016 0.238525 13.4094C0.238525 15.1051 1.5078 16.4914 3.08924 16.5521C3.12256 16.5644 3.15859 16.5711 3.19607 16.5714L12.8621 16.6055C12.8621 16.6055 12.8628 16.6055 12.8632 16.6055C12.934 16.6055 13.0025 16.5814 13.0579 16.537L20.7593 10.368C20.8633 10.2845 20.9032 10.1445 20.8595 10.0188ZM8.1374 6.68104C8.16634 6.66932 8.19362 6.65299 8.2182 6.6327C8.60929 6.30897 9.07868 6.13779 9.57556 6.13779C10.819 6.13779 11.7216 7.09014 11.7216 8.40221C11.7216 8.8967 11.5968 9.56612 11.3269 9.90701L6.12467 13.8667C6.14529 13.7162 6.1557 13.5636 6.1557 13.4092C6.1557 11.7104 4.88205 10.3253 3.29707 10.2686L8.1374 6.68104ZM12.7543 15.9771L3.3004 15.9438C3.26813 15.9323 3.23335 15.9262 3.19711 15.9262C1.91014 15.9262 0.863063 14.797 0.863063 13.4094C0.863063 12.0208 1.91014 10.8912 3.19711 10.8912C4.48409 10.8912 5.53096 12.0208 5.53096 13.4094C5.53096 13.7848 5.45536 14.1477 5.30626 14.4879C5.29126 14.5225 5.28272 14.5581 5.28043 14.5936C5.25711 14.6836 5.27356 14.7828 5.33354 14.8625C5.43766 15.0008 5.63362 15.0278 5.77127 14.9232L11.6662 10.4362H19.6717L12.7543 15.9771Z" fill="#001F2B" fill-opacity="0.7" />
                                    </svg>


                                    </span>Comprehensive Wellness Programs
                                </div>




                            </div>
                        </div>
                        <div className='cols-span-1 flex justify-end'>
                        <div className='relative md:flex w-[406px] h-[368px] overflow-hidden '>
                                <img className='w-[300px] h-[300px]' src="/Lotus/vill1.png" alt="" />
                                <img className='w-[314px] h-[279px] mt-[150px] ml-[-150px]' src="/Lotus/vill2.png"  alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>




            {/* Subscribe to our newsletter */}
            <div className='bg-[#F9F9F9]'>
            <section className="py-20 lg:mx-20 ">
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
            </div>


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
                                    <a href="https://web.facebook.com/riverviewvillas/?_rdc=1&_rdr " className="text-gray-400 hover:text-white"><FaFacebookF /></a>
                                    <a href="https://www.instagram.com/river_view_villas/?hl=en " className="text-gray-400 hover:text-white"><FaInstagram /></a>
                                    <a href="https://www.tiktok.com/@river.view.villas?_t=8n6DFJerj6X&_r=1" className="text-gray-400 hover:text-white"><FaTiktok /></a>
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
