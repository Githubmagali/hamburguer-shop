"use client"
import { useState} from "react"
import CustomAlert from "../../components/alert";
import Footer from "../../components/footer";



function ResendPage() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [alertMessage, setAlertMessage] = useState("");
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const [alertType, setAlertType] = useState("");

  const handleSendEmail = async () => {
    setIsAlertVisible(true);


    if (fullName === '' || email === '' || message === '') {
      setAlertMessage("Complete all fields");
      setIsAlertVisible(true);


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
        setAlertMessage("Message sent succesfully");
      } else {
        setAlertMessage("Error sending message");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setAlertMessage("Error sending message");
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

      <section className="flex  flex-col items-center justify-center sm:text-center px-9 " id="contact">
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
              alertType={alertType}
            />
          )}

        </form>
      </section>
      <div className="text-center flex gap-x-10 justify-center">
        <i className='bx bxl-instagram lg:text-7xl text-lime-500 hover:text-green-900'></i>
        <i className="bx bxl-gmail lg:text-7xl text-lime-500 hover:text-green-900"></i>
        <i className="bx bxl-facebook-circle text-lime-500 lg:text-7xl hover:text-green-900"></i>
        <i className='bx bxl-whatsapp text-lime-500 lg:text-7xl hover:text-green-900'></i>

      </div>
      <Footer />
    </>
  )
}

export default ResendPage
