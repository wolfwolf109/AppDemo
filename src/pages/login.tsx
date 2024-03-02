import axios from "axios"
import { ChangeEvent, MouseEvent, useState } from "react"

type LoginFormData = {
    email: string,
    password: string
    rePassword?: string
}

export default function Login() {
    const [popUp, setPopUp] = useState(false)
    const [isReEnterCorrect, setIsReEnterCorrect] = useState(true)
    const [loginForm, setLoginForm] = useState<LoginFormData>({
        email: "",
        password: ""
    })
    const [registerForm, setRegisterForm] = useState<LoginFormData>({
        email: "",
        password: "",
        rePassword: "",
    })

    const handleLoginChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target

        setLoginForm({ ...loginForm, [name]: value})

    }

    const handleRegisterChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        
        setRegisterForm({ ...registerForm, [name]: value})
    }

    const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        axios.post('https://bookish-barnacle-p5jwj4jjp9p36745-3001.app.github.dev/login', loginForm)
            .then((res) => {
                window.alert(res.data.message)
                document.cookie = `login_token=${res.data.token}`
            })
            .catch(e => window.alert(e))
    }
    const handleRegister = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if(registerForm.password !== registerForm.rePassword){ 
            setIsReEnterCorrect(false)
            return;
        }
        
        if(registerForm.password ==="" || registerForm.email ==='' || registerForm.rePassword ===""){
            window.alert("Missing Value!")
            return;
        }

        axios.post('https://bookish-barnacle-p5jwj4jjp9p36745-3001.app.github.dev/register', registerForm)
        .then((res) => {
            window.alert(res.data.message)
            document.cookie = `login_token=${res.data.token}`
        })
        .catch(e => window.alert(e))

    }

    const handlePopUpopen = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setPopUp(true)
        document.body.style.overflow = 'hidden';
    }

    const handlePopUpClose = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setPopUp(false)
        document.body.style.overflow = '';
    }

    return (
        <div className="min-h-[600px] w-full flex overflow-hidden" >

            <div className=" w-0 md:w-1/2 bg-cover bg-center" style={{ backgroundImage: `url('./background/login-bg.jpg')`, backgroundSize: "cover" }}></div>

            <form className="min-h-[600px] bg-white w-full h-full z-40 border-l-2 md:w-1/2" >


                <div className="p-5 m-auto relative ">


                    <div className="p-5 ">
                        <h1 className="text-4xl">Sign In</h1>
                        <br></br>

                        <h3 className="text-lg">User Name/Email</h3>
                        <input type="text" onChange={e => handleLoginChange(e)} value={loginForm.email} name="email" className="my-3 w-full border-b-2 text-gray-900 focus:outline-none transition focus:border-blue-300"></input>

                        <h3 className="text-lg">Password</h3>
                        <input type="password" onChange={e => handleLoginChange(e)} value={loginForm.password} name="password" className="my-3 w-full border-b-2 text-gray-900 focus:outline-none transition focus:border-blue-300"></input>
                    </div>
                    <div className="flex flex-row">
                        <button onClick={e => handleSubmit(e)} className="ml-5 mb-3 transition bg-gradient-to-r from-cyan-500 to-blue-500 text-white w-full rounded-lg h-16 hover:from-sky-500 hover:to-indigo-500" type="submit">Sign In</button>
                        <button onClick={e => handlePopUpopen(e)} className="ml-5 transition bg-gradient-to-r from-purple-500 to-pink-500 text-white w-full rounded-lg h-16 hover:from-violet-500 hover:to-fuchsia-500" type="submit">Register now!</button>
                    </div>

                </div>



            </form>

            <div className={(popUp ? "" : "hidden ") + " top-0 fixed bg-slate-700 bg-opacity-50 h-screen w-screen flex justify-center items-center z-50"}>
                <form className=" bg-white rounded-lg p-5 ">


                    <button onClick={handlePopUpClose} className="w-full text-right">
                        <i className="  fa-solid fa-circle-xmark"></i>
                    </button>
                    <h1 className="text-3xl">Register</h1>
                    <br></br>
                    <input onChange={e => handleRegisterChange(e)} className="my-3 w-full border-2 p-3 bg-slate-200 text-gray-900 focus:outline-none transition focus:border-blue-300"
                        type="text" name="email" value={registerForm.email} placeholder="Email" />
                    <input onChange={e => handleRegisterChange(e)} className="my-3 w-full border-2 p-3 bg-slate-200 text-gray-900 focus:outline-none transition focus:border-blue-300"
                        type="password" name="password" value={registerForm.password} placeholder="Password" />
                    <input onChange={e => handleRegisterChange(e)} className="my-3 w-full border-2 p-3 bg-slate-200 text-gray-900 focus:outline-none transition focus:border-blue-300"
                        type="password" name="rePassword" value={registerForm.rePassword} placeholder="Re-enter your Password" />
                    <button onClick={e => handleRegister(e)} className="bg-sky-900 text-white p-5">Register</button>
                    {!isReEnterCorrect && <span className="text-red-500 ml-3">The password doesn't match</span>}
                </form>
            </div>




        </div>
    )
}