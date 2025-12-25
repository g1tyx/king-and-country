let totalrunicPowerID = document.querySelector("#total-runic-power");

//maan
let maanRunesClass = document.querySelector(".maan-runes");
let infuseMaan = document.querySelector("#infuse-maan-rune");
let currentMaanInfusionID = document.querySelector("#current-maan-infusion");
let maxMaanInfusionID = document.querySelector("#max-maan-infusion");
//auto infuse
let infuseMaanAuto = document.querySelector("#infuse-maan-rune-auto");
let infuseMaanAuto_ONOFF = document.querySelector(".infuse-maan-rune-auto-ON-OFF");

//nyd
let nydCard = document.querySelector(".rune-card.nyd");
let nydRunesClass = document.querySelector(".nyd-runes");
let infuseNyd = document.querySelector("#infuse-nyd-rune");
let currentNydInfusionID = document.querySelector("#current-nyd-infusion");
let maxNydInfusionID = document.querySelector("#max-nyd-infusion");
//auto infuse
let infuseNydAuto = document.querySelector("#infuse-nyd-rune-auto");
let infuseNydAuto_ONOFF = document.querySelector(".infuse-nyd-rune-auto-ON-OFF");

//uru
let uruCard = document.querySelector(".rune-card.uru");
let uruRunesClass = document.querySelector(".uru-runes");
let infuseUru = document.querySelector("#infuse-uru-rune");
let currentUruInfusionID = document.querySelector("#current-uru-infusion");
let maxUruInfusionID = document.querySelector("#max-uru-infusion");
//auto infuse
let infuseUruAuto = document.querySelector("#infuse-uru-rune-auto");
let infuseUruAuto_ONOFF = document.querySelector(".infuse-uru-rune-auto-ON-OFF");

//global upgrades
let nydRuneUpgradeCostID = document.querySelector(".nyd-rune-cost");
let uruRuneUpgradeCostID = document.querySelector(".uru-rune-cost");

let nydRuneUpgradeUnlock = document.querySelector("#unlock-nyd-rune");
let uruRuneUpgradeUnlock = document.querySelector("#unlock-uru-rune");

//primal runes
let createPrimalMaan = document.querySelector("#create-primal-maan-rune");
let primalMaanRunesClass = document.querySelector(".primal-maan-runes");
let primalMaanRuneCost = document.querySelector("#primal-maan-rune-cost");
let primalMaanRuneCostGoblins = document.querySelector("#primal-maan-rune-cost-goblins");

let createPrimalNyd = document.querySelector("#create-primal-nyd-rune");
let primalNydRunesClass = document.querySelector(".primal-nyd-runes");
let primalNydRuneCost = document.querySelector("#primal-nyd-rune-cost");
let primalNydRuneCostGoblins = document.querySelector("#primal-nyd-rune-cost-goblins");

let createPrimalUru = document.querySelector("#create-primal-uru-rune");
let primalUruRunesClass = document.querySelector(".primal-uru-runes");
let primalUruRuneCost = document.querySelector("#primal-uru-rune-cost");
let primalUruRuneCostGoblins = document.querySelector("#primal-uru-rune-cost-goblins");


infuseMaan.addEventListener("click", function (e) {
	infuseRune(game.runes.maan, currentMaanInfusionID, maanRunesClass, maxMaanInfusionID);
});
infuseNyd.addEventListener("click", function (e) {
	infuseRune(game.runes.nyd, currentNydInfusionID, nydRunesClass, maxNydInfusionID);
});
infuseUru.addEventListener("click", function (e) {
	infuseRune(game.runes.uru, currentUruInfusionID, uruRunesClass, maxUruInfusionID);
});

createPrimalMaan.addEventListener("click", function (e) {
	infusePrimalRune(game.runes.primalMaan, game.runes.maan, primalMaanRunesClass, maanRunesClass,
		primalMaanRuneCost, primalMaanRuneCostGoblins);
});
createPrimalNyd.addEventListener("click", function (e) {
	infusePrimalRune(game.runes.primalNyd, game.runes.nyd, primalNydRunesClass, nydRunesClass,
		primalNydRuneCost, primalNydRuneCostGoblins);
});
createPrimalUru.addEventListener("click", function (e) {
	infusePrimalRune(game.runes.primalUru, game.runes.uru, primalUruRunesClass, uruRunesClass,
		primalUruRuneCost, primalUruRuneCostGoblins);
});

infuseMaanAuto.addEventListener("click", function (e) {
	game.runes.nyd.autoInfuse = false;
	game.runes.uru.autoInfuse = false;
	game.runes.maan.autoInfuse = !game.runes.maan.autoInfuse;
	infuseNydAuto_ONOFF.textContent = "[OFF]";
	infuseUruAuto_ONOFF.textContent = "[OFF]";

	infuseNydAuto.classList.remove("auto-on");
	infuseUruAuto.classList.remove("auto-on");

	if (game.runes.maan.autoInfuse) {
		infuseMaanAuto.classList.add("auto-on");
		infuseMaanAuto_ONOFF.textContent = "[ON]";
	}
	else{
		infuseMaanAuto.classList.remove("auto-on");
		infuseMaanAuto_ONOFF.textContent = "[OFF]";
	}
});
infuseNydAuto.addEventListener("click", function (e) {
	game.runes.maan.autoInfuse = false;
	game.runes.uru.autoInfuse = false;
	game.runes.nyd.autoInfuse = !game.runes.nyd.autoInfuse;
	infuseMaanAuto_ONOFF.textContent = "[OFF]";
	infuseUruAuto_ONOFF.textContent = "[OFF]";

	infuseMaanAuto.classList.remove("auto-on");
	infuseUruAuto.classList.remove("auto-on");

	if (game.runes.nyd.autoInfuse) {
		infuseNydAuto.classList.add("auto-on");
		infuseNydAuto_ONOFF.textContent = "[ON]";
	}
	else{
		infuseNydAuto.classList.remove("auto-on");
		infuseNydAuto_ONOFF.textContent = "[OFF]";
	}
});
infuseUruAuto.addEventListener("click", function (e) {
	game.runes.maan.autoInfuse = false;
	game.runes.nyd.autoInfuse = false;
	game.runes.uru.autoInfuse = !game.runes.uru.autoInfuse;
	infuseMaanAuto_ONOFF.textContent = "[OFF]";
	infuseNydAuto_ONOFF.textContent = "[OFF]";

	infuseMaanAuto.classList.remove("auto-on");
	infuseNydAuto.classList.remove("auto-on");

	if (game.runes.uru.autoInfuse) {
		infuseUruAuto.classList.add("auto-on");
		infuseUruAuto_ONOFF.textContent = "[ON]";
	}
	else{
		infuseUruAuto.classList.remove("auto-on");
		infuseUruAuto_ONOFF.textContent = "[OFF]";
	}
});


//this may need to be reworked for save files?
nydRuneUpgradeUnlock.addEventListener("click", function (e) {
	if (game.upgrades.scholars.unlockNydCost <= game.gold) {
		game.gold -= game.upgrades.scholars.unlockNydCost;
		game.upgrades.scholars.unlockNyd = true;
		$(nydCard).removeClass("hidden");
		$(nydRuneUpgradeUnlock).addClass("hidden");
	}
});
uruRuneUpgradeUnlock.addEventListener("click", function (e) {
	if (game.upgrades.scholars.unlockUruCost <= game.gold) {
		game.gold -= game.upgrades.scholars.unlockUruCost;
		$(uruCard).removeClass("hidden");
		game.upgrades.scholars.unlockUru = true;
		$(uruRuneUpgradeUnlock).addClass("hidden");
	}
});

function infuseRune(rune, currentInfusionID, runesClass, maxInfusionID) {
	let infusionDifference = rune.maxInfusion - rune.infusion;

	if (game.runes.runicPower >= infusionDifference) {
		game.runes.runicPower -= infusionDifference;
		rune.infusion = 0;
		rune.total++;
		runeMaxinfusionIncrease(rune, maxInfusionID);
		if (rune.name == "Uru") {
			addStats();
		}
	}
	else{
		rune.infusion += game.runes.runicPower;
		game.runes.runicPower = 0;
	}

	formatTextRunes(rune, currentInfusionID, runesClass);
	formatText();
}

function infusePrimalRune(rune, runeCostType, primalRunesClass, runesClass, primalRuneCostID, primalRuneCostGoblinsID) {
	if (rune.runeCost <= runeCostType.total) {
		if (rune.goblinCost <= game.goblins.total) {
			game.goblins.total -= rune.goblinCost;
			runeCostType.total -= rune.runeCost;

			rune.total ++;

			rune.runeCost *= rune.runeCostMult;
			rune.goblinCost *= rune.goblinCostMult;

			if (rune.name == "Primal Uru") {
				addStats();
			}

			formatTextPrimalRunes(rune, runeCostType, primalRunesClass, runesClass, primalRuneCostID, primalRuneCostGoblinsID)
			formatText();
		}
	}
}

function runeMaxinfusionIncrease(rune,maxInfusionID) {
 	rune.maxInfusion = rune.maxInfusion * rune.maxInfusionMult;
 	if (rune.maxInfusion >= 1000000) {
 	  maxInfusionID.textContent = rune.maxInfusion.toExponential(2);
 	}
 	else{
 	 maxInfusionID.textContent = rune.maxInfusion.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
 	}
}


function checkRunePurchases() {
	if (game.runes.runicPower <= 0) {
	  infuseMaan.disabled = true;
	  infuseNyd.disabled = true;
	  infuseUru.disabled = true;
	}
	else{
	  infuseMaan.disabled = false;
	  infuseNyd.disabled = false;
	  infuseUru.disabled = false;
	}

	if (game.gold <= game.upgrades.scholars.unlockNydCost) {
	  nydRuneUpgradeUnlock.disabled = true;
	}
	else{
	  nydRuneUpgradeUnlock.disabled = false;
	}
	if (game.gold <= game.upgrades.scholars.unlockUruCost) {
	  uruRuneUpgradeUnlock.disabled = true;
	}
	else{
	  uruRuneUpgradeUnlock.disabled = false;
	}

	if (game.runes.maan.total >= game.runes.primalMaan.runeCost && game.goblins.total >= game.runes.primalMaan.goblinCost) {
	  createPrimalMaan.disabled = false;
	}
	else{
	  createPrimalMaan.disabled = true;
	}
	if (game.runes.nyd.total >= game.runes.primalNyd.runeCost && game.goblins.total >= game.runes.primalNyd.goblinCost) {
	  createPrimalNyd.disabled = false;
	}
	else{
	  createPrimalNyd.disabled = true;
	}
	if (game.runes.uru.total >= game.runes.primalUru.runeCost && game.goblins.total >= game.runes.primalUru.goblinCost) {
	  createPrimalUru.disabled = false;
	}
	else{
	  createPrimalUru.disabled = true;
	}
}

function formatTextRunes(rune, currentInfusionID, runesClass) {
	if (rune.infusion >= 1000000) {
	  currentInfusionID.textContent = rune.infusion.toExponential(2);
	}
	else{
	 currentInfusionID.textContent = rune.infusion.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}
	if (rune.total >= 1000000) {
	  runesClass.textContent = rune.total.toExponential(2);
	}
	else{
	 runesClass.textContent = rune.total.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}
}



function formatTextPrimalRunes(rune, runeCostType, primalRunesClass, runesClass, primalRuneCostID, primalRuneCostGoblinsID) {
	if (rune.total >= 1000000) {
	  primalRunesClass.textContent = rune.total.toExponential(2);
	}
	else{
	 primalRunesClass.textContent = rune.total.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}
	if (rune.runeCost >= 1000000) {
	  primalRuneCostID.textContent = rune.runeCost.toExponential(2);
	}
	else{
	 primalRuneCostID.textContent = rune.runeCost.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}
	if (rune.goblinCost >= 1000000) {
	  primalRuneCostGoblinsID.textContent = rune.goblinCost.toExponential(2);
	}
	else{
	 primalRuneCostGoblinsID.textContent = rune.goblinCost.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}

	if (runeCostType.total >= 1000000) {
	  runesClass.textContent = runeCostType.total.toExponential(2);
	}
	else{
	 runesClass.textContent = runeCostType.total.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}	

	//goblins
	if (game.goblins.total >= 1000000) {
		for (let i = 0; i < totalGoblinsClass.length; i++) {
		  totalGoblinsClass[i].textContent = Math.floor(game.goblins.total).toExponential(2);
		}
	}
	else{
		for (let i = 0; i < totalGoblinsClass.length; i++) {
		  totalGoblinsClass[i].textContent = Math.floor(game.goblins.total).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		}
	}
}