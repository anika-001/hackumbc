import classes from "./input.module.css";
function Button({
  children,
  center,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  link,
  small,
  onClick,
}) {
  return (
    <div
      style={{
        width: small ? "" : "100%",
        display: "flex",
        justifyContent: center ? "center" : "",
        paddingLeft,
        paddingRight,
        paddingTop,
        paddingBottom,
        marginLeft,
        marginRight,
        marginTop,
        marginBottom,
      }}
    >
      <button
        onClick={onClick}
        className={
          link
            ? classes.button_link
            : small
            ? classes.small_button
            : classes.button
        }
      >
        {children}
      </button>
    </div>
  );
}
export default Button;
