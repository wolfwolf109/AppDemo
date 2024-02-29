

export default function Footer() {

    return (
        <footer className="bg-sky-950 text-white flex  flex-col absolute w-full bottom-0 px-11 text-center md:flex-row ">
            <div className="flex flex-col items-center max-md:border-b-2 p-4 md:w-1/3">
                <h1>Contact Us</h1>
                <div>Email: appDemo@demo.com</div>
                <div>Telephone: +852 6666 7777</div>
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
                <div> <u>Home</u></div>
                <div><u>About Us</u></div>
                <div><u>Events and News</u></div>
                <div><u>Contact us</u></div>
            </div>
        </footer>
    )
}