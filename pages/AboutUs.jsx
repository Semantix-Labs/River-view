import React from 'react'
import Link from 'next/link';
import { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { FaTiktok } from "react-icons/fa";
import Image from 'next/image';


export default function AboutUs() {
    const [isOpen, setIsOpen] = useState(false);
    const experts = [
        {
            name: "Lorem Ipsum",
            qualification: "Lorem ipsum dolor sit amet, itsdp consectetur adipiscing elit, sed do",
            imageUrl: "/Expert/3.png",
        },
        {
            name: "Lorem Ipsum",
            qualification: "Lorem ipsum dolor sit amet, itsdp consectetur adipiscing elit, sed do",
            imageUrl: "/Expert/7.png",
        },
        {
            name: "Lorem Ipsum",
            qualification: "Lorem ipsum dolor sit amet, itsdp consectetur adipiscing elit, sed do",
            imageUrl: "/Expert/5.png",
        },
        {
            name: "Lorem Ipsum",
            qualification: "Lorem ipsum dolor sit amet, itsdp consectetur adipiscing elit, sed do",
            imageUrl: "/Expert/6.png",
        },
    ];

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div>
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
                                    <span className="text-[#001F2B8F] border-b-2 border-[#001F2B8F]   hover:border-b-2 hover:border-customGold ml-4 cursor-pointer">About Us</span>
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
                    <Image width={2560} height={1080} className='pb-5 w-screen' src="/AboutUs.png" alt="" />
                    <div class="absolute inset-0  opacity-60 rounded-md"></div>
                    <div class="absolute inset-0 flex items-center justify-center">
                        <h2 className='text-3xl md:text-7xl lg:text-8xl font-bold justify-center text-center text-white'>About Us

                        </h2>
                    </div>
                </div>
            </section>


            {/* History and Origins */}
            <section className='bg-[#FFFFFF]'>
                <div className='mt-5 px-5 lg:mt-20   '>
                    <div className='lg:px-20 2xl:px-72 grid grid-cols-1 mx-auto md:grid-cols-2 gap-8 '>
                        <div className='cols-span-1 mx-auto   my-auto'>
                            <div className='mb-4  md:justify-start  flex justify-center'>
                                <Image width={100} height={100} className='text-center items-cente flex justify-center' src="/home3.png" alt="" />
                            </div>
                            <h2 className="text-3xl md:text-5xl text-center md:text-start font-extrabold text-gray-800 mb-6">History and Origins</h2>
                            <p className="text-lg text-gray-600 text-justify md:text-start max-w-xl ">Since 2005, River View Villas has been dedicated to promoting Ayurvedic wellness. Our history is deeply rooted in the traditions of Ayurveda, aiming to spread inner peace and balance through our holistic practices.</p>

                        </div>
                        <div className=' grid grid-cols-1 md:grid-cols-2 gap-4 '>
                            <div className='cols-span-1 rounded-t-full relative overflow-hidden h-[431px]'>
                                <Image layout='fill' objectFit='cover' className='w-full h-full object-cover' src="/changes2.jpg" alt="" />
                            </div>
                            <div className='cols-span-1 md:rounded-tr-full relative md:mt-[168px] h-[263px] overflow-hidden'>
                                <Image layout='fill' objectFit='cover' className='w-full h-full object-cover  ' src="/changes3.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* The Wisdom of Ayurveda */}
            <section className='mt-5 bg-[#F9F9F9]  lg:mt-20'>
                <div className='lg:px-20  px-5 2xl:px-72 grid grid-cols-1  w-screen md:grid-cols-2 gap-8 '>
                    <div className='cols-span-1 mx-auto'>
                        <div className='overflow-hidden relative rounded-tr-[100px] rounded-bl-[80px]'>
                            <Image width={500} height={500} className='w-full h-full object-cover' src="/changes1.jpg" alt="" />
                        </div>
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
            <section className='bg-[#FFFFFF]'>
                <div className="py-16 px-5 lg:px-20 ">
                    <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className=" text-3xl md:text-5xl  font-semibold text-gray-900 py-5 tracking-wide uppercase">Our Ayurvedic Experts</h2>
                        <p className=" mt-2 justify-center mx-auto   max-w-3xl ">Our team of specially trained Ayurvedic practitioners brings years of expertise and experience. Each professional is dedicated to providing personalized care and guidance on your wellness journey.</p>
                    </div>

                    <div className="mt-10 max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2 justify-center sm:grid-cols-1">

                            <div className="text-justify px-5 2xl:px-20 mx-auto ">
                                <div className="relative mx-auto flex justify-center mt-10 rounded-lg ">
                                    <Image width={500} height={500} className='rounded-lg' src="/Expert/3.png" alt="" />
                                </div>
                                <h3 className="mt-4 text-xl font-semibold text-gray-900">Dr.Nalaka Samadhi</h3>
                                <p className="mt-2 text-base text-justify ">Pulse diagnosis specialist, Panchakarma, yoga, and Ayurvedic expert.</p>
                            </div>
                            <div className="text-justify px-5 2xl:px-20 mx-auto ">
                                <div className="relative flex justify-center  mx-auto rounded-lg ">
                                    <Image width={500} height={500} className='rounded-lg' src="/Expert/7.png" alt="" />
                                </div>
                                <h3 className="mt-4 text-xl font-semibold text-gray-900">Dr.Miss Kumudinee Liyanaarachchi</h3>
                                <p className="mt-2  text-base ">Ayurvedic counselor with postgraduate diplomas and MA in Buddhist Ayurvedic counseling.</p>
                            </div>
                            <div className="text-justify px-5 2xl:px-20 mx-auto ">
                                <div className="relative flex justify-center  mx-auto mt-10 rounded-lg ">
                                    <Image width={500} height={500} className='rounded-lg' src="/Expert/4.png" alt="" />
                                </div>
                                <h3 className="mt-4 text-xl font-semibold text-gray-900">A D Dilki Shanika</h3>
                                <p className="mt-2 text-base ">Expert in Ayurveda, massage therapy, spa, and aromatherapy with 10 years experience.</p>
                            </div>
                            <div className="text-justify px-5 2xl:px-20 mx-auto ">
                                <div className="relative flex justify-center rounded-lg  mx-auto  ">
                                    <Image width={500} height={500} className='rounded-lg' src="/Expert/6.png" alt="" />
                                </div>
                                <h3 className="mt-4 text-xl font-semibold text-gray-900">N D Malith Dhilshan</h3>
                                <p className="mt-2 text-base ">Specialist in Panchakarma, massage therapy, spa, and aromatherapy with 10 years experience.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>



            {/* Commitment to Sustainability */}
            <section className='bg-[#F9F9F9]'>
                <div className="px-5 py-20 lg:px-20">
                    <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className=" text-3xl md:text-5xl mx-auto font-semibold text-gray-900 py-5 tracking-wide uppercase">Commitment to Sustainability</h2>
                        <p className=" mt-2 justify-center mx-auto text-gray-600 max-w-3xl ">We are committed to conserving the environment and maintaining ecological balance. Our practices include the use of locally sourced organic materials, energy-saving programs, and support for the local community. Our efforts have been recognized with various sustainability awards.</p>            </div>
                </div>
                <div className='md:flex grid grid-cols-2 justify-center px-5 lg:px-20 gap-4 lg:gap-16'>
                    <Image width={500} height={500} className='max-w-2xl w-[97px] h-[97px]' src="/commitIcons/1.png" alt="" />
                    <Image width={500} height={500} className='max-w-2xl w-[97px] h-[84px]' src="/commitIcons/2.png" alt="" />


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
