export const validateForgotPassword = (data) => {
    const { email } = data;

    if (!email.trim()) {
        return "Email is required.";
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
        return "Please enter a valid email.";
    }

    return null;
};