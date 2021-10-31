import classes from "./competition.module.css";
function Game({ session, nosession }) {
  return (
    <section className={classes.gameBoard}>
      {nosession || session ? (
        ""
      ) : session === undefined ? (
        <div className={classes.centered}>Loading</div>
      ) : session === null ? (
        <div className={classes.centered}>Session does not exist</div>
      ) : null}
    </section>
  );
}

export default Game;
