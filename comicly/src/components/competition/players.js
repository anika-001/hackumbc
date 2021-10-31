import classes from "./competition.module.css";

function Players({
  session,
  nosession,
  gameName = "minion translate",
  myscore,
}) {
  return (
    <section className={classes.players}>
      {nosession || session ? (
        nosession ? (
          <div className={classes.user}>
            <div className={classes.name}>{nosession.slice(0, 12)}</div>
            <div className={classes.title}>{gameName.slice(0, 12)}</div>
            <div className={classes.score}>{myscore}</div>
          </div>
        ) : null
      ) : session === undefined ? (
        <div className={classes.centered}>Loading</div>
      ) : session === null ? (
        <div className={classes.centered}>Session does not exist</div>
      ) : null}
    </section>
  );
}

export default Players;
