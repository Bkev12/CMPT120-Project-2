//inventory.js
var inventory = [9];
   function Item (_id , _name , _description, _take, _notTaken) {

		   this.id          = _id;
		   this.name        = _name;
		   this.description = _description;
		   this.taken       = _take;

	   	this.toString = function () {
 
		  var retVal = "";
		      retVal = "[Item]"
		               "Id" + this.id
		        		   "Name" + this.name
		         		   "Description" + this.description
		         		   "taken" + this.taken		   
		  return retVal;
		 }
	 }
	 
function createItem() {
item[0] = new Item (0,"Rope", "10 foot", "Rope taken.");
item[1] = new Item (1,"Hammer", "Rusty", "Hammer taken.");
item[2] = new Item (2,"Nails", "A box", "Nails taken.");
item[3] = new Item (3,"Matches", "A book", "Matches taken.");
item[4] = new Item (4,"Javelin", "A javelin", "Javelin taken.");
item[5] = new Item (5,"Planks", "Intact", "Planks taken.");
item[6] = new Item (6,"Torch", "Old torch", "Torch taken.");
item[7] = new Item (7,"Dynamite", "4 sticks and a blasting cap", "Dynamite taken.");
item[8] = new Item (8,"Hatchet" , "small axe", "Hatchet taken.");
}

 function displayInventory() {
    updateText(inventory);
 }
   

function takeRope() {
if (currentLocation === 1) {
inventory.push("Rope");
playerhassRope = true;
updateText(item[0].name);
}
else if(currentLocation === 1 ) {
updateText(item[0].taken);
}
}
function takeHammer(){
if (currentLocation === 1) {
inventory.push("Hammer");
playerhasHammer = true;
updateText(item[1].name);

}
else if(currentLocation === 1 ) {
updateText(item[1].taken);
}
}
function takeNails(){
if (currentLocation === 1 ) {
inventory.push("Nails");
playerhasNails = true;
updateText(item[2].name);

}
else if(currentLocation === 1) {
updateText(item[2].taken);
}
}
function takeMatches(){
if (currentLocation === 1 ) {
inventory.push("Matches");
playerhasMatches = true;
updateText(item[3].name);
}
else if(currentLocation === 1 ) {
updateText(item[3].taken);
}
}
function takeJavelin(){
if (currentLocation === 2 ) {
inventory.push("Javelin");
playerhasJavelin = true;
updateText(item[4].name);
}
else if(currentLocation === 2) {
updateText(item[4].taken);
}
}
function takePlanks(){
if (currentLocation === 4 ) {
inventory.push("Planks");
playerhasPlanks = true;
updateText(item[5].name);
}
else if(currentLocation === 4) {
updateText(item[5].taken);
}
}
function takeTorch(){
if (currentLocation === 4 ) {
inventory.push("Tourch");
playerhasTourch = true;
updateText(item[6].name);
}
else if(currentLocation === 4 ) {
updateText(item[6].taken);
}
}
function takeDynamite(){
if (currentLocation === 5 ) {
inventory.push("Dynamite");
playerhasDynamite = true;
updateText(item[7].name);
}
else if(currentLocation === 5 ) {
updateText(item[7].taken);
}
}
function takeHatchet(){
if (currentLocation === 8 ) {
inventory.push("Hatchet");
playerhasHatchet = true;
updateText(item[8].name);
}
else if(currentLocation === 8) {
updateText(item[8].taken);
}
}