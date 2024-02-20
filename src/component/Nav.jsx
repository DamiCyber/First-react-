import { Outlet } from "react-router-dom";
import Navbar from "./Navbar"
function nav (){
    return(
        <>
        <h1>
            <Navbar/>
            <Outlet/>
        </h1>
        </>
    )
}
export default nav;