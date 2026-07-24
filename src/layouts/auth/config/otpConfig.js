import { handleResendLoginOtp } from "../handlers/login/handleResendLoginOtp";
import { handleVerifyLoginOtp } from "../handlers/login/handleVerifyLoginOtp";
import { handleResendSignupOtp } from "../handlers/signup/handleResendSignupOtp";
import { handleVerifySignupOtpSubmit } from "../handlers/signup/handleVerifySignupOtp";
import { handleVerifyForgotPasswordOtp } from "../handlers/forgotPass/handleVerifyForgotPasswordOtp";
import { handleResendForgotPasswordOtp } from "../handlers/forgotPass/handleResendForgotPassword";

const otpConfig = {
    signup: {
        title: "Verify your email",
        buttonText: "Verify Email",
        backPath: "/signup",
        verify: handleVerifySignupOtpSubmit,
        resend: handleResendSignupOtp,
    },

    login: {
        title: "Verify your login",
        buttonText: "Verify Login",
        backPath: "/login",
        verify: handleVerifyLoginOtp,
        resend: handleResendLoginOtp,
    },

    "forgot-password": {
        title: "Verify your identity",
        buttonText: "Verify Code",
        backPath: "/login",
        verify: handleVerifyForgotPasswordOtp,
        resend: handleResendForgotPasswordOtp,
    },
};

export default otpConfig;