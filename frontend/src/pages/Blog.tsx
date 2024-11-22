import { useParams } from "react-router-dom"
import { useBlog } from "../hooks"
import FullBlog from "../components/FullBlog"
import Appbar from "../components/Appbar"
import BlogSkeleton from "../components/BlogSkeleton"

const Blog = () => {
  const { id } = useParams()
  const { blog, loading } = useBlog({ id: id || "" })

  if (loading || !blog) {
    return (
      <>
        <Appbar />
        <div className="flex flex-col justify-center items-center h-full">
          <div className="xl:w-[50%] w-full m-5">
            <BlogSkeleton />
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <Appbar />
      <FullBlog blog={blog} />
    </>
  )
}

export default Blog