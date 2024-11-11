import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { Button, Icon, TextInput } from '@avaya/neo-react';
import './forms.scss';

interface FormValues {
  userName: string;
  userEmail: string;
  phoneNumber: string;
  userPassword: string;
}

const Forms: React.FC = () => {
  const initialValues: FormValues = {
    userName: '',
    userEmail: '',
    phoneNumber: '',
    userPassword: '',
  };

  const validationSchema = Yup.object({
    userName: Yup.string().trim().required('Name is required'),
    userEmail: Yup.string().trim().email('Invalid email address').required('Email is required'),
    phoneNumber: Yup.string()
      .trim()
      .matches(/^[0-9]+$/, 'Phone number is not valid')
      .min(9, 'Phone number is too short (minimum 9 digits)')
      .max(9, 'Phone number is too long (maximum 9 digits)')
      .required('Phone number is required'),
    userPassword: Yup.string()
      .trim()
      .required('Password is required')
      .matches(
        /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,64})/,
        `Password must contain at least 8 characters and include one of each:
        uppercase letter, lowercase letter, number, special character`,
      ),
  });

  return (
    <div className="FormsPage">
      <h2>Forms page</h2>
      <h4>Inline Form</h4>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values: FormValues, { setSubmitting }) => {
          // eslint-disable-next-line no-console
          console.log('Form data', values);
          setSubmitting(true);
          setTimeout(() => {
            setSubmitting(false);
          }, 1000);
        }}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form aria-label="Playground form" className="PocForm" aria-disabled={isSubmitting}>
            <Field
              as={TextInput}
              disabled={isSubmitting}
              label="Name"
              name="userName"
              type="text"
              autoComplete="name"
              placeholder="Type your name here."
              required
              helperText={errors.userName}
              error={touched.userName && !!errors.userName}
              startAddon={<Icon icon="user" aria-label="input icon" />}
            />
            <Field
              as={TextInput}
              disabled={isSubmitting}
              label="Email"
              name="userEmail"
              type="email"
              autoComplete="email"
              placeholder="Type your email here."
              required
              helperText={errors.userEmail}
              error={touched.userEmail && !!errors.userEmail}
            />
            <Field
              as={TextInput}
              disabled={isSubmitting}
              label="Phone Number"
              name="phoneNumber"
              type="tel"
              autoComplete="tel"
              placeholder="Type your phone number here."
              required
              helperText={errors.phoneNumber}
              error={touched.phoneNumber && !!errors.phoneNumber}
              onKeyPress={(e: KeyboardEvent) => !/[0-9]/.test(e.key) && e.preventDefault()}
              maxLength={9}
            />
            <Field
              as={TextInput}
              disabled={isSubmitting}
              label="Password"
              name="userPassword"
              type="password"
              placeholder="Type your password here."
              required
              helperText={errors.userPassword}
              error={touched.userPassword && !!errors.userPassword}
            />
            <div className="PocForm__buttons">
              <Button id="btn-submit" variant="primary" type="submit" disabled={isSubmitting}>
                Submit
              </Button>
              <Button id="btnCancel" variant="secondary" type="reset">
                Reset
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Forms;
