import apiClient from "../../../../services/apiClient";

export const resendForgotPasswordOtp = async (email) => {
    const response = await apiClient.post(
        "/auth/forgot-password/resend-otp",
        {
            email,
        }
    );

    return response.data;
};