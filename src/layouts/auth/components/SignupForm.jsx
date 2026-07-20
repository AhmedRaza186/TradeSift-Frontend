import { Mail } from "lucide-react";

import TextInput from "./TextInput";
import PasswordInput from "./PasswordInput";
import Checkbox from "./Checkbox";
import SubmitButton from "./SubmitBtn";

const SignupForm = ({
    form,
    password,
    agreement,
    handlers,
    submitBtnText,
    isSubmitBtnLoading,
}) => {
    const {
        firstName,
        setFirstName,
        lastName,
        setLastName,
        organizationName,
        setOrganizationName,
        email,
        setEmail,
    } = form;

    const {
        password: passwordValue,
        setPassword,
        confirmPassword,
        setConfirmPassword,
        showPassword,
        setShowPassword,
        showConfirmPassword,
        setShowConfirmPassword,
    } = password;

    const {
        agreedToTerms,
        setAgreedToTerms,
    } = agreement;

    const {
        handleKeyDown,
        handleSubmit,
        error,
        setError,
    } = handlers;

    return (
        <>
            <form
                onSubmit={handleSubmit}
                className="space-y-3 w-full">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                <TextInput
                    id="firstName"
                    label="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="John"
                    required
                    onKeyDown={handleKeyDown}
                    />

                <TextInput
                    id="lastName"
                    label="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Doe"
                    required
                    onKeyDown={handleKeyDown}
                    />
                    </div>

                <TextInput
                    id="organization"
                    label="Organization Name"
                    value={organizationName}
                    onChange={(e) => setOrganizationName(e.target.value)}
                    placeholder="ABC Imports Pvt Ltd"
                    optional
                    onKeyDown={handleKeyDown}
                />

                <TextInput
                    id="email"
                    type="email"
                    label="Email Address"
                    icon={Mail}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    onKeyDown={handleKeyDown}
                />

                <PasswordInput
                    id="password"
                    label="Password"
                    value={passwordValue}
                    onChange={setPassword}
                    showPassword={showPassword}
                    setShowPassword={setShowPassword}
                    placeholder="Enter your password"
                    onKeyDown={handleKeyDown}
                />

                <PasswordInput
                    id="confirmPassword"
                    label="Confirm Password"
                    value={confirmPassword}
                    onChange={setConfirmPassword}
                    showPassword={showConfirmPassword}
                    setShowPassword={setShowConfirmPassword}
                    placeholder="Confirm your password"
                    onKeyDown={handleKeyDown}
                />

                <Checkbox
                    checked={agreedToTerms}
                    onChange={setAgreedToTerms}
                    error={error}
                    setError={setError}
                    label="I agree to the Terms of Service and Privacy Policy."
                />

                <SubmitButton
                    text={submitBtnText}
                    loading={isSubmitBtnLoading}
                />
            </form >

        </>
    );
};

export default SignupForm;