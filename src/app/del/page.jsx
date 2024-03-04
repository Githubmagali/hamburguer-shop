
"use client"
import React from 'react';
import { useCart } from '../../context/cartProvider';
import CartDisplay from '../cart/page'


const items = [
    {
        id: 1,
        img: "/hamb-chik.png",
        name: "Chicken",
        description: "cheddar, tomato, lechuga",
        soldOut: false,
        price: 3.44
    },
    {
        id: 2,
        img: "/hamb-xl.png",
        name: "XL",
        description: "double meet, cheddar, tomato, lechuga",
        soldOut: false,
        price: 4.84
    },
    {
        id: 3,
        img: "/hamb-veg.png",
        name: "Veggie",
        description: "textured soybeans, cheddar, tomato, lechuga",
        soldOut: false,
        price: 4.84
    },
    {
        id: 4,
        img: "/hamb-clasic.png",
        name: "Clasic",
        description: "meet, cheddar, tomato, lechuga",
        soldOut: false,
        price: 2.44
    },
    {
        id: 5,
        img: "/hamb-chick-xl.png",
        name: "Chicken XL",
        description: "double chicken, cheddar, tomato, lechuga",
        soldOut: true,
        price: 5.44
    }
    ,
    {
        id: 6,
        img: "/hamb-spinach.png",
        name: "Spinach",
        description: "spinach, cheddar, tomato, lechuga",
        soldOut: false,
        price: 5.44
    },
    {
        id: 7,
        img: "/hamb-wholemeal-bread.png",
        name: "Wholemeal bread",
        description: "wholemeal bread, meet, cheddar, tomato, lechuga",
        soldOut: false,
        price: 5.44
    },
    ,
    {
        id: 8,
        img: "/hamb-bread-bl.png",
        name: "Spinach with bread black",
        description: "cheddar, tomato, lechuga",
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

function Delivery() {
    const { addToCart, removeFromCart, cart, getItemQuantity } = useCart()


    return (<>
    <div className='flex '>
    
            {cart.length > 0 && <CartDisplay />}

        <div className="flex items-center justify-center flex-1 w-full">
            <div className="lg:grid lg:grid-cols-2 px-20 py-20 mt-2 gap-3 shadow-stone-50">
                {items.map((item, index) => (

                    <div key={index} className={`flex items-center ${item.soldOut ? "filter grayscale opacity-80 text-center" : ""}`}>
                        <img
                            src={item.img}
                            alt={item.title}
                            className="w-20 h-20 object-cover rounded-md "
                        />
                        <div className="px-4 gap-x-3 top-0">
                            <p className="text-sm text-center font-bold py-3">{item.name}</p>
                            <p className="text-xs text-center">{item.description}</p>
                            <p className="text-xs text-center font-bold py-2">{item.soldOut ? "SOLD OUT" : `$ ${item.price}`}</p>


                            <div className="flex gap-x-3 items-center gap-x-5">


                                {getItemQuantity(item.id) > 0 ? (
                                    <>
                                        <button className="text-xs rounded-md bg-lime-400 hover:bg-lime-500 py-1 px-4" onClick={() => addToCart(item)}>
                                            +
                                        </button>
                                        <p className="text-xs text-center">{getItemQuantity(item.id)}</p>
                                        <button className="text-xs rounded-md bg-lime-200 hover:bg-lime-300 py-1 px-4" onClick={() => removeFromCart(item.id)}>
                                            -
                                        </button>
                                    </>
                                ) : (
                                    <button disabled={item.soldOut} onClick={() => addToCart(item)} className='text-xs rounded-md bg-lime-300 hover:bg-lime-400 py-1 px-4'>
                                        {item.soldOut ? 'Sold Out' : 'Add to cart'}
                                    </button>
                                )}



                            </div>


                        </div>

                    </div>

                ))}

            </div>
            
        </div>
     
            </div>


    </>

    )
}

export default Delivery