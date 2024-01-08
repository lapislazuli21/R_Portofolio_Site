import { React, useState } from "react";
import 'swiper/css';
import 'swiper/css/navigation';
import { register } from 'swiper/element/bundle';
import { useEffect, useRef } from 'react';

const Projects = () => {

    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    const swiperRef = useRef(null);
    useEffect(() => {
        // Register Swiper web component
        register();

        // Object with parameters
        const params = {
            spaceBetween: 10,
            slidesPerView: 1,
            centeredSlides: true,
            autoplay: {
                pauseOnMouseEnter: true,
            },
        };

        // Assign it to swiper element
        Object.assign(swiperRef.current, params);

        // initialize swiper
        swiperRef.current.initialize();
    }, []);

    return (
        <section className="bg-dark text-light p-16 pb-32" id="projects">
            <script type="module" src="https://unpkg.com/@material-tailwind/html@latest/scripts/tooltip.js"></script>
            <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
                <div className="about-info mx-auto mb-5">
                    <h2 className="text-5xl mx-auto font-semibold text-center text-alt mb-5 w-[180px] pb-2">
                        Projects
                    </h2>

                    <p data-tooltip-target="tooltip-bottom" className="px-2 font-semibold text-center cursor-pointer underline text-secondary text-3xl" onClick={handleClick}>
                        Eco-Kalash: A responsible alternative
                    </p>
                    <div data-tooltip="tooltip-bottom" data-tooltip-placement="bottom" className="absolute z-50 whitespace-normal break-words rounded-lg bg-alt py-1.5 px-3 font-sans text-sm font-normal text-white focus:outline-none">
                        Click for project description
                    </div>
                </div>
            </div>

            <div className="relative container mx-auto m-12 hover:cursor-pointer">
                <swiper-container init="false" ref={swiperRef}>
                    <swiper-slide><img src='/images/projects/MI.png' />{
                        isOpen ?
                            <div className={` ${isOpen ? 'opacity-100' : 'opacity-0'} flex absolute left-0 right-0 top-[30px] rounded-xl bottom-0 mx-auto w-[90%] h-[90%]  bg-secondary duration-500 justify-center flex-col`}>
                                <p className="py-4 text-center font-semibold px-8 text-dark">
                                    This project seeks to revolutionize Indian weddings by mitigating the environmental impact
                                    of plastic waste, specifically targeting the prevalent use of packaged drinking water bottles.
                                    By reintroducing the traditional practice of utilizing Terracotta clay vessels, redesigned with
                                    a modern aesthetic, and adorned with traditional Madhubani art motifs, the initiative aims
                                    to provide an eco-friendly and visually appealing alternative. These multifunctional water
                                    pots not only serve as vessels for guests but also double as decorative centrepieces,
                                    reducing the need for additional environmental resources. Committed to sustainability, the
                                    supporting elements are crafted from reused materials, exemplifying a dedication to
                                    responsible consumption and a celebration of India&#39;s cultural heritage through a
                                    contemporary lens.
                                </p>
                                <p className="py-4 text-center font-semibold px-8 text-wrap text-light">
                                    Project type- MA Art and Design: Interdisciplinary Practices
                                    Final Major Project- Ecological Design
                                </p>
                                <p className="py-4 text-center font-semibold px-8 text-light">
                                    Process: Ceramics- Coiling technique; Editing tools- Adobe Photoshop, Procreate; Creative
                                    Research
                                </p>
                            </div>
                            : null
                    }</swiper-slide>
                    <swiper-slide><img src='/images/projects/MI2.JPG' />{
                        isOpen ?
                            <div className={` ${isOpen ? 'opacity-100' : 'opacity-0'} flex absolute left-0 right-0 top-[30px] rounded-xl bottom-0 mx-auto w-[90%] h-[90%]  bg-secondary duration-500 justify-center flex-col`}>
                                <p className="py-4 text-center font-semibold px-8 text-dark">
                                    This project seeks to revolutionize Indian weddings by mitigating the environmental impact
                                    of plastic waste, specifically targeting the prevalent use of packaged drinking water bottles.
                                    By reintroducing the traditional practice of utilizing Terracotta clay vessels, redesigned with
                                    a modern aesthetic, and adorned with traditional Madhubani art motifs, the initiative aims
                                    to provide an eco-friendly and visually appealing alternative. These multifunctional water
                                    pots not only serve as vessels for guests but also double as decorative centrepieces,
                                    reducing the need for additional environmental resources. Committed to sustainability, the
                                    supporting elements are crafted from reused materials, exemplifying a dedication to
                                    responsible consumption and a celebration of India&#39;s cultural heritage through a
                                    contemporary lens.
                                </p>

                                <p className="py-4 text-center font-semibold px-8 text-wrap text-light">
                                    Project type- MA Art and Design: Interdisciplinary Practices
                                    Final Major Project- Ecological Design
                                </p>
                                <p className="py-4 text-center font-semibold px-8 text-light">
                                    Process: Ceramics- Coiling technique; Editing tools- Adobe Photoshop, Procreate; Creative
                                    Research
                                </p>
                            </div>
                            : null
                    }</swiper-slide>
                    <swiper-slide><img src='/images/projects/MI5.JPG' />{
                        isOpen ?
                            <div className={` ${isOpen ? 'opacity-100' : 'opacity-0'} flex absolute left-0 right-0 top-[30px] rounded-xl bottom-0 mx-auto w-[90%] h-[90%]  bg-secondary duration-500 justify-center flex-col`}>
                                <p className="py-4 text-center font-semibold px-8 text-dark">
                                    This project seeks to revolutionize Indian weddings by mitigating the environmental impact
                                    of plastic waste, specifically targeting the prevalent use of packaged drinking water bottles.
                                    By reintroducing the traditional practice of utilizing Terracotta clay vessels, redesigned with
                                    a modern aesthetic, and adorned with traditional Madhubani art motifs, the initiative aims
                                    to provide an eco-friendly and visually appealing alternative. These multifunctional water
                                    pots not only serve as vessels for guests but also double as decorative centrepieces,
                                    reducing the need for additional environmental resources. Committed to sustainability, the
                                    supporting elements are crafted from reused materials, exemplifying a dedication to
                                    responsible consumption and a celebration of India&#39;s cultural heritage through a
                                    contemporary lens.
                                </p>

                                <p className="py-4 text-center font-semibold px-8 text-wrap text-light">
                                    Project type- MA Art and Design: Interdisciplinary Practices
                                    Final Major Project- Ecological Design
                                </p>
                                <p className="py-4 text-center font-semibold px-8 text-light">
                                    Process: Ceramics- Coiling technique; Editing tools- Adobe Photoshop, Procreate; Creative
                                    Research
                                </p>
                            </div>
                            : null
                    }</swiper-slide>
                    <swiper-slide><img src='/images/projects/MI6.png' />{
                        isOpen ?
                            <div className={` ${isOpen ? 'opacity-100' : 'opacity-0'} flex absolute left-0 right-0 top-[30px] rounded-xl bottom-0 mx-auto w-[90%] h-[90%]  bg-secondary duration-500 justify-center flex-col`}>
                                <p className="py-4 text-center font-semibold px-8 text-dark">
                                    This project seeks to revolutionize Indian weddings by mitigating the environmental impact
                                    of plastic waste, specifically targeting the prevalent use of packaged drinking water bottles.
                                    By reintroducing the traditional practice of utilizing Terracotta clay vessels, redesigned with
                                    a modern aesthetic, and adorned with traditional Madhubani art motifs, the initiative aims
                                    to provide an eco-friendly and visually appealing alternative. These multifunctional water
                                    pots not only serve as vessels for guests but also double as decorative centrepieces,
                                    reducing the need for additional environmental resources. Committed to sustainability, the
                                    supporting elements are crafted from reused materials, exemplifying a dedication to
                                    responsible consumption and a celebration of India&#39;s cultural heritage through a
                                    contemporary lens.
                                </p>

                                <p className="py-4 text-center font-semibold px-8 text-wrap text-light">
                                    Project type- MA Art and Design: Interdisciplinary Practices
                                    Final Major Project- Ecological Design
                                </p>
                                <p className="py-4 text-center font-semibold px-8 text-light">
                                    Process: Ceramics- Coiling technique; Editing tools- Adobe Photoshop, Procreate; Creative
                                    Research
                                </p>
                            </div>
                            : null
                    }</swiper-slide>
                    <swiper-slide><img src='/images/projects/MI7.JPG' />{
                        isOpen ?
                            <div className={` ${isOpen ? 'opacity-100' : 'opacity-0'} flex absolute left-0 right-0 top-[30px] rounded-xl bottom-0 mx-auto w-[90%] h-[90%]  bg-secondary duration-500 justify-center flex-col`}>
                                <p className="py-4 text-center font-semibold px-8 text-dark">
                                    This project seeks to revolutionize Indian weddings by mitigating the environmental impact
                                    of plastic waste, specifically targeting the prevalent use of packaged drinking water bottles.
                                    By reintroducing the traditional practice of utilizing Terracotta clay vessels, redesigned with
                                    a modern aesthetic, and adorned with traditional Madhubani art motifs, the initiative aims
                                    to provide an eco-friendly and visually appealing alternative. These multifunctional water
                                    pots not only serve as vessels for guests but also double as decorative centrepieces,
                                    reducing the need for additional environmental resources. Committed to sustainability, the
                                    supporting elements are crafted from reused materials, exemplifying a dedication to
                                    responsible consumption and a celebration of India&#39;s cultural heritage through a
                                    contemporary lens.
                                </p>

                                <p className="py-4 text-center font-semibold px-8 text-wrap text-light">
                                    Project type- MA Art and Design: Interdisciplinary Practices
                                    Final Major Project- Ecological Design
                                </p>
                                <p className="py-4 text-center font-semibold px-8 text-light">
                                    Process: Ceramics- Coiling technique; Editing tools- Adobe Photoshop, Procreate; Creative
                                    Research
                                </p>
                            </div>
                            : null
                    }</swiper-slide>
                    <swiper-slide><img src='/images/projects/MI8.png' />
                        {
                            isOpen ?
                                <div className={` ${isOpen ? 'opacity-100' : 'opacity-0'} flex absolute left-0 right-0 top-[30px] rounded-xl bottom-0 mx-auto w-[90%] h-[90%]  bg-secondary duration-500 justify-center flex-col`}>
                                    <p className="py-4 text-center font-semibold px-8 text-dark">
                                        This project seeks to revolutionize Indian weddings by mitigating the environmental impact
                                        of plastic waste, specifically targeting the prevalent use of packaged drinking water bottles.
                                        By reintroducing the traditional practice of utilizing Terracotta clay vessels, redesigned with
                                        a modern aesthetic, and adorned with traditional Madhubani art motifs, the initiative aims
                                        to provide an eco-friendly and visually appealing alternative. These multifunctional water
                                        pots not only serve as vessels for guests but also double as decorative centrepieces,
                                        reducing the need for additional environmental resources. Committed to sustainability, the
                                        supporting elements are crafted from reused materials, exemplifying a dedication to
                                        responsible consumption and a celebration of India&#39;s cultural heritage through a
                                        contemporary lens.
                                    </p>
                                    <p className="py-4 text-center font-semibold px-8 text-dark">
                                        Main Pictures: 8
                                        Miro board pictures: 6
                                    </p>
                                    <p className="py-4 text-center font-semibold px-8 text-wrap text-light">
                                        Project type- MA Art and Design: Interdisciplinary Practices
                                        Final Major Project- Ecological Design
                                    </p>
                                    <p className="py-4 text-center font-semibold px-8 text-light">
                                        Process: Ceramics- Coiling technique; Editing tools- Adobe Photoshop, Procreate; Creative
                                        Research
                                    </p>
                                </div>
                                : null
                        }</swiper-slide>
                    <swiper-slide><img src='/images/projects/FMP.jpg' />{
                        isOpen ?
                            <div className={` ${isOpen ? 'opacity-100' : 'opacity-0'} flex absolute left-0 right-0 top-[30px] rounded-xl bottom-0 mx-auto w-[90%] h-[90%]  bg-secondary duration-500 justify-center flex-col`}>
                                <p className="py-4 text-center font-semibold px-8 text-dark">
                                    This project seeks to revolutionize Indian weddings by mitigating the environmental impact
                                    of plastic waste, specifically targeting the prevalent use of packaged drinking water bottles.
                                    By reintroducing the traditional practice of utilizing Terracotta clay vessels, redesigned with
                                    a modern aesthetic, and adorned with traditional Madhubani art motifs, the initiative aims
                                    to provide an eco-friendly and visually appealing alternative. These multifunctional water
                                    pots not only serve as vessels for guests but also double as decorative centrepieces,
                                    reducing the need for additional environmental resources. Committed to sustainability, the
                                    supporting elements are crafted from reused materials, exemplifying a dedication to
                                    responsible consumption and a celebration of India&#39;s cultural heritage through a
                                    contemporary lens.
                                </p>

                                <p className="py-4 text-center font-semibold px-8 text-wrap text-light">
                                    Project type- MA Art and Design: Interdisciplinary Practices
                                    Final Major Project- Ecological Design
                                </p>
                                <p className="py-4 text-center font-semibold px-8 text-light">
                                    Process: Ceramics- Coiling technique; Editing tools- Adobe Photoshop, Procreate; Creative
                                    Research
                                </p>
                            </div>
                            : null
                    }</swiper-slide>
                    <swiper-slide><img src='/images/projects/FMP2.jpg' />{
                        isOpen ?
                            <div className={` ${isOpen ? 'opacity-100' : 'opacity-0'} flex absolute left-0 right-0 top-[30px] rounded-xl bottom-0 mx-auto w-[90%] h-[90%]  bg-secondary duration-500 justify-center flex-col`}>
                                <p className="py-4 text-center font-semibold px-8 text-dark">
                                    This project seeks to revolutionize Indian weddings by mitigating the environmental impact
                                    of plastic waste, specifically targeting the prevalent use of packaged drinking water bottles.
                                    By reintroducing the traditional practice of utilizing Terracotta clay vessels, redesigned with
                                    a modern aesthetic, and adorned with traditional Madhubani art motifs, the initiative aims
                                    to provide an eco-friendly and visually appealing alternative. These multifunctional water
                                    pots not only serve as vessels for guests but also double as decorative centrepieces,
                                    reducing the need for additional environmental resources. Committed to sustainability, the
                                    supporting elements are crafted from reused materials, exemplifying a dedication to
                                    responsible consumption and a celebration of India&#39;s cultural heritage through a
                                    contemporary lens.
                                </p>

                                <p className="py-4 text-center font-semibold px-8 text-wrap text-light">
                                    Project type- MA Art and Design: Interdisciplinary Practices
                                    Final Major Project- Ecological Design
                                </p>
                                <p className="py-4 text-center font-semibold px-8 text-light">
                                    Process: Ceramics- Coiling technique; Editing tools- Adobe Photoshop, Procreate; Creative
                                    Research
                                </p>
                            </div>
                            : null
                    }</swiper-slide>
                    <swiper-slide><img src='/images/projects/FMP3.jpg' />{
                        isOpen ?
                            <div className={` ${isOpen ? 'opacity-100' : 'opacity-0'} flex absolute left-0 right-0 top-[30px] rounded-xl bottom-0 mx-auto w-[90%] h-[90%]  bg-secondary duration-500 justify-center flex-col`}>
                                <p className="py-4 text-center font-semibold px-8 text-dark">
                                    This project seeks to revolutionize Indian weddings by mitigating the environmental impact
                                    of plastic waste, specifically targeting the prevalent use of packaged drinking water bottles.
                                    By reintroducing the traditional practice of utilizing Terracotta clay vessels, redesigned with
                                    a modern aesthetic, and adorned with traditional Madhubani art motifs, the initiative aims
                                    to provide an eco-friendly and visually appealing alternative. These multifunctional water
                                    pots not only serve as vessels for guests but also double as decorative centrepieces,
                                    reducing the need for additional environmental resources. Committed to sustainability, the
                                    supporting elements are crafted from reused materials, exemplifying a dedication to
                                    responsible consumption and a celebration of India&#39;s cultural heritage through a
                                    contemporary lens.
                                </p>

                                <p className="py-4 text-center font-semibold px-8 text-wrap text-light">
                                    Project type- MA Art and Design: Interdisciplinary Practices
                                    Final Major Project- Ecological Design
                                </p>
                                <p className="py-4 text-center font-semibold px-8 text-light">
                                    Process: Ceramics- Coiling technique; Editing tools- Adobe Photoshop, Procreate; Creative
                                    Research
                                </p>
                            </div>
                            : null
                    }</swiper-slide>
                    <swiper-slide><img src='/images/projects/FMP4.jpg' />{
                        isOpen ?
                            <div className={` ${isOpen ? 'opacity-100' : 'opacity-0'} flex absolute left-0 right-0 top-[30px] rounded-xl bottom-0 mx-auto w-[90%] h-[90%]  bg-secondary duration-500 justify-center flex-col`}>
                                <p className="py-4 text-center font-semibold px-8 text-dark">
                                    This project seeks to revolutionize Indian weddings by mitigating the environmental impact
                                    of plastic waste, specifically targeting the prevalent use of packaged drinking water bottles.
                                    By reintroducing the traditional practice of utilizing Terracotta clay vessels, redesigned with
                                    a modern aesthetic, and adorned with traditional Madhubani art motifs, the initiative aims
                                    to provide an eco-friendly and visually appealing alternative. These multifunctional water
                                    pots not only serve as vessels for guests but also double as decorative centrepieces,
                                    reducing the need for additional environmental resources. Committed to sustainability, the
                                    supporting elements are crafted from reused materials, exemplifying a dedication to
                                    responsible consumption and a celebration of India&#39;s cultural heritage through a
                                    contemporary lens.
                                </p>

                                <p className="py-4 text-center font-semibold px-8 text-wrap text-light">
                                    Project type- MA Art and Design: Interdisciplinary Practices
                                    Final Major Project- Ecological Design
                                </p>
                                <p className="py-4 text-center font-semibold px-8 text-light">
                                    Process: Ceramics- Coiling technique; Editing tools- Adobe Photoshop, Procreate; Creative
                                    Research
                                </p>
                            </div>
                            : null
                    }</swiper-slide>
                    <swiper-slide><img src='/images/projects/FMP5.png' />{
                        isOpen ?
                            <div className={` ${isOpen ? 'opacity-100' : 'opacity-0'} flex absolute left-0 right-0 top-[30px] rounded-xl bottom-0 mx-auto w-[90%] h-[90%]  bg-secondary duration-500 justify-center flex-col`}>
                                <p className="py-4 text-center font-semibold px-8 text-dark">
                                    This project seeks to revolutionize Indian weddings by mitigating the environmental impact
                                    of plastic waste, specifically targeting the prevalent use of packaged drinking water bottles.
                                    By reintroducing the traditional practice of utilizing Terracotta clay vessels, redesigned with
                                    a modern aesthetic, and adorned with traditional Madhubani art motifs, the initiative aims
                                    to provide an eco-friendly and visually appealing alternative. These multifunctional water
                                    pots not only serve as vessels for guests but also double as decorative centrepieces,
                                    reducing the need for additional environmental resources. Committed to sustainability, the
                                    supporting elements are crafted from reused materials, exemplifying a dedication to
                                    responsible consumption and a celebration of India&#39;s cultural heritage through a
                                    contemporary lens.
                                </p>

                                <p className="py-4 text-center font-semibold px-8 text-wrap text-light">
                                    Project type- MA Art and Design: Interdisciplinary Practices
                                    Final Major Project- Ecological Design
                                </p>
                                <p className="py-4 text-center font-semibold px-8 text-light">
                                    Process: Ceramics- Coiling technique; Editing tools- Adobe Photoshop, Procreate; Creative
                                    Research
                                </p>
                            </div>
                            : null
                    }</swiper-slide>
                </swiper-container>
            </div>
            <div className="text-center flex items-center justify-center mx-auto">
                <img src="/images/projects/FMP6.jpg" height='290' />
            </div>
        </section>
    );
};

export default Projects;