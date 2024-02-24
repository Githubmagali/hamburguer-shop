"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, Pagination, Navigation } from 'swiper/modules';

const items = [
    {
        id: 1,
        name: "hamburguer",
        img: "/hamb-veg-shop.png",
    },
    {
        id: 2,
        name: "hamburger veggie",
        img: "/hamb-chik.png"
    },
    {
        id: 3,
        name: "nuggets",
        img: "/hamb-chicken-w.jpg"
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
        img: "/hamb-veg-shop.png"
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
                                <div className='overflow-hidden flex items-center justify-center'>
                                    <img src={item.img} alt={item.name} className='w-96'/>
                                </div>
                            </SwiperSlide>

                        ))}


                    </Swiper>
                </div>
       

        </>
    );
}

export default SwiperImg;
