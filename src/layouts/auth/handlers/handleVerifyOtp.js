import { toast } from "sonner";
import { verifyOtp } from "../services/verifyOtpServices";

export const handleVerifyOtpSubmit = async (
    e,
    email,
    otp,
    setError,
) => {
    e.preventDefault();

    const otpValue = otp.join("");

    if (otpValue.length !== 6) {
        setError("Please enter the 6-digit verification code.");
        return false;
    }

    try {
        setError("");

        const response = await verifyOtp({
            email,
            otp: otpValue,
        });

        toast.success(
            response.message || "Registration complete."
        );

        return true;

    } catch (error) {
        const errorMessage =
            error.response?.data?.message ||
            "Unable to verify your email.";

        setError(errorMessage);
        toast.error(errorMessage);

        return false;
    }
};