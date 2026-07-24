export const validateResetPassword = ({
    newPassword,
    newPasswordConfirmation,
}) => {
    if (!newPassword) {
        return "Password is required.";
    }

    if (newPassword.length < 8) {
        return "Password must be at least 8 characters.";
    }

    if (!/[A-Z]/.test(newPassword)) {
        return "Password must contain at least one uppercase letter.";
    }

    if (!/[0-9]/.test(newPassword)) {
        return "Password must contain at least one number.";
    }

    if (!/[^A-Za-z0-9]/.test(newPassword)) {
        return "Password must contain at least one special character.";
    }

    if (!newPasswordConfirmation) {
        return "Please confirm your password.";
    }

    if (newPassword !== newPasswordConfirmation) {
        return "Passwords do not match.";
    }

    return null;
};
