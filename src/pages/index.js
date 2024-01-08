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
      spaceBetween: 100,
      breakpoints: {
        1535: {
          slidesPerView: 4,
        },
        1023: {
          slidesPerView: 3,
        },
        767: {
          slidesPerView: 2,
        },
        639: {
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
            <swiper-slide><Slide image={'/images/projects/MI7.jpg'} title={'Card 1'} body={'Body 1'} /></swiper-slide>
            <swiper-slide><Slide image={'/images/projects/MI8.png'} title={'Card 1'} body={'Body 1'} /></swiper-slide>
            <swiper-slide><Slide image={'/images/projects/MI4.png'} title={'Card 1'} body={'Body 1'} /></swiper-slide>
            <swiper-slide><Slide image={'/images/projects/MI6.png'} title={'Card 1'} body={'Body 1'} /></swiper-slide>
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
