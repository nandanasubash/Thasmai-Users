"use client"

import { useEffect } from "react"




export default function Financial(){
    useEffect(function (){
        window.location = '/financial/distribution'
    },[])

    return (
        <div>
           

           {/* <h1> Financial </h1> */}
        </div>
    )
}