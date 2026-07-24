import apiClient from "../../../../services/apiClient";

export const verifyForgotPasswordOtp = async ({
    email,
    otp,
}) => {
    const response = await apiClient.post(
        "/auth/forgot-password/verify-otp",
        {
            email,
            otp,
        }
    );

    return response.data;
};