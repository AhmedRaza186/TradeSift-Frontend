const AuthFooter = ({ actionText }) => {
  return (
    <footer className="text-center text-xs text-neutral-400">
      {actionText}{" "}
      <a href="#" className="text-amber-500 hover:underline">
        Terms of Service
      </a>{" "}
      and{" "}
      <a href="#" className="text-amber-500 hover:underline">
        Privacy Policy
      </a>
      .
    </footer>
  );
};

export default AuthFooter;