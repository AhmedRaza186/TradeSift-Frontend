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

    if (!firstName.trim())
        return "First name is required.";

    if (!lastName.trim())
        return "Last name is required.";

    if (organizationName && organizationName.length > 100)
        return "Organization name is too long.";

    if (!email.trim())
        return "Email is required.";

    if (!/\S+@\S+\.\S+/.test(email))
        return "Please enter a valid email.";

    if (password.length < 8)
        return "Password must be at least 8 characters.";

    if (password !== confirmPassword)
        return "Passwords do not match.";

    if (!agreedToTerms)
        return "Please accept the Terms of Service and Privacy Policy.";

    return null;
};