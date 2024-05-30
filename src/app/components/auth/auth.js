

"use client"
import React, { useRef } from 'react'
import axios from 'axios'



function Auth({setAuth}) {

    

    const userRef = useRef(null)
    const passRef = useRef(null)


     async function handleLogin ()  {
        try {

          const response = await axios.post('http://192.168.1.78:5000/api/v1/superadmin/login', {
            userName : userRef.current.value,
            password : passRef.current.value
          })
         console.log(response.data.message);

         if(response.data.message){
          setAuth(true);
          console.log(response.data)
          


          localStorage.setItem("userdata",JSON.stringify(response.data.user))
         }
        } catch (error) {
          console.error('Error occurred while removing:', error);
        }
      };

    return (
        <div>
            <div className="h-screen w-full flex justify-center items-center bg-white">
                <div className="login-container flex flex-col justify-center items-center">
                    <span className='text-xl font-semibold mt-5'>Login</span>
                    <input className="bg-slate-100 w-[24vw] py-2 link    px-3 my-5 outline-none" placeholder="Username" ref={userRef} />

                    <input className="bg-slate-100 w-[24vw] py-2 link    px-3 mb-7 outline-none" placeholder="Password" ref = {passRef} />
                    <button className="bg-emerald-400 text-white link py-2 rounded-md w-[24vw] font-semibold" onClick={handleLogin}>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Auth
