let mechanicUnlock = document.querySelector("#mechanic-unlock");
let mechanicUnlockCost = document.querySelector(".mechanic-unlock-cost");

let totalMechanicsClass = document.querySelectorAll(".total-mechanics");
let totalKnowledgeID = document.querySelector("#total-knowledge");

let mechanicKnowledgePerSecID = document.querySelector(".mechanic-knowledge-per-sec");
let mechanicCostID = document.querySelector(".mechanic-cost");

let mechanicBuy = document.querySelector("#buy-mechanic");
let mechanicBuyMAX = document.querySelector("#buy-mechanic-max");
let mechanicBuyMAXauto = document.querySelector("#auto-buy-mechanic-max");
let mechanicBuyMAXautoONOFF = document.querySelector(".auto-buy-mechanic-max-ON-OFF");

let schematicsTab = document.querySelector('.kingdom-3 .tab-3');

let constructHydraulicGauntlets = document.querySelector(".schematics .schematic.hydraulic-gauntlets .btn-schematic");
let constructChainSwordModule = document.querySelector(".schematics .schematic.chain-sword-module .btn-schematic");
let constructEnginePoweredBoots = document.querySelector(".schematics .schematic.engine-powered-boots .btn-schematic");
let constructBloodTransfusionPauldrons = document.querySelector(".schematics .schematic.blood-transfusion-pauldrons .btn-schematic");

let hydraulicGauntletsGoblinCost = document.querySelector(".schematics .hydraulic-gauntlets-goblin-cost");
let hydraulicGauntletsOreCost = document.querySelector(".schematics .hydraulic-gauntlets-ore-cost");
let hydraulicGauntletsKnowledgeCost = document.querySelector(".schematics .hydraulic-gauntlets-knowledge-cost");

let chainSwordModuleGoblinCost = document.querySelector(".schematics .chain-sword-module-goblin-cost");
let chainSwordModuleOreCost = document.querySelector(".schematics .chain-sword-module-ore-cost");
let chainSwordModuleKnowledgeCost = document.querySelector(".schematics .chain-sword-module-knowledge-cost");

let enginePoweredBootsGoblinCost = document.querySelector(".schematics .engine-powered-boots-goblin-cost");
let enginePoweredBootsOreCost = document.querySelector(".schematics .engine-powered-boots-ore-cost");
let enginePoweredBootsKnowledgeCost = document.querySelector(".schematics .engine-powered-boots-knowledge-cost");

let bloodTransfusionPauldronsGoblinCost = document.querySelector(".schematics .blood-transfusion-pauldrons-goblin-cost");
let bloodTransfusionPauldronsOreCost = document.querySelector(".schematics .blood-transfusion-pauldrons-ore-cost");
let bloodTransfusionPauldronsKnowledgeCost = document.querySelector(".schematics .blood-transfusion-pauldrons-knowledge-cost");


mechanicUnlock.addEventListener("click", function (e) {
    if (game.gold >= game.mechanics.unlockCost) {
      game.gold -= game.mechanics.unlockCost;
      game.mechanics.unlocked = true;
      unitUnlock(game.mechanics, mechanicCard, mechanicUnlockCard);

      popUpText("Schematics Unlocked");
    }
});

mechanicBuy.addEventListener("click", function (e) {
    unitBuyGoldFunc(game.mechanics, totalMechanicsClass);
});

mechanicBuyMAX.addEventListener("click", function (e) {
    unitBuyGoldMAXFunc(game.mechanics, totalMechanicsClass);
});
mechanicBuyMAXauto.addEventListener("click", function (e) {
  game.mechanics.autoBuy = !game.mechanics.autoBuy;
  if (game.mechanics.autoBuy) {
    mechanicBuyMAXauto.classList.add("auto-on");
    mechanicBuyMAXautoONOFF.textContent = "[ON]";
  }
  else{
    mechanicBuyMAXauto.classList.remove("auto-on");
    mechanicBuyMAXautoONOFF.textContent = "[OFF]";
  }
});

constructHydraulicGauntlets.addEventListener("click", function (e) {
    constructSchematic(game.stats.schematics.hydraulicGauntlets, constructHydraulicGauntlets);
});
constructChainSwordModule.addEventListener("click", function (e) {
    constructSchematic(game.stats.schematics.chainSwordModule, constructChainSwordModule);
});
constructEnginePoweredBoots.addEventListener("click", function (e) {
    constructSchematic(game.stats.schematics.enginePoweredBoots, constructEnginePoweredBoots);
});
constructBloodTransfusionPauldrons.addEventListener("click", function (e) {
    constructSchematic(game.stats.schematics.bloodTransfusionPauldrons, constructBloodTransfusionPauldrons);
});

function constructSchematic(schematic, schematicButton){
  if (schematic.goblinCost <= game.goblins.total &&
      schematic.oreCost <= game.metals.ore.total &&
      schematic.knowledgeCost <= game.knowledge.total) {

        game.goblins.total -= schematic.goblinCost; 
        game.metals.ore.total -= schematic.oreCost; 
        game.knowledge.total -= schematic.knowledgeCost;
        
        schematicButton.textContent = "Constructed";
        schematicButton.disabled = true;
        $(schematicButton).closest(".schematic").addClass("active");
        schematic.constructed = true;

        for (let i = 0; i < totalGoblinsClass.length; i++) {
          totalGoblinsClass[i].textContent = Math.floor(game.goblins.total);
        }

        totalKnowledgeID.textContent = game.knowledge.total;


        if (game.stats.schematics.bloodTransfusionPauldrons.constructed) {
          formatTextString(regenPercent, "40%");
        }

  }
}

function checkMechanicPurchases() {
  if (game.gold >= game.mechanics.cost) {
    document.querySelector('#buy-mechanic').disabled = false;
    document.querySelector('#buy-mechanic-max').disabled = false;
  }
  else{
    document.querySelector('#buy-mechanic').disabled = true;
    document.querySelector('#buy-mechanic-max').disabled = true;
  }

  if (game.stats.schematics.hydraulicGauntlets.goblinCost <= game.goblins.total &&
      game.stats.schematics.hydraulicGauntlets.oreCost <= game.metals.ore.total &&
      game.stats.schematics.hydraulicGauntlets.knowledgeCost <= game.knowledge.total) {

      if(!game.stats.schematics.hydraulicGauntlets.constructed){
        document.querySelector('.hydraulic-gauntlets .btn-schematic').disabled = false;
      }
  }
  else{
    document.querySelector('.hydraulic-gauntlets .btn-schematic').disabled = true;
  }

  if (game.stats.schematics.chainSwordModule.goblinCost <= game.goblins.total &&
      game.stats.schematics.chainSwordModule.oreCost <= game.metals.ore.total &&
      game.stats.schematics.chainSwordModule.knowledgeCost <= game.knowledge.total) {

    if(!game.stats.schematics.chainSwordModule.constructed){
        document.querySelector('.chain-sword-module .btn-schematic').disabled = false;
    }
  }
  else{
    document.querySelector('.chain-sword-module .btn-schematic').disabled = true;
  }

  if (game.stats.schematics.enginePoweredBoots.goblinCost <= game.goblins.total &&
      game.stats.schematics.enginePoweredBoots.oreCost <= game.metals.ore.total &&
      game.stats.schematics.enginePoweredBoots.knowledgeCost <= game.knowledge.total) {

    if(!game.stats.schematics.enginePoweredBoots.constructed){
        document.querySelector('.engine-powered-boots .btn-schematic').disabled = false;
    }

  }
  else{
    document.querySelector('.engine-powered-boots .btn-schematic').disabled = true;
  }


  if (game.stats.schematics.bloodTransfusionPauldrons.goblinCost <= game.goblins.total &&
      game.stats.schematics.bloodTransfusionPauldrons.oreCost <= game.metals.ore.total &&
      game.stats.schematics.bloodTransfusionPauldrons.knowledgeCost <= game.knowledge.total) {

    if(!game.stats.schematics.bloodTransfusionPauldrons.constructed){
      document.querySelector('.blood-transfusion-pauldrons .btn-schematic').disabled = false;
    }
  }
  else{
    document.querySelector('.blood-transfusion-pauldrons .btn-schematic').disabled = true;
  }
}