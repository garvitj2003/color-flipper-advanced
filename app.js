// FUNCTION FOR GENERATING RANDOM HEX CODE(PARENT FUNCTION)
const getColor = () => {
  const colorArray = [];
  for (let i = 0; i < 7; i++) {
    const randomNumber = Math.floor(Math.random() * 16777215);
    // .PADSTART IS TO FILL EMPTY SPACES WITH 0
    const randomCode =
      "#" + randomNumber.toString(16).padStart(6, "0").toUpperCase();
    colorArray.push(randomCode);
  }
  // ASSIGNING COLOR TO BACKGROUND AND BUTTONS
  document.body.style.backgroundColor = colorArray[0];
  document.getElementById("colorCode").innerText = colorArray[0];

  // GIVING FUNCTION (CHILD FUNCTION) TO BUTTONS TO CHANGE BACKGROUND COLOR

  //BUTTON 1
  document.getElementById("btn1").style.backgroundColor = colorArray[1];
  document.getElementById("btn1").addEventListener("click", function () {
    /*if (colorArray[0] === document.body.style.backgroundColor) {
      document.body.style.backgroundColor = color2;
    }*/

    /* AVOID USING if STATEMENT BCS WHENEVER WE ASK BROWSER TO TELL
      BACKGROUND COLOR IT GIVE US IN rgb FORM */
    document.body.style.backgroundColor = colorArray[1];
    document.getElementById("colorCode").innerText = colorArray[1];
  });

  //BUTTON 2
  document.getElementById("btn2").style.backgroundColor = colorArray[2];
  document.getElementById("btn2").addEventListener("click", function () {
    document.body.style.backgroundColor = colorArray[2];
    document.getElementById("colorCode").innerText = colorArray[2];
  });

  //BUTTON3
  document.getElementById("btn3").style.backgroundColor = colorArray[3];
  document.getElementById("btn3").addEventListener("click", function () {
    document.body.style.backgroundColor = colorArray[3];
    document.getElementById("colorCode").innerText = colorArray[3];
  });

  //BUTTON 4
  document.getElementById("btn4").style.backgroundColor = colorArray[4];
  document.getElementById("btn4").addEventListener("click", function () {
    document.body.style.backgroundColor = colorArray[4];
    document.getElementById("colorCode").innerText = colorArray[4];
  });

  //BUTTON 5
  document.getElementById("btn5").style.backgroundColor = colorArray[5];
  document.getElementById("btn5").addEventListener("click", function () {
    document.body.style.backgroundColor = colorArray[5];
    document.getElementById("colorCode").innerText = colorArray[5];
  });

  //BUTTON 6
  document.getElementById("btn6").style.backgroundColor = colorArray[6];
  document.getElementById("btn6").addEventListener("click", function () {
    document.body.style.backgroundColor = colorArray[6];
    document.getElementById("colorCode").innerText = colorArray[6];
  });
};
getColor();
document.getElementById("btn").addEventListener("click", getColor);
