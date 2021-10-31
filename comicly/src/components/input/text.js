import classes from "./input.module.css";
function Text({
  type = "text",
  placeholder,
  reference,
  name,
  id,
  defaultValue,
  src = "fa fa-envelope",
}) {
  return (
    <div className={classes.input}>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        id={id}
        defaultValue={defaultValue}
        ref={reference}
      />
      <div className={classes.wrapIcon}>
        <i className={src} aria-hidden="true"></i>
      </div>
    </div>
  );
}
export default Text;
