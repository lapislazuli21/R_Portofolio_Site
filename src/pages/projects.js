import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';


const projects = () => {
    const projects = [
        {
            img: '/images/projects/MI.png',
            title: "devlog",
            desc: " A multi author blog. Built with Node.js, MongoDB, React, Redux and Tailwind CSS ",
            live: "https://devlogg.onrender.com/",
            code: "https://github.com/Coderamrin/devlog",
        },
        {
            img: '/images/projects/MI2.jpg',
            title: "uilogs",
            desc: "Free website template directory for SaaS and Degital Agency. Built with Bootstrap, JQuery and JavaScript",
            live: "https://uilogs.xyz/",
            code: "https://github.com/Coderamrin/html-templates",
        },
        {
            img: '/images/projects/MI3.jpg',
            title: "css projects",
            desc: "Frontend Mentor challange directory, solved with vanilla CSS",
            live: "https://build-10-css-projects.netlify.app/",
            code: "https://github.com/Coderamrin/build-10-css-projects",
        },
        {
            img: '/images/projects/MI4.png',
            title: "get Inspirred",
            desc: "Quote search app. Used Quotable API for the quotes and React, Redux on the frontend",
            live: "https://get-inspirred.netlify.app/",
            code: "https://github.com/Coderamrin/get-inspired",
        },
    ];

    return (
        <section className="bg-dark text-light p-16" id="projects">
            <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
                <div className="about-info mx-auto mb-5">
                    <h2 className="text-4xl mx-auto font-semibold text-alt mb-5 w-[180px] pb-2">
                        Projects
                    </h2>

                    <p className="pb-5 px-2 text-2xl">
                        These are some of my best projects.
                    </p>
                </div>

                <div className="about-img"></div>
            </div>

            <div className="projects container mx-auto grid md:grid-cols-3 gap-10">
                {projects.map((project, i) => {
                    return (
                        <div className="relative mx-auto" key={i}>
                            <img src={project.img} alt={project.title} width='1080px' height='480px' />
                            <div className="flex absolute left-0 right-0 top-[13px] bottom-0 mx-auto w-[90%] h-[90%]  bg-primary  opacity-0 duration-500 justify-center flex-col hover:opacity-100 ">
                                <p className="py-5 text-center font-bold px-2 text-white">
                                    {project.desc}
                                </p>

                                <div className="mx-auto">
                                    <a
                                        href={project.live}
                                        className="px-5 py-2 bg-secondary hover:bg-blue-600 mr-5 font-bold"
                                    >
                                        Live
                                    </a>
                                    <a
                                        href={project.code}
                                        className="px-5 py-2 bg-secondary hover:bg-blue-800 font-bold"
                                    >
                                        Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default projects;