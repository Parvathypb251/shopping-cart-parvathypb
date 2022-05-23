import React from 'react';
import './Login.scss';
import { TextField, Button } from '@material-ui/core';
import Header from 'sharedComponents/Header/Header';
import Footer from 'sharedComponents/Footer/Footer';

/**
 * Component for login page
 */
const Login = () => {
  const [state, setState] = React.useState({
    email: '',
    password: '',
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
        <section className="section-style">
          <div className="container grid grid--2-cols grid--coln--gap--1 grid--center-v">
            <div className="step-text-box">
              <div className="heading-tertiary">Login</div>
              <p className="login-description">
                Get access to your Orders, Wishlist and Recommendations
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
                  id="email"
                  className="width-70-perc margin-top-sm"
                  label="Email"
                  autoFocus={true}
                  type="email"
                  value={state?.email}
                  required
                  onChange={handleChange('email')}
                />
                <br />
                <TextField
                  className={`width-70-perc  margin-top-sm`}
                  label="Password"
                  type="password"
                  id="password"
                  required
                  onChange={handleChange('password')}
                />
                <br />

                <Button
                  variant="contained"
                  color="primary"
                  id="login-btn"
                  className={`width-70-perc btnStyle  margin-top-sm`}
                  type="submit"
                  disabled={false}
                >
                  Login
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

export default Login;
