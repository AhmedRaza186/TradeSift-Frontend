import apiClient from "../../../../services/apiClient";


export const resendLoginOtp = async (email) => {
    const response = await apiClient.post(
        "/auth/login/resend-otp",
        {
            email,
        }
    );

    return response.data;
};

