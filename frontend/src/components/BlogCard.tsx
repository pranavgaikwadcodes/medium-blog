interface BlogCardProps {
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
}

const BlogCard = ({
    authorName,
    title,
    content,
    publishedDate
}: BlogCardProps) => {
    return (
        <>
            <div className=" mt-3 flex flex-col p-2 drop-shadow-md rounded-md bg-white">
                <div id="header" className="flex p-2">
                    <div id="avatar" className="pr-2">
                        <div className="relative inline-flex items-center justify-center w-6 h-6 overflow-hidden rounded-full bg-gray-400">
                            <span className="font-medium text-gray-600">
                                {authorName.charAt(0).toUpperCase()}
                            </span>
                        </div>
                    </div>
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
        </>
    )
}

export default BlogCard