//inventory.js

var playerhasRope = true;
var playerhasHammer = true;
var playerhasNails = true;
var playerhasMatches = true;
var playerhasJavelinStick = true;
var playerhasPlanks = true;
var playerhasTorch = true;
var playerhasDynamite = true;
var playerhasHatchet = true;
var moveCount = 0;

function init() {
   // Call the starting location.
   location0();
}

function displayInventory() {
   var msg = "Inventory: ";
   if (playerhasRope) {
       msg = msg + "Rope, ";
   }
   if (playerhasHammer && playerhasPlanks && playerhasNails && playerhasMatches) {
      msg = msg + "Hammer, Planks, nails, Matches, ";
   }
   if (playerhasJavelinStick) {
      msg = msg + "JavelinStick, ";
   }
   if (playerhasPlanks) {
      msg = msg + "Planks, ";
   }
   if (playerhasTorch) {
      msg = msg + "Torch, ";
   }
   if (playerhasDynamite) {
      msg = msg + "Dynamite, ";
   }
   if (playerhasHatchet) {
      msg = msg + "Hatchet, ";
   }
   UpdateText(msg);
}