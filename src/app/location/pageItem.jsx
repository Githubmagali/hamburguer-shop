import React, { useState } from 'react';

function Location() {
  const [selectedMapIndex, setSelectedMapIndex] = useState(null);

  const maps = [
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.1372370683007!2d-58.38622642532899!3d-34.676485661342944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcccb8228f238d%3A0x4e7d2cae69803158!2sAv.%20Galicia%20100%2C%20B1868BGA%20Pi%C3%B1eyro%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1708880848768!5m2!1ses-419!2sar",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3288.148704830002!2d-58.48525862533994!3d-34.49911415197953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb16dab9a512d%3A0xa99d62ef0faeaef6!2sSan%20Lorenzo%20300%2C%20B1637BMC%20La%20Lucila%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1708881002005!5m2!1ses-419!2sar",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3291.754931090853!2d-58.6854665253455!3d-34.407574447164166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bca17249370a31%3A0xae320ecdbe85cce0!2sAv.%20Luis%20Vernet%20200%2C%20Benavidez%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1708881115401!5m2!1ses-419!2sar",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3287.312569647077!2d-58.508967825338544!3d-34.520308053096116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb1271d788d21%3A0x907bd79bbe267e0!2sEntre%20R%C3%ADos%203000%2C%20B1636GCL%20Olivos%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1708881214035!5m2!1ses-419!2sar"
  ];

  const handleMapButtonClick = (index) => {
    setSelectedMapIndex(index);
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen sm:pt-20">
        <div className="grid grid-cols-2 gap-x-6">
          <div className="flex items-center justify-center">
            <div className="lg:w-96 lg:h-96 sm:w-54 sm:h-80 overflow-scroll bg-white">
              <ul>
                {/* ... tu código anterior ... */}
                {maps.map((map, index) => (
                  <div key={index} className="grid grid-cols-2 p-4">
                    {/* ... tu código anterior ... */}
                    <button onClick={() => handleMapButtonClick(index)}>Map</button>
                  </div>
                ))}
              </ul>
            </div>
          </div>
          <div className="sm:flex sm:items-center sm:justify-center">
            {selectedMapIndex !== null && (
              <iframe
                src={maps[selectedMapIndex]}
                className="lg:w-96 lg:h-96 sm:w-54 sm:h-80"
                allowFullScreen={false}
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Location;
