import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data,setdata]=useState([]);
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/atishayjain208')
    //     .then(response=>response.json())
    //     .then(data=>{
    //         console.log(data)
    //         setdata(data)
    //     })
    // },[])
    return (
        <div className='text-white bg-gray-700 p-4 text-3xl text-center m4'>
            Github followers: {data.followers}
        </div>
    )
}

export default Github

export const githubInfoLoader=async ()=>{
    const response = await fetch('https://api.github.com/users/atishayjain208')
    return response.json();
}
