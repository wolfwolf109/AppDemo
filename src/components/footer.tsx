import { Link } from "react-router-dom";


export default function Footer() {

    return (
        <footer className=" bottom-0 bg-blue-950 text-white flex  flex-col w-full px-11 text-center md:flex-row ">
            <div className="flex flex-col items-center max-md:border-b-2 p-4 md:w-1/3">
                <h1>Contact Us</h1>
                <a href="mailto:appdemo@demo.com">Email: appdemo@demo.com</a>
                <div>Telephone: +852 1234 5678</div>
                <div>Address: Flat X, 8/F, Kwun Tong Building, Kwun Tong</div>
            </div>
            <div className="flex flex-col items-center max-md:border-b-2 p-4 md:w-1/3">
                <h1>Important Notice</h1>
                <div> <u>Privacy Statement </u></div>
                <div><u>Terms of Use</u></div>
                <div><u>Online Security</u></div>
            </div>
            <div className="flex flex-col items-center p-4 md:w-1/3">
            <h1>About "Company"</h1>
                <Link to="/"> <u>Home</u></Link>
                <Link to="/about"><u>About Us</u></Link>
                <Link to="/events"><u>Events and News</u></Link>
                <Link to="/contact"><u>Contact us</u></Link>
            </div>
        </footer>
    )
}