import Image from 'next/image';

const RoomGallery = () => {
    return (
        <div className="lg:px-32 px-5 py-20 ">
            <h2 className="text-3xl font-bold mb-8">Rooms</h2>
            <div className="grid  grid-cols-1 md:grid-cols-12 overflow-hidden  gap-6">

                <div className="relative grid-cols-1 md:grid-rows-4 col-span-6  md:col-span-7 group">
                    <div className='relative'>
                        <Image
                            src="/Room/1.png"
                            alt="Room 1"
                            layout="responsive"
                            width={100}
                            height={100}
                            className="rounded-lg mb-5 row-span-3 "
                        />
                        <div class="absolute inset-0  opacity-60 rounded-md"></div>
                        <div class="absolute inset-0 flex items-center justify-center">
                            <img src="/play.png" alt="" />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 row-span-1 gap-6">
                        <Image
                            src="/Room/4.png"
                            alt="Room 4"
                            layout="responsive"
                            width={100}
                            height={100}
                            className="rounded-lg row-span-1"
                        />
                        <Image
                            src="/Room/4.png"
                            alt="Room 5"
                            layout="responsive"
                            width={100}
                            height={100}
                            className="rounded-lg "
                        />
                    </div>

                </div>

                <div className='grid row-auto col-span-6 md:col-span-5'>
                    <Image
                        src="/Room/2.png"
                        alt="Room 2"
                        layout="responsive"
                        width={100}
                        height={100}
                        className="rounded-lg mb-10 w-full row-span-1"
                    />
                    <Image
                        src="/Room/3.png"
                        alt="Room 3"
                        layout="responsive"
                        width={500}
                        height={500}
                        className="rounded-lg  w-full row-span-1 "
                    />

                </div>

            </div>
        </div>
    );
};

export default RoomGallery;
