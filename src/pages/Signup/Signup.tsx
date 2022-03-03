import { Box, Button, FormControl, Grid, InputLabel } from '@material-ui/core';
import { FrontLayout } from 'components';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ISignUpRequestPayload } from 'shared/interfaces/IUser';
import { ContactInput, Input, InputPassword, Select } from 'themes/elements';
import { useStyles } from './Signup.styles';
import * as yup from 'yup';
import { FormikProps, useFormik } from 'formik';
import { getErrorMessage } from 'shared/utils/getErrorMessage';
import { IKeyValue } from 'shared/interfaces/utils/IKeyValue';
import { PasswordPrinciple, validatePassword } from 'utils/passwordUtil';

const NORMAL_SIZE = 456;
const FULL_SIZE = 800;

const Signup = () => {
  const classes = useStyles();
  const [isFullModel, setIsFullModel] = useState<boolean>(false);
  const [passwordValidationResult, setPasswordValidationResult] = useState<PasswordPrinciple | null>(null);
  const toggleFullModel = () => setIsFullModel((curr) => !curr);

  const countries: IKeyValue[] = [
    {
      key: 'Australia',
      value: 'AU',
    },
    {
      key: 'Philippines',
      value: 'PH',
    },
  ];

  // Forms
  const initialValues: ISignUpRequestPayload = {
    first_name: '',
    last_name: '',
    contact_number: '2',
    email: '',
    country: 'PH',
    state: 'AU',
    password: '',
  };

  const signUpValidationSchema: yup.SchemaOf<ISignUpRequestPayload> = yup.object({
    first_name: yup.string().required('First Name is required'),
    last_name: yup.string().required('Last Name is Required'),
    contact_number: yup.string().required('Contact Number is Required'),
    email: yup.string().email('Must be a valid email').required('Email is required'),
    country: yup.string().required('Country is Required'),
    state: yup.string().required('State is Required'),
    password: yup
      .string()
      .required('Password is required')
      .test('passwordValidate', 'Invalid Password', (value: any) => {
        if (value) {
          const validatePasswordResult = validatePassword(value);
          setPasswordValidationResult(validatePasswordResult);
          return validatePasswordResult.IsValid;
        }
        return false;
      }),
  });

  const form: FormikProps<ISignUpRequestPayload> = useFormik({
    initialValues,
    validationSchema: signUpValidationSchema,
    onSubmit: (values) => console.log(values),
  });

  return (
    <FrontLayout
      heading="Let’s create your new"
      subHeading="Account Now"
      containerWidth={!isFullModel ? NORMAL_SIZE : FULL_SIZE}
    >
      <Box>
        <Grid container spacing={2}>
          <Grid xs={12} lg={isFullModel ? 6 : 12} item>
            <Input
              label={'First Name'}
              autoFocus
              name="first_name"
              onChange={form.handleChange}
              errorMessage={getErrorMessage(form.touched.first_name, form.errors.first_name)}
              value={form.values.first_name}
              fullWidth
              margin={'normal'}
              InputProps={{ disableUnderline: true }}
              InputLabelProps={{ shrink: true }}
              inputProps={{ tabIndex: 1 }}
            />

            <Input
              label={'Last Name'}
              name="last_name"
              onChange={form.handleChange}
              errorMessage={getErrorMessage(form.touched.last_name, form.errors.last_name)}
              value={form.values.last_name}
              fullWidth
              margin={'normal'}
              InputProps={{ disableUnderline: true }}
              InputLabelProps={{ shrink: true }}
              inputProps={{ tabIndex: 2 }}
            />
            <ContactInput />
            <Input
              label={'Email Address'}
              name="email"
              onChange={form.handleChange}
              errorMessage={getErrorMessage(form.touched.email, form.errors.email)}
              value={form.values.email}
              fullWidth
              margin={'normal'}
              InputProps={{ disableUnderline: true }}
              InputLabelProps={{ shrink: true }}
              inputProps={{ tabIndex: 5 }}
            />
            <Box className={classes.location__container}>
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <Select
                    label="Country / State"
                    fullWidth
                    data={countries}
                    value={form.values.country}
                    onChange={(event) => form.setFieldValue('country', event.target.value)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Select
                    label=" "
                    fullWidth
                    data={countries}
                    value={form.values.state}
                    onChange={(event) => form.setFieldValue('state', event.target.value)}
                  />
                </Grid>
              </Grid>
            </Box>
            <Box className={classes.password__container}>
              <InputPassword
                label={'New Password'}
                margin={'normal'}
                name="password"
                onChange={form.handleChange}
                errorMessage={getErrorMessage(form.touched.password, form.errors.password)}
                value={form.values.password}
                fullWidth
                InputProps={{ disableUnderline: true }}
                InputLabelProps={{ shrink: true }}
                inputProps={{ tabIndex: 8 }}
              />
              <span className={classes.password__helper} onClick={toggleFullModel}>
                (?)
              </span>
              <InputPassword
                label={'Repeat Password'}
                margin={'normal'}
                fullWidth
                InputProps={{ disableUnderline: true }}
                InputLabelProps={{ shrink: true }}
                inputProps={{ tabIndex: 8 }}
              />
            </Box>
            <Button
              variant="contained"
              disableElevation
              fullWidth
              tabIndex={10}
              style={{ marginTop: '24px' }}
              onClick={() => form.handleSubmit()}
            >
              Create Account
            </Button>

            <Button
              variant="outlined"
              disableElevation
              fullWidth
              style={{ marginTop: '24px' }}
              component={Link}
              to={'/login'}
              tabIndex={11}
            >
              Cancel to Log In
            </Button>
          </Grid>
        </Grid>
      </Box>
    </FrontLayout>
  );
};

export default Signup;
