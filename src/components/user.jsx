"use client"
import { useState } from "react"
import { useRouter } from 'next/navigation'

function UserPage(){
  

    const router = useRouter()
    
    const [username, setUsername] = useState('')
    

    function handleSubmit(e){
        e.preventDefault()
        router.push('/menu'); 
    }


    return(
        <div className="flex justify-center items-center h-screen">
        <form  className="flex flex-col w-96 ">
            <p className="text-lime-800 text-center text-xl">Welcome !! Write your name</p>
            <input type="text" 
            placeholder="Fullname" 
            value={username}
            className="mt-3 px-3 border rounded"
            onChange={(e) => setUsername(e.target.value)}
            />
   
            {username !== "" && (
                <div className="flex justify-center items-center py-9">
                     <button
                      className="mt-3 py-5 px-9 bg-lime-400 rounded-md hover:bg-lime-600 "
                      onClick={handleSubmit}>Start ordering</button>

                </div>
            )
            }
            
           

        </form>
        </div>

    )
}

export default UserPage