import { AnimatePresence, motion } from "framer-motion";
import { scaleIn } from "../../../animations/variants";

const AuthError = ({ error }) => {
  return (
    <AnimatePresence mode="wait">
      {error && (
        <motion.p
          key="form-error"
          variants={scaleIn}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="rounded-lg border border-red-200 bg-red-50 px-4 py-2 text-center text-sm font-medium text-red-600"
        >
          {error}
        </motion.p>
      )}
    </AnimatePresence>
  );
};

export default AuthError;