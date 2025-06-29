    import React, { useRef } from 'react'
    import { Outlet } from 'react-router-dom'
    import { useGlobalContext } from '../context'
import { toast, Toaster } from 'sonner'

    const Login = () => {
        const {isDarkTheme}=useGlobalContext()
        const emailRef=useRef('')
        const passwordRef=useRef('')
        const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        const validatePassword = (password) => /^[A-Za-z0-9]{6,}$/.test(password);

        const handleSubmit=(e)=>{
            e.preventDefault()
            
         const email = emailRef.current.value;
        const password = passwordRef.current.value;

    if (!validateEmail(email) || !validatePassword(password)) {
     return  toast.error("Email yoki parol xato🤔");
      
    }else{
                const form={
                email:emailRef.current.value,
                password:passwordRef.current.value
            }
           toast.success(`${form.email} qo'shildi!👨‍🦳`)
        emailRef.current.value = "";
        passwordRef.current.value = "";
            return  localStorage.setItem("Form", JSON.stringify(form));
            
            }

            
        }
    return (
        <section className='w-full h-[80vh] flex justify-center items-center'>
            <Toaster richColors position='bottom-right' />
            <div className='w-[447px] h-[392px] border-[#1e293b] rounded-[15px] shadow-2xl border p-[1rem]'>
                <h1 className={isDarkTheme?'text-[2rem] font-medium text-white':'text-[2rem] font-medium text-black'}>Login</h1>
                <p className='text-gray-500'>Enter your credentials to access your account</p>
                <form  className='flex flex-col mt-[1.5rem]' onSubmit={handleSubmit}>
                
                <label htmlFor="email"   className={isDarkTheme?'text-white':'text-black'} >Email</label>
                <input type="text" ref={emailRef} className={isDarkTheme?'p-[0.5rem] mt-2.5 mb-2.5 border-1 placeholder:text-gray-400 rounded-[5px] border-[#1e293b] text-white ':'p-[0.5rem] mt-2.5 mb-2.5 border-1 placeholder:text-gray-400 rounded-[5px] border-[#1e293b] '} id='email' placeholder='your@gmail.com' />
                <label htmlFor="pass" className={isDarkTheme?'text-white':'text-black'}>Password</label>
                <input type="password" ref={passwordRef} className={isDarkTheme?'p-[0.5rem] mt-2.5 mb-2.5 border-1 placeholder:text-gray-400 rounded-[5px] border-[#1e293b] text-white':'p-[0.5rem] mt-2.5 mb-2.5 border-1 placeholder:text-gray-400 rounded-[5px] border-[#1e293b] '} id='pass' placeholder='********' />
                <button type='submit' className='w-full border-[#1e293b] border-1 h-[35px] mt-[1.2rem] rounded-[5px] cursor-pointer bg-blue-500 text-white'>Login</button>
            </form>
            </div>
            
            <Outlet/>
        </section>
    )
    }
    export default Login
