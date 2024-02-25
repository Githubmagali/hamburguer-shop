"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, Pagination, Navigation } from 'swiper/modules';

const items = [
    {
        id: 1,
        name: "hamburguer",
        img: "/hamb-swiper.jpg"
    },
    {
        id: 2,
        name: "Hamburger veggie",
        img: "/hamb-swiper-1.jpg",
        description: "Tuesday 20% OFF"
    },
    {
        id: 3,
        name: "Hamb chicken",
        img: "/hamb-chicken-w.jpg",
        description: "Buy from our page and get a 15% discount"
    },
    {
        id: 4,
        name: "Hamb XL",
        img: "/hamb-swiper-3.jpg",
        description: "New XL!"

    },
    {
        id: 5,
        name: "bread black",
        img: "/hamb-swiper-4.jpg"
    },
    {
        id: 6,
        name: "hamb-wholemeal",
        img: "/hamb-swiper-5.jpg",
        description: "The most sold"
    },
    {
        id: 7,
        name: "hamb bread black xl",
        img: "/hamb-swiper-6.jpg"
    }

];


function SwiperImg() {
    return (
        <>
           
          <div className=''>
                    <Swiper
                        loop
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                          delay: 2500,
                          disableOnInteraction: false,
                        }}
                        modules={[Autoplay, Pagination, Navigation]}
                       
                        >
                        {items.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className='overflow-hidden flex items-center justify-center '>
                                    <img src={item.img} alt={item.name} className='w-1/2 h-1/2'/>
                                    <p className='absolute pt-48 text-3xl font-bold text-white'>{item.description}</p>
                                </div>
                            </SwiperSlide>

                        ))}


                    </Swiper>
                </div>
       

        </>
    );
}

export default SwiperImg;
