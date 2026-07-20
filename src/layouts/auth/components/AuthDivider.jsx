const AuthDivider = ({ text }) => {
  return (
    <div className="relative flex items-center py-1">
      <div className="flex-grow border-t border-neutral-100" />

      <span className="mx-4 flex-shrink text-xs font-normal text-neutral-400">
        {text}
      </span>

      <div className="flex-grow border-t border-neutral-100" />
    </div>
  );
};

export default AuthDivider;