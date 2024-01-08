import React from "react";
import 'swiper/css';
import 'swiper/css/navigation';
import { register } from 'swiper/element/bundle';
import { useEffect, useRef } from 'react';
import Slide from '@/components/Slide';


const Projects = () => {

    const swiperRef = useRef(null);
    useEffect(() => {
        // Register Swiper web component
        register();

        // Object with parameters
        const params = {
            slidesPerView: 1,
            centeredSlides: true,
        };

        // Assign it to swiper element
        Object.assign(swiperRef.current, params);

        // initialize swiper
        swiperRef.current.initialize();
    }, []);

    return (
        <section className="bg-dark text-light p-16 pb-32" id="projects">
            <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
                <div className="about-info mx-auto mb-5">
                    <h2 className="text-4xl mx-auto font-semibold text-alt mb-5 w-[180px] pb-2">
                        Projects
                    </h2>

                    <p className="px-2 font-semibold text-secondary text-2xl">
                        Eco-Kalash: A responsible alternative
                    </p>
                </div>
            </div>

            <div className="container mx-auto m-12">
                <swiper-container init="false" ref={swiperRef}>
                    <swiper-slide><img src='/images/projects/FMP.jpg' /></swiper-slide>
                    <swiper-slide><img src='/images/projects/FMP2.jpg' /></swiper-slide>
                    <swiper-slide><img src='/images/projects/FMP3.jpg' /></swiper-slide>
                    <swiper-slide><img src='/images/projects/FMP4.jpg' /></swiper-slide>
                    <swiper-slide><img src='/images/projects/FMP5.png' /></swiper-slide>
                    <swiper-slide><img src='/images/projects/MI.png' /></swiper-slide>
                    <swiper-slide><img src='/images/projects/MI2.jpg' /></swiper-slide>
                    <swiper-slide><img src='/images/projects/MI5.jpg' /></swiper-slide>
                    <swiper-slide><img src='/images/projects/MI7.jpg' /></swiper-slide>
                    <swiper-slide><img src='/images/projects/MI6.png' /></swiper-slide>
                    <swiper-slide><img src='/images/projects/MI8.png' /></swiper-slide>
                </swiper-container>
            </div>
            <div className="mx-auto">
                <img src="/images/projects/FMP6.jpg" height='290' />
            </div>
        </section>
    );
};

export default Projects;