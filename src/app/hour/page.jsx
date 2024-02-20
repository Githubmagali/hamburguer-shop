import Link from "next/link";
import React from "react";

const Footer = () => {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 23;
    const isOpen = hour >= openHour && hour <= closeHour;



    return (
        <footer className="flex justify-center items-center">
            {isOpen ?
                (
                    <Order closeHour={closeHour} openHour={openHour} />
                ) : (
                    <p className="">
                        We're happy to welcome you between {openHour}:00 and {closeHour}:00.
                    </p>
                )
            }
        </footer>
    );
}
function Order({ closeHour, openHour }) {
    return (
        <div className="flex flex-col col-1 text-center gap-y-8">
            <p className="">
                We're open from {openHour}:00 to {closeHour}:00. Come visit us or order
                online.
            </p>
            <Link href="/delivery" className=" bg-lime-600 hover:bg-lime-800 py-2 px-4 rounded-md">Delivery</Link>
        </div>
    )
}


export default Footer;