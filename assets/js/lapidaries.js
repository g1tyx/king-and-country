let lapidaryUnlock = document.querySelector("#lapidary-unlock");
let lapidaryUnlockCost = document.querySelector(".lapidary-unlock-cost");

let totalLapidariesClass = document.querySelectorAll(".total-lapidaries");
let totalGemsID = document.querySelector("#total-gems");

let lapidaryGemsPerSecID = document.querySelector(".lapidary-gems-per-sec");
let lapidaryCostID = document.querySelector(".lapidary-cost");

let lapidaryBuy = document.querySelector("#buy-lapidary");
let lapidaryBuyMAX = document.querySelector("#buy-lapidary-max");
let lapidaryBuyMAXauto = document.querySelector("#auto-buy-lapidary-max");
let lapidaryBuyMAXautoONOFF = document.querySelector(".auto-buy-lapidary-max-ON-OFF");


lapidaryUnlock.addEventListener("click", function (e) {
    if (game.gold >= game.lapidaries.unlockCost) {
      game.gold -= game.lapidaries.unlockCost;
      game.lapidaries.unlocked = true;
      unitUnlock(game.lapidaries, lapidaryCard, lapidaryUnlockCard);
    }
});

lapidaryBuy.addEventListener("click", function (e) {
    unitBuyGoldFunc(game.lapidaries, totalLapidariesClass);
});

lapidaryBuyMAX.addEventListener("click", function (e) {
    unitBuyGoldMAXFunc(game.lapidaries, totalLapidariesClass);
});

lapidaryBuyMAXauto.addEventListener("click", function (e) {
  game.lapidaries.autoBuy = !game.lapidaries.autoBuy;
  if (game.lapidaries.autoBuy) {
    lapidaryBuyMAXauto.classList.add("auto-on");
    lapidaryBuyMAXautoONOFF.textContent = "[ON]";
  }
  else{
    lapidaryBuyMAXauto.classList.remove("auto-on");
    lapidaryBuyMAXautoONOFF.textContent = "[OFF]";
  }
});

function checkLapidaryPurchases() {
  if (game.gold >= game.lapidaries.cost) {
    document.querySelector('#buy-lapidary').disabled = false;
    document.querySelector('#buy-lapidary-max').disabled = false;
  }
  else{
    document.querySelector('#buy-lapidary').disabled = true;
    document.querySelector('#buy-lapidary-max').disabled = true;
  }
}