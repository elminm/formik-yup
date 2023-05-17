import * as Yup from "yup";

export const formValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required("cannot be empty")
    .max(50, "You cannot add more than 50 characters"),
  mail: Yup.string()
    .required("cannot be empty")
    .email("Invalid email address")
    .test(
      "code-email",
      "Email address must have @code.edu.az domain",
      (value) => {
        if (value) {
          return value.endsWith("@code.edu.az");
        }
        return true;
      }
    ),
  gender: Yup.string().required("You need to specify your gender"),
  password: Yup.string()
    .required("You need to create a password")
    .min(8, "The length of the password must be at least 8 characters")
    .test(
      "first-letter-uppercase",
      "The first letter of the password must be capitalized",
      (value) => {
        if (value) {
          const firstLetter = value[0];
          return firstLetter === firstLetter.toUpperCase();
        }
        return true;
      }
    ),
  confirmPassword: Yup.string()
    .required("You need to confirm your password")
    .oneOf([Yup.ref("password")], "Passwords do not match"),
});
