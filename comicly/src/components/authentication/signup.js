import classes from "./signin.module.css";
import Template from "./template";
import Text from "../input/text";
import Button from "../input/button";
import { Link } from "react-router-dom";
import { useState, useLayoutEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/auth";

function SignUp() {
  const authentication = useAuth();
  const history = useHistory();
  const email = useRef();
  const password = useRef();
  const name = useRef();
  useLayoutEffect(() => {
    if (authentication.currentUser) {
      history.replace("/");
    }
  });
  const [errorHeader, setErrorHeader] = useState("");
  const [errorText, setErrorText] = useState("");
  function signUp() {
    if (name.current.value.length === 0) {
      setErrorHeader("Incorrect Name");
      setErrorText("Your name can't be nothing, is it?");
    } else {
      authentication.signup(
        name.current.value,
        email.current.value,
        password.current.value,
        setErrorHeader,
        setErrorText
      );
    }
  }
  return (
    <Template
      setErrorHeader={setErrorHeader}
      setErrorText={setErrorText}
      errorHeader={errorHeader}
      errorText={errorText}
    >
      <Text
        placeholder="Full Name"
        type="text"
        name="name"
        reference={name}
        src="fa fa-user"
      />
      <Text placeholder="Email" type="text" name="Email" reference={email} />
      <Text
        placeholder="Password"
        type="password"
        name="password"
        src="fa fa-key"
        reference={password}
      />

      <Button center paddingTop="1rem" onClick={signUp}>
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
