import React from 'react'
import Navbar from '@/Components/Navbar2';
import Index1 from '@/Components/index';
import Footer from '@/Components/Footer';

export default function Treatment() {
    return (
        <div>
            <Navbar />

            {/* image Section */}
            <section className='pt-20'>
                <div className='w-full'>
                    <img className='w-full' src="/Treatment.png" alt="" />
                </div>
            </section>



            <section>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <img className="mx-auto justify-center" src="/home3.png" alt="" />
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">Treatment Menu</h2>
                    <p className="mt-4 max-w-xl mx-auto text-center leading-6  text-gray-500">
                        Explore our extensive range of Ayurvedic treatments designed to rejuvenate your body and mind. Our treatments are categorized for your convenience. Choose from body therapies, herbal treatments, yoga and meditation classes, detox programs, and more. All treatments use organically sourced ingredients      </p>
                </div>
            </section>



            {/* Treatment Menu */}
            <section>
                <Index1 />
            </section>


            {/* Subscribe to our newsletter */}
            <section className="py-8 lg:mx-20 bg-gray-50">
                <div className=" mx-auto max-w-4xl px-4">
                    <form className="flex items-center border  rounded-lg overflow-hidden">
                        <input
                            type="email"
                            placeholder="E-mail"
                            className=" px-4 w-full mr-4 py-3 border-gray-600 border rounded-lg outline-none"
                        />
                        <button
                            type="submit"
                            className="bg-[#001F2B] w-5/12 text-white px-6 py-3 hover:bg-blue-900 rounded-lg"
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
