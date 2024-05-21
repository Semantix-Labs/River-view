import Image from 'next/image';

const AyurvedicExperts = () => {
    const experts = [
        {
            name: "Lorem Ipsum",
            qualification: "Lorem ipsum dolor sit amet, itsdp consectetur adipiscing elit, sed do",
            imageUrl: "/Expert/3.png",
        },
        {
            name: "Lorem Ipsum",
            qualification: "Lorem ipsum dolor sit amet, itsdp consectetur adipiscing elit, sed do",
            imageUrl: "/Expert/7.png",
        },
        {
            name: "Lorem Ipsum",
            qualification: "Lorem ipsum dolor sit amet, itsdp consectetur adipiscing elit, sed do",
            imageUrl: "/Expert/5.png",
        },
        {
            name: "Lorem Ipsum",
            qualification: "Lorem ipsum dolor sit amet, itsdp consectetur adipiscing elit, sed do",
            imageUrl: "/Expert/6.png",
        },
    ];

    return (
        <div className="py-16 px-5 lg:px-20 bg-white">
            <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className=" text-5xl font-semibold text-gray-900 py-5 tracking-wide uppercase">Our Ayurvedic Experts</h2>
                <p className=" mt-2 justify-center mx-auto text-gray-600 max-w-3xl ">Our team of specially trained Ayurvedic practitioners brings years of expertise and experience. Each professional is dedicated to providing personalized care and guidance on your wellness journey.</p>
            </div>

            <div className="mt-10 max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">

                    <div className="text-center ">
                        <div className="relative mx-auto mt-10 rounded-lg ">
                            <img className='' src="/Expert/3.png" alt="" layout="fill" objectFit="cover" />
                        </div>
                        <h3 className="mt-4 text-xl font-semibold text-gray-900">Lorem Ipsum</h3>
                        <p className="mt-2 text-base text-gray-600">Lorem ipsum dolor sit amet, itsdp consectetur adipiscing elit, sed do</p>
                    </div>
                    <div className="text-center">
                        <div className="relative  mx-auto rounded-lg ">
                            <img src="/Expert/7.png" alt="" layout="fill" objectFit="cover" />
                        </div>
                        <h3 className="mt-4 text-xl font-semibold text-gray-900">Lorem Ipsum</h3>
                        <p className="mt-2  text-base text-gray-600">Lorem ipsum dolor sit amet, itsdp consectetur adipiscing elit, sed do</p>
                    </div>
                    <div className="text-center">
                        <div className="relative  mx-auto mt-10 rounded-lg ">
                            <img src="/Expert/5.png" alt="" layout="fill" objectFit="cover" />
                        </div>
                        <h3 className="mt-4 text-xl font-semibold text-gray-900">Lorem Ipsum</h3>
                        <p className="mt-2 text-base text-gray-600">Lorem ipsum dolor sit amet, itsdp consectetur adipiscing elit, sed do</p>
                    </div>
                    <div className="text-center">
                        <div className="relative  mx-auto rounded-lg ">
                            <img src="/Expert/6.png" alt="" layout="fill" objectFit="cover" />
                        </div>
                        <h3 className="mt-4 text-xl font-semibold text-gray-900">Lorem Ipsum</h3>
                        <p className="mt-2 text-base text-gray-600">Lorem ipsum dolor sit amet, itsdp consectetur adipiscing elit, sed do</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AyurvedicExperts;
