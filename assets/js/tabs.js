$(".main-tabs .tab").on( "click", function() {
  $(".main-tabs .tab").removeClass("active");
  $(this).addClass("active");

  let classList = $(this).attr("class").split(/\s+/);
  let arr = classList[1].split("-");

  $(".kingdom").removeClass("active");
  $(".kingdom.kingdom-"+arr[1]).addClass("active");

  $("html").removeClass();
  $("html").addClass("kingdom-"+arr[1]);

  $(".inner-page").removeClass("active");
  $(".inner-tabs .tab").removeClass("active");

  //default to first tab
  $(".inner-page.page-1").addClass("active");
  $(".inner-tabs .tab-1").addClass("active");

} );

$(".inner-tabs .tab").on( "click", function() {
  $(".inner-tabs .tab").removeClass("active");
  $(this).addClass("active");

  let classList = $(this).attr("class").split(/\s+/);
  let arr = classList[1].split("-");
  
  $(".inner-page").removeClass("active");
  $(".inner-page.page-"+arr[1]).addClass("active");
} );

$(".combat-btn").on( "click", function() {
  $(".stats-tab").removeClass("active");
  $(".combat-tab").toggleClass("active");
} );

$(".combat-tab-inner .close").on( "click", function() {
  $(".combat-tab").toggleClass("active");
} );

$(".armory-card .next").on( "click", function() {
  game.armoryTab++;
  $(".armory-card").removeClass("active");
  $(".armory-card.armory-card-"+game.armoryTab).addClass("active");
} );
$(".armory-card .prev").on( "click", function() {
  game.armoryTab--;
  $(".armory-card").removeClass("active");
  $(".armory-card.armory-card-"+game.armoryTab).addClass("active");
} );

//reveal tabs
function tabReveal() {

  //units
  if (game.gold >= game.peasents.cost && !game.peasents.unlocked) {
      game.peasents.unlocked = true;
      peasentCard.classList.remove("hidden");
  }
  if (game.gold >= game.scholars.unlockCost && !game.scholars.unlocked) {
      game.scholars.unlockCard = true;
      scholarUnlock.disabled = false;
      scholarUnlockCard.classList.remove("hidden");
  }
  else{
    scholarUnlock.disabled = true;
  }
  if (game.gold >= game.blacksmiths.unlockCost && !game.blacksmiths.unlocked) {
    game.blacksmiths.unlockCard = true;
    blacksmithUnlock.disabled = false;
    blacksmithUnlockCard.classList.remove("hidden");
  }
  else{
    blacksmithUnlock.disabled = true;
  }
  if (game.gold >= game.lapidaries.unlockCost && !game.lapidaries.unlocked) {
    game.lapidaries.unlockCard = true;
    lapidaryUnlock.disabled = false;
    lapidaryUnlockCard.classList.remove("hidden");
  }
  else{
    lapidaryUnlock.disabled = true;
  }
  if (game.gold >= game.miners.unlockCost && !game.miners.unlocked) {
    game.miners.unlockCard = true;
    minerUnlock.disabled = false;
    minerUnlockCard.classList.remove("hidden");
  }
  else{
    minerUnlock.disabled = true;
  }
  if (game.gold >= game.brewmasters.unlockCost && !game.brewmasters.unlocked) {
    game.brewmasters.unlockCard = true;
    brewmasterUnlock.disabled = false;
    brewmasterUnlockCard.classList.remove("hidden");
  }
  else{
    brewmasterUnlock.disabled = true;
  }
  if (game.gold >= game.goblins.unlockCost && !game.goblins.unlocked) {
    game.goblins.unlockCard = true;
    goblinUnlock.disabled = false;
    goblinUnlockCard.classList.remove("hidden");
  }
  else{
    goblinUnlock.disabled = true;
  }
  if (game.gold >= game.mechanics.unlockCost && !game.mechanics.unlocked) {
    game.mechanics.unlockCard = true;
    mechanicUnlock.disabled = false;
    mechanicUnlockCard.classList.remove("hidden");
  }
  else{
    mechanicUnlock.disabled = true;
  }

  if (game.stats.heroism > 0) {
    totalHeroismPlus.classList.remove("hidden");
  }

  //runes
  if (game.runes.runicPower >= game.upgrades.scholars.autoInfuseCost || game.upgrades.scholars.unlockAutoInfuse) {
    game.upgrades.scholars.unlockAutoInfuse = true;
    $(".auto-infuse").removeClass("hidden");
  }

  //peasents max & auto
  if (game.upgrades.peasents.maxUpgradeCost <= game.gold) {
    $(peasentBuyMAX).removeClass("hidden");
  }
  if (game.upgrades.peasents.autoMaxUpgradeCost <= game.gold) {
    $(peasentBuyMAXauto).removeClass("hidden");
  }
  if (game.upgrades.peasents.maxEffUpgradeCost <= game.gold) {
    $(increasePeasentEfficiencyMAX).removeClass("hidden");
  }
  if (game.upgrades.peasents.autoMaxEffUpgradeCost <= game.gold) {
    $(increasePeasentEfficiencyMAXauto).removeClass("hidden");
  }

  //scholars max & auto
  if (game.upgrades.scholars.maxUpgradeCost <= game.gold) {
    $(scholarBuyMAX).removeClass("hidden");
  }
  if (game.upgrades.scholars.autoMaxUpgradeCost <= game.gold) {
    $(scholarBuyMAXauto).removeClass("hidden");
  }

  //blacksmiths max & auto
  if (game.upgrades.blacksmiths.maxUpgradeCost <= game.gold) {
    $(blacksmithBuyMAX).removeClass("hidden");
  }
  if (game.upgrades.blacksmiths.autoMaxUpgradeCost <= game.gold) {
    $(blacksmithBuyMAXauto).removeClass("hidden");
  }
  if (game.upgrades.blacksmiths.maxEffUpgradeCost <= game.gold) {
    $(increaseBlacksmithEfficiencyMAX).removeClass("hidden");
  }
  if (game.upgrades.blacksmiths.autoMaxEffUpgradeCost <= game.gold) {
    $(increaseBlacksmithEfficiencyMAXauto).removeClass("hidden");
  }
  if (game.blacksmiths.relicCost <= game.metals.bronze.total || game.metals.bronze.relics.total > 0) {
    $(".bronze-relic").removeClass("hidden");
  }

  //lapidaries max & auto
  if (game.upgrades.lapidaries.maxUpgradeCost <= game.gold) {
    $(lapidaryBuyMAX).removeClass("hidden");
  }
  if (game.upgrades.lapidaries.autoMaxUpgradeCost <= game.gold) {
    $(lapidaryBuyMAXauto).removeClass("hidden");
  }
  //miners max & auto
  if (game.upgrades.miners.maxUpgradeCost <= game.gold) {
    $(minerBuyMAX).removeClass("hidden");
  }
  if (game.upgrades.miners.autoMaxUpgradeCost <= game.gold) {
    $(minerBuyMAXauto).removeClass("hidden");
  }
  //brewmasters max & auto
  if (game.upgrades.brewmasters.maxUpgradeCost <= game.gold) {
    $(brewmasterBuyMAX).removeClass("hidden");
  }
  if (game.upgrades.brewmasters.autoMaxUpgradeCost <= game.gold) {
    $(brewmasterBuyMAXauto).removeClass("hidden");
  }
  //goblins max & auto
  if (game.upgrades.goblins.maxUpgradeCost <= game.gold) {
    $(goblinBuyMAX).removeClass("hidden");
  }
  if (game.upgrades.goblins.autoMaxUpgradeCost <= game.gold) {
    $(goblinBuyMAXauto).removeClass("hidden");
  }
  //mechanics max & auto
  if (game.upgrades.mechanics.maxUpgradeCost <= game.gold) {
    $(mechanicBuyMAX).removeClass("hidden");
  }
  if (game.upgrades.mechanics.autoMaxUpgradeCost <= game.gold) {
    $(mechanicBuyMAXauto).removeClass("hidden");
  }

  //counters
  if (game.peasents.total >= 1 && $(".total-peasents-counter").hasClass("hidden")) {
    $(".total-peasents-counter").removeClass("hidden");
  }
  if (game.scholars.total >= 1 && $(".total-scholars-counter").hasClass("hidden")) {
    $(".total-scholars-counter").removeClass("hidden");
    $(".total-runic-power-counter").removeClass("hidden");
    $(".total-runic-power-per-sec").removeClass("hidden");
  }
  if (game.runes.maan.total >= 1) {
    $(".total-maan-runes-counter").removeClass("hidden");
  }
  if (game.runes.nyd.total >= 1) {
    $(".total-nyd-runes-counter").removeClass("hidden");
  }
  if (game.runes.uru.total >= 1) {
    $(".total-uru-runes-counter").removeClass("hidden");
  }
  if (game.blacksmiths.total >= 1 && $(".total-blacksmiths-counter").hasClass("hidden")) {
    $(".total-blacksmiths-counter").removeClass("hidden");
    $(".total-bronze-counter").removeClass("hidden");
  }
  if (game.metals.bronze.relics.total >= 1) {
    $(".total-relics-counter").removeClass("hidden");
  }
  if (game.miners.total >= 1) {
    $(".total-miners-counter").removeClass("hidden");
    $(".total-ore-counter").removeClass("hidden");
  }
  if (game.metals.iron.total >= 1) {
    $(".total-iron-counter").removeClass("hidden");
  }
  if (game.metals.mythril.total >= 1) {
    $(".total-mythril-counter").removeClass("hidden");
  }
  if (game.metals.adamant.total >= 1) {
    $(".total-adamant-counter").removeClass("hidden");
  }
  if (game.metals.titanium.total >= 1) {
    $(".total-titanium-counter").removeClass("hidden");
  }
  if (game.lapidaries.gems.total >= 1) {
    $(".total-gems-counter").removeClass("hidden");
  }
  if (game.lapidaries.total >= 1) {
    $(".total-lapidaries-counter").removeClass("hidden");
  }
  if (game.brewmasters.total >= 1) {
    $(".total-brewmasters-counter").removeClass("hidden");
  }

  if (game.goblins.total >= 1) {
    $(".total-goblins-counter").removeClass("hidden");
  }

  if (game.runes.primalMaan.total >= 1) {
    $(".total-primal-maan-runes-counter").removeClass("hidden");
  }
  if (game.runes.primalNyd.total >= 1) {
    $(".total-primal-nyd-runes-counter").removeClass("hidden");
  }
  if (game.runes.primalUru.total >= 1) {
    $(".total-primal-uru-runes-counter").removeClass("hidden");
  }

  if (game.mechanics.total >= 1) {
    $(".total-mechanics-counter").removeClass("hidden");
  }
  if (game.knowledge.total >= 1) {
    $(".total-knowledge-counter").removeClass("hidden");
  }
  //kingdoms
  if (!game.monsters.dwarfKing.alive && $(".kingdom-2").hasClass("hidden") ) {
    $(".main-tabs .tab-2").removeClass("hidden");
    $(".kingdom-2").removeClass("hidden");
    $(".dwarf-kingdom-monsters").removeClass("hidden");
    $(".boss-monster.dwarfking").addClass("hidden");

    popUpText("Dwarf Kingdom Unlocked");
  }
  else if (game.stats.heroism >= 100) {
    $(".boss-monster-overlay.dwarfking-overlay").addClass("hidden");

    if ($(".kingdom-2").hasClass("hidden"))  {
      $(".boss-monster.dwarfking").removeClass("hidden");
    }

  }

  if (!game.monsters.goblinChieftain.alive && $(".kingdom-3").hasClass("hidden") ) {
    $(".main-tabs .tab-3").removeClass("hidden");
    $(".kingdom-3").removeClass("hidden");
    $(".goblin-kingdom-monsters").removeClass("hidden");
    $(".boss-monster.goblinchieftain").addClass("hidden");

    popUpText("Goblin Kingdom Unlocked");
  }
  else if (game.stats.heroism >= 1500) {
    $(".boss-monster-overlay.goblinchieftain-overlay").addClass("hidden");

    if($(".kingdom-3").hasClass("hidden")){
      $(".boss-monster.goblinchieftain").removeClass("hidden");
    }
  }

  if (!game.monsters.dragon.alive) {
    $(".boss-monster.dragon").addClass("hidden");
    $("#phase-1 .text-window").removeClass("hidden");

  }
  else if (game.stats.heroism >= 5000) {
    $(".boss-monster-overlay.dragon-overlay").addClass("hidden");
    $(".boss-monster.dragon").removeClass("hidden");
  }

}