import React from 'react'
import Navbar from '../Components/Navbar2';
import AyurvedicExperts from '@/Components/AyurvedicExperts';

export default function AboutUs() {
    return (
        <div>
            <Navbar />


            {/* image Section */}
            <section>
                <div>
                    <img className='w-full' src="/AboutUs.png" alt="" />
                </div>
            </section>

            {/* History and Origins */}
            <div className='mt-5 lg:mt-20 w-screen mx-auto  '>
                <div className='lg:px-20 2xl:px-72 grid grid-cols-1 mx-auto w-screen md:grid-cols-2 gap-8 '>
                    <div className='cols-span-1 mx-auto my-auto'>
                        <div className='mb-4'>
                            <img src="/home3.png" alt="" />
                        </div>
                        <h2 className="text-5xl font-extrabold text-gray-800 mb-6">History and Origins</h2>
                        <p className="text-lg text-gray-600 max-w-xl ">Since 2005, River View Villas has been dedicated to promoting Ayurvedic wellness. Our history is deeply rooted in the traditions of Ayurveda, aiming to spread inner peace and balance through our holistic practices.</p>

                    </div>
                    <div className='cols-span-1 mx-auto'>
                        <img src="/AbHistory.png" alt="" />
                    </div>
                </div>
            </div>


            {/* The Wisdom of Ayurveda */}
            <section className='mt-5 lg:mt-20'>
                <div className='lg:px-20 2xl:px-72 grid grid-cols-1 mx-auto w-screen md:grid-cols-2 gap-8 '>
                    <div className='cols-span-1 mx-auto'>
                        <img src="/Ab2.png" alt="" />
                    </div>
                    <div className='cols-span-1 mx-auto my-auto'>
                        <div className='mb-4'>
                            <img src="/home3.png" alt="" />
                        </div>
                        <h2 className="text-5xl font-extrabold text-gray-800 mb-6">The Wisdom of Ayurveda</h2>
                        <p className="text-lg text-gray-600 max-w-xl ">At River View Villas, we embrace the ancient teachings of Ayurveda, focusing on a balanced approach to mental, physical, and spiritual health. Our therapies include Panchakarma, herbal treatments, yoga, and meditation, designed to enhance overall wellness.</p>
                    </div>

                </div>
            </section>


            {/* Ayurvedic Experts */}
            <section>
                <AyurvedicExperts />
            </section>

            <section>
                <div className="py-16 px-5 lg:px-20 bg-white">
                    <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className=" text-5xl font-semibold text-gray-900 py-5 tracking-wide uppercase">Commitment to Sustainability</h2>
                         <p className=" mt-2 justify-center mx-auto text-gray-600 max-w-3xl ">We are committed to conserving the environment and maintaining ecological balance. Our practices include the use of locally sourced organic materials, energy-saving programs, and support for the local community. Our efforts have been recognized with various sustainability awards.</p>            </div>
                </div>
            </section>
        </div>
    )
}
