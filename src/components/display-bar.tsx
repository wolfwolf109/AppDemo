import { useState } from "react"


export default function DisplayBar() {
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
        const newTarget = targetCompany + 1 >= logos.length ? 0 : targetCompany + 1
        setTargetCompany(newTarget)
    }

    return (
        <div className="bg-slate-100">
            <div className="font-bold text-5xl text-center"> Our Clients</div>

        </div>
    )
}