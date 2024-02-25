"use client"
import { useState, useEffect } from 'react';
import CustomAlert from '../../../components/alert';


function DeliveryBuy({ serverData }) {

    const [alertMessage, setAlertMessage] = useState("");
    const [isAlertVisible, setIsAlertVisible] = useState(false);
    const [alertType, setAlertType] = useState("");


    const [formData, setFormData] = useState({
        email: '',
        name: '',
        address: '',
        dto: '',
        date: '',
    })

    // Nuevo estado para indicar si la solicitud fue exitosa
    const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);

    useEffect(() => {
        // Si la solicitud fue exitosa, reinicia el estado formData
        if (isSubmitSuccessful) {
            setFormData({
                email: '',
                name: '',
                address: '',
                dto: '',
                date: '',
            });

            // Restablece el estado de isSubmitSuccessful para futuros envíos
            setIsSubmitSuccessful(false);
        }
    }, [isSubmitSuccessful]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
      
        try {
          const response = await fetch('/api/submitFormData', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
      
          if (response.ok) {
            const result = await response.json();
            console.log('Respuesta del servidor:', result);
      
            // Actualiza el estado para indicar que la solicitud fue exitosa
            setIsSubmitSuccessful(true);
      
            setAlertMessage("Mensaje enviado con éxito");
            setAlertType("success");
          } else {
            setAlertMessage("Error al enviar el mensaje");
            setAlertType("error");
          }
        } catch (error) {
          console.error("Error sending email:", error);
          setAlertMessage("Error al enviar el mensaje");
          setAlertType("error");
        }
      
        setTimeout(() => {
          setIsAlertVisible(false);
          setAlertMessage("");
          setAlertType("");
        }, 2000);
      };
      


    return (<>
        <section >
            <form className='pb-10' onSubmit={handleSubmit} >


                <label className=' text-gray-400'>Email *</label>
                <input
                    type="email"
                    id="email"
                    className="border p-2 mb-4 rounded"
                    placeholder="Email"
                    required value={formData.email}
                    onChange={handleChange} />

                <label className='text-gray-400'>Name *</label>
                <input type="text"
                    id="name"
                    className="border p-2 mb-4 rounded"
                    placeholder="Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                />
                <label className=' text-gray-400'>Adress *</label>
                <input type="text"
                    id="address"
                    className="border p-2 mb-4 rounded"
                    placeholder="Adress"
                    required
                    value={formData.address}
                    onChange={handleChange}
                />
                <label className=' text-gray-400'>Dto *</label>
                <input
                    type="text"
                    id="dto"
                    className="border p-2 mb-4 rounded"
                    placeholder="dto"
                    value={formData.dto}
                    onChange={handleChange}
                />
                <label className=' text-gray-400'>Date</label>
                <input
                    type="text"
                    id="date"
                    className="border p-2 mb-4 rounded"
                    placeholder="Observations"
                    value={formData.date}
                    onChange={handleChange}
                />

                <button className='px-10 bg-gray-400 mx-14 text-white hover:bg-gray-600'>Next</button>

                {isAlertVisible && (
            <CustomAlert
              message={alertMessage}
              onClose={() => setIsAlertVisible(false)}
              alertType={alertType}
            />
          )}

            </form>


        </section>

    </>)
}



export default DeliveryBuy