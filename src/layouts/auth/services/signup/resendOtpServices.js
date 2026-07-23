import apiClient from "../../../../services/apiClient";

export const resendRegistrationOtp = async (email) => {
    const response = await apiClient.post(
        "/auth/register/resend-otp",
        {
            email,
        }
    );

    return response.data;
};