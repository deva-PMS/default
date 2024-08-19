"use client"
import { CloseOutlined } from '@ant-design/icons'
import {  useRouter } from 'next/navigation'
import React from 'react'

const AddPage = () => {
    const router = useRouter()
    return (
        <>
            <CloseOutlined className='absolute top-[20%] right-[20%] text-gray-500 text-4xl '  onClick={()=>router.push("/")}/>

            <div className="flex flex-col justify-center items-center gap-10 lg:flex-row md:flex-row   h-screen ">

                <div className="">

                    <img src="https://themes.vsart.me/triablo/images/team/member3.jpg" alt="" />

                </div>
                <div className="py-20 lg:w-[600px] relative sm:tex-center mx-10">

                    <h1 className="text-xl">68.00$</h1>
                    <p className="font-medium text-xl mt-2">Eastpak Padded Pak R Backpack</p>
                    <p className="my-5 text-gray-300">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates odit vitae repellat doloremque dolorem, numquam.</p>
                    <button type="button" className="text-white bg-green-500 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-16 py-2.5 text-center me-2 mb-2 dark:bg-green-500 dark:hover:bg-green-700 dark:focus:ring-green-800">Add to Card</button>
                </div>


            </div>




        </>
    )
}

export default AddPage