"use client"
import React, { useState } from 'react';

export function ListaDesplegable() {
  const [mostrarElementos, setMostrarElementos] = useState(false);
  const [sucursalSeleccionada, setSucursalSeleccionada] = useState('');

  const toggleElementos = () => {
    setMostrarElementos(!mostrarElementos);
  };

  const seleccionarSucursal = (sucursal) => {
    setSucursalSeleccionada(sucursal);
    setMostrarElementos(false);
  };

  return (
    <div>
      <div className="hover:text-gray-500 text-base flex items-center cursor-pointer text-gray-500" onClick={toggleElementos}>
        {sucursalSeleccionada || 'Sucursal'} <i className="bx bx-chevron-down"></i>
      </div>
      {mostrarElementos && (
        <div className="grid grid-col-1 w-2 h-2">
          <div className="grid  py-9 px-5 bg-white gap-y-6 z-20 border border-black">
            <div className="text-gray-500 cursor-pointer" onClick={() => seleccionarSucursal('CABA')}>
              CABA
            </div>
            <div className="text-gray-500 cursor-pointer" onClick={() => seleccionarSucursal('La Lucila')}>
              La Lucila
            </div>
            <div className="text-gray-500 cursor-pointer" onClick={() => seleccionarSucursal('Benavidez')}>
              Benavidez
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

  



function FormBuy(){
    return(<>
    <section >
        <form className='pb-10' >
            <ListaDesplegable />
            <input type="text" id="email" className="border p-2 mb-4 rounded" placeholder="Email" required />
            <input type="text" id="name" className="border p-2 mb-4 rounded" placeholder="Name" required/>
            <input type="text" id="dni" className="border p-2 mb-4 rounded" placeholder="DNI" required/>
            <input type="text" id="text" className="border p-2 mb-4 rounded" placeholder="Cel" required/>
            <input type="text" id="text" className="border p-2 mb-4 rounded" placeholder="Observations"/>
            
           
            <button className='px-10 bg-gray-400 mx-14 text-white hover:bg-gray-600'>Next</button>

        </form>


    </section>
    
    </>)
}

export default FormBuy