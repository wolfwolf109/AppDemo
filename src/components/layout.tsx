import { Link, Outlet } from "react-router-dom";
import Footer from "./footer";
import { useState } from "react";

export default function Layout() {
    const [isMenuOpen, SetIsMenuOpen] = useState(false);

    function switchMenu() { SetIsMenuOpen(!isMenuOpen) }

    return (
        <div className="overflow-hidden ">
            {/* A "layout route" is a good place to put markup you want to
            share across all the pages on your site, like navigation. */}
            <nav className=" shadow-lg top-0 bg-gradient-to-r from-blue-800 to-cyan-400 flex flex-row h-20 text-white z-50" >
                <div className="m-4 p-4  w-1/2">
                    <Link to="/">Company Logo</Link>
                </div>

                <button className="transition absolute right-3 top-7 text-center hover:-translate-y-1 md:hidden" onClick={switchMenu}>
                    <i className="fa fa-bars"></i>
                </button>

                <div className={(isMenuOpen ? "flex absolute top-20 bg-sky-900 md:static md:bg-transparent " : "hidden ") + "z-50 flex-col md:m-4 md:flex md:flex-row justify-end w-full"}>

                    <Link className="transition hover:-translate-y-1 p-4 hover:border-b-4" to="/">Home</Link>


                    <Link className="transition hover:-translate-y-1 p-4 hover:border-b-4" to="/about">About Us</Link>


                    <Link className="transition hover:-translate-y-1 p-4 hover:border-b-4" to="/dashboard">Events and News</Link>


                    <Link className="transition hover:-translate-y-1 p-4 hover:border-b-4" to="/contact-us">Contact Us</Link>


                    <Link className="transition hover:-translate-y-1 p-4 md:hover:border-b-4" to="/login">Login</Link>

                </div>
            </nav>

            <hr />

            {/* An <Outlet> renders whatever child route is currently active,
            so you can think about this <Outlet> as a placeholder for
            the child routes we defined above. */}
            <Outlet/>
            <Footer />
        </div>
    );
}