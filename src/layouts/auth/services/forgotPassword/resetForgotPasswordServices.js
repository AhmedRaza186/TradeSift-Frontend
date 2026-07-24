
import apiClient from "../../../../services/apiClient";

export const resetPassword = async ({
    email,
    newPassword,
    newPasswordConfirmation,
}) => {
    const response = await apiClient.post(
        "/auth/forgot-password/reset-password",
        {
            email,
            newPassword,
            newPasswordConfirmation,
        }
    );

    return response.data;
};