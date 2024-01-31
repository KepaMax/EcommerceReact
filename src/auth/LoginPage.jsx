function LoginPage() {
    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center">
            <h2 className="text-3xl font-bold">Hello Again!</h2>
            <p className="text-2xl mb-4">Welcome Back</p>
            <form className="flex flex-col items-center justify-center w-full max-w-[850px] mt-6 px-10" action="">
                <input className="rounded-[30px] px-3 py-1 w-full sm:max-w-[400px]  my-1 sm:my-2 border border-zinc-100 " type="email" placeholder="" />
                <input className="rounded-[30px] px-3 py-1 w-full sm:max-w-[400px]  my-1 sm:my-2 border border-zinc-100 " type="password" />
                <div className="w-full flex col-span-2 justify-center">
                    <button className="bg-green-400 w-full sm:max-w-[400px]  mt-4 text-white py-2 " type="submit">Login</button>
                </div>
            </form>
            <div className="text-teal-800 mt-3">
                <span>Do you have account? </span>
                <a className="underline">Log in</a>
            </div>
        </div>
    )
}

export default LoginPage