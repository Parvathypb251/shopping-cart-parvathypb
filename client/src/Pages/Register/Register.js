import React from 'react';
import { TextField, Button } from '@material-ui/core';
import Header from 'sharedComponents/Header/Header';
import Footer from 'sharedComponents/Footer/Footer';

/**
 * Component for registration page
 */
const Register = () => {
  const [state, setState] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (name) => (event) => {
    setState({
      [name]: event.target.value,
    });
  };

  const submit = (event) => {
    event.preventDefault();
    console.log('SUBMIT', event);
  };
  return (
    <>
      <Header />
      <main>
        <section className="register-section-style margin-top-10">
          <div className="container grid grid--2-cols grid--coln--gap--1 grid--center-v">
            <div className="step-text-box">
              <div className="heading-tertiary">Signup</div>
              <p className="register-description">
                We do not share your personal details with anyone.
              </p>
            </div>
            <div className=" formContainer ">
              <form
                autoComplete="off"
                className="pad-top-25"
                onSubmit={(e) => {
                  submit(e);
                }}
                helperText="Please fill in this field."
              >
                <TextField
                  id="firstName"
                  className="width-70-perc margin-top-v-sm"
                  label="First Name"
                  autoFocus={true}
                  type="text"
                  value={state?.firstName}
                  required
                  onChange={handleChange('firstName')}
                />
                <br />
                <TextField
                  id="lastName"
                  className="width-70-perc margin-top-v-sm"
                  label="Last Name"
                  autoFocus={true}
                  type="text"
                  value={state?.lastName}
                  required
                  onChange={handleChange('lastName')}
                />
                <br />
                <TextField
                  id="email"
                  className="width-70-perc margin-top-v-sm"
                  label="Email"
                  autoFocus={true}
                  type="email"
                  value={state?.email}
                  required
                  onChange={handleChange('email')}
                />
                <br />
                <TextField
                  className={`width-70-perc  margin-top-v-sm`}
                  label="Password"
                  type="password"
                  id="password"
                  required
                  onChange={handleChange('password')}
                />
                <br />
                <TextField
                  className={`width-70-perc  margin-top-v-sm`}
                  label="Confirm Password"
                  type="confirmPassword"
                  id="confirmPassword"
                  required
                  onChange={handleChange('confirmPassword')}
                />
                <br />
                <Button
                  variant="contained"
                  color="primary"
                  id="login-btn"
                  className={`width-70-perc btnStyle  margin-top-v-sm`}
                  type="submit"
                  disabled={false}
                >
                  Signup
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Register;
