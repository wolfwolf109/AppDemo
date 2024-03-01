import { Link } from "react-router-dom";
import DisplayBar from "../components/display-bar";


export default function Home() {
  return (
    <div >
      <div className="w-full h-[550px]  relative text-center " >
        <img className="relative top-0 opacity-50 object-cover height-auto overflow-hidden h-[550px] w-full" src="./background/home-bg.jpg">
        </img>
        <div className=" h-[500px] absolute top-10 left-0 right-0 mx-auto w-2/3 text-center overflow-auto">
          <div className="text-5xl mb-4 font-bold">WE ARE HERE TO HELP!</div>
          <div className="text-2xl mb-8">Welcome to our website! Explore our wide range of products and services to meet your needs. Whether you're looking for the latest fashion trends, tech gadgets, or home decor, we have something for everyone.</div>

          <div className="flex flex-wrap mx-auto justify-center">
            <div className=" md:basis-1/3 pt-2 md:mt-0">
              <div className="rounded-lg border-2 bg-white h-56 w-56 mx-auto ">
                <div className="font-bold text-6xl text-blue-700 mt-10">200+</div>
                <div className="mt-8">Matched Cases</div>
              </div>
            </div>
            <div className="  md:basis-1/3 pt-2 md:mt-0">
              <div className="rounded-lg border-2 bg-white h-56 w-56 mx-auto">
                <div className="font-bold text-6xl text-blue-700 mt-10">500+</div>
                <div className="mt-8">Clients</div>
              </div>
            </div>
            <div className="  md:basis-1/3 pt-2 md:mt-0">
              <div className="rounded-lg border-2 bg-white h-56 w-56 mx-auto">
                <div className="font-bold text-6xl text-blue-700 mt-10">#1</div>
                <div className="mt-8">In Industry</div>
              </div>
            </div>
          </div>
          <div className="flex justify-center h-16 mt-3"><button><Link className="transition rounded-full bg-white p-4 mr-5 hover:-translate-y-1 hover:bg-sky-200" to="/about">About Us</Link></button>
            <button><Link className="transition  rounded-full text-white bg-blue-900 hover:-translate-y-1 p-4 hover:bg-sky-700" to="/contact-us">Contact Us</Link></button>
            </div>

        </div>

      </div>

      <div className=" min-h-[400px] bg-slate-100 flex flex-wrap">
        <span className=" w-full h-full  text-center p-5  md:basis-1/3 overflow-auto" >
          <div className="text-4xl font-bold">A Video about the company</div>
          <div className="overflow-hidden mt-3"> Discover a world of possibilities with our innovative solutions. From cutting-edge technology to personalized customer experiences, we strive to exceed your expectations. Our team of experts is here to assist you every step of the way. Stay connected with our community and be the first to know about our exclusive offers, promotions, and exciting updates. Join our mailing list and follow us on social media to stay up-to-date with the latest trends and news.</div>
        </span>
        <iframe className="w-full p-5 md:basis-2/3" src="https://www.youtube.com/embed/jNQXAC9IVRw?si=h80uraeNCPPfh1-K" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>

      <DisplayBar/>
    </div>
  );
}