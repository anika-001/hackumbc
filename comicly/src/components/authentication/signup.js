import classes from "./signin.module.css";
import Template from "./template";
import Text from "../input/text";
import Button from "../input/button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function SignUp() {
  const [errorHeader, setErrorHeader] = useState("");
  const [errorText, setErrorText] = useState("");
  useEffect(() => {}, []);
  return (
    <Template
      setErrorHeader={setErrorHeader}
      setErrorText={setErrorText}
      errorHeader={errorHeader}
      errorText={errorText}
    >
      <Text placeholder="Email" type="text" name="Email" />
      <Text
        placeholder="Password"
        type="password"
        name="password"
        src="fa fa-key"
      />
      <Text
        placeholder="Confirm Password"
        type="password"
        name="password"
        src="fa fa-key"
      />
      <Button center paddingTop="1rem">
        Sign Up
      </Button>
      <div className={classes.no_acct}>
        Have an account?{" "}
        <Link to="login">
          <Button center small>
            Log in
          </Button>
        </Link>
      </div>
    </Template>
  );
}
export default SignUp;
