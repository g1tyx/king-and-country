let goblinUnlock = document.querySelector("#goblin-unlock");
let goblinUnlockCost = document.querySelector(".goblin-unlock-cost");

let totalGoblinsClass = document.querySelectorAll(".total-goblins");
let goblinCostID = document.querySelector(".goblin-cost");

let goblinAssistMultID = document.querySelector(".goblin-assist-mult");
let goblinAssistChoiceID = document.querySelector(".goblin-assist-choice");

let goblinBuy = document.querySelector("#buy-goblin");
let goblinBuyMAX = document.querySelector("#buy-goblin-max");
let goblinBuyMAXauto = document.querySelector("#auto-buy-goblin-max");
let goblinBuyMAXautoONOFF = document.querySelector(".auto-buy-goblin-max-ON-OFF");

let goblinChoiceAll = document.querySelectorAll(".goblin-choices .goblin-choice");

let goblinChoicePeasents = document.querySelector(".goblin-choice-peasents");
let goblinChoiceScholars = document.querySelector(".goblin-choice-scholars");
let goblinChoiceMiners = document.querySelector(".goblin-choice-miners");
let goblinChoiceLapidaries = document.querySelector(".goblin-choice-lapidaries");

let primalRunesTab = document.querySelector('.kingdom-3 .tab-2');

goblinUnlock.addEventListener("click", function (e) {
    if (game.gold >= game.goblins.unlockCost) {
      game.gold -= game.goblins.unlockCost;
      game.goblins.unlocked = true;
      unitUnlock(game.goblins, goblinCard, goblinUnlockCard);

      popUpText("Primal Runes Unlocked");
    }
});

goblinChoicePeasents.addEventListener("click", function (e) {
	goblinChoiceSelect("Peasents", goblinChoicePeasents);
});
goblinChoiceScholars.addEventListener("click", function (e) {
	goblinChoiceSelect("Scholars", goblinChoiceScholars);
});
goblinChoiceMiners.addEventListener("click", function (e) {
	goblinChoiceSelect("Miners", goblinChoiceMiners);
});
goblinChoiceLapidaries.addEventListener("click", function (e) {
	goblinChoiceSelect("Lapidaries", goblinChoiceLapidaries);
});

function goblinChoiceSelect(selection, button) {
	game.goblins.selection = selection;
	goblinAssistChoiceID.textContent = selection;
	for (let i = 0; i < goblinChoiceAll.length; i++) {
	  goblinChoiceAll[i].disabled = false;
	}
	button.disabled = true;
}

goblinBuy.addEventListener("click", function (e) {
    unitBuyGoldFunc(game.goblins, totalGoblinsClass);
});

goblinBuyMAX.addEventListener("click", function (e) {
    unitBuyGoldMAXFunc(game.goblins, totalGoblinsClass);
});
goblinBuyMAXauto.addEventListener("click", function (e) {
  game.goblins.autoBuy = !game.goblins.autoBuy;
  if (game.goblins.autoBuy) {
    goblinBuyMAXauto.classList.add("auto-on");
    goblinBuyMAXautoONOFF.textContent = "[ON]";
  }
  else{
    goblinBuyMAXauto.classList.remove("auto-on");
    goblinBuyMAXautoONOFF.textContent = "[OFF]";
  }
});

function checkGoblinPurchases() {
	if (game.gold >= game.goblins.cost) {
	  document.querySelector('#buy-goblin').disabled = false;
	  document.querySelector('#buy-goblin-max').disabled = false;
	}
	else{
	  document.querySelector('#buy-goblin').disabled = true;
	  document.querySelector('#buy-goblin-max').disabled = true;
	}
}