$(document).ready(function(){
    
var computerNumber;
var crystal01;
var crystal02;
var crystal03;
var crystal04;

var crystalSum;
var crystalgroup;
var wins;
var losses;

// Computer random number generated
var computerNumber = Math.floor(Math.random() * 100) + 1;
// var computerNumber = 0;
console.log(computerNumber);

// Random Crystal Values

crystal01 = Math.floor(Math.random() * 20) + 1;;
console.log(crystal01);

crystal02 = Math.floor(Math.random() * 20) + 1;;
console.log(crystal02);

crystal03 = Math.floor(Math.random() * 20) + 1;;
console.log(crystal03);

crystal04 = Math.floor(Math.random() * 20) + 1;;
console.log(crystal04);


var crystalgroup = []; // this is where all of the button clicks go or cystal values
var totalScore = 0;   // total score of user
//console.log(totalScore);

$("#computerNumber").append(computerNumber);


// attaching the random values to buttons when clicked 
$('#crystal01').click(function() {
     //e.preventDefault();
    // e.target = crystal01;
    //debugger
    
        crystalgroup.push(crystal01);
        console.log("cystal1:  "+ crystal01);
        console.log("crystal group " + crystalgroup);
    
   // alert(crystalgroup.length);

}) ;

$('#crystal02').click(function() {
    //e.preventDefault();
   // e.target = crystal01;
   //debugger
   
       crystalgroup.push(crystal02);
       console.log("cystal2: "+ crystal02);
       
       console.log("crystal group " + crystalgroup);
   
         
   //alert(crystalgroup.length);
   
});

   $('#crystal03').click(function() {
    //e.preventDefault();
   // e.target = crystal01;
   //debugger
   
       crystalgroup.push(crystal03);
       console.log("cystal3: "+ crystal03);
       console.log("crystal group " + crystalgroup);
   
   //alert(crystalgroup.length);
   
   });

   $('#crystal04').click(function() {
    //e.preventDefault();
   // e.target = crystal01;
   //debugger
   
       crystalgroup.push(crystal04);
       console.log("cystal4:  "+ crystal04);
       console.log("crystal group " + crystalgroup);
   
       loopy();
     
   });

//  loop to add the items in the array form the result of the 
//  button clicks and get the sum


   function loopy(){
   for (var i = 0; i < crystalgroup.length; i++) {
    totalScore += crystalgroup[i];
    // $("#totalScore").append(totalScore);

    console.log(totalScore);
    console.log("this is what i have so for my array "+ crystalgroup);

    if (totalScore == computerNumber){
        console.log("you win");
        return;
    }
    else if(totalScore > computerNumber) {
        console.log("you loose");
        return;
    }
}

$("#totalScore").append(totalScore);

}




});

