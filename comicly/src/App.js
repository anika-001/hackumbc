import SignIn from "./components/authentication/signin";
import SignUp from "./components/authentication/signup";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import ForgotPassword from "./components/authentication/forgetPassword";
import Competition from "./components/competition/competition";
import Home from "./home";
import Local from "./components/competition/local";
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
          <Home />
        </Route>
        <Route path="/forgotPassword" exact>
          <ForgotPassword />
        </Route>
        <Route path="/competition/:id" exact>
          <Competition />
        </Route>
        <Route path="/local" exact>
          <Local />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
