import axios from "axios"
import Appbar from "../components/Appbar"
import { BACKEND_URL } from "../config"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

interface BlogResponse {
    id: string;
}

const Publish = () => {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const navigate = useNavigate()

    const handlePublish = async () => {
        if (title === "" && content === "") {
            alert("Form cannot be empty.")
            return
        }

        const response = await axios.post<BlogResponse>(`${BACKEND_URL}/api/v1/blog`, { title, content }, {
            headers: {
                'authorization': "Bearer " + localStorage.getItem("token")
            }
        })
        navigate(`/blog/${response.data.id}`)
    }
    return (
        <>
            <Appbar />
            <div className="w-[50%] mt-20 flex justify-self-center flex-col">
                <div className="mb-6 w-full">
                    <input name="title" type="text" className="block min-w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-2xl focus:ring-blue-500 focus:border-blue-500 outline-none" placeholder="Title" onChange={(e) => { setTitle(e.target.value) }} />
                </div>

                <div className="mb-6 w-full">
                    <textarea name="content" id="message" rows={20} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 outline-none" placeholder="Write your thoughts here..." onChange={(e) => { setContent(e.target.value) }}></textarea>
                </div>

                <button type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
                    onClick={handlePublish}
                >
                    Publish
                </button>



            </div>
        </>
    )
}

export default Publish