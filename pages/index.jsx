import Link from "next/link";
import { Navbar } from "flowbite-react";
import { Button, Modal } from "flowbite-react";
import NavbarHome from "../Components/Navbar";
import Footer from "../Components/Footer";
import TestimonialsCarousel from "../Components/TestimonialsCarousel";
import { Card } from "flowbite-react";
import React, { useState, useEffect } from 'react';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const screenWidth = window.innerWidth;
      let scrollThreshold;

      // Define different scroll thresholds based on screen width
      if (screenWidth < 325) {
        scrollThreshold = 50;
      } else if (screenWidth < 425) {
        scrollThreshold = 100;
      } else if (screenWidth < 768) {
        scrollThreshold = 150;
      } else if (screenWidth < 1024) {
        scrollThreshold = 300;
      } else {
        scrollThreshold = 700;
      }

      setIsScrolled(scrollPosition > scrollThreshold);
    };

    // Attach scroll event listener when component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const events = [
    {
      date: "15 June 2024 | 6:00 PM",
      title: "LOREM IPSUM EVENT",
      description:
        "Lorem ipsum dolor sit amet, ipsd consectetur adipiscing elit, sed do eiusmod tempor incididunt it",
      image: "/UpEvent/3.png",
    },
    {
      date: "25 June 2024 | 5:00 PM",
      title: "LOREM IPSUM EVENT",
      description:
        "Lorem ipsum dolor sit amet, ipsd consectetur adipiscing elit, sed do eiusmod tempor incididunt it",
      image: "/UpEvent/7.png",
    },
    {
      date: "05 July 2024 | 10:00 AM",
      title: "LOREM IPSUM EVENT",
      description:
        "Lorem ipsum dolor sit amet, ipsd consectetur adipiscing elit, sed do eiusmod tempor incididunt it",
      image: "/UpEvent/5.png",
    },
    {
      date: "12 July 2024 | 6:30 PM",
      title: "LOREM IPSUM EVENT",
      description:
        "Lorem ipsum dolor sit amet, ipsd consectetur adipiscing elit, sed do eiusmod tempor incididunt it",
      image: "/UpEvent/6.png",
    },
  ];
  return (
    <main className="bg-white min-h-screen">
      <div className="section">
        <div
          className="navbar md:pt-10 flex bg-none lg:pb-20 md:pb-10 text-black scroll-my-28:text-black z-50 fixed w-full lg:px-20"
          style={{
            backgroundColor: isScrolled ? 'white' : 'transparent',
            color: isScrolled ? 'black' : 'white',
          }}
        >
          <div className="md:navbar-center  md:flex navbar-start justify-start md:justify-center w-full">
            <div className="justify-start flex md:justify-center h-[70px] w-[80px] md:h-[80px] md:w-[80px] xl:w-[150px] xl:h-auto">
              <img className="flex justify-center " src="./home2.png" alt="Home" />
            </div>
          </div>
          {/* Responsive Menu */}
          <div className="md:hidden justify-end flex navbar-end">
            <button className="text-customGold" onClick={toggleMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>
        <nav
          style={{ color: isScrolled ? 'black' : 'white' }}
          className="bg-none fixed w-full z-50 mt-20 xl:mt-24 lg:mt-20 md:pt-10 md:mt-16 md:flex justify-center text-center lg:px-20"
        >
          <div className="max-w-7xl mx-auto px-4 py-2 gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center xl:gap-16 xl:mt-5 gap-8">
                <Link href="/">
                  <span className="text-customGold hover:border-b-2 hover:border-customGold ml-4 cursor-pointer hidden md:inline-block">Homepage</span>
                </Link>
                <Link href="/AboutUs">
                  <span className="text-customGold hover:border-b-2 hover:border-customGold ml-4 cursor-pointer hidden md:inline-block">About Us</span>
                </Link>
                <Link href="/Accomodation">
                  <span className="text-customGold hover:border-b-2 hover:border-customGold ml-4 cursor-pointer hidden md:inline-block">Accommodation</span>
                </Link>
                <Link href="/Treatment">
                  <span className="text-customGold hover:border-b-2 hover:border-customGold ml-4 cursor-pointer hidden md:inline-block">Ayurvedic Treatments</span>
                </Link>
                <Link href="/GalleryPage">
                  <span className="text-customGold hover:border-b-2 hover:border-customGold ml-4 cursor-pointer hidden md:inline-block">Gallery</span>
                </Link>
                <Link href="/ContactUs">
                  <span className="text-customGold hover:border-b-2 hover:border-customGold ml-4 cursor-pointer hidden md:inline-block">Blog</span>
                </Link>
                <Link href="/ContactUs">
                  <span className="text-customGold hover:border-b-2 hover:border-customGold ml-4 cursor-pointer hidden md:inline-block">Contact Us</span>
                </Link>
              </div>
            </div>
            {/* Menu Details */}
            {isMenuOpen && (
              <div className="md:hidden flex flex-col text-start mt-[-2rem] navbar-end">
                <div
                  style={{
                    backgroundColor: 'white',
                    color: isScrolled ? 'black' : 'white',
                  }}
                  className="flex flex-col mt-2 rounded-lg pt-2"
                >
                  <Link href="/">
                    <span className="text-customGold ml-4 hover:text-white cursor-pointer">Home</span>
                  </Link>
                  <Link href="/AboutUs">
                    <span className="text-customGold ml-4 hover:text-white cursor-pointer">About Us</span>
                  </Link>
                  <Link href="/Accomodation">
                    <span className="text-customGold ml-4 hover:text-white cursor-pointer">Accommodation</span>
                  </Link>
                  <Link href="/Treatment">
                    <span className="text-customGold ml-4 hover:text-white cursor-pointer">Ayurvedic Treatments</span>
                  </Link>
                  <Link href="/GalleryPage">
                    <span className="text-customGold ml-4 hover:text-white cursor-pointer">Gallery</span>
                  </Link>
                  <Link href="/ContactUs">
                    <span className="text-customGold ml-4 hover:text-white cursor-pointer">Blog</span>
                  </Link>
                  <Link href="/ContactUs">
                    <span className="text-customGold ml-4 hover:text-white cursor-pointer">Contact Us</span>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>





      {/* image section */}
      <section>
        <img src="/home.jpg" className="w-full" alt="hero" />
      </section>


      {/* booking section */}
      <section>
        <div className="flex justify-center mt-[-2rem] md:mt-[-4rem] lg:mt-[-3rem]">
          <button className="bg-white lg:text-xl text-black shadow-xl box-border border-2 font-bold md:py-8 md:px-24 rounded">
            Book Now
          </button>
          <button className="bg-white lg:text-xl text-black shadow-xl box-border border-2 font-bold md:py-8 md:px-24 rounded">
            View Rooms
          </button>
          <button className="bg-white lg:text-xl text-black shadow-xl box-border border-2 font-bold md:py-8 md:px-24 rounded">
            Explore Ayurveda
          </button>
        </div>
      </section>

      {/* welcome section */}
      <section className="px-5">
        <div className="mt-10 bg-white lg:px-20   flex flex-col items-center justify-center ">
          <div className="mb-2">
            <img src="/home3.png" alt="" />
          </div>
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">Welcome to</h1>
            <h2 className="text-5xl font-extrabold  mb-6">
              River View Villas
            </h2>
            <p className="text-lg text-justify lg:text-center  max-w-xl mx-auto">
              Welcome to River View Villas, where traditional Ayurvedic wellness
              meets luxurious accommodations. Nestled in the heart of Sri Lanka,
              our resort offers a harmonious blend of nature and holistic health
              practices.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 mb-4">
                <img
                  src="/icons/image5.png"
                  alt="Health-conscious living options"
                  className="w-full  h-full"
                />
              </div>
              <p className="text-lg font-medium text-gray-700">
                Health-conscious living options
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 mb-4">
                <img
                  src="/icons/image6.png"
                  alt="Personalized diets"
                  className="w-full h-full"
                />
              </div>
              <p className="text-lg font-medium text-gray-700">
                Personalized diets
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 mb-4">
                <img
                  src="/icons/image3.png"
                  alt="Detox programs"
                  className="w-full h-full"
                />
              </div>
              <p className="text-lg font-medium text-gray-700">
                Detox programs
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 mb-4">
                <img
                  src="/icons/image4.png"
                  alt="Yoga and meditation"
                  className="w-full h-full"
                />
              </div>
              <p className="text-lg font-medium text-gray-700">
                Yoga and meditation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* services section */}
      <section >
        <div className=" mt-5 lg:mt-20 mx-5  lg:mx-20 px-4 py-16">
          <h2 className="text-5xl font-bold text-center mb-8">
            Major Ayurvedic Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className=" mb-4">
                <img
                  src="/images/3.png"
                  alt="Massage Therapy"
                  className="w-full h-full "
                />
              </div>
              <h3 className="text-xl font-semibold">Massage Therapy</h3>
              <p className="mt-2 text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipiscing elit
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4">
                <img
                  src="/images/4.png"
                  alt="Herbal Treatments"
                  className="w-full h-full"
                />
              </div>
              <h3 className="text-xl font-semibold">Herbal Treatments</h3>
              <p className="mt-2 text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipiscing elit
              </p>
            </div>
            <div className="text-center">
              <div className=" mb-4">
                <img src="/images/5.png" alt="Yoga" className="w-full " />
              </div>
              <h3 className="text-xl font-semibold">Yoga</h3>
              <p className="mt-2 text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipiscing elit
              </p>
            </div>
            <div className="text-center">
              <div className=" mb-4">
                <img src="/images/6.png" alt="Meditation" className="w-full " />
              </div>
              <h3 className="text-xl font-semibold">Meditation</h3>
              <p className="mt-2 text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipiscing elit
              </p>
            </div>
          </div>
          <div className="text-center mt-8">
            <button className="px-6 py-2 bg-white text-gray-600 border border-gray-600 font-semibold rounded-md">
              Learn more
            </button>
          </div>
        </div>
      </section>

      {/* TestimonialsCarousel.js */}
      <section>
        <TestimonialsCarousel />
      </section>

      {/* Virtual Tour */}
      <section className="flex flex-col md:flex-row items-center lg:mx-20 justify-between p-5 bg-white">
        <div className="md:w-1/2 p-6">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Lorem (Video Tour)
          </h2>
          <p className="text-gray-600 text-justify mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat incididunt ut labore et dolore.
          </p>
          <button className="px-4 py-1 bg-white text-black border border-slate-700  rounded hover:bg-black hover:text-white">
            Explore our gallery
          </button>
        </div>
        <div className="md:w-1/2 p-6 flex justify-center">
          <div className="relative">
            <img src="/Frame2.png" alt="Virtual Tour" className="w-full" />
            <div className="absolute inset-0 flex items-center justify-center">
              <button data-modal-target="default-modal"
                data-modal-toggle="default-modal"
                type="button"
                onClick={toggleModal} className=" p-12 rounded-full shadow-lg"></button>
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
            <div className="relative w-full max-w-2xl bg-white rounded-lg shadow dark:bg-gray-700">
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

                  <video class="w-full h-auto max-w-full" controls>
                    <source src="/docs/videos/flowbite.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                </div>

              </div>
            </div>
          </div>
        )}
      </section>

      {/* Upcoming Events */}
      <section className="py-12 lg:mx-20 bg-white">
        <div className=" mx-auto px-6">
          <h2 className="text-5xl font-semibold text-gray-800 text-center mb-4">Upcoming Events</h2>
          <p className="text-gray-600 text-center mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {events.map((event, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <p className="text-gray-500 mb-2">{event.date}</p>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{event.title}</h3>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <button className="text-gray-600 flex hover:text-custom ">
                    Learn more  <span><svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.5 17.9166C13.8723 17.9166 17.4167 14.3722 17.4167 9.99992C17.4167 5.62766 13.8723 2.08325 9.5 2.08325C5.12774 2.08325 1.58333 5.62766 1.58333 9.99992C1.58333 14.3722 5.12774 17.9166 9.5 17.9166Z" stroke="#001F2B" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M9.5 13.1666L12.6667 9.99992L9.5 6.83325" stroke="#001F2B" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M6.33333 10H12.6667" stroke="#001F2B" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Subscribe to our newsletter */}
      <section className="py-8 lg:mx-20 bg-gray-50">
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

      <Footer />
    </main>
  );
}
