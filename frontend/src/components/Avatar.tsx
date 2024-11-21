const sizeMap = {
    8: "w-8 h-8",
    10: "w-10 h-10",
};

const Avatar = ( { name, size = 6 } : { name :string, size?: number } ) => {
    const dimension = `${size * 4}px`; // Convert Tailwind size to pixels (assuming 1 = 4px scale)
    return (
        <div id="avatar" className="pr-2">
            <div style={{ width: dimension, height: dimension }} className={`relative inline-flex items-center justify-center min-w-6 overflow-hidden rounded-full bg-gray-400`}>
                <span className="font-medium text-gray-600">
                    {name.charAt(0).toUpperCase()}
                </span>
            </div>
        </div>
    )
}

export default Avatar