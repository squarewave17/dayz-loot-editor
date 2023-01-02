const itemInfo = [
  {
    ACOGOptic: {
      niceName: "ATOG 4x32 Scope",
      description:
        "A standardized rail-mounted, 4x magnifying scope with tritium-illuminated reticle designed for M4-A1 assault rifle",
      usedBy: ["SG5-K", "USG-45", "M4-A1", "Pioneer", "SVAL", "LAR"],
    },
  },
  {
    ACOGOptic_6x: {
      niceName: "ATOG 6x48 Scope",
      description:
        "A standardized rail-mounted, 6x magnifying scope. Designed for western designated marksman rifles. A Baraka sight is mounted to the top railing",
      usedBy: ["SG5-K", "USG-45", "M4-A1", "Pioneer", "SVAL", "LAR", "AUR AX"],
      magazines: ["	30rd KA-101 Mag"],
    },
  },
  {
    AK101: {
      niceName: "KA-101",
      description:
        "Selective-fire assault rifle fed from a detachable magazine. Export version of modernized KA-74M with compatible attachments. Uses 5.56x45mm rounds",
      ammo: ["5.56x45mm Rounds", "5.56x45mm Tracer Rounds"],
      attatchments: {
        magazine: ["30rd KA-101 Mag"],
        optics: ["East Optics"],
        handguards: [
          "KA Wooden Handguard",
          "KA Polymer Handguard",
          "KA Rail Handguard",
        ],
        buttstocks: [
          "KA Wooden Buttstock",
          "KA Lightweight Buttstock",
          "KA Polymer Buttstock",
          "KAS-74U Lightweight Buttstock",
        ],
        muzzles: ["Normalized Suppressor", "Plastic Bottle Suppressor"],
        illumination: ["Universal Flashlight"],
        bayonets: ["KA Bayonet"],
        wraps: ["Ghillie Rifle Wrap"],
      },
    },
  },
  {
    AK101_Black: {
      niceName: "KA-101 (black)",
      description:
        "Selective-fire assault rifle fed from a detachable magazine. Export version of modernized KA-74M with compatible attachments. Uses 5.56x45mm rounds",
      ammo: ["5.56x45mm Rounds", "5.56x45mm Tracer Rounds"],
      attatchments: {
        magazine: ["30rd KA-101 Mag"],
        optic: ["East Optics"],
        handguard: [
          "KA Wooden Handguard",
          "KA Polymer Handguard",
          "KA Rail Handguard",
        ],
        buttstock: [
          "KA Wooden Buttstock",
          "KA Lightweight Buttstock",
          "KA Polymer Buttstock",
          "KAS-74U Lightweight Buttstock",
        ],
        muzzle: ["Normalized Suppressor", "Plastic Bottle Suppressor"],
        illumination: ["Universal Flashlight"],
        bayonet: ["KA Bayonet"],
        wrap: ["Ghillie Rifle Wrap"],
      },
    },
  },
  {
    AK101_Green: {
      niceName: "KA-101 (green",
      description:
        "Selective-fire assault rifle fed from a detachable magazine. Export version of modernized KA-74M with compatible attachments. Uses 5.56x45mm rounds",
      ammo: ["5.56x45mm Rounds", "5.56x45mm Tracer Rounds"],
      attatchments: {
        magazine: ["30rd KA-101 Mag"],
        optics: ["East Optics"],
        handguards: [
          "KA Wooden Handguard",
          "KA Polymer Handguard",
          "KA Rail Handguard",
        ],
        buttstocks: [
          "KA Wooden Buttstock",
          "KA Lightweight Buttstock",
          "KA Polymer Buttstock",
          "KAS-74U Lightweight Buttstock",
        ],
        muzzles: ["Normalized Suppressor", "Plastic Bottle Suppressor"],
        illumination: ["Universal Flashlight"],
        bayonets: ["KA Bayonet"],
        wraps: ["Ghillie Rifle Wrap"],
      },
    },
  },
  {
    AK74: {
      niceName: "KA-74",
      description:
        "Selective-fire assault rifle fed from a detachable magazine. Replacement of KA-M with compatible attachments. Uses 5.45x39mm rounds.",
      ammo: ["5.56x45mm Rounds", "5.56x45mm Tracer Rounds"],
      attatchments: {
        magazine: ["30rd KA-74 Mag", "45rd KA-74 Mag"],
        optics: [
          "Kobra Sights",
          "p1-87-L Scope",
          "PSO-1 Scope",
          "PSO-1-1 Scope",
          "1PN51 Scope",
        ],
        handguards: [
          "KA Wooden Handguard",
          "KA Polymer Handguard",
          "KA Rail Handguard",
        ],
        buttstocks: [
          "KA Wooden Buttstock",
          "KA Lightweight Buttstock",
          "KA Polymer Buttstock",
          "KAS-74U Lightweight Buttstock",
        ],
        muzzles: ["Normalized Suppressor", "Plastic Bottle Suppressor"],
        illumination: ["Universal Flashlight"],
        bayonets: ["KA Bayonet"],
        wraps: ["Ghillie Rifle Wrap"],
      },
    },
  },
  {
    AK74_Black: {
      niceName: "KA-74 (black)",
      description:
        "Selective-fire assault rifle fed from a detachable magazine. Replacement of KA-M with compatible attachments. Uses 5.45x39mm rounds.",
      ammo: ["5.56x45mm Rounds", "5.56x45mm Tracer Rounds"],
      attatchments: {
        magazine: ["30rd KA-74 Mag", "45rd KA-74 Mag"],
        optics: [
          "Kobra Sights",
          "p1-87-L Scope",
          "PSO-1 Scope",
          "PSO-1-1 Scope",
          "1PN51 Scope",
        ],
        handguards: [
          "KA Wooden Handguard",
          "KA Polymer Handguard",
          "KA Rail Handguard",
        ],
        buttstocks: [
          "KA Wooden Buttstock",
          "KA Lightweight Buttstock",
          "KA Polymer Buttstock",
          "KAS-74U Lightweight Buttstock",
        ],
        muzzles: ["Normalized Suppressor", "Plastic Bottle Suppressor"],
        illumination: ["Universal Flashlight"],
        bayonets: ["KA Bayonet"],
        wraps: ["Ghillie Rifle Wrap"],
      },
    },
  },
  {
    AK74_Green: {
      niceName: "KA-74 (black",
      description:
        "Selective-fire assault rifle fed from a detachable magazine. Replacement of KA-M with compatible attachments. Uses 5.45x39mm rounds.",
      ammo: ["5.56x45mm Rounds", "5.56x45mm Tracer Rounds"],
      attatchments: {
        magazine: ["30rd KA-74 Mag", "45rd KA-74 Mag"],
        optics: [
          "Kobra Sights",
          "p1-87-L Scope",
          "PSO-1 Scope",
          "PSO-1-1 Scope",
          "1PN51 Scope",
        ],
        handguards: [
          "KA Wooden Handguard",
          "KA Polymer Handguard",
          "KA Rail Handguard",
        ],
        buttstocks: [
          "KA Wooden Buttstock",
          "KA Lightweight Buttstock",
          "KA Polymer Buttstock",
          "KAS-74U Lightweight Buttstock",
        ],
        muzzles: ["Normalized Suppressor", "Plastic Bottle Suppressor"],
        illumination: ["Universal Flashlight"],
        bayonets: ["KA Bayonet"],
        wraps: ["Ghillie Rifle Wrap"],
      },
    },
  },
  {
    AK74_Hndgrd: {
      niceName: "",
      description: "",
    },
  },
  {
    AK74_WoodBttstck: {
      niceName: "",
      description: "",
    },
  },
  {
    AKM: {
      niceName: "",
      description: "",
    },
  },
  {
    AKS74U: {
      niceName: "",
      description: "",
    },
  },
  {
    AKS74U_Black: {
      niceName: "",
      description: "",
    },
  },
  {
    AKS74U_Bttstck: {
      niceName: "",
      description: "",
    },
  },
  {
    AKS74U_Green: {
      niceName: "",
      description: "",
    },
  },
  {
    AK_Bayonet: {
      niceName: "",
      description: "",
    },
  },
  {
    AK_FoldingBttstck: {
      niceName: "",
      description: "",
    },
  },
  {
    AK_FoldingBttstck_Black: {
      niceName: "",
      description: "",
    },
  },
  {
    AK_FoldingBttstck_Green: {
      niceName: "",
      description: "",
    },
  },
  {
    AK_PlasticBttstck: {
      niceName: "",
      description: "",
    },
  },
  {
    AK_PlasticBttstck_Black: {
      niceName: "",
      description: "",
    },
  },
  {
    AK_PlasticBttstck_Green: {
      niceName: "",
      description: "",
    },
  },
  {
    AK_PlasticHndgrd: {
      niceName: "",
      description: "",
    },
  },
  {
    AK_RailHndgrd: {
      niceName: "",
      description: "",
    },
  },
  {
    AK_RailHndgrd_Black: {
      niceName: "",
      description: "",
    },
  },
  {
    AK_RailHndgrd_Green: {
      niceName: "",
      description: "",
    },
  },
  {
    AK_Suppressor: {
      niceName: "",
      description: "",
    },
  },
  {
    AK_WoodBttstck: {
      niceName: "",
      description: "",
    },
  },
  {
    AK_WoodBttstck_Black: {
      niceName: "",
      description: "",
    },
  },
  {
    AK_WoodBttstck_Camo: {
      niceName: "",
      description: "",
    },
  },
  {
    AK_WoodHndgrd: {
      niceName: "",
      description: "",
    },
  },
  {
    AK_WoodHndgrd_Black: {
      niceName: "",
      description: "",
    },
  },
  {
    AK_WoodHndgrd_Camo: {
      niceName: "",
      description: "",
    },
  },
  {
    ASVAL: {
      niceName: "",
      description: "",
    },
  },
  {
    AgaricusMushroom: {
      niceName: "",
      description: "",
    },
  },
  {
    AirborneMask: {
      niceName: "NBC Respirator",
      description:
        "	A full face gas mask with one filter. Used to protect from airborne pollutants and toxic gases. Fits the 'Nuclear, Biological, Chemical' suit.",
    },
  },
  {
    AlarmClock_Blue: {
      niceName: "",
      description: "",
    },
  },
  {
    AlarmClock_Green: {
      niceName: "",
      description: "",
    },
  },
  {
    AlarmClock_Red: {
      niceName: "",
      description: "",
    },
  },
  {
    AliceBag_Black: {
      niceName: "",
      description: "",
    },
  },
  {
    AliceBag_Camo: {
      niceName: "",
      description: "",
    },
  },
  {
    AliceBag_Green: {
      niceName: "",
      description: "",
    },
  },
  {
    AmmoBox: {
      niceName: "",
      description: "",
    },
  },
  {
    AmmoBox_00buck_10rnd: {
      niceName: "",
      description: "",
    },
  },
  {
    AmmoBox_12gaRubberSlug_10Rnd: {
      niceName: "",
      description: "",
    },
  },
  {
    AmmoBox_12gaSlug_10Rnd: {
      niceName: "",
      description: "",
    },
  },
  {
    AmmoBox_22_50Rnd: {
      niceName: "",
      description: "",
    },
  },
  {
    AmmoBox_308WinTracer_20Rnd: {
      niceName: "",
      description: "",
    },
  },
  {
    AmmoBox_308Win_20Rnd: {
      niceName: "",
      description: "",
    },
  },
  {
    AmmoBox_357_20Rnd: {
      niceName: "",
      description: "",
    },
  },
  {
    AmmoBox_380_35rnd: {
      niceName: "",
      description: "",
    },
  },
  {
    AmmoBox_45ACP_25rnd: {
      niceName: "",
      description: "",
    },
  },
  {
    AmmoBox_545x39Tracer_20Rnd: {
      niceName: "",
      description: "",
    },
  },
  {
    AmmoBox_545x39_20Rnd: {
      niceName: "",
      description: "",
    },
  },
  {
    AmmoBox_556x45Tracer_20Rnd: {
      niceName: "",
      description: "",
    },
  },
  {
    AmmoBox_556x45_20Rnd: {
      niceName: "",
      description: "",
    },
  },
  {
    AmmoBox_762x39Tracer_20Rnd: {
      niceName: "",
      description: "",
    },
  },
  {
    AmmoBox_762x39_20Rnd: {
      niceName: "",
      description: "",
    },
  },
  {
    AmmoBox_762x54Tracer_20Rnd: {
      niceName: "",
      description: "",
    },
  },
  {
    AmmoBox_762x54_20Rnd: {
      niceName: "",
      description: "",
    },
  },
  {
    AmmoBox_9x19_25rnd: {
      niceName: "",
      description: "",
    },
  },
  {
    AmmoBox_9x39AP_20Rnd: {
      niceName: "",
      description: "",
    },
  },
  {
    AmmoBox_9x39_20Rnd: {
      niceName: "",
      description: "",
    },
  },
  {
    Ammo_12gaPellets: {
      niceName: "",
      description: "",
    },
  },
  {
    Ammo_12gaRubberSlug: {
      niceName: "",
      description: "",
    },
  },
  {
    Ammo_12gaSlug: {
      niceName: "",
      description: "",
    },
  },
  {
    Ammo_22: {
      niceName: "",
      description: "",
    },
  },
  {
    Ammo_308Win: {
      niceName: "",
      description: "",
    },
  },
  {
    Ammo_308WinTracer: {
      niceName: "",
      description: "",
    },
  },
  {
    Ammo_357: {
      niceName: "",
      description: "",
    },
  },
  {
    Ammo_380: {
      niceName: "",
      description: "",
    },
  },
  {
    Ammo_40mm_ChemGas: {
      niceName: "",
      description: "",
    },
  },
  {
    Ammo_40mm_Explosive: {
      niceName: "",
      description: "",
    },
  },
  {
    Ammo_40mm_Smoke_Black: {
      niceName: "",
      description: "",
    },
  },
  {
    Ammo_40mm_Smoke_Green: {
      niceName: "",
      description: "",
    },
  },
  {
    Ammo_40mm_Smoke_Red: {
      niceName: "",
      description: "",
    },
  },
  {
    Ammo_40mm_Smoke_White: {
      niceName: "",
      description: "",
    },
  },
  {
    Ammo_45ACP: {
      niceName: "",
      description: "",
    },
  },
  {
    Ammo_545x39: {
      niceName: "",
      description: "",
    },
  },
  {
    Ammo_545x39Tracer: {
      niceName: "",
      description: "",
    },
  },
  {
    Ammo_556x45: {
      niceName: "",
      description: "",
    },
  },
  {
    Ammo_556x45Tracer: {
      niceName: "",
      description: "",
    },
  },
  {
    Ammo_762x39: {
      niceName: "",
      description: "",
    },
  },
  {
    Ammo_762x39Tracer: {
      niceName: "",
      description: "",
    },
  },
  {
    Ammo_762x54: {
      niceName: "",
      description: "",
    },
  },
  {
    Ammo_762x54Tracer: {
      niceName: "",
      description: "",
    },
  },
  {
    Ammo_9x19: {
      niceName: "",
      description: "",
    },
  },
  {
    Ammo_9x39: {
      niceName: "",
      description: "",
    },
  },
  {
    Ammo_9x39AP: {
      niceName: "",
      description: "",
    },
  },
  {
    Ammo_Flare: {
      niceName: "",
      description: "",
    },
  },
  {
    Ammo_FlareBlue: {
      niceName: "",
      description: "",
    },
  },
  {
    Ammo_FlareGreen: {
      niceName: "",
      description: "",
    },
  },
  {
    Ammo_FlareRed: {
      niceName: "",
      description: "",
    },
  },
  {
    Animal_BosTaurusF_Brown: {
      niceName: "",
      description: "",
    },
  },
  {
    Animal_BosTaurusF_Spotted: {
      niceName: "",
      description: "",
    },
  },
  {
    Animal_BosTaurusF_White: {
      niceName: "",
      description: "",
    },
  },
  {
    Animal_BosTaurus_Brown: {
      niceName: "",
      description: "",
    },
  },
  {
    Animal_BosTaurus_Spotted: {
      niceName: "",
      description: "",
    },
  },
  {
    Animal_BosTaurus_White: {
      niceName: "",
      description: "",
    },
  },
  {
    Animal_CanisLupus_Grey: {
      niceName: "",
      description: "",
    },
  },
  {
    Animal_CanisLupus_White: {
      niceName: "",
      description: "",
    },
  },
  {
    Animal_CapraHircusF: {
      niceName: "",
      description: "",
    },
  },
  {
    Animal_CapraHircus_Black: {
      niceName: "",
      description: "",
    },
  },
  {
    Animal_CapraHircus_Brown: {
      niceName: "",
      description: "",
    },
  },
  {
    Animal_CapraHircus_White: {
      niceName: "",
      description: "",
    },
  },
  {
    Animal_CapreolusCapreolus: {
      niceName: "",
      description: "",
    },
  },
  {
    Animal_CapreolusCapreolusF: {
      niceName: "",
      description: "",
    },
  },
  {
    Animal_CervusElaphus: {
      niceName: "",
      description: "",
    },
  },
  {
    Animal_CervusElaphusF: {
      niceName: "",
      description: "",
    },
  },
  {
    Animal_GallusGallusDomesticus: {
      niceName: "",
      description: "",
    },
  },
  {
    Animal_GallusGallusDomesticusF_Brown: {
      niceName: "",
      description: "",
    },
  },
  {
    Animal_GallusGallusDomesticusF_Spotted: {
      niceName: "",
      description: "",
    },
  },
  {
    Animal_GallusGallusDomesticusF_White: {
      niceName: "",
      description: "",
    },
  },
  {
    Animal_OvisAries: {
      niceName: "",
      description: "",
    },
  },
  {
    Animal_OvisAriesF: {
      niceName: "",
      description: "",
    },
  },
  {
    Animal_SusDomesticus: {
      niceName: "",
      description: "",
    },
  },
  {
    Animal_SusScrofa: {
      niceName: "",
      description: "",
    },
  },
  {
    Animal_UrsusArctos: {
      niceName: "",
      description: "",
    },
  },
  {
    AntiChemInjector: {
      niceName: "",
      description: "",
    },
  },
  {
    AntiPestsSpray: {
      niceName: "",
      description: "",
    },
  },
  {
    Apple: {
      niceName: "",
      description: "",
    },
  },
  {
    Armband_APA: {
      niceName: "",
      description: "",
    },
  },
  {
    Armband_Altis: {
      niceName: "",
      description: "",
    },
  },
  {
    Armband_BabyDeer: {
      niceName: "",
      description: "",
    },
  },
  {
    Armband_Bear: {
      niceName: "",
      description: "",
    },
  },
  {
    Armband_Black: {
      niceName: "",
      description: "",
    },
  },
  {
    Armband_Blue: {
      niceName: "",
      description: "",
    },
  },
  {
    Armband_Bohemia: {
      niceName: "",
      description: "",
    },
  },
  {
    Armband_BrainZ: {
      niceName: "",
      description: "",
    },
  },
  {
    Armband_CDF: {
      niceName: "",
      description: "",
    },
  },
  {
    Armband_CHEL: {
      niceName: "",
      description: "",
    },
  },
  {
    Armband_CMC: {
      niceName: "",
      description: "",
    },
  },
  {
    Armband_Cannibals: {
      niceName: "",
      description: "",
    },
  },
  {
    Armband_Chedaki: {
      niceName: "",
      description: "",
    },
  },
  {
    Armband_Chernarus: {
      niceName: "",
      description: "",
    },
  },
  {
    Armband_DayZ: {
      niceName: "",
      description: "",
    },
  },
  {
    Armband_Green: {
      niceName: "",
      description: "",
    },
  },
  {
    Armband_HunterZ: {
      niceName: "",
      description: "",
    },
  },
  {
    Armband_Livonia: {
      niceName: "",
      description: "",
    },
  },
  {
    Armband_LivoniaArmy: {
      niceName: "",
      description: "",
    },
  },
  {
    Armband_LivoniaPolice: {
      niceName: "",
      description: "",
    },
  },
  {
    Armband_NAPA: {
      niceName: "",
      description: "",
    },
  },
  {
    Armband_NSahrani: {
      niceName: "",
      description: "",
    },
  },
  {
    Armband_Orange: {
      niceName: "",
      description: "",
    },
  },
  {
    Armband_Pink: {
      niceName: "",
      description: "",
    },
  },
  {
    Armband_Pirates: {
      niceName: "",
      description: "",
    },
  },
  {
    Armband_RSTA: {
      niceName: "",
      description: "",
    },
  },
  {
    Armband_Red: {
      niceName: "",
      description: "",
    },
  },
  {
    Armband_Refuge: {
      niceName: "",
      description: "",
    },
  },
  {
    Armband_Rooster: {
      niceName: "",
      description: "",
    },
  },
  {
    Armband_SSahrani: {
      niceName: "",
      description: "",
    },
  },
  {
    Armband_Snake: {
      niceName: "",
      description: "",
    },
  },
  {
    Armband_TEC: {
      niceName: "",
      description: "",
    },
  },
  {
    Armband_UEC: {
      niceName: "",
      description: "",
    },
  },
  {
    Armband_White: {
      niceName: "",
      description: "",
    },
  },
  {
    Armband_Wolf: {
      niceName: "",
      description: "",
    },
  },
  {
    Armband_Yellow: {
      niceName: "",
      description: "",
    },
  },
  {
    Armband_Zenit: {
      niceName: "",
      description: "",
    },
  },
  {
    AssaultBag_Black: {
      niceName: "",
      description: "",
    },
  },
  {
    AssaultBag_Green: {
      niceName: "",
      description: "",
    },
  },
  {
    AssaultBag_Ttsko: {
      niceName: "",
      description: "",
    },
  },
  {
    AthleticShoes_Black: {
      niceName: "",
      description: "",
    },
  },
  {
    AthleticShoes_Blue: {
      niceName: "",
      description: "",
    },
  },
  {
    AthleticShoes_Brown: {
      niceName: "",
      description: "",
    },
  },
  {
    AthleticShoes_Green: {
      niceName: "",
      description: "",
    },
  },
  {
    AthleticShoes_Grey: {
      niceName: "",
      description: "",
    },
  },
  {
    Aug: {
      niceName: "",
      description: "",
    },
  },
  {
    AugShort: {
      niceName: "",
      description: "",
    },
  },
  {
    AuriculariaMushroom: {
      niceName: "",
      description: "",
    },
  },
  {
    AviatorGlasses: {
      niceName: "",
      description: "",
    },
  },
  {
    B95: {
      niceName: "",
      description: "",
    },
  },
  {
    BDUJacket: {
      niceName: "",
      description: "",
    },
  },
  {
    BDUPants: {
      niceName: "",
      description: "",
    },
  },
  {
    BUISOptic: {
      niceName: "",
      description: "",
    },
  },
  {
    Bait: {
      niceName: "",
      description: "",
    },
  },
  {
    BakedBeansCan: {
      niceName: "",
      description: "",
    },
  },
  {
    BakedBeansCan_Opened: {
      niceName: "",
      description: "",
    },
  },
  {
    Balaclava3Holes_Beige: {
      niceName: "",
      description: "",
    },
  },
  {
    Balaclava3Holes_Black: {
      niceName: "",
      description: "",
    },
  },
  {
    Balaclava3Holes_Blue: {
      niceName: "",
      description: "",
    },
  },
  {
    Balaclava3Holes_Green: {
      niceName: "",
      description: "",
    },
  },
  {
    BalaclavaMask_Beige: {
      niceName: "",
      description: "",
    },
  },
  {
    BalaclavaMask_Black: {
      niceName: "",
      description: "",
    },
  },
  {
    BalaclavaMask_Blackskull: {
      niceName: "",
      description: "",
    },
  },
  {
    BalaclavaMask_Blue: {
      niceName: "",
      description: "",
    },
  },
  {
    BalaclavaMask_Green: {
      niceName: "",
      description: "",
    },
  },
  {
    BalaclavaMask_Pink: {
      niceName: "",
      description: "",
    },
  },
  {
    BalaclavaMask_White: {
      niceName: "",
      description: "",
    },
  },
  {
    BallisticHelmet_Black: {
      niceName: "",
      description: "",
    },
  },
  {
    BallisticHelmet_Green: {
      niceName: "",
      description: "",
    },
  },
  {
    BallisticHelmet_UN: {
      niceName: "",
      description: "",
    },
  },
  {
    BandageDressing: {
      niceName: "",
      description: "",
    },
  },
  {
    Bandana_Blackpattern: {
      niceName: "",
      description: "",
    },
  },
  {
    Bandana_Camopattern: {
      niceName: "",
      description: "",
    },
  },
  {
    Bandana_Greenpattern: {
      niceName: "",
      description: "",
    },
  },
  {
    Bandana_Polkapattern: {
      niceName: "",
      description: "",
    },
  },
  {
    Bandana_Redpattern: {
      niceName: "",
      description: "",
    },
  },
  {
    BarbedBaseballBat: {
      niceName: "",
      description: "",
    },
  },
  {
    BarbedWire: {
      niceName: "",
      description: "",
    },
  },
  {
    Bark_Birch: {
      niceName: "",
      description: "",
    },
  },
  {
    Bark_Oak: {
      niceName: "",
      description: "",
    },
  },
  {
    BarrelHoles_Blue: {
      niceName: "",
      description: "",
    },
  },
  {
    BarrelHoles_Green: {
      niceName: "",
      description: "",
    },
  },
  {
    BarrelHoles_Red: {
      niceName: "",
      description: "",
    },
  },
  {
    BarrelHoles_Yellow: {
      niceName: "",
      description: "",
    },
  },
  {
    Barrel_Blue: {
      niceName: "",
      description: "",
    },
  },
  {
    Barrel_Green: {
      niceName: "",
      description: "",
    },
  },
  {
    Barrel_Red: {
      niceName: "",
      description: "",
    },
  },
  {
    Barrel_Yellow: {
      niceName: "",
      description: "",
    },
  },
  {
    BaseRadio: {
      niceName: "",
      description: "",
    },
  },
  {
    BaseballBat: {
      niceName: "",
      description: "",
    },
  },
  {
    BaseballCap_Beige: {
      niceName: "",
      description: "",
    },
  },
  {
    BaseballCap_Black: {
      niceName: "",
      description: "",
    },
  },
  {
    BaseballCap_Blue: {
      niceName: "",
      description: "",
    },
  },
  {
    BaseballCap_CMMG_Black: {
      niceName: "",
      description: "",
    },
  },
  {
    BaseballCap_CMMG_Pink: {
      niceName: "",
      description: "",
    },
  },
  {
    BaseballCap_Camo: {
      niceName: "",
      description: "",
    },
  },
  {
    BaseballCap_Olive: {
      niceName: "",
      description: "",
    },
  },
  {
    BaseballCap_Pink: {
      niceName: "",
      description: "",
    },
  },
  {
    BaseballCap_Red: {
      niceName: "",
      description: "",
    },
  },
  {
    Battery9V: {
      niceName: "",
      description: "",
    },
  },
  {
    BatteryCharger: {
      niceName: "",
      description: "",
    },
  },
  {
    BeanieHat_Beige: {
      niceName: "",
      description: "",
    },
  },
  {
    BeanieHat_Black: {
      niceName: "",
      description: "",
    },
  },
  {
    BeanieHat_Blue: {
      niceName: "",
      description: "",
    },
  },
  {
    BeanieHat_Brown: {
      niceName: "",
      description: "",
    },
  },
  {
    BeanieHat_Green: {
      niceName: "",
      description: "",
    },
  },
  {
    BeanieHat_Grey: {
      niceName: "",
      description: "",
    },
  },
  {
    BeanieHat_Pink: {
      niceName: "",
      description: "",
    },
  },
  {
    BeanieHat_Red: {
      niceName: "",
      description: "",
    },
  },
  {
    BearPelt: {
      niceName: "",
      description: "",
    },
  },
  {
    BearSteakMeat: {
      niceName: "",
      description: "",
    },
  },
  {
    BearTrap: {
      niceName: "",
      description: "",
    },
  },
  {
    Bear_Beige: {
      niceName: "",
      description: "",
    },
  },
  {
    Bear_Dark: {
      niceName: "",
      description: "",
    },
  },
  {
    Bear_Pink: {
      niceName: "",
      description: "",
    },
  },
  {
    Bear_White: {
      niceName: "",
      description: "",
    },
  },
  {
    Binoculars: {
      niceName: "",
      description: "",
    },
  },
  {
    Bitterlings: {
      niceName: "",
      description: "",
    },
  },
  {
    BloodBagEmpty: {
      niceName: "",
      description: "",
    },
  },
  {
    BloodBagFull: {
      niceName: "",
      description: "",
    },
  },
  {
    BloodBagIV: {
      niceName: "",
      description: "",
    },
  },
  {
    BloodTestKit: {
      niceName: "",
      description: "",
    },
  },
  {
    Blouse_Blue: {
      niceName: "",
      description: "",
    },
  },
  {
    Blouse_Green: {
      niceName: "",
      description: "",
    },
  },
  {
    Blouse_Violet: {
      niceName: "",
      description: "",
    },
  },
  {
    Blouse_White: {
      niceName: "",
      description: "",
    },
  },
  {
    Blowtorch: {
      niceName: "",
      description: "",
    },
  },
  {
    BoarSteakMeat: {
      niceName: "",
      description: "",
    },
  },
  {
    BoletusMushroom: {
      niceName: "",
      description: "",
    },
  },
  {
    BomberJacket_Black: {
      niceName: "",
      description: "",
    },
  },
  {
    BomberJacket_Blue: {
      niceName: "",
      description: "",
    },
  },
  {
    BomberJacket_Brown: {
      niceName: "",
      description: "",
    },
  },
  {
    BomberJacket_Grey: {
      niceName: "",
      description: "",
    },
  },
  {
    BomberJacket_Maroon: {
      niceName: "",
      description: "",
    },
  },
  {
    BomberJacket_Olive: {
      niceName: "",
      description: "",
    },
  },
  {
    BomberJacket_SkyBlue: {
      niceName: "",
      description: "",
    },
  },
  {
    Bone: {
      niceName: "",
      description: "",
    },
  },
  {
    BoneBait: {
      niceName: "",
      description: "",
    },
  },
  {
    BoneHook: {
      niceName: "",
      description: "",
    },
  },
  {
    BoneKnife: {
      niceName: "",
      description: "",
    },
  },
  {
    Bonfire: {
      niceName: "",
      description: "",
    },
  },
  {
    BoonieHat_Black: {
      niceName: "",
      description: "",
    },
  },
  {
    BoonieHat_Blue: {
      niceName: "",
      description: "",
    },
  },
  {
    BoonieHat_DPM: {
      niceName: "",
      description: "",
    },
  },
  {
    BoonieHat_Dubok: {
      niceName: "",
      description: "",
    },
  },
  {
    BoonieHat_Flecktran: {
      niceName: "",
      description: "",
    },
  },
  {
    BoonieHat_NavyBlue: {
      niceName: "",
      description: "",
    },
  },
  {
    BoonieHat_Olive: {
      niceName: "",
      description: "",
    },
  },
  {
    BoonieHat_Orange: {
      niceName: "",
      description: "",
    },
  },
  {
    BoonieHat_Red: {
      niceName: "",
      description: "",
    },
  },
  {
    BoonieHat_Tan: {
      niceName: "",
      description: "",
    },
  },
  {
    BoxCerealCrunchin: {
      niceName: "",
      description: "",
    },
  },
  {
    BrassKnuckles_Dull: {
      niceName: "",
      description: "",
    },
  },
  {
    BrassKnuckles_Shiny: {
      niceName: "",
      description: "",
    },
  },
  {
    Breeches_Beetcheck: {
      niceName: "",
      description: "",
    },
  },
  {
    Breeches_Beige: {
      niceName: "",
      description: "",
    },
  },
  {
    Breeches_Black: {
      niceName: "",
      description: "",
    },
  },
  {
    Breeches_Blackcheck: {
      niceName: "",
      description: "",
    },
  },
  {
    Breeches_Blue: {
      niceName: "",
      description: "",
    },
  },
  {
    Breeches_Browncheck: {
      niceName: "",
      description: "",
    },
  },
  {
    Breeches_Green: {
      niceName: "",
      description: "",
    },
  },
  {
    Breeches_Pink: {
      niceName: "",
      description: "",
    },
  },
  {
    Breeches_Red: {
      niceName: "",
      description: "",
    },
  },
  {
    Breeches_White: {
      niceName: "",
      description: "",
    },
  },
  {
    BrisketSpread: {
      niceName: "",
      description: "",
    },
  },
  {
    BrisketSpread_Opened: {
      niceName: "",
      description: "",
    },
  },
  {
    Broom: {
      niceName: "",
      description: "",
    },
  },
  {
    Broom_Birch: {
      niceName: "",
      description: "",
    },
  },
  {
    BurlapSack: {
      niceName: "",
      description: "",
    },
  },
  {
    BurlapSackCover: {
      niceName: "",
      description: "",
    },
  },
  {
    BurlapStrip: {
      niceName: "",
      description: "",
    },
  },
  {
    CZ527: {
      niceName: "",
      description: "",
    },
  },
  {
    CZ550: {
      niceName: "",
      description: "",
    },
  },
  {
    CZ61: {
      niceName: "",
      description: "",
    },
  },
  {
    CZ75: {
      niceName: "",
      description: "",
    },
  },
  {
    CableReel: {
      niceName: "",
      description: "",
    },
  },
  {
    Camonet: {
      niceName: "",
      description: "",
    },
  },
  {
    CanOpener: {
      niceName: "",
      description: "",
    },
  },
  {
    CaninaBerry: {
      niceName: "",
      description: "",
    },
  },
  {
    CanisterGasoline: {
      niceName: "",
      description: "",
    },
  },
  {
    Canteen: {
      niceName: "",
      description: "",
    },
  },
  {
    CanvasPantsMidi_Beige: {
      niceName: "",
      description: "",
    },
  },
  {
    CanvasPantsMidi_Blue: {
      niceName: "",
      description: "",
    },
  },
  {
    CanvasPantsMidi_Grey: {
      niceName: "",
      description: "",
    },
  },
  {
    CanvasPantsMidi_Red: {
      niceName: "",
      description: "",
    },
  },
  {
    CanvasPantsMidi_Violet: {
      niceName: "",
      description: "",
    },
  },
  {
    CanvasPants_Beige: {
      niceName: "",
      description: "",
    },
  },
  {
    CanvasPants_Blue: {
      niceName: "",
      description: "",
    },
  },
  {
    CanvasPants_Grey: {
      niceName: "",
      description: "",
    },
  },
  {
    CanvasPants_Red: {
      niceName: "",
      description: "",
    },
  },
  {
    CanvasPants_Violet: {
      niceName: "",
      description: "",
    },
  },
  {
    CarBattery: {
      niceName: "",
      description: "",
    },
  },
  {
    CarRadiator: {
      niceName: "",
      description: "",
    },
  },
  {
    CarTent: {
      niceName: "",
      description: "",
    },
  },
  {
    CargoPants_Beige: {
      niceName: "",
      description: "",
    },
  },
  {
    CargoPants_Black: {
      niceName: "",
      description: "",
    },
  },
  {
    CargoPants_Blue: {
      niceName: "",
      description: "",
    },
  },
  {
    CargoPants_Green: {
      niceName: "",
      description: "",
    },
  },
  {
    CargoPants_Grey: {
      niceName: "",
      description: "",
    },
  },
  {
    Carp: {
      niceName: "",
      description: "",
    },
  },
  {
    CarpFilletMeat: {
      niceName: "",
      description: "",
    },
  },
  {
    CatFoodCan: {
      niceName: "",
      description: "",
    },
  },
  {
    CatFoodCan_Opened: {
      niceName: "",
      description: "",
    },
  },
  {
    Cauldron: {
      niceName: "",
      description: "",
    },
  },
  {
    CharcoalTablets: {
      niceName: "",
      description: "",
    },
  },
  {
    Chemlight_Blue: {
      niceName: "",
      description: "",
    },
  },
  {
    Chemlight_Green: {
      niceName: "",
      description: "",
    },
  },
  {
    Chemlight_Red: {
      niceName: "",
      description: "",
    },
  },
  {
    Chemlight_White: {
      niceName: "",
      description: "",
    },
  },
  {
    Chemlight_Yellow: {
      niceName: "",
      description: "",
    },
  },
  {
    ChernarusMap: {
      niceName: "",
      description: "",
    },
  },
  {
    ChernarusMap_Open: {
      niceName: "",
      description: "",
    },
  },
  {
    ChernarusSportShirt: {
      niceName: "",
      description: "",
    },
  },
  {
    ChestHolster: {
      niceName: "",
      description: "",
    },
  },
  {
    ChickenBreastMeat: {
      niceName: "",
      description: "",
    },
  },
  {
    ChildBag_Blue: {
      niceName: "",
      description: "",
    },
  },
  {
    ChildBag_Green: {
      niceName: "",
      description: "",
    },
  },
  {
    ChildBag_Red: {
      niceName: "",
      description: "",
    },
  },
  {
    Chips: {
      niceName: "",
      description: "",
    },
  },
  {
    ChristmasTree_Green: {
      niceName: "",
      description: "",
    },
  },
  {
    CivSedanDoors_BackLeft: {
      niceName: "",
      description: "",
    },
  },
  {
    CivSedanDoors_BackLeft_Black: {
      niceName: "",
      description: "",
    },
  },
  {
    CivSedanDoors_BackLeft_BlackRust: {
      niceName: "",
      description: "",
    },
  },
  {
    CivSedanDoors_BackLeft_WhiteRust: {
      niceName: "",
      description: "",
    },
  },
  {
    CivSedanDoors_BackLeft_Wine: {
      niceName: "",
      description: "",
    },
  },
  {
    CivSedanDoors_BackLeft_WineRust: {
      niceName: "",
      description: "",
    },
  },
  {
    CivSedanDoors_BackRight: {
      niceName: "",
      description: "",
    },
  },
  {
    CivSedanDoors_BackRight_Black: {
      niceName: "",
      description: "",
    },
  },
  {
    CivSedanDoors_BackRight_BlackRust: {
      niceName: "",
      description: "",
    },
  },
  {
    CivSedanDoors_BackRight_WhiteRust: {
      niceName: "",
      description: "",
    },
  },
  {
    CivSedanDoors_BackRight_Wine: {
      niceName: "",
      description: "",
    },
  },
  {
    CivSedanDoors_BackRight_WineRust: {
      niceName: "",
      description: "",
    },
  },
  {
    CivSedanDoors_CoDriver: {
      niceName: "",
      description: "",
    },
  },
  {
    CivSedanDoors_CoDriver_Black: {
      niceName: "",
      description: "",
    },
  },
  {
    CivSedanDoors_CoDriver_BlackRust: {
      niceName: "",
      description: "",
    },
  },
  {
    CivSedanDoors_CoDriver_WhiteRust: {
      niceName: "",
      description: "",
    },
  },
  {
    CivSedanDoors_CoDriver_Wine: {
      niceName: "",
      description: "",
    },
  },
  {
    CivSedanDoors_CoDriver_WineRust: {
      niceName: "",
      description: "",
    },
  },
  {
    CivSedanDoors_Driver: {
      niceName: "",
      description: "",
    },
  },
  {
    CivSedanDoors_Driver_Black: {
      niceName: "",
      description: "",
    },
  },
  {
    CivSedanDoors_Driver_BlackRust: {
      niceName: "",
      description: "",
    },
  },
  {
    CivSedanDoors_Driver_WhiteRust: {
      niceName: "",
      description: "",
    },
  },
  {
    CivSedanDoors_Driver_Wine: {
      niceName: "",
      description: "",
    },
  },
  {
    CivSedanDoors_Driver_WineRust: {
      niceName: "",
      description: "",
    },
  },
  {
    CivSedanHood: {
      niceName: "",
      description: "",
    },
  },
  {
    CivSedanHood_Black: {
      niceName: "",
      description: "",
    },
  },
  {
    CivSedanHood_BlackRust: {
      niceName: "",
      description: "",
    },
  },
  {
    CivSedanHood_WhiteRust: {
      niceName: "",
      description: "",
    },
  },
  {
    CivSedanHood_Wine: {
      niceName: "",
      description: "",
    },
  },
  {
    CivSedanHood_WineRust: {
      niceName: "",
      description: "",
    },
  },
  {
    CivSedanTrunk: {
      niceName: "",
      description: "",
    },
  },
  {
    CivSedanTrunk_Black: {
      niceName: "",
      description: "",
    },
  },
  {
    CivSedanTrunk_BlackRust: {
      niceName: "",
      description: "",
    },
  },
  {
    CivSedanTrunk_WhiteRust: {
      niceName: "",
      description: "",
    },
  },
  {
    CivSedanTrunk_Wine: {
      niceName: "",
      description: "",
    },
  },
  {
    CivSedanTrunk_WineRust: {
      niceName: "",
      description: "",
    },
  },
  {
    CivSedanWheel: {
      niceName: "",
      description: "",
    },
  },
  {
    CivSedanWheel_Ruined: {
      niceName: "",
      description: "",
    },
  },
  {
    CivilianBelt: {
      niceName: "",
      description: "",
    },
  },
  {
    CivilianSedan: {
      niceName: "",
      description: "",
    },
  },
  {
    CivilianSedan_Black: {
      niceName: "",
      description: "",
    },
  },
  {
    CivilianSedan_Wine: {
      niceName: "",
      description: "",
    },
  },
  {
    ClaymoreMine: {
      niceName: "",
      description: "",
    },
  },
  {
    Cleaver: {
      niceName: "",
      description: "",
    },
  },
  {
    Colt1911: {
      niceName: "",
      description: "",
    },
  },
  {
    CombatBoots_Beige: {
      niceName: "",
      description: "",
    },
  },
  {
    CombatBoots_Black: {
      niceName: "",
      description: "",
    },
  },
  {
    CombatBoots_Brown: {
      niceName: "",
      description: "",
    },
  },
  {
    CombatBoots_Green: {
      niceName: "",
      description: "",
    },
  },
  {
    CombatBoots_Grey: {
      niceName: "",
      description: "",
    },
  },
  {
    CombatKnife: {
      niceName: "",
      description: "",
    },
  },
  {
    CombinationLock: {
      niceName: "",
      description: "",
    },
  },
  {
    CombinationLock4: {
      niceName: "",
      description: "",
    },
  },
  {
    Compass: {
      niceName: "",
      description: "",
    },
  },
  {
    ConstructionHelmet_Blue: {
      niceName: "",
      description: "",
    },
  },
  {
    ConstructionHelmet_Lime: {
      niceName: "",
      description: "",
    },
  },
  {
    ConstructionHelmet_Orange: {
      niceName: "",
      description: "",
    },
  },
  {
    ConstructionHelmet_Red: {
      niceName: "",
      description: "",
    },
  },
  {
    ConstructionHelmet_White: {
      niceName: "",
      description: "",
    },
  },
  {
    ConstructionHelmet_Yellow: {
      niceName: "",
      description: "",
    },
  },
  {
    ContaminatedArea_Dynamic: {
      niceName: "",
      description: "",
    },
  },
  {
    CookingStand: {
      niceName: "",
      description: "",
    },
  },
  {
    CourierBag: {
      niceName: "",
      description: "",
    },
  },
  {
    CowPelt: {
      niceName: "",
      description: "",
    },
  },
  {
    CowSteakMeat: {
      niceName: "",
      description: "",
    },
  },
  {
    CowboyHat_Brown: {
      niceName: "",
      description: "",
    },
  },
  {
    CowboyHat_black: {
      niceName: "",
      description: "",
    },
  },
  {
    CowboyHat_darkBrown: {
      niceName: "",
      description: "",
    },
  },
  {
    CowboyHat_green: {
      niceName: "",
      description: "",
    },
  },
  {
    CoyoteBag_Brown: {
      niceName: "",
      description: "",
    },
  },
  {
    CoyoteBag_Green: {
      niceName: "",
      description: "",
    },
  },
  {
    Crackers: {
      niceName: "",
      description: "",
    },
  },
  {
    CrookedNose: {
      niceName: "",
      description: "",
    },
  },
  {
    Crowbar: {
      niceName: "",
      description: "",
    },
  },
  {
    CrudeMachete: {
      niceName: "",
      description: "",
    },
  },
  {
    DarkMotoHelmet_Black: {
      niceName: "",
      description: "",
    },
  },
  {
    DarkMotoHelmet_Blue: {
      niceName: "",
      description: "",
    },
  },
  {
    DarkMotoHelmet_Green: {
      niceName: "",
      description: "",
    },
  },
  {
    DarkMotoHelmet_Grey: {
      niceName: "",
      description: "",
    },
  },
  {
    DarkMotoHelmet_Lime: {
      niceName: "",
      description: "",
    },
  },
  {
    DarkMotoHelmet_Red: {
      niceName: "",
      description: "",
    },
  },
  {
    DarkMotoHelmet_White: {
      niceName: "",
      description: "",
    },
  },
  {
    DarkMotoHelmet_Yellow: {
      niceName: "",
      description: "",
    },
  },
  {
    DarkMotoHelmet_YellowScarred: {
      niceName: "",
      description: "",
    },
  },
  {
    DeadChicken_Brown: {
      niceName: "",
      description: "",
    },
  },
  {
    DeadChicken_Spotted: {
      niceName: "",
      description: "",
    },
  },
  {
    DeadChicken_White: {
      niceName: "",
      description: "",
    },
  },
  {
    DeadRabbit: {
      niceName: "",
      description: "",
    },
  },
  {
    DeadRooster: {
      niceName: "",
      description: "",
    },
  },
  {
    Deagle: {
      niceName: "",
      description: "",
    },
  },
  {
    Deagle_Gold: {
      niceName: "",
      description: "",
    },
  },
  {
    DeerPelt: {
      niceName: "",
      description: "",
    },
  },
  {
    DeerSteakMeat: {
      niceName: "",
      description: "",
    },
  },
  {
    DenimJacket: {
      niceName: "",
      description: "",
    },
  },
  {
    Derringer_Black: {
      niceName: "",
      description: "",
    },
  },
  {
    Derringer_Grey: {
      niceName: "",
      description: "",
    },
  },
  {
    Derringer_Pink: {
      niceName: "",
      description: "",
    },
  },
  {
    DesignerGlasses: {
      niceName: "",
      description: "",
    },
  },
  {
    DirtBikeHelmet_Black: {
      niceName: "",
      description: "",
    },
  },
  {
    DirtBikeHelmet_Blue: {
      niceName: "",
      description: "",
    },
  },
  {
    DirtBikeHelmet_Chernarus: {
      niceName: "",
      description: "",
    },
  },
  {
    DirtBikeHelmet_Green: {
      niceName: "",
      description: "",
    },
  },
  {
    DirtBikeHelmet_Khaki: {
      niceName: "",
      description: "",
    },
  },
  {
    DirtBikeHelmet_Mouthguard: {
      niceName: "",
      description: "",
    },
  },
  {
    DirtBikeHelmet_Police: {
      niceName: "",
      description: "",
    },
  },
  {
    DirtBikeHelmet_Red: {
      niceName: "",
      description: "",
    },
  },
  {
    DirtBikeHelmet_Visor: {
      niceName: "",
      description: "",
    },
  },
  {
    DisinfectantAlcohol: {
      niceName: "",
      description: "",
    },
  },
  {
    DisinfectantSpray: {
      niceName: "",
      description: "",
    },
  },
  {
    DogFoodCan: {
      niceName: "",
      description: "",
    },
  },
  {
    DogFoodCan_Opened: {
      niceName: "",
      description: "",
    },
  },
  {
    DressShoes_Beige: {
      niceName: "",
      description: "",
    },
  },
  {
    DressShoes_Black: {
      niceName: "",
      description: "",
    },
  },
  {
    DressShoes_Brown: {
      niceName: "",
      description: "",
    },
  },
  {
    DressShoes_Sunburst: {
      niceName: "",
      description: "",
    },
  },
  {
    DressShoes_White: {
      niceName: "",
      description: "",
    },
  },
  {
    DryBag_Black: {
      niceName: "",
      description: "",
    },
  },
  {
    DryBag_Blue: {
      niceName: "",
      description: "",
    },
  },
  {
    DryBag_Green: {
      niceName: "",
      description: "",
    },
  },
  {
    DryBag_Orange: {
      niceName: "",
      description: "",
    },
  },
  {
    DryBag_Red: {
      niceName: "",
      description: "",
    },
  },
  {
    DryBag_Yellow: {
      niceName: "",
      description: "",
    },
  },
  {
    DuctTape: {
      niceName: "",
      description: "",
    },
  },
  {
    EasterEgg: {
      niceName: "",
      description: "",
    },
  },
  {
    ElectronicRepairKit: {
      niceName: "",
      description: "",
    },
  },
  {
    Engraved1911: {
      niceName: "",
      description: "",
    },
  },
  {
    Epinephrine: {
      niceName: "",
      description: "",
    },
  },
  {
    EpoxyPutty: {
      niceName: "",
      description: "",
    },
  },
  {
    EyePatch_Improvised: {
      niceName: "",
      description: "",
    },
  },
  {
    FAL: {
      niceName: "",
      description: "",
    },
  },
  {
    FAMAS: {
      niceName: "",
      description: "",
    },
  },
  {
    FNP45_MRDSOptic: {
      niceName: "",
      description: "",
    },
  },
  {
    FNX45: {
      niceName: "",
      description: "",
    },
  },
  {
    Fabric: {
      niceName: "",
      description: "",
    },
  },
  {
    FaceCover_Improvised: {
      niceName: "",
      description: "",
    },
  },
  {
    Fal_FoldingBttstck: {
      niceName: "",
      description: "",
    },
  },
  {
    Fal_OeBttstck: {
      niceName: "",
      description: "",
    },
  },
  {
    FangeKnife: {
      niceName: "",
      description: "",
    },
  },
  {
    FarmingHoe: {
      niceName: "",
      description: "",
    },
  },
  {
    FeetCover_Improvised: {
      niceName: "",
      description: "",
    },
  },
  {
    Fence: {
      niceName: "",
      description: "",
    },
  },
  {
    FenceKit: {
      niceName: "",
      description: "",
    },
  },
  {
    FirefighterAxe: {
      niceName: "",
      description: "",
    },
  },
  {
    FirefighterAxe_Black: {
      niceName: "",
      description: "",
    },
  },
  {
    FirefighterAxe_Green: {
      niceName: "",
      description: "",
    },
  },
  {
    FirefighterJacket_Beige: {
      niceName: "",
      description: "",
    },
  },
  {
    FirefighterJacket_Black: {
      niceName: "",
      description: "",
    },
  },
  {
    FirefightersHelmet_Red: {
      niceName: "",
      description: "",
    },
  },
  {
    FirefightersHelmet_White: {
      niceName: "",
      description: "",
    },
  },
  {
    FirefightersHelmet_Yellow: {
      niceName: "",
      description: "",
    },
  },
  {
    FirefightersPants_Beige: {
      niceName: "",
      description: "",
    },
  },
  {
    FirefightersPants_Black: {
      niceName: "",
      description: "",
    },
  },
  {
    Fireplace: {
      niceName: "",
      description: "",
    },
  },
  {
    FireplaceIndoor: {
      niceName: "",
      description: "",
    },
  },
  {
    Firewood: {
      niceName: "",
      description: "",
    },
  },
  {
    FireworksLauncher: {
      niceName: "",
      description: "",
    },
  },
  {
    FirstAidKit: {
      niceName: "",
      description: "",
    },
  },
  {
    FishNetTrap: {
      niceName: "",
      description: "",
    },
  },
  {
    FishingRod: {
      niceName: "",
      description: "",
    },
  },
  {
    Flag_APA: {
      niceName: "",
      description: "",
    },
  },
  {
    Flag_Altis: {
      niceName: "",
      description: "",
    },
  },
  {
    Flag_BabyDeer: {
      niceName: "",
      description: "",
    },
  },
  {
    Flag_Bear: {
      niceName: "",
      description: "",
    },
  },
  {
    Flag_Bohemia: {
      niceName: "",
      description: "",
    },
  },
  {
    Flag_BrainZ: {
      niceName: "",
      description: "",
    },
  },
  {
    Flag_CDF: {
      niceName: "",
      description: "",
    },
  },
  {
    Flag_CHEL: {
      niceName: "",
      description: "",
    },
  },
  {
    Flag_CMC: {
      niceName: "",
      description: "",
    },
  },
  {
    Flag_Cannibals: {
      niceName: "",
      description: "",
    },
  },
  {
    Flag_Chedaki: {
      niceName: "",
      description: "",
    },
  },
  {
    Flag_Chernarus: {
      niceName: "",
      description: "",
    },
  },
  {
    Flag_DayZ: {
      niceName: "",
      description: "",
    },
  },
  {
    Flag_HunterZ: {
      niceName: "",
      description: "",
    },
  },
  {
    Flag_Livonia: {
      niceName: "",
      description: "",
    },
  },
  {
    Flag_LivoniaArmy: {
      niceName: "",
      description: "",
    },
  },
  {
    Flag_LivoniaPolice: {
      niceName: "",
      description: "",
    },
  },
  {
    Flag_NAPA: {
      niceName: "",
      description: "",
    },
  },
  {
    Flag_NSahrani: {
      niceName: "",
      description: "",
    },
  },
  {
    Flag_Pirates: {
      niceName: "",
      description: "",
    },
  },
  {
    Flag_RSTA: {
      niceName: "",
      description: "",
    },
  },
  {
    Flag_Refuge: {
      niceName: "",
      description: "",
    },
  },
  {
    Flag_Rooster: {
      niceName: "",
      description: "",
    },
  },
  {
    Flag_SSahrani: {
      niceName: "",
      description: "",
    },
  },
  {
    Flag_Snake: {
      niceName: "",
      description: "",
    },
  },
  {
    Flag_TEC: {
      niceName: "",
      description: "",
    },
  },
  {
    Flag_UEC: {
      niceName: "",
      description: "",
    },
  },
  {
    Flag_White: {
      niceName: "",
      description: "",
    },
  },
  {
    Flag_Wolf: {
      niceName: "",
      description: "",
    },
  },
  {
    Flag_Zenit: {
      niceName: "",
      description: "",
    },
  },
  {
    Flaregun: {
      niceName: "",
      description: "",
    },
  },
  {
    FlashGrenade: {
      niceName: "",
      description: "",
    },
  },
  {
    Flashlight: {
      niceName: "",
      description: "",
    },
  },
  {
    FlatCap_Black: {
      niceName: "",
      description: "",
    },
  },
  {
    FlatCap_BlackCheck: {
      niceName: "",
      description: "",
    },
  },
  {
    FlatCap_Blue: {
      niceName: "",
      description: "",
    },
  },
  {
    FlatCap_Brown: {
      niceName: "",
      description: "",
    },
  },
  {
    FlatCap_BrownCheck: {
      niceName: "",
      description: "",
    },
  },
  {
    FlatCap_Grey: {
      niceName: "",
      description: "",
    },
  },
  {
    FlatCap_GreyCheck: {
      niceName: "",
      description: "",
    },
  },
  {
    FlatCap_Red: {
      niceName: "",
      description: "",
    },
  },
  {
    FryingPan: {
      niceName: "",
      description: "",
    },
  },
  {
    FurCourierBag: {
      niceName: "",
      description: "",
    },
  },
  {
    FurImprovisedBag: {
      niceName: "",
      description: "",
    },
  },
  {
    GP5GasMask: {
      niceName: "",
      description: "",
    },
  },
  {
    GPSReceiver: {
      niceName: "",
      description: "",
    },
  },
  {
    GardenLime: {
      niceName: "",
      description: "",
    },
  },
  {
    GardenPlot: {
      niceName: "",
      description: "",
    },
  },
  {
    GardenPlotGreenhouse: {
      niceName: "",
      description: "",
    },
  },
  {
    GardenPlotPolytunnel: {
      niceName: "",
      description: "",
    },
  },
  {
    GasMask: {
      niceName: "",
      description: "",
    },
  },
  {
    GasMask_Filter: {
      niceName: "",
      description: "",
    },
  },
  {
    GasMask_Filter_Improvised: {
      niceName: "",
      description: "",
    },
  },
  {
    GhillieAtt_Mossy: {
      niceName: "",
      description: "",
    },
  },
  {
    GhillieAtt_Tan: {
      niceName: "",
      description: "",
    },
  },
  {
    GhillieAtt_Woodland: {
      niceName: "",
      description: "",
    },
  },
  {
    GhillieBushrag_Mossy: {
      niceName: "",
      description: "",
    },
  },
  {
    GhillieBushrag_Tan: {
      niceName: "",
      description: "",
    },
  },
  {
    GhillieBushrag_Woodland: {
      niceName: "",
      description: "",
    },
  },
  {
    GhillieHood_Mossy: {
      niceName: "",
      description: "",
    },
  },
  {
    GhillieHood_Tan: {
      niceName: "",
      description: "",
    },
  },
  {
    GhillieHood_Woodland: {
      niceName: "",
      description: "",
    },
  },
  {
    GhillieSuit_Mossy: {
      niceName: "",
      description: "",
    },
  },
  {
    GhillieSuit_Tan: {
      niceName: "",
      description: "",
    },
  },
  {
    GhillieSuit_Woodland: {
      niceName: "",
      description: "",
    },
  },
  {
    GhillieTop_Mossy: {
      niceName: "",
      description: "",
    },
  },
  {
    GhillieTop_Tan: {
      niceName: "",
      description: "",
    },
  },
  {
    GhillieTop_Woodland: {
      niceName: "",
      description: "",
    },
  },
  {
    GiftBox_Large_1: {
      niceName: "",
      description: "",
    },
  },
  {
    GiftBox_Large_2: {
      niceName: "",
      description: "",
    },
  },
  {
    GiftBox_Large_3: {
      niceName: "",
      description: "",
    },
  },
  {
    GiftBox_Large_4: {
      niceName: "",
      description: "",
    },
  },
  {
    GiftBox_Medium_1: {
      niceName: "",
      description: "",
    },
  },
  {
    GiftBox_Medium_2: {
      niceName: "",
      description: "",
    },
  },
  {
    GiftBox_Medium_3: {
      niceName: "",
      description: "",
    },
  },
  {
    GiftBox_Medium_4: {
      niceName: "",
      description: "",
    },
  },
  {
    GiftBox_Small_1: {
      niceName: "",
      description: "",
    },
  },
  {
    GiftBox_Small_2: {
      niceName: "",
      description: "",
    },
  },
  {
    GiftBox_Small_3: {
      niceName: "",
      description: "",
    },
  },
  {
    GiftBox_Small_4: {
      niceName: "",
      description: "",
    },
  },
  {
    GiftWrapPaper: {
      niceName: "",
      description: "",
    },
  },
  {
    Glock19: {
      niceName: "",
      description: "",
    },
  },
  {
    GlowPlug: {
      niceName: "",
      description: "",
    },
  },
  {
    GoatPelt: {
      niceName: "",
      description: "",
    },
  },
  {
    GoatSteakMeat: {
      niceName: "",
      description: "",
    },
  },
  {
    GorkaEJacket_Autumn: {
      niceName: "",
      description: "",
    },
  },
  {
    GorkaEJacket_Flat: {
      niceName: "",
      description: "",
    },
  },
  {
    GorkaEJacket_PautRev: {
      niceName: "",
      description: "",
    },
  },
  {
    GorkaEJacket_Summer: {
      niceName: "",
      description: "",
    },
  },
  {
    GorkaHelmet: {
      niceName: "",
      description: "",
    },
  },
  {
    GorkaHelmetVisor: {
      niceName: "",
      description: "",
    },
  },
  {
    GorkaPants_Autumn: {
      niceName: "",
      description: "",
    },
  },
  {
    GorkaPants_Flat: {
      niceName: "",
      description: "",
    },
  },
  {
    GorkaPants_PautRev: {
      niceName: "",
      description: "",
    },
  },
  {
    GorkaPants_Summer: {
      niceName: "",
      description: "",
    },
  },
  {
    GreatHelm: {
      niceName: "",
      description: "",
    },
  },
  {
    GreenBellPepper: {
      niceName: "",
      description: "",
    },
  },
  {
    Grenade_ChemGas: {
      niceName: "",
      description: "",
    },
  },
  {
    Guts: {
      niceName: "",
      description: "",
    },
  },
  {
    Hacksaw: {
      niceName: "",
      description: "",
    },
  },
  {
    Hammer: {
      niceName: "",
      description: "",
    },
  },
  {
    HandDrillKit: {
      niceName: "",
      description: "",
    },
  },
  {
    HandSaw: {
      niceName: "",
      description: "",
    },
  },
  {
    HandcuffKeys: {
      niceName: "",
      description: "",
    },
  },
  {
    Handcuffs: {
      niceName: "",
      description: "",
    },
  },
  {
    HandcuffsLocked: {
      niceName: "",
      description: "",
    },
  },
  {
    HandsCover_Improvised: {
      niceName: "",
      description: "",
    },
  },
  {
    HatchbackDoors_CoDriver: {
      niceName: "",
      description: "",
    },
  },
  {
    HatchbackDoors_CoDriver_Blue: {
      niceName: "",
      description: "",
    },
  },
  {
    HatchbackDoors_CoDriver_BlueRust: {
      niceName: "",
      description: "",
    },
  },
  {
    HatchbackDoors_CoDriver_GreenRust: {
      niceName: "",
      description: "",
    },
  },
  {
    HatchbackDoors_CoDriver_White: {
      niceName: "",
      description: "",
    },
  },
  {
    HatchbackDoors_CoDriver_WhiteRust: {
      niceName: "",
      description: "",
    },
  },
  {
    HatchbackDoors_Driver: {
      niceName: "",
      description: "",
    },
  },
  {
    HatchbackDoors_Driver_Blue: {
      niceName: "",
      description: "",
    },
  },
  {
    HatchbackDoors_Driver_BlueRust: {
      niceName: "",
      description: "",
    },
  },
  {
    HatchbackDoors_Driver_GreenRust: {
      niceName: "",
      description: "",
    },
  },
  {
    HatchbackDoors_Driver_White: {
      niceName: "",
      description: "",
    },
  },
  {
    HatchbackDoors_Driver_WhiteRust: {
      niceName: "",
      description: "",
    },
  },
  {
    HatchbackHood: {
      niceName: "",
      description: "",
    },
  },
  {
    HatchbackHood_Blue: {
      niceName: "",
      description: "",
    },
  },
  {
    HatchbackHood_BlueRust: {
      niceName: "",
      description: "",
    },
  },
  {
    HatchbackHood_GreenRust: {
      niceName: "",
      description: "",
    },
  },
  {
    HatchbackHood_White: {
      niceName: "",
      description: "",
    },
  },
  {
    HatchbackHood_WhiteRust: {
      niceName: "",
      description: "",
    },
  },
  {
    HatchbackTrunk: {
      niceName: "",
      description: "",
    },
  },
  {
    HatchbackTrunk_Blue: {
      niceName: "",
      description: "",
    },
  },
  {
    HatchbackTrunk_BlueRust: {
      niceName: "",
      description: "",
    },
  },
  {
    HatchbackTrunk_GreenRust: {
      niceName: "",
      description: "",
    },
  },
  {
    HatchbackTrunk_White: {
      niceName: "",
      description: "",
    },
  },
  {
    HatchbackTrunk_WhiteRust: {
      niceName: "",
      description: "",
    },
  },
  {
    HatchbackWheel: {
      niceName: "",
      description: "",
    },
  },
  {
    HatchbackWheel_Ruined: {
      niceName: "",
      description: "",
    },
  },
  {
    Hatchback_02: {
      niceName: "",
      description: "",
    },
  },
  {
    Hatchback_02_Black: {
      niceName: "",
      description: "",
    },
  },
  {
    Hatchback_02_Blue: {
      niceName: "",
      description: "",
    },
  },
  {
    Hatchback_02_Door_1_1: {
      niceName: "",
      description: "",
    },
  },
  {
    Hatchback_02_Door_1_1_Black: {
      niceName: "",
      description: "",
    },
  },
  {
    Hatchback_02_Door_1_1_BlackRust: {
      niceName: "",
      description: "",
    },
  },
  {
    Hatchback_02_Door_1_1_Blue: {
      niceName: "",
      description: "",
    },
  },
  {
    Hatchback_02_Door_1_1_BlueRust: {
      niceName: "",
      description: "",
    },
  },
  {
    Hatchback_02_Door_1_1_RedRust: {
      niceName: "",
      description: "",
    },
  },
  {
    Hatchback_02_Door_1_2: {
      niceName: "",
      description: "",
    },
  },
  {
    Hatchback_02_Door_1_2_Black: {
      niceName: "",
      description: "",
    },
  },
  {
    Hatchback_02_Door_1_2_BlackRust: {
      niceName: "",
      description: "",
    },
  },
  {
    Hatchback_02_Door_1_2_Blue: {
      niceName: "",
      description: "",
    },
  },
  {
    Hatchback_02_Door_1_2_BlueRust: {
      niceName: "",
      description: "",
    },
  },
  {
    Hatchback_02_Door_1_2_RedRust: {
      niceName: "",
      description: "",
    },
  },
  {
    Hatchback_02_Door_2_1: {
      niceName: "",
      description: "",
    },
  },
  {
    Hatchback_02_Door_2_1_Black: {
      niceName: "",
      description: "",
    },
  },
  {
    Hatchback_02_Door_2_1_BlackRust: {
      niceName: "",
      description: "",
    },
  },
  {
    Hatchback_02_Door_2_1_Blue: {
      niceName: "",
      description: "",
    },
  },
  {
    Hatchback_02_Door_2_1_BlueRust: {
      niceName: "",
      description: "",
    },
  },
  {
    Hatchback_02_Door_2_1_RedRust: {
      niceName: "",
      description: "",
    },
  },
  {
    Hatchback_02_Door_2_2: {
      niceName: "",
      description: "",
    },
  },
  {
    Hatchback_02_Door_2_2_Black: {
      niceName: "",
      description: "",
    },
  },
  {
    Hatchback_02_Door_2_2_BlackRust: {
      niceName: "",
      description: "",
    },
  },
  {
    Hatchback_02_Door_2_2_Blue: {
      niceName: "",
      description: "",
    },
  },
  {
    Hatchback_02_Door_2_2_BlueRust: {
      niceName: "",
      description: "",
    },
  },
  {
    Hatchback_02_Door_2_2_RedRust: {
      niceName: "",
      description: "",
    },
  },
  {
    Hatchback_02_Hood: {
      niceName: "",
      description: "",
    },
  },
  {
    Hatchback_02_Hood_Black: {
      niceName: "",
      description: "",
    },
  },
  {
    Hatchback_02_Hood_BlackRust: {
      niceName: "",
      description: "",
    },
  },
  {
    Hatchback_02_Hood_Blue: {
      niceName: "",
      description: "",
    },
  },
  {
    Hatchback_02_Hood_BlueRust: {
      niceName: "",
      description: "",
    },
  },
  {
    Hatchback_02_Hood_RedRust: {
      niceName: "",
      description: "",
    },
  },
  {
    Hatchback_02_Trunk: {
      niceName: "",
      description: "",
    },
  },
  {
    Hatchback_02_Trunk_Black: {
      niceName: "",
      description: "",
    },
  },
  {
    Hatchback_02_Trunk_BlackRust: {
      niceName: "",
      description: "",
    },
  },
  {
    Hatchback_02_Trunk_Blue: {
      niceName: "",
      description: "",
    },
  },
  {
    Hatchback_02_Trunk_BlueRust: {
      niceName: "",
      description: "",
    },
  },
  {
    Hatchback_02_Trunk_RedRust: {
      niceName: "",
      description: "",
    },
  },
  {
    Hatchback_02_Wheel: {
      niceName: "",
      description: "",
    },
  },
  {
    Hatchback_02_Wheel_Ruined: {
      niceName: "",
      description: "",
    },
  },
  {
    Hatchet: {
      niceName: "",
      description: "",
    },
  },
  {
    HeadCover_Improvised: {
      niceName: "",
      description: "",
    },
  },
  {
    HeadlightH7: {
      niceName: "",
      description: "",
    },
  },
  {
    HeadlightH7_Box: {
      niceName: "",
      description: "",
    },
  },
  {
    Headtorch_Black: {
      niceName: "",
      description: "",
    },
  },
  {
    Headtorch_Grey: {
      niceName: "",
      description: "",
    },
  },
  {
    Heatpack: {
      niceName: "",
      description: "",
    },
  },
  {
    HighCapacityVest_Black: {
      niceName: "",
      description: "",
    },
  },
  {
    HighCapacityVest_Olive: {
      niceName: "",
      description: "",
    },
  },
  {
    HikingBootsLow_Beige: {
      niceName: "",
      description: "",
    },
  },
  {
    HikingBootsLow_Black: {
      niceName: "",
      description: "",
    },
  },
  {
    HikingBootsLow_Blue: {
      niceName: "",
      description: "",
    },
  },
  {
    HikingBootsLow_Grey: {
      niceName: "",
      description: "",
    },
  },
  {
    HikingBoots_Black: {
      niceName: "",
      description: "",
    },
  },
  {
    HikingBoots_Brown: {
      niceName: "",
      description: "",
    },
  },
  {
    HikingJacket_Black: {
      niceName: "",
      description: "",
    },
  },
  {
    HikingJacket_Blue: {
      niceName: "",
      description: "",
    },
  },
  {
    HikingJacket_Green: {
      niceName: "",
      description: "",
    },
  },
  {
    HikingJacket_Red: {
      niceName: "",
      description: "",
    },
  },
  {
    HockeyHelmet_Black: {
      niceName: "",
      description: "",
    },
  },
  {
    HockeyHelmet_Blue: {
      niceName: "",
      description: "",
    },
  },
  {
    HockeyHelmet_Red: {
      niceName: "",
      description: "",
    },
  },
  {
    HockeyHelmet_White: {
      niceName: "",
      description: "",
    },
  },
  {
    HockeyMask: {
      niceName: "",
      description: "",
    },
  },
  {
    Honey: {
      niceName: "",
      description: "",
    },
  },
  {
    Hoodie_Black: {
      niceName: "",
      description: "",
    },
  },
  {
    Hoodie_Blue: {
      niceName: "",
      description: "",
    },
  },
  {
    Hoodie_Brown: {
      niceName: "",
      description: "",
    },
  },
  {
    Hoodie_Green: {
      niceName: "",
      description: "",
    },
  },
  {
    Hoodie_Grey: {
      niceName: "",
      description: "",
    },
  },
  {
    Hoodie_Red: {
      niceName: "",
      description: "",
    },
  },
  {
    Hook: {
      niceName: "",
      description: "",
    },
  },
  {
    HumanSteakMeat: {
      niceName: "",
      description: "",
    },
  },
  {
    HunterPants_Autumn: {
      niceName: "",
      description: "",
    },
  },
  {
    HunterPants_Brown: {
      niceName: "",
      description: "",
    },
  },
  {
    HunterPants_Spring: {
      niceName: "",
      description: "",
    },
  },
  {
    HunterPants_Summer: {
      niceName: "",
      description: "",
    },
  },
  {
    HunterPants_Winter: {
      niceName: "",
      description: "",
    },
  },
  {
    HuntingBag: {
      niceName: "",
      description: "",
    },
  },
  {
    HuntingBag_Hannah: {
      niceName: "",
      description: "",
    },
  },
  {
    HuntingJacket_Autumn: {
      niceName: "",
      description: "",
    },
  },
  {
    HuntingJacket_Brown: {
      niceName: "",
      description: "",
    },
  },
  {
    HuntingJacket_Spring: {
      niceName: "",
      description: "",
    },
  },
  {
    HuntingJacket_Summer: {
      niceName: "",
      description: "",
    },
  },
  {
    HuntingJacket_Winter: {
      niceName: "",
      description: "",
    },
  },
  {
    HuntingKnife: {
      niceName: "",
      description: "",
    },
  },
  {
    HuntingOptic: {
      niceName: "",
      description: "",
    },
  },
  {
    HuntingVest: {
      niceName: "",
      description: "",
    },
  },
  {
    ImprovisedBag: {
      niceName: "",
      description: "",
    },
  },
  {
    ImprovisedExplosive: {
      niceName: "",
      description: "",
    },
  },
  {
    ImprovisedFishingRod: {
      niceName: "",
      description: "",
    },
  },
  {
    ImprovisedSuppressor: {
      niceName: "",
      description: "",
    },
  },
  {
    IodineTincture: {
      niceName: "",
      description: "",
    },
  },
  {
    Izh18: {
      niceName: "",
      description: "",
    },
  },
  {
    Izh18Shotgun: {
      niceName: "",
      description: "",
    },
  },
  {
    Izh43Shotgun: {
      niceName: "",
      description: "",
    },
  },
  {
    Jeans_Black: {
      niceName: "",
      description: "",
    },
  },
  {
    Jeans_Blue: {
      niceName: "",
      description: "",
    },
  },
  {
    Jeans_BlueDark: {
      niceName: "",
      description: "",
    },
  },
  {
    Jeans_Brown: {
      niceName: "",
      description: "",
    },
  },
  {
    Jeans_Green: {
      niceName: "",
      description: "",
    },
  },
  {
    Jeans_Grey: {
      niceName: "",
      description: "",
    },
  },
  {
    JoggingShoes_Black: {
      niceName: "",
      description: "",
    },
  },
  {
    JoggingShoes_Blue: {
      niceName: "",
      description: "",
    },
  },
  {
    JoggingShoes_Red: {
      niceName: "",
      description: "",
    },
  },
  {
    JoggingShoes_Violet: {
      niceName: "",
      description: "",
    },
  },
  {
    JoggingShoes_White: {
      niceName: "",
      description: "",
    },
  },
  {
    JumpsuitJacket_Blue: {
      niceName: "",
      description: "",
    },
  },
  {
    JumpsuitJacket_Gray: {
      niceName: "",
      description: "",
    },
  },
  {
    JumpsuitJacket_Green: {
      niceName: "",
      description: "",
    },
  },
  {
    JumpsuitJacket_Red: {
      niceName: "",
      description: "",
    },
  },
  {
    JumpsuitPants_Blue: {
      niceName: "",
      description: "",
    },
  },
  {
    JumpsuitPants_Green: {
      niceName: "",
      description: "",
    },
  },
  {
    JumpsuitPants_Grey: {
      niceName: "",
      description: "",
    },
  },
  {
    JumpsuitPants_Red: {
      niceName: "",
      description: "",
    },
  },
  {
    JungleBoots_Beige: {
      niceName: "",
      description: "",
    },
  },
  {
    JungleBoots_Black: {
      niceName: "",
      description: "",
    },
  },
  {
    JungleBoots_Brown: {
      niceName: "",
      description: "",
    },
  },
  {
    JungleBoots_Green: {
      niceName: "",
      description: "",
    },
  },
  {
    JungleBoots_Olive: {
      niceName: "",
      description: "",
    },
  },
  {
    KashtanOptic: {
      niceName: "",
      description: "",
    },
  },
  {
    KazuarOptic: {
      niceName: "",
      description: "",
    },
  },
  {
    KitchenKnife: {
      niceName: "",
      description: "",
    },
  },
  {
    KitchenTimer: {
      niceName: "",
      description: "",
    },
  },
  {
    KobraOptic: {
      niceName: "",
      description: "",
    },
  },
  {
    KukriKnife: {
      niceName: "",
      description: "",
    },
  },
  {
    LabCoat: {
      niceName: "",
      description: "",
    },
  },
  {
    LactariusMushroom: {
      niceName: "",
      description: "",
    },
  },
  {
    LandMineTrap: {
      niceName: "",
      description: "",
    },
  },
  {
    Land_Wreck_Volha_Police: {
      niceName: "",
      description: "",
    },
  },
  {
    Land_Wreck_hb01_aban1_police: {
      niceName: "",
      description: "",
    },
  },
  {
    Land_Wreck_hb01_aban2_police: {
      niceName: "",
      description: "",
    },
  },
  {
    Land_Wreck_sed01_aban1_police: {
      niceName: "",
      description: "",
    },
  },
  {
    Land_Wreck_sed01_aban2_police: {
      niceName: "",
      description: "",
    },
  },
  {
    Lard: {
      niceName: "",
      description: "",
    },
  },
  {
    LargeGasCanister: {
      niceName: "",
      description: "",
    },
  },
  {
    LargeTent: {
      niceName: "",
      description: "",
    },
  },
  {
    LeatherBelt_Beige: {
      niceName: "",
      description: "",
    },
  },
  {
    LeatherBelt_Black: {
      niceName: "",
      description: "",
    },
  },
  {
    LeatherBelt_Brown: {
      niceName: "",
      description: "",
    },
  },
  {
    LeatherBelt_Natural: {
      niceName: "",
      description: "",
    },
  },
  {
    LeatherGloves_Beige: {
      niceName: "",
      description: "",
    },
  },
  {
    LeatherGloves_Black: {
      niceName: "",
      description: "",
    },
  },
  {
    LeatherGloves_Brown: {
      niceName: "",
      description: "",
    },
  },
  {
    LeatherGloves_Natural: {
      niceName: "",
      description: "",
    },
  },
  {
    LeatherHat_Beige: {
      niceName: "",
      description: "",
    },
  },
  {
    LeatherHat_Black: {
      niceName: "",
      description: "",
    },
  },
  {
    LeatherHat_Brown: {
      niceName: "",
      description: "",
    },
  },
  {
    LeatherHat_Natural: {
      niceName: "",
      description: "",
    },
  },
  {
    LeatherJacket_Beige: {
      niceName: "",
      description: "",
    },
  },
  {
    LeatherJacket_Black: {
      niceName: "",
      description: "",
    },
  },
  {
    LeatherJacket_Brown: {
      niceName: "",
      description: "",
    },
  },
  {
    LeatherJacket_Natural: {
      niceName: "",
      description: "",
    },
  },
  {
    LeatherKnifeSheath: {
      niceName: "",
      description: "",
    },
  },
  {
    LeatherPants_Beige: {
      niceName: "",
      description: "",
    },
  },
  {
    LeatherPants_Black: {
      niceName: "",
      description: "",
    },
  },
  {
    LeatherPants_Brown: {
      niceName: "",
      description: "",
    },
  },
  {
    LeatherPants_Natural: {
      niceName: "",
      description: "",
    },
  },
  {
    LeatherSack_Beige: {
      niceName: "",
      description: "",
    },
  },
  {
    LeatherSack_Black: {
      niceName: "",
      description: "",
    },
  },
  {
    LeatherSack_Brown: {
      niceName: "",
      description: "",
    },
  },
  {
    LeatherSack_Natural: {
      niceName: "",
      description: "",
    },
  },
  {
    LeatherSewingKit: {
      niceName: "",
      description: "",
    },
  },
  {
    LeatherShirt_Natural: {
      niceName: "",
      description: "",
    },
  },
  {
    LeatherShoes_Beige: {
      niceName: "",
      description: "",
    },
  },
  {
    LeatherShoes_Black: {
      niceName: "",
      description: "",
    },
  },
  {
    LeatherShoes_Brown: {
      niceName: "",
      description: "",
    },
  },
  {
    LeatherShoes_Natural: {
      niceName: "",
      description: "",
    },
  },
  {
    LeatherStorageVest_Beige: {
      niceName: "",
      description: "",
    },
  },
  {
    LeatherStorageVest_Black: {
      niceName: "",
      description: "",
    },
  },
  {
    LeatherStorageVest_Brown: {
      niceName: "",
      description: "",
    },
  },
  {
    LeatherStorageVest_Natural: {
      niceName: "",
      description: "",
    },
  },
  {
    LegsCover_Improvised: {
      niceName: "",
      description: "",
    },
  },
  {
    Lockpick: {
      niceName: "",
      description: "",
    },
  },
  {
    LongTorch: {
      niceName: "",
      description: "",
    },
  },
  {
    LongWoodenStick: {
      niceName: "",
      description: "",
    },
  },
  {
    Longhorn: {
      niceName: "",
      description: "",
    },
  },
  {
    LugWrench: {
      niceName: "",
      description: "",
    },
  },
  {
    Lunchmeat: {
      niceName: "",
      description: "",
    },
  },
  {
    Lunchmeat_Opened: {
      niceName: "",
      description: "",
    },
  },
  {
    M16A2: {
      niceName: "",
      description: "",
    },
  },
  {
    M18SmokeGrenade_Green: {
      niceName: "",
      description: "",
    },
  },
  {
    M18SmokeGrenade_Purple: {
      niceName: "",
      description: "",
    },
  },
  {
    M18SmokeGrenade_Red: {
      niceName: "",
      description: "",
    },
  },
  {
    M18SmokeGrenade_White: {
      niceName: "",
      description: "",
    },
  },
  {
    M18SmokeGrenade_Yellow: {
      niceName: "",
      description: "",
    },
  },
  {
    M4A1: {
      niceName: "",
      description: "",
    },
  },
  {
    M4A1_Black: {
      niceName: "",
      description: "",
    },
  },
  {
    M4A1_Green: {
      niceName: "",
      description: "",
    },
  },
  {
    M4_CQBBttstck: {
      niceName: "",
      description: "",
    },
  },
  {
    M4_CarryHandleOptic: {
      niceName: "",
      description: "",
    },
  },
  {
    M4_MPBttstck: {
      niceName: "",
      description: "",
    },
  },
  {
    M4_MPHndgrd: {
      niceName: "",
      description: "",
    },
  },
  {
    M4_OEBttstck: {
      niceName: "",
      description: "",
    },
  },
  {
    M4_PlasticHndgrd: {
      niceName: "",
      description: "",
    },
  },
  {
    M4_RISHndgrd: {
      niceName: "",
      description: "",
    },
  },
  {
    M4_RISHndgrd_Black: {
      niceName: "",
      description: "",
    },
  },
  {
    M4_RISHndgrd_Green: {
      niceName: "",
      description: "",
    },
  },
  {
    M4_Suppressor: {
      niceName: "",
      description: "",
    },
  },
  {
    M4_T3NRDSOptic: {
      niceName: "",
      description: "",
    },
  },
  {
    M65Jacket_Black: {
      niceName: "",
      description: "",
    },
  },
  {
    M65Jacket_Khaki: {
      niceName: "",
      description: "",
    },
  },
  {
    M65Jacket_Olive: {
      niceName: "",
      description: "",
    },
  },
  {
    M65Jacket_Tan: {
      niceName: "",
      description: "",
    },
  },
  {
    M67Grenade: {
      niceName: "",
      description: "",
    },
  },
  {
    M68Optic: {
      niceName: "",
      description: "",
    },
  },
  {
    M79: {
      niceName: "",
      description: "",
    },
  },
  {
    M9A1_Bayonet: {
      niceName: "",
      description: "",
    },
  },
  {
    MKII: {
      niceName: "",
      description: "",
    },
  },
  {
    MP5K: {
      niceName: "",
      description: "",
    },
  },
  {
    MP5_Compensator: {
      niceName: "",
      description: "",
    },
  },
  {
    MP5_PlasticHndgrd: {
      niceName: "",
      description: "",
    },
  },
  {
    MP5_RailHndgrd: {
      niceName: "",
      description: "",
    },
  },
  {
    MP5k_StockBttstck: {
      niceName: "",
      description: "",
    },
  },
  {
    Machete: {
      niceName: "",
      description: "",
    },
  },
  {
    Mackerel: {
      niceName: "",
      description: "",
    },
  },
  {
    MackerelFilletMeat: {
      niceName: "",
      description: "",
    },
  },
  {
    MacrolepiotaMushroom: {
      niceName: "",
      description: "",
    },
  },
  {
    Mag_1911_7Rnd: {
      niceName: "",
      description: "",
    },
  },
  {
    Mag_AK101_30Rnd: {
      niceName: "",
      description: "",
    },
  },
  {
    Mag_AK74_30Rnd: {
      niceName: "",
      description: "",
    },
  },
  {
    Mag_AK74_45Rnd: {
      niceName: "",
      description: "",
    },
  },
  {
    Mag_AKM_30Rnd: {
      niceName: "",
      description: "",
    },
  },
  {
    Mag_AKM_Drum75Rnd: {
      niceName: "",
      description: "",
    },
  },
  {
    Mag_AKM_Palm30Rnd: {
      niceName: "",
      description: "",
    },
  },
  {
    Mag_Aug_30Rnd: {
      niceName: "",
      description: "",
    },
  },
  {
    Mag_CMAG_10Rnd: {
      niceName: "",
      description: "",
    },
  },
  {
    Mag_CMAG_20Rnd: {
      niceName: "",
      description: "",
    },
  },
  {
    Mag_CMAG_30Rnd: {
      niceName: "",
      description: "",
    },
  },
  {
    Mag_CMAG_40Rnd: {
      niceName: "",
      description: "",
    },
  },
  {
    Mag_CZ527_5rnd: {
      niceName: "",
      description: "",
    },
  },
  {
    Mag_CZ550_10Rnd: {
      niceName: "",
      description: "",
    },
  },
  {
    Mag_CZ61_20Rnd: {
      niceName: "",
      description: "",
    },
  },
  {
    Mag_CZ75_15Rnd: {
      niceName: "",
      description: "",
    },
  },
  {
    Mag_Deagle_9rnd: {
      niceName: "",
      description: "",
    },
  },
  {
    Mag_FAL_20Rnd: {
      niceName: "",
      description: "",
    },
  },
  {
    Mag_FAMAS_25Rnd: {
      niceName: "",
      description: "",
    },
  },
  {
    Mag_FNX45_15Rnd: {
      niceName: "",
      description: "",
    },
  },
  {
    Mag_Glock_15Rnd: {
      niceName: "",
      description: "",
    },
  },
  {
    Mag_IJ70_8Rnd: {
      niceName: "",
      description: "",
    },
  },
  {
    Mag_MKII_10Rnd: {
      niceName: "",
      description: "",
    },
  },
  {
    Mag_MP5_15Rnd: {
      niceName: "",
      description: "",
    },
  },
  {
    Mag_MP5_30Rnd: {
      niceName: "",
      description: "",
    },
  },
  {
    Mag_P1_8Rnd: {
      niceName: "",
      description: "",
    },
  },
  {
    Mag_PP19_64Rnd: {
      niceName: "",
      description: "",
    },
  },
  {
    Mag_Ruger1022_15Rnd: {
      niceName: "",
      description: "",
    },
  },
  {
    Mag_Ruger1022_30Rnd: {
      niceName: "",
      description: "",
    },
  },
  {
    Mag_SSG82_5rnd: {
      niceName: "",
      description: "",
    },
  },
  {
    Mag_STANAG_30Rnd: {
      niceName: "",
      description: "",
    },
  },
  {
    Mag_STANAG_60Rnd: {
      niceName: "",
      description: "",
    },
  },
  {
    Mag_SVD_10Rnd: {
      niceName: "",
      description: "",
    },
  },
  {
    Mag_Saiga_5Rnd: {
      niceName: "",
      description: "",
    },
  },
  {
    Mag_Saiga_8Rnd: {
      niceName: "",
      description: "",
    },
  },
  {
    Mag_Saiga_Drum20Rnd: {
      niceName: "",
      description: "",
    },
  },
  {
    Mag_Scout_5Rnd: {
      niceName: "",
      description: "",
    },
  },
  {
    Mag_UMP_25Rnd: {
      niceName: "",
      description: "",
    },
  },
  {
    Mag_VAL_20Rnd: {
      niceName: "",
      description: "",
    },
  },
  {
    Mag_VSS_10Rnd: {
      niceName: "",
      description: "",
    },
  },
  {
    Magnum: {
      niceName: "",
      description: "",
    },
  },
  {
    MakarovIJ70: {
      niceName: "",
      description: "",
    },
  },
  {
    ManSuit_Beige: {
      niceName: "",
      description: "",
    },
  },
  {
    ManSuit_Black: {
      niceName: "",
      description: "",
    },
  },
  {
    ManSuit_Blue: {
      niceName: "",
      description: "",
    },
  },
  {
    ManSuit_Brown: {
      niceName: "",
      description: "",
    },
  },
  {
    ManSuit_DarkGrey: {
      niceName: "",
      description: "",
    },
  },
  {
    ManSuit_Khaki: {
      niceName: "",
      description: "",
    },
  },
  {
    ManSuit_LightGrey: {
      niceName: "",
      description: "",
    },
  },
  {
    ManSuit_White: {
      niceName: "",
      description: "",
    },
  },
  {
    Marmalade: {
      niceName: "",
      description: "",
    },
  },
  {
    Matchbox: {
      niceName: "",
      description: "",
    },
  },
  {
    MeatTenderizer: {
      niceName: "",
      description: "",
    },
  },
  {
    MedicalScrubsHat_Blue: {
      niceName: "",
      description: "",
    },
  },
  {
    MedicalScrubsHat_Green: {
      niceName: "",
      description: "",
    },
  },
  {
    MedicalScrubsHat_White: {
      niceName: "",
      description: "",
    },
  },
  {
    MedicalScrubsPants_Blue: {
      niceName: "",
      description: "",
    },
  },
  {
    MedicalScrubsPants_Green: {
      niceName: "",
      description: "",
    },
  },
  {
    MedicalScrubsPants_White: {
      niceName: "",
      description: "",
    },
  },
  {
    MedicalScrubsShirt_Blue: {
      niceName: "",
      description: "",
    },
  },
  {
    MedicalScrubsShirt_Green: {
      niceName: "",
      description: "",
    },
  },
  {
    MedicalScrubsShirt_White: {
      niceName: "",
      description: "",
    },
  },
  {
    MediumGasCanister: {
      niceName: "",
      description: "",
    },
  },
  {
    MediumTent: {
      niceName: "",
      description: "",
    },
  },
  {
    MediumTent_Green: {
      niceName: "",
      description: "",
    },
  },
  {
    MediumTent_Orange: {
      niceName: "",
      description: "",
    },
  },
  {
    Megaphone: {
      niceName: "",
      description: "",
    },
  },
  {
    MetalPlate: {
      niceName: "",
      description: "",
    },
  },
  {
    MetalWire: {
      niceName: "",
      description: "",
    },
  },
  {
    Mich2001Helmet: {
      niceName: "",
      description: "",
    },
  },
  {
    MilitaryBelt: {
      niceName: "",
      description: "",
    },
  },
  {
    MilitaryBeret_CDF: {
      niceName: "",
      description: "",
    },
  },
  {
    MilitaryBeret_ChDKZ: {
      niceName: "",
      description: "",
    },
  },
  {
    MilitaryBeret_NZ: {
      niceName: "",
      description: "",
    },
  },
  {
    MilitaryBeret_Red: {
      niceName: "",
      description: "",
    },
  },
  {
    MilitaryBeret_UN: {
      niceName: "",
      description: "",
    },
  },
  {
    MilitaryBoots_Beige: {
      niceName: "",
      description: "",
    },
  },
  {
    MilitaryBoots_Black: {
      niceName: "",
      description: "",
    },
  },
  {
    MilitaryBoots_Bluerock: {
      niceName: "",
      description: "",
    },
  },
  {
    MilitaryBoots_Brown: {
      niceName: "",
      description: "",
    },
  },
  {
    MilitaryBoots_Redpunk: {
      niceName: "",
      description: "",
    },
  },
  {
    MiniDress_BlueChecker: {
      niceName: "",
      description: "",
    },
  },
  {
    MiniDress_BlueWithDots: {
      niceName: "",
      description: "",
    },
  },
  {
    MiniDress_BrownChecker: {
      niceName: "",
      description: "",
    },
  },
  {
    MiniDress_GreenChecker: {
      niceName: "",
      description: "",
    },
  },
  {
    MiniDress_Pink: {
      niceName: "",
      description: "",
    },
  },
  {
    MiniDress_PinkChecker: {
      niceName: "",
      description: "",
    },
  },
  {
    MiniDress_RedChecker: {
      niceName: "",
      description: "",
    },
  },
  {
    MiniDress_WhiteChecker: {
      niceName: "",
      description: "",
    },
  },
  {
    Morphine: {
      niceName: "",
      description: "",
    },
  },
  {
    Mosin9130: {
      niceName: "",
      description: "",
    },
  },
  {
    Mosin9130_Black: {
      niceName: "",
      description: "",
    },
  },
  {
    Mosin9130_Camo: {
      niceName: "",
      description: "",
    },
  },
  {
    Mosin9130_Green: {
      niceName: "",
      description: "",
    },
  },
  {
    Mosin_Bayonet: {
      niceName: "",
      description: "",
    },
  },
  {
    Mosin_Compensator: {
      niceName: "",
      description: "",
    },
  },
  {
    MotoHelmet_Black: {
      niceName: "",
      description: "",
    },
  },
  {
    MotoHelmet_Blue: {
      niceName: "",
      description: "",
    },
  },
  {
    MotoHelmet_Green: {
      niceName: "",
      description: "",
    },
  },
  {
    MotoHelmet_Grey: {
      niceName: "",
      description: "",
    },
  },
  {
    MotoHelmet_Lime: {
      niceName: "",
      description: "",
    },
  },
  {
    MotoHelmet_Red: {
      niceName: "",
      description: "",
    },
  },
  {
    MotoHelmet_White: {
      niceName: "",
      description: "",
    },
  },
  {
    MotoHelmet_Yellow: {
      niceName: "",
      description: "",
    },
  },
  {
    MountainBag_Blue: {
      niceName: "",
      description: "",
    },
  },
  {
    MountainBag_Green: {
      niceName: "",
      description: "",
    },
  },
  {
    MountainBag_Orange: {
      niceName: "",
      description: "",
    },
  },
  {
    MountainBag_Red: {
      niceName: "",
      description: "",
    },
  },
  {
    MouthRag: {
      niceName: "",
      description: "",
    },
  },
  {
    Mp133Shotgun: {
      niceName: "",
      description: "",
    },
  },
  {
    NBCBootsGray: {
      niceName: "",
      description: "",
    },
  },
  {
    NBCBootsYellow: {
      niceName: "",
      description: "",
    },
  },
  {
    NBCGlovesGray: {
      niceName: "",
      description: "",
    },
  },
  {
    NBCGlovesYellow: {
      niceName: "",
      description: "",
    },
  },
  {
    NBCHoodGray: {
      niceName: "",
      description: "",
    },
  },
  {
    NBCHoodYellow: {
      niceName: "",
      description: "",
    },
  },
  {
    NBCJacketGray: {
      niceName: "",
      description: "",
    },
  },
  {
    NBCJacketYellow: {
      niceName: "",
      description: "",
    },
  },
  {
    NBCPantsGray: {
      niceName: "",
      description: "",
    },
  },
  {
    NBCPantsYellow: {
      niceName: "",
      description: "",
    },
  },
  {
    NVGHeadstrap: {
      niceName: "",
      description: "",
    },
  },
  {
    NVGoggles: {
      niceName: "",
      description: "",
    },
  },
  {
    Nail: {
      niceName: "",
      description: "",
    },
  },
  {
    NailBox: {
      niceName: "",
      description: "",
    },
  },
  {
    NailedBaseballBat: {
      niceName: "",
      description: "",
    },
  },
  {
    Netting: {
      niceName: "",
      description: "",
    },
  },
  {
    NioshFaceMask: {
      niceName: "",
      description: "",
    },
  },
  {
    NurseDress_Blue: {
      niceName: "",
      description: "",
    },
  },
  {
    NurseDress_White: {
      niceName: "",
      description: "",
    },
  },
  {
    NylonKnifeSheath: {
      niceName: "",
      description: "",
    },
  },
  {
    OMNOGloves_Brown: {
      niceName: "Combat Gloves (Brown)",
      description:
        "Designed for military use, but quickly found their way to the civilian market. They offer decent protection from the elements.",
    },
  },
  {
    OMNOGloves_Gray: {
      niceName: "Combat Gloves (Gray)",
      description:
        "Designed for military use, but quickly found their way to the civilian market. They offer decent protection from the elements.",
    },
  },
  {
    OfficerHat: {
      niceName: "",
      description: "",
    },
  },
  {
    OffroadHatchback: {
      niceName: "",
      description: "",
    },
  },
  {
    OffroadHatchback_Blue: {
      niceName: "",
      description: "",
    },
  },
  {
    OffroadHatchback_White: {
      niceName: "",
      description: "",
    },
  },
  {
    Offroad_02: {
      niceName: "",
      description: "",
    },
  },
  {
    Offroad_02_Door_1_1: {
      niceName: "",
      description: "",
    },
  },
  {
    Offroad_02_Door_1_1_Rust: {
      niceName: "",
      description: "",
    },
  },
  {
    Offroad_02_Door_1_2: {
      niceName: "",
      description: "",
    },
  },
  {
    Offroad_02_Door_1_2_Rust: {
      niceName: "",
      description: "",
    },
  },
  {
    Offroad_02_Door_2_1: {
      niceName: "",
      description: "",
    },
  },
  {
    Offroad_02_Door_2_1_Rust: {
      niceName: "",
      description: "",
    },
  },
  {
    Offroad_02_Door_2_2: {
      niceName: "",
      description: "",
    },
  },
  {
    Offroad_02_Door_2_2_Rust: {
      niceName: "",
      description: "",
    },
  },
  {
    Offroad_02_Hood: {
      niceName: "",
      description: "",
    },
  },
  {
    Offroad_02_Trunk: {
      niceName: "",
      description: "",
    },
  },
  {
    Offroad_02_Trunk_Rust: {
      niceName: "",
      description: "",
    },
  },
  {
    Offroad_02_Wheel: {
      niceName: "",
      description: "",
    },
  },
  {
    OrientalMachete: {
      niceName: "",
      description: "",
    },
  },
  {
    OrienteeringCompass: {
      niceName: "",
      description: "",
    },
  },
  {
    OvenIndoor: {
      niceName: "",
      description: "",
    },
  },
  {
    P1: {
      niceName: "",
      description: "",
    },
  },
  {
    PP19: {
      niceName: "",
      description: "",
    },
  },
  {
    PP19_Bttstck: {
      niceName: "",
      description: "",
    },
  },
  {
    PSO11Optic: {
      niceName: "",
      description: "",
    },
  },
  {
    PSO1Optic: {
      niceName: "",
      description: "",
    },
  },
  {
    PUScopeOptic: {
      niceName: "",
      description: "",
    },
  },
  {
    PainkillerTablets: {
      niceName: "",
      description: "",
    },
  },
  {
    Pajka: {
      niceName: "",
      description: "",
    },
  },
  {
    Pajka_Opened: {
      niceName: "",
      description: "",
    },
  },
  {
    Paper: {
      niceName: "",
      description: "",
    },
  },
  {
    ParamedicJacket_Blue: {
      niceName: "",
      description: "",
    },
  },
  {
    ParamedicJacket_Crimson: {
      niceName: "",
      description: "",
    },
  },
  {
    ParamedicJacket_Green: {
      niceName: "",
      description: "",
    },
  },
  {
    ParamedicPants_Blue: {
      niceName: "",
      description: "",
    },
  },
  {
    ParamedicPants_Crimson: {
      niceName: "",
      description: "",
    },
  },
  {
    ParamedicPants_Green: {
      niceName: "",
      description: "",
    },
  },
  {
    PartyTent: {
      niceName: "",
      description: "",
    },
  },
  {
    PartyTent_Blue: {
      niceName: "",
      description: "",
    },
  },
  {
    PartyTent_Brown: {
      niceName: "",
      description: "",
    },
  },
  {
    PartyTent_Lunapark: {
      niceName: "",
      description: "",
    },
  },
  {
    Pate: {
      niceName: "",
      description: "",
    },
  },
  {
    Pate_Opened: {
      niceName: "",
      description: "",
    },
  },
  {
    PeachesCan: {
      niceName: "",
      description: "",
    },
  },
  {
    PeachesCan_Opened: {
      niceName: "",
      description: "",
    },
  },
  {
    Pear: {
      niceName: "",
      description: "",
    },
  },
  {
    Pen_Black: {
      niceName: "",
      description: "",
    },
  },
  {
    Pen_Blue: {
      niceName: "",
      description: "",
    },
  },
  {
    Pen_Green: {
      niceName: "",
      description: "",
    },
  },
  {
    Pen_Red: {
      niceName: "",
      description: "",
    },
  },
  {
    PepperSeeds: {
      niceName: "",
      description: "",
    },
  },
  {
    PepperSeedsPack: {
      niceName: "",
      description: "",
    },
  },
  {
    PersonalRadio: {
      niceName: "",
      description: "",
    },
  },
  {
    PetrolLighter: {
      niceName: "",
      description: "",
    },
  },
  {
    Pickaxe: {
      niceName: "",
      description: "",
    },
  },
  {
    PigPelt: {
      niceName: "",
      description: "",
    },
  },
  {
    PigSteakMeat: {
      niceName: "",
      description: "",
    },
  },
  {
    PileOfWoodenPlanks: {
      niceName: "",
      description: "",
    },
  },
  {
    PilotkaCap: {
      niceName: "",
      description: "",
    },
  },
  {
    Pipe: {
      niceName: "",
      description: "",
    },
  },
  {
    PipeWrench: {
      niceName: "",
      description: "",
    },
  },
  {
    PistolOptic: {
      niceName: "",
      description: "",
    },
  },
  {
    PistolSuppressor: {
      niceName: "",
      description: "",
    },
  },
  {
    Pitchfork: {
      niceName: "",
      description: "",
    },
  },
  {
    PlantMaterial: {
      niceName: "",
      description: "",
    },
  },
  {
    Plant_Pepper: {
      niceName: "",
      description: "",
    },
  },
  {
    Plant_Potato: {
      niceName: "",
      description: "",
    },
  },
  {
    Plant_Pumpkin: {
      niceName: "",
      description: "",
    },
  },
  {
    Plant_Tomato: {
      niceName: "",
      description: "",
    },
  },
  {
    Plant_Zucchini: {
      niceName: "",
      description: "",
    },
  },
  {
    Plastic_Explosive: {
      niceName: "",
      description: "",
    },
  },
  {
    PlateCarrierHolster: {
      niceName: "",
      description: "",
    },
  },
  {
    PlateCarrierHolster_Black: {
      niceName: "",
      description: "",
    },
  },
  {
    PlateCarrierHolster_Camo: {
      niceName: "",
      description: "",
    },
  },
  {
    PlateCarrierHolster_Green: {
      niceName: "",
      description: "",
    },
  },
  {
    PlateCarrierPouches: {
      niceName: "",
      description: "",
    },
  },
  {
    PlateCarrierPouches_Black: {
      niceName: "",
      description: "",
    },
  },
  {
    PlateCarrierPouches_Camo: {
      niceName: "",
      description: "",
    },
  },
  {
    PlateCarrierPouches_Green: {
      niceName: "",
      description: "",
    },
  },
  {
    PlateCarrierVest: {
      niceName: "",
      description: "",
    },
  },
  {
    PlateCarrierVest_Black: {
      niceName: "",
      description: "",
    },
  },
  {
    PlateCarrierVest_Camo: {
      niceName: "",
      description: "",
    },
  },
  {
    PlateCarrierVest_Green: {
      niceName: "",
      description: "",
    },
  },
  {
    PleurotusMushroom: {
      niceName: "",
      description: "",
    },
  },
  {
    Pliers: {
      niceName: "",
      description: "",
    },
  },
  {
    Plum: {
      niceName: "",
      description: "",
    },
  },
  {
    PoliceCap: {
      niceName: "",
      description: "",
    },
  },
  {
    PoliceJacket: {
      niceName: "",
      description: "",
    },
  },
  {
    PoliceJacketOrel: {
      niceName: "",
      description: "",
    },
  },
  {
    PolicePants: {
      niceName: "",
      description: "",
    },
  },
  {
    PolicePantsOrel: {
      niceName: "",
      description: "",
    },
  },
  {
    PoliceVest: {
      niceName: "",
      description: "",
    },
  },
  {
    PorkCan: {
      niceName: "",
      description: "",
    },
  },
  {
    PorkCan_Opened: {
      niceName: "",
      description: "",
    },
  },
  {
    PortableGasLamp: {
      niceName: "",
      description: "",
    },
  },
  {
    PortableGasStove: {
      niceName: "",
      description: "",
    },
  },
  {
    Pot: {
      niceName: "",
      description: "",
    },
  },
  {
    Potato: {
      niceName: "",
      description: "",
    },
  },
  {
    PotatoSeed: {
      niceName: "",
      description: "",
    },
  },
  {
    PowderedMilk: {
      niceName: "",
      description: "",
    },
  },
  {
    PowerGenerator: {
      niceName: "",
      description: "",
    },
  },
  {
    PressVest_Blue: {
      niceName: "",
      description: "",
    },
  },
  {
    PressVest_LightBlue: {
      niceName: "",
      description: "",
    },
  },
  {
    PrisonUniformJacket: {
      niceName: "",
      description: "",
    },
  },
  {
    PrisonUniformPants: {
      niceName: "",
      description: "",
    },
  },
  {
    PrisonerCap: {
      niceName: "",
      description: "",
    },
  },
  {
    Pumpkin: {
      niceName: "",
      description: "",
    },
  },
  {
    PumpkinHelmet: {
      niceName: "",
      description: "",
    },
  },
  {
    PumpkinSeeds: {
      niceName: "",
      description: "",
    },
  },
  {
    PumpkinSeedsPack: {
      niceName: "",
      description: "",
    },
  },
  {
    PunchedCard: {
      niceName: "",
      description: "",
    },
  },
  {
    PurificationTablets: {
      niceName: "",
      description: "",
    },
  },
  {
    QuiltedJacket_Black: {
      niceName: "",
      description: "",
    },
  },
  {
    QuiltedJacket_Blue: {
      niceName: "",
      description: "",
    },
  },
  {
    QuiltedJacket_Green: {
      niceName: "",
      description: "",
    },
  },
  {
    QuiltedJacket_Grey: {
      niceName: "",
      description: "",
    },
  },
  {
    QuiltedJacket_Orange: {
      niceName: "",
      description: "",
    },
  },
  {
    QuiltedJacket_Red: {
      niceName: "",
      description: "",
    },
  },
  {
    QuiltedJacket_Violet: {
      niceName: "",
      description: "",
    },
  },
  {
    QuiltedJacket_Yellow: {
      niceName: "",
      description: "",
    },
  },
  {
    RDG2SmokeGrenade_Black: {
      niceName: "",
      description: "",
    },
  },
  {
    RDG2SmokeGrenade_White: {
      niceName: "",
      description: "",
    },
  },
  {
    RGD5Grenade: {
      niceName: "",
      description: "",
    },
  },
  {
    RabbitLegMeat: {
      niceName: "",
      description: "",
    },
  },
  {
    RabbitPelt: {
      niceName: "",
      description: "",
    },
  },
  {
    RabbitSnareTrap: {
      niceName: "",
      description: "",
    },
  },
  {
    RadarCap_Black: {
      niceName: "",
      description: "",
    },
  },
  {
    RadarCap_Blue: {
      niceName: "",
      description: "",
    },
  },
  {
    RadarCap_Brown: {
      niceName: "",
      description: "",
    },
  },
  {
    RadarCap_Green: {
      niceName: "",
      description: "",
    },
  },
  {
    RadarCap_Red: {
      niceName: "",
      description: "",
    },
  },
  {
    Rag: {
      niceName: "",
      description: "",
    },
  },
  {
    Raincoat_Black: {
      niceName: "",
      description: "",
    },
  },
  {
    Raincoat_Blue: {
      niceName: "",
      description: "",
    },
  },
  {
    Raincoat_Green: {
      niceName: "",
      description: "",
    },
  },
  {
    Raincoat_Orange: {
      niceName: "",
      description: "",
    },
  },
  {
    Raincoat_Pink: {
      niceName: "",
      description: "",
    },
  },
  {
    Raincoat_Red: {
      niceName: "",
      description: "",
    },
  },
  {
    Raincoat_Yellow: {
      niceName: "",
      description: "",
    },
  },
  {
    Rangefinder: {
      niceName: "",
      description: "",
    },
  },
  {
    ReflexOptic: {
      niceName: "",
      description: "",
    },
  },
  {
    ReflexVest: {
      niceName: "",
      description: "",
    },
  },
  {
    RemoteDetonator: {
      niceName: "",
      description: "",
    },
  },
  {
    RemoteDetonatorReceiver: {
      niceName: "",
      description: "",
    },
  },
  {
    RemoteDetonatorTrigger: {
      niceName: "",
      description: "",
    },
  },
  {
    Repeater: {
      niceName: "",
      description: "",
    },
  },
  {
    Rice: {
      niceName: "",
      description: "",
    },
  },
  {
    RidersJacket_Black: {
      niceName: "",
      description: "",
    },
  },
  {
    Roadflare: {
      niceName: "",
      description: "",
    },
  },
  {
    Rope: {
      niceName: "",
      description: "",
    },
  },
  {
    RopeBelt: {
      niceName: "",
      description: "",
    },
  },
  {
    Ruger1022: {
      niceName: "",
      description: "",
    },
  },
  {
    SKS: {
      niceName: "",
      description: "",
    },
  },
  {
    SKS_Bayonet: {
      niceName: "",
      description: "",
    },
  },
  {
    SSG82: {
      niceName: "",
      description: "",
    },
  },
  {
    SVD: {
      niceName: "",
      description: "",
    },
  },
  {
    Saiga: {
      niceName: "",
      description: "",
    },
  },
  {
    Saiga_Bttstck: {
      niceName: "",
      description: "",
    },
  },
  {
    SalineBag: {
      niceName: "",
      description: "",
    },
  },
  {
    SalineBagIV: {
      niceName: "",
      description: "",
    },
  },
  {
    SaltySticks: {
      niceName: "",
      description: "",
    },
  },
  {
    SambucusBerry: {
      niceName: "",
      description: "",
    },
  },
  {
    SantasBeard: {
      niceName: "",
      description: "",
    },
  },
  {
    SantasHat: {
      niceName: "",
      description: "",
    },
  },
  {
    Sardines: {
      niceName: "",
      description: "",
    },
  },
  {
    SardinesCan: {
      niceName: "",
      description: "",
    },
  },
  {
    SardinesCan_Opened: {
      niceName: "",
      description: "",
    },
  },
  {
    SawedoffB95: {
      niceName: "",
      description: "",
    },
  },
  {
    SawedoffFAMAS: {
      niceName: "",
      description: "",
    },
  },
  {
    SawedoffIzh18: {
      niceName: "",
      description: "",
    },
  },
  {
    SawedoffIzh18Shotgun: {
      niceName: "",
      description: "",
    },
  },
  {
    SawedoffIzh43Shotgun: {
      niceName: "",
      description: "",
    },
  },
  {
    SawedoffMagnum: {
      niceName: "",
      description: "",
    },
  },
  {
    SawedoffMosin9130: {
      niceName: "",
      description: "",
    },
  },
  {
    SawedoffMosin9130_Black: {
      niceName: "",
      description: "",
    },
  },
  {
    SawedoffMosin9130_Camo: {
      niceName: "",
      description: "",
    },
  },
  {
    SawedoffMosin9130_Green: {
      niceName: "",
      description: "",
    },
  },
  {
    Scout: {
      niceName: "",
      description: "",
    },
  },
  {
    Scout_Chernarus: {
      niceName: "",
      description: "",
    },
  },
  {
    Scout_Livonia: {
      niceName: "",
      description: "",
    },
  },
  {
    Screwdriver: {
      niceName: "",
      description: "",
    },
  },
  {
    SeaChest: {
      niceName: "",
      description: "",
    },
  },
  {
    Sedan_02: {
      niceName: "",
      description: "",
    },
  },
  {
    Sedan_02_Door_1_1: {
      niceName: "",
      description: "",
    },
  },
  {
    Sedan_02_Door_1_1_Grey: {
      niceName: "",
      description: "",
    },
  },
  {
    Sedan_02_Door_1_1_GreyRust: {
      niceName: "",
      description: "",
    },
  },
  {
    Sedan_02_Door_1_1_Red: {
      niceName: "",
      description: "",
    },
  },
  {
    Sedan_02_Door_1_1_RedRust: {
      niceName: "",
      description: "",
    },
  },
  {
    Sedan_02_Door_1_1_YellowRust: {
      niceName: "",
      description: "",
    },
  },
  {
    Sedan_02_Door_1_2: {
      niceName: "",
      description: "",
    },
  },
  {
    Sedan_02_Door_1_2_Grey: {
      niceName: "",
      description: "",
    },
  },
  {
    Sedan_02_Door_1_2_GreyRust: {
      niceName: "",
      description: "",
    },
  },
  {
    Sedan_02_Door_1_2_Red: {
      niceName: "",
      description: "",
    },
  },
  {
    Sedan_02_Door_1_2_RedRust: {
      niceName: "",
      description: "",
    },
  },
  {
    Sedan_02_Door_1_2_YellowRust: {
      niceName: "",
      description: "",
    },
  },
  {
    Sedan_02_Door_2_1: {
      niceName: "",
      description: "",
    },
  },
  {
    Sedan_02_Door_2_1_Grey: {
      niceName: "",
      description: "",
    },
  },
  {
    Sedan_02_Door_2_1_GreyRust: {
      niceName: "",
      description: "",
    },
  },
  {
    Sedan_02_Door_2_1_Red: {
      niceName: "",
      description: "",
    },
  },
  {
    Sedan_02_Door_2_1_RedRust: {
      niceName: "",
      description: "",
    },
  },
  {
    Sedan_02_Door_2_1_YellowRust: {
      niceName: "",
      description: "",
    },
  },
  {
    Sedan_02_Door_2_2: {
      niceName: "",
      description: "",
    },
  },
  {
    Sedan_02_Door_2_2_Grey: {
      niceName: "",
      description: "",
    },
  },
  {
    Sedan_02_Door_2_2_GreyRust: {
      niceName: "",
      description: "",
    },
  },
  {
    Sedan_02_Door_2_2_Red: {
      niceName: "",
      description: "",
    },
  },
  {
    Sedan_02_Door_2_2_RedRust: {
      niceName: "",
      description: "",
    },
  },
  {
    Sedan_02_Door_2_2_YellowRust: {
      niceName: "",
      description: "",
    },
  },
  {
    Sedan_02_Grey: {
      niceName: "",
      description: "",
    },
  },
  {
    Sedan_02_Hood: {
      niceName: "",
      description: "",
    },
  },
  {
    Sedan_02_Hood_Grey: {
      niceName: "",
      description: "",
    },
  },
  {
    Sedan_02_Hood_GreyRust: {
      niceName: "",
      description: "",
    },
  },
  {
    Sedan_02_Hood_Red: {
      niceName: "",
      description: "",
    },
  },
  {
    Sedan_02_Hood_RedRust: {
      niceName: "",
      description: "",
    },
  },
  {
    Sedan_02_Hood_YellowRust: {
      niceName: "",
      description: "",
    },
  },
  {
    Sedan_02_Red: {
      niceName: "",
      description: "",
    },
  },
  {
    Sedan_02_Trunk: {
      niceName: "",
      description: "",
    },
  },
  {
    Sedan_02_Trunk_Grey: {
      niceName: "",
      description: "",
    },
  },
  {
    Sedan_02_Trunk_GreyRust: {
      niceName: "",
      description: "",
    },
  },
  {
    Sedan_02_Trunk_Red: {
      niceName: "",
      description: "",
    },
  },
  {
    Sedan_02_Trunk_RedRust: {
      niceName: "",
      description: "",
    },
  },
  {
    Sedan_02_Trunk_YellowRust: {
      niceName: "",
      description: "",
    },
  },
  {
    Sedan_02_Wheel: {
      niceName: "",
      description: "",
    },
  },
  {
    Sedan_02_Wheel_Ruined: {
      niceName: "",
      description: "",
    },
  },
  {
    SewingKit: {
      niceName: "",
      description: "",
    },
  },
  {
    SharpWoodenStick: {
      niceName: "",
      description: "",
    },
  },
  {
    SheepPelt: {
      niceName: "",
      description: "",
    },
  },
  {
    SheepSteakMeat: {
      niceName: "",
      description: "",
    },
  },
  {
    ShelterFabric: {
      niceName: "",
      description: "",
    },
  },
  {
    ShelterKit: {
      niceName: "",
      description: "",
    },
  },
  {
    ShelterLeather: {
      niceName: "",
      description: "",
    },
  },
  {
    ShelterSite: {
      niceName: "",
      description: "",
    },
  },
  {
    ShelterStick: {
      niceName: "",
      description: "",
    },
  },
  {
    Shirt_BlueCheck: {
      niceName: "",
      description: "",
    },
  },
  {
    Shirt_BlueCheckBright: {
      niceName: "",
      description: "",
    },
  },
  {
    Shirt_GreenCheck: {
      niceName: "",
      description: "",
    },
  },
  {
    Shirt_PlaneBlack: {
      niceName: "",
      description: "",
    },
  },
  {
    Shirt_RedCheck: {
      niceName: "",
      description: "",
    },
  },
  {
    Shirt_WhiteCheck: {
      niceName: "",
      description: "",
    },
  },
  {
    ShortJeans_Black: {
      niceName: "",
      description: "",
    },
  },
  {
    ShortJeans_Blue: {
      niceName: "",
      description: "",
    },
  },
  {
    ShortJeans_Brown: {
      niceName: "",
      description: "",
    },
  },
  {
    ShortJeans_Darkblue: {
      niceName: "",
      description: "",
    },
  },
  {
    ShortJeans_Green: {
      niceName: "",
      description: "",
    },
  },
  {
    ShortJeans_Red: {
      niceName: "",
      description: "",
    },
  },
  {
    Shovel: {
      niceName: "",
      description: "",
    },
  },
  {
    Sickle: {
      niceName: "",
      description: "",
    },
  },
  {
    SkateHelmet_Black: {
      niceName: "",
      description: "",
    },
  },
  {
    SkateHelmet_Blue: {
      niceName: "",
      description: "",
    },
  },
  {
    SkateHelmet_Gray: {
      niceName: "",
      description: "",
    },
  },
  {
    SkateHelmet_Green: {
      niceName: "",
      description: "",
    },
  },
  {
    SkateHelmet_Red: {
      niceName: "",
      description: "",
    },
  },
  {
    Skirt_Blue: {
      niceName: "",
      description: "",
    },
  },
  {
    Skirt_Red: {
      niceName: "",
      description: "",
    },
  },
  {
    Skirt_White: {
      niceName: "",
      description: "",
    },
  },
  {
    Skirt_Yellow: {
      niceName: "",
      description: "",
    },
  },
  {
    SlacksPants_Beige: {
      niceName: "",
      description: "",
    },
  },
  {
    SlacksPants_Black: {
      niceName: "",
      description: "",
    },
  },
  {
    SlacksPants_Blue: {
      niceName: "",
      description: "",
    },
  },
  {
    SlacksPants_Brown: {
      niceName: "",
      description: "",
    },
  },
  {
    SlacksPants_DarkGrey: {
      niceName: "",
      description: "",
    },
  },
  {
    SlacksPants_Khaki: {
      niceName: "",
      description: "",
    },
  },
  {
    SlacksPants_LightGrey: {
      niceName: "",
      description: "",
    },
  },
  {
    SlacksPants_White: {
      niceName: "",
      description: "",
    },
  },
  {
    SledgeHammer: {
      niceName: "",
      description: "",
    },
  },
  {
    SlicedPumpkin: {
      niceName: "",
      description: "",
    },
  },
  {
    SmallFishTrap: {
      niceName: "",
      description: "",
    },
  },
  {
    SmallGasCanister: {
      niceName: "",
      description: "",
    },
  },
  {
    SmallGuts: {
      niceName: "",
      description: "",
    },
  },
  {
    SmallProtectorCase: {
      niceName: "",
      description: "",
    },
  },
  {
    SmallStone: {
      niceName: "",
      description: "",
    },
  },
  {
    SmershBag: {
      niceName: "",
      description: "",
    },
  },
  {
    SmershVest: {
      niceName: "",
      description: "",
    },
  },
  {
    Sneakers_Black: {
      niceName: "",
      description: "",
    },
  },
  {
    Sneakers_Gray: {
      niceName: "",
      description: "",
    },
  },
  {
    Sneakers_Green: {
      niceName: "",
      description: "",
    },
  },
  {
    Sneakers_Red: {
      niceName: "",
      description: "",
    },
  },
  {
    Sneakers_White: {
      niceName: "",
      description: "",
    },
  },
  {
    SodaCan_Cola: {
      niceName: "",
      description: "",
    },
  },
  {
    SodaCan_Fronta: {
      niceName: "",
      description: "",
    },
  },
  {
    SodaCan_Kvass: {
      niceName: "",
      description: "",
    },
  },
  {
    SodaCan_Pipsi: {
      niceName: "",
      description: "",
    },
  },
  {
    SodaCan_Spite: {
      niceName: "",
      description: "",
    },
  },
  {
    SpaghettiCan: {
      niceName: "",
      description: "",
    },
  },
  {
    SpaghettiCan_Opened: {
      niceName: "",
      description: "",
    },
  },
  {
    SparkPlug: {
      niceName: "",
      description: "",
    },
  },
  {
    SpearBone: {
      niceName: "",
      description: "",
    },
  },
  {
    SpearStone: {
      niceName: "",
      description: "",
    },
  },
  {
    Splint: {
      niceName: "",
      description: "",
    },
  },
  {
    Splint_Applied: {
      niceName: "",
      description: "",
    },
  },
  {
    SportGlasses_Black: {
      niceName: "",
      description: "",
    },
  },
  {
    SportGlasses_Blue: {
      niceName: "",
      description: "",
    },
  },
  {
    SportGlasses_Green: {
      niceName: "",
      description: "",
    },
  },
  {
    SportGlasses_Orange: {
      niceName: "",
      description: "",
    },
  },
  {
    Spotlight: {
      niceName: "",
      description: "",
    },
  },
  {
    Ssh68Helmet: {
      niceName: "",
      description: "",
    },
  },
  {
    StarlightOptic: {
      niceName: "",
      description: "",
    },
  },
  {
    StartKitIV: {
      niceName: "",
      description: "",
    },
  },
  {
    SteakKnife: {
      niceName: "",
      description: "",
    },
  },
  {
    Stone: {
      niceName: "",
      description: "",
    },
  },
  {
    StoneKnife: {
      niceName: "",
      description: "",
    },
  },
  {
    SurgicalGloves_Blue: {
      niceName: "",
      description: "",
    },
  },
  {
    SurgicalGloves_Green: {
      niceName: "",
      description: "",
    },
  },
  {
    SurgicalGloves_LightBlue: {
      niceName: "",
      description: "",
    },
  },
  {
    SurgicalGloves_White: {
      niceName: "",
      description: "",
    },
  },
  {
    SurgicalMask: {
      niceName: "",
      description: "",
    },
  },
  {
    Sweater_Blue: {
      niceName: "",
      description: "",
    },
  },
  {
    Sweater_Gray: {
      niceName: "",
      description: "",
    },
  },
  {
    Sweater_Green: {
      niceName: "",
      description: "",
    },
  },
  {
    Sweater_Red: {
      niceName: "",
      description: "",
    },
  },
  {
    TLRLight: {
      niceName: "",
      description: "",
    },
  },
  {
    TShirt_Beige: {
      niceName: "",
      description: "",
    },
  },
  {
    TShirt_Black: {
      niceName: "",
      description: "",
    },
  },
  {
    TShirt_Blue: {
      niceName: "",
      description: "",
    },
  },
  {
    TShirt_Green: {
      niceName: "",
      description: "",
    },
  },
  {
    TShirt_Grey: {
      niceName: "",
      description: "",
    },
  },
  {
    TShirt_OrangeWhiteStripes: {
      niceName: "",
      description: "",
    },
  },
  {
    TShirt_Red: {
      niceName: "",
      description: "",
    },
  },
  {
    TShirt_RedBlackStripes: {
      niceName: "",
      description: "",
    },
  },
  {
    TShirt_White: {
      niceName: "",
      description: "",
    },
  },
  {
    TTSKOBoots: {
      niceName: "",
      description: "",
    },
  },
  {
    TTSKOPants: {
      niceName: "",
      description: "",
    },
  },
  {
    TTsKOJacket_Camo: {
      niceName: "",
      description: "",
    },
  },
  {
    TacticalBaconCan: {
      niceName: "",
      description: "",
    },
  },
  {
    TacticalBaconCan_Opened: {
      niceName: "",
      description: "",
    },
  },
  {
    TacticalGloves_Beige: {
      niceName: "",
      description: "",
    },
  },
  {
    TacticalGloves_Black: {
      niceName: "",
      description: "",
    },
  },
  {
    TacticalGloves_Green: {
      niceName: "",
      description: "",
    },
  },
  {
    TacticalGoggles: {
      niceName: "",
      description: "",
    },
  },
  {
    TacticalShirt_Black: {
      niceName: "",
      description: "",
    },
  },
  {
    TacticalShirt_Grey: {
      niceName: "",
      description: "",
    },
  },
  {
    TacticalShirt_Olive: {
      niceName: "",
      description: "",
    },
  },
  {
    TacticalShirt_Tan: {
      niceName: "",
      description: "",
    },
  },
  {
    TaloonBag_Blue: {
      niceName: "",
      description: "",
    },
  },
  {
    TaloonBag_Green: {
      niceName: "",
      description: "",
    },
  },
  {
    TaloonBag_Orange: {
      niceName: "",
      description: "",
    },
  },
  {
    TaloonBag_Violet: {
      niceName: "",
      description: "",
    },
  },
  {
    TankerHelmet: {
      niceName: "",
      description: "",
    },
  },
  {
    TannedLeather: {
      niceName: "",
      description: "",
    },
  },
  {
    TelnyashkaShirt: {
      niceName: "",
      description: "",
    },
  },
  {
    TerritoryFlag: {
      niceName: "",
      description: "",
    },
  },
  {
    TerritoryFlagKit: {
      niceName: "",
      description: "",
    },
  },
  {
    TetracyclineAntibiotics: {
      niceName: "",
      description: "",
    },
  },
  {
    Thermometer: {
      niceName: "",
      description: "",
    },
  },
  {
    ThickFramesGlasses: {
      niceName: "",
      description: "",
    },
  },
  {
    ThinFramesGlasses: {
      niceName: "",
      description: "",
    },
  },
  {
    TireRepairKit: {
      niceName: "",
      description: "",
    },
  },
  {
    Tomato: {
      niceName: "",
      description: "",
    },
  },
  {
    TomatoSeeds: {
      niceName: "",
      description: "",
    },
  },
  {
    TomatoSeedsPack: {
      niceName: "",
      description: "",
    },
  },
  {
    Torch: {
      niceName: "",
      description: "",
    },
  },
  {
    TorsoCover_Improvised: {
      niceName: "",
      description: "",
    },
  },
  {
    TortillaBag: {
      niceName: "",
      description: "",
    },
  },
  {
    TrackSuitJacket_Black: {
      niceName: "",
      description: "",
    },
  },
  {
    TrackSuitJacket_Blue: {
      niceName: "",
      description: "",
    },
  },
  {
    TrackSuitJacket_Green: {
      niceName: "",
      description: "",
    },
  },
  {
    TrackSuitJacket_LightBlue: {
      niceName: "",
      description: "",
    },
  },
  {
    TrackSuitJacket_Red: {
      niceName: "",
      description: "",
    },
  },
  {
    TrackSuitPants_Black: {
      niceName: "",
      description: "",
    },
  },
  {
    TrackSuitPants_Blue: {
      niceName: "",
      description: "",
    },
  },
  {
    TrackSuitPants_Green: {
      niceName: "",
      description: "",
    },
  },
  {
    TrackSuitPants_LightBlue: {
      niceName: "",
      description: "",
    },
  },
  {
    TrackSuitPants_Red: {
      niceName: "",
      description: "",
    },
  },
  {
    Tripod: {
      niceName: "",
      description: "",
    },
  },
  {
    TripwireTrap: {
      niceName: "",
      description: "",
    },
  },
  {
    TruckBattery: {
      niceName: "",
      description: "",
    },
  },
  {
    Truck_01_Covered: {
      niceName: "",
      description: "",
    },
  },
  {
    Truck_01_Covered_Blue: {
      niceName: "",
      description: "",
    },
  },
  {
    Truck_01_Covered_Orange: {
      niceName: "",
      description: "",
    },
  },
  {
    Truck_01_Door_1_1: {
      niceName: "",
      description: "",
    },
  },
  {
    Truck_01_Door_1_1_Blue: {
      niceName: "",
      description: "",
    },
  },
  {
    Truck_01_Door_1_1_BlueRust: {
      niceName: "",
      description: "",
    },
  },
  {
    Truck_01_Door_1_1_GreenRust: {
      niceName: "",
      description: "",
    },
  },
  {
    Truck_01_Door_1_1_Orange: {
      niceName: "",
      description: "",
    },
  },
  {
    Truck_01_Door_1_1_OrangeRust: {
      niceName: "",
      description: "",
    },
  },
  {
    Truck_01_Door_2_1: {
      niceName: "",
      description: "",
    },
  },
  {
    Truck_01_Door_2_1_Blue: {
      niceName: "",
      description: "",
    },
  },
  {
    Truck_01_Door_2_1_BlueRust: {
      niceName: "",
      description: "",
    },
  },
  {
    Truck_01_Door_2_1_GreenRust: {
      niceName: "",
      description: "",
    },
  },
  {
    Truck_01_Door_2_1_Orange: {
      niceName: "",
      description: "",
    },
  },
  {
    Truck_01_Door_2_1_OrangeRust: {
      niceName: "",
      description: "",
    },
  },
  {
    Truck_01_Hood: {
      niceName: "",
      description: "",
    },
  },
  {
    Truck_01_Hood_Blue: {
      niceName: "",
      description: "",
    },
  },
  {
    Truck_01_Hood_BlueRust: {
      niceName: "",
      description: "",
    },
  },
  {
    Truck_01_Hood_GreenRust: {
      niceName: "",
      description: "",
    },
  },
  {
    Truck_01_Hood_Orange: {
      niceName: "",
      description: "",
    },
  },
  {
    Truck_01_Hood_OrangeRust: {
      niceName: "",
      description: "",
    },
  },
  {
    Truck_01_Wheel: {
      niceName: "",
      description: "",
    },
  },
  {
    Truck_01_WheelDouble: {
      niceName: "",
      description: "",
    },
  },
  {
    Truck_01_WheelDouble_Ruined: {
      niceName: "",
      description: "",
    },
  },
  {
    Truck_01_Wheel_Ruined: {
      niceName: "",
      description: "",
    },
  },
  {
    TunaCan: {
      niceName: "",
      description: "",
    },
  },
  {
    TunaCan_Opened: {
      niceName: "",
      description: "",
    },
  },
  {
    UKAssVest_Black: {
      niceName: "",
      description: "",
    },
  },
  {
    UKAssVest_Camo: {
      niceName: "",
      description: "",
    },
  },
  {
    UKAssVest_Khaki: {
      niceName: "",
      description: "",
    },
  },
  {
    UKAssVest_Olive: {
      niceName: "",
      description: "",
    },
  },
  {
    UMP45: {
      niceName: "",
      description: "",
    },
  },
  {
    USMCJacket_Desert: {
      niceName: "",
      description: "",
    },
  },
  {
    USMCJacket_Woodland: {
      niceName: "",
      description: "",
    },
  },
  {
    USMCPants_Desert: {
      niceName: "",
      description: "",
    },
  },
  {
    USMCPants_Woodland: {
      niceName: "",
      description: "",
    },
  },
  {
    UndergroundStash: {
      niceName: "",
      description: "",
    },
  },
  {
    UniversalLight: {
      niceName: "",
      description: "",
    },
  },
  {
    UnknownFoodCan: {
      niceName: "",
      description: "",
    },
  },
  {
    UnknownFoodCan_Opened: {
      niceName: "",
      description: "",
    },
  },
  {
    Ushanka_Black: {
      niceName: "",
      description: "",
    },
  },
  {
    Ushanka_Blue: {
      niceName: "",
      description: "",
    },
  },
  {
    Ushanka_Green: {
      niceName: "",
      description: "",
    },
  },
  {
    VSS: {
      niceName: "",
      description: "",
    },
  },
  {
    VitaminBottle: {
      niceName: "",
      description: "",
    },
  },
  {
    Watchtower: {
      niceName: "",
      description: "",
    },
  },
  {
    WatchtowerKit: {
      niceName: "",
      description: "",
    },
  },
  {
    WaterBottle: {
      niceName: "",
      description: "",
    },
  },
  {
    WaterproofBag_Green: {
      niceName: "",
      description: "",
    },
  },
  {
    WaterproofBag_Orange: {
      niceName: "",
      description: "",
    },
  },
  {
    WaterproofBag_Yellow: {
      niceName: "",
      description: "",
    },
  },
  {
    WeaponCleaningKit: {
      niceName: "",
      description: "",
    },
  },
  {
    WeldingMask: {
      niceName: "",
      description: "",
    },
  },
  {
    Wellies_Black: {
      niceName: "",
      description: "",
    },
  },
  {
    Wellies_Brown: {
      niceName: "",
      description: "",
    },
  },
  {
    Wellies_Green: {
      niceName: "",
      description: "",
    },
  },
  {
    Wellies_Grey: {
      niceName: "",
      description: "",
    },
  },
  {
    Whetstone: {
      niceName: "",
      description: "",
    },
  },
  {
    WildboarPelt: {
      niceName: "",
      description: "",
    },
  },
  {
    Winchester70: {
      niceName: "",
      description: "",
    },
  },
  {
    WitchHat: {
      niceName: "",
      description: "",
    },
  },
  {
    WitchHood_Black: {
      niceName: "",
      description: "",
    },
  },
  {
    WitchHood_Brown: {
      niceName: "",
      description: "",
    },
  },
  {
    WitchHood_Red: {
      niceName: "",
      description: "",
    },
  },
  {
    WolfPelt: {
      niceName: "",
      description: "",
    },
  },
  {
    WolfSteakMeat: {
      niceName: "",
      description: "",
    },
  },
  {
    WomanSuit_Beige: {
      niceName: "",
      description: "",
    },
  },
  {
    WomanSuit_Black: {
      niceName: "",
      description: "",
    },
  },
  {
    WomanSuit_Blue: {
      niceName: "",
      description: "",
    },
  },
  {
    WomanSuit_Brown: {
      niceName: "",
      description: "",
    },
  },
  {
    WomanSuit_DarkGrey: {
      niceName: "",
      description: "",
    },
  },
  {
    WomanSuit_Khaki: {
      niceName: "",
      description: "",
    },
  },
  {
    WomanSuit_LightGrey: {
      niceName: "",
      description: "",
    },
  },
  {
    WomanSuit_White: {
      niceName: "",
      description: "",
    },
  },
  {
    WoodAxe: {
      niceName: "",
      description: "",
    },
  },
  {
    WoodenCrate: {
      niceName: "",
      description: "",
    },
  },
  {
    WoodenLog: {
      niceName: "",
      description: "",
    },
  },
  {
    WoodenPlank: {
      niceName: "",
      description: "",
    },
  },
  {
    WoodenStick: {
      niceName: "",
      description: "",
    },
  },
  {
    WoolCoat_Beige: {
      niceName: "",
      description: "",
    },
  },
  {
    WoolCoat_Black: {
      niceName: "",
      description: "",
    },
  },
  {
    WoolCoat_BlackCheck: {
      niceName: "",
      description: "",
    },
  },
  {
    WoolCoat_Blue: {
      niceName: "",
      description: "",
    },
  },
  {
    WoolCoat_BlueCheck: {
      niceName: "",
      description: "",
    },
  },
  {
    WoolCoat_BrownCheck: {
      niceName: "",
      description: "",
    },
  },
  {
    WoolCoat_Green: {
      niceName: "",
      description: "",
    },
  },
  {
    WoolCoat_GreyCheck: {
      niceName: "",
      description: "",
    },
  },
  {
    WoolCoat_Red: {
      niceName: "",
      description: "",
    },
  },
  {
    WoolCoat_RedCheck: {
      niceName: "",
      description: "",
    },
  },
  {
    WorkingBoots_Beige: {
      niceName: "",
      description: "",
    },
  },
  {
    WorkingBoots_Brown: {
      niceName: "",
      description: "",
    },
  },
  {
    WorkingBoots_Green: {
      niceName: "",
      description: "",
    },
  },
  {
    WorkingBoots_Grey: {
      niceName: "",
      description: "",
    },
  },
  {
    WorkingBoots_Yellow: {
      niceName: "",
      description: "",
    },
  },
  {
    WorkingGloves_Beige: {
      niceName: "",
      description: "",
    },
  },
  {
    WorkingGloves_Black: {
      niceName: "",
      description: "",
    },
  },
  {
    WorkingGloves_Brown: {
      niceName: "",
      description: "",
    },
  },
  {
    WorkingGloves_Yellow: {
      niceName: "",
      description: "",
    },
  },
  {
    Wreck_Mi8_Crashed: {
      niceName: "",
      description: "",
    },
  },
  {
    Wreck_SantasSleigh: {
      niceName: "",
      description: "",
    },
  },
  {
    Wreck_UH1Y: {
      niceName: "",
      description: "",
    },
  },
  {
    Wrench: {
      niceName: "",
      description: "",
    },
  },
  {
    XmasLights: {
      niceName: "",
      description: "",
    },
  },
  {
    ZSh3PilotHelmet: {
      niceName: "",
      description: "",
    },
  },
  {
    Zagorky: {
      niceName: "",
      description: "",
    },
  },
  {
    ZagorkyChocolate: {
      niceName: "",
      description: "",
    },
  },
  {
    ZagorkyPeanuts: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbF_BlueCollarFat_Blue: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbF_BlueCollarFat_Green: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbF_BlueCollarFat_Red: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbF_BlueCollarFat_White: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbF_CitizenANormal_Beige: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbF_CitizenANormal_Blue: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbF_CitizenANormal_Brown: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbF_CitizenBSkinny: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbF_Clerk_Normal_Blue: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbF_Clerk_Normal_Green: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbF_Clerk_Normal_Red: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbF_Clerk_Normal_White: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbF_DoctorSkinny: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbF_HikerSkinny_Blue: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbF_HikerSkinny_Green: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbF_HikerSkinny_Grey: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbF_HikerSkinny_Red: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbF_JoggerSkinny_Blue: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbF_JoggerSkinny_Brown: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbF_JoggerSkinny_Green: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbF_JoggerSkinny_Red: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbF_JournalistNormal_Blue: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbF_JournalistNormal_Green: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbF_JournalistNormal_Red: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbF_JournalistNormal_White: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbF_MechanicNormal_Beige: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbF_MechanicNormal_Green: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbF_MechanicNormal_Grey: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbF_MechanicNormal_Orange: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbF_MilkMaidOld_Beige: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbF_MilkMaidOld_Black: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbF_MilkMaidOld_Green: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbF_MilkMaidOld_Grey: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbF_NurseFat: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbF_ParamedicNormal_Blue: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbF_ParamedicNormal_Green: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbF_ParamedicNormal_Red: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbF_PatientOld: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbF_PoliceWomanNormal: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbF_ShortSkirt_beige: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbF_ShortSkirt_black: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbF_ShortSkirt_brown: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbF_ShortSkirt_checks: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbF_ShortSkirt_green: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbF_ShortSkirt_grey: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbF_ShortSkirt_red: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbF_ShortSkirt_stripes: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbF_ShortSkirt_white: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbF_ShortSkirt_yellow: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbF_SkaterYoung_Brown: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbF_SkaterYoung_Striped: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbF_SkaterYoung_Violet: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbF_SurvivorNormal_Blue: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbF_SurvivorNormal_Orange: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbF_SurvivorNormal_Red: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbF_SurvivorNormal_White: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbF_VillagerOld_Blue: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbF_VillagerOld_Green: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbF_VillagerOld_Red: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbF_VillagerOld_White: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbM_CitizenASkinny_Blue: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbM_CitizenASkinny_Brown: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbM_CitizenASkinny_Grey: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbM_CitizenASkinny_Red: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbM_CitizenBFat_Blue: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbM_CitizenBFat_Green: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbM_CitizenBFat_Red: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbM_ClerkFat_Brown: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbM_ClerkFat_Grey: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbM_ClerkFat_Khaki: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbM_ClerkFat_White: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbM_CommercialPilotOld_Blue: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbM_CommercialPilotOld_Brown: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbM_CommercialPilotOld_Grey: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbM_CommercialPilotOld_Olive: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbM_ConstrWorkerNormal_Beige: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbM_ConstrWorkerNormal_Black: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbM_ConstrWorkerNormal_Green: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbM_ConstrWorkerNormal_Grey: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbM_DoctorFat: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbM_FarmerFat_Beige: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbM_FarmerFat_Blue: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbM_FarmerFat_Brown: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbM_FarmerFat_Green: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbM_FirefighterNormal: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbM_FishermanOld_Blue: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbM_FishermanOld_Green: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbM_FishermanOld_Grey: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbM_FishermanOld_Red: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbM_HandymanNormal_Beige: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbM_HandymanNormal_Blue: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbM_HandymanNormal_Green: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbM_HandymanNormal_Grey: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbM_HandymanNormal_White: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbM_HeavyIndustryWorker: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbM_HermitSkinny_Beige: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbM_HermitSkinny_Black: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbM_HermitSkinny_Green: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbM_HermitSkinny_Red: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbM_HikerSkinny_Blue: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbM_HikerSkinny_Green: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbM_HikerSkinny_Yellow: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbM_HunterOld_Autumn: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbM_HunterOld_Spring: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbM_HunterOld_Summer: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbM_HunterOld_Winter: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbM_Jacket_beige: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbM_Jacket_black: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbM_Jacket_blue: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbM_Jacket_bluechecks: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbM_Jacket_brown: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbM_Jacket_greenchecks: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbM_Jacket_grey: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbM_Jacket_khaki: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbM_Jacket_magenta: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbM_Jacket_stripes: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbM_JoggerSkinny_Blue: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbM_JoggerSkinny_Green: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbM_JoggerSkinny_Red: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbM_JournalistSkinny: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbM_MechanicSkinny_Blue: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbM_MechanicSkinny_Green: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbM_MechanicSkinny_Grey: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbM_MechanicSkinny_Red: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbM_MotobikerFat_Beige: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbM_MotobikerFat_Black: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbM_MotobikerFat_Blue: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbM_NBC_Grey: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbM_NBC_Yellow: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbM_OffshoreWorker_Green: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbM_OffshoreWorker_Orange: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbM_OffshoreWorker_Red: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbM_OffshoreWorker_Yellow: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbM_ParamedicNormal_Black: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbM_ParamedicNormal_Blue: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbM_ParamedicNormal_Green: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbM_ParamedicNormal_Red: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbM_PatientSkinny: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbM_PatrolNormal_Autumn: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbM_PatrolNormal_Flat: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbM_PatrolNormal_PautRev: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbM_PatrolNormal_Summer: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbM_PolicemanFat: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbM_PolicemanSpecForce: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbM_PolicemanSpecForce_Heavy: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbM_PrisonerSkinny: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbM_Santa: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbM_SkaterYoung_Blue: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbM_SkaterYoung_Brown: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbM_SkaterYoung_Green: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbM_SkaterYoung_Grey: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbM_SoldierNormal: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbM_VillagerOld_Blue: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbM_VillagerOld_Green: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbM_VillagerOld_White: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbM_priestPopSkinny: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbM_usSoldier_Heavy_Woodland: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbM_usSoldier_Officer_Convoy: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbM_usSoldier_Officer_Desert: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbM_usSoldier_normal_Desert: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmbM_usSoldier_normal_Woodland: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmijovkaCap_Black: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmijovkaCap_Blue: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmijovkaCap_Brown: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmijovkaCap_Green: {
      niceName: "",
      description: "",
    },
  },
  {
    ZmijovkaCap_Red: {
      niceName: "",
      description: "",
    },
  },
  {
    Zucchini: {
      niceName: "",
      description: "",
    },
  },
  {
    ZucchiniSeeds: {
      niceName: "",
      description: "",
    },
  },
  {
    ZucchiniSeedsPack: {
      niceName: "",
      description: "",
    },
  },
];
