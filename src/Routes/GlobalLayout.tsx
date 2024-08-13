import { Outlet } from "react-router-dom"
import Header from "../Components/Header"
import { Toaster } from "react-hot-toast"

const GlobalLayout = () => {
    return (
        <>
         
            <Header />
            <Outlet />
        </>
    )
}

export default GlobalLayout