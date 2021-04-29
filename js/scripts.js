var wordToFind = "";
var wordDefinition = "";
var wordObject;
var tryToFindLetter = 10;
var allLettersFound = 0;

generateWordTofind();
generateButtonsABC();

function generateWordTofind() {
  document.getElementById("numbersOfTry").innerHTML =
    "Guesses Remaining :" + tryToFindLetter;

  document.addEventListener("DOMContentLoaded", function () {
    fetch("https://random-words-api.vercel.app/word")
      .then((response) => response.json())
      .then((data) => renderLetters(data));

    function renderLetters(data) {
      wordToFind = data[0].word;
      wordToFind = wordToFind.toUpperCase();
      wordDefinition = data[0].definition;
      var wordInarray = wordToFind.split("");

      for (let i = 0; i < wordInarray.length; i++) {
        const element = wordInarray[i];

        var generateLetters = document.createElement("div");
        generateLetters.innerText = element;
        generateLetters.className =
          "letter_" + element + " " + "hideLetter" + " " + "noselect";
        generateLetters.style.borderBottomStyle = "solid";
        generateLetters.style.borderBottomWidth = "1px";
        generateLetters.style.borderBottomColor = "#000";
        generateLetters.style.color = "#F2F3FB";
        generateLetters.style.marginLeft = "6px";
        generateLetters.style.width = "40px";
        generateLetters.style.textAlign = "center";
        var wordToFindDiv = document.getElementById("wordToFind");
        wordToFindDiv.appendChild(generateLetters);
      }
    }
  });
}

function searchLetterInWord(letter) {
  var searchLetter = wordToFind.includes(letter);
  var wordLength = wordToFind.length;
  var animatedClasse = "animate__animated";
  var specialAnimation = "animate__slideInDown";
  if (searchLetter == true) {
    //alert("you find a letter !");
    document.getElementById("letter " + letter).disabled = true;
    document.getElementById("letter " + letter).style.backgroundColor =
      "#FC7474";
    var x = document.getElementsByClassName("letter_" + letter);
    for (i = 0; i < x.length; i++) {
      x[i].style.color = "#000";
    }
    allLettersFound = x.length + allLettersFound;
    if (wordLength === allLettersFound) {
      disableAllButtons();
      help();
      document.getElementById("numbersOfTry").classList.add(animatedClasse, specialAnimation);
      document.getElementById("numbersOfTry").innerHTML ="YOU WIN !!!";
     
      
    }
  } else {
    tryToFindLetter--;
    document.getElementById("numbersOfTry").innerHTML =
      "Guesses Remaining :  " + tryToFindLetter;
    switch (tryToFindLetter) {
      case 0:
        document.getElementById("letter " + letter).disabled = true;
        
        disableAllButtons();
        help();
        var x = document.getElementsByClassName("hideLetter");
        for (i = 0; i < x.length; i++) {
          x[i].style.color = "#000";
        }
        var legR = document.getElementById("legR");
        legR.style.visibility = "visible";
        legR.classList.add(animatedClasse, specialAnimation);
        debugger
        document.getElementById("numbersOfTry").classList.add(animatedClasse, "animate__bounce");
        document.getElementById("numbersOfTry").innerHTML ="GAME OVER !!!";
        
        break;

      case 1:
        var legL = document.getElementById("legL");
        legL.style.visibility = "visible";
        legL.classList.add(animatedClasse, specialAnimation);
        break;
      case 2:
        var armR = document.getElementById("armR");
        armR.style.visibility = "visible";
        armR.classList.add(animatedClasse, specialAnimation);
        break;
      case 3:
        var armL = document.getElementById("armL");
        armL.style.visibility = "visible";
        armL.classList.add(animatedClasse, specialAnimation);
        break;
      case 4:
        var bodyLine = document.getElementById("bodyLine");
        bodyLine.style.visibility = "visible";
        bodyLine.classList.add(animatedClasse, specialAnimation);
        break;
      case 5:
        var head = document.getElementById("head");
        head.style.visibility = "visible";
        head.classList.add(animatedClasse, specialAnimation);
        break;
      case 6:
        var line_4 = document.getElementById("line_4");
        line_4.style.visibility = "visible";
        line_4.classList.add(animatedClasse, specialAnimation);
        break;
      case 7:
        var line_3 = document.getElementById("line_3");
        line_3.style.visibility = "visible";
        line_3.classList.add(animatedClasse, specialAnimation);
        break;
      case 8:
        var line_2 = document.getElementById("line_2");
        line_2.style.visibility = "visible";
        line_2.classList.add(animatedClasse, specialAnimation);
        break;
      case 9:
        var line_1 = document.getElementById("line_1");
        line_1.style.visibility = "visible";
        line_1.classList.add(animatedClasse, specialAnimation);
        break;
    }

    
    document.getElementById("letter " + letter).disabled = true;
    document.getElementById("letter " + letter).style.backgroundColor =
      "#FC7474";
  }
}

function disableAllButtons() {
  var y = document.getElementsByClassName("generatedButtons");
  for (i = 0; i < y.length; i++) {
    y[i].disabled = true;
    y[i].style.backgroundColor = "#FC7474";
  }
}

function generateButtonsABC() {
  var alphabet = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z";

  var alphabetInarray = alphabet.split(" ");

  for (let i = 0; i < alphabetInarray.length; i++) {
    const element = alphabetInarray[i];
    document.addEventListener(
      "DOMContentLoaded",
      function () {
        var button = document.createElement("input");
        button.type = "button";
        button.id = "letter " + element;
        button.value = element;
        button.className = "generatedButtons" + " btn btn-primary";

        button.onclick = function () {
          searchLetterInWord(button.value);
        };

        var container = document.getElementById("buttonsContainer");
        container.appendChild(button);
      },
      false
    );
  }
}

function help() {
  document.querySelector("#ShowButton").innerText = wordDefinition;
}
