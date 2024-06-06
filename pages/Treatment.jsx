import React from 'react'

import Link from 'next/link';
import { CiLocationOn } from "react-icons/ci";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { useState } from 'react';

const massageTypes = [
    { id: 1, title: 'Face Massage', image: '/TreatmentMenu/1.png', description: 'Facial massage is a very popular Western beauty treatment to slow down the aging process and achieve younger looking and healthier skin. It is also used to relieve stress, migraine headache, premenstrual syndrome (PMS) and sinus congestion. Simple massage can also be done at home', tretModel: '/tretModel/1.png' },
    { id: 2, title: 'Foot Massage', image: '/TreatmentMenu/2.png', description: 'Foot massage in Ayurveda involves applying pressure to specific points on the feet to promote relaxation and healing. It is commonly used to relieve pain, reduce stress, and enhance overall circulation. This treatment can also aid in better sleep and relieve symptoms of anxiety.' , tretModel: '/tretModel/1.png'},
    { id: 3, title: 'Head Massage', image: '/TreatmentMenu/3.png', description: 'Head massage is a therapeutic technique that promotes relaxation and well-being by stimulating the scalp and hair follicles. It helps to relieve headaches, improve concentration, and boost hair growth. Regular sessions can also reduce stress and promote a sense of tranquility. ', tretModel: '/tretModel/1.png' },
    { id: 4, title: 'Intensive Massage', image: '/TreatmentMenu/4.png', description: 'Intensive massage is designed to relieve severe tension in the muscle and the connective tissue or fascia. This type of massage is recommended for individuals who experience consistent pain, are involved in heavy physical activity, or have sustained physical injury.    ', tretModel: '/tretModel/1.png' },
    { id: 5, title: 'Powder Massage', image: '/TreatmentMenu/5.png', description: 'Powder massage uses herbal powders to exfoliate and stimulate the skin, promoting better circulation and cleansing. This treatment is perfect for reducing fat, improving skin texture, and enhancing the skins overall glow. It is also known for its rejuvenating properties.' , tretModel: '/tretModel/1.png'},
    { id: 6, title: 'Thermo Massage', image: '/TreatmentMenu/6.png', description: 'Thermo massage involves the use of heated stones or other tools to provide deep warmth and relaxation to the muscles. This technique helps to ease muscle stiffness, enhance circulation, and reduce stress levels. It is particularly effective for chronic muscle pain.    ' , tretModel: '/tretModel/1.png'},
    { id: 7, title: 'Shirodhara', image: '/TreatmentMenu/7.png', description: 'Shirodhara involves gently pouring liquids over the forehead and is commonly used to treat stress, sleep problems, and neurological disorders. This soothing treatment profoundly relaxes the mind and body, helping to alleviate mental fatigue and improve emotional stability.' , tretModel: '/tretModel/1.png'},
    { id: 8, title: 'Panchakarma', image: '/TreatmentMenu/8.png', description: 'Panchakarma is a series of detoxifying treatments that cleanse the body and restore its innate healing abilities. It involves five procedures that help remove deep-rooted stress and illness-causing toxins. The process rejuvenates the body and enhances vitality and well-being' , tretModel: '/tretModel/1.png'},
    { id: 9, title: 'Acupuncture', image: '/TreatmentMenu/9.png', description: 'Acupuncture is a traditional Chinese medicine technique that involves inserting needles into specific points on the body to balance energy flow. It is used to treat various physical, emotional, and mental conditions, including pain relief, stress management, and overall wellness.' , tretModel: '/tretModel/1.png'},
    { id: 10, title: 'Shirovasti', image: '/TreatmentMenu/10.png', description: 'Shirovasti is an Ayurvedic treatment where a leather cap is placed on the head, and warm medicinal oils are poured into it. This treatment is highly effective in treating nervous system disorders, insomnia, and headaches. It also helps improve mental clarity and focus.    ' , tretModel: '/tretModel/1.png'},
    { id: 11, title: 'Herbal Inhalation', image: '/TreatmentMenu/11.png', description: 'Herbal inhalation involves breathing in medicinal vapors to treat respiratory conditions such as asthma, sinusitis, and allergies. It is also used to enhance mental alertness and cognitive performance, as well as to reduce stress and promote relaxation' , tretModel: '/tretModel/1.png'},
    { id: 12, title: 'Meditation', image: '/TreatmentMenu/12.png', description: 'Meditation is a practice where an individual uses a technique to focus their mind on a particular object, thought, or activity to achieve a mentally clear and emotionally calm state. Regular practice improves stress management, emotional health, and overall well-being.    ' , tretModel: '/tretModel/1.png'},
    { id: 13, title: 'Yoga', image: '/TreatmentMenu/13.png', description: 'Yoga involves physical postures, breathing exercises, and meditation to improve overall health. Regular practice enhances flexibility, strength, balance, and stamina. It also helps reduce stress, anxiety, and depression, promoting a more peaceful and balanced life.    ' , tretModel: '/tretModel/1.png'},
    { id: 14, title: 'Monk Horoscope', image: '/TreatmentMenu/14.png', description: `Monk horoscope involves astrology readings by a monk to predict and guide an individuals future. It helps in understanding life's challenges and opportunities, influencing decisions related to career, relationships, and personal growth based on celestial alignments.` , tretModel: '/tretModel/1.png'},
    { id: 15, title: 'Steam Bath', image: '/TreatmentMenu/15.png', description: `Steam bath involves sitting in a steam room, where hot vapor cleanses the skin, relieves muscle tension, and promotes relaxation. The heat helps to open up the pores, detoxify the body, and reduce symptoms of respiratory issues. It also boosts circulation and hydrates the skin.    `, tretModel: '/tretModel/1.png' },
    { id: 16, title: 'Sincone Massage', image: '/TreatmentMenu/16.png', description: `Sincone massage is a traditional Ayurvedic treatment using rhythmic strokes and herbal oils to rejuvenate the body and stimulate blood circulation. This form of massage is deeply relaxing and can help in detoxifying the body and enhancing emotional well-being.    ` , tretModel: '/tretModel/1.png'},
    { id: 17, title: 'Sharwanga Dhara', image: '/TreatmentMenu/17.png', description: `Sharwanga Dhara is a comprehensive Ayurvedic therapy involving the pouring of warm herbal oils over the body, which helps to soothe and invigorate the tissues. This treatment is excellent for
    relieving joint pain, reducing stress, and promoting a deep sense of relaxation.` },
    { id: 18, title: 'Special Herbals', image: '/TreatmentMenu/18.png', description: `Special Herbal Treatments involve the use of customized herbal preparations to treat specific health issues. These treatments are tailored to individual needs to maximize health benefits, including enhancing immunity, treating chronic ailments, and promoting longevity.    `, tretModel: '/tretModel/1.png' },
    { id: 19, title: 'Herbal Bath', image: '/TreatmentMenu/19.png', description: `Herbal bath uses a blend of medicinal herbs in bath water to cleanse, soothe, and rejuvenate the body. This treatment helps to relieve stress, improve circulation, and enhance skin health. It's also known for its therapeutic effects on the mind and body. `, tretModel: '/tretModel/1.png'},
    { id: 20, title: 'Flower Bath', image: '/TreatmentMenu/20.png', description: `Flower bath involves immersing oneself in a bath infused with fresh aromatic flowers. This luxurious treatment helps to uplift spirits, calm the mind, and beautify the skin. It’s also used for relaxation and to enhance emotional balance and harmony.    ` , tretModel: '/tretModel/1.png'},
    { id: 21, title: 'Body Scrub', image: '/TreatmentMenu/21.png', description: `Body scrub involves using a blend of exfoliating ingredients to remove dead skin cells and promote skin renewal. This treatment leaves the skin feeling soft and smooth, improves circulation, and helps in rejuvenating the skin’s appearance. It’s ideal for enhancing skin health and glow.`, tretModel: '/tretModel/1.png' },
];


export default function Treatment() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedMassage, setSelectedMassage] = useState(null);

    const filteredMassages = massageTypes.filter((massage) =>
        massage.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleShowMore = (massage) => {
        setSelectedMassage(massage);
    };

    const handleClose = () => {
        setSelectedMassage(null);
    };

    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div>
            <nav className="bg-white fixed z-50 min-w-full border-gray-200 dark:bg-gray-900 lg:px-20">
                <div className="max-w-screen flex flex-wrap items-center justify-between mx-auto p-4">

                    <img
                        src="/home2.png"
                        className="h-16 w-16 xl:w-28 xl:h-28"
                        alt="Flowbite Logo"
                    />


                    <button
                        onClick={handleToggle}
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10  justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-default"
                        aria-expanded={isOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                    <div className={`${isOpen ? "block" : "hidden"} w-full lg:block lg:w-auto`} id="navbar-default">
                        <ul className="font-medium flex flex-col p-4  md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 lg:flex-row xl:space-x-8 rtl:space-x-reverse lg:mt-0 lg:border-0 lg:bg-white dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <Link href="/">
                                    <span className="text-customGold hover:border-b-2 hover:border-customGold ml-4 cursor-pointer">Homepage</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/AboutUs">
                                    <span className="text-customGold hover:border-b-2 hover:border-customGold ml-4 cursor-pointer">About Us</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/Accomodation">
                                    <span className="text-customGold hover:border-b-2 hover:border-customGold ml-4 cursor-pointer">Accommodation</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/Treatment">
                                    <span className="text-customGold hover:border-b-2 hover:border-customGold ml-4 cursor-pointer">Atyurvedic Treatments</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/Gallery">
                                    <span className="text-customGold hover:border-b-2 hover:border-customGold ml-4 cursor-pointer">Gallery</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/ContactUs">
                                    <span className="text-customGold hover:border-b-2 hover:border-customGold ml-4 cursor-pointer">Blog</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/ContactUs">
                                    <button className="text-customGold hover:border-b-2 hover:border-customGold ml-4 bg-[#001F2B] py-1 px-2 rounded-lg cursor-pointer">Contact Us</button>
                                </Link>
                            </li>
                            <li>

                            </li>
                        </ul>
                    </div>
                </div>
            </nav> <nav className="bg-white fixed z-50 min-w-full border-gray-200 dark:bg-gray-900 lg:px-20">
                <div className="max-w-screen flex flex-wrap items-center justify-between mx-auto p-4">

                    <img
                        src="/home2.png"
                        className="h-16 w-16 xl:w-28 xl:h-28"
                        alt="Flowbite Logo"
                    />


                    <button
                        onClick={handleToggle}
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10  justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-default"
                        aria-expanded={isOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                    <div className={`${isOpen ? "block" : "hidden"} w-full lg:block lg:w-auto`} id="navbar-default">
                        <ul className="font-medium flex flex-col p-4  md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 lg:flex-row xl:space-x-8 rtl:space-x-reverse lg:mt-0 lg:border-0 lg:bg-white dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <Link href="/">
                                    <span className="text-customGold hover:border-b-2 hover:border-customGold ml-4 cursor-pointer">Homepage</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/AboutUs">
                                    <span className="text-customGold hover:border-b-2 hover:border-customGold ml-4 cursor-pointer">About Us</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/Accomodation">
                                    <span className="text-customGold hover:border-b-2 hover:border-customGold ml-4 cursor-pointer">Accommodation</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/Treatment">
                                    <span className="text-customGold hover:border-b-2 hover:border-customGold ml-4 cursor-pointer">Atyurvedic Treatments</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/Gallery">
                                    <span className="text-customGold hover:border-b-2 hover:border-customGold ml-4 cursor-pointer">Gallery</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/ContactUs">
                                    <span className="text-customGold hover:border-b-2 hover:border-customGold ml-4 cursor-pointer">Blog</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/ContactUs">
                                    <button className="text-customGold hover:border-b-2 hover:border-customGold ml-4 bg-[#001F2B] py-1 px-2 rounded-lg cursor-pointer">Contact Us</button>
                                </Link>
                            </li>
                            <li>

                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* image Section */}
            <section className='pt-20'>
                <div className='relative w-full'>
                    <img className='pb-5 w-screen' src="/Tret.png" alt="" />
                    <div class="absolute inset-0  opacity-60 rounded-md"></div>
                    <div class="absolute inset-0 flex items-center justify-center">
                        <h2 className='text-3xl md:text-7xl lg:text-8xl font-bold justify-center text-center text-white'>Explore our Treatments</h2>
                    </div>
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
                <div className="min-h-screen px-5 lg:px-20 bg-gray-100 p-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="max-w-7xl mt-10 mb-20  justify-center px-4 sm:px-6 lg:px-8 text-center">
                            <form className="max-w-xl mx-auto">
                                <label
                                    htmlFor="default-search"
                                    className="mb-2 text-sm font-medium text-gray-600 sr-only dark:text-white"
                                >
                                    Search
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0  start-0 flex items-center ps-3 pointer-events-none">
                                        <svg
                                            className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                            />
                                        </svg>
                                    </div>
                                    <input
                                        type="search"
                                        id="default-search"
                                        className="block w-full p-4 ps-10 text-sm text-gray-900 border  border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Search by keywords"
                                        required=""
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />

                                </div>
                            </form>

                        </div>
                        <div className="grid mx-auto grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-4">
                            {filteredMassages.map((massage) => (
                                <div key={massage.id} className="relative  hover:brightness-50 group">

                                    <img
                                        src={massage.image}
                                        alt={massage.title}
                                        className=" mx-auto object-cover rounded-lg"
                                    />
                                    <div className="absolute inset-0 translate-y-12  transform scale-0 group-hover:scale-100   bg-opacity-75 flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300">
                                        <button onClick={() => handleShowMore(massage)} className="text-white ">
                                            <span style={{ color: 'white !important' }} className='underline text-white mt-10'>  Read more</span>
                                        </button>
                                    </div>
                                    <div className="mt-2 text-center">
                                        <h3 className="text-lg font-medium">{massage.title}</h3>
                                        <p className="max-w-xl mx-10 text-gray-600">Lorem ipsum dolor sit amet consectetur adipiscing elit</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {selectedMassage && (
                        <div className="fixed  inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                            <div className="bg-white rounded-lg p-6 mt-20 max-w-4xl relative">
                                <button
                                    onClick={handleClose}
                                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                                >
                                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_362_1088)">
                                            <path d="M10.5005 19.25C15.333 19.25 19.2505 15.3325 19.2505 10.5C19.2505 5.66748 15.333 1.74997 10.5005 1.74997C5.668 1.74997 1.75049 5.66748 1.75049 10.5C1.75049 15.3325 5.668 19.25 10.5005 19.25Z" stroke="#909090" stroke-opacity="0.58" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M13.125 7.875L7.875 13.125" stroke="#909090" stroke-opacity="0.58" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M7.875 7.875L13.125 13.125" stroke="#909090" stroke-opacity="0.58" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_362_1088">
                                                <rect width="21" height="21" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                </button>
                                <div className="grid p-8 grid-cols-1 md:grid-cols-2 gap-4">

                                    <div className=' my-auto'>
                                        <div className="mb-2">
                                            <img src="/home3.png" alt="" />
                                        </div>
                                        <h2 className="text-2xl font-semibold mb-2">{selectedMassage.title}</h2>
                                        <p className="text-gray-700">{selectedMassage.description}</p>
                                    </div>
                                    <div className='md:flex '>
                                        <img
                                            src={selectedMassage.image}
                                            alt={selectedMassage.title}
                                            className=" rounded-lg mr-4"
                                        />
                                        <img
                                            src={selectedMassage.tretModel}
                                            alt={selectedMassage.title}
                                            className="w-48 h-48 rounded-lg mt-28 hidden md:inline mr-4"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
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
                                    <a href="#" className="text-gray-400 hover:text-white"><FaFacebookF /></a>
                                    <a href="#" className="text-gray-400 hover:text-white"><FaInstagram /></a>
                                    <a href="#" className="text-gray-400 hover:text-white"><FaLinkedinIn /></a>
                                    <a href="#" className="text-gray-400 hover:text-white"><FaTwitter /></a>
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

        </div>
    )
}
