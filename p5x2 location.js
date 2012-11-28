//
// p5x2 location.js
//

function Location(_id, _name, _description, _item) {
   this.id          = _id;
   this.name        = _name;
   this.description = _description;
   this.item        = _item;
   
   this.toString= function() {
    var retVal  = "";
    retVal =  "[Location]"                      + "\n" +
              "id:" + this.id                   + "\n" +
              "name:" + this.name               + "\n" +
              "description:" + this.description + "\n" +
              "item:" + this.item;              + "\n" ;
          return retVal;
        }
        }
        var Locations = new Array();
        
 function loadLocations() {
           Locations [0] = new Location(0,"Start", "You are standing in a vacant parking lot and you seem to have missplaced your glasses. To the north you see a vague outline of a building. To the south you see a flickering street light.",  "none.");
           Locations [1] = new Location(1,"North1", "You walk North and see a box shaped building a little ahead of you, there are some rusty scissors on the ground.",  "Scissors.");
           Locations [2] = new Location(2,"South1", "You walked south, the street light begins to get brighter as you get closer and now you can see that there is a lonesome man leaning againts the lamp post.","none.");
           Locations [3] = new Location(3,"East1", "You begin to walk east and you see a lone car in this large abandoned parking lot.","none.");
           Locations [4] = new Location(4,"West1", "You walk west and find a rusty Shopping cart that has a crowbar.","Crowbar");
           Locations [5] = new Location(5,"North2", "As you continue north you approach the building and you can see that the front door is a few more yards in front of you.","none.");
           Locations [6] = new Location(6,"South2", "As you approach the man he whistles and 3 other guys with knives stab you to death.","none");
           Locations [7] = new Location(7,"East2", "Approaching the car you see that there is a chainsaw in the backseat.","Chainsaw");
           Locations [8] = new Location(8,"West2", "Continuing on past the shopping cart you find that there is a zombie horde of kittens that eat your eyes.","none.");
           Locations [9] = new Location(9,"North3", "You approach the door only to find that is is locked, but there are a pair of glasses on the ground.","Glasses.");
            }
            
  function location0() {
    updateText(Locations [0] .description);
    btn_north.disabled = false
    btn_south.disabled = false
    btn_east.disabled  = false
    btn_west.disabled  = false
    score = score + 5;
    }
    
  function location1() {
    updateText(Locations [1] .description);
    btn_north.disabled = false
    btn_south.disabled = false
    btn_east.disabled  = true
    btn_west.disabled  = true
   if (!playerHasScissors) {
    updateText ("There are scissors here.");
    (playerHasScissors) = true;
    score = score + 5;
    }
    }
  
  function location2() {
    updateText(Locations [2] .description);
    document.getElementById("btn_north").disabled = false
    document.getElementById("btn_south").disabled = false
    document.getElementById("btn_east").disabled  = true
    document.getElementById("btn_west").disabled  = true
    score = score + 5;
    }
  
  function location3() {
    updateText(Locations [3] .description);
    document.getElementById("btn_north").disabled = true
    document.getElementById("btn_south").disabled = true
    document.getElementById("btn_east").disabled  = false
    document.getElementById("btn_west").disabled  = false
    score = score + 5;
    }
  
  function location4() {
    updateText(Locations [4] .description);
    document.getElementById("btn_north").disabled  = true
    document.getElementById("btn_south").disabled = true
    document.getElementById("btn_east").disabled  = false
    document.getElementById("btn_west").disabled  = false
  if (!playerHasCrowbar) {
    updateText ("There is a Crowbar here.");
    playerHasCrowbar = true;
    score = score + 5;
    }
    }
  
  function location5() {
    updateText(Locations [5] .description);
    document.getElementById("btn_north").disabled  = false
    document.getElementById("btn_south").disabled = false
    document.getElementById("btn_east").disabled  = true
    document.getElementById("btn_west").disabled  = true
    score = score + 5;
    }
  
  function location6() {
    updateText(Locations [6] .description);
    document.getElementById("btn_north").disabled  = false
    document.getElementById("btn_south").disabled = true
    document.getElementById("btn_east").disabled  = true
    document.getElementById("btn_west").disabled  = true
    score = score + 5;
    }

  function location7() {
    updateText(Locations [7] .description);
    document.getElementById("btn_north").disabled  = true
    document.getElementById("btn_south").disabled = true
    document.getElementById("btn_east").disabled  = true
    document.getElementById("btn_west").disabled  = false
  if (!playerHasChainsaw) {
    updateText ("There is a Chainsaw here.");
    playerHasChainsaw = true;
    score = score + 5;
    }
    }
  
  function location8() {
    updateText(Locations [8] .description);
    document.getElementById("btn_north").disabled  = true
    document.getElementById("btn_south").disabled = true
    document.getElementById("btn_east").disabled  = false
    document.getElementById("btn_west").disabled  = true
    score = score + 5;
    }

  function location9() {
    updateText(Locations [9] .description);
    document.getElementById("btn_north").disabled  = true
    document.getElementById("btn_south").disabled = false
    document.getElementById("btn_east").disabled  = true
    document.getElementById("btn_west").disabled  = true
   if (!playerHasGlasses) {
    updateText ("There are Glasses here.");
    playerHasGlasses = true;
    score = score + 5;
    }
    }
            
  function Btn_help_click() {
    updateText("To navigate use directional commands. To retrieve and item use 'take'.");
    }
    
      
  