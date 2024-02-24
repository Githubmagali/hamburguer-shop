"use client"
import React, { useState } from 'react';
import { useCart } from '@/context/cartProvider';
import NavbarCart from '@/app/navbarCart/page'




const items = [
    {
        id: 1,
        name: "Bread black",
        quantity: "6",
        subtitle: "bread black with seeds",
        price: 5.6,
        img: "/bread-black-shop.png",
        soldOut: false


    },
    {
        id: 2,
        name: "Bread black XL",
        quantity: "",
        subtitle: "biggest bread black with seeds",
        price: 7.00,
        img: "/bread-black-shop-xl.png",
        soldOut: true
    },
    {
        id: 3,
        name: "Hamburguer veggie",
        quantity: "12",
        subtitle: "Mix vegetables",
        price: 8.00,
        img: "/hamb-veg-shop.png",
        soldOut: false
    },
    {
        id: 4,
        name: "Papas",
        subtitle: "the best meet",
        price: 11.99,
        img: "/papas.jpg",
        soldOut: false
    },
    {
        id: 5,
        name: "Hamburguer chicken",
        quantity: "12",
        subtitle: "the best chicken",
        price: 12.99,
        img: "/hamb-chicken-shop.png",
        soldOut: false
    },
    {
        id: 6,
        name: "Nuggets chicken",
        quantity: "12",
        subtitle: "the best chicken",
        price: 12.99,
        img: "/nuggets-chic-shop.png",
        soldOut: false
    },
    {
        id: 7,
        name: "Nuggets veggie",
        quantity: "12",
        subtitle: "the best meet",
        price: 12.00,
        img: "/nuggets-meet-shop.png",
        soldOut: true
    },
    {
        id: 8,
        name: "Hamb especial",
        quantity: "12",
        subtitle: "the best meet",
        price: 12.00,
        img: "/bread-black-shop-xl.png",
        soldOut: false
    },
    {
        id: 9,
        name: "Nuggets meet",
        quantity: "12",
        subtitle: "the best meet",
        price: 12.00,
        img: "/nuggets-meet-shop.png",
        soldOut: false
    },
    {
        id: 10,
        name: "Nuggets meet",
        quantity: "12",
        subtitle: "the best meet",
        price: 12.00,
        img: "/nuggets-meet-shop.png",
        soldOut: false
    },
    {
        id: 11,
        name: "Nuggets meet",
        quantity: "12",
        subtitle: "the best meet",
        price: 12.00,
        img: "/nuggets-meet-shop.png",
        soldOut: false
    },



]

function Shop() {

    const { cart, addToCart, removeFromCart, getItemQuantity } = useCart()
    const [overlayVisible, setOverlayVisible] = useState(true); // Inicialmente visible

    const closeOverlay = () => {
        setOverlayVisible(!overlayVisible);
    };



    return (
        <>
            {overlayVisible && (
                <div className="fixed z-50 top-0 left-0 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-50" onClick={closeOverlay}>

                    <img src="/sale.jpg" alt="Imagen en overlay" className="lg:w-1/2 sm:w-1/2 md:w-1/2" />
                </div>
            )}

       
            <div className="flex justify-center items-center px-10 pb-28 ">
                <div className="grid sm:gap-y-5 lg:grid-cols-3 text-center lg:pt-40 h-screen">
                    {items.map((item, index) => (
                        <div key={index} className={`flex items-center grid grid-cols-3 ${item.soldOut ? "filter grayscale opacity-80 text-center" : ""}`}
                        >
                            <img
                                src={item.img}
                                alt={item.name}
                                className="w-20 h-20 object-cover rounded-md lg:col-span-1 lg:4 "
                            />
                            <div className='lg:col-span-1 lg:p-4' >
                                <p className='text-center text-green-800'>{item.name}</p>
                                <p className='text-xs py-2'> $ {item.price}</p>
                            </div>
                            <div className="lg:col-span-1 lg:p-4">
                                {getItemQuantity(item.id) > 0 ? (
                                    <>
                                    <div className='lg:flex lg:gap-x-3'>
                                        <button className="text-xs rounded-md bg-lime-300 hover:bg-lime-400 px-1 " onClick={() => addToCart(item)}>
                                            +
                                        </button>
                                        <p className="text-xs text-center">{getItemQuantity(item.id)}</p>
                                        <button className="text-xs rounded-md bg-lime-200 hover:bg-lime-300 px-1" onClick={() => removeFromCart(item.id)}>
                                            -
                                        </button>
                                        </div>


                                    </>
                                ) : (
                                    <button disabled={item.soldOut} onClick={() => addToCart(item)} className='text-xs rounded-md bg-lime-300 hover:bg-lime-200 py-1 px-4'>
                                        {item.soldOut ? 'Sold Out' : 'Add to cart'}
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {cart.length > 0 &&  <NavbarCart />}
           
        </>);
}

export default Shop;
