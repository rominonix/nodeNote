
// Modules
var prompt = require('prompt');
var Promise = require("bluebird");

// Variables
var A = "\n               AAA               \n              A:::A              \n             A:::::A             \n            A:::::::A            \n           A:::::::::A           \n          A:::::A:::::A          \n         A:::::A A:::::A         \n        A:::::A   A:::::A        \n       A:::::A     A:::::A       \n      A:::::AAAAAAAAA:::::A      \n     A:::::::::::::::::::::A     \n    A:::::AAAAAAAAAAAAA:::::A    \n   A:::::A             A:::::A   \n  A:::::A               A:::::A  \n A:::::A                 A:::::A \nAAAAAAA                   AAAAAAA";
var B = "\nBBBBBBBBBBBBBBBBB   \nB::::::::::::::::B  \nB::::::BBBBBB:::::B \nBB:::::B     B:::::B\n  B::::B     B:::::B\n  B::::B     B:::::B\n  B::::BBBBBB:::::B \n  B:::::::::::::BB  \n  B::::BBBBBB:::::B \n  B::::B     B:::::B\n  B::::B     B:::::B\n  B::::B     B:::::B\nBB:::::BBBBBB::::::B\nB:::::::::::::::::B \nB::::::::::::::::B  \nBBBBBBBBBBBBBBBBB   "
var C = "\n        CCCCCCCCCCCCC\n     CCC::::::::::::C\n   CC:::::::::::::::C\n  C:::::CCCCCCCC::::C\n C:::::C       CCCCCC\nC:::::C              \nC:::::C              \nC:::::C              \nC:::::C              \nC:::::C              \nC:::::C              \n C:::::C       CCCCCC\n  C:::::CCCCCCCC::::C\n   CC:::::::::::::::C\n     CCC::::::::::::C\n        CCCCCCCCCCCCC"
var D = "\nDDDDDDDDDDDDD        \nD::::::::::::DDD     \nD:::::::::::::::DD   \nDDD:::::DDDDD:::::D  \n  D:::::D    D:::::D \n  D:::::D     D:::::D\n  D:::::D     D:::::D\n  D:::::D     D:::::D\n  D:::::D     D:::::D\n  D:::::D     D:::::D\n  D:::::D     D:::::D\n  D:::::D    D:::::D \nDDD:::::DDDDD:::::D  \nD:::::::::::::::DD   \nD::::::::::::DDD     \nDDDDDDDDDDDDD        "
var E = "\nEEEEEEEEEEEEEEEEEEEEEE\nE::::::::::::::::::::E\nE::::::::::::::::::::E\nEE::::::EEEEEEEEE::::E\n  E:::::E       EEEEEE\n  E:::::E             \n  E::::::EEEEEEEEEE   \n  E:::::::::::::::E   \n  E:::::::::::::::E   \n  E::::::EEEEEEEEEE   \n  E:::::E             \n  E:::::E       EEEEEE\nEE::::::EEEEEEEE:::::E\nE::::::::::::::::::::E\nE::::::::::::::::::::E\nEEEEEEEEEEEEEEEEEEEEEE"
var F = "\nFFFFFFFFFFFFFFFFFFFFFF\nF::::::::::::::::::::F\nF::::::::::::::::::::F\nFF::::::FFFFFFFFF::::F\n  F:::::F       FFFFFF\n  F:::::F             \n  F::::::FFFFFFFFFF   \n  F:::::::::::::::F   \n  F:::::::::::::::F   \n  F::::::FFFFFFFFFF   \n  F:::::F             \n  F:::::F             \nFF:::::::FF           \nF::::::::FF           \nF::::::::FF           \nFFFFFFFFFFF           ";
var G = "\n        GGGGGGGGGGGGG\n     GGG::::::::::::G\n   GG:::::::::::::::G\n  G:::::GGGGGGGG::::G\n G:::::G       GGGGGG\nG:::::G              \nG:::::G              \nG:::::G    GGGGGGGGGG\nG:::::G    G::::::::G\nG:::::G    GGGGG::::G\nG:::::G        G::::G\n G:::::G       G::::G\n  G:::::GGGGGGGG::::G\n   GG:::::::::::::::G\n     GGG::::::GGG:::G\n        GGGGGG   GGGG";
var notes = [A, B, C, D, E, F, G];
var iterarationer = 0;



var howManyIterations = process.argv[3] || 10;
var mode = process.argv[2];
var level = {
  speed: 0,
  name: "",
};


switch (mode) {
  case "easy":
    level.speed = 5000;
    level.name = "Easy";
    break;
  case "medium":
    level.speed = 3000;
    level.name = "Medium";
    break;
  case "hard":
    level.speed = 2000;
    level.name = "Hard";
    break;
  case "pro":
    level.speed = 1000;
    level.name = "Pro";
    break;
  case "insane":
    level.speed = 500;
    level.name = "Infuckingsane";
    break;
  default:
  level.speed = 3000;
  level.name = "Medium";
  break;
}

function welcome(){
  console.log("Welcome to the Note-game.\nYou have choosen level: " + level.name.toUpperCase() + "\nWe are staring in just a few seconds. Get your instrument ready!\n\n\n")

var notIntervall = setInterval(function(){
      var randomNumber = Math.round(Math.random() * 6);
      iterarationer++;
      if (iterarationer == howManyIterations){
        clearInterval(notIntervall);
      }
      console.log("#############\nIteration: ",iterarationer, "\n#############\n");
      console.log(notes[randomNumber], "\n\n\n\n");
   }, level.speed);

}

welcome();
