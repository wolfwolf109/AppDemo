import axios from "axios"
import { ChangeEvent, MouseEvent, useState } from "react"

type LoginFormData = {
    email: string,
    password: string
}

export default function Login() {

    const [loginForm, setLoginForm] = useState<LoginFormData>({
        email: "",
        password: ""
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target

        if (name === "email")
            setLoginForm({ ...loginForm, email: value })

        if (name === "password")
            setLoginForm({ ...loginForm, password: value })

    }

    const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        axios.post('https://bookish-barnacle-p5jwj4jjp9p36745-3001.app.github.dev/login', loginForm)
        .then((res)=> {
            window.alert(res.data.message)
            document.cookie = `login_token=${res.data.token}`
        })
        .catch(e => window.alert(e))
    }

    const handleRegister = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        window.alert("Function not yet implemented!")
    }

    return (
        <div className="min-h-[600px] w-full flex" >

            <div className=" w-0 md:w-1/2 bg-cover bg-center" style={{ backgroundImage: `url('./login-bg.jpg')`, backgroundSize: "cover" }}></div>

            <form className="min-h-[600px] bg-white w-full h-full z-40 border-l-2 md:w-1/2" >


                <div className="p-5 m-auto relative ">


                    <div className="p-5 ">
                        <h1 className="text-4xl">Sign In</h1>
                        <br></br>

                        <h3 className="text-lg">User Name/Email</h3>
                        <input type="text" onChange={e => handleChange(e)} value={loginForm.email} name="email" className="my-3 w-full border-b-2 text-gray-900 focus:outline-none transition focus:border-blue-300"></input>

                        <h3 className="text-lg">Password</h3>
                        <input type="password" onChange={e => handleChange(e)} value={loginForm.password} name="password" className="my-3 w-full border-b-2 text-gray-900 focus:outline-none transition focus:border-blue-300"></input>
                    </div>
                    <div className="flex flex-row">
                    <button onClick={e => handleSubmit(e)} className="ml-5 mb-3 transition bg-gradient-to-r from-cyan-500 to-blue-500 text-white w-full rounded-lg h-16 hover:from-sky-500 hover:to-indigo-500" type="submit">Sign In</button>
                    <button onClick={e => handleRegister(e)} className="ml-5 transition bg-gradient-to-r from-purple-500 to-pink-500 text-white w-full rounded-lg h-16 hover:from-violet-500 hover:to-fuchsia-500" type="submit">Register</button>
                    </div>
                    
                </div>



            </form>
        </div>
    )
}