"use client"
import { useState, useEffect } from "react"


const CustomAlert = ({ message, onClose }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onClose();
    }, 5000);

    return () => clearTimeout(timeout);
  }, [onClose]);

  return (
    <div className="fixed bottom-0 right-0 mb-4 mr-4 bg-green-500 text-white p-4 rounded-md">
      {message}
    </div>
  );
};


function ResendPage() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [alertMessage, setAlertMessage] = useState("");
  const [isAlertVisible, setIsAlertVisible] = useState(false);

  const handleSendEmail = async () => {
    setIsAlertVisible(true);


    if (fullName === '' || email === '' || message === '') {
      setAlertMessage("Complete todos los campos");

      return;

    }

    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName,
          email,
          message,
        }),
      });


      if (res.ok) {
        setAlertMessage("Mensaje enviado con éxito");
      } else {
        setAlertMessage("Error al enviar el mensaje");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setAlertMessage("Error al enviar el mensaje");
    }



    setFullName("");
    setEmail("");
    setMessage("");

    setTimeout(() => {
      setIsAlertVisible(false);
      setAlertMessage("");
    }, 2000);

  };

  return (
    <>

    <section className="flex  flex-col items-center justify-center sm:text-center" id="contact">
        <p className="font-bold text-green-800 md:text-3xl pt-20">Send us</p>
      <form className="py-10">
        <input type="text" id="title" className="border p-2 mb-4 w-full rounded" placeholder="Nombre completo"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)} />
        <input type="email" id="email" placeholder="Email" className="border p-2 mb-4 w-full rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)} />
        <textarea id="description" className="border p-2 mb-4 w-full resize-none rounded"
          value={message}
          onChange={(e) => setMessage(e.target.value)}></textarea>
        <button className="bg-lime-600 hover:bg-lime-800 px-3 py-2 rounded-md"
          onClick={(e) => {
            e.preventDefault();
            handleSendEmail();
          }}
        >
          Send
        </button>
        {isAlertVisible && (
          <CustomAlert
            message={alertMessage}
            onClose={() => setIsAlertVisible(false)}
          />
        )}

      </form>
    </section>
         <div className="text-center">
         <a href="https://github.com/Githubmagali">
             <i className="bx bxl-github p-20 text-7xl hover:text-zinc-300"></i>
         </a>
         <a href="mailto:magalivictoria85068@gmail.com">
             <i className="bx bxl-gmail p-20 text-7xl hover:text-zinc-300"></i>
         </a>
         <a href="https://www.linkedin.com/in/magali-fernandez-60a207210/">
             <i className="bx bxl-linkedin p-20 text-7xl hover:text-zinc-300"></i>
         </a>
     </div>
     </>
  )
}

export default ResendPage
