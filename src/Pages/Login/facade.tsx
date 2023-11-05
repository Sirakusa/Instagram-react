import Button from "@mui/material/Button";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import { field } from "./styles";

function ButtonLogin() {
  return (
      <Button
        type="submit"
        variant="contained"
        size="small"
        color="success"
        sx={{
          fontSize: "11px",
          width: "100%",
          height: "36px",
        }}>
        Entrar
      </Button>
  );
}

export function SignUpForm() {
  return (
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={Yup.object({
          password: Yup.string()
            .max(15, "Must be 20 characters or less")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}>
        <Form style={{ fontSize: "15px" }}>
          <Field
            name="email"
            type="email"
            placeholder="email"
            style={{ ...field }}
          />
          <ErrorMessage name="email" />

          <div style={{ margin: 9 }}></div>

          <Field
            name="password"
            type="password"
            placeholder="password"
            style={{ ...field }}
          />
          <ErrorMessage name="password" />

          <div style={{ margin: 15 }}></div>

          <>{ButtonLogin()}</>
        </Form>
      </Formik>
  );
}
