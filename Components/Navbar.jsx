import Link from 'next/link';
import React, { useState, useEffect } from 'react';

export default function Navbar() {


  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const screenWidth = window.innerWidth;

      let scrollThreshold;

      // Define different scroll thresholds based on screen width
      if (screenWidth < 325) {
        // For screens less than 325px (e.g., very small mobile devices)
        scrollThreshold = 50;
      } else if (screenWidth < 425) {
        // For screens between 325px and 425px (e.g., small mobile devices)
        scrollThreshold = 100;
      } else if (screenWidth < 768) {
        // For screens between 425px and 768px (e.g., medium-sized mobile devices)
        scrollThreshold = 150;
      } else if (screenWidth < 1024) {
        // For screens 768px and above (e.g., tablets, desktops)
        scrollThreshold = 300;
      }
      else {
        scrollThreshold = 700;
      }

      if (scrollPosition > scrollThreshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Attach scroll event listener when component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means this effect runs only once after mounting



 
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
        <div  className='section   '>

        <div
          className="navbar md:pt-10 flex bg-none lg:pb-20 md:pb-10 text-black scroll-my-28:text-black z-50 fixed w-full lg:px-20"
          style={{

            backgroundColor: isScrolled ? 'white' : 'transparent',
            color: isScrolled ? 'black' : 'white', 
          }}
        >


          <div className='md:navbar-center md:justify-center md:flex navbar-start justify-start  w-full'>
            <div className='justify-start h-[70px] w-[80px] md:h-[80px] md:w-[80px] xl:w-[150px] '><img src="./home2.png" alt="" /></div>
          </div>
          {/* Responsive Menu */}
          <div className=" md:hidden justify-end flex  navbar-end   ">
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
        <nav style={{ color: isScrolled ? 'black' : 'white', }} className="bg-none fixed w-full z-50 mt-20 xl:mt-24 lg:mt-20 md:pt-10  md:mt-16  md:flex justify-center text-center lg:px-20">
          <div className="max-w-7xl mx-auto px-4 py-2 gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center xl:gap-16 xl:mt-5 gap-8">
                <Link href="/">
                  <span className="text-customGold  hover:border-b-2 hover:border-customGold ml-4  cursor-pointer hidden md:inline-block">Homepage</span>
                </Link>
                <Link href="/AboutUs">
                  <span className="text-customGold  hover:border-b-2 hover:border-customGold ml-4  cursor-pointer hidden md:inline-block">About Us</span>
                </Link>
                <Link href="/Accomodation">
                  <span  className="text-customGold  hover:border-b-2 hover:border-customGold ml-4  cursor-pointer hidden md:inline-block">Accommodation</span>
                </Link>
                <Link href="/Treatment">
                  <span  className="text-customGold  hover:border-b-2 hover:border-customGold ml-4  cursor-pointer hidden md:inline-block">Atyurvedic Treatments</span>
                </Link>
                <Link href="/GalleryPage">
                  <span  className="text-customGold  hover:border-b-2 hover:border-customGold ml-4  cursor-pointer hidden md:inline-block">Gallery</span>
                </Link>
                <Link href="/ContactUs">
                  <span  className="text-customGold hover:border-b-2 hover:border-customGold ml-4  cursor-pointer hidden md:inline-block">Blog</span>
                </Link>
                <Link href="/ContactUs">
                  <span  className="text-customGold  hover:border-b-2 hover:border-customGold ml-4  cursor-pointer hidden md:inline-block">Contact Us</span>
                </Link>
              
              </div>
            </div>
            {/* Menu Details */}
            {isMenuOpen && (
              <div className="md:hidden navbar-end">
                <div style={{

                  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                  backdropFilter: 'blur(30.2px)',
                  webkitBackdropFilter: 'blur(14.2px)',
                  color: isScrolled ? 'black' : 'white', // Change text color based on scroll
                }} className="flex flex-col mt-2  rounded-lg pt-2 ">
                  <Link href="/">
                    <span className="text-customGold  ml-4 hover:text-white cursor-pointer">Home</span>
                  </Link>
                  <Link href="/AboutUs">
                    <span className="text-customGold  ml-4 hover:text-white cursor-pointer">About Us</span>
                  </Link>
                  <Link href="/Destinations">
                    <span className="text-customGold  ml-4 hover:text-white cursor-pointer">Accommodation</span>
                  </Link>
                  <Link href="/TourPackages">
                    <span className="text-customGold  ml-4 hover:text-white cursor-pointer">Ayurvedic Treatments</span>
                  </Link>
                  <Link href="/GalleryPage">
                    <span className="text-customGold  ml-4 hover:text-white cursor-pointer">Gallery</span>
                  </Link>
                  <Link href="/ContactUs">
                    <span className="text-customGold  ml-4 hover:text-white cursor-pointer">Blog</span>
                  </Link>
                  <Link href="/ContactUs">
                    <span className="text-customGold  ml-4 hover:text-white cursor-pointer">Contact Us</span>
                  </Link>
                 
                </div>
              </div>
            )}
          </div>
        </nav>
        </div>

      </div>
  )
}
