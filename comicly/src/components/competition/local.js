import classes from "./competition.module.css";
import Players from "./players";
import Game from "./game";
import Leave from "./leave";
import { useEffect, useState, useLayoutEffect } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../contexts/auth";
import { useHistory } from "react-router-dom";
function Local() {
  const [myscore, score] = useState(0);
  const authentication = useAuth();
  const history = useHistory();
  useLayoutEffect(() => {
    if (!authentication.currentUser) history.replace("/login");
  }, []);
  return (
    <main className={classes.body}>
      <Leave />
      <Players nosession={authentication.name} myscore={myscore} />
      <Game nosession={authentication.name} score={score} />
    </main>
  );
}
export default Local;
