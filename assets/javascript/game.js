$(document).ready(function(){
    
    var computerNumber;
    var crystal01;
    var crystal02;
    var crystal03;
    var crystal04;
    
    var crystalGuess = 100;
    var crystalgroup;
    var wins = 0 ;
    var losses = 0;
    var counter = 0;
    


// function gamereset () {

//   var computerNumber = 0;
//     var crystal01;
//     var crystal02;
//     var crystal03;
//     var crystal04;
    
//     var crystalGuess = 100;
//     var crystalgroup;
//     var wins = 0 ;
//     var losses = 0;
//     var counter = 0;

//     return crystal01 * crystal02 * crystal03 * crystal04 * counter * computerNumber * wins * losses;
  
// }
    // Computer random number generated

  
    var computerNumber = Math.floor(Math.random() * 100) + 1;
    
    
    console.log(computerNumber);

    $("#computerNumber").append(computerNumber);
    
    // Random Crystal Values
    
    crystal01 = Math.floor(Math.random() * 20) + 1;
    console.log(crystal01);
    
    crystal02 = Math.floor(Math.random() * 20) + 1;
    console.log(crystal02);
    
    crystal03 = Math.floor(Math.random() * 20) + 1;
    console.log(crystal03);
    
    crystal04 = Math.floor(Math.random() * 20) + 1;
    console.log(crystal04);

    var crystalgroup = []; // this is where all of the button clicks go or cystal values

    crystalgroup.push( crystal01,crystal02,crystal03,crystal04);

    for (var i = 0; i < crystalgroup.length; i++) {
        var imageCrystal = $("<img>");
        imageCrystal.addClass("crystal-image");
        imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");
        imageCrystal.attr("data-crystalvalue", crystalgroup[i]);
        $("#crystals").append(imageCrystal);
    }
    

    $(".crystal-image").on("click", function() {
        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);
        counter += crystalValue;
        // alert("New score: " + counter);
        $("#score").text(counter);

    if (counter === computerNumber) {
      alert("You win!");
      wins++;
      $("#wins").text(wins);
      console.log(wins);
      // gamereset(computerNumber,counter);
    // Game reset
    // counter = 0;
    // computerNumber = 0;

    //   $("#computernumber").empty();
    }

    else if (counter >= computerNumber) {
      alert("You lose!!");
      losses++;
      $("#losses").text(losses);
    //   $("#computernumber").empty();
      console.log(losses);
      // gamereset(computerNumber,counter);
      // counter = 0;
      // computerNumber = 0;
    }

    }
)



});