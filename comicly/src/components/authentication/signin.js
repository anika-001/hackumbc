import classes from "./signin.module.css";
import Template from "./template";
import Text from "../input/text";
import Button from "../input/button";
import { Link } from "react-router-dom";
import { useState, useRef, useLayoutEffect } from "react";
import { useAuth } from "../../contexts/auth";
import { useHistory } from "react-router-dom";
function SignIn() {
  const authentication = useAuth();
  const [errorHeader, setErrorHeader] = useState("");
  const [errorText, setErrorText] = useState("");
  const history = useHistory();
  const email = useRef();
  const password = useRef();
  useLayoutEffect(() => {
    if (authentication.currentUser) {
      history.replace("/");
    }
  });
  function signIn() {
    authentication.login(
      email.current.value,
      password.current.value,
      setErrorHeader,
      setErrorText
    );
    console.log(authentication);
  }
  return (
    <Template
      setErrorHeader={setErrorHeader}
      setErrorText={setErrorText}
      errorHeader={errorHeader}
      errorText={errorText}
    >
      <Text placeholder="Email" type="text" name="Email" reference={email} />
      <Text
        placeholder="Password"
        type="password"
        name="password"
        src="fa fa-key"
        reference={password}
      />
      <Button center paddingTop="2rem" onClick={signIn}>
        Sign In
      </Button>
      <Link to="/forgotPassword">
        <Button center link>
          Forgot Password
        </Button>
      </Link>
      <div className={classes.no_acct}>
        Don't have an account?{" "}
        <Link to="/signup">
          <Button center small>
            Create
          </Button>
        </Link>
      </div>
    </Template>
  );
}
export default SignIn;
