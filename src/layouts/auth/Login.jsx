import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';

import bgGradient from '../../../assets/authPageGradient.png';
import Logo from '../../../assets/Logo.png';

const MotionLink = motion.create(Link);

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const stagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const fadeItem = {
    hidden: {
      opacity: 0,
      y: 25,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const handleKeyDown = (e) => {
    const form = e.target.form;

    const elements = Array.from(form.elements).filter((el) => {
      if (el.disabled || el.tabIndex === -1) return false;

      if (
        (el.tagName === 'INPUT' && el.type !== 'checkbox') ||
        ['SELECT', 'TEXTAREA'].includes(el.tagName)
      ) {
        return true;
      }

      if (el.tagName === 'BUTTON' && el.type === 'submit') {
        return true;
      }

      return false;
    });

    const index = elements.indexOf(e.target);

    switch (e.key) {
      case 'Enter':
      case 'ArrowDown':
        e.preventDefault();

        if (index < elements.length - 1) {
          elements[index + 1].focus();
        } else {
          handleSubmit(e);
        }
        break;

      case 'ArrowUp':
        e.preventDefault();

        if (index > 0) {
          elements[index - 1].focus();
        }
        break;

      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      email,
      password,
    });

    // Handle authentication logic here
  };

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      className="flex h-screen flex-col lg:flex-row overflow-hidden"
    >


       <section className="hidden lg:flex lg:w-[42%] xl:w-[45%]">
        <div className="relative flex min-h-screen w-full flex-col justify-between overflow-hidden bg-black px-8 py-8 lg:px-10 lg:py-10 xl:px-14 xl:py-14 2xl:px-16 2xl:py-16 text-white select-none">

          {/* Background Gradient */}
          <div className="absolute bottom-0 left-0 right-0 pointer-events-none z-0">
            <img
              src={bgGradient}
              alt="Background pattern"
              className="w-full object-cover object-bottom opacity-70 mix-blend-lighten"
            />
          </div>

          {/* Logo */}
          <MotionLink
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            to="/"
            className="z-10 flex h-12 items-center gap-3"
          >
            <img
              src={Logo}
              alt=""
              className="h-10 w-auto object-contain"
            />
            <span className="font-geist pt-1.5 text-xl font-bold">
              TradeSift
            </span>
          </MotionLink>

          {/* Hero Content */}
          <motion.main
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="z-10 my-auto max-w-[540px] space-y-4 pt-8 pb-16"
          >
            <motion.h1
              variants={fadeItem}
              className="font-geist text-4xl font-bold leading-[1.1] tracking-tight text-white lg:text-[42px] xl:text-[46px] 2xl:text-[56px]"
            >
              AI-Native
              <br />
              Operating System
              <br />
              for <span className="text-amber-500">Trade.</span>
            </motion.h1>

            <motion.div
              variants={fadeItem}
              className="space-y-4"
            >
              <motion.p
                variants={fadeItem}
                className="text-base sm:text-[16px] font-normal leading-relaxed text-neutral-400"
              >
                Automate customs verification, recover tax credits,
                track shipments, and manage tenders from one
                intelligent platform.
              </motion.p>

              <div className="h-[2px] w-12 rounded-full bg-amber-500" />

              <p className="max-w-[400px] text-sm font-normal leading-relaxed text-neutral-400 sm:text-base">
                Built for customs brokers, importers and enterprise teams.
              </p>
            </motion.div>
          </motion.main>

          {/* Footer */}
          <footer className="z-10 space-y-4 text-xs font-normal tracking-wide text-neutral-500">
            <p>© 2026 TradeSift Technologies. All rights reserved.</p>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-neutral-400">
              <a href="#" className="transition hover:text-white">
                Privacy Policy
              </a>

              <span className="text-[10px] font-bold text-neutral-600">
                •
              </span>

              <a href="#" className="transition hover:text-white">
                Terms & Conditions
              </a>

              <span className="text-[10px] font-bold text-neutral-600">
                •
              </span>

              <a href="#" className="transition hover:text-white">
                Contact Us
              </a>
            </div>
          </footer>

        </div>
      </section>
      <section className="flex h-full w-full lg:w-[58%] flex-col overflow-y-auto bg-white px-5 py-5 sm:px-8 lg:px-10 xl:px-14">
        <div className="order-last mt-8 w-full border-t border-neutral-100 pt-6 font-geist lg:order-first lg:mt-0 lg:border-0 lg:pt-0">
          <p className="flex justify-center gap-1 text-sm text-[#6B7280]/80 lg:justify-end">
            New to TradeSift?
            <Link
              to="/signup"
              className="cursor-pointer text-amber-500 hover:text-amber-600 hover:underline"
            >
              Create an account
            </Link>
          </p>
        </div>

        <div className="flex flex-1 items-center justify-center lg:block">
          <div className="mx-auto mt-6 w-full max-w-[440px] space-y-4 sm:mt-12 lg:ml-[12%] lg:mt-14 lg:mx-0">

            {/* Header */}
            <motion.header
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="space-y-2"
            >
              <motion.h1
                variants={fadeItem}
                className="font-geist text-3xl font-bold tracking-tight text-neutral-900"
              >
                Welcome back
              </motion.h1>

              <motion.p
                variants={fadeItem}
                className="font-inter text-sm text-neutral-500"
              >
                Sign in to continue to your TradeSift workspace.
              </motion.p>
            </motion.header>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="space-y-3 w-full"
            >

              {/* Email */}
              <motion.div
                variants={fadeItem}
                initial="hidden"
                animate="visible"
                className="space-y-1.5"
              >
                <label
                  htmlFor="email"
                  className="font-inter text-[13px] font-medium text-neutral-800"
                >
                  Email address
                </label>

                <div className="relative mt-1 flex items-center">
                  <Mail className="absolute left-3.5 h-4 w-4 text-neutral-400" />

                  <input
                    id="email"
                    type="email"
                    required
                    onKeyDown={handleKeyDown}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full rounded-xl border border-neutral-200 py-2 pl-11 pr-4 text-sm font-inter outline-none transition-all duration-200 placeholder:text-neutral-400 hover:border-neutral-400 focus:scale-[1.01] focus:border-neutral-400 focus:ring-1 focus:ring-neutral-400 focus:shadow-lg focus:shadow-black/5"
                  />
                </div>
              </motion.div>

                  {/* Password */}
              <motion.div
                variants={fadeItem}
                initial="hidden"
                animate="visible"
                className="space-y-1.5"
              >
                <label
                  htmlFor="password"
                  className="text-[13px] font-medium text-neutral-800"
                >
                  Password
                </label>

                <div className="relative mt-1 flex items-center">
                  <Lock className="absolute left-3.5 h-4 w-4 text-neutral-400" />

                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    required
                    onKeyDown={handleKeyDown}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full rounded-xl border border-neutral-200 py-2 pl-11 pr-11 text-sm outline-none placeholder:text-neutral-400 transition-all duration-200 hover:border-neutral-400 focus:scale-[1.01] focus:border-neutral-400 focus:ring-1 focus:ring-neutral-400 focus:shadow-lg focus:shadow-black/5"
                  />

                  <motion.button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 text-neutral-400 hover:text-neutral-600 focus:outline-none"
                    aria-label="Toggle password visibility"
                    whileTap={{ scale: 0.9 }}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </motion.button>
                </div>
              </motion.div>

              {/* Remember Me */}
              <motion.div
                variants={fadeItem}
                initial="hidden"
                animate="visible"
                className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between"
              >
                <label className="flex cursor-pointer items-center gap-2 text-[13px] font-medium text-neutral-800">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-neutral-300 accent-neutral-900 transition-all duration-200 hover:border-neutral-400 focus:scale-[1.01] focus:shadow-lg focus:shadow-black/5"
                  />
                  Remember me
                </label>

                <a
                  href="#"
                  className="text-[13px] font-medium text-amber-500 transition hover:text-amber-600"
                >
                  Forgot password?
                </a>
              </motion.div>

              {/* Submit */}
              <motion.button
                type="submit"
                whileHover={{
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-neutral-950 py-3 text-[13px] font-medium text-white transition hover:bg-neutral-800"
              >
                Sign in
                <ArrowRight className="h-4 w-4" />
              </motion.button>

            </form>
             
            {/* Divider */}
            <motion.div
              variants={fadeItem}
              initial="hidden"
              animate="visible"
              className="relative flex items-center py-1"
            >
              <div className="flex-grow border-t border-neutral-100"></div>

              <span className="mx-4 flex-shrink text-xs font-normal text-neutral-400">
                Or continue with
              </span>

              <div className="flex-grow border-t border-neutral-100"></div>
            </motion.div>

            {/* OAuth Buttons */}
            <motion.div
              variants={fadeItem}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 gap-3 sm:grid-cols-2"
            >
              {/* Microsoft */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2.5 rounded-xl border border-neutral-200 py-2 text-[13px] font-medium text-neutral-800 transition hover:bg-neutral-50 active:scale-[0.98]"
              >
                <svg className="h-4 w-4" viewBox="0 0 23 23">
                  <path fill="#f35325" d="M0 0h11v11H0z" />
                  <path fill="#81bc06" d="M12 0h11v11H12z" />
                  <path fill="#05a6f0" d="M0 12h11v11H0z" />
                  <path fill="#ffba08" d="M12 12h11v11H12z" />
                </svg>
                Microsoft
              </motion.button>

              {/* Google */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2.5 rounded-xl border border-neutral-200 py-2 text-[13px] font-medium text-neutral-800 transition hover:bg-neutral-50 active:scale-[0.98]"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                </svg>
                Google
              </motion.button>
            </motion.div>

            {/* Footer */}
            <motion.footer
              variants={fadeItem}
              initial="hidden"
              animate="visible"
              className="text-center text-xs text-neutral-400"
            >
              By signing in, you agree to our{" "}
              <a href="#" className="text-amber-500 hover:underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-amber-500 hover:underline">
                Privacy Policy
              </a>
              .
            </motion.footer>

          </div>
        </div>
      </section>
    </motion.div>
  );
}