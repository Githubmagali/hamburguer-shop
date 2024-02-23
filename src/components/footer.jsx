function Footer(){
    return(
        <>
        <div className="md:flex md:items-center bg-lime-50 left-0 right-0">
            <div className="md:grid md:grid-cols-3 md:gap-x-20 top-0 pb-5 pl-10 py-2">
         <ul>
            <li className="text-gray-500 sm:text-sm ">Certificado  Kosher</li>
            <li className="text-gray-500 sm:text-sm">Defensa del consumidor</li>
            <li className="text-gray-500 sm:text-sm">Contacto defensa del consumidor 0-800-777-7</li>
            <li className="text-gray-500 sm:text-sm"></li>
         </ul>
         <ul>
         <li className="text-gray-500 sm:text-sm">Politica de privacidad</li>
         <li className="text-gray-500 sm:text-sm">Protección de datos personales</li>
         
         </ul>
         <ul className="flex gap-x-7 text-green-600">
         <i className='bx bxl-gmail lg:text-3xl cursor-pointer'></i>
         <i className='bx bxl-facebook lg:text-3xl  cursor-pointer'></i>
         <i className='bx bxl-instagram lg:text-3xl  cursor-pointer' ></i>
            </ul>
       
         </div>
        </div>
        <div className="md:flex md:items-center md:justify-center sm:text-sm text-gray-500 bg-lime-50">&#169; Derechos reservados de autor</div>
        </>
    )
}

export default Footer
