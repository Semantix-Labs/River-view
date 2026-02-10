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
                <h2 className=" text-3xl md:text-5xl  font-semibold text-gray-900 py-5 tracking-wide uppercase">Our Ayurvedic Experts</h2>
                <p className=" mt-2 justify-center mx-auto   max-w-3xl ">Our team of specially trained Ayurvedic practitioners brings years of expertise and experience. Each professional is dedicated to providing personalized care and guidance on your wellness journey.</p>
            </div>

            <div className="mt-10 max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">

                    <div className="text-center ">
                        <div className="relative mx-auto mt-10 rounded-lg ">
                            <Image className='rounded-lg' src="/Expert/3.png" alt="" layout="fill" objectFit="cover" />
                        </div>
                        <h3 className="mt-4 text-xl font-semibold text-gray-900">Dr.Nalaka Samadhi</h3>
                        <p className="mt-2 text-base ">D.A MGAS (Hons) ,D AC MAFC, Yoga (Dip University of Kelaniya ) ,Ayurvedic Panchakarma (Dip India Kerala) ,Specialist of Pulse Diagnosis (Diagnosis by Traditional Pulse Testing)</p>
                    </div>
                    <div className="text-center">
                        <div className="relative  mx-auto rounded-lg ">
                            <Image className='rounded-lg' src="/Expert/7.png" alt="" layout="fill" objectFit="cover" />
                        </div>
                        <h3 className="mt-4 text-xl font-semibold text-gray-900">Dr.Miss Kumudinee Liyanaarachchi</h3>
                        <p className="mt-2  text-base ">Dr.Miss Kumudinee Liyanaarachchi,    D.A(Srilanka) SLAMC/10250,Trained Lecture in department of Ayurveda,Post Graduate Diploma in Buddhist Ayurvedic Counselling University of Sri lanka Kelaniya 2015,Master Diploma in Buddhist Ayurveda Counselling University of Srilanka Kelaniya 2019,MA in Buddhist Ayurvedic Counselling ,MA in Astrology /Acharya</p>
                    </div>
                    <div className="text-center">
                        <div className="relative  mx-auto mt-10 rounded-lg ">
                            <Image className='rounded-lg' src="/Expert/4.png" alt="" layout="fill" objectFit="cover" />
                        </div>
                        <h3 className="mt-4 text-xl font-semibold text-gray-900">A D Dilki Shanika</h3>
                        <p className="mt-2 text-base ">Panchakarma & Practical Including Massage Therapy With Therory & Practical Including Basic Principles of Ayurveda ,Ayurveda Abhyanga Therapy ,Spa Therapy ., Aromatherapy Massage Manipulations  & Foot Reflexology , (10 years Experience)</p>
                    </div>
                    <div className="text-center">
                        <div className="relative rounded-lg  mx-auto  ">
                            <Image className='rounded-lg' src="/Expert/6.png" alt="" layout="fill" objectFit="cover" />
                        </div>
                        <h3 className="mt-4 text-xl font-semibold text-gray-900">N D Malith Dhilshan</h3>
                        <p className="mt-2 text-base ">Panchakarma & Practical Including Massage Therapy With Therory & Practical Including Basic Principles of Ayurveda ,Ayurveda Abhyanga Therapy ,Spa Therapy . Aromatherapy Massage Manipulations  & Foot Reflexology (10 years Experience)</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AyurvedicExperts;
