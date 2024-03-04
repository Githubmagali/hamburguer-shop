function Footer(){
    return(
        <>
        <div className="lg:flex lg:items-center bg-lime-50 left-0 right-0">
            <div className="md:grid md:grid-cols-3 md:gap-x-20 top-0 pb-5 pl-10 py-2">
         <ul>
            <li className="text-gray-500 sm:text-sm ">Kosher Certified</li>
            <li className="text-gray-500 sm:text-sm">Contact consumer protection 0-800-777-7</li>
            <li className="text-gray-500 sm:text-sm"></li>
         </ul>
         <ul>
         <li className="text-gray-500 sm:text-sm">Privacy Policy</li>
         <li className="text-gray-500 sm:text-sm">Personal data protection</li>
         
         </ul>
         <ul className="flex gap-x-7 text-green-600">
         <i className='bx bxl-gmail lg:text-3xl cursor-pointer'></i>
         <i className='bx bxl-facebook lg:text-3xl  cursor-pointer'></i>
         <i className='bx bxl-instagram lg:text-3xl  cursor-pointer' ></i>
            </ul>
       
         </div>
        </div>
        <div className="flex items-center justify-center text-sm text-gray-500 bg-lime-50">&#169;Copyright Reserved</div>
        </>
    )
}

export default Footer
