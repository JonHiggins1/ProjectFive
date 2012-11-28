	//
	// move.js
	//
			
			var north = 1;
      var south = 2;
      var east  = 3;
      var west  = 4;
      var score = 0;
      var currentlocation = 0;
     
          
       function move_north() {
        if (currentlocation === 0) {
            currentlocation = 1;
            displayNewLocation("1");
            } else if (currentlocation === 2) {
                        currentlocation = 0;
                        displayNewLocation("0");
                        }
             else if (currentlocation === 1) {
                       currentlocation = 5;
                       displayNewLocation("5");
                       }
             else if (currentlocation === 5) {
                       currentlocation = 9;
                       displayNewLocation("9");
                       }
             else if (currentlocation === 6 ) {
                       currentlocation = 2;
                       displayNewLocation("2");
                       }  
                        }
       function move_south() {
        if (currentlocation === 0) {
            currentlocation = 2;
            displayNewLocation("2");
            } else if (currentlocation === 1) {
                        currentlocation = 0;
                        displayNewLocation("0");
                        }
              else if (currentlocation === 5) {
                        currentlocation = 1;
                        displayNewLocation("1");
                        }
              else if (currentlocation === 9) {
                        currentlocation = 5;
                        displayNewLocation("5");
                        }
               else if (currentlocation === 2) {
                       currentlocation = 6;
                       displayNewLocation("6");
                       }
                       }
                    
        function move_east() {
          if (currentlocation === 0) {
            currentlocation = 3;
            displayNewLocation("3");
            } else if (currentlocation === 4) {
                        currentlocation = 0;
                        displayNewLocation("0");
                        }
              else if (currentlocation === 3) {
                       currentlocation = 7;
                       displayNewLocation("7");
                       }
              else if (currentlocation === 8) {
                       currentlocation = 4;
                       displayNewLocation("4");
                       }         
                       }          
                        
       function move_west() {
        if (currentlocation === 0) {
            currentlocation = 4;
            displayNewLocation("4");
            } else if (currentlocation === 3) {
                        currentlocation = 0;
                        displayNewLocation("0");
                        }
               else if (currentlocation === 7) {
                       currentlocation = 3;
                       displayNewLocation("3");
                       }
              else if (currentlocation === 4) {
                       currentlocation = 8;
                       displayNewLocation("8");
                       }          
                        }
  
        function updateText(msg) {
          msg = msg + "[" + currentlocation + "]";
          var ta = document. getElementById ("taGame");
            ta.value = msg + "\n" + ta.value;
            }

             
                function btn_Go_click(){
                  var txt = document.getElementById("txtCommand");
                  var num= parseInt(txt.value);
                    for (var i=0; i < num; i=i+1) {
                      alert("loop: "+ i);
                       btn_thing_click(i);
                      }
                      }

        function Btn_Score_Click(){
        alert(score);
        }
      
       function btn_go_click() {
        var userinput = document.getElementById("txtInput");
          switch(userinput.value) {
          case "n":
          case "N":
          case "north":
          case "North":
          move_north();
          break;
          case "s":
          case "S":
          case "south":
          case "South":
          move_south();
          break;
          case "e":
          case "E":
          case "east":
          case "East":
          move_east();
          break;
          case "w":
          case "W":
          case "west":
          case "West":
          move_west();
          break;
          case "take":
          case "Take":
          takeCrowbar();
          takeChainsaw();
          takeScissors();
          takeGlasses();
          break;
          case "inventory":
          Btn_inventory_click();
          break;
          case "help":
          case "Help":
          Btn_help_click();
         
          }
          }
        
        function displayNewLocation(currentlocation) {
        switch (currentlocation) {
        case "0" : location0() ; break ;
        case "1" : location1() ; break ;
        case "2" : location2() ; break ;
        case "3" : location3() ; break ;
        case "4" : location4() ; break ;
        case "5" : location5() ; break ;
        case "6" : location6() ; break ;
        case "7" : location7() ; break ;
        case "8" : location8() ; break ;
        case "9" : location9() ; break ;
        }
        }
        
        function init() {
        updateText("You are standing in a vacant parking lot and you seem to have missplaced your glasses. To the north you see a vague outline of a building. To the south you see a flickering street light.");
        loadLocations();
        Item();
        }
