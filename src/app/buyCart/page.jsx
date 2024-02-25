"use client"
import React from "react";
import { useCart } from "../../context/cartProvider";
import Link from "next/link";

function BuyCart() {
    const { cart, totalCost } = useCart();

    return (
        <div className="grid grid-cols-3 bg-lime-100  text-center text-xl  pt-40 px-64 gap-y-10">
            <div className="col-span-3 text-center">
                <h2 className="font-bold text-green-800">Your Cart</h2>
            </div>
            {cart.length > 0 ? (
                cart.map((item, index) => (
                    <React.Fragment key={index}>
                         <div className="col-span-1">
                            {item.quantity}
                        </div>
                        <div className="col-span-1">
                            {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                        </div>
                        <div className="col-span-1">
                            ${item.price}
                        </div>
                    </React.Fragment>
                ))
            ) : (
                <div className="col-span-3 text-center">
                    <p className="text-3xl py-4 text-gray-800">No items in your cart.</p>
                </div>
            )}
            <div className="col-span-3 text-center">
                <p className="py-8">Total Cost: ${totalCost}</p>
                <Link className="bg-lime-600 hover:bg-lime-400 py-1 my-5 px-4 rounded-lg" href="/buyCart/purchasing">
                    Buy now <i className='bx bx-cart-alt'></i>
                </Link>
            </div>
        </div>
    );
}

export default BuyCart;
