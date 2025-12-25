let scholarUnlock = document.querySelector("#scholar-unlock");
let scholarUnlockCost = document.querySelector(".scholar-unlock-cost");

let scholarRunicPerSecID = document.querySelector(".scholar-runic-power-per-sec");

let totalScholarsClass = document.querySelectorAll(".total-scholars");
let scholarCostID = document.querySelector(".scholar-cost");

let scholarBuy = document.querySelector("#buy-scholar");
let scholarBuyMAX = document.querySelector("#buy-scholar-max");
let scholarBuyMAXauto = document.querySelector("#auto-buy-scholar-max");
let scholarBuyMAXautoONOFF = document.querySelector(".auto-buy-scholar-max-ON-OFF");

let runeTab = document.querySelector('.kingdom-1 .tab-2');

scholarUnlock.addEventListener("click", function (e) {
	if (game.gold >= game.scholars.unlockCost) {
		game.gold -= game.scholars.unlockCost;
		game.scholars.unlocked = true;
  	unitUnlock(game.scholars, scholarCard, scholarUnlockCard);

  	popUpText("Runes Unlocked");
	}
});

scholarBuy.addEventListener("click", function (e) {
  unitBuyGoldFunc(game.scholars, totalScholarsClass);
});
scholarBuyMAX.addEventListener("click", function (e) {
  unitBuyGoldMAXFunc(game.scholars, totalScholarsClass);
});
scholarBuyMAXauto.addEventListener("click", function (e) {
  game.scholars.autoBuy = !game.scholars.autoBuy;
  if (game.scholars.autoBuy) {
  	scholarBuyMAXauto.classList.add("auto-on");
    scholarBuyMAXautoONOFF.textContent = "[ON]";
  }
  else{
  	scholarBuyMAXauto.classList.remove("auto-on");
    scholarBuyMAXautoONOFF.textContent = "[OFF]";
  }
});

function checkScholarPurchases() {
	if (game.gold >= game.scholars.cost) {
	  document.querySelector('#buy-scholar').disabled = false;
	  document.querySelector('#buy-scholar-max').disabled = false;
	}
	else{
	  document.querySelector('#buy-scholar').disabled = true;
	  document.querySelector('#buy-scholar-max').disabled = true;
	}

}