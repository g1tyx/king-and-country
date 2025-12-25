let blacksmithUnlock = document.querySelector("#blacksmith-unlock");
let blacksmithUnlockCost = document.querySelector(".blacksmith-unlock-cost");

let blacksmithGoldPerSecID = document.querySelector(".blacksmith-bronze-per-sec");
let totalBlacksmithsClass = document.querySelectorAll(".total-blacksmiths");
let blacksmithCostID = document.querySelector(".blacksmith-cost");

let increaseBlacksmithEfficiency = document.querySelector("#increase-blacksmith-efficiency");
let blacksmithEfficiencyID = document.querySelector(".blacksmith-efficiency");
let blacksmithEfficiencyCostID = document.querySelector(".blacksmith-efficiency-cost");

let blacksmithBuy = document.querySelector("#buy-blacksmith");
let blacksmithBuyMAX = document.querySelector("#buy-blacksmith-max");
let blacksmithBuyMAXauto = document.querySelector("#auto-buy-blacksmith-max");
let blacksmithBuyMAXautoONOFF = document.querySelector(".auto-buy-blacksmith-max-ON-OFF");

let increaseBlacksmithEfficiencyMAX = document.querySelector("#increase-blacksmith-efficiency-max");
let increaseBlacksmithEfficiencyMAXauto = document.querySelector("#increase-blacksmith-efficiency-max-auto");
let increaseBlacksmithEfficiencyMAXautoONOFF = document.querySelector(".increase-blacksmith-efficiency-max-ON-OFF");

let totalBronzeRelicsClass = document.querySelectorAll(".total-relics");
let createBronzeRelic = document.querySelector("#blacksmith-create-bronze-relic");
let bronzeRelicCostID = document.querySelector(".blacksmith-bronze-relic-cost");

let armoryTab = document.querySelector('.kingdom-1 .tab-3');


createBronzeRelic.addEventListener("click", function (e) {
  
  if(game.blacksmiths.relicCost <= game.metals.bronze.total){
    game.metals.bronze.total = game.metals.bronze.total-game.blacksmiths.relicCost;
    game.metals.bronze.relics.total++;
    game.blacksmiths.relicCost = Math.ceil(game.blacksmiths.relicCost*game.blacksmiths.relicCostMult);

    for (let i = 0; i < totalBronzeRelicsClass.length; i++) {
      totalBronzeRelicsClass[i].textContent = Math.floor(game.metals.bronze.relics.total);
    }
    
    formatTextString(bronzeRelicCostID, game.blacksmiths.relicCost);

  }
});

blacksmithUnlock.addEventListener("click", function (e) {
  if (game.gold >= game.blacksmiths.unlockCost) {
    game.gold -= game.blacksmiths.unlockCost;
    game.blacksmiths.unlocked = true;
    unitUnlock(game.blacksmiths, blacksmithCard, blacksmithUnlockCard);

    popUpText("Armory & Combat Unlocked");
  }
});

blacksmithBuy.addEventListener("click", function (e) {
    	unitBuyGoldFunc(game.blacksmiths, totalBlacksmithsClass);
});

blacksmithBuyMAX.addEventListener("click", function (e) {
    unitBuyGoldMAXFunc(game.blacksmiths, totalBlacksmithsClass);
});
blacksmithBuyMAXauto.addEventListener("click", function (e) {
  game.blacksmiths.autoBuy = !game.blacksmiths.autoBuy;
  if (game.blacksmiths.autoBuy) {
    blacksmithBuyMAXauto.classList.add("auto-on");
    blacksmithBuyMAXautoONOFF.textContent = "[ON]";
  }
  else{
    blacksmithBuyMAXauto.classList.remove("auto-on");
    blacksmithBuyMAXautoONOFF.textContent = "[OFF]";
  }
});
increaseBlacksmithEfficiency.addEventListener("click", function (e) {
  increaseEfficiencyFunc(game.blacksmiths, blacksmithEfficiencyID, blacksmithEfficiencyCostID);
});
increaseBlacksmithEfficiencyMAX.addEventListener("click", function (e) {
     increaseEfficiencyMaxFunc(game.blacksmiths, blacksmithEfficiencyID, blacksmithEfficiencyCostID);
});
increaseBlacksmithEfficiencyMAXauto.addEventListener("click", function (e) {
  game.blacksmiths.efficiencyAutoBuy = !game.blacksmiths.efficiencyAutoBuy;
  if (game.blacksmiths.efficiencyAutoBuy) {
    increaseBlacksmithEfficiencyMAXauto.classList.add("auto-on");
    increaseBlacksmithEfficiencyMAXautoONOFF.textContent = "[ON]";
  }
  else{
    increaseBlacksmithEfficiencyMAXauto.classList.remove("auto-on");
    increaseBlacksmithEfficiencyMAXautoONOFF.textContent = "[OFF]";
  }
});

function checkBlacksmithPurchases() {
	if (game.gold >= game.blacksmiths.cost) {
	  document.querySelector('#buy-blacksmith').disabled = false;
	  document.querySelector('#buy-blacksmith-max').disabled = false;
	}
	else{
	  document.querySelector('#buy-blacksmith').disabled = true;
	  document.querySelector('#buy-blacksmith-max').disabled = true;
	}
  if (game.gold >= game.blacksmiths.efficiencyCost) {
    document.querySelector('#increase-blacksmith-efficiency').disabled = false;
    document.querySelector('#increase-blacksmith-efficiency-max').disabled = false;
  }
  else{
    document.querySelector('#increase-blacksmith-efficiency').disabled = true;
    document.querySelector('#increase-blacksmith-efficiency-max').disabled = true;
  }
  if (game.metals.bronze.total >= game.blacksmiths.relicCost) {
    document.querySelector('#blacksmith-create-bronze-relic').disabled = false;
    //document.querySelector('#blacksmith-create-bronze-relic-max').disabled = false;
  }
  else{
    document.querySelector('#blacksmith-create-bronze-relic').disabled = true;
    //document.querySelector('#blacksmith-create-bronze-relic-max').disabled = true;
  }
}