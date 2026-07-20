import { Mail } from "lucide-react";
import { Link } from "react-router";

import TextInput from "./TextInput";
import PasswordInput from "./PasswordInput";
import Checkbox from "./Checkbox";
import SubmitButton from "./SubmitBtn";

const LoginForm = ({
    form,
    password,
    remember,
    handlers,
    submitBtnText,
    isSubmitBtnLoading,
}) => {
    const {
        email,
        setEmail,
    } = form;

    const {
        password: passwordValue,
        setPassword,
        showPassword,
        setShowPassword,
    } = password;

    const {
        rememberMe,
        setRememberMe,
    } = remember;

    const {
        handleKeyDown,
        handleSubmit,
    } = handlers;

    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-3 w-full"
        >
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

            <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
                <Checkbox
                    checked={rememberMe}
                    onChange={setRememberMe}
                    label="Remember me"
                />

                <Link
                    to="/forgot-password"
                    className="text-[13px] font-medium text-amber-500 transition hover:text-amber-600"
                >
                    Forgot password?
                </Link>
            </div>

            <SubmitButton
                text={submitBtnText}
                loading={isSubmitBtnLoading}
            />
        </form>
    );
};

export default LoginForm;