import { Link, Outlet } from "react-router-dom";
import Footer from "./footer";
import { useState } from "react";

export default function Layout() {
    const [isMenuOpen, SetIsMenuOpen] = useState(false);

    function switchMenu() { SetIsMenuOpen(!isMenuOpen) }

    return (
        <div className="overflow-hidden">
            {/* A "layout route" is a good place to put markup you want to
            share across all the pages on your site, like navigation. */}
            <nav className="sticky top-0 bg-sky-950 flex flex-row h-20 text-white z-50" >
                <div className="m-4 p-4 bg-slate-500 w-1/2">
                    <Link to="/">Company Logo</Link>
                </div>

                <div className="absolute right-3 top-7 text-center hover:bg-white md:hidden " onClick={switchMenu}>
                    <i className="fa fa-bars"></i>
                </div>

                <div className={(isMenuOpen ? "flex  absolute top-20 bg-sky-900" : "hidden ") + " flex-col md:m-4 md:flex md:flex-row justify-end w-full"}>

                    <Link className="transition hover:-translate-y-1 p-4 hover:border-b-4" to="/">Home</Link>


                    <Link className="transition hover:-translate-y-1 p-4 hover:border-b-4" to="/about">About Us</Link>


                    <Link className="transition hover:-translate-y-1 p-4 hover:border-b-4" to="/dashboard">Events and News</Link>


                    <Link className="transition hover:-translate-y-1 p-4 hover:border-b-4" to="/nothing-here">Contact Us</Link>


                    <Link className="transition hover:-translate-y-1 p-4 hover:border-b-4" to="/login">Login</Link>

                </div>
            </nav>

            <hr />

            {/* An <Outlet> renders whatever child route is currently active,
            so you can think about this <Outlet> as a placeholder for
            the child routes we defined above. */}
            <Outlet />

            <Footer />
        </div>
    );
}