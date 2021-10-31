import { Link } from "react-router-dom";
import classes from "./competition.module.css";
function Leave({ session }) {
  function click() {
    if (session) {
      console.log("check to see if i am last, then clear session");
    }
  }
  return (
    <Link to="/" onClick={click}>
      <button className={classes.leave}>Leave</button>
    </Link>
  );
}
export default Leave;
