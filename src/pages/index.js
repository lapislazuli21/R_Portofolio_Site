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
      slidesPerView: 1,
      centeredSlides: true,
      autoplay: true,
      freemode: true,
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
        <Layout className='py-4 !bg-dark cursor-pointer'>
          <swiper-container init="false" ref={swiperRef}>
            <swiper-slide><img src='/images/projects/MI.png' /></swiper-slide>
            <swiper-slide><img src='/images/projects/MI2.JPG' /></swiper-slide>
            <swiper-slide><img src='/images/projects/MI5.JPG' /></swiper-slide>
            <swiper-slide><img src='/images/projects/MI6.png' /></swiper-slide>
            <swiper-slide><img src='/images/projects/MI7.JPG' /></swiper-slide>
            <swiper-slide><img src='/images/projects/MI8.png' /></swiper-slide>
          </swiper-container>
        </Layout>
      </main>
    </>
  )
}
