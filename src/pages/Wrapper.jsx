import Navbar from "../components/Navbar"
import { Outlet } from "react-router-dom"

const Wrapper = () => {
  return (
    <>
      <Navbar />
      <div className="py-10 h-full">
        <div className="container mx-auto">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default Wrapper