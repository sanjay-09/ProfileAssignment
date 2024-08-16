import { Outlet } from "react-router-dom"
import Header from "../Components/Header"


const GlobalLayout = () => {
    return (
        <>
         
            <Header />
            <Outlet />
        </>
    )
}

export default GlobalLayout