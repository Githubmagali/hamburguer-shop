"use client"
import React from 'react';
import { useCart } from '@/context/cartProvider';

const items = [
    {
        id: 1,
        img: "/hamb-chik.png",
        name: "Hamburguer chicken",
        description: "meet, cheddar, tomato, lechuga",
        soldOut: false,
        price: 3.44
    },
    {
        id: 2,
        img: "/hamb-xl.png",
        name: "Hamburguer XL",
        description: "double meet, cheddar, tomato, lechuga",
        soldOut: false,
        price: 4.84
    },
    {
        id: 3,
        img: "/hamb-veg.png",
        name: "Hamburguer veggie",
        description: "textured soybeans, cheddar, tomato, lechuga",
        soldOut: false,
        price: 4.84
    },
    {
        id: 4,
        img: "/hamb-clasic.png",
        name: "Hamburguer clasic",
        description: "meet, cheddar, tomato, lechuga",
        soldOut: false,
        price: 2.44
    },
    {
        id: 5,
        img: "/hamb-chick-xl.png",
        name: "Hamburguer chicken XL",
        description: "double chicken, cheddar, tomato, lechuga",
        soldOut: true,
        price: 5.44
    }
    ,
    {
        id: 6,
        img: "/hamb-spinach.png",
        name: "Hamburguer Spinach",
        description: "spinach, cheddar, tomato, lechuga",
        soldOut: false,
        price: 5.44
    },
    {
        id: 7,
        img: "/hamb-wholemeal-bread.png",
        name: "Hamburguer chicken XL",
        description: "meet, wholemeal bread, cheddar, tomato, lechuga",
        soldOut: false,
        price: 5.44
    },
    ,
    {
        id: 8,
        img: "/hamb-bread-bl.png",
        name: "Hamburguer spinach with bread black",
        description: "spinach, cheddar, tomato, lechuga",
        soldOut: false,
        price: 7.44
    },
    ,
    {
        id: 9,
        img: "/drink-coc.png",
        name: "Cole",
        description: "Light or clasic",
        soldOut: false,
        price: 2.44
    },
    ,
    {
        id: 10,
        img: "/drink-lima.png",
        name: "Lima",
        description: "Ligth or clasic",
        soldOut: false,
        price: 2.44
    }

]

function MenuPage() {
const { addToCart, removeFromCart} = useCart()


    return (
   
        <section className="grid grid-cols-2 px-20 py-5 mt-2 gap-3 shadow-stone-50 ">
            {items.map((item, index) => (

                <div key={index} className="flex items-center">
                    <img
                        src={item.img}
                        alt={item.title}
                        className="w-20 h-20 object-cover rounded-md "
                    />
                    <div className="px-4 gap-x-3 top-0">
                        <p className="text-sm text-center">{item.name}</p>
                        <p className="text-xs text-center">{item.description}</p>
                        <p className="text-xs text-center font-bold py-2">${item.price}</p>
                        <div className="flex gap-x-3 items-center justify-between">
                        <button className="text-xs rounded-md bg-lime-200 hover:bg-lime-400 py-1 px-4"
                        onClick={() => addToCart(item)}>Add</button>
                        <button className="text-xs rounded-md bg-lime-100 hover:bg-lime-200 py-1 px-4"
                        onClick={() => removeFromCart(item.id)}>Remove</button>
                        </div>
                    </div>
                </div>


            ))}
        </section>

    )
}

export default MenuPage