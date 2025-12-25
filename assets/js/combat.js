let combatButton = document.querySelector(".combat-btn");
let statsHpID = document.querySelector("#stats-hp");
let statsMaxHpID = document.querySelector("#stats-max-hp");
let statsStrID = document.querySelector("#stats-str");
let statsDefID = document.querySelector("#stats-def");
let statsCombatLevelID = document.querySelector("#stats-combat-lvl");

//challenge
let statsChallengeHpID = document.querySelector("#stats-challenge-hp");
let statsChallengeMaxHpID = document.querySelector("#stats-challenge-max-hp");
let statsChallengeStrID = document.querySelector("#stats-challenge-str");
let statsChallengeDefID = document.querySelector("#stats-challenge-def");
let statsChallengeCombatLevelID = document.querySelector("#stats-challenge-combat-lvl");

let currentTierID = document.querySelector(".current-tier");
let currentTierMinusStatsID = document.querySelector(".current-tier-minus-stats");

let monsterSlainID = document.querySelector(".monster-slain");

let statsHeroismID = document.querySelector("#stats-heroism");

let regenPercent = document.querySelector(".regen-percent");

let combatOverlay = document.querySelector(".combat-overlay");
let challengeOverlay = document.querySelector(".challenge-overlay");

let statsFloatingNumber = document.querySelector("#stats-hp-floating-number");
let statsChallengeFloatingNumber = document.querySelector("#stats-challenge-hp-floating-number");
let challengeMonsterFloatingNumber = document.querySelector("#challenge-monster-hp-floating-number");

let totalHeroismPlus = document.querySelector(".total-heroism-plus");
let totalHeroismPeasent = document.querySelector(".total-heroism");

let slimeCombatLevel = document.querySelector(".slime-combat-level");
let scorpionCombatLevel = document.querySelector(".scorpion-combat-level");
let bearCombatLevel = document.querySelector(".bear-combat-level");
let dwarvenSkeletonCombatLevel = document.querySelector(".dwarvenskeleton-combat-level");
let griffonCombatLevel = document.querySelector(".griffon-combat-level");
let wyrmlingCombatLevel = document.querySelector(".wyrmling-combat-level");

let slimeHpBar = document.querySelector("#slime-hp");
let scorpionHpBar = document.querySelector("#scorpion-hp");
let bearHpBar = document.querySelector("#bear-hp");
let dwarvenSkeletonHpBar = document.querySelector("#dwarvenskeleton-hp");
let griffonHpBar = document.querySelector("#griffon-hp");
let wyrmlingHpBar = document.querySelector("#wyrmling-hp");

let fightMonsterSlimeID = document.querySelector("#fight-monster-slime");
let fightMonsterScorpionID = document.querySelector("#fight-monster-scorpion");
let fightMonsterBearID = document.querySelector("#fight-monster-bear");
let fightMonsterDwarvenSkeletonID = document.querySelector("#fight-monster-dwarvenskeleton");
let fightMonsterGriffonID = document.querySelector("#fight-monster-griffon");
let fightMonsterWyrmlingID = document.querySelector("#fight-monster-wyrmling");

//challenge monsters
let challengeMonsterCombatLevel = document.querySelector("#challenge-monster-combat-lvl");
let challengeMonsterName = document.querySelector(".challenge-monster");
let challengeMonsterHp = document.querySelector("#challenge-monster-hp");
let challengeMonsterMaxHp = document.querySelector("#challenge-monster-max-hp");

let tier1EmblemID = document.querySelector("#t1");
let tier2EmblemID = document.querySelector("#t2");
let tier3EmblemID = document.querySelector("#t3");

let currentEmblemsID = document.querySelector(".current-emblems");
let allEmblemsID = document.querySelector("#stats-emblems");

//bosses
let dwarfKingCombatLevel = document.querySelector(".dwarf-king-combat-level");
let dwarfKingHpBar = document.querySelector("#dwarf-king-hp");
let fightMonsterDwarfKingID = document.querySelector("#fight-monster-dwarf-king");

let goblinChieftainCombatLevel = document.querySelector(".goblin-chieftain-combat-level");
let goblinChieftainHpBar = document.querySelector("#goblin-chieftain-hp");
let fightMonsterGoblinChieftainID = document.querySelector("#fight-monster-goblin-chieftain");

let dragonCombatLevel = document.querySelector(".dragon-combat-level");
let dragonHpBar = document.querySelector("#dragon-hp");
let fightMonsterDragonID = document.querySelector("#fight-monster-dragon");


//challenges
let tier1Challenge = document.querySelector("#tier-1-challenge");
let tier2Challenge = document.querySelector("#tier-2-challenge");
let tier3Challenge = document.querySelector("#tier-3-challenge");

let exitChallenge = document.querySelector("#exit-challenge");
let startChallenge = document.querySelector("#start-challenge");

let challengeTier = 0;

let combatTimer;


//challenge monster stats
//calcMonsterCombatLevel(game.monsters.werewolf, challengeMonsterCombatLevel);
//calcMonsterCombatLevel(game.monsters.wyvern, challengeMonsterCombatLevel);


function loadChallenge(challengeTierNumber, challengeMonster) {
	combatOverlay.classList.add("hidden");
	challengeOverlay.classList.remove("hidden");

	challengeTier = challengeTierNumber;

	if (challengeTier == 1) {
		let hp = Math.floor(game.stats.hp*0.70);
		let maxHp = Math.floor(game.stats.maxHp*0.70);
		let str = Math.floor(game.stats.str*0.70);
		let def = Math.floor(game.stats.def*0.70);

		//set challenge stats
		game.stats.challengeCombatLevel = Math.floor( (maxHp/4)+(str/3)+(def/3) );
		game.stats.challengeHp = hp;
		game.stats.challengeMaxHp = maxHp;
		game.stats.challengeStr = str;
		game.stats.challengeDef = def;

		currentTierID.textContent = "1";
		currentTierMinusStatsID.textContent = "30";
		currentEmblemsID.textContent = game.stats.emblems.tier_1.total;
	}
	if (challengeTier == 2) {
		let hp = Math.floor(game.stats.hp*0.40);
		let maxHp = Math.floor(game.stats.maxHp*0.40);
		let str = Math.floor(game.stats.str*0.40);
		let def = Math.floor(game.stats.def*0.40);

		//set challenge stats
		game.stats.challengeCombatLevel = Math.floor( (maxHp/4)+(str/3)+(def/3) );
		game.stats.challengeHp = hp;
		game.stats.challengeMaxHp = maxHp;
		game.stats.challengeStr = str;
		game.stats.challengeDef = def;

		currentTierID.textContent = "2";
		currentTierMinusStatsID.textContent = "60";
		currentEmblemsID.textContent = game.stats.emblems.tier_2.total;
	}
	if (challengeTier == 3) {
		let hp = Math.floor(game.stats.hp*0.10);
		let maxHp = Math.floor(game.stats.maxHp*0.10);
		let str = Math.floor(game.stats.str*0.10);
		let def = Math.floor(game.stats.def*0.10);

		//set challenge stats
		game.stats.challengeCombatLevel = Math.floor( (maxHp/4)+(str/3)+(def/3) );
		game.stats.challengeHp = hp;
		game.stats.challengeMaxHp = maxHp;
		game.stats.challengeStr = str;
		game.stats.challengeDef = def;

		currentTierID.textContent = "3";
		currentTierMinusStatsID.textContent = "90";
		currentEmblemsID.textContent = game.stats.emblems.tier_3.total;
	}


	formatTextString(statsChallengeHpID, game.stats.challengeHp);
	formatTextString(statsChallengeMaxHpID, game.stats.challengeMaxHp);
	formatTextString(statsChallengeStrID, game.stats.challengeStr);
	formatTextString(statsChallengeDefID, game.stats.challengeDef);
	formatTextString(statsChallengeCombatLevelID, game.stats.challengeCombatLevel);


	//set challenge monster stats
	challengeMonsterName.textContent = challengeMonster.name;
	challengeMonsterHp.textContent = challengeMonster.hp;
	challengeMonsterMaxHp.textContent = challengeMonster.maxHp;
	calcMonsterCombatLevel(challengeMonster, challengeMonsterCombatLevel);

	startChallenge.classList.remove("hidden");
	exitChallenge.classList.remove("hidden");
}

tier1Challenge.addEventListener("click", function (e) {
	loadChallenge(1, game.monsters.giantLizard);
});
tier2Challenge.addEventListener("click", function (e) {
	loadChallenge(2, game.monsters.werewolf);
});
tier3Challenge.addEventListener("click", function (e) {
	loadChallenge(3, game.monsters.wyvern);
});

startChallenge.addEventListener("click", function (e) {
		game.stats.inCombat = true;
		startChallenge.classList.add("hidden");
		exitChallenge.classList.add("hidden");
		if (challengeTier == 1) {
			combatChallenge(game.monsters.giantLizard,game.stats.emblems.tier_1);
		}
		if (challengeTier == 2) {
			combatChallenge(game.monsters.werewolf,game.stats.emblems.tier_2);
		}
		if (challengeTier == 3) {
			combatChallenge(game.monsters.wyvern,game.stats.emblems.tier_3);
		}
});
exitChallenge.addEventListener("click", function (e) {
		game.stats.inCombat = false;
		challengeTier = 0;
		challengeOverlay.classList.add("hidden");
		combatOverlay.classList.remove("hidden");
});

fightMonsterSlimeID.addEventListener("click", function (e) {
    if (!game.stats.inCombat && game.stats.hp > 0 && game.monsters.slime.alive) {
		game.stats.inCombat = true;
		combat(game.monsters.slime,slimeHpBar, fightMonsterSlimeID);
	}
});
fightMonsterScorpionID.addEventListener("click", function (e) {
    if (!game.stats.inCombat && game.stats.hp > 0 && game.monsters.scorpion.alive) {
		game.stats.inCombat = true;
		combat(game.monsters.scorpion,scorpionHpBar, fightMonsterScorpionID);
	}
});
fightMonsterBearID.addEventListener("click", function (e) {
    if (!game.stats.inCombat && game.stats.hp > 0 && game.monsters.bear.alive) {
		game.stats.inCombat = true;
		combat(game.monsters.bear,bearHpBar, fightMonsterBearID);
	}
});
fightMonsterDwarvenSkeletonID.addEventListener("click", function (e) {
    if (!game.stats.inCombat && game.stats.hp > 0 && game.monsters.dwarvenSkeleton.alive) {
		game.stats.inCombat = true;
		combat(game.monsters.dwarvenSkeleton,dwarvenSkeletonHpBar,fightMonsterDwarvenSkeletonID);
	}
});
fightMonsterGriffonID.addEventListener("click", function (e) {
    if (!game.stats.inCombat && game.stats.hp > 0 && game.monsters.griffon.alive) {
		game.stats.inCombat = true;
		combat(game.monsters.griffon,griffonHpBar,fightMonsterGriffonID);
	}
});
fightMonsterWyrmlingID.addEventListener("click", function (e) {
    if (!game.stats.inCombat && game.stats.hp > 0 && game.monsters.wyrmling.alive) {
		game.stats.inCombat = true;
		combat(game.monsters.wyrmling,wyrmlingHpBar,fightMonsterWyrmlingID);
	}
});

//bosses
fightMonsterDwarfKingID.addEventListener("click", function (e) {
    if (!game.stats.inCombat && game.stats.hp > 0 && game.monsters.dwarfKing.alive) {
		game.stats.inCombat = true;
		combat(game.monsters.dwarfKing,dwarfKingHpBar,fightMonsterDwarfKingID);
	}
});
fightMonsterGoblinChieftainID.addEventListener("click", function (e) {
    if (!game.stats.inCombat && game.stats.hp > 0 && game.monsters.goblinChieftain.alive) {
		game.stats.inCombat = true;
		combat(game.monsters.goblinChieftain,goblinChieftainHpBar,fightMonsterGoblinChieftainID);
	}
});
fightMonsterDragonID.addEventListener("click", function (e) {
    if (!game.stats.inCombat && game.stats.hp > 0 && game.monsters.dragon.alive) {
		game.stats.inCombat = true;
		combat(game.monsters.dragon,dragonHpBar,fightMonsterDragonID);
	}
});


function combatChallenge(monster,challengeTier) {

	//monster atacks
	let enemyDamage = (monster.str - game.stats.challengeDef);
	if (enemyDamage <= 0) {
		enemyDamage = 1;
	}

	if (game.stats.schematics.enginePoweredBoots.constructed) {
		let randomRoll = random(1,100);
		if ( randomRoll <= 10 ) {
			statsChallengeFloatingNumber.textContent = "Miss!";
		}
		else{
			game.stats.challengeHp -= enemyDamage;
			statsChallengeFloatingNumber.textContent = "-"+enemyDamage;
		}
	}
	else{
		game.stats.challengeHp -= enemyDamage;
		statsChallengeFloatingNumber.textContent = "-"+enemyDamage;
	}


	//animation for hp number
	statsChallengeFloatingNumber.style.animation = 'none';
	statsChallengeFloatingNumber.offsetHeight; /* trigger reflow */
	statsChallengeFloatingNumber.style.animation = null;

	statsChallengeFloatingNumber.classList.add("active");

	if (game.stats.challengeHp <= 0) {

		setTimeout( function() {
			statsChallengeFloatingNumber.classList.remove("active"); 
			challengeTier = 0;
			challengeOverlay.classList.add("hidden");
			combatOverlay.classList.remove("hidden");

			//restart challenge stats
			game.stats.emblems.monstersSlain = 0;
			formatTextString(monsterSlainID, game.stats.emblems.monstersSlain);
		  	monster.alive = true;
		  	monster.hp = monster.maxHp;

		}, 500);

		game.stats.challengeHp = 0;
		game.stats.hp = 0;
		game.stats.inCombat = false;
		game.stats.alive = false;
		statsHpID.classList.add("dead");
		statsChallengeHpID.classList.add("dead");

		fightMonsterSlimeID.disabled = true;
		fightMonsterScorpionID.disabled = true;
		fightMonsterBearID.disabled = true;
		fightMonsterDwarvenSkeletonID.disabled = true;
		fightMonsterGriffonID.disabled = true;
		fightMonsterWyrmlingID.disabled = true;

		fightMonsterDwarfKingID.disabled = true;
		fightMonsterGoblinChieftainID.disabled = true;
		fightMonsterDragonID.disabled = true;

		tier1Challenge.disabled = true;
		tier2Challenge.disabled = true;
		tier3Challenge.disabled = true;

	}
	else {
		combatTimer = setTimeout( function() { combatChallengePlayer(monster,challengeTier); }, 500);
	}

	formatTextString(statsHpID, game.stats.hp);
	formatTextString(statsChallengeHpID, game.stats.challengeHp);
}

function combatChallengePlayer(monster,challengeTier) {

		let damage = (game.stats.challengeStr - monster.def);
		if (damage < 0) {
			damage = 0;
		}

		challengeMonsterFloatingNumber.textContent = "-"+damage;

		challengeMonsterFloatingNumber.classList.add("active");

		statsChallengeFloatingNumber.classList.remove("active");


		if (game.stats.schematics.chainSwordModule.constructed) {
			let randomRoll = random(1,100);
			if ( randomRoll <= 10 ) {
				damage *= 2;

				challengeMonsterFloatingNumber.textContent = "-"+damage+" x2";
			}
		}

		//attack monster
		monster.hp -= damage;
		challengeMonsterHp.textContent = monster.hp;

		if (monster.hp <= 0) {
			challengeMonsterHp.textContent = "0";
			statsChallengeFloatingNumber.classList.remove("active");

			game.stats.inCombat = false;
			monster.alive = false;

	  		//award monsterSlain and revive monster
	  		game.stats.emblems.monstersSlain++;
	  		formatTextString(monsterSlainID, game.stats.emblems.monstersSlain);
	  		//award emblems
	  		emblemCounter(challengeTier);

	  		setTimeout( function() { 
	  			challengeMonsterFloatingNumber.classList.remove("active");
	  		}, 500);

	  		if (monster.respawnRate) {

	  			setTimeout(function(){
	  				monster.alive = true;
	  				monster.hp = monster.maxHp;
	  				challengeMonsterHp.textContent = monster.hp;
	  				combatChallenge(monster,challengeTier);
	  			}, monster.respawnRate*1000);

	  		}

		}
		else{

			if (game.stats.schematics.hydraulicGauntlets.constructed) {

				let randomRoll = random(1,100);

				if ( randomRoll <= 10 ) {
					combatTimer = setTimeout( function() { combatChallenge(monster,challengeTier); }, 500);
				}
				else{
					combatTimer = setTimeout( function() { 
						combatChallenge(monster,challengeTier); 
						challengeMonsterFloatingNumber.classList.remove("active");
					}, 500);			
				}

			}
			else{
				combatTimer = setTimeout( function() { 
					combatChallenge(monster,challengeTier); 
					challengeMonsterFloatingNumber.classList.remove("active");
				}, 500);			
			}

		}

		formatTextString(statsHpID, game.stats.hp);
		formatTextString(statsChallengeHpID, game.stats.challengeHp);
}

function combat(monster, monsterHpBar, monsterButton) {

	fightMonsterSlimeID.disabled = true;
	fightMonsterScorpionID.disabled = true;
	fightMonsterBearID.disabled = true;
	fightMonsterDwarvenSkeletonID.disabled = true;
	fightMonsterGriffonID.disabled = true;
	fightMonsterWyrmlingID.disabled = true;

	fightMonsterDwarfKingID.disabled = true;
	fightMonsterGoblinChieftainID.disabled = true;
	fightMonsterDragonID.disabled = true;

	tier1Challenge.disabled = true;
	tier2Challenge.disabled = true;
	tier3Challenge.disabled = true;

	monsterButton.disabled = false;


	let damage = (game.stats.str - monster.def);
	if (damage < 0) {
		damage = 0;
	}

	let monsterFloatingNumber = monster.name.toLowerCase();
	monsterFloatingNumber = monsterFloatingNumber.replace(/\s/g, '');
	monsterFloatingNumber = document.querySelector("."+monsterFloatingNumber+ " .monster-floating-number");
	monsterFloatingNumber.textContent = "-"+damage;

	monsterFloatingNumber.classList.add("active");

	statsFloatingNumber.classList.remove("active");


	if (game.stats.schematics.chainSwordModule.constructed) {
		let randomRoll = random(1,100);
		if ( randomRoll <= 10 ) {
			damage *= 2;

			monsterFloatingNumber.textContent = "-"+damage+" x2";
		}
	}

	//attack monster
	monster.hp -= damage;
	monsterHpBar.value = monster.hp;
	if (monster.hp <= 0) {
		statsFloatingNumber.classList.remove("active");

		game.stats.inCombat = false;
		monster.alive = false;
  		//award heroism and revive monster
  		game.stats.heroism += monster.heroism;
  		formatTextString(statsHeroismID, game.stats.heroism);
  		formatTextString(totalHeroismPeasent, game.stats.heroism);

  		fightMonsterSlimeID.disabled = false;
  		fightMonsterScorpionID.disabled = false;
  		fightMonsterBearID.disabled = false;
  		fightMonsterDwarvenSkeletonID.disabled = false;
  		fightMonsterGriffonID.disabled = false;
  		fightMonsterWyrmlingID.disabled = false;

  		fightMonsterDwarfKingID.disabled = false;
  		fightMonsterGoblinChieftainID.disabled = false;
  		fightMonsterDragonID.disabled = false;

  		tier1Challenge.disabled = false;
  		tier2Challenge.disabled = false;
  		tier3Challenge.disabled = false;

  		setTimeout( function() { 
  			monsterFloatingNumber.classList.remove("active");
  		}, 500);

  		if (monster.respawnRate) {

  			setTimeout(function(){
  				monster.alive = true;
  				monster.hp = monster.maxHp;
  				monsterHpBar.value = monster.maxHp;
  			}, monster.respawnRate*1000);

  		}

	}
	else{

		if (game.stats.schematics.hydraulicGauntlets.constructed) {

			let randomRoll = random(1,100);

			if ( randomRoll <= 10 ) {
				combatTimer = setTimeout( function() { combat(monster, monsterHpBar, monsterButton); }, 500);
			}
			else{
				combatTimer = setTimeout( function() { 
					combatMonster(monster, monsterHpBar, monsterButton); 
					monsterFloatingNumber.classList.remove("active");
				}, 500);			
			}

		}
		else{
			combatTimer = setTimeout( function() { 
				combatMonster(monster, monsterHpBar, monsterButton); 
				monsterFloatingNumber.classList.remove("active");
			}, 500);			
		}

	}

	formatTextString(statsHpID, game.stats.hp);
}

function combatMonster(monster, monsterHpBar, monsterButton) {
	//monster atacks back
	let enemyDamage = (monster.str - game.stats.def);
	if (enemyDamage <= 0) {
		enemyDamage = 1;
	}

	if (game.stats.schematics.enginePoweredBoots.constructed) {
		let randomRoll = random(1,100);
		if ( randomRoll <= 10 ) {
			statsFloatingNumber.textContent = "Miss!";
		}
		else{
			game.stats.hp -= enemyDamage;
			statsFloatingNumber.textContent = "-"+enemyDamage;
		}
	}
	else{
		game.stats.hp -= enemyDamage;
		statsFloatingNumber.textContent = "-"+enemyDamage;
	}


	//animation for hp number
	statsFloatingNumber.style.animation = 'none';
	statsFloatingNumber.offsetHeight; /* trigger reflow */
	statsFloatingNumber.style.animation = null;

	statsFloatingNumber.classList.add("active");

	if (game.stats.hp <= 0) {

		setTimeout( function() {
			statsFloatingNumber.classList.remove("active"); },
		500);

		game.stats.hp = 0;
		game.stats.inCombat = false;
		game.stats.alive = false;
		statsHpID.classList.add("dead");

		monsterButton.disabled = true;

	  	//NO heroism and revive monster
	  	monster.alive = true;
	  	monster.hp = monster.maxHp;
	  	monsterHpBar.value = monster.maxHp;

	}
	else {
		combatTimer = setTimeout( function() { combat(monster, monsterHpBar, monsterButton); }, 500);
	}

	formatTextString(statsHpID, game.stats.hp);
}

function regenHealth(afkCounter) {
	game.stats.regenCounter += 1 + afkCounter;
	if (game.stats.regenCounter >=2200 && !game.stats.inCombat) {
		game.stats.regenCounter = 0;

		if (game.stats.schematics.bloodTransfusionPauldrons.constructed) {
			game.stats.hp += Math.ceil(game.stats.maxHp/4);
			console.log("Regen "+Math.ceil(game.stats.maxHp/4)+" HP");
		}
		else{
			game.stats.hp += Math.ceil(game.stats.maxHp/10);
			console.log("Regen "+Math.ceil(game.stats.maxHp/10)+" HP");
		}

		if (game.stats.hp >= game.stats.maxHp) {
			game.stats.hp = game.stats.maxHp;
			game.stats.alive = true;
			statsHpID.classList.remove("dead");
			statsChallengeHpID.classList.remove("dead");

			fightMonsterSlimeID.disabled = false;
			fightMonsterScorpionID.disabled = false;
			fightMonsterBearID.disabled = false;
			fightMonsterDwarvenSkeletonID.disabled = false;
			fightMonsterGriffonID.disabled = false;
			fightMonsterWyrmlingID.disabled = false;

			fightMonsterDwarfKingID.disabled = false;
			fightMonsterGoblinChieftainID.disabled = false;
			fightMonsterDragonID.disabled = false;

			tier1Challenge.disabled = false;
			tier2Challenge.disabled = false;
			tier3Challenge.disabled = false;
		}

		formatTextString(statsHpID, game.stats.hp);
	}
}

function emblemCounter(challengeTier){

	if (game.stats.emblems.monstersSlain > challengeTier.total) {
		challengeTier.total++;
		currentEmblemsID.textContent = challengeTier.total;

		if (challengeTier == game.stats.emblems.tier_1) {
			tier1EmblemID.textContent = challengeTier.total;
		}
		if (challengeTier == game.stats.emblems.tier_2) {
			tier2EmblemID.textContent = challengeTier.total;
		}
		if (challengeTier == game.stats.emblems.tier_3) {
			tier3EmblemID.textContent = challengeTier.total;
		}

		let emblemGoldIncrease = (game.stats.emblems.tier_1.total/1000) + (game.stats.emblems.tier_2.total/500) + (game.stats.emblems.tier_3.total/100);

		allEmblemsID.textContent = game.stats.emblems.tier_1.total + game.stats.emblems.tier_2.total + game.stats.emblems.tier_3.total;

		game.goldGen = game.goldGenDefault + emblemGoldIncrease;
	}

	currentEmblemsID.textContent = challengeTier.total;

}

function resetCombat(){
	game.stats.inCombat = false;
	for (const [key, value] of Object.entries(game.monsters)) {
	  if (value.respawnRate) {
	  	value.alive = true;
	  	value.hp = value.maxHp;
	  }
	}
}

function calcCombatLevel() {
	let hp = game.stats.maxHp;
	let str = game.stats.str;
	let def = game.stats.def;

	game.stats.combatLevel = Math.floor( (hp/4)+(str/3)+(def/3) );
	formatTextString(statsCombatLevelID, game.stats.combatLevel);
};

function calcMonsterCombatLevel(monster,monsterCombatLevelClass) {
	let hp = monster.maxHp;
	let str = monster.str;
	let def = monster.def;

	monster.combatLevel = Math.floor( (hp/4)+(str/3)+(def/3) );
	formatTextString(monsterCombatLevelClass, monster.combatLevel);
};

function addStats(metal, material) {

	game.stats.str = game.stats.strBase;
	game.stats.def = game.stats.defBase;
	game.stats.maxHp = game.stats.maxHpBase;

	//runes HP
	if (game.runes.uru.total > 0) {
		game.stats.maxHp += game.runes.uru.total*5;
		game.stats.maxHp = Math.round(game.stats.maxHp);
	}
	if (game.runes.primalUru.total > 0) {
		game.stats.maxHp += game.runes.primalUru.total*20;
		game.stats.maxHp = Math.round(game.stats.maxHp);
	}


	for(let equipment in game.stats.equipment){

		if (material) {
			if (game.stats.equipment[equipment].name == material.name) {
				if (game.stats.equipment[equipment].equipedPowerLevel < metal.powerLevel) {
	
					game.stats.equipment[equipment].str = 0;
					game.stats.equipment[equipment].def = 0;
					game.stats.equipment[equipment].hp = 0;
					game.stats.equipment[equipment].equipedPowerLevel = metal.powerLevel;
	
					game.stats.equipment[equipment].str += material.stats.str;
					game.stats.equipment[equipment].def += material.stats.def;
					game.stats.equipment[equipment].hp += material.stats.hp;
	
					//game.stats.str += material.stats.str;
					//game.stats.def += material.stats.def;
	
				}
			}
		}
	
		game.stats.str += game.stats.equipment[equipment].str;
		game.stats.def += game.stats.equipment[equipment].def;
		game.stats.maxHp += game.stats.equipment[equipment].hp;

	};


	calcCombatLevel();

	formatTextString(statsHpID, game.stats.hp);
	formatTextString(statsMaxHpID, game.stats.maxHp);
	formatTextString(statsStrID, game.stats.str);
	formatTextString(statsDefID, game.stats.def);
	formatTextString(statsCombatLevelID, game.stats.combatLevel);
}