import { Outlet } from "react-router"
import Nav from "./Nav"
import Footer from "./Footer"


const Rootlayouts = () => {
    return (
        <div className="bg-white text-black dark:bg-black/90 dark:text-white/90">
            <Nav />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Rootlayouts