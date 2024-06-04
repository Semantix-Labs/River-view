import Navbar2 from '@/components/Navbar2'
import React from 'react'
import Link from 'next/link';

const events = [
    { id: 1, date: '15 June 2024 | 6:00 PM', title: 'Lorem Ipsum Event', description: 'Lorem ipsum dolor sit amet, ...' },
    { id: 2, date: '25 June 2024 | 5:00 PM', title: 'Lorem Ipsum Event', description: 'Lorem ipsum dolor sit amet, ...' },
    { id: 3, date: '05 July 2024 | 10:00 AM', title: 'Lorem Ipsum Event', description: 'Lorem ipsum dolor sit amet, ...' },
    { id: 4, date: '12 July 2024 | 6:30 PM', title: 'Lorem Ipsum Event', description: 'Lorem ipsum dolor sit amet, ...' },
];

function Blog() {
    return (
        <div className='min-h-screen'>

            <section>
                <Navbar2 />
            </section>

            <section className='pt-20'>
                <div className='relative w-full'>
                    <img className='pb-5 w-screen' src="/Blog.png" alt="" />
                    <div class="absolute inset-0  opacity-60 rounded-md"></div>
                    <div class="absolute inset-0 flex items-center justify-center">
                        <h2 className='text-3xl md:text-7xl lg:text-8xl font-bold justify-center text-center text-white'>News & Blogs
                            <p className='text-[8px] lg:px-48 lg:text-xl text-center  font-bold text-white'>Stay updated with the latest in Ayurvedic wellness trends and events at River View Villas. Read articles and guest experiences to learn more about our offerings.
                            </p>
                        </h2>
                    </div>
                </div>
            </section>


            <section>
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {events.map(event => (
                            <div key={event.id} className="p-4 border rounded shadow">
                                <img src={`/images/event-${event.id}.jpg`} alt={event.title} className="w-full h-40 object-cover mb-4" />
                                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                                <p className="text-gray-600 mb-4">{event.date}</p>
                                <p className="text-gray-800 mb-4">{event.description}</p>
                                <Link href={`/event/${event.id}`}>
                                    <p className="text-blue-500 hover:underline">Learn more</p>
                                </Link>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center mt-8">
                        <button className="px-4 py-2 mx-2 border rounded">1</button>
                        <button className="px-4 py-2 mx-2 border rounded">2</button>
                        <button className="px-4 py-2 mx-2 border rounded">3</button>
                        <button className="px-4 py-2 mx-2 border rounded">Next</button>
                        <button className="px-4 py-2 mx-2 border rounded">Last</button>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Blog