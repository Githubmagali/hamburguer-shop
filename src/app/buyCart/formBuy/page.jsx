"use client"
import ListaDesplegable from '@/app/buyCart/formBuy/list'




function FormBuy(){
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
            <input type="text" id="text" className="border p-2 mb-4 rounded" placeholder="Cel" required/>
            <label className=' text-gray-400'>Date</label>
            <input type="text" id="text" className="border p-2 mb-4 rounded" placeholder="Observations"/>
            
           
            <button className='px-10 bg-gray-400 mx-14 text-white hover:bg-gray-600'>Next</button>

        </form>


    </section>
    
    </>)
}

export default FormBuy