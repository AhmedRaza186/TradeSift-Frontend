import { Lock, Eye, EyeOff } from "lucide-react";
import { motion } from "framer-motion";

const PasswordInput = ({
  id,
  label,
  value,
  onChange,
  showPassword,
  setShowPassword,
  placeholder,
  onKeyDown,
  required = true,
}) => {
  return (
    <div className="space-y-1.5">
      <label
        htmlFor={id}
        className="text-[13px] font-medium text-neutral-800"
      >
        {label}
      </label>

      <div className="relative mt-1 flex items-center">
        <Lock className="absolute left-3.5 h-4 w-4 text-neutral-400" />

        <input
          id={id}
          type={showPassword ? "text" : "password"}
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={onKeyDown}
          placeholder={placeholder}
          className="w-full rounded-xl border border-neutral-200 py-2 pl-11 pr-11 text-sm outline-none placeholder:text-neutral-400 focus:border-neutral-400 focus:ring-1 focus:ring-neutral-400 transition-all duration-200 hover:border-neutral-400 focus:scale-[1.01] focus:shadow-lg focus:shadow-black/5"
        />

        <motion.button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3.5 text-neutral-400 transition hover:text-neutral-600"
          aria-label={`Toggle ${label.toLowerCase()} visibility`}
        >
          {showPassword ? (
            <EyeOff className="h-4 w-4" />
          ) : (
            <Eye className="h-4 w-4" />
          )}
        </motion.button>
      </div>
    </div>
  );
};

export default PasswordInput;