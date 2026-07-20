import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";

import AuthHero from "./components/AuthHero";
import AuthLayout from "./components/AuthLayout";

import { fadeUp } from "../../animations/variants";


export default function Signup() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [organizationName, setOrganizationName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [error, setError] = useState("");

  const handleKeyDown = (e) => {
    const form = e.target.form;
    const elements = Array.from(form.elements).filter((el) => {
      if (el.disabled || el.tabIndex === -1) return false;

      // Inputs, selects and textareas
      if ((el.tagName === 'INPUT' && el.type !== 'checkbox') || (["SELECT", "TEXTAREA"].includes(el.tagName)))
        return true;


      // Only include submit button
      if (el.tagName === "BUTTON" && el.type === "submit")
        return true;

      return false;
    });

    const index = elements.indexOf(e.target);

    switch (e.key) {
      case "Enter":
      case "ArrowDown":
        e.preventDefault();
        if (index < elements.length - 1) {
          elements[index + 1].focus();
        } else {
          handleSubmit(e)
        }
        break;

      case "ArrowUp":
        e.preventDefault();
        if (index > 0) {
          elements[index - 1].focus();
        }
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationError = validateForm();

    if (validationError) {
      setError(validationError);
      return;
    }

    setError("");

    toast.success("Account created successfully!");
  };

  useEffect(() => {
    if (!error) return;

    const timer = setTimeout(() => {
      setError("");
    }, 3000);

    return () => clearTimeout(timer);
  }, [error]);


  const validateForm = () => {
    if (!firstName.trim())
      return "First name is required.";

    if (!lastName.trim())
      return "Last name is required.";

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
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      className='flex h-screen flex-col lg:flex-row overflow-hidden"'>

      <AuthHero />

      <AuthLayout
        headerTitle='Create your account'
        headerSubtitle='Start your AI-native trade workflow in minutes.'

        firstName={firstName}
        setFirstName={setFirstName}

        lastName={lastName}
        setLastName={setLastName}

        organizationName={organizationName}
        setOrganizationName={setOrganizationName}

        email={email}
        setEmail={setEmail}

        password={password}
        setPassword={setPassword}

        confirmPassword={confirmPassword}
        setConfirmPassword={setConfirmPassword}

        showPassword={showPassword}
        setShowPassword={setShowPassword}

        showConfirmPassword={showConfirmPassword}
        setShowConfirmPassword={setShowConfirmPassword}

        agreedToTerms={agreedToTerms}
        setAgreedToTerms={setAgreedToTerms}

        error={error}
        setError={setError}

        submitBtnText="Create Account"
        isSubmitBtnLoading={false}

        handleSubmit={handleSubmit}
        handleKeyDown={handleKeyDown}
      />


    </motion.div>
  );
}