// locations.js

       function Startinglocationzero() {
           var msg="You are back in the center of the jungle";
           UpdateText(msg);
        }
       
        //North of your direction
function quicksandpathone() {
           if (quicksandpath1) {
score = score + 5;
North = false;
playerhasRope=true;
playerhasNails=true;
playerhasHammer=true;
playerhasMatches=true;
}
var msg="There's a quick sand in front of you, You search your inventory for something useful, You found a javelin stick. You jump the quick sand with the javelin sick. You discover a chest buried in the sand. Inside it had a rope, a box of nails, Matches and an old rusty hammer.";
UpdateText(msg);
}

//East of your direction
function largerockpathtwo() {
if (largerockpath2) {
score = score + 5
East = false;
playerhasJavelinStick=true;
}
var msg="You notice that there's a large rock blocking your path. You search the rocks, you found a javelin stick";
UpdateText(msg);
        }
     
        //South of your direction
function brokenbridgepaththree() {
if (brokenbridgepath3) {
score = score + 5;
South = false;
  }
  var msg="There's a broken bridge blocking your path. You search your inventory for something useful to help you fix the bridge. It appears that there's a hammer, spare planks and nails in your inventory. Without delay you fix up the bridge. You Proceed by crossing the bridge.";
UpdateText(msg);
        }
    
        //West of your direction
function giantholepathfour() {
if (giantholepath4) {
score = score + 5;
West = false;
playerhasPlanks=true;
playerhasTorch=true;	
}
var msg="What now!!!, it appears that there's a giant hole just sitting there waiting for you, You search your inventory for a rope. You Find one, with the rope you swing across the giant hole on a tree branch. You are at the coastline, you discover a shipwreck. You take some of the intact planks, but also you ntice that there is an old torch lying around. You decide to take it.";
UpdateText(msg);
        }
        
function hutpathfive() {
if (hutpath5) {
score = score + 5;
south = false;
playerhasDynamite=true;
}
var msg="You discover an old hut. Inside the hut you find a crate, and inside that crate you find a dynamite.";
UpdateText(msg);
        }
        
  function caveentrancesix() {
if (cavepath6) {
score = score + 5;
West = false;
}
var msg="You are at the mouth of a cave, The entrance is blocked by a rock. You make a path by Using the dynamite you found to shatter the rock, ";
UpdateText(msg);
        }
               
function cavepathseven() {
if (cavepath7) {
score = score + 5;
east = false;
}
var msg="Your inside the cave. Its dark. With the torch and the box of matches you make light.";
UpdateText(msg);
        }
        
function heartofthecaveeight() {
if (cavepath8) {
score = score + 5;
West = false;
playerhasHatchet=true;	
}
var msg="Moving into the cave your frightened by what you see. Skeletons everywhere. Maybe you shouldn't be here. You make your way out of the cave. On your way out you notice there is a hatchet on the floor, you take it.";
UpdateText(msg);
        }
        
function junglepathnine() {
if (junglepath9) {
score = score + 5;
south = false;
}
var msg="Your once more back in the jungle. Before losing hope you hear your lads calling for you. Unfortunately, they are on the other side of a river. You make a dash for it.";
UpdateText(msg);
        }
        
function riverpathten() {
if (riverpath10) {
score = score + 5;
east = false;
}
var msg="You are at a river bank. Its impossible to cross. With the hatch in your inventory you cut down a tree. You place the tree in the river, slowly and carefully you made your way across. Yesss!!! You are finally reunited with your lads.";
UpdateText(msg);
        } 
        
        
        
		function Loc0() {
		   buttondisabled ();
		   resetbuttons ();
		   updateDisplay (locations[0].description);
		   updateLocation(locations[0].name);
		   Loc0score();
		   northbutton.disabled = true;
		   eastbutton.disabled = true;
		   westbutton.disabled = true;
		}
		function Loc1() {
		   resetbuttons ();
		   updateDisplay (locations[1].description);
		   updateLocation(locations[1].name);
		   Loc1score();
		   northbutton.disabled = true;
		   westbutton.disabled = true;
		}
		function Loc2() {
		   resetbuttons ();
		   updateDisplay (locations[2].description);
		   updateLocation(locations[2].name);
		}
		function Loc3() {
		   resetbuttons ();
	       updateDisplay (locations[3].description);
		   updateLocation(locations[3].name);
		   Loc3score();
		   northbutton.disabled = true;
		   eastbutton.disabled = true;
		   
		   if (Knife.taken === false) {
		      updateDisplay (Knife.description);
			  inventory.push(Knife.name)
		      Knife.taken = true;
		   }
		}
		function Loc4() {
		   resetbuttons ();
	       updateDisplay (locations[4].description);
		   updateLocation(locations[4].name);
		   Loc4score();
		   northbutton.disabled = true;
		   westbutton.disabled = true;
		   southbutton.disabled = true;
		   
		   if (Book.taken === false) {
		      updateDisplay (Book.description);
		      inventory.push(Book.name)
		      Book.taken = true;
		   }
		}
		function Loc5() {
		   resetbuttons ();
	       updateDisplay (locations[5].description);
		   updateLocation(locations[5].name);
		   Loc5score();
		   northbutton.disabled = true;
		}
		function Loc6() {
		   resetbuttons ();
	       updateDisplay (locations[6].description);
		   updateLocation(locations[6].name);
		   Loc6score();
		}
		function Loc7() {
		   resetbuttons ();
           updateDisplay (locations[7].description);
		   updateLocation(locations[7].name);
		   Loc7score();
		}
		function Loc8() {
		   resetbuttons ();
           updateDisplay (locations[8].description);
		   updateLocation(locations[8].name);
		   Loc8score();
		   northbutton.disabled = true;
		   eastbutton.disabled = true;
		   southbutton.disabled = true;
		}
		function Loc9() {
		   resetbuttons ();
           updateDisplay (locations[9].description);
		   updateLocation(locations[9].name);
		   Loc9score();
		   westbutton.disabled = true;
		   southbutton.disabled = true;
		   
		   if (Key.taken === false) {
		      updateDisplay (Key.description);
			  inventory.push(Key.name)
		      Key.taken = true;
		   }
		}
		function Loc10() {
		   resetbuttons ();
           updateDisplay (locations[10].description);
		   updateLocation(locations[10].name);
		   Loc10score();
		}
		function Loc11() {
		   resetbuttons ();
           updateDisplay (locations[11].description);
		   updateLocation(locations[11].name);
		   Loc11score();
		   eastbutton.disabled = true;
		   southbutton.disabled = true;
		   
		   if (Rope.taken === false) {
		      updateDisplay (Rope.description);
			  inventory.push(Rope.name)
		      Rope.taken = true;
		   }
		}
		function Loc12() {
		   resetbuttons ();
	       updateDisplay (locations[12].description);
		   updateLocation(locations[12].name);
		   Loc12score();
		   eastbutton.disabled = true;
		   westbutton.disabled = true;
		   southbutton.disabled = true;
		}        