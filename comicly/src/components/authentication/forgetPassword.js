import Template from "./template";
import Text from "../input/text";
import Button from "../input/button";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import { useAuth } from "../../contexts/auth";
function ForgotPassword() {
  const authentication = useAuth();
  const email = useRef();
  const [errorHeader, setErrorHeader] = useState("");
  const [errorText, setErrorText] = useState("");
  function recover() {
    authentication.resetPassword(
      email.current.value,
      setErrorHeader,
      setErrorText
    );
  }
  return (
    <Template
      setErrorHeader={setErrorHeader}
      setErrorText={setErrorText}
      errorHeader={errorHeader}
      errorText={errorText}
    >
      <Text placeholder="Email" type="text" name="Email" reference={email} />

      <Button center paddingTop="1rem" onClick={recover}>
        <span style={{ fontSize: "1rem" }}>Recover Password</span>
      </Button>

      <Link to="login">
        <Button center link marginTop="2rem">
          <span style={{ fontSize: "1.2rem" }}>Log in</span>
        </Button>
      </Link>
      <div style={{ textAlign: "center" }}>OR</div>
      <Link to="signup">
        <Button center link>
          <span style={{ fontSize: "1.2rem" }}>Sign Up</span>
        </Button>
      </Link>
    </Template>
  );
}
export default ForgotPassword;
