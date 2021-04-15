var wordToFind = "";
var wordObject;
var tryToFindLetter = 5;
generateWordTofind();
//searchLetterInWord();
//getwordFromApi();
generateButtonsABC();

/*async function getwordFromApi() {
  let apiResponse = await fetch('https://random-words-api.vercel.app/word')

  let wordFromApi = await apiResponse.json();
  debugger
  wordToFind = await wordFromApi[0].word
  generateWordTofind()
}*/

function generateWordTofind() {
  document.getElementById("numbersOfTry").innerHTML = tryToFindLetter;
  debugger
  //let result = await getwordFromApi();





  //let wordFromApi = await apiResponse.json();

  //this.wordToFind = await wordFromApi[0].word

  //wordToFind = data[0].word
  debugger
  wordToFind = wordToFind.toUpperCase();
  var wordInarray = wordToFind.split("");



  document.addEventListener(
    "DOMContentLoaded",
    function () {
      fetch('https://random-words-api.vercel.app/word')
        .then(response => response.json())
        .then(data => renderQuotes(data))


      function renderQuotes(data) {
        debugger
        wordToFind = data[0].word
        wordToFind = wordToFind.toUpperCase();
        var wordInarray = wordToFind.split("");
        
        for (let i = 0; i < wordInarray.length; i++) {
          const element = wordInarray[i];

          var generateLetters = document.createElement("div");


          //generateLetters.id = "letter " + element;
          generateLetters.innerText = element;
          generateLetters.className = "letter_" + element + ' ' + 'hideLetter';
          generateLetters.style.borderBottomStyle = "solid";
          generateLetters.style.borderBottomWidth = "1px";
          generateLetters.style.borderBottomColor = "#000";
          generateLetters.style.color = "#fff";
          generateLetters.style.marginLeft = "5px";
          generateLetters.style.paddingLeft = "5px";
          generateLetters.style.width = "20px";

          generateLetters.style.paddingRight = "5px";
          var wordToFindDiv = document.getElementById("wordToFind");
          wordToFindDiv.appendChild(generateLetters);
        }
      }
    }




  );




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
      var x = document.getElementsByClassName("letter_" + letter);
      for (i = 0; i < x.length; i++) {
        x[i].style.color = "#000";
      }

    } else {
      alert("no such letter found");
      debugger
      tryToFindLetter--;
      document.getElementById("numbersOfTry").innerHTML = tryToFindLetter;
      document.getElementById("letter " + letter).disabled = true;




    }
  } else {
    alert("game over !");
    document.getElementById("letter " + letter).disabled = true;
    document.getElementById("numbersOfTry").innerHTML = 0
    var x = document.getElementsByClassName("hideLetter");
    for (i = 0; i < x.length; i++) {
      x[i].style.color = "#000";
    }

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