//inventory.js

    function Item (_id , _name , _description, _take) {

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
		   return retVal;
		  }
		}

var Rope = new Item (0,"Rope" , "10 foot", false);
var Hammer = new Item (0,"Hammer" , "Rusty", false);
var Nails = new Item (0,"Nails" , "A box", false);
var Matches = new Item (0,"Matches" , "A book", false);
var Javelin = new Item (0,"Javelin" , "A javelin", false);
var Planks = new Item (0,"Planks" , "Intact", false);
var Torch = new Item (0,"Torch" , "Old torch", false);
var Dynamite = new Item (0,"Dynamite" , "4 sticks and a blasting cap", false);
var Hatchet = new Item (0,"Hatchet" , "small axe", false);
var moveCount = 0;

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




