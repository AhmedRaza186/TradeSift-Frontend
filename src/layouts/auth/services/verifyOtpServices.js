import apiClient from "../../../services/apiClient";

export const verifyOtp = async ({
    email,
    otp,
}) => {
    const response = await apiClient.post(
        "/auth/register/verify-otp",
        {
            email,
            otp,
        }
    );

    return response.data;
};