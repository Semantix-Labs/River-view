import Link from "next/link";


import React, { useState, useEffect } from 'react';
import { CiLocationOn } from "react-icons/ci";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from '../styles/TestimonialsCarousel.module.css';
import { SlArrowRight } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";
import { FaTiktok } from "react-icons/fa";



const CustomPrevArrow = ({ onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={`absolute top-1/2 transform -translate-y-1/2 left-0 z-10 ${styles.customArrow}`}
  >
    <SlArrowLeft className='w-10 hidden md:inline  h-10 text-gray-600' />
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={`absolute top-1/2 transform -translate-y-1/2 right-0 z-10 ${styles.customArrow}`}
  >
    <SlArrowRight className='w-10 hidden md:inline   h-10 text-gray-600' />
  </button>
);


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
        scrollThreshold = 620;
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

  const testimonials = [
    {
      text: `"Amazing place with a most peaceful view very friendly staff and nice food really amazed by the lake view and good value for the money. unfortunately we stayed only one night but definitely we will come again thank you for the owner and his team"`,
      clientName: "Sightsee336020",
      imageSrc: "./Frame.png",
    },
    {
      text: `"On local recommendation, I came here for Ayurvedic treatment while staying at a different hotel. I can't comment on the accommodation or food, but it is a beautiful place on the river bank, with immaculately-kept gardens. There are surprises at every turn, like the doctor's office built to look like the roots of a bo tree. They also offer yoga."`,
      clientName: "Margaret F",
      imageSrc: "./Frame.png",
    },
    {
      text: `"I stayed at the River View Villas last two weeks and had a great experience! It was my first time there but definitely not the last time. Docter Nalaka and the therapists are highly professional. The treatments are really good and it really helps! Champika and Gayan were my therapists and they really know what they are doing. I feel reborn and fresh for a new start at home! I also thank Mr. Illyas for all the good care and arrangments for our excursions! Thank you all and see you soon !"`,
      clientName: "Reshma D ",
      imageSrc: "./Frame.png",
    },
    {
      text: `"The doctor and therapists at this beautiful spa made our visit for the intensive spa treatment a most memorable one. We loved the serenity and caring nature too. Easy to reach from bentota hotels and there's accommodation and food prescribed in the Ayurvedic way if you get the chance to stay."`,
      clientName: "Judy M  ",
      imageSrc: "./Frame.png",
    },
    {
      text: `"My friend & I were recommended to this ayurevedic spa but sadly in our last day in Bentota. When you arrive, you enter an oasis, calm & beautiful, set in the river. The owner/doctor showed us one of the villas you can stay in & it was impressive! The treatment rooms were clean & the massage sublime! Thanks to our lovely masseurs!! Would highly recommend!!"`,
      clientName: "RobynK309 ",
      imageSrc: "./Frame.png",
    },
    // Add more testimonials as needed
  ];
  return (
    <main className="bg-white min-h-screen scroll-smooth">


<div
      className="section w-full h-[300px] fixed bg-gradient-to-b from-black to-transparent z-50 scroll-smooth"
      style={{ height: isScrolled ? 'auto' : '300px' }}
    >
      <div
        className="navbar md:pt-10 flex bg-none lg:pb-20 md:pb-10 text-black scroll-my-28:text-black z-50 fixed w-full lg:px-20"
        style={{
          backgroundColor: isScrolled ? 'white' : 'transparent',
          color: isScrolled ? 'black' : 'white',
        }}
      >
        <div className="md:navbar-center flex navbar-center justify-center md:justify-center w-full">
          <div
            style={{ marginLeft: '1rem' }}
            className="justify-center flex md:justify-center h-[70px] w-[80px] md:h-[80px] md:w-[80px] xl:w-[150px] xl:h-auto"
          >
            <img
              className="flex mx-auto justify-center"
              src="./home2.png"
              alt="Home"
            />
          </div>
        </div>
        {/* Responsive Menu Button */}
        <div className="md:hidden justify-end flex navbar-end">
          <button
            style={{ marginRight: '0rem' }}
            className="text-customGold"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="#001F2B"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
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
            <div
              className="flex items-center xl:gap-16 xl:mt-5 gap-8"
              style={{ fontFamily: 'Gentium Basic' }}
            >
              <Link href="/">
                <span className="text-customGold hover:border-b-2 hover:border-customGold ml-4 cursor-pointer hidden md:inline-block">
                  Homepage
                </span>
              </Link>
              <Link href="/AboutUs">
                <span className="text-customGold hover:border-b-2 hover:border-customGold ml-4 cursor-pointer hidden md:inline-block">
                  About Us
                </span>
              </Link>
              <Link href="/Accomodation">
                <span className="text-customGold hover:border-b-2 hover:border-customGold ml-4 cursor-pointer hidden md:inline-block">
                  Accommodation
                </span>
              </Link>
              <Link href="/Treatment">
                <span className="text-customGold hover:border-b-2 hover:border-customGold ml-4 cursor-pointer hidden md:inline-block">
                  Ayurvedic Treatments
                </span>
              </Link>
              <Link href="/Gallery">
                <span className="text-customGold hover:border-b-2 hover:border-customGold ml-4 cursor-pointer hidden md:inline-block">
                  Gallery
                </span>
              </Link>
              <Link href="/ContactUs">
                <span className="text-customGold hover:border-b-2 hover:border-customGold ml-4 cursor-pointer hidden md:inline-block">
                  Blog
                </span>
              </Link>
              <Link href="/ContactUs">
                <span className="text-customGold hover:border-b-2 hover:border-customGold ml-4 cursor-pointer hidden md:inline-block">
                  Contact Us
                </span>
              </Link>
            </div>
          </div>
          {/* Menu Details */}
          <div
            className={`md:hidden fixed top-0 left-0 w-full h-screen bg-white flex flex-col text-start z-50 transition-all space-y-3 duration-700 ease-in-out ${
              isMenuOpen ? 'translate-y-0' : '-translate-y-full'
            }`}
            style={{ color: isScrolled ? 'black' : 'white' }}
          >
            <div className="flex justify-end pr-4 pt-4">
              <button onClick={toggleMenu} className="text-customGold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="#001F2B"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <Link href="/">
              <span className="text-customGold ml-4 hover:text-white text-2xl cursor-pointer py-2">
                Home
              </span>
            </Link>
            <Link href="/AboutUs">
              <span className="text-customGold ml-4 hover:text-white  text-2xl cursor-pointer py-2">
                About Us
              </span>
            </Link>
            <Link href="/Accomodation">
              <span className="text-customGold ml-4 hover:text-white  text-2xl cursor-pointer py-2">
                Accommodation
              </span>
            </Link>
            <Link href="/Treatment">
              <span className="text-customGold ml-4 hover:text-white  text-2xl cursor-pointer py-2">
                Ayurvedic Treatments
              </span>
            </Link>
            <Link href="/GalleryPage">
              <span className="text-customGold ml-4 hover:text-white  text-2xl cursor-pointer py-2">
                Gallery
              </span>
            </Link>
            <Link href="/ContactUs">
              <span className="text-customGold ml-4 hover:text-white  text-2xl cursor-pointer py-2">
                Blog
              </span>
            </Link>
            <Link href="/ContactUs">
              <span className="text-customGold ml-4 hover:text-white  text-2xl cursor-pointer py-2">
                Contact Us
              </span>
            </Link>
          </div>
        </div>
      </nav>
    </div>




      {/* image section */}
      <section>
        <img src="/home.jpg" className="w-full" alt="hero" />
      </section>


      {/* booking section */}
      <section>
        <div style={{fontFamily:'Gentium Basic'}} className=" grid grid-cols-2 md:flex justify-center mx-10 md:mx-5 mt-[-2rem] md:mt-[-4rem] lg:mt-[-3rem]">
          
          <button className="bg-white lg:text-xl text-black shadow-xl box-border border-2 font-bold py-4 md:py-8 md:px-24 rounded">
            Book Now
          </button>
          <button className="bg-white lg:text-xl text-black shadow-xl box-border border-2 font-bold py-4 md:py-8 md:px-24 rounded">
            View Rooms
          </button>
          <button className="bg-white lg:text-xl col-span-2 text-black shadow-xl box-border py-4 border-2 font-bold md:py-8 md:px-24 rounded">
            Explore Ayurveda
          </button>
        </div>
      </section>

      {/* welcome section */}
      <section className="bg-[#FFFFFF]">
        <div className="mt-10 bg-[#FFFFFF] lg:px-20 mx-5  flex flex-col items-center justify-center ">
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
          <div className="  hidden md:inline-grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
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
        <div className="mx-5">
            <Carousel
              showArrows={false}
              showThumbs={false}
              showStatus={false}
              showIndicators={false}
              autoPlay



              className="md:hidden    justify-center  flex flex-col items-center"
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 xs:w-24 xs:h-24 xxm:w-28 xxm:h-28 mb-4">
                  <img
                    src="/icons/image5.png"
                    alt="Health-conscious living options"
                    className=""
                  />
                </div>
                <p className="text-lg font-medium pb-10 text-gray-700">
                  Health-conscious living options
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 xs:w-24 xs:h-24 xxm:w-28 xxm:h-28 mb-4">
                  <img
                    src="/icons/image6.png"
                    alt="Personalized diets"
                    className=""
                  />
                </div>
                <p className="text-lg font-medium text-gray-700">
                  Personalized diets
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 xs:w-24 xs:h-24 xxm:w-28 xxm:h-28 mb-4">
                  <img
                    src="/icons/image3.png"
                    alt="Detox programs"
                    className=""
                  />
                </div>
                <p className="text-lg font-medium text-gray-700">
                  Detox programs
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 xs:w-24 xs:h-24 xxm:w-28 xxm:h-28 mb-4">
                  <img
                    src="/icons/image4.png"
                    alt="Yoga and meditation"
                    className=""
                  />
                </div>
                <p className="text-lg font-medium text-gray-700">
                  Yoga and meditation
                </p>
              </div>
            </Carousel>
          </div>
      </section>

      {/* services section */}
      <section className="  bg-[#F9F9F9]" >
        <div className=" mt-5 lg:mt-20 mx-5 bg-[#F9F9F9] lg:mx-20 px-4 py-16">
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
                Revitalize and relax with our expertly delivered massage therapy.

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
                 Experience natures healing with our tailored herbal treatments.
              </p>
            </div>
            <div className="text-center">
              <div className=" mb-4">
                <img src="/images/5.png" alt="Yoga" className="w-full " />
              </div>
              <h3 className="text-xl font-semibold">Yoga</h3>
              <p className="mt-2 text-gray-600">
                Enhance balance and strength through our yoga sessions.

              </p>
            </div>
            <div className="text-center">
              <div className=" mb-4">
                <img src="/images/6.png" alt="Meditation" className="w-full " />
              </div>
              <h3 className="text-xl font-semibold">Meditation</h3>
              <p className="mt-2 text-gray-600">
                Achieve peace and clarity with our guided meditation techniques.

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
      <section className="bg-[#FFFFFF]">
        <div className="mx-5 bg-[#FFFFFF] lg:mx-20  py-0 md:py-8">
          <h2 className="text-5xl font-semibold text-center mb-4">Clients words about us</h2>
          <Carousel
            showArrows={true}
            showThumbs={true}
            showStatus={false}
            showIndicators={false}
            infiniteLoop
            autoPlay
            interval={5000}
            className={`relative ${styles.customCarousel}`}
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
              hasPrev && <CustomPrevArrow onClick={onClickHandler} />
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
              hasNext && <CustomNextArrow onClick={onClickHandler} />
            }
          >
            {testimonials.map((testimonial, index) => (
              <div className="p-4" key={index}>
                <p className="text-justify md:text-center md:px-5 lg:mx-20 text-sm md:text-lg italic mb-4">
                  {testimonial.text}
                </p>
                <div className="flex justify-center items-center">
                  <span className="text-center font-semibold">{testimonial.clientName}</span>
                </div>
                {/* <div className="flex justify-center mb-10 items-center">
                <img
                  src={testimonial.imageSrc}
                  alt={`Client ${index + 1}`}
                  className={`w-16 h-16 rounded-full mx-2 ${styles.customIndicator}`}
                />
              </div> */}
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      {/* Virtual Tour */}
      <div className='bg-[#F9F9F9]'>
        <section className="flex flex-col md:flex-row items-center lg:mx-20 justify-between p-5 bg-[#F9F9F9]">
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
        </section></div>

      {/* Upcoming Events */}
      <section className="py-12 lg:mx-20 bg-[#FFFFFF]">
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
    </main>
  );
}
