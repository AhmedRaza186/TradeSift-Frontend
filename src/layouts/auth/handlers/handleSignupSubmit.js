import { toast } from "sonner";
import { validateSignup } from "../validations/validateSignup";
import { Navigate } from "react-router";

export const handleSignupSubmit = (
    e,
    data,
    setError,
) => {
    e.preventDefault();

    const validationError = validateSignup(data);

    if (validationError) {
        setError(validationError);
        return;
    }

    setError("");

    toast.success("Account created successfully!");

    return true

};