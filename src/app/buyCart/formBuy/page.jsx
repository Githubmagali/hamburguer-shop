"use client"
import ListaDesplegable from '@/app/buyCart/formBuy/list'
import { useState } from 'react';
import CustomAlert from '../../../components/alert';



function FormBuy(){

    const [alertMessage, setAlertMessage] = useState("");
    const [isAlertVisible, setIsAlertVisible] = useState(false);
    const [alertType, setAlertType] = useState("");

    const [formData, setFormData] =useState({
        email: '',
        name: '',
        dni:'',
        phone:'',
        date:''
    })

    const handleChange = (e) =>{
        setFormData({...formData, [e.target.id]: e.target.value})
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        setIsAlertVisible(true)

        if(formData.email === '' || formData.name === '' || formData.dni === '' || formData.phone === '' || formData.date === ''){
            setAlertMessage("Complete todos los campos");
            setIsAlertVisible(true);
            setAlertType("error");
            setIsAlertVisible(true);

            return;
        }

        try
        {
            const response =await fetch('/api/submitFormData', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })
            if (response.ok) {
                const result = await response.json();
                console.log('Respuesta del servidor:', result);



                setAlertMessage("Pedido enviado con éxito");
                setAlertType("success");
                setFormData({
                    email: '',
                    name: '',
                    dni: '',
                    phone: '',
                    date: '',
                });

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
        
    }



    return(<>
    <section >
        <form className='pb-10' >
            <ListaDesplegable />
            <label className=' text-gray-400'>Email *</label>
            <input type="text" id="email" className="border p-2 mb-4 rounded" placeholder="Email" required />
            <label className=' text-gray-400'>Name *</label>
            <input type="text" id="name" className="border p-2 mb-4 rounded" placeholder="Name" required/>
            <label className=' text-gray-400'>DNI *</label>
            <input type="text" id="dni" className="border p-2 mb-4 rounded" placeholder="DNI" required/>
            <label className=' text-gray-400'>Phone *</label>
            <input type="text" id="phone" className="border p-2 mb-4 rounded" placeholder="Cel" required/>
            <label className=' text-gray-400'>Date</label>
            <input type="text" id="date" className="border p-2 mb-4 rounded" placeholder="Observations"/>
            
           
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

export default FormBuy