import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertColor } from "@mui/material/Alert";

const Alert = React.forwardRef<HTMLDivElement, any>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const LoginPage: React.FC = () => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<AlertColor>("success");

  const handleSnackbar = (message: string, severity: AlertColor) => {
    setSnackbarMessage(message);
    setSnackbarSeverity(severity);
    setSnackbarOpen(true);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Email Required"),
      password: Yup.string().min(6, "Minimum 6 characters").required("Password Required"),
    }),
    onSubmit: async (values) => {
      try {
        // Dummy login call
        console.log("Logging in with:", values);
        // Simulate API response
        await new Promise((resolve) => setTimeout(resolve, 1000));
        handleSnackbar("Login successful!", "success");
      } catch (error) {
        handleSnackbar("Login failed. Try again.", "error");
      }
    },
  });

  return (
    <div className="min-h-full bg-gray-50 py-10 px-4 md:px-20">
      <h2 className="text-2xl font-bold text-sky-600 mb-6">Please select</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {/* Already a customer */}
        <div className="bg-gray-100 p-6">
          <h3 className="text-blue-700 font-semibold text-lg border-b pb-2 mb-4">
            I AM ALREADY A CUSTOMER
          </h3>
          <p className="mb-4">Already have a customer account? Log in.</p>
          <form onSubmit={formik.handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Your email address</label>
              <input
                type="email"
                name="email"
                className="w-full border px-3 py-2 rounded"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email && (
                <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <input
                type="password"
                name="password"
                className="w-full border px-3 py-2 rounded"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password && (
                <div className="text-red-500 text-sm mt-1">{formik.errors.password}</div>
              )}
            </div>
            <div className="text-blue-700 text-sm cursor-pointer">Forgot your password?</div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 font-bold mt-2 shadow-lg hover:bg-blue-700"
            >
              REGISTER
            </button>
          </form>
        </div>

        {/* New customer */}
        <div className="bg-gray-100 p-6">
          <h3 className="text-blue-700 font-semibold text-lg border-b pb-2 mb-4">
            I AM A NEW CUSTOMER
          </h3>
          <p className="text-sm">
            Please select this option if you don't have a customer account with us. In the
            next step, you can choose whether you want to create a customer account or order
            without registering.
          </p>
          <button className="bg-blue-600 text-white px-6 py-2 font-bold mt-8 shadow-lg hover:bg-blue-700">
            FURTHER
          </button>
        </div>
      </div>

      {/* Snackbar */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={() => setSnackbarOpen(false)} severity={snackbarSeverity}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default LoginPage;
