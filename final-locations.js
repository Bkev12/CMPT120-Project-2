// locations.js

   function Item (_id , _name , _description, _take, _notTaken) {

		   this.id          = _id;
		   this.name        = _name;
		   this.description = _description;
		   this.taken       = _take;
		   this.taken       = _nottake;

	   	this.toString = function () {
 
		  var retVal = "";
		      retVal = "[locations]"
		               "Id" + this.id + "\n" +
		        		   "Name" + this.name + "\n" +
		         		   "Description" + this.description + "\n" +
		         		   "taken" + this.taken + "\n" +
		         		   "nottaken" + this.notTaken + "\n" 		    
		  return retVal; 
		 }
	 }
   /*function Startinglocation0() {
     var msg="You are back in the center of the jungle";
        UpdateText(msg);
   }*/
       
function locationZero() {
updateText(locations[0].description);
btn_north.disabled = false
btn_south.disabled = false
btn_east.disabled = false
btn_west.disabled = false
score = score + 5;
}

function quicksandpath() {
updateText(locations[1].description);
btn_north.disabled = true
btn_south.disabled = false
btn_east.disabled = true
btn_west.disabled = true
if (currentLocation===1) {
updateText ("A rope, a box of nails, matches and an old rusty hammer can be found here.");
takeRope();
takeNails();
takeMatches();
takeHammer();
score = score + 5;
}
}

function largerockpath() {
updateText(locations [2] .description);
document.getElementById("btn_north").disabled = true
document.getElementById("btn_south").disabled = true
document.getElementById("btn_east").disabled = false
document.getElementById("btn_west").disabled = true
if (currentLocation===2) {
updateText ("A javelin stick can be found here");
playerhasJavelinStick=true;
score = score + 5;
}
}
function brokenbridgepath() {
updateText(locations [3] .description);
document.getElementById("btn_north").disabled = false
document.getElementById("btn_south").disabled = false
document.getElementById("btn_east").disabled = true
document.getElementById("btn_west").disabled = true
score = score + 5;
}

function giantholepath() {
updateText(locations [4] .description);
document.getElementById("btn_north").disabled = true
document.getElementById("btn_south").disabled = true
document.getElementById("btn_east").disabled = true
document.getElementById("btn_west").disabled = false
if (currentLocation===4) {
updateText ("A plank and a torch can be found here.");
takePlanks();
takeTorch();
score = score + 5;
}
}
function hutpath() {
updateText(locations[5] .description);
document.getElementById("btn_north").disabled = false
document.getElementById("btn_south").disabled = false
document.getElementById("btn_east").disabled = false
document.getElementById("btn_west").disabled = false
if (currentLocation===5) {
updateText ("A dynamite can be found here.");
takeDynamite();
takeHammer();
score = score + 5;
}
}
function caveentrance() {
updateText(locations [6] .description);
document.getElementById("btn_north").disabled = true
document.getElementById("btn_south").disabled = false
document.getElementById("btn_east").disabled = false
document.getElementById("btn_west").disabled = true
score = score + 5;
}


function cavepath() {
updateText(locations [7] .description);
document.getElementById("btn_north").disabled = true
document.getElementById("btn_south").disabled = false
document.getElementById("btn_east").disabled = true
document.getElementById("btn_west").disabled = false
score = score + 5;
}


function heartofthecave() {
updateText(locations [8] .description);
document.getElementById("btn_north").disabled = false
document.getElementById("btn_south").disabled = true
document.getElementById("btn_east").disabled = false
document.getElementById("btn_west").disabled = true
if (currentLocation===8) {
updateText ("A hatchet can be found here.");
takeHatchet();
score = score + 5;
}
}
function junglepath() {
updateText(locations [9] .description);
document.getElementById("btn_north").disabled = false
document.getElementById("btn_south").disabled = true
document.getElementById("btn_east").disabled = false
document.getElementById("btn_west").disabled = false
score = score + 5;
}

function riverpath() {
updateText(locations [10] .description);
document.getElementById("btn_north").disabled = false
document.getElementById("btn_south").disabled = true
document.getElementById("btn_east").disabled = true
document.getElementById("btn_west").disabled = false
score = score + 5;
}
		