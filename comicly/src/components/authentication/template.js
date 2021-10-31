import AuthCard from "./authCard/authCard";
import classes from "./signin.module.css";
import Alert from "../report/alert";

function Template({
  children,
  setErrorHeader,
  setErrorText,
  errorHeader,
  errorText,
}) {
  return (
    <main className={classes.body}>
      <Alert
        header={errorHeader}
        text={errorText}
        setErrorHeader={setErrorHeader}
        setErrorText={setErrorText}
      />
      <AuthCard setErrorHeader={setErrorHeader} setErrorText={setErrorText}>
        {children}
      </AuthCard>
      <footer className={classes.footer}>© Copyright 2021 by comicly</footer>
    </main>
  );
}
export default Template;
