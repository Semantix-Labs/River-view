import React from 'react'

import Link from 'next/link';
import { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { FaTiktok } from "react-icons/fa";

const images = [
    "/GalleryTreat/g1.png",
    "/GalleryTreat/g2.png",
    "/GalleryTreat/g3.png",
    "/GalleryTreat/g4.png",
    "/GalleryTreat/g5.png",
    "/GalleryTreat/g6.png",
    "/GalleryTreat/g7.png",
    "/GalleryTreat/g8.png",
    "/GalleryTreat/g9.png",
    "/GalleryNaturals/n1.jpg",
    "/GalleryNaturals/n2.jpg",
    "/GalleryNaturals/n3.jpg",
    "/GalleryNaturals/n4.jpg",
    "/GalleryNaturals/n5.jpg",
    "/GalleryNaturals/n6.jpg",
    "/Room/img/r1.jpg",
    "/Room/img/r2.jpg",
    "/Room/img/r3.jpg",
    "/Room/img/r4.jpg",
    "/Room/img/r5.jpg",
    "/Room/img/r6.jpg",


];


export default function Gallery() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const imagesPerSlide = 1;
    const scrollAmount = 2;
    const autoScrollDelay = 3000; // Time in milliseconds for auto-scroll
    const requestRef = useRef();
    const previousTimeRef = useRef();

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex >= images.length - imagesPerSlide ? 0 : prevIndex + scrollAmount));
    };

    const animate = (time) => {
        if (previousTimeRef.current != undefined) {
            const deltaTime = time - previousTimeRef.current;
            if (deltaTime >= autoScrollDelay) {
                nextSlide();
                previousTimeRef.current = time;
            }
        } else {
            previousTimeRef.current = time;
        }
        requestRef.current = requestAnimationFrame(animate);
    };

    useEffect(() => {
        requestRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(requestRef.current);
    }, []);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - imagesPerSlide : prevIndex - scrollAmount));
    };

    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

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

    return (
        <div className='min-h-screen '>
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
                                    <span className="text-[#001F2B8F]    hover:border-b-2 hover:border-customGold ml-4 cursor-pointer">Accommodation</span>
                                </Link>
                            </li>
                            <li className='my-auto'>
                                <Link href="/Treatment">
                                    <span className="text-[#001F2B8F]  hover:border-b-2 hover:border-customGold ml-4 cursor-pointer">Ayurvedic Treatments</span>
                                </Link>
                            </li>
                            <li className='my-auto'>
                                <Link href="/Gallery">
                                    <span className="text-[#001F2B8F] border-b-2 border-[#001F2B8F]   hover:border-b-2 hover:border-customGold ml-4 cursor-pointer">Gallery</span>
                                </Link>
                            </li>
                            {/* <li className='my-auto'>
                                <Link href="/ContactUs">
                                    <span className="text-[#001F2B8F]  hover:border-b-2 hover:border-customGold ml-4 cursor-pointer">Blog</span>
                                </Link>
                            </li> */}
                            <li className='my-auto'>
                                <Link href="/ContactUs">
                                    <button className="text-white  hover:border-b-2 hover:border-customGold ml-4 bg-[#001F2B] px-[17px]  py-[9px] rounded-lg cursor-pointer">Contact Us</button>
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>


            {/* image Section */}
            <section className='pt-20'>
                <div className='relative w-full pb-5 2xl:h-[700px] xl:h-[400px] lg:h-96 md:h-64 h-52 overflow-hidden '>
                    <img className='w-screen' src="/GalleryHead.png" alt="" />
                    <div class="absolute inset-0  opacity-60 rounded-md"></div>
                    <div class="absolute inset-0 flex items-center justify-center">
                        <h2 className='text-3xl md:text-7xl px-5 lg:text-8xl font-bold justify-center text-center text-white'>Experiences And Gallery

                        </h2>
                    </div>
                </div>
            </section>


            {/* Gallery Activity */}
            <section className='bg-[#FFFFFF]'>
                <div className="py-16 px-5 lg:px-20 ">
                    <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <div className="mt-10 bg-white lg:px-20   flex flex-col items-center justify-center ">
                            <div className="mb-2">
                                <img src="/home3.png" alt="" />
                            </div>
                        </div>
                        <h2 className=" text-3xl md:text-5xl  font-semibold  py-5 tracking-wide uppercase">Explore our Activities</h2>
                        <p className=" mt-2 justify-center mx-auto  max-w-3xl ">Enhance your stay with our unique experiences, including Ayurvedic cooking classes, herbal garden tours, and cultural excursions.</p>
                    </div>

                    <div className="mt-10 max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid gap-8 md:grid-cols-4 sm:grid-cols-1">

                            <div className="text-center ">
                                <div className="relative mx-auto mt-10 md:h-[150px] lg:h-[190px] xl:h-[300px] 2xl:h-[390px]  overflow-hidden rounded-lg ">
                                    <img className='w-full h-full object-cover' src="/Activity/5.jpg" alt="" layout="fill" objectFit="cover" />
                                </div>
                                <h3 className="mt-4 text-xl text-start pr-5 font-semibold ">Once-a-week boat safari dinner</h3>
                            </div>
                            <div className="text-center">
                                <div className="relative  mx-auto md:h-[150px] lg:h-[190px] xl:h-[300px] 2xl:h-[390px]  overflow-hidden rounded-lg ">
                                    <img className='w-full h-full object-cover' src="/Activity/2.png" alt="" layout="fill" objectFit="cover" />
                                </div>
                                <h3 className="mt-4 text-xl text-start pr-5 font-semibold ">Cooking demonstrations</h3>
                            </div>
                            <div className="text-center">
                                <div className="relative  mx-auto mt-10 md:h-[150px] lg:h-[190px] xl:h-[300px] 2xl:h-[390px]  overflow-hidden rounded-lg ">
                                    <img className='w-full h-full object-cover' src="/Activity/3.png" alt="" layout="fill" objectFit="cover" />
                                </div>
                                <h3 className="mt-4 text-xl text-start pr-5 font-semibold ">Manicure & Pedicure (additional charges apply)</h3>
                            </div>
                            <div className="text-center">
                                <div className="relative  mx-auto md:h-[150px] lg:h-[190px] xl:h-[300px] 2xl:h-[390px]  overflow-hidden rounded-lg ">
                                    <img className='w-full h-full object-cover' src="/Activity/4.png" alt="" layout="fill" objectFit="cover" />
                                </div>
                                <h3 className="mt-4 text-xl text-start pr-5 font-semibold ">Vegetables from our own plantation</h3>
                            </div>

                        </div>
                    </div>
                </div>
            </section>


            {/* Virtual Tour */}
            <div className='bg-[#F9F9F9]'>
                <section className="flex flex-col md:flex-row items-center lg:mx-20 justify-between p-6 ">

                    <div className="w-full p-6 flex justify-center">

                        <div className="relative">
                            <h2 className="text-4xl py-5 font-bold">Our Story  </h2>
                            <div className='relative xl:h-[600px] overflow-hidden  md:rounded-tr-[150px] lg:rounded-tr-[200px] lg:rounded-bl-[200px] md:rounded-bl-[150px]  row-span-3'>
                                <Image
                                    src="/Room/img/1.jpg"
                                    alt="Room 1"
                                    layout="responsive"
                                    width={100}
                                    height={100}
                                    className="md:rounded-tr-[150px] lg:rounded-tr-[200px] lg:rounded-bl-[200px] md:rounded-bl-[150px] row-span-3 "
                                />
                                <div class="absolute inset-0  opacity-60 rounded-md"></div>
                                <div class="absolute inset-0 flex items-center justify-center">
                                    <img src="/play.png" alt="" />
                                </div>
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <button data-modal-target="default-modal"
                                    data-modal-toggle="default-modal"
                                    type="button"
                                    onClick={toggleModal} className="w-52 h-52 mt-10  p-2 rounded-full shadow-lg"> </button>
                            </div>
                        </div>
                    </div>
                    {/* Main modal */}
                    {showModal && (
                        <div
                            id="default-modal"
                            tabIndex="-1"
                            aria-hidden="true"
                            className="fixed top-0 left-0 right-0 z-50 w-full h-screen bg-black bg-opacity-50 flex justify-center items-center"
                        >
                            <div className="relative w-full max-w-xl lg:max-w-5xl bg-white rounded-lg shadow dark:bg-gray-700">
                                {/* Modal content */}
                                <div className="relative">
                                    {/* Modal header */}
                                    <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                            Lets Go To Virtual Tour
                                        </h3>
                                        <button
                                            type="button"
                                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                            onClick={toggleModal}
                                        >
                                            <svg
                                                className="w-3 h-3"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 14 14"
                                            >
                                                <path
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                                />
                                            </svg>
                                            <span className="sr-only">Close modal</span>
                                        </button>
                                    </div>
                                    {/* Modal body */}
                                    <div className="p-6 space-y-6">

                                        <video class="w-screen h-auto max-w-full" controls>
                                            <source src="/docs/videos/flowbite.mp4" type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>

                                    </div>

                                </div>
                            </div>
                        </div>
                    )}
                </section>
            </div>


            <section id='rooms' className='bg-[#FFFFFF]'>
                <div className="lg:px-32 px-5 py-20 ">
                    <h2 className="text-3xl font-bold mb-8">Rooms</h2>
                    <div className="grid  grid-cols-1 md:grid-cols-12 overflow-hidden   gap-6">

                        <div className="relative grid-cols-1 md:grid-rows-4 col-span-6 space-y-4 md:col-span-7 group">
                            <div className='relative row-span-3'>
                                <Image
                                    src="/Room/img/1.jpg"
                                    alt="Room 1"
                                    layout="responsive"
                                    width={612}
                                    height={408}
                                    className="rounded-lg  w-[612px] h-[412px] row-span-3 "
                                />
                                <div class="absolute inset-0  opacity-60 rounded-md"></div>
                                <div class="absolute inset-0 flex items-center justify-center">
                                    <img src="/play.png" alt="" />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 row-span-1 gap-6">
                                <Image
                                    src="/Room/img/2.png"
                                    alt="Room 4"
                                    layout="responsive"
                                    width={444}
                                    height={274}
                                    className="rounded-lg w-[444px] h-[274px] row-span-1"
                                />
                                <Image
                                    src="/Room/img/3.png"
                                    alt="Room 5"
                                    layout="responsive"
                                    width={444}
                                    height={274}
                                    className="rounded-lg w-[444px] h-[274px] "
                                />
                            </div>

                        </div>

                        <div className='grid  md:grid-rows-4 col-span-6 space-y-6 md:col-span-5'>
                            <Image
                                src="/Room/img/5.png"
                                alt="Room 2"
                                layout="responsive"
                                width={444}
                                height={332}
                                className="rounded-lg  w-[444px] h-[350px] object-cover row-span-2"

                            />
                            <Image
                                src="/Room/4.png"
                                alt="Room 3"
                                layout="responsive"
                                width={444}
                                height={332}
                                className="rounded-lg  object-cover row-span-2 "
                            />

                        </div>

                    </div>
                </div>
            </section>


            <div className='bg-[#F9F9F9]'>
                <section className='grid gap-4 py-20 px-5'>
                    <div className="grid grid-cols-2 md:grid-cols-5 xl:h-[178px] 2xl:h-auto overflow-hidden gap-4">
                        <div>
                            <img
                                className="xl:h-[178px] 2xl:h-auto max-w-full rounded-lg"
                                src="/Room/img/r1.jpg"
                                alt=""
                            />

                        </div>
                        <div>
                            <img
                                className="xl:h-[178px] 2xl:h-auto max-w-full rounded-lg"
                                src="/Room/img/r2.jpg"
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                className="xl:h-[178px] 2xl:h-auto max-w-full rounded-lg"
                                src="/Room/img/r3.jpg"
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                className="xl:h-[178px] 2xl:h-auto max-w-full rounded-lg"
                                src="/Room/img/r4.jpg"
                                alt=""
                            />
                        </div>
                        <div className="col-span-1 ">
                            <img
                                className="xl:h-[178px] 2xl:h-auto max-w-full rounded-lg"
                                src="/Room/img/r7.jpg"
                                alt=""
                            />
                        </div>
                    </div>

                </section>
            </div>

            {/* Ayurvedic treatments */}
            <div className='bg-[#FFFFFF]'>
                <section className='mx-5 py-20 lg:px-20'>
                    <h2 className="text-3xl font-bold mb-8">Ayurvedic treatments</h2>
                    <div className='grid gap-4 space-y-2 grid-cols-1 md:grid-cols-12 overflow-hidden'>
                        <div className='md:grid-rows-12 grid-cols-1 mt-2 space-y-8 xl:space-y-10 rounded-lg  col-span-3'>
                            <div className='row-span-4 h- w-full overflow-hidden object-cover '>
                            <img className='w-full h-full object-cover rounded-lg' src="/GalleryTreat/g4.png" alt="" />
                            </div>
                            <div className='row-span-4'>
                            <img className=' w-full h--full object-cover rounded-lg' src="GalleryTreat/g8.jpg" alt="" />
                            </div>
                            <div className='row-span-4'>
                            <img className=' w-full h-full object-cover rounded-lg' src="/GalleryTreat/g7.png" alt="" />
                            </div>
                        </div>
                        <div className='grid grid-cols-1 hidden space-y-2 md:block  rounded-lg  col-span-6'>
                            <div className=' grid grid-cols-3 lg:gap-4 relative    justify-between'>
                                <div className='md:h-[66px] lg:h-[70px] xl:h-[110px] 2xl:h-[154px] overflow-hidden  md:gap-1 rounded-lg'>
                                    <img className=' col-span-1 object-cover rounded-lg' src="/GalleryTreat/g11.jpg" alt="" />
                                </div>
                                <div className='md:h-[66px] overflow-hidden lg:h-[70px] xl:h-[110px] 2xl:h-[154px]   md:gap-1 rounded-lg'>
                                    <img className=' col-span-1 object-cover rounded-lg' src="/GalleryTreat/g5.png" alt="" />
                                </div>
                                <div className='md:h-[66px] overflow-hidden lg:h-[70px] xl:h-[110px] 2xl:h-[154px]   md:gap-1 rounded-lg'>
                                    <img className=' object-cover   rounded-lg' src="/GalleryTreat/g3.png" alt="" />
                                </div>

                            </div>
                            <div className='relative'>
                                <img className=' w-screen rounded-xl object-cover' src="/GalleryTreat/g5.png" alt="" />
                                <div class="absolute inset-0  opacity-60 rounded-lg"></div>
                                <div class="absolute inset-0 flex items-center justify-center">
                                    <img src="/play.png" alt="" />
                                </div>
                            </div>
                            <div className=' grid grid-cols-3 lg:gap-4 relative    justify-between'>
                               
                                    <div className='md:h-[66px] lg:h-[70px] xl:h-[110px] 2xl:h-[154px] overflow-hidden  md:gap-1 rounded-lg'>
                                        <img className=' col-span-1 object-cover rounded-lg' src="/GalleryTreat/g1.png" alt="" />
                                    </div>
                                    <div className='md:h-[66px] overflow-hidden lg:h-[70px] xl:h-[110px] 2xl:h-[154px]   md:gap-1 rounded-lg'>
                                        <img className=' col-span-1 object-cover rounded-lg' src="/GalleryTreat/g4.png" alt="" />
                                    </div>
                                    <div className='md:h-[66px] overflow-hidden lg:h-[70px] xl:h-[110px] 2xl:h-[154px]   md:gap-1 rounded-lg'>
                                        <img className=' object-cover   rounded-lg' src="/GalleryTreat/g3.png" alt="" />
                                    </div>

                               
                            </div>
                        </div>
                        <div className='md:grid-rows-12 grid-cols-1 mt-2 space-y-8 xl:space-y-10 rounded-lg  col-span-3'>
                            <div className='row-span-4 object-cover overflow-hidden'>
                            <img className='w-full h-full object-cover rounded-lg' src="/GalleryTreat/g9.jpg" alt="" />
                            </div>
                            <div className='row-span-4'>
                            <img className=' w-full h--full object-cover overflow-hidden rounded-lg' src="GalleryTreat/g8.jpg" alt="" />
                            </div>
                            <div className='row-span-4'>
                            <img className=' w-full h-full object-cover overflow-hidden rounded-lg' src="/GalleryTreat/g7.png" alt="" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* Natural Environment */}
            <div className='bg-[#F9F9F9]'>
                <section className='mx-5 lg:px-20 py-20'>
                    <h2 className="text-3xl font-bold mb-8">Natural Environment</h2>
                    <div className='grid gap-4 grid-cols-1  max-h-[1280px] overflow-hidden md:grid-cols-12'>
                        <div className='row grid-cols-1 col-span-5'>
                            <img className='mb-4 xl:mb-8  w-full rounded-lg' src="/GalleryNaturals/n1.jpg" alt="" />
                            <img className='w-full rounded-lg ' src="/GalleryNaturals/n2.jpg" alt="" />

                        </div>
                        <div className=' grid-cols-1 hidden md:inline  overflow-hidden col-span-7'>
                            <div className='gap-4  grid grid-cols-2  md:h-[135px]   xl:h-[198px] 2xl:h-[457px] overflow-hidden rounded-lg  justify-between'>
                                <img className='rounded-lg   object-cover ' src="/GalleryNaturals/n3.jpg" alt="" />
                                <img className='rounded-lg object-cover  ' src="/GalleryNaturals/n4.jpg" alt="" />
                            </div>
                            <div className='relative col-span-1'>
                                <img className=' w-full mt-4 xl:mt-8  rounded-lg object-cover' src="/GalleryNaturals/n5.jpg" alt="" />
                                <div class="absolute inset-0  opacity-60 rounded-md"></div>
                                <div class="absolute inset-0 flex items-center justify-center">
                                    <img src="/play.png" alt="" />
                                </div>
                            </div>

                        </div>

                    </div>
                </section>
            </div>


            {/* GalleryCarousel */}
            <section className='py-20 bg-[#FFFFFF]'>
                <div className="relative w-full   overflow-hidden">
                    <div className="overflow-hidden relative">
                        <div
                            className="flex transition-transform duration-300 ease-in-out w-full h-100"
                            style={{ transform: `translateX(-${(currentIndex / images.length) * 100}%)` }}
                        >
                            {images.map((src, index) => (
                                <img
                                    key={index}
                                    src={src}
                                    alt={`Slide ${index + 1}`}
                                    className="w-[258px] h-[206px] overflow-hidden flex-shrink-0"
                                />
                            ))}
                        </div>
                    </div>
                    <button
                        className="absolute top-1/2 transform -translate-y-1/2 left-0 bg-white p-2 rounded-full shadow-md"
                        onClick={prevSlide}
                    >
                        &#8592;
                    </button>
                    <button
                        className="absolute top-1/2 transform -translate-y-1/2 right-0 bg-white p-2 rounded-full shadow-md"
                        onClick={nextSlide}
                    >
                        &#8594;
                    </button>
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
