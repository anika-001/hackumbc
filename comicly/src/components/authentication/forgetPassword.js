import Template from "./template";
import Text from "../input/text";
import Button from "../input/button";
import { Link } from "react-router-dom";
function ForgotPassword() {
  return (
    <Template>
      <Text placeholder="Email" type="text" name="Email" />

      <Button center paddingTop="1rem">
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
