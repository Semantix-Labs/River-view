// components/LuxuryRooms.js

const LuxuryRooms = () => {
    return (
        <div className="py-20 px-5 lg:px-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <img className="mx-auto justify-center" src="/home3.png" alt="" />
                <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">Our Luxury Rooms</h2>
                <p className="mt-4 max-w-xl mx-auto text-center leading-6  text-gray-500">
                    Our rooms are designed with Ayurvedic principles in mind, featuring natural materials and calming colors. Enjoy amenities such as organic toiletries, yoga mats, and meditation areas.
                </p>
                <div className="mt-10 grid gap-10 grid-cols-1 lg:grid-cols-3">
                    <div className="relative bg-white col-start-1 shadow-lg rounded-lg lg:mt-10">
                        <img className="w-full object-cover" src='/Rooms/1.png' alt="Luxury Room 1" />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center  items-start p-10 opacity-0 hover:opacity-100 transition-opacity duration-300">
                            <h3 className="text-lg font-semibold mt-44 text-white">LUXURY ROOMS</h3>
                            <p className="mt-2 text-white">$200 / Night</p>
                            <p className="mt-3 text-start flex justify-start text-white">Elegantly designed with modern amenities and Ayurvedic principles.</p>
                            <a href="#" className="mt-4 inline-block text-white lg:text-3xl font-semibold">Book Now &rarr;</a>
                        </div>
                    </div>
                    <div className="relative bg-white rounded-lg ">
                        <img className="w-full object-cover" src='/Rooms/2.png' alt="Luxury Room 2" />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start p-10 opacity-0 hover:opacity-100 transition-opacity duration-300 overflow-hidden">
                            <h3 className="text-lg font-semibold  mt-44 text-white uppercase">Suite ROOMS</h3>
                            <p className="mt-2 text-white">$200 / Night</p>
                            <p className="mt-3 text-start  flex justify-start text-white">Spacious and luxurious, perfect for extended stays.</p>
                            <a href="#" className="mt-4 inline-block text-white lg:text-3xl font-semibold">Book Now &rarr;</a>
                        </div>
                    </div>
                    <div className="relative bg-white shadow-lg rounded-lg lg:mt-10">
                        <img className="w-full object-cover" src='/Rooms/3.png' alt="Luxury Room 3" />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start p-10 opacity-0 hover:opacity-100 transition-opacity duration-300">
                            <h3 className="text-lg font-semibold  mt-44 text-white uppercase">Standard Rooms</h3>
                            <p className="mt-2  text-white">$200 / Night</p>
                            <p className="mt-3 text-start flex justify-start text-white">Elegantly designed with modern amenities and Ayurvedic principles.</p>
                            <a href="#" className="mt-4 inline-block text-white lg:text-3xl font-semibold">Book Now &rarr;</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LuxuryRooms;
