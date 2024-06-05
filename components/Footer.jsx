// components/Footer.js
import React from 'react';
import { CiLocationOn } from "react-icons/ci";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";


const Footer = () => {
    return (
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

    );
};

export default Footer;
