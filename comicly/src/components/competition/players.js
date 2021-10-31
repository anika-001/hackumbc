import classes from "./competition.module.css";

function Players({ session, nosession }) {
  return (
    <section className={classes.players}>
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

export default Players;
