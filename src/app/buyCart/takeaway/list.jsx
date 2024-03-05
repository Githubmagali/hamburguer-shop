"use client"
import { useState } from "react";

const location=[
  {
    id:1,
    name:"CABA"
  },{
    id:2,
    name:"La Lucila"
  },{
    id:3,
    name:"Benavidez"
  }
]



function ListaDesplegable() {


  return (

 
      <div className="relative">
        <select
          className="peer block cursor-pointer rounded-md border border-gray-200 py-2 px-14 text-sm outline-2 placeholder:text-gray-500"
          defaultValue=""
        >
          <option value="" className="text-gray-400" disabled>
            Selected
          </option>

          {location.map((office) => (
            <option key={office.id} value={office.id} className="text-gray-400">
              {office.name}
            </option>
          ))}
        </select>

      </div>
  );
}

export default ListaDesplegable