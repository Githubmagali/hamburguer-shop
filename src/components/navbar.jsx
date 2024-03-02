"use client"
import { useCart } from "../context/cartProvider";
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
            <Link className="text-lime-900" href="/menu/spatialities">Spatialities</Link>
            <Link className="text-lime-900" href="/menu/traditional">Traditional</Link>
          </div>
        </div>
      )}
    </li>
  );
}





function NavbarPage() {
  const { cart } = useCart();
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  // Estado para manejar la visibilidad del menú en pantallas pequeñas
  const [menuVisible, setMenuVisible] = useState(false);


  return (<>
    <nav className="lg:fixed top-0 left-0 right-0 z-50 flex justify-between items-center lg:bg-lime-100">
      <Link href="/" className="font-bold text-lime-900 hover:text-lime-400 m-4 px-10 text-2xl w-full">Hamburguer</Link>
      <ul className="sm:flex space-x-9 m-4 hidden w-full">
        <Link href="/location" className="hover:text-lime-500 text-xl">Location</Link>
        <Link href="/contact" className="hover:text-lime-500 text-xl ">Contact</Link>
        <ListaDesplegable />
        <Link href="/shop" className="hover:text-lime-500 text-xl">Shop</Link>
        <Link href="/buyCart">
          <i className='bx bxs-shopping-bags text-3xl hover:text-lime-500'></i>
          {totalItems}
        </Link>

      </ul>
      {/* Icono de hamburguesa para pantallas pequeñas */}
      <div
        className="sm:hidden cursor-pointer text-3xl text-lime-800 ml-auto"
        onClick={() => setMenuVisible(!menuVisible)}
      >
        &#9776;
      </div>

    </nav>


    {/* Menú para pantallas pequeñas */}
    {menuVisible && (
      <div className="flex flex-col sm:flex-row gap-y-4 pl-48 ">
        <Link href="/location" className="pl-7">Location</Link>
        <Link href="/contact" className="pl-7">Contact</Link>
        <Link href="/shop" className="pl-7">Shop</Link>
        <Link href="/buyCart" className="pl-5">
          <i className='bx bxs-shopping-bags text-xl'></i>
          {totalItems}
        </Link>
      </div>
    )}

  </>)
}

export default NavbarPage