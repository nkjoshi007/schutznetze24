import React, { useState } from 'react';
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  TextField,
  Typography
} from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Alert = React.forwardRef<HTMLDivElement, any>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Register: React.FC = () => {
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

  const formik = useFormik({
    initialValues: {
      customerGroup: '',
      firstName: '',
      lastName: '',
      street: '',
      postalCode: '',
      location: '',
      country: 'Germany',
      email: '',
      repeatEmail: '',
      createAccount: false,
      phone: '',
      fax: ''
    },
    validationSchema: Yup.object({
      customerGroup: Yup.string().required('Required'),
      firstName: Yup.string().required('Required'),
      lastName: Yup.string().required('Required'),
      street: Yup.string().required('Required'),
      postalCode: Yup.string().required('Required'),
      location: Yup.string().required('Required'),
      country: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email').required('Required'),
      repeatEmail: Yup.string()
        .oneOf([Yup.ref('email')], 'Emails must match')
        .required('Required')
    }),
    onSubmit: async (values) => {
      try {
        // Simulated API request
        console.log(values);
        setSnackbar({ open: true, message: 'Signup successful!', severity: 'success' });
      } catch (error) {
        setSnackbar({ open: true, message: 'Signup failed. Please try again.', severity: 'error' });
      }
    }
  });

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Information about your customer account
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          {/* Billing Address */}
          <Grid size={{xs:12, md:6}}>
            <Typography variant="subtitle1">Billing Address</Typography>
            <FormControl fullWidth sx={{ mt: 2 }}>
              <InputLabel>Customer group</InputLabel>
              <Select
                name="customerGroup"
                value={formik.values.customerGroup}
                onChange={formik.handleChange}
                error={formik.touched.customerGroup && Boolean(formik.errors.customerGroup)}
              >
                <MenuItem value="">Please select</MenuItem>
                <MenuItem value="group1">Group 1</MenuItem>
                <MenuItem value="group2">Group 2</MenuItem>
              </Select>
            </FormControl>
            <TextField
              fullWidth
              label="First name"
              name="firstName"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              error={formik.touched.firstName && Boolean(formik.errors.firstName)}
              helperText={formik.touched.firstName && formik.errors.firstName}
              sx={{ mt: 2 }}
            />
            <TextField
              fullWidth
              label="Last name"
              name="lastName"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              helperText={formik.touched.lastName && formik.errors.lastName}
              sx={{ mt: 2 }}
            />
            <TextField
              fullWidth
              label="Street, house number"
              name="street"
              value={formik.values.street}
              onChange={formik.handleChange}
              error={formik.touched.street && Boolean(formik.errors.street)}
              helperText={formik.touched.street && formik.errors.street}
              sx={{ mt: 2 }}
            />
            <Grid container spacing={2} sx={{ mt: 1 }}>
              <Grid size={{xs:6}}>
                <TextField
                  fullWidth
                  label="Postal code"
                  name="postalCode"
                  value={formik.values.postalCode}
                  onChange={formik.handleChange}
                  error={formik.touched.postalCode && Boolean(formik.errors.postalCode)}
                  helperText={formik.touched.postalCode && formik.errors.postalCode}
                />
              </Grid>
              <Grid size={{xs:6}}>
                <TextField
                  fullWidth
                  label="Location"
                  name="location"
                  value={formik.values.location}
                  onChange={formik.handleChange}
                  error={formik.touched.location && Boolean(formik.errors.location)}
                  helperText={formik.touched.location && formik.errors.location}
                />
              </Grid>
            </Grid>
            <TextField
              fullWidth
              label="Country"
              name="country"
              value={formik.values.country}
              onChange={formik.handleChange}
              sx={{ mt: 2 }}
              disabled
            />
          </Grid>

          {/* Contact Details */}
          <Grid size={{xs:12, md:6}}>
            <Typography variant="subtitle1">Contact Details</Typography>
            <TextField
              fullWidth
              label="E-mail address"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              sx={{ mt: 2 }}
            />
            <TextField
              fullWidth
              label="Repeat E-mail"
              name="repeatEmail"
              value={formik.values.repeatEmail}
              onChange={formik.handleChange}
              error={formik.touched.repeatEmail && Boolean(formik.errors.repeatEmail)}
              helperText={formik.touched.repeatEmail && formik.errors.repeatEmail}
              sx={{ mt: 2 }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="createAccount"
                  checked={formik.values.createAccount}
                  onChange={formik.handleChange}
                />
              }
              label="I would like to create a customer account"
              sx={{ mt: 2 }}
            />
            <TextField
              fullWidth
              label="Phone"
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              sx={{ mt: 2 }}
            />
            <TextField
              fullWidth
              label="Fax"
              name="fax"
              value={formik.values.fax}
              onChange={formik.handleChange}
              sx={{ mt: 2 }}
            />
          </Grid>

          <Grid size={{xs:12}}>
            <Button variant="contained" color="primary" type="submit" sx={{ float: 'right' }}>
              Register
            </Button>
          </Grid>
        </Grid>
      </form>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert onClose={() => setSnackbar({ ...snackbar, open: false })} severity={snackbar.severity as any}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Register;
