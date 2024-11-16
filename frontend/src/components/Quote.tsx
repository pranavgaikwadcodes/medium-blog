const Quote = () => {
    return (
        <div className='bg-slate-200 h-screen flex justify-center'>
            <div className="max-w-lg flex justify-center items-left flex-col">
                <div className='max-w-lg font-bold text-3xl '>
                    "The customer service I received was xceptional. The support team went above nd beyond to address my concerns."
                </div>

                <div className='max-w-md text-xl font-semibold mt-4'>
                    Jules Winnfield
                </div>

                <div className='max-w-md text-sm text-slate-400 font-medium'>
                    CEO, Acme Inc
                </div>
            </div>
        </div>
    )
}

export default Quote