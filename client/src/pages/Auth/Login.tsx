import { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import axios from "axios";

const Login = () => {

// Password input
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [password, setPassword] = useState<string>(''); 

    const isValidPassword = (value: string): boolean => {
        return (
            value.length >= 8 &&
            /[A-Z]/.test(value) &&
            /[0-9]/.test(value) &&
            /[!@#$%^&*(),.?":{}|<>]/.test(value)
        );
    };

    const togglePasswordVisibility = (): void => {
        setShowPassword(prev => !prev);
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/api/user/get', {
                password
            }, { withCredentials: true });
            console.log(response.data);
        } catch (error) {
            console.error('Error logging in:', error);
        }
    }
// Email Inputs  

    return (
        <div className="flex h-screen bg-primary-Dark-gray text-primary-off-white items-center justify-center gap-56">     
            {/* Logo & Text */}
            <div className="flex flex-col gap-4 text-center align-middle">
                <h1 className='font-sans text-3xl font-medium text-white'><span className='font-semibold text-3xl text-primary-off-white'>L</span>ink<span className='font-semibold text-3xl text-primary-off-white'>W</span>ave</h1>

                <h1 className="text-h1 font-sans font-normal text-primary-off-white text-center">
                    One tool for your<br /> whole team needs
                </h1>
            </div>
            
            {/* Sign In Card */}
            <form onSubmit={handleSubmit} className="px-8 py-8 bg-primary-off-white rounded-[32px]">
                <h3 className="font-sans text-primary-Dark-gray text-4xl font-medium">Sign In</h3>
                <div className="flex justify-start gap-1 text-primary-Dark-gray mt-4 font-sans font-medium">
                    <p>New user?</p>
                    <a href="/register" className="hover:text-secondary-purple transition duration-300 ease-in-out">
                        Create an account
                    </a>
                </div>

                {/* Email Login */}
                <div className="flex justify-center relative mt-6">
                    <label htmlFor="email" className="absolute text-xs font-normal px-1 -top-3 left-4 bg-gradient-to-b from-primary-off-white to-white text-primary-light-gray">
                        Email Address
                    </label>
                    <input 
                        id="email" 
                        className="h-[48px] w-[393px] text-primary-Dark-gray bg-white rounded-xl border border-[#bbb7c3] p-3" 
                        type="email" 
                        placeholder="email@gmail.com"
                    />
                </div>
                <p className="text-secondary-danger"></p>

                {/* Password Login */}
                <div className="relative mt-6 flex flex-col">
                    <div className="relative h-[48px] w-[393px]">
                    <input
                        id="password"
                        className="h-[48px] w-[393px] bg-white rounded-xl border border-[#bbb7c3] text-primary-Dark-gray p-3 pr-10"
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} 
                        placeholder="Password"
                    />
                    <button
                        type="button"
                        className="absolute inset-y-0 right-6 flex items-center"
                        onClick={togglePasswordVisibility}>
                        {showPassword ? (
                            <FaEyeSlash className="text-gray-500" />
                        ) : (
                            <FaEye className="text-gray-500" />
                        )}
                    </button>
                    {password.length > 0 && ( 
                        <div className="mt-2">
                            <p className={`text-sm ${isValidPassword(password) ? 'text-secondary-success' : 'text-secondary-danger'}`}>
                                {isValidPassword(password) ? '✔ Your password is valid!' : '✘ Your password is not valid'}
                            </p>
                        </div>
                    )}

                    </div>
                </div>

                {/* Sign In Button */}
                <div className="flex mt-[38px] gap-[104px] justify-center items-center">
                    <a href="/forgot-password" className="font-sans text-sm text-primary-light-gray hover:text-secondary-purple transition duration-300 ease-in-out">
                        Forgot password?
                    </a>
                    <button type="submit" className="bg-secondary-purple text-white px-6 py-3 rounded-md">
                        Sign In
                    </button>
                </div>

                {/* Divider */}
                <div className="flex items-center justify-center gap-3 mt-6">
                    <div className="w-[177px] h-px bg-[#dbdadd]" />
                    <p className="text-primary-light-gray font-sans text-sm font-normal">OR</p>
                    <div className="w-[177px] h-px bg-[#dbdadd]" />
                </div>

                {/* Providers */}
                <div className="flex gap-4">
                    <button><FcGoogle className="text-2xl text-secondary-danger" /></button>
                    <button><FaFacebook className="text-2xl text-secondary-danger" /></button>
                </div>

                {/* reCAPTCHA */}
                <div className="flex-col mt-6 w-[385px]">
                    <span className="text-primary-light-gray text-xs font-normal font-sans leading-[17px]">
                        Protected by reCAPTCHA and subject to the 
                    </span>
                    <span className="text-secondary-purple text-xs font-normal font-sans leading-[17px]">
                        Cuboid Privacy Policy
                    </span>
                    <span className="text-primary-light-gray text-xs font-normal font-sans leading-[17px]">
                        and 
                    </span>
                    <span className="text-secondary-purple text-xs font-normal font-sans leading-[17px]">
                        Terms of Service.
                    </span>
                </div>
            </form>
        </div>
    );
};

export default Login;