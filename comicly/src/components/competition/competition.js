import classes from "./competition.module.css";
import Players from "./players";
import Game from "./game";
import Leave from "./leave";
import {
  update,
  ref,
  getDatabase,
  get,
  query,
  onValue,
} from "firebase/database";
import { useEffect, useState } from "react";
import app from "../../firebase";
import { useParams } from "react-router-dom";

function Competition() {
  const [session, setSession] = useState();
  const { id } = useParams();
  useEffect(() => {
    const db = getDatabase(app);
    const dbRef = ref(db, `sessions/${id}`);
    get(query(dbRef)).then(() => {
      //To add a listener you can use the onValue() method like,
      onValue(query(dbRef), (snapshot) => {
        setSession(snapshot.val());
      });
    });
  });
  return (
    <main className={classes.body}>
      <Leave />
      <Players session={session} />
      <Game session={session} />
    </main>
  );
}
export default Competition;
