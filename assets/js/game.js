let game = {
  //realtime tracker
  counter: 0,
  realTimeSecs: 0,
  realTimeMins: 0,
  realTimeHours: 0,
  resetCounter: 5,

  win: false,
  //clock rate
  gameClock: 100,
  updateRate: 100,
  //main currency
  gold: 1,
  goldGen: 0.02,
  goldGenDefault: 0.02,
  runicGenDefault: 0.01,
  metalsGenDefault: 0.01,

  armoryTab: 1,
  //stats
  stats:{
    hp: 5,
    maxHp: 5,
    challengeHp: 0,
    challengeMaxHp: 0,
    maxHpBase: 5,
    str: 1,
    strBase: 1,
    challengeStr: 0,
    def: 0,
    challengeDef: 0,
    defBase: 0,
    heroism: 0,
    emblems:{
      tier_1:{
        total: 0,
      },
      tier_2:{
        total: 0,
      },
      tier_3:{
        total: 0,
      },
      monstersSlain: 0,
    },
    combatLevel: 1,
    challengeCombatLevel: 0,
    inCombat: false,
    alive: true,
    regenCounter: 0,
    equipment:{
      greaves:{
        name:"greaves",
        equipedPowerLevel:0,
        def: 0,
        str: 0,
        hp: 0,
      },
      legs:{
        name:"legs",
        equipedPowerLevel:0,
        def: 0,
        str: 0,
        hp: 0,
      },
      gauntlets:{
        name:"gauntlets",
        equipedPowerLevel:0,
        def: 0,
        str: 0,
        hp: 0,
      },
      plate:{
        name:"plate",
        equipedPowerLevel:0,
        def: 0,
        str: 0,
        hp: 0,
      },
      helm:{
        name:"helm",
        equipedPowerLevel:0,
        def: 0,
        str: 0,
        hp: 0,
      },
      pauldrons:{
        name:"pauldrons",
        equipedPowerLevel:0,
        def: 0,
        str: 0,
        hp: 0,
      },
      sword:{
        name:"sword",
        equipedPowerLevel:0,
        def: 0,
        str: 0,
        hp: 0,
      },
      shield:{
        name:"shield",
        equipedPowerLevel:0,
        def: 0,
        str: 0,
        hp: 0,
      },
    },
    schematics:{
      hydraulicGauntlets: {
        constructed: false,
        goblinCost: 50,
        oreCost: 100000000000,
        knowledgeCost: 1000000,
      },
      chainSwordModule: {
        constructed: false,
        goblinCost: 50,
        oreCost: 100000000000,
        knowledgeCost: 1000000,
      },
      enginePoweredBoots: {
        constructed: false,
        goblinCost: 50,
        oreCost: 100000000000,
        knowledgeCost: 1000000,
      },
      bloodTransfusionPauldrons: {
        constructed: false,
        goblinCost: 50,
        oreCost: 100000000000,
        knowledgeCost: 1000000,
      },
    },
  },

  //monsters & enemies
  monsters:{
    slime:{
      name: "Slime",
      hp: 3,
      maxHp: 3,
      str: 1,
      def: -1,
      combatLevel: 0,
      heroism: 1,
      alive: true,
      respawnRate: 3,
    },
    scorpion:{
      name: "Scorpion",
      hp: 6,
      maxHp: 6,
      str: 2,
      def: 2,
      combatLevel: 0,
      heroism: 8,
      alive: true,
      respawnRate: 15,
    },
    bear:{
      name: "Bear",
      hp: 25,
      maxHp: 25,
      str: 6,
      def: 2,
      combatLevel: 0,
      heroism: 24,
      alive: true,
      respawnRate: 40,
    },
    dwarvenSkeleton:{
      name: "Dwarven Skeleton",
      hp: 60,
      maxHp: 60,
      str: 17,
      def: 5,
      combatLevel: 0,
      heroism: 40,
      alive: true,
      respawnRate: 90,
    },
    griffon:{
      name: "Griffon",
      hp: 140,
      maxHp: 140,
      str: 63,
      def: 9,
      combatLevel: 0,
      heroism: 80,
      alive: true,
      respawnRate: 150,
    },
    //work on stats
    wyrmling:{
      name: "Wyrmling",
      hp: 200,
      maxHp: 200,
      str: 75,
      def: 18,
      combatLevel: 0,
      heroism: 160,
      alive: true,
      respawnRate: 180,
    },

    //challenge monsters
    giantLizard:{
      name: "Giant Lizard",
      hp: 55,
      maxHp: 55,
      str: 20,
      def: 5,
      combatLevel: 0,
      heroism: 0,
      alive: true,
      respawnRate: 1,
    },
    werewolf:{
      name: "Werewolf",
      hp: 80,
      maxHp: 80,
      str: 36,
      def: 8,
      combatLevel: 0,
      heroism: 0,
      alive: true,
      respawnRate: 1,
    },
    wyvern:{
      name: "Wyvern",
      hp: 92,
      maxHp: 92,
      str: 48,
      def: 12,
      combatLevel: 0,
      heroism: 0,
      alive: true,
      respawnRate: 1,
    },

    //bosses
    dwarfKing:{
      name: "Dwarf King",
      hp: 14,
      maxHp: 14,
      str: 11,
      def: 2,
      combatLevel: 0,
      heroism: 0,
      alive: true,
      respawnRate: false,
    },
    goblinChieftain:{
      name: "Goblin Chieftain",
      hp: 170,
      maxHp: 170,
      str: 50,
      def: 7,
      combatLevel: 0,
      heroism: 0,
      alive: true,
      respawnRate: false,
    },
    dragon:{
      name: "Dragon",
      hp: 1500,
      maxHp: 1500,
      str: 300,
      def: 100,
      combatLevel: 0,
      heroism: 0,
      alive: true,
      respawnRate: false,
    },

  },

  //units & costs
  peasents: {

    total: 0,
    cost: 1,

    efficiency: 1,
    efficiencyMult: 1.20,

    efficiencyCost: 200,
    efficiencyCostMult: 1.05,

    costMult: 1.05,
    autoBuy: false,
    efficiencyAutoBuy: false,

    unlocked: false,
  },
  scholars: {

    total: 0,
    cost: 11000,

    efficiency: 1,

    costMult: 1.05,
    autoBuy: false,

    unlocked: false,
    unlockCard: false,
    unlockCost: 5500,
  },

  blacksmiths: {
    
    total: 0,
    cost: 3500000,

    efficiency: 1,
    efficiencyMult: 0.40,

    efficiencyCost: 4300000,
    efficiencyCostMult: 1.15,

    costMult: 1.20,
    autoBuy: false,

    efficiencyAutoBuy: false,

    relicCost: 1000000,
    relicCostMult: 1.25,

    unlocked: false,
    unlockCard: false,
    unlockCost: 1750000,
  },

  lapidaries: {
    
    gems: {
      total:0,
    },

    total: 0,
    cost: 130000000,
    costMult: 1.32,

    efficiency: 1,
    efficiencyMult: 0.40,

    autoBuy: false,

    unlocked: false,
    unlockCard: false,
    unlockCost: 100000000,
  },

  miners: {
    
    total: 0,
    cost: 400000000000,
    costMult: 1.10,

    efficiency: 1,
    efficiencyMult: 0.40,

    autoBuy: false,

    unlocked: false,
    unlockCard: false,
    unlockCost: 200000000000,
  },

  brewmasters: {

    total: 0,
    cost: 100000000000000,
    costMult: 1.10,

    efficiency: 1.25,

    autoBuy: false,

    unlocked: false,
    unlockCard: false,
    unlockCost: 50000000000000,
  },

  goblins: {

    total: 0,
    cost: 100000000000000000,
    costMult: 1.03,

    efficiency: 1.07,
    efficiencyMult: 0.40,

    selection: null,

    autoBuy: false,

    unlocked: false,
    unlockCard: false,
    unlockCost: 50000000000000000,
  },

  mechanics: {

    total: 0,
    cost: 100000000000000000000000,
    costMult: 1.33,

    efficiency: 1.07,
    efficiencyMult: 0.40,

    autoBuy: false,

    unlocked: false,
    unlockCard: false,
    unlockCost: 50000000000000000000000,
  },

  //runes
  runes:{
    runicPower: 0,
    maan:{
      total: 0,
      infusion: 0,
      maxInfusion: 200,
      maxInfusionMult: 1.13,
      autoInfuse: false,
      name:"Maan",
    },
    nyd:{
      total: 0,
      infusion: 0,
      maxInfusion: 6000,
      maxInfusionMult: 1.20,
      autoInfuse: false,
      name:"Nyd",
    },
    uru:{
      total: 0,
      infusion: 0,
      maxInfusion: 800000,
      maxInfusionMult: 1.27,
      autoInfuse: false,
      name:"Uru",
    },
    //primal
    primalMaan:{
      total: 0,
      mult: 4.5,
      runeCost: 2,
      runeCostMult: 1,
      goblinCost: 2,
      goblinCostMult: 1.1,
      autoCreate: false,
      name:"Primal Maan",
    },
    primalNyd:{
      total: 0,
      mult: 5,
      runeCost: 2,
      runeCostMult: 1,
      goblinCost: 6,
      goblinCostMult: 1.1,
      autoCreate: false,
      name:"Primal Nyd",
    },
    primalUru:{
      total: 0,
      mult: 6.2,
      runeCost: 2,
      runeCostMult: 1,
      goblinCost: 9,
      goblinCostMult: 1.1,
      autoCreate: false,
      name:"Primal Uru",
    },
  },

  //metals
  metals:{
    ore: {
      total: 0,
    },
    bronze: {
      name:"bronze",
      powerLevel: 1,
      total: 0,
      relics:{
        total: 0,
      }
    },
    iron: {
      name:"iron",
      powerLevel: 2,
      smelting: false,
      total: 0,
      smeltingProgress: 0,
      output: 5,
      outputCost: 100000000000,
      outputCostMult: 1.20,
      tickRate: 80,
    },
    mythril: {
      name:"mythril",
      powerLevel: 3,
      smelting: false,
      total: 0,
      smeltingProgress: 0,
      output: 5,
      outputCost: 2000000000000,
      outputCostMult: 1.20,
      tickRate: 160,
    },
    adamant: {
      powerLevel: 4,
      name:"adamant",
      smelting: false,
      total: 0,
      smeltingProgress: 0,
      output: 5,
      outputCost: 30000000000000,
      outputCostMult: 1.20,
      tickRate: 220,
    },
    titanium: {
      powerLevel: 5,
      name:"titanium",
      smelting: false,
      total: 0,
      smeltingProgress: 0,
      output: 5,
      outputCost: 600000000000000,
      outputCostMult: 1.20,
      tickRate: 300,
    },
  },

  //armor
  armor:{

    bronze:{
      greaves:{
        name:"greaves",
        forged: false,
        cost: 35000,
        stats:{
          hp: 1,
          str:0,
          def:1,
        },
      },
      legs:{
        name:"legs",
        forged: false,
        cost: 35000,
        stats:{
          hp: 0,
          str:0,
          def:2,
        },
      },
      gauntlets:{
        name:"gauntlets",
        forged: false,
        cost: 50000,
        stats:{
          hp: 0,
          str:1,
          def:1,
        },
      },
      plate:{
        name:"plate",
        forged: false,
        cost: 100000,
        stats:{
          hp: 0,
          str:0,
          def:3,
        },
      },
      helm:{
        name:"helm",
        forged: false,
        cost: 45000,
        stats:{
          hp: 1,
          str:0,
          def:1,
        },
      },
      pauldrons:{
        name:"pauldrons",
        forged: false,
        cost: 45000,
        stats:{
          hp: 1,
          str:0,
          def:1,
        },
      },
      sword:{
        name:"sword",
        forged: false,
        cost: 100000,
        stats:{
          hp: 0,
          str:3,
          def:0,
        },
      },
      shield:{
        name:"shield",
        forged: false,
        cost: 100000,
        stats:{
          hp: 1,
          str:0,
          def:3,
        },
      },
    },    
    iron:{
      greaves:{
        name:"greaves",
        forged: false,
        cost: 35000,
        stats:{
          hp: 2,
          str:0,
          def:3,
        },
      },
      legs:{
        name:"legs",
        forged: false,
        cost: 35000,
        stats:{
          hp: 0,
          str:1,
          def:4,
        },
      },
      gauntlets:{
        name:"gauntlets",
        forged: false,
        cost: 40000,
        stats:{
          hp: 0,
          str:1,
          def:2,
        },
      },
      plate:{
        name:"plate",
        forged: false,
        cost: 75000,
        stats:{
          hp: 2,
          str:0,
          def:7,
        },
      },
      helm:{
        name:"helm",
        forged: false,
        cost: 35000,
        stats:{
          hp: 1,
          str:2,
          def:2,
        },
      },
      pauldrons:{
        name:"pauldrons",
        forged: false,
        cost: 35000,
        stats:{
          hp: 1,
          str:0,
          def:4,
        },
      },
      sword:{
        name:"sword",
        forged: false,
        cost: 130000,
        stats:{
          hp: 1,
          str:8,
          def:1,
        },
      },
      shield:{
        name:"shield",
        forged: false,
        cost: 110000,
        stats:{
          hp: 2,
          str:0,
          def:7,
        },
      },
    },    
    mythril:{
      greaves:{
        name:"greaves",
        forged: false,
        cost: 35000,
        stats:{
          hp: 5,
          str:0,
          def:12,
        },
      },
      legs:{
        name:"legs",
        forged: false,
        cost: 35000,
        stats:{
          hp: 0,
          str:3,
          def:16,
        },
      },
      gauntlets:{
        name:"gauntlets",
        forged: false,
        cost: 40000,
        stats:{
          hp: 0,
          str:7,
          def:15,
        },
      },
      plate:{
        name:"plate",
        forged: false,
        cost: 75000,
        stats:{
          hp: 0,
          str:0,
          def:18,
        },
      },
      helm:{
        name:"helm",
        forged: false,
        cost: 35000,
        stats:{
          hp: 7,
          str:4,
          def:10,
        },
      },
      pauldrons:{
        name:"pauldrons",
        forged: false,
        cost: 35000,
        stats:{
          hp: 4,
          str:0,
          def:12,
        },
      },
      sword:{
        name:"sword",
        forged: false,
        cost: 130000,
        stats:{
          hp: 5,
          str:18,
          def:0,
        },
      },
      shield:{
        name:"shield",
        forged: false,
        cost: 110000,
        stats:{
          hp: 9,
          str:0,
          def:20,
        },
      },
    },    
    adamant:{
      greaves:{
        name:"greaves",
        forged: false,
        cost: 35000,
        stats:{
          hp: 35,
          str:0,
          def:50,
        },
      },
      legs:{
        name:"legs",
        forged: false,
        cost: 35000,
        stats:{
          hp: 0,
          str:12,
          def:58,
        },
      },
      gauntlets:{
        name:"gauntlets",
        forged: false,
        cost: 40000,
        stats:{
          hp: 0,
          str:29,
          def:46,
        },
      },
      plate:{
        name:"plate",
        forged: false,
        cost: 75000,
        stats:{
          hp: 0,
          str:0,
          def:65,
        },
      },
      helm:{
        name:"helm",
        forged: false,
        cost: 35000,
        stats:{
          hp: 30,
          str:25,
          def:25,
        },
      },
      pauldrons:{
        name:"pauldrons",
        forged: false,
        cost: 35000,
        stats:{
          hp: 26,
          str:0,
          def:52,
        },
      },
      sword:{
        name:"sword",
        forged: false,
        cost: 130000,
        stats:{
          hp: 12,
          str:74,
          def:8,
        },
      },
      shield:{
        name:"shield",
        forged: false,
        cost: 110000,
        stats:{
          hp: 25,
          str:0,
          def:66,
        },
      },
    },    
    titanium:{
      greaves:{
        name:"greaves",
        forged: false,
        cost: 35000,
        stats:{
          hp: 60,
          str:0,
          def:85,
        },
      },
      legs:{
        name:"legs",
        forged: false,
        cost: 35000,
        stats:{
          hp: 0,
          str:40,
          def:90,
        },
      },
      gauntlets:{
        name:"gauntlets",
        forged: false,
        cost: 40000,
        stats:{
          hp: 0,
          str:65,
          def:82,
        },
      },
      plate:{
        name:"plate",
        forged: false,
        cost: 75000,
        stats:{
          hp: 0,
          str:0,
          def:99,
        },
      },
      helm:{
        name:"helm",
        forged: false,
        cost: 35000,
        stats:{
          hp: 70,
          str:45,
          def:50,
        },
      },
      pauldrons:{
        name:"pauldrons",
        forged: false,
        cost: 35000,
        stats:{
          hp: 70,
          str:0,
          def:86,
        },
      },
      sword:{
        name:"sword",
        forged: false,
        cost: 130000,
        stats:{
          hp: 34,
          str:99,
          def:14,
        },
      },
      shield:{
        name:"shield",
        forged: false,
        cost: 110000,
        stats:{
          hp: 70,
          str:0,
          def:120,
        },
      },
    },
  },

  //knowledge
  knowledge:{
    total: 0,
  },

  //upgrades
  upgrades: {
    peasents:{
      maxUpgradeCost: 100000,
      autoMaxUpgradeCost: 100000000,

      maxEffUpgradeCost: 100000,
      autoMaxEffUpgradeCost: 100000000,
    },
    scholars:{
      maxUpgradeCost: 50000000,
      autoMaxUpgradeCost: 1000000000,
      //unlock runes
      unlockNyd: false,
      unlockNydCost: 1000000,
      unlockUru: false,
      unlockUruCost: 1000000000,
      autoInfuseCost: 500000000,
      unlockAutoInfuse: false,
    },
    blacksmiths:{
      maxUpgradeCost: 5000000000000,
      autoMaxUpgradeCost: 500000000000000,

      maxEffUpgradeCost: 5000000000000000,
      autoMaxEffUpgradeCost: 500000000000000000,
    },
    lapidaries:{
      maxUpgradeCost: 1000000000000000,
      autoMaxUpgradeCost: 100000000000000000,
    },
    miners:{

      maxUpgradeCost: 50000000000000000,
      autoMaxUpgradeCost: 5000000000000000000,

      forge:{
        ironSmelterOreCost: 10,
        mythrilSmelterOreCost: 1000,
        mythrilSmelterIronCost: 5,
        adamantSmelterOreCost: 40000,
        adamantSmelterMythrilCost: 5,
        titaniumSmelterOreCost: 800000000,
        titaniumSmelterAdamantCost: 5,
      },

    },

    brewmasters:{
      maxUpgradeCost: 100000000000000000,
      autoMaxUpgradeCost: 10000000000000000000,
    },

    goblins:{
      maxUpgradeCost: 500000000000000000000,
      autoMaxUpgradeCost: 50000000000000000000000,
    },

    mechanics:{
      maxUpgradeCost: 50000000000000000000000,
      autoMaxUpgradeCost: 5000000000000000000000000,
    },

  },

  phase2:{
    active: false,
    conquering: false,
    conqueringPercent: 0,

    troopRegen: false,
    troopRegenCounter: 0,

    troopCounter: 0,
    portalCounter: 200,
    demonArtifactCounter: 0,
    demonSoulCounter: 0,

    isConqueringFortress: false,

    resources:{
      troops: 50,
      troopsEfficiency: 1,
      troopsEfficiencyCost: 5,
      portals: 0,
      portalsCost: 1,
      portalsEfficiency: 1,
      portalsEfficiencyCost: 5,
      demonArtifacts: 0,
      demonSouls: 0,
      demonSoulsCost: 8,
      totalHellConquered: 1,
      facesDestroyed: 0,
    },

    prevLocation: [0,0],
    location: [0,0],

    specialLocations:{
      headquarters: [0,0],
      fortress_1: [1,6],
      fortress_2: [6,4],
      fortress_3: [8,8],
    },

    map:[
      ['conquered headquarters','unconquered','unconquered','unconquered','unconquered','unconquered hell-stronghold','unconquered hell-stronghold','unconquered hell-stronghold','unconquered','unconquered'],
      ['unconquered','unconquered','unconquered','unconquered','unconquered','unconquered hell-stronghold','unconquered fortress','unconquered hell-stronghold','unconquered','unconquered'],
      ['unconquered','unconquered','unconquered','unconquered','unconquered','unconquered hell-stronghold','unconquered hell-stronghold','unconquered hell-stronghold','unconquered','unconquered'],
      ['unconquered','unconquered','unconquered','unconquered','unconquered','unconquered','unconquered','unconquered','unconquered','unconquered'],
      ['unconquered','unconquered','unconquered','unconquered','unconquered','unconquered','unconquered','unconquered','unconquered','unconquered'],
      ['unconquered','unconquered','unconquered','unconquered hell-stronghold','unconquered hell-stronghold','unconquered hell-stronghold','unconquered','unconquered','unconquered','unconquered'],
      ['unconquered','unconquered','unconquered','unconquered hell-stronghold','unconquered fortress','unconquered hell-stronghold','unconquered','unconquered','unconquered','unconquered'],
      ['unconquered','unconquered','unconquered','unconquered hell-stronghold','unconquered hell-stronghold','unconquered hell-stronghold','unconquered','unconquered hell-stronghold','unconquered hell-stronghold','unconquered hell-stronghold'],
      ['unconquered','unconquered','unconquered','unconquered','unconquered','unconquered','unconquered','unconquered hell-stronghold','unconquered fortress','unconquered hell-stronghold'],
      ['unconquered','unconquered','unconquered','unconquered','unconquered','unconquered','unconquered','unconquered hell-stronghold','unconquered hell-stronghold','unconquered hell-stronghold'],
    ],
    text:[],

  },
}

let totalGoldID = document.querySelector("#total-gold");
let goldPerSecID = document.querySelector(".gold-per-sec");
let runicPowerPerSecID = document.querySelector(".runic-power-per-sec");

let resourcesCard = document.querySelector(".resources");
let peasentCard = document.querySelector(".peasent");
let scholarCard = document.querySelector(".scholar");
let scholarUnlockCard = document.querySelector(".unit-card.scholar-unlock");
let blacksmithCard = document.querySelector(".blacksmith");
let blacksmithUnlockCard = document.querySelector(".unit-card.blacksmith-unlock");
let lapidaryCard = document.querySelector(".dwarven-lapidary");
let lapidaryUnlockCard = document.querySelector(".unit-card.lapidary-unlock");
let minerCard = document.querySelector(".dwarven-miner");
let minerUnlockCard = document.querySelector(".unit-card.miner-unlock");
let brewmasterCard = document.querySelector(".dwarven-brewmaster");
let brewmasterUnlockCard = document.querySelector(".unit-card.brewmaster-unlock");
let goblinCard = document.querySelector(".goblin");
let goblinUnlockCard = document.querySelector(".unit-card.goblin-unlock");
let mechanicCard = document.querySelector(".mechanic");
let mechanicUnlockCard = document.querySelector(".unit-card.mechanic-unlock");

let totalSecs = document.querySelector(".total-secs");
let totalMins = document.querySelector(".total-mins");
let totalHours = document.querySelector(".total-hours");


function addGems(afkCounter){
 	afkCounter = afkCounter || 1;

  let goblinMultiplier = 1;
  if (game.goblins.total != 0 && game.goblins.selection == "Lapidaries") {
    goblinMultiplier = (game.goblins.total * game.goblins.efficiency);
    
    if (game.runes.primalMaan.total != 0) {
      goblinMultiplier = (game.goblins.total * game.goblins.efficiency) * (game.runes.primalMaan.total * game.runes.primalMaan.mult);
    }
    if (game.runes.primalNyd.total != 0) {
      goblinMultiplier = (game.goblins.total * game.goblins.efficiency) * (game.runes.primalNyd.total * game.runes.primalNyd.mult);
    }
    if (game.runes.primalUru.total != 0) {
      goblinMultiplier = (game.goblins.total * game.goblins.efficiency) * (game.runes.primalUru.total * game.runes.primalUru.mult);
    }
    
    formatTextToFixedTwoDecimals(goblinAssistMultID, goblinMultiplier);
  }

  let brewmasterMultiplier = 1;
  if (game.brewmasters.total != 0) {
    brewmasterMultiplier = (game.brewmasters.total * game.brewmasters.efficiency);
    formatTextString(brewmasterEfficiencyID, brewmasterMultiplier*100);
  }

  let ADDlapidaries = ( ( game.lapidaries.total* (brewmasterMultiplier) ) * game.metalsGenDefault )* goblinMultiplier;

  game.lapidaries.gems.total += (ADDlapidaries)* afkCounter;

  let lapidaryGemsPerSec =
  (
    (
      ADDlapidaries
    )
  *100
  );


  formatTextToFixed(lapidaryGemsPerSecID, lapidaryGemsPerSec);

}

function addGold(afkCounter){
  afkCounter = afkCounter || 1;

  //runes
  let runeMultiplier = 1;
  if (game.runes.maan.total != 0) {
    runeMultiplier = runeMultiplier * ( game.runes.maan.total + 1 );
  }
  if (game.runes.primalMaan.total != 0) {
    runeMultiplier = runeMultiplier * ( game.runes.primalMaan.total * game.runes.primalMaan.mult + 1);
  }

  //gems
  let gemsMultiplier = 1;
  if (game.lapidaries.gems.total != 0) {
    // divided by 0.8 might be upgradeable?
    gemsMultiplier = gemsMultiplier * ( (game.lapidaries.gems.total/0.8) + 1 );
  }

  //goblins
  let goblinMultiplier = 1;
  if (game.goblins.total != 0 && game.goblins.selection == "Peasents") {
    goblinMultiplier = (game.goblins.total * game.goblins.efficiency);
    
    if (game.runes.primalMaan.total != 0) {
      goblinMultiplier = (game.goblins.total * game.goblins.efficiency) * (game.runes.primalMaan.total * game.runes.primalMaan.mult);
    }
    if (game.runes.primalNyd.total != 0) {
      goblinMultiplier = (game.goblins.total * game.goblins.efficiency) * (game.runes.primalNyd.total * game.runes.primalNyd.mult);
    }
    if (game.runes.primalUru.total != 0) {
      goblinMultiplier = (game.goblins.total * game.goblins.efficiency) * (game.runes.primalUru.total * game.runes.primalUru.mult);
    }
    
    formatTextToFixedTwoDecimals(goblinAssistMultID, goblinMultiplier);
  }

  let peasentMultiplier = game.goldGen * game.peasents.efficiency * runeMultiplier * gemsMultiplier;

  let ADDpeasents = ( (game.peasents.total + game.stats.heroism) * (peasentMultiplier) ) * goblinMultiplier;

  game.gold += (ADDpeasents)* afkCounter;

  let goldPerSec =
  (
    (
      ADDpeasents
    )
  *100
  );


  let peasentGoldPerSec =
  (
    (
      ADDpeasents
    )
  *100
  );

  formatTextToFixed(goldPerSecID, goldPerSec);
  formatTextToFixed(peasentGoldPerSecID, peasentGoldPerSec);

}

function addRunicPower(afkCounter){
  afkCounter = afkCounter || 1;

  //relics
  let relicMultiplier = 1;
  if (game.metals.bronze.relics.total != 0) {
    relicMultiplier = relicMultiplier * ( game.metals.bronze.relics.total + 1 );
  }

  //runes
  let runeMultiplier = 1;
  if (game.runes.nyd.total != 0) {
    runeMultiplier = runeMultiplier * ( game.runes.nyd.total + 1 );
  }

  if (game.runes.primalNyd.total != 0) {
    runeMultiplier = runeMultiplier * ( game.runes.primalNyd.total * game.runes.primalNyd.mult + 1);
  }

  //goblins
  let goblinMultiplier = 1;
  if (game.goblins.total != 0 && game.goblins.selection == "Scholars") {
    goblinMultiplier = (game.goblins.total * game.goblins.efficiency);
    
    if (game.runes.primalMaan.total != 0) {
      goblinMultiplier = (game.goblins.total * game.goblins.efficiency) * (game.runes.primalMaan.total * game.runes.primalMaan.mult);
    }
    if (game.runes.primalNyd.total != 0) {
      goblinMultiplier = (game.goblins.total * game.goblins.efficiency) * (game.runes.primalNyd.total * game.runes.primalNyd.mult);
    }
    if (game.runes.primalUru.total != 0) {
      goblinMultiplier = (game.goblins.total * game.goblins.efficiency) * (game.runes.primalUru.total * game.runes.primalUru.mult);
    }
    
    formatTextToFixedTwoDecimals(goblinAssistMultID, goblinMultiplier);
  }

  let scholarMultiplier = game.runicGenDefault * game.scholars.efficiency * relicMultiplier * runeMultiplier;

  let ADDscholars = (game.scholars.total* (scholarMultiplier) ) * goblinMultiplier;

  game.runes.runicPower += (ADDscholars)* afkCounter;

  let runicPerSec =
  (
    (
      ADDscholars
    )
  *100
  );


  let scholarRunicPerSec =
  (
    (
      ADDscholars
    )
  *100
  );


  formatTextToFixed(runicPowerPerSecID, runicPerSec);
  formatTextToFixed(scholarRunicPerSecID, runicPerSec);
}

function addMetals(afkCounter){
  afkCounter = afkCounter || 1;

  //metals
  let blacksmithMultiplier = game.metalsGenDefault * game.blacksmiths.efficiency;

  let ADDblacksmiths = (game.blacksmiths.total* (blacksmithMultiplier) );

  game.metals.bronze.total += (ADDblacksmiths)* afkCounter;

  let bronzePerSec =
  (
    (
      ADDblacksmiths
    )
  *100
  );


  formatTextToFixed(blacksmithBronzePerSecID, bronzePerSec);

}
function addOre(afkCounter){
  afkCounter = afkCounter || 1;

  let brewmasterMultiplier = 1;
  if (game.brewmasters.total != 0) {
    brewmasterMultiplier = (game.brewmasters.total * game.brewmasters.efficiency);
  }

  //goblins
  let goblinMultiplier = 1;
  if (game.goblins.total != 0 && game.goblins.selection == "Miners") {
    goblinMultiplier = (game.goblins.total * game.goblins.efficiency);
    
    if (game.runes.primalMaan.total != 0) {
      goblinMultiplier = (game.goblins.total * game.goblins.efficiency) * (game.runes.primalMaan.total * game.runes.primalMaan.mult);
    }
    if (game.runes.primalNyd.total != 0) {
      goblinMultiplier = (game.goblins.total * game.goblins.efficiency) * (game.runes.primalNyd.total * game.runes.primalNyd.mult);
    }
    if (game.runes.primalUru.total != 0) {
      goblinMultiplier = (game.goblins.total * game.goblins.efficiency) * (game.runes.primalUru.total * game.runes.primalUru.mult);
    }
    
    formatTextToFixedTwoDecimals(goblinAssistMultID, goblinMultiplier);
  }

  let ADDminers = ( (game.miners.total* (brewmasterMultiplier) ) * game.metalsGenDefault ) * goblinMultiplier;

  game.metals.ore.total += (ADDminers)* afkCounter;

  let orePerSec =
  (
    (
      ADDminers
    )
  *100
  );


  formatTextToFixed(minerOrePerSecID, orePerSec);

}

function addKnowledge(afkCounter){
  afkCounter = afkCounter || 1;

  let ADDmechanics = (game.mechanics.total* game.goldGen );

  game.knowledge.total += (ADDmechanics)* afkCounter;

  let knowledgePerSec =
  (
    (
      ADDmechanics
    )
  *100
  );


  formatTextToFixed(mechanicKnowledgePerSecID, knowledgePerSec);

}

function checkPurchases(){

  checkPeasentPurchases();

  checkScholarPurchases();
  checkRunePurchases();

  checkBlacksmithPurchases();
  checkMetalPurchases();

  checkMinerPurchases();
  checkLapidaryPurchases();
  checkBrewmasterPurchases();

  checkGoblinPurchases();
  checkMechanicPurchases();

  tabReveal();
}

function formatText(){

  formatTextToFixed(totalGoldID, game.gold);
  formatTextToFixed(totalrunicPowerID, game.runes.runicPower);
  formatTextToFixed(totalBronzeID, game.metals.bronze.total);
  formatTextToFixed(totalOreID, game.metals.ore.total);
  formatTextToFixed(totalIronID, game.metals.iron.total);
  formatTextToFixed(totalMythrilID, game.metals.mythril.total);
  formatTextToFixed(totalAdamantID, game.metals.adamant.total);
  formatTextToFixed(totalTitaniumID, game.metals.titanium.total);

  formatTextToFixed(totalGemsID, game.lapidaries.gems.total);
  formatTextToFixed(totalKnowledgeID, game.knowledge.total);

  formatTextString(peasentCostID, game.peasents.cost);
  formatTextString(scholarCostID, game.scholars.cost);
  formatTextString(blacksmithCostID, game.blacksmiths.cost);
  formatTextString(minerCostID, game.miners.cost);
  formatTextString(lapidaryCostID, game.lapidaries.cost);
  formatTextString(brewmasterCostID, game.brewmasters.cost);
  formatTextString(goblinCostID, game.goblins.cost);
  formatTextString(mechanicCostID, game.mechanics.cost);

}

//utility

function unitUnlock(unit, unitCard, unlockCard) {
  if (unit.unlocked) {
    unitCard.classList.remove("hidden");
    unlockCard.classList.add("hidden");
    unit.unlocked = true;

    if (unit == game.scholars) {
      runeTab.classList.remove("hidden");
    }

    if (unit == game.blacksmiths) {
      armoryTab.classList.remove("hidden");
      combatButton.classList.remove("hidden");
    }
    if (unit == game.miners) {
      metalurgyTab.classList.remove("hidden");
    }
    if (unit == game.goblins) {
      primalRunesTab.classList.remove("hidden");
    }
    if (unit == game.mechanics) {
      schematicsTab.classList.remove("hidden");
    }

  }
}

function unitBuyGoldFunc(unit, unitClass) {
  if(unit.cost <= game.gold){
    game.gold = game.gold-unit.cost;
    unit.total++;
    unit.cost = Math.ceil( (unit.cost*unit.costMult) + 5);
    for (let i = 0; i < unitClass.length; i++) {
      unitClass[i].textContent = Math.floor(unit.total);
    }
    formatText();
  }
}
function unitBuyGoldMAXFunc(unit, unitClass) {
  do {
      unitBuyGoldFunc(unit, unitClass);
  } while (unit.cost <= game.gold);
}

function increaseEfficiencyFunc(unit, efficiencyID, efficiencyCostID) {
  if (unit.efficiencyCost <= game.gold) {
    game.gold = game.gold-unit.efficiencyCost;
    unit.efficiency+= unit.efficiencyMult;
    unit.efficiencyCost = Math.ceil( (unit.efficiencyCost*unit.efficiencyCostMult) + 220);
    efficiencyID.textContent = unit.efficiency;
    efficiencyCostID.textContent = unit.efficiencyCost;
      if (unit.efficiency >= 1000000) {
        efficiencyID.textContent = unit.efficiency.toExponential(2);
      }
      else{
       efficiencyID.textContent = unit.efficiency.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }

      if (unit.efficiencyCost >= 1000000) {
        efficiencyCostID.textContent = unit.efficiencyCost.toExponential(2);
      }
      else{
       efficiencyCostID.textContent = unit.efficiencyCost.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
    }
}
function increaseEfficiencyMaxFunc(unit, efficiencyID, efficiencyCostID) {
  do {
    increaseEfficiencyFunc(unit, efficiencyID, efficiencyCostID);
  } while (unit.efficiencyCost <= game.gold);
}

function formatTextString(text, number) {
  if (number >= 1000000) {
   text.textContent = number.toExponential(2);
  }
  else{
    text.textContent = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}

function formatTextToFixed(text, number) {
  if (number >= 1000000) {
   text.textContent = number.toExponential(2);
  }
  else{
    text.textContent = Number(number).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}
function formatTextToFixedTwoDecimals(text, number) {
  if (number >= 1000000) {
   text.textContent = number.toExponential(2);
  }
  else{
    text.textContent = Number(number).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}

function formatTextToFixedNoDecimals(text, number) {
  if (number >= 1000000) {
   text.textContent = number.toExponential(2);
  }
  else{
    text.textContent = Number(number).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}
function formatTextRawNoDecimals(text, number) {

    if (Math.abs(number) < 1.0) {
      var e = parseInt(number.toString().split('e-')[1]);
      if (e) {
          number *= Math.pow(10,e-1);
          number = '0.' + (new Array(e)).join('0') + number.toString().substring(2);
      }
    } else {
      var e = parseInt(number.toString().split('+')[1]);
      if (e > 20) {
          e -= 20;
          number /= Math.pow(10,e);
          number += (new Array(e+1)).join('0');
      }
    }

    text.textContent = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


function random(min,max) {
 return Math.floor((Math.random())*(max-min+1))+min;
}

function autoMaxBuy() {

  if (game.peasents.autoBuy) {
    unitBuyGoldMAXFunc(game.peasents, totalPeasentsClass);
  }
  if (game.peasents.efficiencyAutoBuy) {
    increaseEfficiencyMaxFunc(game.peasents, peasentEfficiencyID, peasentEfficiencyCostID);
  }
  if (game.scholars.autoBuy) {
    unitBuyGoldMAXFunc(game.scholars, totalScholarsClass);
  }
  if (game.blacksmiths.autoBuy) {
    unitBuyGoldMAXFunc(game.blacksmiths, totalBlacksmithsClass);
  }
  if (game.blacksmiths.efficiencyAutoBuy) {
    increaseEfficiencyMaxFunc(game.blacksmiths, blacksmithEfficiencyID, blacksmithEfficiencyCostID);
  }
  if (game.lapidaries.autoBuy) {
    unitBuyGoldMAXFunc(game.lapidaries, totalLapidariesClass);
  }
  if (game.miners.autoBuy) {
    unitBuyGoldMAXFunc(game.miners, totalMinersClass);
  }
  if (game.brewmasters.autoBuy) {
    unitBuyGoldMAXFunc(game.brewmasters, totalBrewmastersClass);
  }
  if (game.goblins.autoBuy) {
    unitBuyGoldMAXFunc(game.goblins, totalGoblinsClass);
  }
  if (game.mechanics.autoBuy) {
    unitBuyGoldMAXFunc(game.mechanics, totalMechanicsClass);
  }

  //auto infuse runes
  if (game.runes.maan.autoInfuse) {
    infuseRune(game.runes.maan, currentMaanInfusionID, maanRunesClass, maxMaanInfusionID);
  }
  if (game.runes.nyd.autoInfuse) {
    infuseRune(game.runes.nyd, currentNydInfusionID, nydRunesClass, maxNydInfusionID);
  }
  if (game.runes.uru.autoInfuse) {
    infuseRune(game.runes.uru, currentUruInfusionID, uruRunesClass, maxUruInfusionID);
  }

}

//run the game
function gameloop(afkCounter){
  game.counter++;

  if(game.counter % 3000 == 0) {
      autoSave();
  }

  if (!game.phase2.active) {
  
	  addGems(afkCounter);
    //add all gold
    addGold(afkCounter);
    addRunicPower(afkCounter);
    addMetals(afkCounter);
    addOre(afkCounter);
    addKnowledge(afkCounter);
    checkPurchases();
    autoMaxBuy();
  
    regenHealth(afkCounter);
  }

  else{

    checkPhase2Purchases();

    if(game.phase2.conquering){
      conquering();
    }
    if(game.phase2.resources.portals >= 1){
      portalTimer();
      portalAdding();
    }
    if(game.phase2.troopRegen){
      troopRegen();
    }

  }

}

function winGame() {
  realTimeConversion();
  $(".win-screen").removeClass("hidden");
}
function realTimeConversion() {
  game.realTimeSecs = Math.floor(game.counter/10);
  game.realTimeMins = Math.floor(game.realTimeSecs/60);
  game.realTimeHours = Math.floor(game.realTimeMins/60);

  game.realTimeSecs = game.realTimeSecs%60;
  game.realTimeMins = game.realTimeMins%60;

  //nice format
  if (game.realTimeSecs < 10) {
    totalSecs.textContent = "0"+game.realTimeSecs;
  }
  else{
    totalSecs.textContent = game.realTimeSecs;
  }
  if (game.realTimeMins < 10) {
    totalMins.textContent = "0"+game.realTimeMins;
  }
  else{
    totalMins.textContent = game.realTimeMins;
  }
  totalHours.textContent = game.realTimeHours;

}

//initial load runs
function initalLoad() {

  //reset hard reset counter
  game.resetCounter = 5;

  //always start on bronze page
  game.armoryTab = 1;

  //unlock units
  unitUnlock(game.scholars, scholarCard, scholarUnlockCard);
  unitUnlock(game.blacksmiths, blacksmithCard, blacksmithUnlockCard);
  unitUnlock(game.lapidaries, lapidaryCard, lapidaryUnlockCard);
  unitUnlock(game.miners, minerCard, minerUnlockCard);
  unitUnlock(game.brewmasters, brewmasterCard, brewmasterUnlockCard);
  unitUnlock(game.goblins, goblinCard, goblinUnlockCard);
  unitUnlock(game.mechanics, mechanicCard, mechanicUnlockCard);

  //set units
  //human kingdom
  ////peasents
  for (let i = 0; i < totalPeasentsClass.length; i++) {
    totalPeasentsClass[i].textContent = Math.floor(game.peasents.total);
  }
  ////scholars
  for (let i = 0; i < totalScholarsClass.length; i++) {
    totalScholarsClass[i].textContent = Math.floor(game.scholars.total);
  }
  ////blacksmiths
  for (let i = 0; i < totalScholarsClass.length; i++) {
    totalBlacksmithsClass[i].textContent = Math.floor(game.blacksmiths.total);
  }
  
  //dwarf kingdom
  ////miners
  for (let i = 0; i < totalMinersClass.length; i++) {
    totalMinersClass[i].textContent = Math.floor(game.miners.total);
  }
  ////lapidary
  for (let i = 0; i < totalLapidariesClass.length; i++) {
    totalLapidariesClass[i].textContent = Math.floor(game.lapidaries.total);
  }
  ////brewmasters
  for (let i = 0; i < totalBrewmastersClass.length; i++) {
    totalBrewmastersClass[i].textContent = Math.floor(game.brewmasters.total);
  }

  //goblin kingdom
  ////goblins
  for (let i = 0; i < totalGoblinsClass.length; i++) {
    totalGoblinsClass[i].textContent = Math.floor(game.goblins.total);
  }
  ////mechanics
  for (let i = 0; i < totalMechanicsClass.length; i++) {
    totalMechanicsClass[i].textContent = Math.floor(game.mechanics.total);
  }

  //autos
  if (game.peasents.autoBuy) {
    peasentBuyMAXauto.classList.add("auto-on");
    peasentBuyMAXautoONOFF.textContent = "[ON]";
  }
  else{
    peasentBuyMAXauto.classList.remove("auto-on");
    peasentBuyMAXautoONOFF.textContent = "[OFF]";
  }

  if (game.peasents.efficiencyAutoBuy) {
    increasePeasentEfficiencyMAXauto.classList.add("auto-on");
    increasePeasentEfficiencyMAXautoONOFF.textContent = "[ON]";
  }
  else{
    increasePeasentEfficiencyMAXauto.classList.remove("auto-on");
    increasePeasentEfficiencyMAXautoONOFF.textContent = "[OFF]";
  }

  if (game.scholars.autoBuy) {
    scholarBuyMAXauto.classList.add("auto-on");
    scholarBuyMAXautoONOFF.textContent = "[ON]";
  }
  else{
    scholarBuyMAXauto.classList.remove("auto-on");
    scholarBuyMAXautoONOFF.textContent = "[OFF]";
  }

  if (game.blacksmiths.efficiencyAutoBuy) {
    increaseBlacksmithEfficiencyMAXauto.classList.add("auto-on");
    increaseBlacksmithEfficiencyMAXautoONOFF.textContent = "[ON]";
  }
  else{
    increaseBlacksmithEfficiencyMAXauto.classList.remove("auto-on");
    increaseBlacksmithEfficiencyMAXautoONOFF.textContent = "[OFF]";
  }

  if (game.lapidaries.autoBuy) {
    lapidaryBuyMAXauto.classList.add("auto-on");
    lapidaryBuyMAXautoONOFF.textContent = "[ON]";
  }
  else{
    lapidaryBuyMAXauto.classList.remove("auto-on");
    lapidaryBuyMAXautoONOFF.textContent = "[OFF]";
  }

  if (game.miners.autoBuy) {
    minerBuyMAXauto.classList.add("auto-on");
    minerBuyMAXautoONOFF.textContent = "[ON]";
  }
  else{
    minerBuyMAXauto.classList.remove("auto-on");
    minerBuyMAXautoONOFF.textContent = "[OFF]";
  }

  if (game.brewmasters.autoBuy) {
    brewmasterBuyMAXauto.classList.add("auto-on");
    brewmasterBuyMAXautoONOFF.textContent = "[ON]";
  }
  else{
    brewmasterBuyMAXauto.classList.remove("auto-on");
    brewmasterBuyMAXautoONOFF.textContent = "[OFF]";
  }

  if (game.goblins.autoBuy) {
    goblinBuyMAXauto.classList.add("auto-on");
    goblinBuyMAXautoONOFF.textContent = "[ON]";
  }
  else{
    goblinBuyMAXauto.classList.remove("auto-on");
    goblinBuyMAXautoONOFF.textContent = "[OFF]";
  }

  if (game.mechanics.autoBuy) {
    mechanicBuyMAXauto.classList.add("auto-on");
    mechanicBuyMAXautoONOFF.textContent = "[ON]";
  }
  else{
    mechanicBuyMAXauto.classList.remove("auto-on");
    mechanicBuyMAXautoONOFF.textContent = "[OFF]";
  }

  if (game.runes.maan.autoInfuse) {
    infuseMaanAuto.classList.add("auto-on");
    infuseMaanAuto_ONOFF.textContent = "[ON]";
  }
  else{
    infuseMaanAuto_ONOFF.textContent = "[OFF]";
  }

  if (game.runes.nyd.autoInfuse) {
    infuseNydAuto.classList.add("auto-on");
    infuseNydAuto_ONOFF.textContent = "[ON]";
  }
  else{
    infuseNydAuto_ONOFF.textContent = "[OFF]";
  }

  if (game.runes.uru.autoInfuse) {
    infuseUruAuto.classList.add("auto-on");
    infuseUruAuto_ONOFF.textContent = "[ON]";
  }
  else{
    infuseUruAuto_ONOFF.textContent = "[OFF]";
  }


  //set unit efficiency
  if (game.peasents.efficiency >= 1000000) {
    peasentEfficiencyID.textContent = game.peasents.efficiency.toExponential(2);
  }
  else{
   peasentEfficiencyID.textContent = game.peasents.efficiency.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  if (game.blacksmiths.efficiency >= 1000000) {
    blacksmithEfficiencyID.textContent = game.blacksmiths.efficiency.toExponential(2);
  }
  else{
   blacksmithEfficiencyID.textContent = game.blacksmiths.efficiency.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  //set unlock prices
  formatTextToFixed(scholarUnlockCost, game.scholars.unlockCost);
  formatTextToFixed(blacksmithUnlockCost, game.blacksmiths.unlockCost);
  formatTextToFixed(lapidaryUnlockCost, game.lapidaries.unlockCost);
  formatTextToFixed(minerUnlockCost, game.miners.unlockCost);
  formatTextToFixed(brewmasterUnlockCost, game.brewmasters.unlockCost);
  formatTextToFixed(goblinUnlockCost, game.goblins.unlockCost);
  formatTextToFixed(mechanicUnlockCost, game.mechanics.unlockCost);

  //set unit efficiencyCost prices
  formatTextToFixed(peasentEfficiencyCostID, game.peasents.efficiencyCost);
  formatTextToFixed(blacksmithEfficiencyCostID, game.blacksmiths.efficiencyCost);

  //set upgrade prices
  formatTextToFixed(nydRuneUpgradeCostID, game.upgrades.scholars.unlockNydCost);
  formatTextToFixed(uruRuneUpgradeCostID, game.upgrades.scholars.unlockUruCost);

  //set runes
  formatTextToFixed(maanRunesClass, game.runes.maan.total);
  formatTextToFixed(nydRunesClass, game.runes.nyd.total);
  formatTextToFixed(uruRunesClass, game.runes.uru.total);

  formatTextToFixed(primalMaanRunesClass, game.runes.primalMaan.total);
  formatTextToFixed(primalNydRunesClass, game.runes.primalNyd.total);
  formatTextToFixed(primalUruRunesClass, game.runes.primalUru.total);

  //rune unlocks
  if (game.upgrades.scholars.unlockNyd) {
    $(nydCard).removeClass("hidden");
    $(nydRuneUpgradeUnlock).addClass("hidden");
  }
  if (game.upgrades.scholars.unlockUru) {
    $(uruCard).removeClass("hidden");
    $(uruRuneUpgradeUnlock).addClass("hidden");
  }

  //set rune infusion & max
  formatTextToFixed(currentMaanInfusionID, game.runes.maan.infusion);
  formatTextToFixed(currentNydInfusionID, game.runes.nyd.infusion);
  formatTextToFixed(currentUruInfusionID, game.runes.uru.infusion);

  formatTextToFixed(maxMaanInfusionID, game.runes.maan.maxInfusion);
  formatTextToFixed(maxNydInfusionID, game.runes.nyd.maxInfusion);
  formatTextToFixed(maxUruInfusionID, game.runes.uru.maxInfusion);

  //primal rune costs
  formatTextToFixed(primalMaanRuneCost, game.runes.primalMaan.runeCost);
  formatTextToFixed(primalMaanRuneCostGoblins, game.runes.primalMaan.goblinCost);

  formatTextToFixed(primalNydRuneCost, game.runes.primalNyd.runeCost);
  formatTextToFixed(primalNydRuneCostGoblins, game.runes.primalNyd.goblinCost);

  formatTextToFixed(primalUruRuneCost, game.runes.primalUru.runeCost);
  formatTextToFixed(primalUruRuneCostGoblins, game.runes.primalUru.goblinCost);

  //set prices
  ////bronze
  formatTextToFixed(bronzeGreavesCostID, game.armor.bronze.greaves.cost);
  formatTextToFixed(bronzeLegsCostID, game.armor.bronze.legs.cost);
  formatTextToFixed(bronzeGauntletsCostID, game.armor.bronze.gauntlets.cost);
  formatTextToFixed(bronzePlateCostID, game.armor.bronze.plate.cost);
  formatTextToFixed(bronzeHelmCostID, game.armor.bronze.helm.cost);
  formatTextToFixed(bronzePauldronsCostID, game.armor.bronze.pauldrons.cost);
  formatTextToFixed(bronzeSwordCostID, game.armor.bronze.sword.cost);
  formatTextToFixed(bronzeShieldCostID, game.armor.bronze.shield.cost);
  ////iron
  formatTextToFixed(ironGreavesCostID, game.armor.iron.greaves.cost);
  formatTextToFixed(ironLegsCostID, game.armor.iron.legs.cost);
  formatTextToFixed(ironGauntletsCostID, game.armor.iron.gauntlets.cost);
  formatTextToFixed(ironPlateCostID, game.armor.iron.plate.cost);
  formatTextToFixed(ironHelmCostID, game.armor.iron.helm.cost);
  formatTextToFixed(ironPauldronsCostID, game.armor.iron.pauldrons.cost);
  formatTextToFixed(ironSwordCostID, game.armor.iron.sword.cost);
  formatTextToFixed(ironShieldCostID, game.armor.iron.shield.cost);
  ////mythril
  formatTextToFixed(mythrilGreavesCostID, game.armor.mythril.greaves.cost);
  formatTextToFixed(mythrilLegsCostID, game.armor.mythril.legs.cost);
  formatTextToFixed(mythrilGauntletsCostID, game.armor.mythril.gauntlets.cost);
  formatTextToFixed(mythrilPlateCostID, game.armor.mythril.plate.cost);
  formatTextToFixed(mythrilHelmCostID, game.armor.mythril.helm.cost);
  formatTextToFixed(mythrilPauldronsCostID, game.armor.mythril.pauldrons.cost);
  formatTextToFixed(mythrilSwordCostID, game.armor.mythril.sword.cost);
  formatTextToFixed(mythrilShieldCostID, game.armor.mythril.shield.cost);
  ////adamant
  formatTextToFixed(adamantGreavesCostID, game.armor.adamant.greaves.cost);
  formatTextToFixed(adamantLegsCostID, game.armor.adamant.legs.cost);
  formatTextToFixed(adamantGauntletsCostID, game.armor.adamant.gauntlets.cost);
  formatTextToFixed(adamantPlateCostID, game.armor.adamant.plate.cost);
  formatTextToFixed(adamantHelmCostID, game.armor.adamant.helm.cost);
  formatTextToFixed(adamantPauldronsCostID, game.armor.adamant.pauldrons.cost);
  formatTextToFixed(adamantSwordCostID, game.armor.adamant.sword.cost);
  formatTextToFixed(adamantShieldCostID, game.armor.adamant.shield.cost);
  ////titanium
  formatTextToFixed(titaniumGreavesCostID, game.armor.titanium.greaves.cost);
  formatTextToFixed(titaniumLegsCostID, game.armor.titanium.legs.cost);
  formatTextToFixed(titaniumGauntletsCostID, game.armor.titanium.gauntlets.cost);
  formatTextToFixed(titaniumPlateCostID, game.armor.titanium.plate.cost);
  formatTextToFixed(titaniumHelmCostID, game.armor.titanium.helm.cost);
  formatTextToFixed(titaniumPauldronsCostID, game.armor.titanium.pauldrons.cost);
  formatTextToFixed(titaniumSwordCostID, game.armor.titanium.sword.cost);
  formatTextToFixed(titaniumShieldCostID, game.armor.titanium.shield.cost);

  //set armor stats
  ////bronze
  //////greaves
  formatTextToFixed(bronzeGreavesStatsHpClass, game.armor.bronze.greaves.stats.hp);
  formatTextToFixed(bronzeGreavesStatsStrClass, game.armor.bronze.greaves.stats.str);
  formatTextToFixed(bronzeGreavesStatsDefClass, game.armor.bronze.greaves.stats.def);
  //////legs
  formatTextToFixed(bronzeLegsStatsHpClass, game.armor.bronze.legs.stats.hp);
  formatTextToFixed(bronzeLegsStatsStrClass, game.armor.bronze.legs.stats.str);
  formatTextToFixed(bronzeLegsStatsDefClass, game.armor.bronze.legs.stats.def);
  //////gauntlets
  formatTextToFixed(bronzeGauntletsStatsHpClass, game.armor.bronze.gauntlets.stats.hp);
  formatTextToFixed(bronzeGauntletsStatsStrClass, game.armor.bronze.gauntlets.stats.str);
  formatTextToFixed(bronzeGauntletsStatsDefClass, game.armor.bronze.gauntlets.stats.def);
  //////plate
  formatTextToFixed(bronzePlateStatsHpClass, game.armor.bronze.plate.stats.hp);
  formatTextToFixed(bronzePlateStatsStrClass, game.armor.bronze.plate.stats.str);
  formatTextToFixed(bronzePlateStatsDefClass, game.armor.bronze.plate.stats.def);
  //////helm
  formatTextToFixed(bronzeHelmStatsHpClass, game.armor.bronze.helm.stats.hp);
  formatTextToFixed(bronzeHelmStatsStrClass, game.armor.bronze.helm.stats.str);
  formatTextToFixed(bronzeHelmStatsDefClass, game.armor.bronze.helm.stats.def);
  //////pauldrons
  formatTextToFixed(bronzePauldronsStatsHpClass, game.armor.bronze.pauldrons.stats.hp);
  formatTextToFixed(bronzePauldronsStatsStrClass, game.armor.bronze.pauldrons.stats.str);
  formatTextToFixed(bronzePauldronsStatsDefClass, game.armor.bronze.pauldrons.stats.def);
  //////sword
  formatTextToFixed(bronzeSwordStatsHpClass, game.armor.bronze.sword.stats.hp);
  formatTextToFixed(bronzeSwordStatsStrClass, game.armor.bronze.sword.stats.str);
  formatTextToFixed(bronzeSwordStatsDefClass, game.armor.bronze.sword.stats.def);
  //////shield
  formatTextToFixed(bronzeShieldStatsHpClass, game.armor.bronze.shield.stats.hp);
  formatTextToFixed(bronzeShieldStatsStrClass, game.armor.bronze.shield.stats.str);
  formatTextToFixed(bronzeShieldStatsDefClass, game.armor.bronze.shield.stats.def);
  ////iron
  //////greaves
  formatTextToFixed(ironGreavesStatsHpClass, game.armor.iron.greaves.stats.hp);
  formatTextToFixed(ironGreavesStatsStrClass, game.armor.iron.greaves.stats.str);
  formatTextToFixed(ironGreavesStatsDefClass, game.armor.iron.greaves.stats.def);
  //////legs
  formatTextToFixed(ironLegsStatsHpClass, game.armor.iron.legs.stats.hp);
  formatTextToFixed(ironLegsStatsStrClass, game.armor.iron.legs.stats.str);
  formatTextToFixed(ironLegsStatsDefClass, game.armor.iron.legs.stats.def);
  //////gauntlets
  formatTextToFixed(ironGauntletsStatsHpClass, game.armor.iron.gauntlets.stats.hp);
  formatTextToFixed(ironGauntletsStatsStrClass, game.armor.iron.gauntlets.stats.str);
  formatTextToFixed(ironGauntletsStatsDefClass, game.armor.iron.gauntlets.stats.def);
  //////plate
  formatTextToFixed(ironPlateStatsHpClass, game.armor.iron.plate.stats.hp);
  formatTextToFixed(ironPlateStatsStrClass, game.armor.iron.plate.stats.str);
  formatTextToFixed(ironPlateStatsDefClass, game.armor.iron.plate.stats.def);
  //////helm
  formatTextToFixed(ironHelmStatsHpClass, game.armor.iron.helm.stats.hp);
  formatTextToFixed(ironHelmStatsStrClass, game.armor.iron.helm.stats.str);
  formatTextToFixed(ironHelmStatsDefClass, game.armor.iron.helm.stats.def);
  //////pauldrons
  formatTextToFixed(ironPauldronsStatsHpClass, game.armor.iron.pauldrons.stats.hp);
  formatTextToFixed(ironPauldronsStatsStrClass, game.armor.iron.pauldrons.stats.str);
  formatTextToFixed(ironPauldronsStatsDefClass, game.armor.iron.pauldrons.stats.def);
  //////sword
  formatTextToFixed(ironSwordStatsHpClass, game.armor.iron.sword.stats.hp);
  formatTextToFixed(ironSwordStatsStrClass, game.armor.iron.sword.stats.str);
  formatTextToFixed(ironSwordStatsDefClass, game.armor.iron.sword.stats.def);
  //////shield
  formatTextToFixed(ironShieldStatsHpClass, game.armor.iron.shield.stats.hp);
  formatTextToFixed(ironShieldStatsStrClass, game.armor.iron.shield.stats.str);
  formatTextToFixed(ironShieldStatsDefClass, game.armor.iron.shield.stats.def);
  ////mythril
  //////greaves
  formatTextToFixed(mythrilGreavesStatsHpClass, game.armor.mythril.greaves.stats.hp);
  formatTextToFixed(mythrilGreavesStatsStrClass, game.armor.mythril.greaves.stats.str);
  formatTextToFixed(mythrilGreavesStatsDefClass, game.armor.mythril.greaves.stats.def);
  //////legs
  formatTextToFixed(mythrilLegsStatsHpClass, game.armor.mythril.legs.stats.hp);
  formatTextToFixed(mythrilLegsStatsStrClass, game.armor.mythril.legs.stats.str);
  formatTextToFixed(mythrilLegsStatsDefClass, game.armor.mythril.legs.stats.def);
  //////gauntlets
  formatTextToFixed(mythrilGauntletsStatsHpClass, game.armor.mythril.gauntlets.stats.hp);
  formatTextToFixed(mythrilGauntletsStatsStrClass, game.armor.mythril.gauntlets.stats.str);
  formatTextToFixed(mythrilGauntletsStatsDefClass, game.armor.mythril.gauntlets.stats.def);
  //////plate
  formatTextToFixed(mythrilPlateStatsHpClass, game.armor.mythril.plate.stats.hp);
  formatTextToFixed(mythrilPlateStatsStrClass, game.armor.mythril.plate.stats.str);
  formatTextToFixed(mythrilPlateStatsDefClass, game.armor.mythril.plate.stats.def);
  //////helm
  formatTextToFixed(mythrilHelmStatsHpClass, game.armor.mythril.helm.stats.hp);
  formatTextToFixed(mythrilHelmStatsStrClass, game.armor.mythril.helm.stats.str);
  formatTextToFixed(mythrilHelmStatsDefClass, game.armor.mythril.helm.stats.def);
  //////pauldrons
  formatTextToFixed(mythrilPauldronsStatsHpClass, game.armor.mythril.pauldrons.stats.hp);
  formatTextToFixed(mythrilPauldronsStatsStrClass, game.armor.mythril.pauldrons.stats.str);
  formatTextToFixed(mythrilPauldronsStatsDefClass, game.armor.mythril.pauldrons.stats.def);
  //////sword
  formatTextToFixed(mythrilSwordStatsHpClass, game.armor.mythril.sword.stats.hp);
  formatTextToFixed(mythrilSwordStatsStrClass, game.armor.mythril.sword.stats.str);
  formatTextToFixed(mythrilSwordStatsDefClass, game.armor.mythril.sword.stats.def);
  //////shield
  formatTextToFixed(mythrilShieldStatsHpClass, game.armor.mythril.shield.stats.hp);
  formatTextToFixed(mythrilShieldStatsStrClass, game.armor.mythril.shield.stats.str);
  formatTextToFixed(mythrilShieldStatsDefClass, game.armor.mythril.shield.stats.def);
  ////adamant
  //////greaves
  formatTextToFixed(adamantGreavesStatsHpClass, game.armor.adamant.greaves.stats.hp);
  formatTextToFixed(adamantGreavesStatsStrClass, game.armor.adamant.greaves.stats.str);
  formatTextToFixed(adamantGreavesStatsDefClass, game.armor.adamant.greaves.stats.def);
  //////legs
  formatTextToFixed(adamantLegsStatsHpClass, game.armor.adamant.legs.stats.hp);
  formatTextToFixed(adamantLegsStatsStrClass, game.armor.adamant.legs.stats.str);
  formatTextToFixed(adamantLegsStatsDefClass, game.armor.adamant.legs.stats.def);
  //////gauntlets
  formatTextToFixed(adamantGauntletsStatsHpClass, game.armor.adamant.gauntlets.stats.hp);
  formatTextToFixed(adamantGauntletsStatsStrClass, game.armor.adamant.gauntlets.stats.str);
  formatTextToFixed(adamantGauntletsStatsDefClass, game.armor.adamant.gauntlets.stats.def);
  //////plate
  formatTextToFixed(adamantPlateStatsHpClass, game.armor.adamant.plate.stats.hp);
  formatTextToFixed(adamantPlateStatsStrClass, game.armor.adamant.plate.stats.str);
  formatTextToFixed(adamantPlateStatsDefClass, game.armor.adamant.plate.stats.def);
  //////helm
  formatTextToFixed(adamantHelmStatsHpClass, game.armor.adamant.helm.stats.hp);
  formatTextToFixed(adamantHelmStatsStrClass, game.armor.adamant.helm.stats.str);
  formatTextToFixed(adamantHelmStatsDefClass, game.armor.adamant.helm.stats.def);
  //////pauldrons
  formatTextToFixed(adamantPauldronsStatsHpClass, game.armor.adamant.pauldrons.stats.hp);
  formatTextToFixed(adamantPauldronsStatsStrClass, game.armor.adamant.pauldrons.stats.str);
  formatTextToFixed(adamantPauldronsStatsDefClass, game.armor.adamant.pauldrons.stats.def);
  //////sword
  formatTextToFixed(adamantSwordStatsHpClass, game.armor.adamant.sword.stats.hp);
  formatTextToFixed(adamantSwordStatsStrClass, game.armor.adamant.sword.stats.str);
  formatTextToFixed(adamantSwordStatsDefClass, game.armor.adamant.sword.stats.def);
  //////shield
  formatTextToFixed(adamantShieldStatsHpClass, game.armor.adamant.shield.stats.hp);
  formatTextToFixed(adamantShieldStatsStrClass, game.armor.adamant.shield.stats.str);
  formatTextToFixed(adamantShieldStatsDefClass, game.armor.adamant.shield.stats.def);
  ////titanium
  //////greaves
  formatTextToFixed(titaniumGreavesStatsHpClass, game.armor.titanium.greaves.stats.hp);
  formatTextToFixed(titaniumGreavesStatsStrClass, game.armor.titanium.greaves.stats.str);
  formatTextToFixed(titaniumGreavesStatsDefClass, game.armor.titanium.greaves.stats.def);
  //////legs
  formatTextToFixed(titaniumLegsStatsHpClass, game.armor.titanium.legs.stats.hp);
  formatTextToFixed(titaniumLegsStatsStrClass, game.armor.titanium.legs.stats.str);
  formatTextToFixed(titaniumLegsStatsDefClass, game.armor.titanium.legs.stats.def);
  //////gauntlets
  formatTextToFixed(titaniumGauntletsStatsHpClass, game.armor.titanium.gauntlets.stats.hp);
  formatTextToFixed(titaniumGauntletsStatsStrClass, game.armor.titanium.gauntlets.stats.str);
  formatTextToFixed(titaniumGauntletsStatsDefClass, game.armor.titanium.gauntlets.stats.def);
  //////plate
  formatTextToFixed(titaniumPlateStatsHpClass, game.armor.titanium.plate.stats.hp);
  formatTextToFixed(titaniumPlateStatsStrClass, game.armor.titanium.plate.stats.str);
  formatTextToFixed(titaniumPlateStatsDefClass, game.armor.titanium.plate.stats.def);
  //////helm
  formatTextToFixed(titaniumHelmStatsHpClass, game.armor.titanium.helm.stats.hp);
  formatTextToFixed(titaniumHelmStatsStrClass, game.armor.titanium.helm.stats.str);
  formatTextToFixed(titaniumHelmStatsDefClass, game.armor.titanium.helm.stats.def);
  //////pauldrons
  formatTextToFixed(titaniumPauldronsStatsHpClass, game.armor.titanium.pauldrons.stats.hp);
  formatTextToFixed(titaniumPauldronsStatsStrClass, game.armor.titanium.pauldrons.stats.str);
  formatTextToFixed(titaniumPauldronsStatsDefClass, game.armor.titanium.pauldrons.stats.def);
  //////sword
  formatTextToFixed(titaniumSwordStatsHpClass, game.armor.titanium.sword.stats.hp);
  formatTextToFixed(titaniumSwordStatsStrClass, game.armor.titanium.sword.stats.str);
  formatTextToFixed(titaniumSwordStatsDefClass, game.armor.titanium.sword.stats.def);
  //////shield
  formatTextToFixed(titaniumShieldStatsHpClass, game.armor.titanium.shield.stats.hp);
  formatTextToFixed(titaniumShieldStatsStrClass, game.armor.titanium.shield.stats.str);
  formatTextToFixed(titaniumShieldStatsDefClass, game.armor.titanium.shield.stats.def);


  //relics
  for (let i = 0; i < totalBronzeRelicsClass.length; i++) {
    totalBronzeRelicsClass[i].textContent = Math.floor(game.metals.bronze.relics.total);
  }

  formatTextString(bronzeRelicCostID, game.blacksmiths.relicCost);

  //set personal stats
  addStats();
  calcCombatLevel();
  formatTextString(statsHpID, game.stats.hp);
  formatTextString(statsMaxHpID, game.stats.maxHp);
  formatTextString(statsStrID, game.stats.str);
  formatTextString(statsDefID, game.stats.def);
  formatTextString(statsCombatLevelID, game.stats.combatLevel);

  //challenge stats
  formatTextString(statsChallengeHpID, game.stats.challengeHp);
  formatTextString(statsChallengeMaxHpID, game.stats.challengeMaxHp);
  formatTextString(statsChallengeStrID, game.stats.challengeStr);
  formatTextString(statsChallengeDefID, game.stats.challengeDef);
  formatTextString(statsChallengeCombatLevelID, game.stats.challengeCombatLevel);

  let allEmblems = game.stats.emblems.tier_1.total + game.stats.emblems.tier_2.total + game.stats.emblems.tier_3.total;

  formatTextString(tier1EmblemID, game.stats.emblems.tier_1.total);
  formatTextString(tier2EmblemID, game.stats.emblems.tier_2.total);
  formatTextString(tier3EmblemID, game.stats.emblems.tier_3.total);
  formatTextString(allEmblemsID, allEmblems);

  formatTextString(statsHeroismID, game.stats.heroism);

  formatTextString(totalHeroismPeasent, game.stats.heroism);

  if (!game.stats.alive) {
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

  if (game.stats.schematics.bloodTransfusionPauldrons.constructed) {
    formatTextString(regenPercent, "40%");
  }
  else {
    formatTextString(regenPercent, "10%");
  }


  //set monster stats
  calcMonsterCombatLevel(game.monsters.slime, slimeCombatLevel);
  calcMonsterCombatLevel(game.monsters.scorpion, scorpionCombatLevel);
  calcMonsterCombatLevel(game.monsters.bear, bearCombatLevel);
  calcMonsterCombatLevel(game.monsters.dwarvenSkeleton, dwarvenSkeletonCombatLevel);
  calcMonsterCombatLevel(game.monsters.griffon, griffonCombatLevel);
  calcMonsterCombatLevel(game.monsters.wyrmling, wyrmlingCombatLevel);

  //bosses stats
  calcMonsterCombatLevel(game.monsters.dwarfKing, dwarfKingCombatLevel);
  calcMonsterCombatLevel(game.monsters.goblinChieftain, goblinChieftainCombatLevel);
  calcMonsterCombatLevel(game.monsters.dragon, dragonCombatLevel);

  resetCombat();

  //set the great forge ticks/ores
  formatTextString(iron_orePerTickID, game.upgrades.miners.forge.ironSmelterOreCost);
  formatTextString(mythril_ironPerTickID, game.upgrades.miners.forge.mythrilSmelterIronCost);
  formatTextString(mythril_orePerTickID, game.upgrades.miners.forge.mythrilSmelterOreCost);
  formatTextString(adamant_mythrilOrePerTickID, game.upgrades.miners.forge.adamantSmelterMythrilCost);
  formatTextString(adamant_orePerTickID, game.upgrades.miners.forge.adamantSmelterOreCost);
  formatTextString(titanium_adamantOrePerTickID, game.upgrades.miners.forge.titaniumSmelterAdamantCost);
  formatTextString(titanium_orePerTickID, game.upgrades.miners.forge.titaniumSmelterOreCost);

  //set the great forge output and costs
  formatTextString(ironOutputID, game.metals.iron.output);
  formatTextString(increaseIronOutputCost, game.metals.iron.outputCost);
  formatTextString(mythrilOutputID, game.metals.mythril.output);
  formatTextString(increaseMythrilOutputCost, game.metals.mythril.outputCost);
  formatTextString(adamantOutputID, game.metals.adamant.output);
  formatTextString(increaseAdamantOutputCost, game.metals.adamant.outputCost);
  formatTextString(titaniumOutputID, game.metals.titanium.output);
  formatTextString(increaseTitaniumOutputCost, game.metals.titanium.outputCost);

  //smelter ticks
  ironProgress.value = game.metals.iron.smeltingProgress;
  mythrilProgress.value = game.metals.mythril.smeltingProgress;
  adamantProgress.value = game.metals.adamant.smeltingProgress;
  titaniumProgress.value = game.metals.titanium.smeltingProgress;

  //iron (maybe we make this into a function)
  if (game.metals.iron.smelting &&
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
  else if (!game.metals.iron.smelting) {
    clearInterval(smelterTimerIron);
    game.metals.iron.smelting = false;
    ironSmelterONOFF.textContent = "[OFF]";
  }
  //mythril
  if (game.metals.mythril.smelting &&
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
  else if (!game.metals.mythril.smelting) {
    clearInterval(smelterTimerMythril);
    game.metals.mythril.smelting = false;
    mythrilSmelterONOFF.textContent = "[OFF]";
  }
  //adamant
  if (game.metals.adamant.smelting &&
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
  else if (!game.metals.adamant.smelting) {
    clearInterval(smelterTimerAdamant);
    game.metals.adamant.smelting = false;
    adamantSmelterONOFF.textContent = "[OFF]";
  }
  //titanium
  if (game.metals.titanium.smelting &&
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
  else if (!game.metals.titanium.smelting) {
    clearInterval(smelterTimerTitanium);
    game.metals.titanium.smelting = false;
    titaniumSmelterONOFF.textContent = "[OFF]";
  }

  // schematics prices
  formatTextString(hydraulicGauntletsGoblinCost, game.stats.schematics.hydraulicGauntlets.goblinCost);
  formatTextString(hydraulicGauntletsOreCost, game.stats.schematics.hydraulicGauntlets.oreCost);
  formatTextString(hydraulicGauntletsKnowledgeCost, game.stats.schematics.hydraulicGauntlets.knowledgeCost);

  formatTextString(chainSwordModuleGoblinCost, game.stats.schematics.chainSwordModule.goblinCost);
  formatTextString(chainSwordModuleOreCost, game.stats.schematics.chainSwordModule.oreCost);
  formatTextString(chainSwordModuleKnowledgeCost, game.stats.schematics.chainSwordModule.knowledgeCost);

  formatTextString(enginePoweredBootsGoblinCost, game.stats.schematics.enginePoweredBoots.goblinCost);
  formatTextString(enginePoweredBootsOreCost, game.stats.schematics.enginePoweredBoots.oreCost);
  formatTextString(enginePoweredBootsKnowledgeCost, game.stats.schematics.enginePoweredBoots.knowledgeCost);
   
  formatTextString(bloodTransfusionPauldronsGoblinCost, game.stats.schematics.bloodTransfusionPauldrons.goblinCost);
  formatTextString(bloodTransfusionPauldronsOreCost, game.stats.schematics.bloodTransfusionPauldrons.oreCost);
  formatTextString(bloodTransfusionPauldronsKnowledgeCost, game.stats.schematics.bloodTransfusionPauldrons.knowledgeCost);
  
  if (game.stats.schematics.hydraulicGauntlets.constructed) {
    constructHydraulicGauntlets.textContent = "Constructed";
    document.querySelector('.hydraulic-gauntlets .btn-schematic').disabled = true;
    $(".hydraulic-gauntlets.schematic").addClass("active");
  }
  if (game.stats.schematics.chainSwordModule.constructed) {
    constructChainSwordModule.textContent = "Constructed";
    document.querySelector('.chain-sword-module .btn-schematic').disabled = true;
    $(".chain-sword-module.schematic").addClass("active");
  }
  if (game.stats.schematics.enginePoweredBoots.constructed) {
    constructEnginePoweredBoots.textContent = "Constructed";
    document.querySelector('.engine-powered-boots .btn-schematic').disabled = true;
    $(".engine-powered-boots.schematic").addClass("active");
  }
  if (game.stats.schematics.bloodTransfusionPauldrons.constructed) {
    constructBloodTransfusionPauldrons.textContent = "Constructed";
    document.querySelector('.blood-transfusion-pauldrons .btn-schematic').disabled = true;
    $(".blood-transfusion-pauldrons.schematic").addClass("active");
  }


  //phase 2
  if (game.phase2.active) {
    $("#phase-2").removeClass("hidden");
    $("#phase-1").addClass("hidden");
  }
  else{
    $("#phase-2").addClass("hidden");
    $("#phase-1").removeClass("hidden");
  }

  if ( !$(".phase-2-ui-map").children().length > 0 ) {
    createMap();
  }
  else{
    editMap();
    textScroll();
  }


  formatTextString(totalTroops, game.phase2.resources.troops);
  formatTextToFixedNoDecimals(demonArtifactsCost, game.phase2.resources.portalsCost);
  formatTextString(demonArtifactsTotal, game.phase2.resources.demonArtifacts);
  formatTextString(demonSoulsTotal, game.phase2.resources.demonSouls);
  formatTextToFixedNoDecimals(conjureDemonSoulCost, game.phase2.resources.demonSoulsCost);

  formatTextToFixedTwoDecimals(portalEfficiencyID, game.phase2.resources.portalsEfficiency);
  formatTextToFixedTwoDecimals(troopEfficiencyID, game.phase2.resources.troopsEfficiency);

  formatTextToFixedNoDecimals(portalEfficiencyCostID, game.phase2.resources.portalsEfficiencyCost);
  formatTextToFixedNoDecimals(troopEfficiencyCostID, game.phase2.resources.troopsEfficiencyCost);

  formatTextToFixedNoDecimals(totalHellConquered, game.phase2.resources.totalHellConquered);
  formatTextToFixedNoDecimals(totalFacesDestroyed, game.phase2.resources.facesDestroyed);

  movement();


}
initalLoad();

//update interval
let updateDisplay = setInterval(function(){
  formatText();
}, game.updateRate);



let lastUpdate = new Date().getTime();

setInterval(function(){
  let thisUpdate = new Date().getTime();
  let diff = (thisUpdate - lastUpdate);
  //10 i think is because of gamespeed?
  diff = Math.round(diff / 10);
  gameloop(diff);
  lastUpdate = thisUpdate;
}, game.gameClock);


  let saveGame = document.getElementById("save-game");
  let saveGame2 = document.getElementById("save-game-2");

  let hardReset = document.getElementById("hard-reset");
  let hardReset2 = document.getElementById("hard-reset-2");
  let hardReset3 = document.getElementById("hard-reset-3");

  saveGame.addEventListener("click", function (e) {
      autoSave();
  });
  saveGame2.addEventListener("click", function (e) {
      autoSave();
  });

  hardReset.addEventListener("click", function (e) {
      hardResetGame();
  });
  hardReset2.addEventListener("click", function (e) {
      hardResetGame();
  });
  hardReset3.addEventListener("click", function (e) {
      hardResetGame();
  });

/*
function exportGame(exportFieldID) {
  let exportField = document.getElementById(exportFieldID);
  exportField.value = btoa(JSON.stringify(game));
  if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
    let editable = exportField.contentEditable;
    let readOnly = exportField.readOnly;
    exportField.contentEditable = 'true';
    exportField.readOnly = 'false';
    let range = document.createRange();
    range.selectNodeContents(exportField);
    let sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
    exportField.setSelectionRange(0, 999999);
    exportField.contentEditable = editable;
    exportField.readOnly = readOnly;
  } else {
    exportField.select();
  }
  exportField.select();
  document.execCommand('copy');
  popUpText("Copied to clipboard");
}

function importGame(importFieldID) {
  //loadgame = JSON.parse(atob(prompt("Input your save here:")))
  let loadgame = JSON.parse(atob(document.getElementById(importFieldID).value));
  if (loadgame && loadgame != null && loadgame != "") {
    game = loadgame;
    removeSaveFields();
    initalLoad();
    popUpText("Game Loaded");
  }
  else {
    alert("Invalid input.");
  }
}
*/

function autoSave() {
  let gameSave = btoa(JSON.stringify(game));
  localStorage.setItem("gameSave", gameSave);
  popUpText("Game Saved");
}

function autoSaveLoad() {
  let gameSave = localStorage.getItem("gameSave");
  if(gameSave) {
    gameSave = JSON.parse(atob(gameSave));
    game = gameSave;
    initalLoad();
    popUpText("Game Loaded");
  }
}

function hardResetGame() {
  game.resetCounter--;

  if (game.resetCounter >= 1) {
    hardReset.textContent= "Hard Reset Game \n Click "+game.resetCounter+" More Times";
    hardReset2.textContent= "Hard Reset Game \n Click "+game.resetCounter+" More Times";
    hardReset3.textContent= "Hard Reset Game \n Click "+game.resetCounter+" More Times";
  }
  else{
    let hardResetConfirm = confirm("Are you sure you wish to hard reset? You will retain nothing.");

    if(hardResetConfirm){ 

      hardReset.textContent= "Hard Reset Game";
      hardReset2.textContent= "Hard Reset Game";
      hardReset3.textContent= "Hard Reset Game";
      let gameSave = localStorage.getItem("gameSave");
      if(gameSave) {
        localStorage.clear("gameSave");      
      }

        game = {
          //realtime tracker
          counter: 0,
          realTimeSecs: 0,
          realTimeMins: 0,
          realTimeHours: 0,
          resetCounter: 5,
          
          win: false,
          //clock rate
          gameClock: 100,
          updateRate: 100,
          //main currency
          gold: 1,
          goldGen: 0.02,
          goldGenDefault: 0.02,
          runicGenDefault: 0.01,
          metalsGenDefault: 0.01,

          armoryTab: 1,
          //stats
          stats:{
            hp: 5,
            maxHp: 5,
            challengeHp: 0,
            challengeMaxHp: 0,
            maxHpBase: 5,
            str: 1,
            strBase: 1,
            challengeStr: 0,
            def: 0,
            challengeDef: 0,
            defBase: 0,
            heroism: 0,
            emblems:{
              tier_1:{
                total: 0,
              },
              tier_2:{
                total: 0,
              },
              tier_3:{
                total: 0,
              },
              monstersSlain: 0,
            },
            combatLevel: 1,
            challengeCombatLevel: 0,
            inCombat: false,
            alive: true,
            regenCounter: 0,
            equipment:{
              greaves:{
                name:"greaves",
                equipedPowerLevel:0,
                def: 0,
                str: 0,
                hp: 0,
              },
              legs:{
                name:"legs",
                equipedPowerLevel:0,
                def: 0,
                str: 0,
                hp: 0,
              },
              gauntlets:{
                name:"gauntlets",
                equipedPowerLevel:0,
                def: 0,
                str: 0,
                hp: 0,
              },
              plate:{
                name:"plate",
                equipedPowerLevel:0,
                def: 0,
                str: 0,
                hp: 0,
              },
              helm:{
                name:"helm",
                equipedPowerLevel:0,
                def: 0,
                str: 0,
                hp: 0,
              },
              pauldrons:{
                name:"pauldrons",
                equipedPowerLevel:0,
                def: 0,
                str: 0,
                hp: 0,
              },
              sword:{
                name:"sword",
                equipedPowerLevel:0,
                def: 0,
                str: 0,
                hp: 0,
              },
              shield:{
                name:"shield",
                equipedPowerLevel:0,
                def: 0,
                str: 0,
                hp: 0,
              },
            },
            schematics:{
              hydraulicGauntlets: {
                constructed: false,
                goblinCost: 50,
                oreCost: 100000000000,
                knowledgeCost: 1000000,
              },
              chainSwordModule: {
                constructed: false,
                goblinCost: 50,
                oreCost: 100000000000,
                knowledgeCost: 1000000,
              },
              enginePoweredBoots: {
                constructed: false,
                goblinCost: 50,
                oreCost: 100000000000,
                knowledgeCost: 1000000,
              },
              bloodTransfusionPauldrons: {
                constructed: false,
                goblinCost: 50,
                oreCost: 100000000000,
                knowledgeCost: 1000000,
              },
            },
          },

          //monsters & enemies
          monsters:{
            slime:{
              name: "Slime",
              hp: 3,
              maxHp: 3,
              str: 1,
              def: -1,
              combatLevel: 0,
              heroism: 1,
              alive: true,
              respawnRate: 3,
            },
            scorpion:{
              name: "Scorpion",
              hp: 6,
              maxHp: 6,
              str: 2,
              def: 2,
              combatLevel: 0,
              heroism: 8,
              alive: true,
              respawnRate: 15,
            },
            bear:{
              name: "Bear",
              hp: 25,
              maxHp: 25,
              str: 6,
              def: 2,
              combatLevel: 0,
              heroism: 24,
              alive: true,
              respawnRate: 40,
            },
            dwarvenSkeleton:{
              name: "Dwarven Skeleton",
              hp: 60,
              maxHp: 60,
              str: 17,
              def: 5,
              combatLevel: 0,
              heroism: 40,
              alive: true,
              respawnRate: 90,
            },
            griffon:{
              name: "Griffon",
              hp: 140,
              maxHp: 140,
              str: 63,
              def: 9,
              combatLevel: 0,
              heroism: 80,
              alive: true,
              respawnRate: 150,
            },
            //work on stats
            wyrmling:{
              name: "Wyrmling",
              hp: 200,
              maxHp: 200,
              str: 75,
              def: 18,
              combatLevel: 0,
              heroism: 160,
              alive: true,
              respawnRate: 180,
            },

            //challenge monsters
            giantLizard:{
              name: "Giant Lizard",
              hp: 55,
              maxHp: 55,
              str: 20,
              def: 5,
              combatLevel: 0,
              heroism: 0,
              alive: true,
              respawnRate: 1,
            },
            werewolf:{
              name: "Werewolf",
              hp: 80,
              maxHp: 80,
              str: 36,
              def: 8,
              combatLevel: 0,
              heroism: 0,
              alive: true,
              respawnRate: 1,
            },
            wyvern:{
              name: "Wyvern",
              hp: 92,
              maxHp: 92,
              str: 48,
              def: 12,
              combatLevel: 0,
              heroism: 0,
              alive: true,
              respawnRate: 1,
            },

            //bosses
            dwarfKing:{
              name: "Dwarf King",
              hp: 14,
              maxHp: 14,
              str: 11,
              def: 2,
              combatLevel: 0,
              heroism: 0,
              alive: true,
              respawnRate: false,
            },
            goblinChieftain:{
              name: "Goblin Chieftain",
              hp: 170,
              maxHp: 170,
              str: 50,
              def: 7,
              combatLevel: 0,
              heroism: 0,
              alive: true,
              respawnRate: false,
            },
            dragon:{
              name: "Dragon",
              hp: 1500,
              maxHp: 1500,
              str: 300,
              def: 100,
              combatLevel: 0,
              heroism: 0,
              alive: true,
              respawnRate: false,
            },

          },

          //units & costs
          peasents: {

            total: 0,
            cost: 1,

            efficiency: 1,
            efficiencyMult: 1.20,

            efficiencyCost: 200,
            efficiencyCostMult: 1.05,

            costMult: 1.05,
            autoBuy: false,
            efficiencyAutoBuy: false,

            unlocked: false,
          },
          scholars: {

            total: 0,
            cost: 11000,

            efficiency: 1,

            costMult: 1.05,
            autoBuy: false,

            unlocked: false,
            unlockCard: false,
            unlockCost: 5500,
          },

          blacksmiths: {
            
            total: 0,
            cost: 3500000,

            efficiency: 1,
            efficiencyMult: 0.40,

            efficiencyCost: 4300000,
            efficiencyCostMult: 1.15,

            costMult: 1.20,
            autoBuy: false,

            efficiencyAutoBuy: false,

            relicCost: 1000000,
            relicCostMult: 1.25,

            unlocked: false,
            unlockCard: false,
            unlockCost: 1750000,
          },

          lapidaries: {
            
            gems: {
              total:0,
            },

            total: 0,
            cost: 130000000,
            costMult: 1.32,

            efficiency: 1,
            efficiencyMult: 0.40,

            autoBuy: false,

            unlocked: false,
            unlockCard: false,
            unlockCost: 100000000,
          },

          miners: {
            
            total: 0,
            cost: 400000000000,
            costMult: 1.10,

            efficiency: 1,
            efficiencyMult: 0.40,

            autoBuy: false,

            unlocked: false,
            unlockCard: false,
            unlockCost: 200000000000,
          },

          brewmasters: {

            total: 0,
            cost: 100000000000000,
            costMult: 1.10,

            efficiency: 1.25,

            autoBuy: false,

            unlocked: false,
            unlockCard: false,
            unlockCost: 50000000000000,
          },

          goblins: {

            total: 0,
            cost: 100000000000000000,
            costMult: 1.03,

            efficiency: 1.07,
            efficiencyMult: 0.40,

            selection: null,

            autoBuy: false,

            unlocked: false,
            unlockCard: false,
            unlockCost: 50000000000000000,
          },

          mechanics: {

            total: 0,
            cost: 100000000000000000000000,
            costMult: 1.33,

            efficiency: 1.07,
            efficiencyMult: 0.40,

            autoBuy: false,

            unlocked: false,
            unlockCard: false,
            unlockCost: 50000000000000000000000,
          },

          //runes
          runes:{
            runicPower: 0,
            maan:{
              total: 0,
              infusion: 0,
              maxInfusion: 200,
              maxInfusionMult: 1.13,
              autoInfuse: false,
              name:"Maan",
            },
            nyd:{
              total: 0,
              infusion: 0,
              maxInfusion: 6000,
              maxInfusionMult: 1.20,
              autoInfuse: false,
              name:"Nyd",
            },
            uru:{
              total: 0,
              infusion: 0,
              maxInfusion: 800000,
              maxInfusionMult: 1.27,
              autoInfuse: false,
              name:"Uru",
            },
            //primal
            primalMaan:{
              total: 0,
              mult: 4.5,
              runeCost: 2,
              runeCostMult: 1,
              goblinCost: 2,
              goblinCostMult: 1.1,
              autoCreate: false,
              name:"Primal Maan",
            },
            primalNyd:{
              total: 0,
              mult: 5,
              runeCost: 2,
              runeCostMult: 1,
              goblinCost: 6,
              goblinCostMult: 1.1,
              autoCreate: false,
              name:"Primal Nyd",
            },
            primalUru:{
              total: 0,
              mult: 6.2,
              runeCost: 2,
              runeCostMult: 1,
              goblinCost: 9,
              goblinCostMult: 1.1,
              autoCreate: false,
              name:"Primal Uru",
            },
          },

          //metals
          metals:{
            ore: {
              total: 0,
            },
            bronze: {
              name:"bronze",
              powerLevel: 1,
              total: 0,
              relics:{
                total: 0,
              }
            },
            iron: {
              name:"iron",
              powerLevel: 2,
              smelting: false,
              total: 0,
              smeltingProgress: 0,
              output: 5,
              outputCost: 100000000000,
              outputCostMult: 1.20,
              tickRate: 80,
            },
            mythril: {
              name:"mythril",
              powerLevel: 3,
              smelting: false,
              total: 0,
              smeltingProgress: 0,
              output: 5,
              outputCost: 2000000000000,
              outputCostMult: 1.20,
              tickRate: 160,
            },
            adamant: {
              powerLevel: 4,
              name:"adamant",
              smelting: false,
              total: 0,
              smeltingProgress: 0,
              output: 5,
              outputCost: 30000000000000,
              outputCostMult: 1.20,
              tickRate: 220,
            },
            titanium: {
              powerLevel: 5,
              name:"titanium",
              smelting: false,
              total: 0,
              smeltingProgress: 0,
              output: 5,
              outputCost: 600000000000000,
              outputCostMult: 1.20,
              tickRate: 300,
            },
          },

          //armor
          armor:{

            bronze:{
              greaves:{
                name:"greaves",
                forged: false,
                cost: 35000,
                stats:{
                  hp: 1,
                  str:0,
                  def:1,
                },
              },
              legs:{
                name:"legs",
                forged: false,
                cost: 35000,
                stats:{
                  hp: 0,
                  str:0,
                  def:2,
                },
              },
              gauntlets:{
                name:"gauntlets",
                forged: false,
                cost: 50000,
                stats:{
                  hp: 0,
                  str:1,
                  def:1,
                },
              },
              plate:{
                name:"plate",
                forged: false,
                cost: 100000,
                stats:{
                  hp: 0,
                  str:0,
                  def:3,
                },
              },
              helm:{
                name:"helm",
                forged: false,
                cost: 45000,
                stats:{
                  hp: 1,
                  str:0,
                  def:1,
                },
              },
              pauldrons:{
                name:"pauldrons",
                forged: false,
                cost: 45000,
                stats:{
                  hp: 1,
                  str:0,
                  def:1,
                },
              },
              sword:{
                name:"sword",
                forged: false,
                cost: 100000,
                stats:{
                  hp: 0,
                  str:3,
                  def:0,
                },
              },
              shield:{
                name:"shield",
                forged: false,
                cost: 100000,
                stats:{
                  hp: 1,
                  str:0,
                  def:3,
                },
              },
            },    
            iron:{
              greaves:{
                name:"greaves",
                forged: false,
                cost: 35000,
                stats:{
                  hp: 2,
                  str:0,
                  def:3,
                },
              },
              legs:{
                name:"legs",
                forged: false,
                cost: 35000,
                stats:{
                  hp: 0,
                  str:1,
                  def:4,
                },
              },
              gauntlets:{
                name:"gauntlets",
                forged: false,
                cost: 40000,
                stats:{
                  hp: 0,
                  str:1,
                  def:2,
                },
              },
              plate:{
                name:"plate",
                forged: false,
                cost: 75000,
                stats:{
                  hp: 2,
                  str:0,
                  def:7,
                },
              },
              helm:{
                name:"helm",
                forged: false,
                cost: 35000,
                stats:{
                  hp: 1,
                  str:2,
                  def:2,
                },
              },
              pauldrons:{
                name:"pauldrons",
                forged: false,
                cost: 35000,
                stats:{
                  hp: 1,
                  str:0,
                  def:4,
                },
              },
              sword:{
                name:"sword",
                forged: false,
                cost: 130000,
                stats:{
                  hp: 1,
                  str:8,
                  def:1,
                },
              },
              shield:{
                name:"shield",
                forged: false,
                cost: 110000,
                stats:{
                  hp: 2,
                  str:0,
                  def:7,
                },
              },
            },    
            mythril:{
              greaves:{
                name:"greaves",
                forged: false,
                cost: 35000,
                stats:{
                  hp: 5,
                  str:0,
                  def:12,
                },
              },
              legs:{
                name:"legs",
                forged: false,
                cost: 35000,
                stats:{
                  hp: 0,
                  str:3,
                  def:16,
                },
              },
              gauntlets:{
                name:"gauntlets",
                forged: false,
                cost: 40000,
                stats:{
                  hp: 0,
                  str:7,
                  def:15,
                },
              },
              plate:{
                name:"plate",
                forged: false,
                cost: 75000,
                stats:{
                  hp: 0,
                  str:0,
                  def:18,
                },
              },
              helm:{
                name:"helm",
                forged: false,
                cost: 35000,
                stats:{
                  hp: 7,
                  str:4,
                  def:10,
                },
              },
              pauldrons:{
                name:"pauldrons",
                forged: false,
                cost: 35000,
                stats:{
                  hp: 4,
                  str:0,
                  def:12,
                },
              },
              sword:{
                name:"sword",
                forged: false,
                cost: 130000,
                stats:{
                  hp: 5,
                  str:18,
                  def:0,
                },
              },
              shield:{
                name:"shield",
                forged: false,
                cost: 110000,
                stats:{
                  hp: 9,
                  str:0,
                  def:20,
                },
              },
            },    
            adamant:{
              greaves:{
                name:"greaves",
                forged: false,
                cost: 35000,
                stats:{
                  hp: 35,
                  str:0,
                  def:50,
                },
              },
              legs:{
                name:"legs",
                forged: false,
                cost: 35000,
                stats:{
                  hp: 0,
                  str:12,
                  def:58,
                },
              },
              gauntlets:{
                name:"gauntlets",
                forged: false,
                cost: 40000,
                stats:{
                  hp: 0,
                  str:29,
                  def:46,
                },
              },
              plate:{
                name:"plate",
                forged: false,
                cost: 75000,
                stats:{
                  hp: 0,
                  str:0,
                  def:65,
                },
              },
              helm:{
                name:"helm",
                forged: false,
                cost: 35000,
                stats:{
                  hp: 30,
                  str:25,
                  def:25,
                },
              },
              pauldrons:{
                name:"pauldrons",
                forged: false,
                cost: 35000,
                stats:{
                  hp: 26,
                  str:0,
                  def:52,
                },
              },
              sword:{
                name:"sword",
                forged: false,
                cost: 130000,
                stats:{
                  hp: 12,
                  str:74,
                  def:8,
                },
              },
              shield:{
                name:"shield",
                forged: false,
                cost: 110000,
                stats:{
                  hp: 25,
                  str:0,
                  def:66,
                },
              },
            },    
            titanium:{
              greaves:{
                name:"greaves",
                forged: false,
                cost: 35000,
                stats:{
                  hp: 60,
                  str:0,
                  def:85,
                },
              },
              legs:{
                name:"legs",
                forged: false,
                cost: 35000,
                stats:{
                  hp: 0,
                  str:40,
                  def:90,
                },
              },
              gauntlets:{
                name:"gauntlets",
                forged: false,
                cost: 40000,
                stats:{
                  hp: 0,
                  str:65,
                  def:82,
                },
              },
              plate:{
                name:"plate",
                forged: false,
                cost: 75000,
                stats:{
                  hp: 0,
                  str:0,
                  def:99,
                },
              },
              helm:{
                name:"helm",
                forged: false,
                cost: 35000,
                stats:{
                  hp: 70,
                  str:45,
                  def:50,
                },
              },
              pauldrons:{
                name:"pauldrons",
                forged: false,
                cost: 35000,
                stats:{
                  hp: 70,
                  str:0,
                  def:86,
                },
              },
              sword:{
                name:"sword",
                forged: false,
                cost: 130000,
                stats:{
                  hp: 34,
                  str:99,
                  def:14,
                },
              },
              shield:{
                name:"shield",
                forged: false,
                cost: 110000,
                stats:{
                  hp: 70,
                  str:0,
                  def:120,
                },
              },
            },
          },

          //knowledge
          knowledge:{
            total: 0,
          },

          //upgrades
          upgrades: {
            peasents:{
              maxUpgradeCost: 100000,
              autoMaxUpgradeCost: 100000000,

              maxEffUpgradeCost: 100000,
              autoMaxEffUpgradeCost: 100000000,
            },
            scholars:{
              maxUpgradeCost: 50000000,
              autoMaxUpgradeCost: 1000000000,
              //unlock runes
              unlockNyd: false,
              unlockNydCost: 1000000,
              unlockUru: false,
              unlockUruCost: 1000000000,
              autoInfuseCost: 500000000,
              unlockAutoInfuse: false,
            },
            blacksmiths:{
              maxUpgradeCost: 5000000000000,
              autoMaxUpgradeCost: 500000000000000,

              maxEffUpgradeCost: 5000000000000000,
              autoMaxEffUpgradeCost: 500000000000000000,
            },
            lapidaries:{
              maxUpgradeCost: 1000000000000000,
              autoMaxUpgradeCost: 100000000000000000,
            },
            miners:{

              maxUpgradeCost: 50000000000000000,
              autoMaxUpgradeCost: 5000000000000000000,

              forge:{
                ironSmelterOreCost: 10,
                mythrilSmelterOreCost: 1000,
                mythrilSmelterIronCost: 5,
                adamantSmelterOreCost: 40000,
                adamantSmelterMythrilCost: 5,
                titaniumSmelterOreCost: 800000000,
                titaniumSmelterAdamantCost: 5,
              },

            },

            brewmasters:{
              maxUpgradeCost: 100000000000000000,
              autoMaxUpgradeCost: 10000000000000000000,
            },

            goblins:{
              maxUpgradeCost: 500000000000000000000,
              autoMaxUpgradeCost: 50000000000000000000000,
            },

            mechanics:{
              maxUpgradeCost: 50000000000000000000000,
              autoMaxUpgradeCost: 5000000000000000000000000,
            },

          },

          phase2:{
            active: false,
            conquering: false,
            conqueringPercent: 0,

            troopRegen: false,
            troopRegenCounter: 0,

            troopCounter: 0,
            portalCounter: 200,
            demonArtifactCounter: 0,
            demonSoulCounter: 0,

            isConqueringFortress: false,

            resources:{
              troops: 50,
              troopsEfficiency: 1,
              troopsEfficiencyCost: 5,
              portals: 0,
              portalsCost: 1,
              portalsEfficiency: 1,
              portalsEfficiencyCost: 5,
              demonArtifacts: 0,
              demonSouls: 0,
              demonSoulsCost: 8,
              totalHellConquered: 1,
              facesDestroyed: 0,
            },

            prevLocation: [0,0],
            location: [0,0],

            specialLocations:{
              headquarters: [0,0],
              fortress_1: [1,6],
              fortress_2: [6,4],
              fortress_3: [8,8],
            },

            map:[
              ['conquered headquarters','unconquered','unconquered','unconquered','unconquered','unconquered hell-stronghold','unconquered hell-stronghold','unconquered hell-stronghold','unconquered','unconquered'],
              ['unconquered','unconquered','unconquered','unconquered','unconquered','unconquered hell-stronghold','unconquered fortress','unconquered hell-stronghold','unconquered','unconquered'],
              ['unconquered','unconquered','unconquered','unconquered','unconquered','unconquered hell-stronghold','unconquered hell-stronghold','unconquered hell-stronghold','unconquered','unconquered'],
              ['unconquered','unconquered','unconquered','unconquered','unconquered','unconquered','unconquered','unconquered','unconquered','unconquered'],
              ['unconquered','unconquered','unconquered','unconquered','unconquered','unconquered','unconquered','unconquered','unconquered','unconquered'],
              ['unconquered','unconquered','unconquered','unconquered hell-stronghold','unconquered hell-stronghold','unconquered hell-stronghold','unconquered','unconquered','unconquered','unconquered'],
              ['unconquered','unconquered','unconquered','unconquered hell-stronghold','unconquered fortress','unconquered hell-stronghold','unconquered','unconquered','unconquered','unconquered'],
              ['unconquered','unconquered','unconquered','unconquered hell-stronghold','unconquered hell-stronghold','unconquered hell-stronghold','unconquered','unconquered hell-stronghold','unconquered hell-stronghold','unconquered hell-stronghold'],
              ['unconquered','unconquered','unconquered','unconquered','unconquered','unconquered','unconquered','unconquered hell-stronghold','unconquered fortress','unconquered hell-stronghold'],
              ['unconquered','unconquered','unconquered','unconquered','unconquered','unconquered','unconquered','unconquered hell-stronghold','unconquered hell-stronghold','unconquered hell-stronghold'],
            ],
            text:[],

          },
        }

      $(".win-screen").addClass("hidden");
      initalLoad();
      popUpText("Game Reset");

    }
    else{
      game.resetCounter = 5;
      hardReset.textContent= "Hard Reset Game";
      hardReset2.textContent= "Hard Reset Game";
      hardReset3.textContent= "Hard Reset Game";
    }

  }
}

//check autosave
autoSaveLoad();

function popUpText(text) {
  $(".pop-up").remove();

  let textElement = "<section class='pop-up'>"+text+"</section>";
  $("body").prepend(textElement);

  setTimeout(function(){
    $(".pop-up").remove();
  }, 2500);
}