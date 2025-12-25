let enterHell = document.querySelector('#enter-hell');

let totalTroops = document.querySelector('#total-troops');
let totalPortals = document.querySelector('#total-portals');
let portalCounter = document.querySelector('#portal-counter');
let troopsPerSec = document.querySelector('.troops-per-sec');

let demonArtifactsTotal = document.querySelector('#total-demon-artifacts');
let demonArtifactsCost = document.querySelector('.demon-artifacts-cost');

let demonSoulsTotal = document.querySelector('#total-demon-souls');

let conjureDemonSoul = document.querySelector('#conjure-demon-soul');
let conjureDemonSoulCost = document.querySelector('.conjure-demon-soul-cost');

let portalEfficiencyID = document.querySelector('.portal-efficiency');
let troopEfficiencyID = document.querySelector('.troop-efficiency');

let upgradePortals = document.querySelector('#upgrade-portals');
let upgradeTroops = document.querySelector('#upgrade-troops');

let portalEfficiencyCostID = document.querySelector('.portal-efficiency-cost');
let troopEfficiencyCostID = document.querySelector('.troop-efficiency-cost');

let createPortal = document.querySelector('#create-portal');

let mapUp = document.querySelector('.phase-2-ui #up');
let mapLeft = document.querySelector('.phase-2-ui #left');
let mapRight = document.querySelector('.phase-2-ui #right');
let mapDown = document.querySelector('.phase-2-ui #down');

let mapButtons = document.querySelectorAll('.phase-2-ui .movement-btn');

let textScroll1 = document.querySelector('.text-scroll-1');
let textScroll2 = document.querySelector('.text-scroll-2');
let textScroll3 = document.querySelector('.text-scroll-3');
let textScroll4 = document.querySelector('.text-scroll-4');
let textScroll5 = document.querySelector('.text-scroll-5');
let textScroll6 = document.querySelector('.text-scroll-6');

let locationTitle = document.querySelector('.location-title');

let conqueringPercentage = document.querySelector('.conquering-percentage');

let totalHellConquered = document.querySelector('#total-hell-conquered');

let totalFacesDestroyed = document.querySelector('#total-faces-destroyed');

enterHell.addEventListener("click", function (e) {
  game.phase2.active = true;

  $("#phase-2").removeClass("hidden");
  $("#phase-1").addClass("unactive");
  $("#phase-1.unactive").fadeOut(1500);
});

createPortal.addEventListener("click", function (e) {

  if (game.phase2.resources.demonArtifacts >= game.phase2.resources.portalsCost) {
    game.phase2.resources.demonArtifacts -= game.phase2.resources.portalsCost;
    game.phase2.resources.portals++;
    game.phase2.resources.portalsCost = game.phase2.resources.portals+1;

    formatTextToFixedNoDecimals(demonArtifactsTotal, game.phase2.resources.demonArtifacts);
    formatTextToFixedNoDecimals(demonArtifactsCost, game.phase2.resources.portalsCost);
  }

});
conjureDemonSoul.addEventListener("click", function (e) {

  if (game.phase2.resources.demonArtifacts >= game.phase2.resources.demonSoulsCost) {
    game.phase2.resources.demonArtifacts -= game.phase2.resources.demonSoulsCost;
    game.phase2.resources.demonSouls++;

    formatTextToFixedNoDecimals(demonArtifactsTotal, game.phase2.resources.demonArtifacts);
    formatTextToFixedNoDecimals(demonSoulsTotal, game.phase2.resources.demonSouls);
    formatTextToFixedNoDecimals(conjureDemonSoulCost, game.phase2.resources.demonSoulsCost);
  }

});

upgradePortals.addEventListener("click", function (e) {

  if (game.phase2.resources.demonSouls >= game.phase2.resources.portalsEfficiencyCost) {
    game.phase2.resources.demonSouls -= game.phase2.resources.portalsEfficiencyCost;
    game.phase2.resources.portalsEfficiency *= 1.3;
    game.phase2.resources.portalsEfficiencyCost = Math.floor((game.phase2.resources.portalsEfficiencyCost*1.5)+1);

    formatTextToFixedNoDecimals(portalEfficiencyCostID, game.phase2.resources.portalsEfficiencyCost);
    formatTextToFixedTwoDecimals(portalEfficiencyID, game.phase2.resources.portalsEfficiency);
    formatTextToFixedNoDecimals(demonSoulsTotal, game.phase2.resources.demonSouls);
  }

});
upgradeTroops.addEventListener("click", function (e) {

  if (game.phase2.resources.demonSouls >= game.phase2.resources.troopsEfficiencyCost) {
    game.phase2.resources.demonSouls -= game.phase2.resources.troopsEfficiencyCost;
    game.phase2.resources.troopsEfficiency *= 1.3;
    game.phase2.resources.troopsEfficiencyCost = Math.floor((game.phase2.resources.troopsEfficiencyCost*1.5)+1);

    formatTextToFixedNoDecimals(troopEfficiencyCostID, game.phase2.resources.troopsEfficiencyCost);
    formatTextToFixedTwoDecimals(troopEfficiencyID, game.phase2.resources.troopsEfficiency);
    formatTextToFixedNoDecimals(demonSoulsTotal, game.phase2.resources.demonSouls);
  }

});

mapRight.addEventListener("click", function (e) {
  movement("right");
  editMap();
});
mapLeft.addEventListener("click", function (e) {
  movement("left");
  editMap();
});
mapUp.addEventListener("click", function (e) {
  movement("up");
  editMap();
});
mapDown.addEventListener("click", function (e) {
  movement("down");
  editMap();
});

function movement(direction) {

  game.phase2.troopRegen = false;

  if (!game.phase2.conquering) {

    if (direction == "right" && game.phase2.location[1] < 9) {
      game.phase2.prevLocation[0] = game.phase2.location[0];
      game.phase2.prevLocation[1] = game.phase2.location[1];
      game.phase2.location[1]++;
    }  
    if (direction == "left" && game.phase2.location[1] > 0) {
      game.phase2.prevLocation[0] = game.phase2.location[0];
      game.phase2.prevLocation[1] = game.phase2.location[1];
      game.phase2.location[1]--;
    } 
    if (direction == "up" && game.phase2.location[0] > 0) {
      game.phase2.prevLocation[0] = game.phase2.location[0];
      game.phase2.prevLocation[1] = game.phase2.location[1];
      game.phase2.location[0]--;
    }  
    if (direction == "down" && game.phase2.location[0] < 9) {
      game.phase2.prevLocation[0] = game.phase2.location[0];
      game.phase2.prevLocation[1] = game.phase2.location[1];
      game.phase2.location[0]++;
    }

    if (game.phase2.location[0] == game.phase2.specialLocations.headquarters[0] && game.phase2.location[1] == game.phase2.specialLocations.headquarters[1]) {
      textLocationChange("Headquarters");
      game.phase2.troopRegen = true;
      if (direction) {
        textScroll("Awaiting Reinforcements");
      }
      game.phase2.isConqueringFortress = false;
    }
    else if (game.phase2.location[0] == game.phase2.specialLocations.fortress_1[0] && game.phase2.location[1] == game.phase2.specialLocations.fortress_1[1]) {
      textLocationChange("Fortress");
      game.phase2.isConqueringFortress = true;
      if (direction) {
        textScroll("You encounter a demon fortress");
      }
    }
    else if (game.phase2.location[0] >= game.phase2.specialLocations.fortress_1[0]-1 && game.phase2.location[1] >= game.phase2.specialLocations.fortress_1[1]-1 
            && game.phase2.location[0] <= game.phase2.specialLocations.fortress_1[0]+1 && game.phase2.location[1] <= game.phase2.specialLocations.fortress_1[1]+1) {
      textLocationChange("Hell Stronghold");
    }
    else if (game.phase2.location[0] == game.phase2.specialLocations.fortress_2[0] && game.phase2.location[1] == game.phase2.specialLocations.fortress_2[1]) {
      textLocationChange("Fortress");
      game.phase2.isConqueringFortress = true;
      if (direction) {
        textScroll("You encounter a demon fortress");
      }
    }
    else if (game.phase2.location[0] >= game.phase2.specialLocations.fortress_2[0]-1 && game.phase2.location[1] >= game.phase2.specialLocations.fortress_2[1]-1 
            && game.phase2.location[0] <= game.phase2.specialLocations.fortress_2[0]+1 && game.phase2.location[1] <= game.phase2.specialLocations.fortress_2[1]+1) {
      textLocationChange("Hell Stronghold");
    }
    else if (game.phase2.location[0] == game.phase2.specialLocations.fortress_3[0] && game.phase2.location[1] == game.phase2.specialLocations.fortress_3[1]) {
      textLocationChange("Fortress");
      game.phase2.isConqueringFortress = true;
      if (direction) {
        textScroll("You encounter a demon fortress");
      }
    }
    else if (game.phase2.location[0] >= game.phase2.specialLocations.fortress_3[0]-1 && game.phase2.location[1] >= game.phase2.specialLocations.fortress_3[1]-1 
            && game.phase2.location[0] <= game.phase2.specialLocations.fortress_3[0]+1 && game.phase2.location[1] <= game.phase2.specialLocations.fortress_3[1]+1) {
      textLocationChange("Hell Stronghold");
    }
    else{
      textLocationChange("Hell plains");
      game.phase2.isConqueringFortress = false;
    }


  }

}

function createMap() {

  for (i = 0; i < game.phase2.map.length; i++) {
    $('<div class="map-row" />').addClass("row-"+i).appendTo('.phase-2-ui.phase-2-ui-map');

    for (j = 0; j < game.phase2.map[i].length; j++) {
      if (game.phase2.location[0] == i && game.phase2.location[1] == j) {
        $('<div class="map-item" />').addClass("player").addClass(game.phase2.map[i][j]).addClass("coordinate-"+i+"-"+j).appendTo('.phase-2-ui.phase-2-ui-map .map-row.row-'+i);
        formatTextToFixedTwoDecimals(conqueringPercentage, 100);
      }
      else{
        $('<div class="map-item" />').addClass(game.phase2.map[i][j]).addClass("coordinate-"+i+"-"+j).appendTo('.phase-2-ui.phase-2-ui-map .map-row.row-'+i);
      }
    }
  }

}

function editMap() {

  $(".map-item").removeClass("player");

  for (i = 0; i < game.phase2.map.length; i++) {
    for (j = 0; j < game.phase2.map[i].length; j++) {
      if (game.phase2.location[0] == i && game.phase2.location[1] == j) {

        if (game.phase2.map[i][j] == "unconquered" && game.phase2.conqueringPercent != 100) {
            game.phase2.conquering = true;

            for (let i = mapButtons.length - 1; i >= 0; i--) {
              mapButtons[i].disabled = true;
            }

        }
        else if (game.phase2.map[i][j] == "unconquered hell-stronghold" && game.phase2.conqueringPercent != 100) {
            game.phase2.conquering = true;

            for (let i = mapButtons.length - 1; i >= 0; i--) {
              mapButtons[i].disabled = true;
            }

        }
        else if (game.phase2.map[i][j] == "unconquered fortress" && game.phase2.conqueringPercent != 100) {
            game.phase2.conquering = true;

            for (let i = mapButtons.length - 1; i >= 0; i--) {
              mapButtons[i].disabled = true;
            }

        }
        else{
          game.phase2.map[i][j] = "conquered";
          game.phase2.conqueringPercent = 0;

          for (let i = mapButtons.length - 1; i >= 0; i--) {
            mapButtons[i].disabled = false;
          }

        }
            $(".coordinate-"+i+"-"+j).removeClass("unconquered").addClass("player").addClass(game.phase2.map[i][j]);

      }
      else{
        $(".coordinate-"+i+"-"+j).removeClass("unconquered").removeClass("conquered").addClass(game.phase2.map[i][j]);
      }
    }
  }

}

function textScroll(text) {

  if (text) {
    game.phase2.text.unshift(text);
  }

  if (game.phase2.text.length > 6) {
    game.phase2.text.pop();
  }

  textScroll1.textContent = game.phase2.text[0];
  textScroll2.textContent = game.phase2.text[1];
  textScroll3.textContent = game.phase2.text[2];
  textScroll4.textContent = game.phase2.text[3];
  textScroll5.textContent = game.phase2.text[4];
  textScroll6.textContent = game.phase2.text[5];
}

function textLocationChange(text) {
    locationTitle.textContent = text;
}

function conquering() {
  if (game.phase2.conqueringPercent >= 100) {
    game.phase2.conqueringPercent = 100;
    game.phase2.conquering = false;
    formatTextToFixedTwoDecimals(conqueringPercentage, 100);

    if (game.phase2.isConqueringFortress) {
      game.phase2.isConqueringFortress = false;
      game.phase2.resources.facesDestroyed++;
      formatTextToFixedNoDecimals(totalFacesDestroyed, game.phase2.resources.facesDestroyed);
      textScroll("You destory one of Lucifer's Faces");
    }

    game.phase2.resources.totalHellConquered++;
    formatTextToFixedNoDecimals(totalHellConquered, game.phase2.resources.totalHellConquered);

    if (game.phase2.resources.facesDestroyed == 3) {
      game.win = true;
      winGame();
    }

    editMap();
  }
  else{
    if (game.phase2.isConqueringFortress) {
      game.phase2.troopCounter += 3;
    }
    else{
      game.phase2.troopCounter++;
    }
    
    game.phase2.demonArtifactCounter += game.phase2.resources.troopsEfficiency;
    game.phase2.demonSoulCounter += game.phase2.resources.troopsEfficiency;

    if (game.phase2.troopCounter >= 50) {
      if (random(0,100) <= 40) {
          game.phase2.troopCounter = 0;
    
          let troopReduction = random(1,5);
          game.phase2.resources.troops -= troopReduction;
          formatTextToFixedNoDecimals(totalTroops, game.phase2.resources.troops);
  
          textScroll("Your troops diminish by "+ troopReduction);

          if (game.phase2.resources.troops <= 0) {
            game.phase2.resources.troops = 1;
            formatTextToFixedNoDecimals(totalTroops, game.phase2.resources.troops);

            game.phase2.location[0] = game.phase2.prevLocation[0];
            game.phase2.location[1] = game.phase2.prevLocation[1];

            game.phase2.conqueringPercent = 100;
            game.phase2.conquering = false;
            editMap();
            movement();
            formatTextToFixedTwoDecimals(conqueringPercentage, 100);

            for (let i = mapButtons.length - 1; i >= 0; i--) {
              mapButtons[i].disabled = false;
            }

            textScroll("You are pushed back by the demon horde");

            return;
          }


      }
      else{
        game.phase2.troopCounter=25;
      }
    }


    if (game.phase2.demonArtifactCounter >= 150) {
      if (random(0,100) <= 80) {
        let demonArtifactsAddition = random(1,3);
        game.phase2.resources.demonArtifacts+=demonArtifactsAddition;
        game.phase2.demonArtifactCounter=0;
        formatTextToFixedNoDecimals(demonArtifactsTotal, game.phase2.resources.demonArtifacts);

        if (demonArtifactsAddition == 1) {
          textScroll("You find "+demonArtifactsAddition+" Demon Artifact");
        }
        else{
          textScroll("You find "+demonArtifactsAddition+" Demon Artifacts");
        }

      }
      else{
        game.phase2.demonArtifactCounter=50;
      }
    }

    if (game.phase2.demonSoulCounter >= 2400) {
      if (random(0,100) <= 80) {
        game.phase2.resources.demonSouls++;
        game.phase2.demonSoulCounter=0;
        formatTextToFixedNoDecimals(demonSoulsTotal, game.phase2.resources.demonSouls);

        textScroll("You find a Demon Soul");

      }
      else{
        game.phase2.demonSoulCounter=1500;
      }
    }

    if (game.phase2.isConqueringFortress) {
      game.phase2.conqueringPercent += (game.phase2.resources.troops*game.phase2.resources.troopsEfficiency)/30000;
    }
    else{
      game.phase2.conqueringPercent += (game.phase2.resources.troops*game.phase2.resources.troopsEfficiency)/10000;
    }
    formatTextToFixedTwoDecimals(conqueringPercentage, game.phase2.conqueringPercent);
  }

}

function portalTimer() {

  game.phase2.portalCounter--;

  if (game.phase2.portalCounter <= 0) {
    game.phase2.portalCounter = 200;
    game.phase2.resources.portals--;
    game.phase2.resources.portalsCost = game.phase2.resources.portals+1;
    formatTextToFixedNoDecimals(demonArtifactsCost, game.phase2.resources.portalsCost);
  }

  formatTextString(portalCounter, game.phase2.portalCounter);
  formatTextString(totalPortals, game.phase2.resources.portals);

}

function portalAdding() {
  game.phase2.resources.troops += ((game.phase2.resources.portals*game.phase2.resources.portalsEfficiency)+(game.phase2.resources.totalHellConquered/3) )/20;

  formatTextToFixedNoDecimals(totalTroops, game.phase2.resources.troops);
  if(game.phase2.resources.portals >= 1){
    formatTextToFixedTwoDecimals(troopsPerSec, ((game.phase2.resources.portals*game.phase2.resources.portalsEfficiency)+(game.phase2.resources.totalHellConquered/3) )/2);
  }
  else{
    formatTextToFixedTwoDecimals(troopsPerSec, 0);
  }
}

function troopRegen() {
  game.phase2.troopRegenCounter++;

  if (game.phase2.troopRegenCounter >= 500) {
    game.phase2.troopRegenCounter = 0;
    if (game.phase2.resources.troops < 50) {
      game.phase2.resources.troops++;
      formatTextToFixedNoDecimals(totalTroops, game.phase2.resources.troops);
      textScroll("Reinforcements have arrived");
    }
    else{
      textScroll("No Reinforcements available");
    }

  }

}

function checkPhase2Purchases() {
  if (game.phase2.resources.demonArtifacts >= game.phase2.resources.portalsCost) {
    createPortal.disabled = false;
  }
  else{
    createPortal.disabled = true;
  }
  if (game.phase2.resources.demonArtifacts >= game.phase2.resources.demonSoulsCost) {
    conjureDemonSoul.disabled = false;
  }
  else{
    conjureDemonSoul.disabled = true;
  }
  if (game.phase2.resources.demonSouls >= game.phase2.resources.portalsEfficiencyCost) {
    upgradePortals.disabled = false;
  }
  else{
    upgradePortals.disabled = true;
  }
  if (game.phase2.resources.demonSouls >= game.phase2.resources.troopsEfficiencyCost) {
    upgradeTroops.disabled = false;
  }
  else{
    upgradeTroops.disabled = true;
  }
}