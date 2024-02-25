"use client"
import { useState } from "react";

function ListaDesplegable() {
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
      <div className='pb-3'>
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

  export default ListaDesplegable