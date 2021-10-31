import classes from "./alert.module.css";
import { useEffect, useState } from "react";
function Alert({ header, text, setErrorHeader, setErrorText }) {
  const [shouldClose, close] = useState(false);
  useEffect(() => {
    if (header === "" || text === "") close(true);
    else close(false);
  }, [header, text]);
  return (
    <>
      {shouldClose ? null : (
        <aside className={classes.alert}>
          <i
            className="fa fa-times"
            onClick={() => {
              setErrorText("");
              setErrorHeader("");
              close(true);
            }}
          ></i>
          <header>
            <h1>{header}</h1>
          </header>
          <section>
            <p>{text}</p>
          </section>
        </aside>
      )}
    </>
  );
}
export default Alert;
