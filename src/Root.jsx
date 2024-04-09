import Nav from "./pages/Shared/Nav";
import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="container mx-auto lg:px-20 md:px-16 px-2 font-poppins">
            <div className="mb-10 mt-4">
            <Nav></Nav>
            </div>
            <Outlet></Outlet>
           
            
            
        </div>
    );
};

export default Root;