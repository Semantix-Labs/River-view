import Image from 'next/image';

function GalleryActivity() {

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
                <div className="mt-10 bg-white lg:px-20   flex flex-col items-center justify-center ">
                    <div className="mb-2">
                        <img src="/home3.png" alt="" />
                    </div>
                </div>
                <h2 className=" text-3xl md:text-5xl  font-semibold  py-5 tracking-wide uppercase">Explore our Activities</h2>
                <p className=" mt-2 justify-center mx-auto  max-w-3xl ">Enhance your stay with our unique experiences, including Ayurvedic cooking classes, herbal garden tours, and cultural excursions.</p>
            </div>

            <div className="mt-10 max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">

                    <div className="text-center ">
                        <div className="relative mx-auto mt-10 rounded-lg ">
                            <img className='' src="/Activity/1.png" alt="" layout="fill" objectFit="cover" />
                        </div>
                        <h3 className="mt-4 text-xl text-start pr-5 font-semibold ">Once-a-week boat safari dinner</h3>
                   </div>
                    <div className="text-center">
                        <div className="relative  mx-auto rounded-lg ">
                            <img src="/Activity/2.png" alt="" layout="fill" objectFit="cover" />
                        </div>
                        <h3 className="mt-4 text-xl text-start pr-5 font-semibold ">Cooking demonstrations</h3>
                        </div>
                    <div className="text-center">
                        <div className="relative  mx-auto mt-10 rounded-lg ">
                            <img src="/Activity/3.png" alt="" layout="fill" objectFit="cover" />
                        </div>
                        <h3 className="mt-4 text-xl text-start pr-5 font-semibold ">Manicure & Pedicure (additional charges apply)</h3>
                          </div>
                    <div className="text-center">
                        <div className="relative  mx-auto rounded-lg ">
                            <img src="/Activity/4.png" alt="" layout="fill" objectFit="cover" />
                        </div>
                        <h3 className="mt-4 text-xl text-start pr-5 font-semibold ">Vegetables from our own plantation</h3>
                            </div>

                </div>
            </div>
        </div>
    );
};

export default GalleryActivity