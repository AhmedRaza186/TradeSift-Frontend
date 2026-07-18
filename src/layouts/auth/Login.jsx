import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import bgGradient from '../../../assets/authPageGradient.png'
import Logo from '../../../assets/Logo.png'


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Logging in with:', { email, password });
    // Handle authentication logic here
  };

  return (
    <div className='flex min-h-screen flex-col lg:flex-row '>


    <section className='hidden lg:flex lg:w-[42%] xl:w-[45%]'>
    <div className="relative flex min-h-screen w-full flex-col justify-between overflow-hidden bg-black px-8 py-8 lg:px-10 lg:py-10 xl:px-14 xl:py-14 2xl:px-16 2xl:py-16 text-white select-none">
      
      {/* Background Gradient Lines Asset */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none z-0">
        <img 
          src={bgGradient} 
          alt="Background pattern" 
          className="w-full object-cover object-bottom opacity-70 mix-blend-lighten"
        />
      </div>

      {/* Top: Logo Container (Empty Placeholder) */}
      <Link to='/' className="z-10 flex h-12 items-center gap-3">
       <img src={Logo} alt="" className='object-contain w-auto h-10' />
          <span className="font-geist text-xl font-bold pt-1.5">TradeSift</span>
      </Link>

      {/* Middle: Main Content */}
      <main className="z-10 my-auto max-w-[540px] space-y-6 pt-12 pb-24">
        <h1 className="font-geist text-4xl font-bold leading-[1.1] tracking-tight text-white lg:text-[42px] xl:text-[46px] 2xl:text-[56px]">
          AI-Native <br />
          Operating System <br />
          for <span className="text-amber-500">Trade.</span>
        </h1>

        <div className="space-y-6">
          <p className="text-base sm:text-[16px] text-neutral-400 font-normal leading-relaxed">
            Automate customs verification, recover tax credits, 
            track shipments, and manage tenders from one 
            intelligent platform.
          </p>

          {/* Orange Accent Divider Line */}
          <div className="h-[2px] w-12 bg-amber-500 rounded-full" />

          <p className="text-sm sm:text-base text-neutral-400 font-normal leading-relaxed max-w-[400px]">
            Built for customs brokers, importers and enterprise teams.
          </p>
        </div>
      </main>

      {/* Bottom: Footer Layout */}
      <footer className="z-10 space-y-4 text-xs font-normal text-neutral-500 tracking-wide">
        <p>© 2026 TradeSift Technologies. All rights reserved.</p>
        
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-neutral-400">
          <a href="#" className="hover:text-white transition">Privacy Policy</a>
          <span className="text-neutral-600 font-bold text-[10px]">•</span>
          <a href="#" className="hover:text-white transition">Terms & Conditions</a>
          <span className="text-neutral-600 font-bold text-[10px]">•</span>
          <a href="#" className="hover:text-white transition">Contact Us</a>
        </div>
      </footer>

    </div>

    </section>
    <section className="flex min-h-screen w-full lg:w-[58%] flex-col bg-white px-5 py-6 sm:px-8 lg:px-12 lg:py-10 xl:px-16">
      <div className='order-last mt-8 w-full font-geist border-t border-neutral-100 pt-6 lg:order-first lg:mt-0 lg:border-0 lg:pt-0'>
        <p className='flex justify-center gap-1 text-sm text-[#6B7280]/80 lg:justify-end'>New to TradeSift? <Link to='/signup' className='text-amber-500 hover:text-amber-600 hover:cursor-pointer hover:underline'>Create an account</Link></p>
      </div>
      <div className="flex flex-1 items-center justify-center lg:block">
      <div className="mx-auto w-full max-w-[450px] space-y-5 lg:mx-0 lg:ml-[12%] sm:mt-20 mt-10">
        
        {/* Header */}
        <header className="space-y-4 flex-col"> 
          <h1 className="font-geist text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">
            Welcome back
          </h1>
          <p className="text-sm text-neutral-500 font-inter">
            Sign in to continue to your TradeSift workspace.
          </p>
        </header>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 w-full">
          
          {/* Email Field */}
          <div className="space-y-1.5">
            <label htmlFor="email" className="text-sm font-medium font-inter text-neutral-800">
              Email address
            </label>
            <div className="relative flex items-center mt-1">
              <Mail className="absolute left-3.5 h-5 w-5 text-neutral-400" />
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full rounded-xl font-inter border border-neutral-200 py-3 pl-11 pr-4 text-sm outline-none transition placeholder:text-neutral-400 focus:border-neutral-400 focus:ring-1 focus:ring-neutral-400 "
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="space-y-1.5">
            <label htmlFor="password" className="text-sm font-medium text-neutral-800">
              Password
            </label>
            <div className="relative flex items-center mt-1">
              <Lock className="absolute left-3.5 h-5 w-5 text-neutral-400" />
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full rounded-xl border border-neutral-200 py-3 pl-11 pr-11 text-sm outline-none transition placeholder:text-neutral-400 focus:border-neutral-400 focus:ring-1 focus:ring-neutral-400"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 text-neutral-400 hover:text-neutral-600 focus:outline-none"
                aria-label="Toggle password visibility"
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* Options Row */}
          <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
            <label className="flex items-center gap-2 text-sm font-medium text-neutral-800 cursor-pointer">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-neutral-300 text-neutral-900 focus:ring-neutral-900 accent-neutral-900"
              />
              Remember me
            </label>
            <a href="#" className="text-sm font-medium text-amber-500 hover:text-amber-600 transition">
              Forgot password?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-neutral-950 py-3.5 text-sm font-medium text-white transition hover:bg-neutral-800 active:scale-[0.99]"
          >
            Sign in
            <ArrowRight className="h-4 w-4" />
          </button>
        </form>

        {/* Divider */}
        <div className="relative flex items-center py-2">
          <div className="flex-grow border-t border-neutral-100"></div>
          <span className="mx-4 flex-shrink text-xs font-normal text-neutral-400">
            Or continue with
          </span>
          <div className="flex-grow border-t border-neutral-100"></div>
        </div>

        {/* OAuth Provider Buttons */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {/* Microsoft */}
          <button className="flex items-center justify-center gap-2.5 rounded-xl border border-neutral-200 py-3 text-sm font-medium text-neutral-800 transition hover:bg-neutral-50 active:scale-[0.98]">
            <svg className="h-4 w-4" viewBox="0 0 23 23">
              <path fill="#f35325" d="M0 0h11v11H0z"/>
              <path fill="#81bc06" d="M12 0h11v11H12z"/>
              <path fill="#05a6f0" d="M0 12h11v11H0z"/>
              <path fill="#ffba08" d="M12 12h11v11H12z"/>
            </svg>
            Microsoft
          </button>
          
          {/* Google */}
          <button className="flex items-center justify-center gap-2.5 rounded-xl border border-neutral-200 py-3 text-sm font-medium text-neutral-800 transition hover:bg-neutral-50 active:scale-[0.98]">
            <svg className="h-4 w-4" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
            </svg>
            Google
          </button>
        </div>

        {/* Footer legal text */}
        <footer className="text-center text-xs text-neutral-400">
          By signing in, you agree to our{' '}
          <a href="#" className="text-amber-500 hover:underline">Terms of Service</a>
          {' '}and{' '}
          <a href="#" className="text-amber-500 hover:underline">Privacy Policy</a>.
        </footer>

      </div>
      </div>
    </section>
    </div>
  );
}