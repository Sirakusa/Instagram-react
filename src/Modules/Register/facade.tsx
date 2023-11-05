import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import { BoxText } from "./styles";

import { TextRegister } from "./component/TextRegister";

export const SignUpForm = () => {
  return (
    <Formik
      initialValues={{ email: "", fullName: "", userName: "", password: "" }}
      validationSchema={Yup.object({
        fullName: Yup.string()
          .max(40, "Must be 15 characters or less")
          .required("Required"),
        userName: Yup.string()
          .max(15, "Must be 20 characters or less")
          .required("Required"),
        password: Yup.string()
          .max(15, "Must be 20 characters or less")
          .required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}>
      <Form style={{ fontSize: "9px" }}>
        <Field
          name="email"
          type="email"
          placeholder="email"
          style={{ width: "300px", height: "25px" }}
        />
        <ErrorMessage name="email" />

        <div style={{ margin: 9 }}></div>

        <Field
          name="fullName"
          type="text"
          placeholder="fullName"
          style={{ width: "300px", height: "25px" }}
        />
        <ErrorMessage name="fullName" />

        <div style={{ margin: 9 }}></div>

        <Field
          name="userName"
          type="text"
          placeholder="userName"
          style={{ width: "300px", height: "25px" }}
        />
        <ErrorMessage name="userName" />

        <div style={{ margin: 9 }}></div>

        <Field
          name="password"
          type="password"
          placeholder="password"
          style={{ width: "300px", height: "25px" }}
        />
        <ErrorMessage name="password" />

        <Box sx={BoxText}>{TextRegister()}</Box>

        <Button
          type="submit"
          variant="contained"
          size="small"
          color="success"
          sx={{
            fontSize: "13px",
            width: "100%",
          }}>
          Registrar
        </Button>
      </Form>
    </Formik>
  );
};
