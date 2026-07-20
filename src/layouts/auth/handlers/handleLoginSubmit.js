import { toast } from "sonner";
import { validateLogin } from "../validations/validateLogin";

export const handleLoginSubmit = (e, data,setError) => {
    e.preventDefault();

    const validationError = validateLogin(data);

    if (validationError) {
       setError(validationError);
        return;
    }

   setError("");

    toast.success("LogIn sucsessfull");


};