import { useState } from "react"


export default function DisplayGallery() {
    const [targetCompany, setTargetCompany] = useState(1)

    const logos = [
        { name: "ABC Limited", path: "./logos/fakeCompany1.png" },
        { name: "123 Limited", path: "./logos/fakeCompany2.jpeg" },
        { name: "JKL Limited", path: "./logos/fakeCompany3.jpeg" },
        { name: "App Limited", path: "./logos/fakeCompany4.jpeg" },
    ]

    const handleLeft = () => {
        const newTarget = targetCompany - 1 < 0 ? logos.length - 1 : targetCompany - 1
        setTargetCompany(newTarget)
    }
    const handleRight = () => {
        setTargetCompany(oldTarget => (oldTarget+1)%logos.length)
    }

    return (
        <div className="">
            <div className="font-bold text-5xl text-center mt-3"> Our Clients</div>
            <div className="h-[300px] overflow-hidden flex justify-center items-center">
                <button className="h-full hover:bg-slate-100 w-40" onClick={handleLeft}>
                    <i className="fa-solid fa-arrow-left"></i>
                </button>
                <img className="hidden  md:block transition h-[180px] mt-3 mx-2 rounded-full border-2" src={logos[(targetCompany-1 <0? logos.length-1: targetCompany-1)].path} alt={logos[targetCompany].name}></img>
                <img className="h-[180px] md:h-[220px] mt-3 mx-2 rounded-full border-2" src={logos[targetCompany].path} alt={logos[targetCompany].name}></img>
                <img className="hidden md:block h-[180px] mt-3 mx-2 rounded-full border-2" src={logos[(targetCompany+1 >= logos.length? 0: targetCompany+1)].path} alt={logos[targetCompany].name}></img>
                <button className="h-full hover:bg-slate-100 w-40" onClick={handleRight}>
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </div>
    )
}