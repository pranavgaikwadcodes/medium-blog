import { Blog } from "../hooks"
import Appbar from "./Appbar"
import Avatar from "./Avatar"

const FullBlog = ({ blog }: { blog: Blog }) => {
    return (
        <>
            <Appbar />

            <div className="flex justify-center">
                <div className="grid grid-cols-12 p-10 w-full pt-200 max-w-screen-xl">
                    <div className="col-span-8 px-5">
                        <div className="text-5xl font-extrabold">
                            {blog.title}
                        </div>
                        <div className="text-slate-400">
                            Posted on 21/11/2024
                        </div>
                        <div className="text-slate-800">
                            {blog.content}
                        </div>
                    </div>

                    <div className="col-span-4 px-5">
                        <div className="font-medium text-slate-800">
                            Author
                        </div>
                        <div className="pt-4 flex ">
                            <Avatar name={blog.author.name || "Anonymous"} />
                            <div className="text-xl font-bold">
                                {blog.author.name || "Anonymous"}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FullBlog