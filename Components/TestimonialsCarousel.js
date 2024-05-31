import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from './TestimonialsCarousel.module.css'; // Import CSS module
import { SlArrowRight } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";

// Custom arrow components
const CustomPrevArrow = ({ onClick }) => (
    <button
        type="button"
        onClick={onClick}
        className={`absolute top-1/2 transform -translate-y-1/2 left-0 z-10 ${styles.customArrow}`}
    >
        <SlArrowLeft className='w-10 hidden md:inline  h-10 text-gray-600' />
    </button>
);

const CustomNextArrow = ({ onClick }) => (
    <button
        type="button"
        onClick={onClick}
        className={`absolute top-1/2 transform -translate-y-1/2 right-0 z-10 ${styles.customArrow}`}
    >
        <SlArrowRight className='w-10 hidden md:inline   h-10 text-gray-600' />
    </button>
);

const TestimonialsCarousel = () => {
    return (
        <div className="  mx-5  lg:mx-20 py-8">
            <h2 className="text-5xl font-semibold text-center mb-4">Clients words about us</h2>
            <Carousel
                showArrows={true}
                showThumbs={true}
                showStatus={false}
                infiniteLoop
                autoPlay
                interval={5000}
                className={`relative ${styles.customCarousel}`}
                renderArrowPrev={(onClickHandler, hasPrev, label) =>
                    hasPrev && <CustomPrevArrow onClick={onClickHandler} />
                }
                renderArrowNext={(onClickHandler, hasNext, label) =>
                    hasNext && <CustomNextArrow onClick={onClickHandler} />
                }
            >
                {/* Testimonial slides */}
                <div className="p-4">
                    <p className="text-center lg:mx-20 text-lg italic mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    </p>
                    <div className="flex justify-center items-center">
                        <span className="text-center font-semibold">Name of the Client</span>
                    </div>
                    <div className="flex justify-center mb-10 items-center">
                        <img
                            src="./Frame.png"
                            alt="Client 1"
                            className={`w-5 h-5 rounded-full mx-2 ${styles.customIndicator}`} // Use CSS module class
                        />
                    </div>
                </div>
                <div className="p-4">
                    <p className="text-center lg:mx-20 text-lg italic mb-4">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis"
                    </p>
                    <div className="flex justify-center items-center">
                        <span className="text-center font-semibold">Name of the Client</span>
                    </div>
                    <div className="flex justify-center mb-10 items-center">
                        <img
                            src="./Frame.png"
                            alt="Client 1"
                            className={`w-16 h-16 rounded-full mx-2 ${styles.customIndicator}`} // Use CSS module class
                        />
                    </div>
                </div>
                {/* Add more testimonial slides as needed */}
            </Carousel>
        </div>
    );
};

export default TestimonialsCarousel;
