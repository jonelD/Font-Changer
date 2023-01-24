//Function Start
function changeFont() {
  const inputText = document.getElementById("input").value; 
  
  // Split input text into words
  let words = inputText.split(" ");
  
  // Creating a variable for the output text
  let outputText = "";
  
  // Looping through each word
  for (let i = 0; i < words.length; i++) {

  // Adding font-family names in to the array
    let fonts = ["Pacifico", "Shadows Into Light", "Teko", "Orbitron"];

  //Adding Math.random for the random fonts
    let randomFont = fonts[Math.floor(Math.random() * fonts.length)];
    outputText += "<span style='font-family:" + randomFont + ";'>" + words[i] + "</span> ";
  }
  document.getElementById("output").innerHTML = outputText;
}
//Function End