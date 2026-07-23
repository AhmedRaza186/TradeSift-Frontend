import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";

import AuthHero from "./components/AuthHero";
import AuthLayout from "./components/AuthLayout";

import { fadeUp } from "../../animations/variants";
import { validateLogin } from "./validations/validateLogin";
import { handleLoginSubmit } from "./handlers/login/handleLoginSubmit";
import useAutoClearError from "./hooks/useAutoClearer";
import { handleFormNavigation } from "./handlers/handleKeyDown";
import { useNavigate } from "react-router";


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false)
  const [error, setError] = useState("")
  const navigate = useNavigate();
  const formData = {
    email,
    password,
    rememberMe
  };


  const onSubmit = (e) =>
    handleLoginSubmit(e, formData, setError,navigate);

  const handleKeyDown = (e) =>
    handleFormNavigation(e, () => onSubmit(e));


  useAutoClearError(error, setError)

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      className="flex h-screen flex-col lg:flex-row overflow-hidden"
    >


      <AuthHero />
      <AuthLayout
        mode="login"

        headerTitle="Welcome back"
        headerSubtitle="Sign in to continue to your TradeSift workspace."

        email={email}
        setEmail={setEmail}

        password={password}
        setPassword={setPassword}

        showPassword={showPassword}
        setShowPassword={setShowPassword}

        rememberMe={rememberMe}
        setRememberMe={setRememberMe}

        error={error}
        setError={setError}

        submitBtnText="Sign In"
        isSubmitBtnLoading={false}

        handleSubmit={onSubmit}
        handleKeyDown={handleKeyDown}
      />
    </motion.div>
  );
}