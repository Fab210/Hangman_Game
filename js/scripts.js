var wordToFind = "";
var tryToFindLetter = 0;
generateWordTofind();
//searchLetterInWord();
generateButtonsABC();

function generateWordTofind() {
  
  this.wordToFind = "lolsdfssrtztsd SSsdfsdf22sdsdfsdfsdfdsfsdfsd";
  debugger
  this.wordToFind = this.wordToFind.toUpperCase();
  var wordInarray = wordToFind.split("");

  for (let i = 0; i < wordInarray.length; i++) {
    const element = wordInarray[i];

    document.addEventListener(
      "DOMContentLoaded",
      function () {
        var generateLetters = document.createElement("span");
        

        //generateLetters.id = "letter " + element;
        generateLetters.innerText = element;
        generateLetters.className = "letter_"+ element + ' ' +'hideLetter';
        generateLetters.style.visibility = "hidden";
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

  if (tryToFindLetter < 5) {
    var searchLetter = wordToFind.includes(letter);
    if (searchLetter == true) {
        debugger
      alert("you find a letter !");
      var x = document.getElementsByClassName("letter_"+ letter);
      for (i = 0; i < x.length; i++) {
        x[i].style.visibility = "visible";
      }
     
    } else {
      alert("no such letter found");
      tryToFindLetter++;
    }
  } else {
    alert("game over !");
  }

  /*for (let i = 0; i < wordInarray.length; i++) {
    debugger;
    const element = wordInarray[i];
    if (element === letter && tryToFindLetter < 5) {
      alert("you find a letter!");
    }
    
    else {
      alert("no such letter found");
      tryToFindLetter++;
    }
    if (tryToFindLetter == 5) {
      alert("game over !");
      return;
    }
  }*/
  //console.log(wordInarray);
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
        button.className = "btn";

        button.onclick = function () {
          // ...
          searchLetterInWord(button.value);
        };

        var container = document.getElementById("container");
        container.appendChild(button);
      },
      false
    );
   
  }
}
