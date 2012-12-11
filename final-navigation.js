// navigation.js
    var nav = [  //   N0   S1  E2  W3
             /* 0 */   [1,  3,  2,  4], 
             /* 1 */   [-1, 0, -1, -1], 
             /* 2 */   [-1, -1, 0, -1],  
             /* 3 */   [0,  5, -1, -1], 
             /* 4 */   [-1,-1, -1,  0], 
             /* 5 */   [3,  9,  7,  6],
             /* 6 */   [-1, 8, 5,  -1], 
             /* 7 */   [-1, 10, -1, 5], 
             /* 8 */   [6, -1, 9,  -1], 
             /* 9 */   [5, -1, 10,  8], 
             /* 10 */  [7, -1, -1,  9] 
     ];

    function displayCurrentLocation() {
       switch (currentLocation) {
          case 0 :         locationZero(); break;
          case 1 :    quicksandpath(); break;
          case 2 :    largerockpath(); break;
          case 3 : brokenbridgepath(); break;
          case 4 :    giantholepath(); break;
          case 5 :          hutpath(); break;
          case 6 :     caveentrance(); break;
          case 7 :         cavepath(); break;
          case 8 :   heartofthecave(); break;
          case 9 :       junglepath(); break;
          case 10 :      riverpath(); break;            
       }
     }         
		 var Locale = function(_id, _name, _description, _item) {
      // Attributes
    
      this.id = _id;
      this.name = _name;
      this. description = _description;
      this.item = _item;
      
      this.toString = function () {
      
		 var retVal = "";
		     retVal = "[Location]"
		              "Id" + this.id
					        "Name" + this.name
					        "Description" + this.description
					        "Item" + this.item
		  return retVal;
		  }
		}
		
	 /*function createlocale() {
	    locations[0]  = new Locale  ("startlocale",    "Player ends up in the jungle",                               "",false);
		  locations[1]  = new Locale  ("quicksand",      "Player arives at quicksandpath", "Rope, Nails, Hammer, Matches",false);
	    locations[2]  = new Locale  ("largerock",      "Player arives at largerockpath",                 "JavelinStick",false);
	    locations[3]  = new Locale  ("brokenbridge",   "Player arives at brokenbridge",                              "",false);
		  locations[4]  = new Locale  ("gianthole",      "Player arives at gianthole",                   "Planks, Torch", false);
	    locations[5]  = new Locale  ("hut",            "Player arives at hut",                               "Dynamite",false);
	    locations[6]  = new Locale  ("caveentrance",   "Player arives at caveentrance ",                             "",false);
		  locations[7]  = new Locale  ("cavepath",       "Player is on cavepath",                                      "",false);
		  locations[8]  = new Locale  ("heartofthecave", "Player is inside the cave",                           "Hatchet",false);
		  locations[9]  = new Locale  ("jungle",         "Player arives back in the jungle",                           "",false);
		  locations[10] = new Locale  ("river",          "Player arives at river",                                     "",false);
	  }*/
                 
    function assist () {
		  updateText("You can type 'N' 'S' 'E' 'W' to move through the game, "+
		            "or click the buttons, to help you move through the game");
    }
    /*function updateText(msg) {
          msg = msg + "[" + currentlocation + "]";
      var ta = document. getElementById ("taGame");
           ta.value = msg + "\n" + ta.value;
    }*/

    function btn_go_click(){
      var txt = document.getElementById("txtCommand");
      var num= parseInt(txt.value);
      for (var i=0; i < num; i=i+1) {
          alert("loop: "+ i);
          btn_thing_click(i);
      }
     }
     function Score(){
           alert(score);
      }
     function win() {
       if(playerhasHatchet === true && currentlocation === 9) {
       var msg = "You are now ale to chop down tree to get to thje next side.";
            updateText(msg);
       }
     }
		var Locations = new Array();
		
    function disableButtons() {
     if (currentlocation === 0) {
        location0();
     }else if (currentlocation === 1) {
        location1();
     }else if (currentlocation === 2) {
        location2();
     }else if (currentlocation === 3) {
        location3();
     }else if (currentlocation === 4) {
        location4();
     }else if (currentlocation === 5) {
        location5();
     }else if (currentlocation === 6) {
        location6();
     }else if (currentlocation === 7) {
        location7();
     }else if (currentlocation === 8) {
        location8();
     }else if (currentlocation === 9) {
        location9();
     }else if (currentlocation === 10) {
        location9();
     }
   }
   