import Layout from '@/components/Layout'
import Image from 'next/image'
import Head from 'next/head'
import TransitionEffect from '@/components/TransitionEffect'
import { register } from 'swiper/element/bundle';
import { useEffect, useRef } from 'react';
import Slide from '@/components/Slide';

export default function Home() {

  const swiperRef = useRef(null);
  useEffect(() => {
    // Register Swiper web component
    register();

    // Object with parameters
    const params = {
      slidesPerView: 4,
      spaceBetween: 80,
      breakpoints: {
        768: {
          slidesPerView: 4,
        },
        496: {
          slidesPerView: 1,
        },
      },
    };

    // Assign it to swiper element
    Object.assign(swiperRef.current, params);

    // initialize swiper
    swiperRef.current.initialize();
  }, []);

  return (
    <>
      <Head>
        <title>Art is Glory | Rajvi Padia</title>
        <meta name="description" content="Portfolio website for a multidisciplinary designer." />
      </Head>
      <TransitionEffect />
      <main className="flex items-center text-dark dark:text-light w-full min-h-screen overflow-y-hidden bg-dark border-dark">
        <Layout className='py-4 md:pt-12 sm:pt-8 !bg-dark'>
          <swiper-container init="false" ref={swiperRef}>
            <swiper-slide ><Slide image={'/images/projects/FMP.jpg'} title={'Card 1'} body={'Body 1'} /></swiper-slide>
            <swiper-slide><Slide image={'/images/projects/FMP2.jpg'} title={'Card 1'} body={'Body 1'} /></swiper-slide>
            <swiper-slide><Slide image={'/images/projects/FMP3.jpg'} title={'Card 1'} body={'Body 1'} /></swiper-slide>
            <swiper-slide><Slide image={'/images/projects/FMP4.jpg'} title={'Card 1'} body={'Body 1'} /></swiper-slide>
            <swiper-slide><Slide image={'/images/projects/FMP5.png'} title={'Card 1'} body={'Body 1'} /></swiper-slide>
            <swiper-slide><Slide image={'/images/projects/FMP6.jpg'} title={'Card 1'} body={'Body 1'} /></swiper-slide>
            <swiper-slide><Slide image={'/images/projects/MI.png'} title={'Card 1'} body={'Body 1'} /></swiper-slide>
            <swiper-slide><Slide image={'/images/projects/MI2.jpg'} title={'Card 1'} body={'Body 1'} /></swiper-slide>
            <swiper-slide><Slide image={'/images/projects/MI3.jpg'} title={'Card 1'} body={'Body 1'} /></swiper-slide>
            <swiper-slide><Slide image={'/images/projects/MI5.jpg'} title={'Card 1'} body={'Body 1'} /></swiper-slide>
          </swiper-container>
        </Layout>
      </main>
    </>
  )
}
