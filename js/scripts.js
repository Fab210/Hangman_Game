var wordToFind = "";
var wordObject;
var tryToFindLetter = 10;

generateWordTofind();
generateButtonsABC();


function generateWordTofind() {

  document.getElementById("numbersOfTry").innerHTML = 'Guesses Remaining :' + tryToFindLetter;

  document.addEventListener(
    "DOMContentLoaded",
    function () {
      fetch('https://random-words-api.vercel.app/word')
        .then(response => response.json())
        .then(data => renderLetters(data))

      function renderLetters(data) {
        wordToFind = data[0].word
        wordToFind = wordToFind.toUpperCase();
        var wordInarray = wordToFind.split("");

        for (let i = 0; i < wordInarray.length; i++) {
          const element = wordInarray[i];

          var generateLetters = document.createElement("div");

          //generateLetters.id = "letter " + element;
          generateLetters.innerText = element;
          generateLetters.className = "letter_" + element + ' ' + 'hideLetter' + ' ' + 'noselect';
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
    }
  );
}

function searchLetterInWord(letter) {

  var searchLetter = wordToFind.includes(letter);
  if (searchLetter == true) {
    
    alert("you find a letter !");
    document.getElementById("letter " + letter).disabled = true;
    document.getElementById("letter " + letter).style.backgroundColor = "#FC7474";
    var x = document.getElementsByClassName("letter_" + letter);
    for (i = 0; i < x.length; i++) {
      x[i].style.color = "#000";
    }
  } else {
    alert("no such letter found");
    
    tryToFindLetter--;
    switch (tryToFindLetter) {
      case 0:
        alert("game over !");
        document.getElementById("letter " + letter).disabled = true;
        document.getElementById("numbersOfTry").innerHTML = 'Guesses Remaining :' + 0
        var x = document.getElementsByClassName("hideLetter");
        for (i = 0; i < x.length; i++) {
          x[i].style.color = "#000";
        }
        document.getElementById("legR").style.visibility = "visible";
        break;
      
      case 1:
        document.getElementById("legL").style.visibility = "visible";
        break;
      case 2:
        document.getElementById("armR").style.visibility = "visible";
        break;
      case 3:
        document.getElementById("armL").style.visibility = "visible";
        break;
      case 4:
        document.getElementById("bodyLine").style.visibility = "visible";
        break;
      case 5:
        document.getElementById("head").style.visibility = "visible";
        break;
      case 6:
        document.getElementById("line_4").style.visibility = "visible";
        break;
        case 7:
        document.getElementById("line_3").style.visibility = "visible";
        break;
        case 8:
        document.getElementById("line_2").style.visibility = "visible";
        break;
        case 9:
        document.getElementById("line_1").style.visibility = "visible";
        break;

    }

    document.getElementById("numbersOfTry").innerHTML = 'Guesses Remaining :' + tryToFindLetter;
    document.getElementById("letter " + letter).disabled = true;
    document.getElementById("letter " + letter).style.backgroundColor = "#FC7474";
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