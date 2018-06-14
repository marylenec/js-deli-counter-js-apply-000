// Build a function that a new customer will use when entering the deli. The function, takeANumber, should accept the current line of people, katzDeliLine, along with the new person's name as parameters. The function should return their position in line. And don't go being too programmer-y and give them their index. These are normal people. If they are 7th in line, tell them that. Don't get their hopes up by telling them they are number 6 in line.

// Build a function nowServing. This function should return the first person in line and then remove that individual from the line. If there is nobody in line, it should return "There is nobody waiting to be served!"

// Build a function currentLine that returns the current line. For example, if katzDeliLine is currently ["Ada", "Grace"], currentLine(katzDeliLine) would return "The line is currently: 1. Ada, 2. Grace". If there is nobody in line, it should return "The line is currently empty."

var katzDeli = [];
var otherDeli = ["Steven", "Blake", "Avi"];
var deliLine; 
var inLine;



// function to take a number - 
// pass arugments: current line of people, name of new customer
// log position in line using index + 1 position
function takeANumber (lineStatus, newCustomer) {
  //assign parameter lineStatus to variable for global scope
  katzDeli = lineStatus;  
  // console.log(katzDeli);

  // add new customer to array
  katzDeli.push(newCustomer);
  // console.log(katzDeli);

  // loop through each element in the array
  for (var i = 0; i < katzDeli.length; i++) {
  // console.log(i+1 + " " + katzDeli[i]);
}
  // log the new customer's position in line, where i is position
  console.log("Welcome, " + newCustomer + ". You are number " + i + " in line.");
}

// call the function and arguments
takeANumber(katzDeli, "Ada");
// takeANumber(otherDeli, "Grace");

// takeANumber(katzDeli, 'Ada');
// takeANumber(katzDeli, 'Grace');
// takeANumber(katzDeli, 'Kent');


// function nowServing
function nowServing (lineStatus) {
  deliLine = lineStatus;
  // console.log(deliLine);
  // if less than 1 in line do this
  if (deliLine.length < 1) {
      inLine = false;
      console.log("There is nobody waiting to be served!");
      // console.log(deliLine);
    // if more than 1 in line do this    
    } else {
      inLine = true;
      // log who is being served
      console.log("Currently serving " + deliLine[0] + ".");
      // remove name being served using first index position and remove one element
      deliLine.splice(0, 1);
      // loop through each element in the array
      for (var i = 0; i < deliLine.length; i++) {
        // console.log(i+1 + " " + deliLine[i]);
        }  
      // console.log(deliLine);
    }
}

nowServing(otherDeli);
// console.log(inLine);

//function current in line
//returns the current line using index position + name
//if not, return line is empty
function currentLine (line) {
    if (inLine === true) {
    var msg = "";
    for (var i = 0; i < deliLine.length; i++) {
    msg += i+1 + "." + deliLine[i] + " ";
      }    
      console.log("The line is currently: " + msg);
  } else if (inLine === false) {
    console.log("The line is currently empty.");   
}

}
currentLine(deliLine);