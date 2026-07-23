import apiClient from "../../../../services/apiClient";


export const login = async ({
    email,
    password,
    rememberDevice,
}) => {
    const response = await apiClient.post(
        "/auth/login",
        {
            email,
            password,
            rememberDevice,
        }
    );

    return response.data;
};