import React from 'react'
import Navbar from '../Components/Navbar2';
import AyurvedicExperts from '@/Components/AyurvedicExperts';
import Footer from "../Components/Footer";

export default function AboutUs() {
    return (
        <div>
            <Navbar />


            {/* image Section */}
            <section className='pt-20'>
                <div className='relative w-full'>
                    <img className='pb-5 w-screen' src="/AboutUs.png" alt="" />
                    <div class="absolute inset-0  opacity-60 rounded-md"></div>
                    <div class="absolute inset-0 flex items-center justify-center">
                        <h2 className='text-3xl md:text-7xl lg:text-8xl font-bold justify-center text-center text-white'>About Us

                        </h2>
                    </div>
                </div>
            </section>


            {/* History and Origins */}
            <div className='mt-5 px-5 lg:mt-20   '>
                <div className='lg:px-20 2xl:px-72 grid grid-cols-1 mx-auto md:grid-cols-2 gap-8 '>
                    <div className='cols-span-1 mx-auto   my-auto'>
                        <div className='mb-4  md:justify-start  flex justify-center'>
                            <img className='text-center items-cente flex justify-center' src="/home3.png" alt="" />
                        </div>
                        <h2 className="text-3xl md:text-5xl text-center md:text-start font-extrabold text-gray-800 mb-6">History and Origins</h2>
                        <p className="text-lg text-gray-600 text-justify md:text-start max-w-xl ">Since 2005, River View Villas has been dedicated to promoting Ayurvedic wellness. Our history is deeply rooted in the traditions of Ayurveda, aiming to spread inner peace and balance through our holistic practices.</p>

                    </div>
                    <div className='cols-span-1  '>
                        <img src="/AbHistory.png" alt="" />
                    </div>
                </div>
            </div>


            {/* The Wisdom of Ayurveda */}
            <section className='mt-5  lg:mt-20'>
                <div className='lg:px-20  px-5 2xl:px-72 grid grid-cols-1  w-screen md:grid-cols-2 gap-8 '>
                    <div className='cols-span-1 mx-auto'>
                        <img src="/Ab2.png" alt="" />
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
            <section>
                <AyurvedicExperts />
            </section>



            {/* Commitment to Sustainability */}
            <section>
                <div className="px-5 py-20 lg:px-20 bg-white">
                    <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className=" text-3xl md:text-5xl mx-auto font-semibold text-gray-900 py-5 tracking-wide uppercase">Commitment to Sustainability</h2>
                        <p className=" mt-2 justify-center mx-auto text-gray-600 max-w-3xl ">We are committed to conserving the environment and maintaining ecological balance. Our practices include the use of locally sourced organic materials, energy-saving programs, and support for the local community. Our efforts have been recognized with various sustainability awards.</p>            </div>
                </div>
                <div className='md:flex grid grid-cols-2 justify-center px-5 lg:px-20 gap-4 lg:gap-16'>
                    <img className='max-w-2xl' src="/commitIcons/12.png" alt="" />
                    <img className='max-w-2xl' src="/commitIcons/13.png" alt="" />
                    <img className='max-w-2xl' src="/commitIcons/17.png" alt="" />
                    <img className='max-w-2xl' src="/commitIcons/14.png" alt="" />
                    <img className='max-w-2xl' src="/commitIcons/15.png" alt="" />
                    <img className='md:max-w-2xl mx-w-sm' src="/commitIcons/16.png" alt="" />
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

            <Footer />

        </div>
    )
}
