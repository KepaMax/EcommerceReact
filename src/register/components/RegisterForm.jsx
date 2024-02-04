import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function RegisterForm() {
    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center">
            <h2 className="text-3xl font-bold">Hello Again!</h2>
            <p className="text-2xl">Welcome Back</p>
            <form className="flex flex-col items-center justify-center sm:grid grid-cols-2 sm:gap-4 w-full max-w-[850px] mt-6 px-10" action="">
                <div className='flex items-center my-2 rounded-[30px] w-full sm:max-w-[400px] border border-zinc-100 h-fit px-3'>
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="6.5" r="4" stroke="#1C274C" stroke-width="1.5" />
                        <ellipse cx="12" cy="17.5" rx="7" ry="4" stroke="#1C274C" stroke-width="1.5" />
                    </svg>
                    <input className="px-3 py-1 mx-1 h-full w-full outline-none" placeholder='Name' type="text" />
                </div>
                <div className='flex items-center my-2 rounded-[30px] w-full sm:max-w-[400px] border border-zinc-100 h-fit px-3'>
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="6.5" r="4" stroke="#1C274C" stroke-width="1.5" />
                        <ellipse cx="12" cy="17.5" rx="7" ry="4" stroke="#1C274C" stroke-width="1.5" />
                    </svg>
                    <input className="px-3 py-1 mx-1 h-full w-full outline-none" placeholder='Surname' type="text" />
                </div>
                <div className='flex items-center my-2 rounded-[30px] w-full sm:max-w-[400px] border border-zinc-100 h-fit px-3'>
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 12.5C2 8.72876 2 6.84315 3.17157 5.67157C4.34315 4.5 6.22876 4.5 10 4.5H14C17.7712 4.5 19.6569 4.5 20.8284 5.67157C22 6.84315 22 8.72876 22 12.5C22 16.2712 22 18.1569 20.8284 19.3284C19.6569 20.5 17.7712 20.5 14 20.5H10C6.22876 20.5 4.34315 20.5 3.17157 19.3284C2 18.1569 2 16.2712 2 12.5Z" stroke="#1C274C" stroke-width="1.5" />
                        <path d="M6 8.5L8.1589 10.2991C9.99553 11.8296 10.9139 12.5949 12 12.5949C13.0861 12.5949 14.0045 11.8296 15.8411 10.2991L18 8.5" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" />
                    </svg>
                    <input className="px-3 py-1 mx-1 h-full w-full outline-none" placeholder='Email Address' type="email" />
                </div>
                <div className='flex items-center my-2 rounded-[30px] w-full sm:max-w-[400px] border border-zinc-100 h-fit px-3'>
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 16.5C2 13.6716 2 12.2574 2.87868 11.3787C3.75736 10.5 5.17157 10.5 8 10.5H16C18.8284 10.5 20.2426 10.5 21.1213 11.3787C22 12.2574 22 13.6716 22 16.5C22 19.3284 22 20.7426 21.1213 21.6213C20.2426 22.5 18.8284 22.5 16 22.5H8C5.17157 22.5 3.75736 22.5 2.87868 21.6213C2 20.7426 2 19.3284 2 16.5Z" stroke="#1C274C" stroke-width="1.5" />
                        <path d="M6 10.5V8.5C6 5.18629 8.68629 2.5 12 2.5C15.3137 2.5 18 5.18629 18 8.5V10.5" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" />
                        <path d="M8 16.5H8.009M11.991 16.5H12M15.991 16.5H16" stroke="#1C274C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <input className="px-3 py-1 mx-1 h-full w-full outline-none" placeholder='Password' type="password" />
                </div>
                <div className="w-full flex col-span-2 justify-center">
                    <button className="bg-green-400 w-full sm:max-w-[400px]  mt-4 text-white py-2 " type="submit">Register</button>
                </div>
            </form>
            <div className="text-teal-800 mt-3">
                <span>Do you have account? </span>
                <a className="underline">Log in</a>
            </div>
        </div>
    )
}

export default RegisterForm