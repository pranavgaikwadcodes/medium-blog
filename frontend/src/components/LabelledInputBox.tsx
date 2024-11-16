import React, { ChangeEvent } from 'react'

interface LabelledInputBoxTypes {
    label: string;
    name: string;
    type?: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const LabelledInputBox = ({ label, name, type, placeholder, onChange }: LabelledInputBoxTypes) => {
    return (
        <>
            <div>
                <label className="block mb-2 text-md font-medium text-gray-900 after:content-['*'] after:ml-0.5 after:text-red-500">{label}</label>
                <input type={type || "text"} name={name} className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 focus:outline-none mb-2" placeholder={placeholder} required onChange={onChange} />
            </div>
        </>
    )
}

export default LabelledInputBox