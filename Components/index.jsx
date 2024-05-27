import { useState } from 'react';

const massageTypes = [
    { id: 1, title: 'Face Massage', image: '/TreatmentMenu/1.png', description: 'Facial massage is a very popular Western beauty treatment to slow down the aging process and achieve younger looking and healthier skin. It is also used to relieve stress, migraine headache, premenstrual syndrome (PMS) and sinus congestion. Simple massage can also be done at home.', tretModel: '/tretModel/1.png' },
    { id: 2, title: 'Foot Massage', image: '/TreatmentMenu/2.png', description: 'Foot massage description goes here.' },
    { id: 3, title: 'Head Massage', image: '/TreatmentMenu/3.png', description: 'Head massage description goes here.' },
    { id: 4, title: 'Intensive Massage', image: '/TreatmentMenu/4.png', description: 'Intensive massage description goes here.' },
    { id: 5, title: 'Powder Massage', image: '/TreatmentMenu/5.png', description: 'Powder massage description goes here.' },
    { id: 6, title: 'Thermo Massage', image: '/TreatmentMenu/6.png', description: 'Thermo massage description goes here.' },
    { id: 7, title: 'Shirodhara', image: '/TreatmentMenu/7.png', description: 'Shirodhara description goes here.' },
    { id: 8, title: 'Panchakarma', image: '/TreatmentMenu/8.png', description: 'Panchakarma description goes here.' },
    { id: 9, title: 'Acupuncture', image: '/TreatmentMenu/9.png', description: 'Panchakarma description goes here.' },
    { id: 10, title: 'Shirovasti', image: '/TreatmentMenu/10.png', description: 'Shirovasti description goes here.' },
    { id: 11, title: 'Herbal Inhalation', image: '/TreatmentMenu/11.png', description: 'Herbal Inhalationdescription goes here.' },
    { id: 12, title: 'Meditation', image: '/TreatmentMenu/12.png', description: 'Meditation description goes here.' },
    { id: 13, title: 'Yoga', image: '/TreatmentMenu/13.png', description: 'Panchakarma description goes here.' },
    { id: 14, title: 'Monk Horoscope', image: '/TreatmentMenu/14.png', description: 'Panchakarma description goes here.' },
    { id: 15, title: 'Steam Bath', image: '/TreatmentMenu/15.png', description: 'Panchakarma description goes here.' },
    { id: 16, title: 'Sincone Massage', image: '/TreatmentMenu/16.png', description: 'Panchakarma description goes here.' },
    { id: 17, title: 'Sharwanga Dhara', image: '/TreatmentMenu/17.png', description: 'Panchakarma description goes here.' },
    { id: 18, title: 'Special Herbals', image: '/TreatmentMenu/18.png', description: 'Panchakarma description goes here.' },
    { id: 19, title: 'Herbal Bath', image: '/TreatmentMenu/19.png', description: 'Panchakarma description goes here.' },
    { id: 20, title: 'Flower Bath', image: '/TreatmentMenu/20.png', description: 'Panchakarma description goes here.' },
    { id: 21, title: 'Body Scrub', image: '/TreatmentMenu/21.png', description: 'Panchakarma description goes here.' },
];

export default function Home() {
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

    return (
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
                                    <span style={{color:'white !important'}} className='underline text-white mt-10'>  Read more &gt;</span>
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
                    <div className="bg-white rounded-lg p-6 max-w-5xl relative">
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
    );
}
