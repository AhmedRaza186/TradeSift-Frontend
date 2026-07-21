import apiClient from "../../../services/apiClient";

export const signup = async ({
  firstName,
  lastName,
  organisation,
  email,
  password,
  passwordConfirmation,
  agreedToTerms,

}) => {
  const response = await apiClient.post("/auth/register", {
    firstName,
    lastName,
    organisation,
    email,
    password,
    passwordConfirmation,
    agreedToTerms,

  });

  return response.data;
};