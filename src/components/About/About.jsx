import  { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-fade';
import 'animate.css';
import { Helmet } from 'react-helmet-async';

const About = () => {
    useEffect(() => {
        const swiper = new Swiper('.swiper-container', {

            slidesPerView: 1,
            spaceBetween: 30,
        });

        return () => {
            swiper.destroy();
        };
    }, []);

    return (
        <div className='mt-20'>
            <Helmet>
                <title>About</title>
            </Helmet>

            <div className="container animate__animated animate__bounceIn mx-auto px-2 md:px-0 py-12">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold text-center animate__animated animate__bounceIn mb-8">Welcome to Regal Residences</h1>
                    <p className="text-lg text-gray-700 mb-6">
                        At Regal Residences, we don't just provide accommodation; we craft unforgettable experiences. Nestled in the heart of luxury, we redefine hospitality with elegance, sophistication, and personalized service.
                    </p>
                    <p className="text-lg text-gray-700 mb-6">
                        Our passion for excellence drives us to curate the finest selection of rooms and suites, each meticulously designed to offer comfort, style, and indulgence. From breathtaking views to opulent amenities, every aspect of your stay is meticulously tailored to exceed your expectations.
                    </p>
                    <p className="text-lg text-gray-700 mb-6">
                        But luxury isn't just about lavishness; it's about creating moments that linger in your memory. Whether you're here for business or leisure, our dedicated team ensures that every detail is perfect, allowing you to relax, rejuvenate, and immerse yourself in unparalleled luxury.
                    </p>
                    <p className="text-lg text-gray-700 mb-6">
                        We invite you to embark on a journey of discovery, where every stay is a celebration of refined living and exceptional hospitality. Experience the epitome of luxury at Regal Residences and let us redefine your notion of extravagance.
                    </p>
                </div>
            </div>

            <div className='mt-20'>
                <div className="swiper-container animate__animated   animate__bounceInUp container mx-auto py-12" style={{ overflowX: 'hidden' }}>
                    <h1 className="text-4xl font-bold text-center mb-10  ">Meet Our Experts</h1>
                    <div className="swiper-wrapper">
                        <div className='swiper-slide flex justify-center items-center'>
                            <div className="text-center">
                                <img  src="https://www.shutterstock.com/image-photo/smiling-young-middle-eastern-man-600nw-2063524544.jpg" alt="Team Member 1" className=" mb-4 mx-auto w-[300px] rounded-2xl" />
                                <h1 className="text-2xl font-bold text-gray-800">John Tom</h1>
                                <p className="text-lg text-gray-600">Chief Executive Officer</p>
                            </div>
                        </div>
                        <div className="swiper-slide flex justify-center items-center">
                            <div className="text-center">
                                <img src="https://media.istockphoto.com/id/1437931505/photo/businessman-digital-tablet-or-strategy-planning-in-hotel-conference-lobby-or-airport-travel.webp?b=1&s=170667a&w=0&k=20&c=Vv-Jqr3AkIYRCwup76BHnKzRrzvwQ6HmKSrmLcHPpfQ=" alt="Team Member 2" className=" rounded-2xl mb-4 mx-auto w-[300px]" />
                                <h1 className="text-2xl font-bold text-gray-800">Jane Smith</h1>
                                <p className="text-lg text-gray-600">Chief Operating Officer</p>
                            </div>
                        </div>
                        <div className="swiper-slide flex justify-center items-center">
                            <div className="text-center">
                                <img src="https://media.northwest.education/wp-content/uploads/2022/02/05162943/pexels-tima-miroshnichenko-5717512-680x380.jpg" alt="Team Member 3" className=" mb-4 mx-auto rounded-2xl w-[300px]" />
                                <h1 className="text-2xl font-bold text-gray-800">Lina Rose</h1>
                                <p className="text-lg text-gray-600">Marketing Director</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
