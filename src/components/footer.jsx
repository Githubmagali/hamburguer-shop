function Footer(){
    return(
        <>
        <div className="flex items-center bg-lime-50 left-0 right-0">
            <div className="grid grid-cols-3 gap-x-20 top-0 pb-5 pl-10 py-2">
         <ul>
            <li className="text-gray-500">Certificado  Kosher</li>
            <li className="text-gray-500">Defensa del consumidor</li>
            <li className="text-gray-500">Contacto defensa del consumidor 0-800-777-7</li>
            <li className="text-gray-500"></li>
         </ul>
         <ul>
         <li className="text-gray-500">Politica de privacidad</li>
         <li className="text-gray-500">Protección de datos personales</li>
         
         </ul>
         <ul className="flex gap-x-7 text-green-600">
         <i className='bx bxl-gmail text-3xl cursor-pointer'></i>
         <i className='bx bxl-facebook text-3xl  cursor-pointer'></i>
         <i className='bx bxl-instagram text-3xl  cursor-pointer' ></i>
            </ul>
       
         </div>
        </div>
        <div className="flex items-center justify-center text-gray-500 bg-lime-50">&#169; Derechos reservados de autor</div>
        </>
    )
}

export default Footer
