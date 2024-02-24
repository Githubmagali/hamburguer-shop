"use client"
import React from "react";
import { useCart } from "@/context/cartProvider";
import FormBuy from '@/app/buyCart/formBuy/page'


function Purchasing() {
    const { cart, totalCost } = useCart();

    return (<>
        <div className="flex items-center justify-center h-screen bg-lime-50">
            <div className="grid grid-cols-2 gap-2 w-full">
                <div className=" px-3">
                    <div className="border-t-8 border-green-800 px-48 rounded-xl"> </div>
                    <h1 className="text-2xl pt-6 pb-7 pl-3 text-gray-500 ">Seleccione un método de envio</h1>
                    <div className="border border-gray-200 border-4 border-solid rounded-xl">
                        <div className="flex items-center justify-content left-0 pt-20 pb-3 lg:gap-x-16">
                            <p className="text-2xl text-gray-500">Take away</p>
                            <p className="text-2xl  text-gray-500">Delivery</p>
                        </div>
                        <div className="flex pb-3 gap-x-40 p-8 pb-5">
                            <input type="radio" name="takeAway" value="takeAway" />
                            <input type="radio" name="delivery" value="delivery" />

                        </div>
                    </div>
                </div>
                <div className="px-3">
                    <div className="border-t-8 border-green-800 px-48 rounded-xl"> </div>
                    <h1 className="text-2xl pt-6 pb-7 pl-3 text-gray-500 ">Resumen del pedido</h1>
                    <div className="relative py-24 px-48 border border-gray-200 border-4 border-solid rounded-xl overflow-scroll max-h-[2rem]">
                    {cart.length > 0 ? (
                    <ul className="absolute top-5 grid gap-y-4">
                        {cart.map((item, index) => (
                            <li key={index} className="text-center text-gray-500">
                                {item.name.charAt(0).toUpperCase() + item.name.slice(1)} -{" "}
                                {item.quantity} x ${item.price}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-center">No items in cart.</p>
                )}
                    </div>
                    <p className="text-center pt-3 text-gray-500 text-xl">Total Cost: ${totalCost}</p>
                </div>
            </div>
        </div>
        <FormBuy />
    </>
    )
}

export default Purchasing