import axios from "axios"
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config"

export interface Blog {
    id: number;
    title: string;
    content: string;
    author: {
        name: string;
    };
}

export const useBlog = ( { id } : { id : string } ) => {
    const [loading, setLoading] = useState(true)
    const [blog, setBlog] = useState< Blog >()

    useEffect( () => {
        axios.get< { blog: Blog } >(`${BACKEND_URL}/api/v1/blog/${id}`, {
            headers: {
                'authorization': "bearer " + localStorage.getItem('token')
            }
        })
        .then( (response : any) => {
            setBlog(response.data.blog)
            setLoading(false)
        })
        .catch( (error) => {
            console.error(error)
        })
    }, [id])

    return {
        blog,
        loading
    }
}

export const useBlogs = () => {
    const [loading, setLoading] = useState(true)
    const [blogs, setBlogs] = useState< Blog[] >([])

    useEffect( () => {
        axios.get< { blogs: Blog[] } >(`${BACKEND_URL}/api/v1/blog/bulk`, {
            headers: {
                'authorization': "bearer " + localStorage.getItem('token')
            }
        })
        .then( (response : any) => {
            setBlogs(response.data.blogs)
            setLoading(false)
        })
        .catch( (error) => {
            console.error(error)
        })
    }, [])

    return {
        blogs,
        loading
    }
}