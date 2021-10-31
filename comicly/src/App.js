import SignIn from "./components/authentication/signin";
import SignUp from "./components/authentication/signup";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import ForgotPassword from "./components/authentication/forgetPassword";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" exact>
          <SignIn />
        </Route>
        <Route path="/signup" exact>
          <SignUp />
        </Route>
        <Route path="/" exact>
          home
        </Route>
        <Route path="/forgotPassword" exact>
          <ForgotPassword />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
