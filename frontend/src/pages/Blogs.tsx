import Appbar from "../components/Appbar"
import BlogCard from "../components/BlogCard"
import BlogSkeleton from "../components/BlogSkeleton"
import { useBlogs } from "../hooks"


const Blogs = () => {

  const { blogs, loading } = useBlogs()

  if (loading) {
    return (
      <>
        <Appbar />
        <div className="flex flex-col justify-center items-center h-full">
          <div className="xl:w-[50%] w-full m-5">
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <Appbar />
      <div className="flex justify-center items-center h-full">

        <div className="xl:w-[50%] w-full m-5">
          {blogs.map(blog =>
            <BlogCard
              id={blog.id}
              authorName={blog.author.name || "Anonymous"}
              publishedDate="Saturday, 17 Nov 2024"
              title={blog.title}
              content={blog.content}
            />
          )}

        </div>

      </div>

    </>
  )
}

export default Blogs