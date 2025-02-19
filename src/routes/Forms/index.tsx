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
  userDob: string;
  creditCard: string;
}

const Forms: React.FC = () => {
  const initialValues: FormValues = {
    userName: '',
    userEmail: '',
    phoneNumber: '',
    userPassword: '',
    userDob: '',
    creditCard: '',
  };

  const validationSchema = Yup.object({
    userName: Yup.string().trim().required('Name is required'),
    userEmail: Yup.string()
      .trim()
      .matches(
        // Regex from RFC2822 standard
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
        'Invalid email address',
      )
      .required('Email is required'),
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
    userDob: Yup.date()
      .min(new Date(1900, 0, 1), 'Date of birth cannot be earlier than 1900')
      // set max date so that user is at least 18 years old
      .max(
        new Date(new Date().getFullYear() - 18, new Date().getMonth(), new Date().getDate()),
        'You must be at least 18 years old',
      )
      .typeError('Invalid date format')
      .required('Date of birth is required'),
    creditCard: Yup.string()
      .trim()
      .matches(
        /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|6(?:011|5[0-9]{2})[0-9]{12}|(?:2131|1800|35\d{3})\d{11})$/,
        'This is not a valid credit card number.',
      )
      .required('Credit card number is required'),
  });

  return (
    <div className="FormsPage DemoPage">
      <h1>Forms</h1>
      <h2>Inline Form with validation</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values: FormValues, { setSubmitting }) => {
          // eslint-disable-next-line no-console
          console.log('Form data', values);
          setSubmitting(true);
          setTimeout(() => {
            setSubmitting(false);
          }, 2000);
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
              startAddon={<Icon icon="user" aria-label="input icon for user name" />}
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
              startAddon={<Icon icon="email" aria-label="input icon for email" />}
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
              startAddon={<Icon icon="voice" aria-label="input icon for phone number" />}
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
              startAddon={<Icon icon="lock" aria-label="input icon for password" />}
            />
            <Field
              as={TextInput}
              disabled={isSubmitting}
              label="Date of Birth"
              name="userDob"
              type="date"
              placeholder="Select your date of birth."
              required
              helperText={errors.userDob}
              error={touched.userDob && !!errors.userDob}
              startAddon={<Icon icon="calendar" aria-label="input icon for date of birth" />}
            />
            <Field
              as={TextInput}
              disabled={isSubmitting}
              label="Credit Card Number"
              name="creditCard"
              type="text"
              autoComplete="cc-number"
              placeholder="Type your credit card number here."
              required
              helperText={errors.creditCard}
              error={touched.creditCard && !!errors.creditCard}
              onKeyPress={(e: KeyboardEvent) => !/[0-9]/.test(e.key) && e.preventDefault()}
              maxLength={16}
              startAddon={<Icon icon="credit-card" aria-label="input icon for credit card" />}
            />
            <div className="PocForm__buttons">
              <Button id="btn-submit" variant="primary" type="submit" disabled={isSubmitting}>
                Submit
              </Button>
              <Button id="btnCancel" variant="secondary" type="reset" disabled={isSubmitting}>
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
