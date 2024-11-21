import Avatar from "./Avatar"

const Appbar = () => {
  return (
    <>
         <div className="border-b flex justify-between px-10 py-4">
            <div className="flex flex-col justify-center">Medium</div>
            <div>
                <Avatar name="Pranav" size={10}/>
            </div>
         </div>
    </>
  )
}

export default Appbar