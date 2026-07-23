import apiClient from "../../../../services/apiClient";


export const verifyLoginOtp = async ({
    email,
    otp,
}) => {
    const response = await apiClient.post(
        "/auth/login/verify-otp",
        {
            email,
            otp,
        }
    );

    return response.data;
};

