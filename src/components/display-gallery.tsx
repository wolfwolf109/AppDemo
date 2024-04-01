
import { FreeMode, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode';
import 'swiper/css/autoplay';

import '../index.css'


export default function DisplayGallery() {

    const logos = [
        { name: "ABC Limited", path: "./logos/fakeCompany1.png" },
        { name: "123 Limited", path: "./logos/fakeCompany2.jpeg" },
        { name: "JKL Limited", path: "./logos/fakeCompany3.jpeg" },
        { name: "App Limited", path: "./logos/fakeCompany4.jpeg" },
    ]



    return (
        <div className="">
            <div className="font-bold text-5xl text-center mt-3"> Our Clients</div>
                <Swiper slidesPerView={3}
                    spaceBetween={30}
                    freeMode={true}
                    loop={true}
                    autoplay={{
                        delay: 10000,
                        disableOnInteraction: false,
                      }}
                    modules={[FreeMode, Autoplay]}
                    className="mySwiper my-2">
                    <SwiperSlide className=''><img className="hidden  md:block transition h-[180px] mt-3 mx-2 rounded-full border-2" src={logos[0].path} alt={logos[0].name}></img></SwiperSlide>
                    <SwiperSlide className=''><img className="hidden  md:block transition h-[180px] mt-3 mx-2 rounded-full border-2" src={logos[1].path} alt={logos[1].name}></img></SwiperSlide>
                    <SwiperSlide className=''><img className="hidden  md:block transition h-[180px] mt-3 mx-2 rounded-full border-2" src={logos[2].path} alt={logos[2].name}></img></SwiperSlide>
                    <SwiperSlide className=''><img className="hidden  md:block transition h-[180px] mt-3 mx-2 rounded-full border-2" src={logos[3].path} alt={logos[3].name}></img></SwiperSlide>
                </Swiper>

                {/* <button className="h-full hover:bg-slate-100 w-40" onClick={handleLeft}>
                    <i className="fa-solid fa-arrow-left"></i>
                </button>
                <img className="hidden  md:block transition h-[180px] mt-3 mx-2 rounded-full border-2" src={logos[(targetCompany-1 <0? logos.length-1: targetCompany-1)].path} alt={logos[targetCompany].name}></img>
                <img className="h-[180px] md:h-[220px] mt-3 mx-2 rounded-full border-2" src={logos[targetCompany].path} alt={logos[targetCompany].name}></img>
                <img className="hidden md:block h-[180px] mt-3 mx-2 rounded-full border-2" src={logos[(targetCompany+1 >= logos.length? 0: targetCompany+1)].path} alt={logos[targetCompany].name}></img>
                <button className="h-full hover:bg-slate-100 w-40" onClick={handleRight}>
                    <i className="fa-solid fa-arrow-right"></i>
                </button> */}
            
        </div>
    )
}