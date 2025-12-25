let minerUnlock = document.querySelector("#miner-unlock");
let minerUnlockCost = document.querySelector(".miner-unlock-cost");

let minerOrePerSecID = document.querySelector(".miner-ore-per-sec");
let totalMinersClass = document.querySelectorAll(".total-miners");
let minerCostID = document.querySelector(".miner-cost");
let totalOreID = document.querySelector("#total-ore");
let totalIronID = document.querySelector("#total-iron");
let totalMythrilID = document.querySelector("#total-mythril");
let totalAdamantID = document.querySelector("#total-adamant");
let totalTitaniumID = document.querySelector("#total-titanium");

let minerBuy = document.querySelector("#buy-miner");
let minerBuyMAX = document.querySelector("#buy-miner-max");
let minerBuyMAXauto = document.querySelector("#auto-buy-miner-max");
let minerBuyMAXautoONOFF = document.querySelector(".auto-buy-miner-max-ON-OFF");

let smeltIron = document.querySelector("#smelt-iron");
let smeltMythril = document.querySelector("#smelt-mythril");
let smeltAdamant = document.querySelector("#smelt-adamant");
let smeltTitanium = document.querySelector("#smelt-titanium");

let ironProgress = document.querySelector(".iron-progress");
let mythrilProgress = document.querySelector(".mythril-progress");
let adamantProgress = document.querySelector(".adamant-progress");
let titaniumProgress = document.querySelector(".titanium-progress");

let iron_orePerTickID = document.querySelector(".iron-ore-per-tick");
let mythril_ironPerTickID = document.querySelector(".mythril-iron-per-tick");
let mythril_orePerTickID = document.querySelector(".mythril-ore-per-tick");
let adamant_mythrilOrePerTickID = document.querySelector(".adamant-mythril-per-tick");
let adamant_orePerTickID = document.querySelector(".adamant-ore-per-tick");
let titanium_adamantOrePerTickID = document.querySelector(".titanium-adamant-per-tick");
let titanium_orePerTickID = document.querySelector(".titanium-ore-per-tick");

let increaseIronOutput = document.querySelector("#increase-iron-output");
let ironOutputID = document.querySelector(".iron-output");
let increaseIronOutputCost = document.querySelector(".increase-iron-output-cost");

let increaseMythrilOutput = document.querySelector("#increase-mythril-output");
let mythrilOutputID = document.querySelector(".mythril-output");
let increaseMythrilOutputCost = document.querySelector(".increase-mythril-output-cost");

let increaseAdamantOutput = document.querySelector("#increase-adamant-output");
let adamantOutputID = document.querySelector(".adamant-output");
let increaseAdamantOutputCost = document.querySelector(".increase-adamant-output-cost");

let increaseTitaniumOutput = document.querySelector("#increase-titanium-output");
let titaniumOutputID = document.querySelector(".titanium-output");
let increaseTitaniumOutputCost = document.querySelector(".increase-titanium-output-cost");

let ironSmelterONOFF = document.querySelector(".iron-smelter-ON-OFF");
let mythrilSmelterONOFF = document.querySelector(".mythril-smelter-ON-OFF");
let adamantSmelterONOFF = document.querySelector(".adamant-smelter-ON-OFF");
let titaniumSmelterONOFF = document.querySelector(".titanium-smelter-ON-OFF");

let smelterTimerIron;
let smelterTimerMythril;
let smelterTimerAdamant;
let smelterTimerTitanium;

let metalurgyTab = document.querySelector('.kingdom-2 .tab-2');

minerUnlock.addEventListener("click", function (e) {
    if (game.gold >= game.miners.unlockCost) {
      game.gold -= game.miners.unlockCost;
      game.miners.unlocked = true;
      unitUnlock(game.miners, minerCard, minerUnlockCard);

      popUpText("Metalurgy Unlocked");
    }
});

minerBuy.addEventListener("click", function (e) {
    unitBuyGoldFunc(game.miners, totalMinersClass);
});

minerBuyMAX.addEventListener("click", function (e) {
    unitBuyGoldMAXFunc(game.miners, totalMinersClass);
});
minerBuyMAXauto.addEventListener("click", function (e) {
  game.miners.autoBuy = !game.miners.autoBuy;
  if (game.miners.autoBuy) {
    minerBuyMAXauto.classList.add("auto-on");
    minerBuyMAXautoONOFF.textContent = "[ON]";
  }
  else{
    minerBuyMAXauto.classList.remove("auto-on");
    minerBuyMAXautoONOFF.textContent = "[OFF]";
  }
});

increaseIronOutput.addEventListener("click", function (e) {
    increaseGreatForgeOutput(game.metals.iron);
});

increaseMythrilOutput.addEventListener("click", function (e) {
    increaseGreatForgeOutput(game.metals.mythril);
});

increaseAdamantOutput.addEventListener("click", function (e) {
    increaseGreatForgeOutput(game.metals.adamant);
});

increaseTitaniumOutput.addEventListener("click", function (e) {
    increaseGreatForgeOutput(game.metals.titanium);
});

function increaseGreatForgeOutput(oreType){
  if (oreType.outputCost <= game.gold) {
    game.gold -= oreType.outputCost;
    oreType.output += 5;
    oreType.outputCost *= oreType.outputCostMult;

    formatTextString(ironOutputID, game.metals.iron.output);
    formatTextString(increaseIronOutputCost, game.metals.iron.outputCost);
    formatTextString(mythrilOutputID, game.metals.mythril.output);
    formatTextString(increaseMythrilOutputCost, game.metals.mythril.outputCost);
    formatTextString(adamantOutputID, game.metals.adamant.output);
    formatTextString(increaseAdamantOutputCost, game.metals.adamant.outputCost);
    formatTextString(titaniumOutputID, game.metals.titanium.output);
    formatTextString(increaseTitaniumOutputCost, game.metals.titanium.outputCost);
  }
}


smeltIron.addEventListener("click", function (e) {
      if (!game.metals.iron.smelting &&
        game.metals.ore.total >= game.upgrades.miners.forge.ironSmelterOreCost) {
        game.metals.iron.smelting = true;
        ironSmelterONOFF.textContent = "[ON]";
        smeltOreFunc(
          game.metals.iron, 
          ironProgress, 
          game.upgrades.miners.forge.ironSmelterOreCost
        );
        smelterTimerIron = setInterval( function() { smeltOreFunc(
          game.metals.iron, 
          ironProgress, 
          game.upgrades.miners.forge.ironSmelterOreCost
          ); }, game.metals.iron.tickRate);
      }
      else if (game.metals.iron.smelting) {
        clearInterval(smelterTimerIron);
        game.metals.iron.smelting = false;
        ironSmelterONOFF.textContent = "[OFF]";
      }
});

smeltMythril.addEventListener("click", function (e) {
      if (!game.metals.mythril.smelting &&
        game.metals.ore.total >= game.upgrades.miners.forge.mythrilSmelterOreCost &&
        game.metals.iron.total >= game.upgrades.miners.forge.mythrilSmelterIronCost) {
        game.metals.mythril.smelting = true;
        mythrilSmelterONOFF.textContent = "[ON]";
        smeltOreFunc(
          game.metals.mythril,
          mythrilProgress,
          game.upgrades.miners.forge.mythrilSmelterOreCost,
          game.metals.iron,
          game.upgrades.miners.forge.mythrilSmelterIronCost
        );
        smelterTimerMythril = setInterval( function() { smeltOreFunc(
          game.metals.mythril,
          mythrilProgress,
          game.upgrades.miners.forge.mythrilSmelterOreCost,
          game.metals.iron,
          game.upgrades.miners.forge.mythrilSmelterIronCost
        ); }, game.metals.mythril.tickRate);
      }
      else if (game.metals.mythril.smelting) {
        clearInterval(smelterTimerMythril);
        game.metals.mythril.smelting = false;
        mythrilSmelterONOFF.textContent = "[OFF]";
      }
});
smeltAdamant.addEventListener("click", function (e) {
      if (!game.metals.adamant.smelting &&
        game.metals.ore.total >= game.upgrades.miners.forge.adamantSmelterOreCost &&
        game.metals.mythril.total >= game.upgrades.miners.forge.adamantSmelterMythrilCost) {
        game.metals.adamant.smelting = true;
        adamantSmelterONOFF.textContent = "[ON]";
        smeltOreFunc(
          game.metals.adamant,
          adamantProgress,
          game.upgrades.miners.forge.adamantSmelterOreCost,
          game.metals.mythril,
          game.upgrades.miners.forge.adamantSmelterMythrilCost
        );
        smelterTimerAdamant = setInterval( function() { smeltOreFunc(
          game.metals.adamant,
          adamantProgress,
          game.upgrades.miners.forge.adamantSmelterOreCost,
          game.metals.mythril,
          game.upgrades.miners.forge.adamantSmelterMythrilCost
        ); }, game.metals.adamant.tickRate);
      }
      else if (game.metals.adamant.smelting) {
        clearInterval(smelterTimerAdamant);
        game.metals.adamant.smelting = false;
        adamantSmelterONOFF.textContent = "[OFF]";
      }
});
smeltTitanium.addEventListener("click", function (e) {
      if (!game.metals.titanium.smelting &&
        game.metals.ore.total >= game.upgrades.miners.forge.titaniumSmelterOreCost &&
        game.metals.adamant.total >= game.upgrades.miners.forge.titaniumSmelterAdamantCost) {
        game.metals.titanium.smelting = true;
        titaniumSmelterONOFF.textContent = "[ON]";
        smeltOreFunc(
          game.metals.titanium,
          titaniumProgress,
          game.upgrades.miners.forge.titaniumSmelterOreCost,
          game.metals.adamant,
          game.upgrades.miners.forge.titaniumSmelterMythrilCost
        );
        smelterTimerTitanium = setInterval( function() { smeltOreFunc(
          game.metals.titanium,
          titaniumProgress,
          game.upgrades.miners.forge.titaniumSmelterOreCost,
          game.metals.adamant,
          game.upgrades.miners.forge.titaniumSmelterAdamantCost
        ); }, game.metals.titanium.tickRate);
      }
      else if (game.metals.titanium.smelting) {
        clearInterval(smelterTimerTitanium);
        game.metals.titanium.smelting = false;
        titaniumSmelterONOFF.textContent = "[OFF]";
      }
});


function smeltOreFunc(oreType, progressBar, smelterOreCost, metalTotal, smelterMetalCost) {

    if (metalTotal === undefined) {
      metalTotal = {};
      metalTotal.total = 0
    }
    smelterMetalCost = smelterMetalCost || 0;

    if (game.metals.ore.total >= smelterOreCost && metalTotal.total >= smelterMetalCost) {
      game.metals.ore.total = game.metals.ore.total-smelterOreCost;
      metalTotal.total = metalTotal.total-smelterMetalCost;
      oreType.smeltingProgress+= 5;
      progressBar.value = oreType.smeltingProgress;

      if (progressBar.value >= 100) {
        oreType.total += oreType.output;
        oreType.smeltingProgress = 0;
        progressBar.value = oreType.smeltingProgress;
      }

      formatText();
    }

}

function checkMinerPurchases() {
  if (game.gold >= game.miners.cost) {
    document.querySelector('#buy-miner').disabled = false;
    document.querySelector('#buy-miner-max').disabled = false;
  }
  else{
    document.querySelector('#buy-miner').disabled = true;
    document.querySelector('#buy-miner-max').disabled = true;
  }

  //forge outputs
  if (game.gold >= game.metals.iron.outputCost) {
    document.querySelector('#increase-iron-output').disabled = false;
  }
  else{
    document.querySelector('#increase-iron-output').disabled = true;
  }

  if (game.gold >= game.metals.mythril.outputCost) {
    document.querySelector('#increase-mythril-output').disabled = false;
  }
  else{
    document.querySelector('#increase-mythril-output').disabled = true;
  }

  if (game.gold >= game.metals.adamant.outputCost) {
    document.querySelector('#increase-adamant-output').disabled = false;
  }
  else{
    document.querySelector('#increase-adamant-output').disabled = true;
  }

  if (game.gold >= game.metals.titanium.outputCost) {
    document.querySelector('#increase-titanium-output').disabled = false;
  }
  else{
    document.querySelector('#increase-titanium-output').disabled = true;
  }

}