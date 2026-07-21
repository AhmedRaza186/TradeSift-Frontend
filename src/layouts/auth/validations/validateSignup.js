export const validateSignup = (data) => {
    const {
        firstName,
        lastName,
        organizationName,
        email,
        password,
        confirmPassword,
        agreedToTerms,
    } = data;

    // First name
    if (!firstName.trim()) {
        return "First name is required.";
    }

    // Last name
    if (!lastName.trim()) {
        return "Last name is required.";
    }

    // Organization name - optional
    if (organizationName && organizationName.trim().length > 100) {
        return "Organization name is too long.";
    }

    // Email
    if (!email.trim()) {
        return "Email is required.";
    }

    if (!/\S+@\S+\.\S+/.test(email.trim())) {
        return "Please enter a valid email.";
    }

    // Password
    if (!password) {
        return "Password is required.";
    }

    if (password.length < 8) {
        return "Password must be at least 8 characters.";
    }

    if (!/[A-Z]/.test(password)) {
        return "Password must contain at least one uppercase letter.";
    }

    if (!/[0-9]/.test(password)) {
        return "Password must contain at least one number.";
    }

    if (!/[^A-Za-z0-9]/.test(password)) {
        return "Password must contain at least one special character.";
    }

    // Confirm password
    if (!confirmPassword) {
        return "Please confirm your password.";
    }

    if (password !== confirmPassword) {
        return "Passwords do not match.";
    }

    // Terms
    if (!agreedToTerms) {
        return "Please accept the Terms of Service and Privacy Policy.";
    }

    return null;
};