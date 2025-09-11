import React from 'react'

export default function Form() {
    return (
        <>
            <div className="flex justify-center items-center min-h-130">
                <div className="w-[70%] space-y-4">
                    <input type="text" className="w-full h-10 border p-5 border-blue-400" placeholder="Enter the Name" />
                    <input type="email" className="w-full h-10 border p-5 border-blue-400" placeholder="Enter the Email" />
                    <input type="number" className="w-full h-10 border p-5 border-blue-400" placeholder="Enter the Phone number" />
                    <textarea className="w-full h-40 border p-5 border-blue-400" placeholder="Enter the Comment" />
                    <button className="bg-amber-600 text-white px-4 py-2">Submit</button>
                </div>
            </div>

        </>
    )
}
