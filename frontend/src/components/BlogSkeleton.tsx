const BlogSkeleton = () => {
    return (
        <>

            <div className=" mt-3 flex flex-col p-2 drop-shadow-md rounded-md bg-white cursor-pointer">
                <div id="header" className="flex p-2">
                    <div className="h-4 w-4 bg-gray-200 rounded-full mb-4"></div>

                    <div className="h-2 bg-gray-200 rounded-full max-w-28 mb-2.5"></div>
                    <div id="seperator" className="text-slate-400 px-2">&#183;</div>
                    <div className="h-2 bg-gray-200 rounded-full max-w-28 mb-2.5"></div>

                </div>
                <div>

                    <div className="h-4 bg-gray-200 rounded-full w-48 mb-4"></div>
                    <div className="h-2 bg-gray-200 rounded-full max-w-[40%] mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full max-w-[45%] mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full max-w-[47%] mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full max-w-[40%] mb-2.5"></div>
                </div>

                <div className="h-2 bg-gray-200 rounded-full max-w-[10%] mb-2.5"></div>
            </div>

        </>
    )
}

export default BlogSkeleton