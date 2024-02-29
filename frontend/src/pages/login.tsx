import { ChangeEvent, useState } from "react"

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

        if(name =="email")
        setLoginForm( {...loginForm, email: value})

        if (name =="password")
        setLoginForm({...loginForm, password: value})

    }   

    return (
        <div className="min-h-[600px] w-full flex" >

            <div className=" w-0 md:w-1/2 bg-cover bg-center" style={{ backgroundImage: `url('./login-bg.jpg')`, backgroundSize: "cover" }}></div>

            <form className="bg-white w-full h-full z-40 border-l-2 md:w-1/2" >


                <div className="p-5 m-auto relative ">


                    <div className="p-5 ">
                        <h1 className="text-4xl">Sign In</h1>
                        <br></br>

                        <h3 className="text-lg">User Name/Email</h3>
                        <input type="text" onChange={e => handleChange(e)} value={loginForm.email} name="email" className="my-3 w-full border-b-2 text-gray-900 focus:outline-none transition focus:border-blue-300"></input>

                        <h3 className="text-lg">Password</h3>
                        <input type="password" onChange={e => handleChange(e)} value={loginForm.password} name="password" className="my-3 w-full border-b-2 text-gray-900 focus:outline-none transition focus:border-blue-300"></input>
                    </div>
                    <button className="mx-5 transition bg-gradient-to-r from-cyan-500 to-blue-500 text-white w-1/2 rounded-lg h-16 hover:from-sky-500 hover:to-indigo-500" type="submit">Sign In</button>

                </div>

                

            </form>
        </div>
    )
}