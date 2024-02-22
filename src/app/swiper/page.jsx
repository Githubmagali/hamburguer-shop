"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import './styles.css';
import {Autoplay, Pagination, Navigation } from 'swiper/modules';

const items = [
    {
        id: 1,
        name: "hamburguer",
        img: "/hamb-bread-bl.png",
    },
    {
        id: 2,
        name: "hamburger veggie",
        img: "/hamb-veg.png"
    },
    {
        id: 3,
        name: "nuggets",
        img: "/home-order.png"
    },
    {
        id: 4,
        name: "nuggets",
        img: "/nuggets-meet-shop.png"

    },
    {
        id: 5,
        name: "bread black",
        img: "/bread-black-shop.png"
    },
    {
        id: 6,
        name: "hamb-wholemeal",
        img: "/hamb-wholemeal-bread.png"
    },
    {
        id: 7,
        name: "hamb bread black xl",
        img: "bread-black-shop-xl.png"
    }

];


function SwiperImg() {
    return (
        <>
            <div className='flex items-center justify-center h-screen'>
                <div className=' w-2/3 h-80'>
                    <Swiper
                        loop
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                          delay: 2500,
                          disableOnInteraction: false,
                        }}
                        
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                        >
                        {items.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className='overflow-hidden'>
                                    <img src={item.img} alt={item.name} className='w-full' />
                                </div>
                            </SwiperSlide>

                        ))}


                    </Swiper>
                </div>
            </div>

        </>
    );
}

export default SwiperImg;
