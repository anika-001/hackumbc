import React from "react";
import { useRef } from "react";

function yfunc() {}
function Minion({ score }) {
  let ref = useRef();

  const words = [
    "man",
    "women",
    "dogs",
    "cats",
    "pigs",
    "drake",
    "mediator",
    "terminator",
    "wind",
  ];
  let originalRef = useRef(words[Math.floor(Math.random() * words.length)]);
  var sol = btoa(originalRef.current.value);
  function score() {
    if (ref.current.value === originalRef.current.value) {
      score((prev) => {
        prev++;
      });
    }
  }

  return (
    <>
      {/* <div>{randomItem}</div> */}
      <div class="bgimg-23">
        <div class="caption">
          <div class="toptrans">
            <div class="content">
              <div class="name1">Guess the Gibbrish</div>
              <div class="name11">{sol}</div>

              <input
                ref={ref}
                class="inp"
                type="text"
                placeholder="Your Answer!"
              />
              <button class="mybtn" onClick={score}>
                <span>Guess the Gibberish</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Minion;
