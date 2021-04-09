var wordToFind = "";
var tryToFindLetter = 5;
generateWordTofind();
//searchLetterInWord();
generateButtonsABC();

function generateWordTofind() {
    document.getElementById("numbersOfTry").innerHTML = tryToFindLetter;
  this.wordToFind = "lolsdfssrtzdfsdfsdfs sd";
  debugger
  this.wordToFind = this.wordToFind.toUpperCase();
  var wordInarray = wordToFind.split("");

  for (let i = 0; i < wordInarray.length; i++) {
    const element = wordInarray[i];

    document.addEventListener(
      "DOMContentLoaded",
      function () {
        var generateLetters = document.createElement("div");
        

        //generateLetters.id = "letter " + element;
        generateLetters.innerText = element;
        generateLetters.className = "letter_"+ element + ' ' +'hideLetter';
        generateLetters.style.borderBottomStyle = "solid";
        generateLetters.style.borderBottomWidth = "1px";
        generateLetters.style.borderBottomColor = "#000";
        generateLetters.style.color = "#fff";
        generateLetters.style.marginLeft = "5px";
        generateLetters.style.paddingLeft = "5px";
        generateLetters.style.width= "20px";
        
        generateLetters.style.paddingRight = "5px";
        var wordToFindDiv = document.getElementById("wordToFind");
        wordToFindDiv.appendChild(generateLetters);
      },
      false
    );
  }
}

function searchLetterInWord(letter) {
  //letter = "i";
  //var wordInarray = this.wordToFind.split("");
  debugger;

  if (tryToFindLetter != 1) {
    var searchLetter = wordToFind.includes(letter);
    if (searchLetter == true) {
        debugger
      alert("you find a letter !");
      var x = document.getElementsByClassName("letter_"+ letter);
      for (i = 0; i < x.length; i++) {
        x[i].style.color = "#000";
      }
     
    } else {
      alert("no such letter found");
      debugger
      tryToFindLetter--;
      document.getElementById("numbersOfTry").innerHTML = tryToFindLetter;
     

      
    }
  } else {
    alert("game over !");
    
      document.getElementById("numbersOfTry").innerHTML = 0
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
          // ...
          searchLetterInWord(button.value);
        };

        var container = document.getElementById("buttonsContainer");
        container.appendChild(button);
      },
      false
    );
   
  }
}
