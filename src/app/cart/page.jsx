"use client"
import React from "react";
import { useCart } from "@/context/cartProvider";
import { useSpring, animated } from "react-spring";


function CartDisplay() {
    const { cart, totalCost } = useCart();

    const cartDisplayAnimation = useSpring({
        transform: `translateX(${cart.length > 0 ? '0%' : '100%'})`,
      });

    return (
        <animated.div style={cartDisplayAnimation} className="cart-display-container bg-lime-200">
        <div className="flex flex-col items-center gap-y-3  py-8">
            <h2 className="font-bold">Your Cart</h2>
            {cart.length > 0 ? (
                <ul className="">
                    {cart.map((item, index) => (
                        <li key={index} className="text-center py-3">
                            {item.name.charAt(0).toUpperCase() + item.name.slice(1)} -{" "}
                            {item.quantity} x ${item.price}
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="">No items in cart.</p>
            )}
            <p className="">Total Cost: ${totalCost}</p>
            <button className="bg-lime-100 hover:bg-lime-200 py-1 px-4 rounded-lg">Cart</button>
        </div>
        </animated.div>

    )
}

export default CartDisplay