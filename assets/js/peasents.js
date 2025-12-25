let peasentGoldPerSecID = document.querySelector(".peasent-gold-per-sec");
let totalPeasentsClass = document.querySelectorAll(".total-peasents");
let peasentCostID = document.querySelector(".peasent-cost");

let increasePeasentEfficiency = document.querySelector("#increase-peasent-efficiency");
let peasentEfficiencyID = document.querySelector(".peasent-efficiency");
let peasentEfficiencyCostID = document.querySelector(".peasent-efficiency-cost");

let peasentBuy = document.querySelector("#buy-peasent");
let peasentBuyMAX = document.querySelector("#buy-peasent-max");
let peasentBuyMAXauto = document.querySelector("#auto-buy-peasent-max");
let peasentBuyMAXautoONOFF = document.querySelector(".auto-buy-peasent-max-ON-OFF");

let increasePeasentEfficiencyMAX = document.querySelector("#increase-peasent-efficiency-max");
let increasePeasentEfficiencyMAXauto = document.querySelector("#increase-peasent-efficiency-max-auto");
let increasePeasentEfficiencyMAXautoONOFF = document.querySelector(".increase-peasent-efficiency-max-ON-OFF");

peasentBuy.addEventListener("click", function (e) {
    	unitBuyGoldFunc(game.peasents, totalPeasentsClass);
});

peasentBuyMAX.addEventListener("click", function (e) {
    unitBuyGoldMAXFunc(game.peasents, totalPeasentsClass);
});
peasentBuyMAXauto.addEventListener("click", function (e) {
  game.peasents.autoBuy = !game.peasents.autoBuy;
  if (game.peasents.autoBuy) {
    peasentBuyMAXauto.classList.add("auto-on");
    peasentBuyMAXautoONOFF.textContent = "[ON]";
  }
  else{
    peasentBuyMAXauto.classList.remove("auto-on");
    peasentBuyMAXautoONOFF.textContent = "[OFF]";
  }
});
increasePeasentEfficiency.addEventListener("click", function (e) {
  increaseEfficiencyFunc(game.peasents, peasentEfficiencyID, peasentEfficiencyCostID);
});
increasePeasentEfficiencyMAX.addEventListener("click", function (e) {
     increaseEfficiencyMaxFunc(game.peasents, peasentEfficiencyID, peasentEfficiencyCostID);
});
increasePeasentEfficiencyMAXauto.addEventListener("click", function (e) {
  game.peasents.efficiencyAutoBuy = !game.peasents.efficiencyAutoBuy;
  if (game.peasents.efficiencyAutoBuy) {
    increasePeasentEfficiencyMAXauto.classList.add("auto-on");
    increasePeasentEfficiencyMAXautoONOFF.textContent = "[ON]";
  }
  else{
    increasePeasentEfficiencyMAXauto.classList.remove("auto-on");
    increasePeasentEfficiencyMAXautoONOFF.textContent = "[OFF]";
  }
});

function checkPeasentPurchases() {
	if (game.gold >= game.peasents.cost) {
	  document.querySelector('#buy-peasent').disabled = false;
	  document.querySelector('#buy-peasent-max').disabled = false;
	}
	else{
	  document.querySelector('#buy-peasent').disabled = true;
	  document.querySelector('#buy-peasent-max').disabled = true;
	}
  if (game.gold >= game.peasents.efficiencyCost) {
    document.querySelector('#increase-peasent-efficiency').disabled = false;
    document.querySelector('#increase-peasent-efficiency-max').disabled = false;
  }
  else{
    document.querySelector('#increase-peasent-efficiency').disabled = true;
    document.querySelector('#increase-peasent-efficiency-max').disabled = true;
  }
}