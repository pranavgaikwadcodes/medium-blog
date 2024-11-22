import { NavLink } from "react-router-dom"
import Avatar from "./Avatar"

const Appbar = () => {
  return (
    <>
      <div className="border-b flex justify-between px-10 py-4">

        <NavLink to={'/blogs'} className="flex flex-col justify-center cursor-pointer">
          Medium
        </NavLink>

        <div className="flex ">
          <NavLink to={'/publish'}>
            <button type="button" className=" mr-5 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100">
              Publish Blog
            </button>
          </NavLink>

          <Avatar name="Pranav" size={10} />
        </div>

      </div>
    </>
  )
}

export default Appbar