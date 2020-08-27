$(document).ready(function(){
  $('.modal').modal();
  $('.dropdown-trigger').dropdown();
});


function calculateTip() {
  const billAmt = document.getElementById("billamt").value;
  const serviceQual = document.getElementById("serviceQual").value;
  const numOfPeople = document.getElementById("peopleamt").value;

  //validate input
  if (billAmt === "" || serviceQual == 0) {
    alert("Please enter values");
    return;
  }
  //Check to see if this input is empty or less than or equal to 1
  if (numOfPeople === "" || numOfPeople <= 1) {
    numOfPeople = 1;
    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "block";
  }

  //Calculate tip
  let total = (billAmt * serviceQual);
  //round to two decimal places
  total = Math.round(total * 100);
  //next line allows us to always have two digits after decimal point
  total = total.toFixed(2);
  //Display the tip
  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").innerHTML = total;
}

//Hide the tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

//click to call function
document.getElementById("calculate").onclick = function() {
  calculateTip();
};


//Tips array 
let tips = [];

// Save Tip Button
const saveTip = (ev) => {
    ev.preventDefault();
    let tip = {
      id: Date.now(),
      tipAmount: document.getElementById("tip").value,
    };
    tips.push(tip);
     //Reset
    document.forms[0].reset(); 

    console.log("TIP HAS BEEN SAVED!");
  };
  document.getElementById("save").addEventListener("click", saveTip);
};


