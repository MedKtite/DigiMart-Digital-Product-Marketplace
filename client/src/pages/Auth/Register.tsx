import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';

const RegisterForm: React.FC = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const isValidPassword = (password: string): boolean => {
        return password.length >= 8;
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/api/user/create', {
                firstName,
                lastName,
                email,
                password
            }, { withCredentials: true });
            console.log(response.data);
            navigate('/login');
        } catch (error) {
            console.error('Error creating user:', error);
        }
    };

    return (
        <div className='flex h-screen bg-black text-primary-off-white place-items-center justify-center gap-56'>
            {/* Logo & text */}
            <div className='flex flex-col gap-4 text-center align-middle'>
                <h1 className='font-sans text-3xl font-medium text-white'><span className='font-semibold text-3xl text-primary-off-white'>L</span>ink<span className='font-semibold text-3xl text-primary-off-white'>W</span>ave</h1>

                <h1 className='text-h1 font-sans font-normal text-primary-off-white text-center'>
                    One tool for your<br /> whole team needs
                </h1>
            </div>

            {/* Sign Up Card */}
            <form onSubmit={handleSubmit} className='px-8 py-8 bg-primary-off-white rounded-[32px]'>
                <h3 className='flex justify-start font-sans text-primary-Dark-gray text-4xl font-medium'>Sign Up</h3>
                <div className='flex justify-start mt-4 gap-1 text-primary-Dark-gray font-sans font-medium'>
                    <p>Already have an account?</p>
                    <a href="/login" className='hover:text-secondary-purple transition duration-300 ease-in-out'>
                        Sign in
                    </a>
                </div>

                {/* Email Address */}
                <div className="flex justify-center relative mt-6">
                    <label htmlFor="email" className="absolute text-xs font-normal px-1 -top-3 left-4 bg-gradient-to-b from-primary-off-white to-white text-primary-light-gray">
                        Email Address
                    </label>
                    <input
                        name='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="h-[48px] w-[393px] text-primary-Dark-gray bg-white rounded-xl border border-[#bbb7c3] p-3"
                        type="text"
                        placeholder="email@gmail.com"
                    />
                </div>

                {/* First Name & Last Name */}
                <div className="flex gap-[15px] mt-6 justify-center">
                    <input
                        name='firstName'
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="h-[48px] w-[189px] text-primary-Dark-gray bg-white rounded-xl border border-[#bbb7c3] p-3"
                        type="text"
                        placeholder="First Name"
                    />
                    <input
                        name='lastName'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="h-[48px] w-[189px] text-primary-Dark-gray bg-white rounded-xl border border-[#bbb7c3] p-3"
                        type="text"
                        placeholder="Last Name"
                    />
                </div>

                {/* Password */}
                <div className="relative mt-6 flex flex-col">
                    <div className="relative h-[48px] w-[393px]">
                        <input
                            id="password"
                            name='password'
                            className="h-[48px] w-[393px] bg-white rounded-xl border border-[#bbb7c3] text-primary-Dark-gray p-3 pr-10"
                            type={showPassword ? 'text' : 'password'}
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            placeholder="Password"
                        />
                        <button
                            type="button"
                            className="absolute inset-y-0 right-3 flex items-center"
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

                {/* Sign Up Button */}
                <div className='flex mt-[38px] gap-[104px] justify-center text-center'>
                    <button
                        type="submit"
                        className="w-[393px] h-[48px] bg-secondary-purple text-white font-sans font-medium text-lg rounded-[32px] hover:bg-opacity-80 transition duration-300 ease-in-out">
                        Create account
                    </button>
                </div>

                {/* Check Box */}
                <div className='flex mt-6 gap-2 items-start justify-center'>
                    <p className='w-[393px] font-sans text-primary-light-gray text-xs'>
                        By clicking Create account, I agree that I have read and accepted the Terms of Use and Privacy Policy.
                    </p>
                </div>

                {/* Divider */}
                <div className='flex items-center justify-center gap-3 mt-6'>
                    <div className="w-[177px] h-px bg-[#dbdadd]" />
                    <p className='text-primary-light-gray font-sans text-sm font-normal'>OR</p>
                    <div className="w-[177px] h-px bg-[#dbdadd]" />
                </div>

                {/* Providers */}
                <div className="flex gap-4">
                    <button><FcGoogle className="text-2xl text-secondary-danger" /></button>
                    <button><FaFacebook className="text-2xl text-secondary-hade-blue" /></button>
                </div>

                {/* reCAPTCHA */}
                <div className="flex-col w-[385px] mt-6">
                    <span className="text-primary-light-gray text-xs font-normal font-sans leading-[17px]">
                        Protected by reCAPTCHA and subject to the
                    </span>
                    <span className="text-secondary-purple text-xs font-normal font-sans">Cuboid Privacy Policy</span>
                    <span className="text-primary-light-gray text-xs font-normal font-sans"> and </span>
                    <span className="text-secondary-purple text-xs font-normal font-sans leading-[17px]">Terms of Service.</span>
                </div>
            </form>
        </div>
    );
};

export default RegisterForm;