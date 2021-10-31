import React from 'react';

function Minion() {
    console.log("hello");
    var myArray = [
        "Drew ache",
        "ehm ine hm",
        "door her text pull horror"
      ];
      var myArraySol = [
        "Drake",
        "Eminem",
        "Dora The Explorer"
      ];
      var  randno=Math.floor(Math.random()*myArray.length);
      var randomItem = myArray[randno];
      var sol=myArraySol[randno];
    return (<>
    {/* <div>{randomItem}</div> */}
    <div class="bgimg-23">
        <div class="caption">
            <div class="toptrans">
                <div class="content">
                    <div class="name1">Guess the Gibbrish</div>
                    <div class="name11">
                        {randomItem}
                    </div>

                    <input class="inp" type="text" placeholder="Your Answer!"/>
                    <button class="mybtn"><span>Guess the Gibberish</span></button>
                </div>
            </div>
        </div>
    </div></>);
  }
  
  export default Minion;