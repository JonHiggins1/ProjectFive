//inventory.js
 var item = new Array();
function Items(_id, _name, _description, _notTaken, _taken) {
   this.id          = _id;
   this.name        = _name;
   this.description = _description;
   this.notTaken    = _notTaken;
   this.taken       = _taken;
   
   this.toString= function() {
    var zetVal  = "";
    zetVal = "[Items]"                          
              this.id
              this.name                   
              this.description 
              this.notTaken       
              this.taken             
          return zetVal;
        }
        }
       
        
 function Item() {
           item[0] = new Items(0,"Scissors", "Rusty Scissors",  "Take", "Scissors taken.");
           item[1] = new Items(1,"Crowbar", "Rusty Crowbar",  "Take", "Crowbar taken.");
           item[2] = new Items(2,"Chainsaw", "Chainsaw ", "Take", "Chainsaw taken.");
           item[3] = new Items(3,"Glasses", "your Prescription", "Take", "Glasses taken.");
            }
            
var playerHasChainsaw = false;
var playerHasCrowbar  = false;
var playerHasScissors = false;
var playerHasGlasses  = false;
  
  function displayInventory() {
    var msg = "Inventory: ";
      updateDisplay(msg);
    if (playerHasChainsaw) {
      
      updateDisplay(msg);
    } else {
    if (playerHasCrowbar) {
      
      updateDisplay(msg);
     } else {
    if (playerHasScissors) {
      
      updateDisplay(msg);
    } else {
    if (playerHasGlasses) {
      
      updateDisplay(msg);
    }
    }
    }
    }
    }
    
    function takeCrowbar() {
        if (currentlocation === 4 && playerHasCrowbar === false) {
          playerHasCrowbar = true;
          updateText(item[1].notTaken);
          }
        else if(currentlocation === 4 && playerHasCrowbar === true) {
          updateText(item[1].taken);
          }
          }
     function takeChainsaw(){
        if (currentlocation === 7 && playerHasChainsaw === false) {
          playerHasChainsaw = true;
          updateText(item[2].notTaken); 
           }
        else if(currentlocation === 7 && playerHasChainsaw === true) {
          updateText(item[2].taken);
          }
          }
      function takeScissors(){
        if (currentlocation === 1 && playerHasScissors === false) {
          playerHasScissors = true;
          updateText(item[0].notTaken);
          }
        else if(currentlocation === 1 && playerHasScissors === true) {
          updateText(item[0].taken);
          }
          }
       function takeGlasses(){
        if (currentlocation === 9 && playerHasGlasses === false) {
          playerHasGlasses = true;
          updateText(item[3].notTaken); 
           }
        else if(currentlocation === 9 && playerHasGlasses === true) {
          updateText(item[3].taken);
          updateText("There is Nothing to take.");
          }
          }
                
    function Btn_inventory_click() {
            var msg = "Inventory: ";
           if (playerHasCrowbar) {
            msg = msg + "Crowbar";
            updateText(msg);
            } else {
           if (playerHasChainsaw) {
            msg = msg + "Chainsaw";
            updateText(msg);
            } else {
           if (playerHasScissors) {
            msg = msg + "Scissors";
            updateText(msg);
            } else {
           if (playerHasGlasses) {
            msg = msg + "Glasses";
            updateText(msg);
            } else {
            updateText("You have nothing in your inventory");
              }
              }
              }
              }
              }
          
          