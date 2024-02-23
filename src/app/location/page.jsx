function Location() {
    return (
        <>
            <div className="flex items-center justify-center h-screen sm:pt-20">
                <div className="grid grid-cols-2 gap-x-6">
                    <div className="flex items-center justify-center">
                        <div className="lg:w-96 lg:h-96 sm:w-54  sm:h-80 overflow-scroll bg-white">
                            <ul>
                                <div className="grid grid-cols-2 p-4">
                                    <div className="grid col-1">
                                        <p className="text-gray-400 "><i class='bx bxs-phone-call'></i>+54 11 23 436</p>
                                        <p className="text-gray-400 ">hamb90@mail.com</p>
                                    </div>
                                    <div className="grid col-2">
                                        <p className=" text-lg">CABA</p>
                                        <li className=" text-gray-400 ">Av. Galicia 100, B1868BGA Piñeyro</li>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 p-4 ">
                                    <div className="grid col-1">
                                        <p className="text-gray-400 "><i class='bx bxs-phone-call'></i>+54 11 23 430</p>
                                        <p className="text-gray-400 ">hamb92@mail.com</p>
                                    </div>
                                    <div className="grid col-2">
                                        <p className=" text-lg">La Lucila</p>
                                        <li className=" text-gray-400 ">San Lorenzo 300, B1637BMC La Lucila Buenos Aires</li>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 p-4 ">
                                    <div className="grid col-1">
                                        <p className="text-gray-400 "><i class='bx bxs-phone-call'></i>+54 11 23 432</p>
                                        <p className="text-gray-400 ">hamb93@mail.com</p>
                                    </div>
                                    <div className="grid col-2">
                                        <p className=" text-lg">Benavidez</p>
                                        <li className=" text-gray-400 ">Av. Luis Vernet 200, Benavidez</li>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 p-4 ">
                                    <div className="grid col-1">
                                        <p className="text-gray-400 "><i class='bx bxs-phone-call'></i>+54 11 23 432</p>
                                        <p className="text-gray-400 ">hamb93@mail.com</p>
                                    </div>
                                    <div className="grid col-2">
                                        <p className=" text-lg">Benavidez</p>
                                        <li className=" text-gray-400 ">Av. Luis Vernet 200, Benavidez</li>
                                    </div>
                                </div>
                            </ul>

                        </div>
                    </div>
                    <div className="sm:flex sm:items-center sm:justify-center">
                        <iframe
                            title="map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.1372370683007!2d-58.38622642532899!3d-34.676485661342944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcccb8228f238d%3A0x4e7d2cae69803158!2sAv.%20Galicia%20100%2C%20B1868BGA%20Pi%C3%B1eyro%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1705963186092!5m2!1ses-419!2sar"
                            className="lg:w-96 lg:h-96 sm:w-54  sm:h-80"
                            allowFullScreen={false}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>



                    </div>
                </div>
            </div>
        </>
    );
}

export default Location;
