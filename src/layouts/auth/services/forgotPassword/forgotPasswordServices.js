import apiClient from "../../../../services/apiClient";

export const forgotPassword = async (email) => {
    const response = await apiClient.post(
        "/auth/forgot-password",
        {
            email,
        }
    );

    return response.data;
};