/** @format */

import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Login.css";
import { auth } from "./firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

function Login() {
  const [phoneNumber, setPhoneNumber] = useState("");
  function setCaptcha() {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha",
      {
        size: "invisible",
        callback: () => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          onSignInSubmit();
        },
      },
      auth
    );
  }

  const appVerifier = window.recaptchaVerifier;
  const onSignInSubmit = () => {
    setCaptcha();
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        alert(confirmationResult);
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <div className='mainContainer'>
      <h1>Login With Phone Number</h1>
      <TextField
        id='outlined-basic'
        label='Phone Number'
        variant='outlined'
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <div id='recaptcha'></div>
      <Button onClick={onSignInSubmit}>Login</Button>
    </div>
  );
}

export default Login;
