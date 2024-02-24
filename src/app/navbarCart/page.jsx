"use client"
import React from 'react';
import { useCart } from '@/context/cartProvider';
import Link from 'next/link';



function NavbarCart(){

    const { cart, totalCost } = useCart();
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

    return(
      <div className="fixed bottom-0 w-full z-20 flex justify-between items-center bg-white px-7 py-2 ">
      <p className="space-x-4 font-semibold text-stone-600">
        <span><i class='bx bx-shopping-bag'></i>{totalItems}</span>
        <span>Total Cost: ${totalCost}</span>
      </p>
      <Link href="/buyCart">Open cart &rarr;</Link>
    </div>
    )
}

export default NavbarCart