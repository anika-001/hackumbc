import React, { useContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";
import app, { auth } from "../firebase";
import {
  update,
  ref,
  getDatabase,
  set,
  get,
  onValue,
  query,
} from "firebase/database";

const AuthContext = React.createContext();

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [name, setName] = useState("unnamed");
  const [id, setId] = useState("");
  function message(code, message, setErrorHeader, setErrorText) {
    if (code === "auth/invalid-email") {
      setErrorHeader("Invalid Email");
      setErrorText(
        "Your email address cannot be empty or you have some bad characters in your email. Please fix this error before proceeding."
      );
    } else if (code === "auth/internal-error") {
      setErrorHeader("Internal Error has occured");
      setErrorText(
        "Some things are just beyond us, you know. A server error has occured:("
      );
    } else if (code === "auth/email-already-exists") {
      setErrorHeader("User exists");
      setErrorText(
        "You must love this site if you keep trying to recreate the same account, haha. We love to see that!!!"
      );
    } else if (code === "auth/invalid-password") {
      setErrorHeader("Password error");
      setErrorText("Please make sure your password is correct.");
    } else if (code === "auth/user-not-found") {
    } else {
      setErrorHeader("Oops");
      setErrorText(
        "Well, this shouldn't be happening. We would be sure to look into this!!! Just give us a heads up so we could resolve this ASAP, thank you!"
      );
    }
  }
  useEffect(() => {
    let unsubscribe;
    const getUser = async () => {
      unsubscribe = await auth.onAuthStateChanged((user) => {
        if (user) {
          setCurrentUser(user);
          setId(btoa(user.email));
          const db = getDatabase(app);
          const dbRef = ref(db, `users/${btoa(user.email)}`);

          onValue(query(dbRef), (snapshot) => {
            setName(snapshot.val().name);
          });
        }
      });
    };
    getUser();

    return unsubscribe;
  }, []);

  async function signup(name, email, password, setErrorHeader, setErrorText) {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        setCurrentUser(user);
        const db = getDatabase(app);
        const dbRef = ref(db, `users/${btoa(email)}`);

        set(dbRef, { name })
          .then(() => {
            setName(name);
            setId(btoa(email));
          })
          .catch((err) => {});

        // return user.user.updateProfile({
        //   displayName: name,
        // });
      })
      .catch((err) => {
        message(err.code, err.message, setErrorHeader, setErrorText);
      });
  }
  const login = async (email, password, setErrorHeader, setErrorText) => {
    return signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        setCurrentUser(user);
      })
      .catch((err) => {
        message(err.code, err.message, setErrorHeader, setErrorText);
      });
  };

  const logout = async (setErrorHeader, setErrorText) => {
    return signOut(auth)
      .then(() => {
        setCurrentUser(undefined);
      })
      .catch((err) => {
        message(err.code, err.message, setErrorHeader, setErrorText);
      });
  };

  const resetPassword = async (email, setErrorHeader, setErrorText) => {
    return sendPasswordResetEmail(auth, email).catch((err) => {
      message(err.code, err.message, setErrorHeader, setErrorText);
    });
  };

  const value = {
    currentUser,
    signup,
    login,
    logout,
    resetPassword,
    name,
    id,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
