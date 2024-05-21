import React from 'react'
import Navbar from '@/Components/Navbar2'
import LuxryRooms from '@/Components/LuxryRooms';
import BookingForm from '../components/BookingForm';
export default function Accomodation() {
  return (
    <div>
        <Navbar />
        
        {/* image Section */}
        <section>
            <div className='w-full'>
                <img className='w-full' src="/accomation.png" alt="" />
            </div>
        </section>


        {/* Luxry Rooms */}
        <section>
            <LuxryRooms />
        </section>

          {/* Ayurvedic Amenities */}
          <div className='mt-5 lg:mt-20 w-screen mx-auto  '>
                <div className='lg:px-20 2xl:px-72 grid grid-cols-1 mx-auto w-screen md:grid-cols-2 gap-8 '>
                    <div className='cols-span-1 mx-auto  my-auto'>
                       
                        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-6">Ayurvedic Amenities</h2>
                        <p className="text-lg text-gray-600 max-w-xl flex "><span className='mr-2'><img src="/home4.png" alt="" /></span>Organic, chemical-free toiletries</p>
                        <p className="text-lg text-gray-600 max-w-xl flex "><span className='mr-2'><img src="/home4.png" alt="" /></span>Herbal teas and Ayurvedic beverages</p>
                        <p className="text-lg text-gray-600 max-w-xl flex "><span className='mr-2'><img src="/home4.png" alt="" /></span>Yoga mats and meditation spaces</p>
                        <p className="text-lg text-gray-600 max-w-xl flex "><span className='mr-2'><img src="/home4.png" alt="" /></span>Rooms designed with natural light and color harmony based on Ayurvedic principles</p>

                    </div>
                    <div className='cols-span-1 mx-auto'>
                        <img src="/acom2.png" alt="" />
                    </div>
                </div>
            </div>

         <BookingForm />   
    </div>
  )
}
