let brewmasterUnlock = document.querySelector("#brewmaster-unlock");
let brewmasterUnlockCost = document.querySelector(".brewmaster-unlock-cost");

let totalBrewmastersClass = document.querySelectorAll(".total-brewmasters");
let brewmasterCostID = document.querySelector(".brewmaster-cost");

let brewmasterEfficiencyID = document.querySelector(".brewmaster-efficiency");

let brewmasterBuy = document.querySelector("#buy-brewmaster");
let brewmasterBuyMAX = document.querySelector("#buy-brewmaster-max");
let brewmasterBuyMAXauto = document.querySelector("#auto-buy-brewmaster-max");
let brewmasterBuyMAXautoONOFF = document.querySelector(".auto-buy-brewmaster-max-ON-OFF");


brewmasterUnlock.addEventListener("click", function (e) {
    if (game.gold >= game.brewmasters.unlockCost) {
      game.gold -= game.brewmasters.unlockCost;
      game.brewmasters.unlocked = true;
      unitUnlock(game.brewmasters, brewmasterCard, brewmasterUnlockCard);
    }
});

brewmasterBuy.addEventListener("click", function (e) {
    unitBuyGoldFunc(game.brewmasters, totalBrewmastersClass);
});

brewmasterBuyMAX.addEventListener("click", function (e) {
    unitBuyGoldMAXFunc(game.brewmasters, totalBrewmastersClass);
});
brewmasterBuyMAXauto.addEventListener("click", function (e) {
  game.brewmasters.autoBuy = !game.brewmasters.autoBuy;
  if (game.brewmasters.autoBuy) {
    brewmasterBuyMAXauto.classList.add("auto-on");
    brewmasterBuyMAXautoONOFF.textContent = "[ON]";
  }
  else{
    brewmasterBuyMAXauto.classList.remove("auto-on");
    brewmasterBuyMAXautoONOFF.textContent = "[OFF]";
  }
});

function checkBrewmasterPurchases() {
	if (game.gold >= game.brewmasters.cost) {
	  document.querySelector('#buy-brewmaster').disabled = false;
	  document.querySelector('#buy-brewmaster-max').disabled = false;
	}
	else{
	  document.querySelector('#buy-brewmaster').disabled = true;
	  document.querySelector('#buy-brewmaster-max').disabled = true;
	}
}