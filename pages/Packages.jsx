"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { FaTiktok } from "react-icons/fa";

import { FiMenu, FiX } from "react-icons/fi";


export default function Packages() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("All");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const bookNow = () =>
    window.open(
      "https://booking.profitroom.com/en/riverviewvillas/home?no-cache=&currency=USD",
      "_blank"
    );

  const packages = [
    {
      id: 1,
      title: "3-Nights Hibiscus Vitality Package",
      subtitle: "Quick Body Detox & Mind Refresh",
      duration: 3,
      image: "/TreatmentMenu/1.png",
      link: "https://booking.profitroom.com/en/riverviewvillas/pricelist/offers/854188",
    },
    {
      id: 2,
      title: "7-Day Panchakarma Cleanse",
      subtitle: "Deep Ayurvedic Detox & Healing",
      duration: 7,
      price: 1980.0,
      image: "/TreatmentMenu/1.png",
      link: "https://booking.profitroom.com/en/riverviewvillas/home?no-cache=&currency=USD",
    },
    {
      id: 3,
      title: "14-Night Migraine Relief Package",
      subtitle: "Migraine Root Cause Healing Program",
      duration: 14,
      price: 3463.32,
      image: "/packages/migraine.jpg",
      link: "https://booking.profitroom.com/en/riverviewvillas/home?no-cache=&currency=USD",
    },
    {
      id: 4,
      title: "14-Night Arthritis Treatment Package",
      subtitle: "Chronic Pain Relief: Joint Function Renewal",
      duration: 14,
      price: 3463.32,
      image: "/packages/arthritis.jpg",
      link: "https://booking.profitroom.com/en/riverviewvillas/home?no-cache=&currency=USD",
    },
    {
      id: 5,
      title: "21-Day Complete Wellness Program",
      subtitle: "Transformative Ayurvedic Lifestyle Program",
      duration: 21,
      price: 4980.0,
      image: "/packages/wellness.jpg",
      link: "https://booking.profitroom.com/en/riverviewvillas/home?no-cache=&currency=USD",
    },
     {
      id: 6,
      title: "5-Day Complete Wellness Program",
      subtitle: "Transformative Ayurvedic Lifestyle Program",
      duration: 5,
      price: 4980.0,
      image: "/packages/wellness.jpg",
      link: "https://booking.profitroom.com/en/riverviewvillas/home?no-cache=&currency=USD",
    },
  ];

  const filteredPackages =
    selectedFilter === "All"
      ? packages
      : packages.filter((pkg) => pkg.duration === parseInt(selectedFilter));

  return (
    <div className=" text-white min-h-screen">
      {/* ================= Header ================= */}
      {/* ================= Header ================= */}
<header
  className={`fixed w-full top-0 z-50 transition-all duration-500 ${
    isScrolled
      ? "bg-white shadow-md text-[#8B6E3F]"
      : "bg-[#8B6E3F] text-white"
  }`}
>
  <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
    <Link href="/" className="font-bold text-lg tracking-wide">
      <img src="/Rlogo.png" className="h-16 w-16 xl:w-28 xl:h-28" />
    </Link>

    {/* Desktop Nav */}
    <div
      className="hidden md:flex gap-10 text-[16px]"
      style={{ fontFamily: "Gentium Basic" }}
    >
      <Link
        href="/AboutUs"
        className={`${
          isScrolled ? "text-[#8B6E3F]" : "text-white"
        } hover:border-b-2 hover:border-[#8B6E3F]`}
      >
        About Us
      </Link>
      <Link
        href="/Accomodation"
        className={`${
          isScrolled ? "text-[#8B6E3F]" : "text-white"
        } hover:border-b-2 hover:border-[#8B6E3F]`}
      >
        Accommodation
      </Link>
      <Link
        href="/Treatment"
        className={`${
          isScrolled ? "text-[#8B6E3F]" : "text-white"
        } hover:border-b-2 hover:border-[#8B6E3F]`}
      >
        Ayurvedic Treatments
      </Link>
      <Link
        href="/Gallery"
        className={`${
          isScrolled ? "text-[#8B6E3F]" : "text-white"
        } hover:border-b-2 hover:border-[#8B6E3F]`}
      >
        Gallery
      </Link>
      <Link
        href="/Packages"
        className={`border-b-2 ${
          isScrolled
            ? "text-[#8B6E3F] border-[#8B6E3F]"
            : "text-white border-white"
        }`}
      >
        Packages
      </Link>
      <Link
        href="/ContactUs"
        className={`${
          isScrolled ? "text-[#8B6E3F]" : "text-white"
        } hover:border-b-2 hover:border-[#8B6E3F]`}
      >
        Contact Us
      </Link>
    </div>

    {/* Mobile Hamburger */}
    <button
      className={`md:hidden focus:outline-none ${
        isScrolled ? "text-[#8B6E3F]" : "text-white"
      }`}
      onClick={toggleMenu}
    >
      {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
    </button>
  </nav>

  {/* Mobile Menu */}
  {isMenuOpen && (
    <div className="md:hidden bg-[#001F2B] text-white flex flex-col items-center space-y-4 py-6">
      <Link href="/AboutUs" onClick={toggleMenu}>
        About Us
      </Link>
      <Link href="/Accomodation" onClick={toggleMenu}>
        Accommodation
      </Link>
      <Link href="/Treatment" onClick={toggleMenu}>
        Ayurvedic Treatments
      </Link>
      <Link href="/Gallery" onClick={toggleMenu}>
        Gallery
      </Link>
      <Link href="/Packages" onClick={toggleMenu}>
        Packages
      </Link>
      <Link href="/ContactUs" onClick={toggleMenu}>
        Contact Us
      </Link>
      <button
        onClick={bookNow}
        className="bg-customGold text-white px-4 py-2 rounded-lg hover:opacity-90"
      >
        Book Now
      </button>
    </div>
  )}
</header>


      {/* ================= Main Content ================= */}
      <main className="min-h-screen bg-gray-50 text-gray-900 pt-32  mt-10 pb-20 px-4  md:px-20">
        <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
          Our Ayurvedic Packages
        </h1>

        {/* 🔹 Filter Bar */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["All", "3","5" ,"7", "14", "21"].map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-6 py-2 rounded-full border font-medium transition-all ${
                selectedFilter === filter
                  ? "bg-[#8B6E3F] text-white border-[#8B6E3F]"
                  : "bg-white text-[#001F2B] border-gray-300 hover:border-[#8B6E3F] hover:text-[#8B6E3F]"
              }`}
            >
              {filter === "All" ? "All" : `${filter}-Day`}
            </button>
          ))}
        </div>

        {/* 🔹 Filtered Packages */}
        <div className="grid grid-cols-1 gap-8 max-w-6xl mx-auto">
          {filteredPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col md:flex-row"
            >
              {/* Left: Image */}
              <div className="md:w-1/2 relative h-64 md:h-auto">
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                />
                <div className="absolute bottom-3 left-3 bg-white/80 text-gray-800 px-3 py-1 rounded text-sm">
                  {pkg.duration}-Night Package
                </div>
              </div>

              {/* Right: Details */}
              <div className="md:w-1/2 p-6 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                    {pkg.title}
                  </h2>
                  <p className="text-sm text-gray-600 mb-3">{pkg.subtitle}</p>
                  <ul className="text-gray-700 space-y-1 text-sm mb-4">
                    <li>✅ Free cancellation (T & c)</li>
                    <li>💳 50% deposit</li>
                    <li>🍽️ Full Board</li>
                  </ul>
                </div>

                <div className="flex justify-between items-center">
                  
                  <Link
                    href={pkg.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bg-[#8B6E3F] text-white px-5 py-2 rounded-md hover:bg-[#6F5530] transition">
                      Book Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* ================= Footer ================= */}
       <div className='bg-[#001F2B]'>
                      <footer className="bg-[#001F2B] mx-5 2xl:px-[15rem] lg:mx-20 text-gray-400 pt-20">
                          <div className=" px-4">
                              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
      
                                  <div className="mb-6 lg:mb-0 lg:col-span-2">
                                      <div className='mb-4  lg:mx-0 w-24 h-24'>
                                          <img className='text-center' src="./home2.png" alt="" />
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
