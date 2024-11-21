import { useParams } from "react-router-dom"
import { useBlog } from "../hooks"
import FullBlog from "../components/FullBlog"

const Blog = () => {
  const { id } = useParams()
  const {blog, loading} = useBlog({ id : id || "" })

  if( loading ) {
    return <div>Loading...</div>
  }

  return (
    <>
      <FullBlog blog={blog}/>
    </>
  )
}

export default Blog