import { useFormik } from "formik";
import { formValidationSchema } from "../validation";

function Register() {
  const formik = useFormik({
    initialValues: {
      name: "",
      mail: "",
      gender: "female",
      password: "",
      confirmPassword: "",
    },
    validateOnChange: true,
    validationSchema: formValidationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      alert("User registered successfully");
      resetForm();
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <br />
          <input
            className="form-input"
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
            style={{
              border:
                formik.touched.name && formik.errors?.name
                  ? "1px solid red"
                  : "",
            }}
          />
          {formik.touched.name && (
            <p style={{ color: "red", fontSize: "10px" }}>
              {formik.errors?.name}
            </p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="mail" className="form-label">
            Mail
          </label>
          <br />
          <input
            className="form-input"
            id="mail"
            name="mail"
            type="mail"
            onChange={formik.handleChange}
            value={formik.values.mail}
            style={{
              border:
                formik.touched.mail && formik.errors?.mail
                  ? "1px solid red"
                  : "",
            }}
          />
          {formik.touched.mail && (
            <p style={{ color: "red", fontSize: "10px" }}>
              {formik.errors?.mail}
            </p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="gender" className="form-label">
            Gender
          </label>
          <br />
          <div className="radio-group">
            <label className="radio-label">
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formik.values.gender === "female"}
                onChange={formik.handleChange}
              />
              <span className="radio-text">Female</span>
            </label>
            <label className="radio-label">
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formik.values.gender === "male"}
                onChange={formik.handleChange}
              />
              <span className="radio-text">Male</span>
            </label>
          </div>
          <p style={{ color: "red", fontSize: "10px" }}>
            {formik.errors?.gender}
          </p>
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">
            Passowrd
          </label>
          <br />
          <input
            className="form-input"
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            style={{
              border:
                formik.touched.password && formik.errors?.password
                  ? "1px solid red"
                  : "",
            }}
          />
          {formik.touched.password && (
            <p style={{ color: "red", fontSize: "10px" }}>
              {formik.errors?.password}
            </p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword" className="form-label">
            Confirm Passowrd
          </label>
          <br />
          <input
            className="form-input"
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.confirmPassword}
            style={{
              border:
                formik.touched.confirmPassword && formik.errors?.confirmPassword
                  ? "1px solid red"
                  : "",
            }}
          />
          {formik.touched.confirmPassword && (
            <p style={{ color: "red", fontSize: "10px" }}>
              {formik.errors?.confirmPassword}
            </p>
          )}
        </div>
        <div>
          <button className="form-button" type="submit">
            Register
          </button>
        </div>
      </form>
    </>
  );
}

export default Register;
