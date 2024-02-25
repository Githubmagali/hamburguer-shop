"use client"
import { useCart } from "@/context/cartProvider";
import Link from "next/link";
import { useState } from "react";


export function ListaDesplegable() {
  const [mostrarElementos, setMostrarElementos] = useState(false);

  const toggleElementos = () => {
    setMostrarElementos(!mostrarElementos);
  };

  return (
    <li>
      <div className="hover:text-lime-500 text-xl flex items-center cursor-pointer" onClick={toggleElementos}>
        Menu <i className='bx bx-chevron-down'></i>
      </div>
      {mostrarElementos && (
        <div className="grid grid-col-1 w-2 h-2">
            <div className=" grid grid-col-1 py-9 px-5 bg-lime-100 gap-y-5">
          <Link  className="text-lime-900" href="/menu/spatialities">Spatialities</Link>
          <Link  className="text-lime-900" href="/menu/traditional">Traditional</Link>
          <Link  className="text-lime-900" href="/menu/benavidez">Benavidez</Link>
          </div>
        </div>
      )}
    </li>
  );
}





function NavbarPage() {
    const { cart } = useCart();
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);


    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center bg-lime-100 ">
         <Link href="/" className="font-bold text-lime-900 hover:text-lime-400 m-4 px-10 text-2xl">Hamburguer</Link>
            <ul className="flex space-x-9 m-4 px-4">
                <li className="">
                    <Link href="/location" className="hover:text-lime-500 text-xl">Location</Link>
                </li>
                <li>
                    <a href="/contact" className="hover:text-lime-500 text-xl ">Contact</a>
                </li>
                
                <ListaDesplegable />
                <li>
                    <Link href="/shop" className="hover:text-lime-500 text-xl">Shop</Link>
                </li>
                <li>
                    <Link href="/buyCart">
                        <i className='bx bxs-shopping-bags text-3xl hover:text-lime-500'></i>
                        {totalItems}
                    </Link>
                </li>



            </ul>
        </nav>

    )
}

export default NavbarPage