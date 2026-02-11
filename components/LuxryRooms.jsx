// components/LuxuryRooms.js

import Image from 'next/image';

const rooms = [
    {
        title: "Luxury Rooms",
        description: "Elegantly designed with modern amenities and Ayurvedic principles.",
        price: "$100 / Night",
        image: "/path-to-luxury-room-image.jpg",
        link: "/book-luxury-room"
    },
    {
        title: "Suite Rooms",
        description: "Spacious and luxurious, perfect for extended stays.",
        price: "$200 / Night",
        image: "/path-to-suite-room-image.jpg",
        link: "/book-suite-room"
    },
    {
        title: "Standard Rooms",
        description: "Comfortable and affordable options with essential amenities.",
        price: "$80 / Night",
        image: "/path-to-standard-room-image.jpg",
        link: "/book-standard-room"
    },
    {
        title: "Standard Rooms",
        description: "Comfortable and affordable options with essential amenities.",
        price: "$80 / Night",
        image: "/path-to-standard-room-image.jpg",
        link: "/book-standard-room"
    }
];

const LuxuryRooms = () => {
    return (
        <div className="flex flex-wrap justify-center mx-5  gap-4 md:space-x-4 space-y-4">

            <div className="relative xl:w-72 xl:h-96 lg:w-56 lg:h-72 md:w-40 md:h-56 w-80 h-96 overflow-hidden mt-20  rounded-lg shadow-lg">
                <Image

                    src='/Rooms/1.png'
                    layout="fill"
                    objectFit="cover"
                    alt="Luxury Room"
                    className="transition-transform duration-500 ease-in-out transform hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                    <p className="text-lg text-[#FFFFFF] font-bold mt-4">$100 / Night</p>
                    <h3 className="text-lg text-white font-semibold">Luxury Rooms</h3>
                    <p className="text-sm text-white  mt-1">Elegantly designed with modern amenities and Ayurvedic principles.</p>

                    <a href='#' className="mt-4 inline-block   text-start text-xl py-2 rounded-lg">
                        Book Now <i className='pt-1 pl-2'><svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.49992 17.9166C13.8722 17.9166 17.4166 14.3722 17.4166 9.99998C17.4166 5.62773 13.8722 2.08331 9.49992 2.08331C5.12766 2.08331 1.58325 5.62773 1.58325 9.99998C1.58325 14.3722 5.12766 17.9166 9.49992 17.9166Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M9.5 13.1666L12.6667 9.99998L9.5 6.83331" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M6.33325 10H12.6666" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        </i>
                    </a>
                </div>
            </div>

            <div className="relative xl:w-72 xl:h-96 lg:w-56 lg:h-72 md:w-40 md:h-56 w-80 h-96   overflow-hidden rounded-lg  shadow-lg">
                <Image

                    src='/Rooms/2.png'
                    layout="fill"
                    objectFit="cover"
                    alt="Luxury Room"
                    className="transition-transform duration-500 ease-in-out transform hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                    <p className="text-lg text-[#FFFFFF] font-bold mt-4">$100 / Night</p>
                    <h3 className="text-lg text-white font-semibold">Luxury Rooms</h3>
                    <p className="text-sm text-white  mt-1">Elegantly designed with modern amenities and Ayurvedic principles.</p>

                    <a href='#' className="mt-4 inline-block  text-start text-xl py-2 rounded-lg">
                        Book Now <i className='pt-1 pl-2'><svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.49992 17.9166C13.8722 17.9166 17.4166 14.3722 17.4166 9.99998C17.4166 5.62773 13.8722 2.08331 9.49992 2.08331C5.12766 2.08331 1.58325 5.62773 1.58325 9.99998C1.58325 14.3722 5.12766 17.9166 9.49992 17.9166Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M9.5 13.1666L12.6667 9.99998L9.5 6.83331" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M6.33325 10H12.6666" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        </i>
                    </a>
                </div>
            </div>
            <div className="relative xl:w-72 xl:h-96 lg:w-56 lg:h-72 md:w-40 md:h-56 w-80 h-96  imgemg overflow-hidden  rounded-lg shadow-lg">
                <Image

                    src='/Rooms/3.png'
                    layout="fill"
                    objectFit="cover"
                    alt="Luxury Room"
                    className="transition-transform  duration-500 ease-in-out transform hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                    <p className="text-lg text-[#FFFFFF] font-bold mt-4">$100 / Night</p>
                    <h3 className="text-lg text-white font-semibold">Luxury Rooms</h3>
                    <p className="text-sm text-white  mt-1">Elegantly designed with modern amenities and Ayurvedic principles.</p>

                    <a href='#' className="mt-4 inline   text-start text-xl py-2 rounded-lg">
                        Book Now <i className='pt-1 pl-2'><svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.49992 17.9166C13.8722 17.9166 17.4166 14.3722 17.4166 9.99998C17.4166 5.62773 13.8722 2.08331 9.49992 2.08331C5.12766 2.08331 1.58325 5.62773 1.58325 9.99998C1.58325 14.3722 5.12766 17.9166 9.49992 17.9166Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M9.5 13.1666L12.6667 9.99998L9.5 6.83331" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M6.33325 10H12.6666" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        </i>
                    </a>
                </div>
            </div>
            <div className="relative xl:w-72 xl:h-96 lg:w-56 lg:h-72 md:w-40 md:h-56 w-80 h-96  overflow-hidden rounded-lg shadow-lg">
                <Image

                    src='/Rooms/1.png'
                    layout="fill"
                    objectFit="cover"
                    alt="Luxury Room"
                    className="transition-transform duration-500 ease-in-out transform hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                    <p className="text-lg text-[#FFFFFF] font-bold mt-4">$100 / Night</p>
                    <h3 className="text-lg text-white font-semibold">Luxury Rooms</h3>
                    <p className="text-sm text-white  mt-1">Elegantly designed with modern amenities and Ayurvedic principles.</p>

                    <a href='#' className="mt-4 inline-block   text-start text-xl py-2 rounded-lg">
                        Book Now <i className='pt-1 pl-2'><svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.49992 17.9166C13.8722 17.9166 17.4166 14.3722 17.4166 9.99998C17.4166 5.62773 13.8722 2.08331 9.49992 2.08331C5.12766 2.08331 1.58325 5.62773 1.58325 9.99998C1.58325 14.3722 5.12766 17.9166 9.49992 17.9166Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M9.5 13.1666L12.6667 9.99998L9.5 6.83331" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M6.33325 10H12.6666" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        </i>
                    </a>
                </div>
            </div>


        </div>
    );
};

export default LuxuryRooms;
