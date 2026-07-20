import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";

import Logo from "../../../../assets/Logo.png";

import AuthHeader from "./AuthHeader";
import AuthDivider from "./AuthDivider";
import AuthFooter from "./AuthFooter";
import AuthOAButtons from "./AuthOAButtons";
import AuthError from "./AuthError";
import SignupForm from "./SignupForm";

const MotionLink = motion.create(Link);

const AuthLayout = ({
    headerTitle,
    headerSubtitle,

    firstName,
    setFirstName,

    lastName,
    setLastName,

    organizationName,
    setOrganizationName,

    email,
    setEmail,

    password,
    setPassword,

    confirmPassword,
    setConfirmPassword,

    showPassword,
    setShowPassword,

    showConfirmPassword,
    setShowConfirmPassword,

    agreedToTerms,
    setAgreedToTerms,

    error,
    setError,

    submitBtnText,
    isSubmitBtnLoading,
    handleSubmit,
    handleKeyDown,
}) => {
    return (
        <section className="flex h-full w-full lg:w-[58%] flex-col overflow-y-auto bg-white px-5 py-5 sm:px-8 lg:px-10 xl:px-14">

            {/* Top Login Link */}
            <div className="order-last mt-8 w-full border-t border-neutral-100 pt-6 font-geist lg:order-first lg:mt-0 lg:border-0 lg:pt-0">
                <p className="flex justify-center gap-1 text-sm text-[#6B7280]/80 lg:justify-end">
                    Already have an account?
                    <Link
                        to="/login"
                        className="text-amber-500 hover:text-amber-600 hover:underline"
                    >
                        Sign in
                    </Link>
                </p>
            </div>

            <div className="flex flex-1 items-center justify-center lg:block">
                <div className="mx-auto mt-6 w-full max-w-[440px] space-y-4 sm:mt-12 lg:ml-[12%] lg:mt-14 lg:mx-0">

                    {/* Mobile Logo */}
                    <MotionLink
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        to="/"
                        className="flex h-12 items-center gap-3 pb-10 lg:hidden"
                    >
                        <img
                            src={Logo}
                            alt=""
                            className="h-10 w-auto object-contain"
                        />

                        <span className="mt-4 font-geist text-lg font-bold">
                            TradeSift
                        </span>
                    </MotionLink>

                    <AuthHeader title={headerTitle} subtitle={headerSubtitle} />

                    <SignupForm
                        form={{
                            firstName,
                            setFirstName,
                            lastName,
                            setLastName,
                            organizationName,
                            setOrganizationName,
                            email,
                            setEmail,
                        }}
                        password={{
                            password,
                            setPassword,
                            confirmPassword,
                            setConfirmPassword,
                            showPassword,
                            setShowPassword,
                            showConfirmPassword,
                            setShowConfirmPassword,
                        }}
                        agreement={{
                            agreedToTerms,
                            setAgreedToTerms,
                        }}
                        handlers={{
                            handleKeyDown,
                            handleSubmit,
                            error,
                            setError,
                        }}
                        submitBtnText={submitBtnText}
                        isSubmitBtnLoading={isSubmitBtnLoading}
                    />



                    <AuthError error={error} />

                    <AuthDivider />

                    <AuthOAButtons />

                    <AuthFooter />
                </div>
            </div>
        </section>
    );
};

export default AuthLayout;