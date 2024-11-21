import { NavLink } from "react-router-dom";
import Avatar from "./Avatar";

interface BlogCardProps {
    id: number;
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
}

const BlogCard = ({
    id,
    authorName,
    title,
    content,
    publishedDate
}: BlogCardProps) => {
    return (
        <>
            <NavLink to={`/blog/${id}`}>
                <div className=" mt-3 flex flex-col p-2 drop-shadow-md rounded-md bg-white cursor-pointer">
                    <div id="header" className="flex p-2">
                        <Avatar name={authorName} />
                        <div className="font-medium text-gray-800">
                            {authorName}
                        </div>
                        <div id="seperator" className="text-slate-400 px-2">&#183;</div>
                        <div className="font-light text-slate-400">
                            {publishedDate}
                        </div>
                    </div>
                    <div>
                        <div id="title" className="font-bold text-2xl">
                            {title}
                        </div>
                        <div id="content" className="text-slate-800">
                            {content.slice(0, 100)} . . .
                        </div>
                    </div>
                    <div id="footer" className="font-medium text-slate-400 mt-2">
                        {Math.ceil(content.length / 1000)} min read
                    </div>
                </div>
            </NavLink>
        </>
    )
}

export default BlogCard