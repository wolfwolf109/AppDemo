

export default function Login() {

    return (
        <div className="h-full w-full">
            <div className="hidden h-full float-left bg-slate-300 md:block md:w-1/2">
                <img src="login-bg.jpg" alt="login Photo" className="w-full">
                </img>
            </div>


            <form className="p-5 w-full h-full  float-left md:w-1/2">

                <div className="p-5 mb-3 w-full h-28 bg-slate-300" >Company Logo</div>

                <div className="p-5 m-auto h-1/2 rounded-lg relative shadow-md">
                    <h1>Sign In</h1>

                    <label>User Name/Email</label>
                    <input></input>

                    <h3>Password</h3>
                    <input type="password"></input>

                </div>

            </form>
        </div>
    )
}