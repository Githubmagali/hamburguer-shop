"use client"
import React from 'react';
import { useCart } from '@/context/cartProvider';

export const imgs = [
    {
      id: 1,
      img: "hamb-veg.png",
      title: "Veggie",
      description: "description"
    },
    {
      id: 2,
      img: "hamb-xl.png",
      title: "XL",
      description: "description"
    },
    {
      id: 3,
      img: "hamb-bread-bl.png",
      title: "Bread black",
      description: "description"
    }
  ];
  


const items = [
    {
        id: 1,
        name: "bread black",
        quantity: "6",
        subtitle: "bread black with seeds",
        price: 5.6,
        img: "/bread-black-shop.png",
        soldOut: false


    },
    {
        id: 2,
        name: "bread black XL",
        quantity: "6",
        subtitle: "biggest bread black with seeds",
        price: 7.00,
        img: "/bread-black-shop-xl.png",
        soldOut: true
    },
    {
        id: 3,
        name: "hamburguer veggie",
        quantity: "12",
        subtitle: "Mix vegetables",
        price: 8.00,
        img: "/hamb-veg-shop.png",
        soldOut: false
    },
    {
        id: 4,
        name: "hamburguer meet",
        quantity: "12",
        subtitle: "the best meet",
        price: 11.99,
        img: "/hamb-meet-shop.png",
        soldOut: false
    },
    {
        id: 5,
        name: "hamburguer chicken",
        quantity: "12",
        subtitle: "the best chicken",
        price: 12.99,
        img: "/hamb-chicken-shop.png",
        soldOut: false
    },
    {
        id: 6,
        name: "nuggets chicken",
        quantity: "12",
        subtitle: "the best chicken",
        price: 12.99,
        img: "/nuggets-chic-shop.png",
        soldOut: false
    },
    {
        id: 7,
        name: "nuggets meet",
        quantity: "12",
        subtitle: "the best meet",
        price: 12.00,
        img: "/nuggets-meet-shop.png",
        soldOut: true
    },
    {
        id: 8,
        name: "nuggets meet",
        quantity: "12",
        subtitle: "the best meet",
        price: 12.00,
        img: "/nuggets-meet-shop.png",
        soldOut: false
    },
    {
        id: 9,
        name: "nuggets meet",
        quantity: "12",
        subtitle: "the best meet",
        price: 12.00,
        img: "/nuggets-meet-shop.png",
        soldOut: false
    },
    {
        id: 10,
        name: "nuggets meet",
        quantity: "12",
        subtitle: "the best meet",
        price: 12.00,
        img: "/nuggets-meet-shop.png",
        soldOut: false
    },
    {
        id: 11,
        name: "nuggets meet",
        quantity: "12",
        subtitle: "the best meet",
        price: 12.00,
        img: "/nuggets-meet-shop.png",
        soldOut: false
    },



]

function Shop() {
   
    const { addToCart, removeFromCart, getItemQuantity} = useCart()
   

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="grid grid-cols-4 text-center gap-y-7">
                {items.map((item, index) => (
                    <div key={index} className={`flex items-center ${item.soldOut ? "filter grayscale opacity-80 text-center" : ""}`}
                    >
                        <img
                            src={item.img}
                            alt={item.name}
                            className="w-20 h-20 object-cover rounded-md"
                        />
                        <div>
                            <p>{item.name}</p>
                            <p>Quantity :{item.quantity}</p>
                            <p> $ {item.price}</p>
                        </div>
                        <div className="flex items-center gap-x-4">
                        {getItemQuantity(item.id) > 0 ? (
                                    <>
                               
                                        <button className="text-xs rounded-md bg-lime-200 hover:bg-lime-400 px-1 " onClick={() => addToCart(item)}>
                                            +
                                        </button>
                                        <p className="text-xs text-center">{getItemQuantity(item.id)}</p>
                                        <button className="text-xs rounded-md bg-lime-100 hover:bg-lime-200 px-1" onClick={() => removeFromCart(item.id)}>
                                            -
                                        </button>
                                        
                                       
                                    </>
                                ) : (
                                    <button disabled={item.soldOut} onClick={() => addToCart(item)} className='text-xs rounded-md bg-lime-100 hover:bg-lime-200 py-1 px-4'>
                                        {item.soldOut ? 'Sold Out' : 'Add to cart'}
                                    </button>
                                )}
                                </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Shop;
