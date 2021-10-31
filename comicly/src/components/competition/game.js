import Minion from "../../minion";
import classes from "./competition.module.css";
function Game({ session, nosession, score }) {
  return (
    <section className={classes.gameBoard}>
      {nosession || session ? (
        <Minion score />
      ) : session === undefined ? (
        <div className={classes.centered}>Loading</div>
      ) : session === null ? (
        <div className={classes.centered}>Session does not exist</div>
      ) : null}
    </section>
  );
}

export default Game;
