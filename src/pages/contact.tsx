import { ChangeEvent, MouseEvent, useState } from "react"


export default function Contact() {
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [contactForm, setContactForm] = useState({
        name: "",
        email: "",
        message: "",
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setContactForm({ ...contactForm, [name]: value })
    }

    const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setIsSubmitting(true)
        setTimeout(function(){
            setIsSubmitting(false)
            setIsSubmitted(true)
        }, 1000)
    }

    return (
        <div className="min-h-[500px] flex flex-wrap">
            <div className="md:basis-1/2">
            <div className="text-4xl font-bold text-center mt-5">Contact Us</div>
                <form className=" border-2 shadow-xl p-3 m-3 md:m-10" >
                    
                    <input onChange={e => handleChange(e)} className="my-3 w-full border-2 p-3 bg-slate-200 text-gray-900 focus:outline-none transition focus:border-blue-300"
                        type="text" name="name" value={contactForm.name} placeholder="Name" />
                    <input onChange={e => handleChange(e)} className="my-3 w-full border-2 p-3 bg-slate-200 text-gray-900 focus:outline-none transition focus:border-blue-300"
                        type="text" name="email" value={contactForm.email} placeholder="Email" />
                    <textarea onChange={e => handleChange(e)} className="my-3 w-full border-2 p-3 bg-slate-200 text-gray-900 focus:outline-none transition focus:border-blue-300"
                        name="message" value={contactForm.message} placeholder="Message" />

                    <button type="submit" onClick={e=>handleSubmit(e)} className="bg-sky-900 w-28 rounded-lg text-white h-10 hover:bg-sky-600">
                    {isSubmitting && <i className="fa-solid fa-spinner animate-spin mr-2"></i>}
                        {isSubmitting? "Sending...": "Send"}</button> 
                    
                    {isSubmitted && <span className="ml-3">Our team will get back to you soon!</span>}
                </form>

            </div>
            <iframe className="md:basis-1/2 p-5" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118083.39344527651!2d114.09578414958334!3d22.349624377402556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3403e2eda332980f%3A0xf08ab3badbeac97c!2z6aaZ5riv!5e0!3m2!1szh-TW!2shk!4v1709352101775!5m2!1szh-TW!2shk" width="600" height="450" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

        </div>
    )
}