import { Outlet } from "react-router"
import Nav from "./Nav"
import Footer from "./Footer"


const Rootlayouts = () => {
    return (
        <>
            <Nav />
            <Outlet />
            <Footer />
        </>
    )
}

export default Rootlayouts