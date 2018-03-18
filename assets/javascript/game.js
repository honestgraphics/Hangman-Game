
//assign var to starting value
  var currentInstructions = "Press any key to start game.";
  var statsDiv = "";
  var currentWord = "";
  var numberOfGuessesRemainingDiv = "";
  var lettersAlreadyGuessedDiv = ""; //changes so leave empty
  var underscoresDiv = "";
  var hangmanPic = "";
  var targetWord = "";
  var misses = 0;
  var guesses = 0;
  var wins = 0;
  var losses = 0;
  var gameStarted = false;



//assign game div to var
  // var currentWord = document.getElementById("currentWord");
  // var currentInstructionDiv = document.getElementById("currentInstructions");
  // var statsDiv = document.getElementById("stats");
  
  // var numberOfGuessesRemaining = document.getElementById("numberOfGuessesRemaining");
  // var lettersAlreadyGuessedDiv = document.getElementById("lettersAlreadyGuessed");
  // var hangmanDiv = document.getElementById("hangman");
  // var hintDiv = document.getElementById("hint");
  

//create array
  var vocab = ['awkward', 'bagpipes', 'banjo', 'bungler', 'croquet', 'crypt', 'dwarves', 'fervid', 'fishhook', 'fjord', 'gazebo', 'gypsy', 'haiku', 'haphazard', 'hyphen', 'ivory', 'jazzy', 'jiffy', 'jinx', 'jukebox', 'kayak', 'kiosk', 'klutz', 'memento', 'mystify', 'numbskull', 'ostracize', 'oxygen', 'pajama', 'phlegm', 'pixel', 'polka', 'quad', 'banjo', 'quip', 'rhythmic', 'rogue', 'sphinx', 'squawk', 'swivel', 'toady', 'twelfth', 'unzip', 'waxy', 'wildebeest', 'yacht', 'zealous', 'zigzag', 'zippy', 'zombie'];


  // stats.innerHTML = "" + wins + " Wins, " + losses + " Losses";



  //create show current instructions
  ////makes var value show up in div=to value
    function displayInstruction(instruction){
      document.getElementById("currentInstructions").innerHTML = instruction; 
      }
  //writing function for the event listener for on key up
    function handleKeyUp (event) {
    if (!gameStarted) {
      gameStarted=true;
      startGame ();
    }
    else {
      if (event.key<"a" || event.key>"z"){
        return;
      }
    if (guesses.includes(event.key)){
      return
    }
    guesses+=event.key;
    if(!currentWord.includes(event.key)){
      misses++;
    }
    }
    playerTurn ()
  }
  //create playerTurn function
    function playerTurn () {
      //update guesses
      lettersAlreadyGuessedDiv.innerHTML="Letters Already Guessed: " + guesses
      //update underscores
      var output="";
      //loop through every letter of currentWord
      for (let i=0; i<currentWord.length;i++){
        //checked to see if letter has been guessed
        if(guesses.includes(currentWord[i])){
          //then we add that letter to output string
          output+=currentWord[i];
        }
        //if it hasnt been guessed then we add a underscore
        else{
          output+=" _ "
        }
      } 
      underscoresDiv.innerHTML=output;
      //update image with missed guesses
      hangmanPic.src="assets/images/hm"+misses+".png";
      //test for win/lose conditions
      if (misses==6){
        loseGame();
      }
      if (!output.includes("_")){
        winGame()
      }
    }
  //loseGame Function
    function loseGame (){
      underscoresDiv.innerHTML=currentWord;
      displayInstruction("You Lose! Press Any Key To Play Again.")
      gameStarted=false;
      losses++;
      //update stats
      document.getElementById("stats").innerHTML="wins "+wins+", losses "+losses;
    }
  //winGame Function
    function winGame (){
      displayInstruction("You Win! Press Any Key To Play Again.")
      gameStarted=false;
      wins++;
      //update stats
      document.getElementById("stats").innerHTML="wins "+wins+", losses "+losses;
    }
  //start app
    function startApp () {
    //calls the displayInstruction function at start of game to make it display
      displayInstruction(currentInstructions)
    //references function for event listener for on key up
      window.addEventListener("keyup", handleKeyUp)
    //assignning variables to html elements
    hangmanPic=document.getElementById("hangmanPic")
    underscoresDiv=document.getElementById("underscores")
    numberOfGuessesRemainingDiv=document.getElementById("numberOfGuessesRemaining")
    lettersAlreadyGuessedDiv=document.getElementById("lettersAlreadyGuessed")
    wins=0;
    losses=0;
    }


  //start app function
    function startGame() {
    //pick random word
      currentWord = vocab[Math.floor(Math.random() * vocab.length)];
      var count = currentWord.length;
      console.log(currentWord);
      //reset misses
      misses=0;
      //reset guesses
      guesses="";
      //reset instructions
      displayInstruction("Press letters A-Z to take a guess. Duplicate letters will not result in a choice.")
    }
    
    //calls start app function
      startApp()
    
    


    

    //show letter blanks for word

    //show wins and losses
  

    //show picture
