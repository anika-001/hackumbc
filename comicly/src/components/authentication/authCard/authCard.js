import classes from "../signin.module.css";
function AuthCard({ children }) {
  return (
    <section className={classes.authCard}>
      <div className={classes.shine}></div>
      <div className={classes.authCard_display}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Star_background.svg/543px-Star_background.svg.png"
          alt="bkg"
        />
      </div>
      <div className={classes.authCard_wrapicon}>
        <div className={classes.authCard_icon}>comicly</div>
      </div>

      <div className={classes.authCard_form}>{children}</div>
    </section>
  );
}
export default AuthCard;
