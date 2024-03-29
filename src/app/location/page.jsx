"use client"
import React, { useState } from 'react';
import Footer from '../../components/footer';

function Location() {
    const [selectedMapIndex, setSelectedMapIndex] = useState(null);
    
    const items=[
        {
            id:1,
            name:'CABA',
            address:'Av. Galicia 100',
            hor:'Lun-sab 8:00-23:00',
            number:'+54 11 23 436',
            mail:'hamb90@mail.com',
            map:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.1372370683007!2d-58.38622642532899!3d-34.676485661342944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcccb8228f238d%3A0x4e7d2cae69803158!2sAv.%20Galicia%20100%2C%20B1868BGA%20Pi%C3%B1eyro%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1708880848768!5m2!1ses-419!2sar',

        },{
            id:2,
            name:'La Lucila',
            address:'San Lorenzo 300',
            hor:'Lun-sab 8:00-23:00',
            number:'+54 11 23 432',
            mail:'hamb93@mail.com',
            map:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3288.148704830002!2d-58.48525862533994!3d-34.49911415197953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb16dab9a512d%3A0xa99d62ef0faeaef6!2sSan%20Lorenzo%20300%2C%20B1637BMC%20La%20Lucila%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1708881002005!5m2!1ses-419!2sar'
        },
        {
            id:3,
            name:'Benavidez',
            address:'Av. Luis Vernet 200',
            hor:'Lun-sab 8:00-23:00',
            number:'+54 11 23 432',
            map:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3291.754931090853!2d-58.6854665253455!3d-34.407574447164166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bca17249370a31%3A0xae320ecdbe85cce0!2sAv.%20Luis%20Vernet%20200%2C%20Benavidez%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1708881115401!5m2!1ses-419!2sar'
        },{
            id:4,
            name:'Los Olivos',
            address:'Entre Ríos 3000',
            hor:'Lun-sab 8:00-23:00',
            number:'+54 11 23 432',
            map:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3287.312569647077!2d-58.508967825338544!3d-34.520308053096116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb1271d788d21%3A0x907bd79bbe267e0!2sEntre%20R%C3%ADos%203000%2C%20B1636GCL%20Olivos%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1708881214035!5m2!1ses-419!2sar'
        }
    ]
    const handleMapButtonClick = (index) => {
        setSelectedMapIndex(index);
      };

return(
    <>
    <div className="flex items-center justify-center lg:h-screen lg:pt-48 sm:pt-28 md:pt-28 pb-20">
        <div className="grid grid-cols-2 lg:gap-x-6">
          <div className="flex items-center justify-center">
            <div className="lg:w-96 lg:h-96 sm:w-54 sm:h-80 overflow-scroll bg-white">
              <ul>
              {items.map((item, index)=>(
                <div key={index} className="lg:grid lg:grid-cols-2 p-4">
                  <div className="grid col-1">
                    <p className="text-gray-400 "><i className='bx bxs-phone-call'></i>{item.number}</p>
                    <p className="text-gray-400 ">{item.mail}</p>
                    <p className="text-gray-400 text-sm ">{item.hor}</p>
                  </div>
                  <div className="grid col-2">
                    <p className="text-lg">{item.name}</p>
                    <li className="text-gray-400 ">{item.address}</li>
                    <button className='bg-gray-300 hover:gr-gray-400 hover:text-white px-4' onClick={() => handleMapButtonClick(index)}>Map</button>
                  </div>
                </div>
                  ))}
              </ul>
            </div>
          </div>
          <div className="">
            {selectedMapIndex !== null && (
              <iframe
                src={items[selectedMapIndex].map}
                className="lg:w-96 h-96"
                allowFullScreen={false}
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              />
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
)
  
}

export default Location;
