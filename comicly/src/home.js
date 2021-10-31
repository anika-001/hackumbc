import React, { useEffect, useLayoutEffect } from "react";
import {
  footer,
  authCard_wrapicon,
  authCard_icon,
  authCard_display,
} from "./components/authentication/signin.module.css";
import Button from "./components/input/button";
import { useState } from "react";
import { useAuth } from "./contexts/auth";
import { useHistory } from "react-router-dom";
import {
  update,
  ref,
  getDatabase,
  get,
  query,
  onValue,
  set,
} from "firebase/database";
import app from "./firebase";
function Home() {
  const authentication = useAuth();
  const history = useHistory();
  const [find, setFind] = useState(false);

  function findSession() {
    setFind(true);
  }
  function playLocal() {
    history.replace("/local");
  }
  useLayoutEffect(() => {
    if (!authentication.currentUser) history.replace("/login");
  }, []);
  useEffect(() => {
    if (find) {
      const db = getDatabase(app); // <-- Pass in the initialized app

      const dbRef = ref(db, "sessions");

      onValue(query(dbRef), (snapshot) => {
        if (snapshot.val() !== null)
          Array.from(snapshot.val()).forEach((curr) => {});
        else {
          const db = getDatabase(app);

          let session = set(dbRef, {
            started: false,
            currentGame: "mininion guess",
            users: [{ id: authentication.id, score: 0 }],
          }).then(() => {
            console.log("session has been created");
            history.replace(`/competition/${session}`);
          });
        }
      });
    }
  }, [find, authentication.id]);
  return (
    <div className="main">
      <div className="main-body">
        <div className="wrap-landing">
          <div className={authCard_display + " display"}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Star_background.svg/543px-Star_background.svg.png"
              alt="bkg"
            />
          </div>
          <div className={authCard_wrapicon + " icon"}>
            <div className={authCard_icon}>comicly</div>
          </div>
          <div className="space-between">
            <section>
              <p>
                Feeling bored? Why not hop on a series of fun games with a bunch
                of random humans from around the world. We have games like tic
                tac toe, minion translation, and meme generator. We hope to add
                more games to our inventory down the line, but for now, enjoy
                our games so far. Hope we see you often:)
              </p>
            </section>

            <Button center marginTop="1rem" onClick={findSession}>
              Find session
            </Button>
            <p style={{ textAlign: "center", color: "#ff477e" }}>OR</p>
            <Button center marginTop="1rem" onClick={playLocal}>
              Play Local
            </Button>
          </div>
        </div>
      </div>
      <div className="midbar">
        <h2 className="midbar1">What do we do?</h2>
        <p className="info">
          Comicly is a interactive tool to bring smile on anyone's face! Our
          mission is to spread smile, laughter and happiness everywhere!
        </p>
      </div>
      <div clasNames="bgimg-1"></div>
      <footer className={footer}>© Copyright 2021 by comicly</footer>
    </div>
  );
}
export default Home;
