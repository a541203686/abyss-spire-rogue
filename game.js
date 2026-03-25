const CARD_LIBRARY = {
  strike: {
    id: "strike",
    name: "打击",
    kind: "attack",
    cost: 1,
    rarity: "starter",
    desc: "造成 6 点伤害。",
    effects: [{ op: "attack", target: "enemy", value: 6 }],
  },
  defend: {
    id: "defend",
    name: "防御",
    kind: "skill",
    cost: 1,
    rarity: "starter",
    desc: "获得 5 点格挡。",
    effects: [{ op: "block", target: "self", value: 5 }],
  },
  bash: {
    id: "bash",
    name: "重击",
    kind: "attack",
    cost: 2,
    rarity: "uncommon",
    desc: "造成 8 点伤害。施加 2 层易伤。",
    effects: [
      { op: "attack", target: "enemy", value: 8 },
      { op: "status", target: "enemy", status: "vulnerable", value: 2 },
    ],
  },
  pommel: {
    id: "pommel",
    name: "断筋",
    kind: "attack",
    cost: 1,
    rarity: "common",
    desc: "造成 7 点伤害。抽 1 张牌。",
    effects: [
      { op: "attack", target: "enemy", value: 7 },
      { op: "draw", value: 1 },
    ],
  },
  quickslash: {
    id: "quickslash",
    name: "快斩",
    kind: "attack",
    cost: 1,
    rarity: "common",
    desc: "造成 9 点伤害。",
    effects: [{ op: "attack", target: "enemy", value: 9 }],
  },
  ironwave: {
    id: "ironwave",
    name: "铁波",
    kind: "attack",
    cost: 1,
    rarity: "common",
    desc: "造成 5 点伤害并获得 5 点格挡。",
    effects: [
      { op: "attack", target: "enemy", value: 5 },
      { op: "block", target: "self", value: 5 },
    ],
  },
  inflame: {
    id: "inflame",
    name: "激怒",
    kind: "power",
    cost: 1,
    rarity: "uncommon",
    desc: "本场战斗获得 2 点力量。",
    effects: [{ op: "strength", target: "self", value: 2 }],
  },
  heavyblow: {
    id: "heavyblow",
    name: "重压",
    kind: "attack",
    cost: 2,
    rarity: "uncommon",
    desc: "造成 14 点伤害。",
    effects: [{ op: "attack", target: "enemy", value: 14 }],
  },
  bandage: {
    id: "bandage",
    name: "包扎",
    kind: "skill",
    cost: 1,
    rarity: "common",
    desc: "恢复 4 点生命并获得 3 点格挡。",
    effects: [
      { op: "heal", target: "self", value: 4 },
      { op: "block", target: "self", value: 3 },
    ],
  },
  battlecry: {
    id: "battlecry",
    name: "战吼",
    kind: "skill",
    cost: 0,
    rarity: "uncommon",
    desc: "抽 2 张牌。获得 1 点力量。",
    effects: [
      { op: "draw", value: 2 },
      { op: "strength", target: "self", value: 1 },
    ],
  },
};

const CARD_FACE_META = {
  strike: { title: "裂锋", glyph: "✦" },
  defend: { title: "守势", glyph: "◈" },
  bash: { title: "破甲", glyph: "✹" },
  pommel: { title: "追击", glyph: "✶" },
  quickslash: { title: "瞬切", glyph: "✧" },
  ironwave: { title: "铁潮", glyph: "⬡" },
  inflame: { title: "燃志", glyph: "✺" },
  heavyblow: { title: "崩落", glyph: "✷" },
  bandage: { title: "回春", glyph: "✙" },
  battlecry: { title: "鼓舞", glyph: "✪" },
};

const REWARD_POOL = [
  "pommel",
  "quickslash",
  "ironwave",
  "bash",
  "inflame",
  "heavyblow",
  "bandage",
  "battlecry",
];

const SHOP_CARD_PRICE = {
  starter: 45,
  common: 56,
  uncommon: 82,
};

const SHOP_SERVICE_META = {
  heal: { label: "补给包", desc: "恢复 18 点生命", price: 42 },
  focus: { label: "战术研修", desc: "本局战斗起始力量 +1", price: 68 },
  purge: { label: "剪牌服务", desc: "永久删除牌库中的 1 张牌", price: 74 },
};

const ENEMY_LIBRARY = {
  combat: [
    {
      name: "尖牙兽",
      hp: 44,
      intents: [
        { name: "撕咬", effects: [{ op: "attack", target: "player", value: 8 }] },
        { name: "防御姿态", effects: [{ op: "block", target: "self", value: 7 }] },
        {
          name: "狂乱抓挠",
          effects: [{ op: "attack", target: "player", value: 5, hits: 2 }],
        },
      ],
    },
    {
      name: "骸骨卫士",
      hp: 40,
      intents: [
        {
          name: "盾击",
          effects: [
            { op: "attack", target: "player", value: 6 },
            { op: "block", target: "self", value: 6 },
          ],
        },
        {
          name: "骨粉压制",
          effects: [{ op: "status", target: "player", status: "weak", value: 2 }],
        },
        { name: "重砸", effects: [{ op: "attack", target: "player", value: 11 }] },
      ],
    },
    {
      name: "夜行史莱姆",
      hp: 38,
      intents: [
        { name: "酸液喷射", effects: [{ op: "attack", target: "player", value: 7 }] },
        {
          name: "腐蚀黏液",
          effects: [{ op: "status", target: "player", status: "vulnerable", value: 2 }],
        },
        { name: "裹缠", effects: [{ op: "attack", target: "player", value: 9 }] },
      ],
    },
  ],
  elite: [
    {
      name: "深渊执行者",
      hp: 75,
      intents: [
        {
          name: "断头连斩",
          effects: [{ op: "attack", target: "player", value: 9, hits: 2 }],
        },
        {
          name: "战意爆发",
          effects: [
            { op: "strength", target: "self", value: 2 },
            { op: "block", target: "self", value: 8 },
          ],
        },
        {
          name: "压制",
          effects: [{ op: "status", target: "player", status: "weak", value: 2 }],
        },
      ],
    },
    {
      name: "禁术祭司",
      hp: 70,
      intents: [
        {
          name: "邪能冲击",
          effects: [
            { op: "attack", target: "player", value: 14 },
            { op: "status", target: "player", status: "vulnerable", value: 1 },
          ],
        },
        { name: "仪式护佑", effects: [{ op: "block", target: "self", value: 16 }] },
        {
          name: "血祭",
          effects: [
            { op: "strength", target: "self", value: 2 },
            { op: "heal", target: "self", value: 6 },
          ],
        },
      ],
    },
  ],
  boss: [
    {
      name: "塔顶掠魂者",
      hp: 145,
      intents: [
        {
          name: "灵魂重击",
          effects: [{ op: "attack", target: "player", value: 18 }],
        },
        {
          name: "虚空诅咒",
          effects: [
            { op: "status", target: "player", status: "weak", value: 2 },
            { op: "status", target: "player", status: "vulnerable", value: 2 },
          ],
        },
        {
          name: "深渊震荡",
          effects: [
            { op: "attack", target: "player", value: 10, hits: 2 },
            { op: "block", target: "self", value: 12 },
          ],
        },
        {
          name: "噬魂汲取",
          effects: [
            { op: "attack", target: "player", value: 16 },
            { op: "heal", target: "self", value: 10 },
          ],
        },
      ],
      cycle: true,
    },
  ],
};

const ENEMY_AVATAR_THEME = {
  尖牙兽: {
    frame: "#5c2b2e",
    glow: "#ff6f7c",
    base: "#3b2026",
    sigil: "✹",
    eye: "#ffd6b8",
    profile: "beast",
    title: "裂齿伏猎者",
    taunt: "它盯住了你，利爪已压低。",
  },
  骸骨卫士: {
    frame: "#40546e",
    glow: "#9bc7ff",
    base: "#1f2a38",
    sigil: "☠",
    eye: "#d5e6ff",
    profile: "skeleton",
    title: "墓廊守门人",
    taunt: "铠甲摩擦声在通道里回响。",
  },
  夜行史莱姆: {
    frame: "#2e5b4f",
    glow: "#71e7b8",
    base: "#1b3e34",
    sigil: "◍",
    eye: "#cbffe6",
    profile: "slime",
    title: "腐沼潜行体",
    taunt: "黏液正沿着地面悄悄逼近。",
  },
  深渊执行者: {
    frame: "#6a3923",
    glow: "#ffb16c",
    base: "#3e2417",
    sigil: "⚔",
    eye: "#ffe1c6",
    profile: "warlord",
    title: "断首督战官",
    taunt: "他把战斧拖在地上，火星四溅。",
  },
  禁术祭司: {
    frame: "#503771",
    glow: "#d39bff",
    base: "#2f1e47",
    sigil: "✶",
    eye: "#eedcff",
    profile: "priest",
    title: "灰烬祷术师",
    taunt: "低吟咒语的声音钻进你的耳骨。",
  },
  塔顶掠魂者: {
    frame: "#55206d",
    glow: "#ff8ef3",
    base: "#2d1638",
    sigil: "☾",
    eye: "#ffe3ff",
    profile: "reaper",
    title: "塔顶噬魂君",
    taunt: "它展开影翼，整座塔都在发颤。",
  },
  default: {
    frame: "#3f4a63",
    glow: "#8ca6db",
    base: "#1f2738",
    sigil: "✦",
    eye: "#dbe7ff",
    profile: "default",
    title: "未知威胁",
    taunt: "黑暗中有什么盯上了你。",
  },
};

const MAX_HAND_SIZE = 10;

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function sample(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function formatNodeType(type) {
  if (type === "combat") return "普通战";
  if (type === "elite") return "精英战";
  if (type === "rest") return "营火";
  if (type === "shop") return "商店";
  if (type === "boss") return "首领";
  return type;
}

function getNodeBadgeClass(type) {
  if (type === "combat") return "badge-combat";
  if (type === "elite") return "badge-elite";
  if (type === "rest") return "badge-rest";
  if (type === "shop") return "badge-shop";
  if (type === "boss") return "badge-boss";
  return "";
}

function formatCardKind(kind) {
  if (kind === "attack") return "攻击";
  if (kind === "power") return "能力";
  return "技能";
}

function formatCardRarity(rarity) {
  if (rarity === "starter") return "初始牌";
  if (rarity === "uncommon") return "非凡";
  return "普通";
}

function formatEnemyType(type) {
  if (type === "elite") return "精英";
  if (type === "boss") return "首领";
  return "小怪";
}

class AbyssSpireGame {
  constructor() {
    this.cardUid = 1;
    this.$ = {
      introView: document.querySelector("#introView"),
      battleView: document.querySelector("#battleView"),
      mapView: document.querySelector("#mapView"),
      rewardView: document.querySelector("#rewardView"),
      restView: document.querySelector("#restView"),
      shopView: document.querySelector("#shopView"),
      endingView: document.querySelector("#endingView"),
      handView: document.querySelector("#handView"),
      logView: document.querySelector("#logView"),
      deckView: document.querySelector("#deckView"),
      startBtn: document.querySelector("#startBtn"),
      endTurnBtn: document.querySelector("#endTurnBtn"),
      drawBtn: document.querySelector("#drawBtn"),
      discardBtn: document.querySelector("#discardBtn"),
      floorLabel: document.querySelector("#floorLabel"),
      goldLabel: document.querySelector("#goldLabel"),
      energyStat: document.querySelector("#energyStat"),
      enemyIntent: document.querySelector("#enemyIntent"),
      playerPortrait: document.querySelector("#playerPortrait"),
      enemyPortrait: document.querySelector("#enemyPortrait"),
      playerSpriteWrap: document.querySelector("#playerSpriteWrap"),
      enemySpriteWrap: document.querySelector("#enemySpriteWrap"),
      playerDamageFloat: document.querySelector("#playerDamageFloat"),
      enemyDamageFloat: document.querySelector("#enemyDamageFloat"),
      sceneParticles: document.querySelector("#sceneParticles"),
      effectLayer: document.querySelector("#effectLayer"),
      bossIntro: document.querySelector("#bossIntro"),
      moveBanner: document.querySelector("#moveBanner"),
      playerHpFill: document.querySelector("#playerHpFill"),
      enemyHpFill: document.querySelector("#enemyHpFill"),
      playerHpText: document.querySelector("#playerHpText"),
      enemyHpText: document.querySelector("#enemyHpText"),
      enemyNameTag: document.querySelector("#enemyNameTag"),
      enemyLevelTag: document.querySelector("#enemyLevelTag"),
      enemyFlavorTag: document.querySelector("#enemyFlavorTag"),
      playerNameTag: document.querySelector("#playerNameTag"),
      playerLevelTag: document.querySelector("#playerLevelTag"),
      handLimitStat: document.querySelector("#handLimitStat"),
      playerStatusTags: document.querySelector("#playerStatusTags"),
      enemyStatusTags: document.querySelector("#enemyStatusTags"),
    };
    this.initState();
    this.bindEvents();
    this.initSceneParticles();
    this.render();
  }

  initState() {
    this.state = {
      screen: "intro",
      floorIndex: -1,
      route: this.buildRoute(),
      rewardChoices: [],
      shop: {
        inventory: [],
        servicePrices: this.buildShopServicePriceMap(),
        services: { heal: false, focus: false, purge: false },
        purgeMode: false,
      },
      logs: ["欢迎来到深渊尖塔。先打穿九层再说。"],
      gold: 0,
      gameEnded: false,
      player: {
        maxHp: 80,
        hp: 80,
        maxEnergy: 3,
        energy: 3,
        strength: 0,
        bonusStrength: 0,
        block: 0,
        weak: 0,
        vulnerable: 0,
        deck: [
          "strike",
          "strike",
          "strike",
          "strike",
          "strike",
          "defend",
          "defend",
          "defend",
          "defend",
          "bash",
        ],
        drawPile: [],
        discardPile: [],
        hand: [],
      },
      enemy: null,
      turn: "player",
    };
  }

  buildRoute() {
    return [
      { type: "combat" },
      { type: "combat" },
      { type: "rest" },
      { type: "shop" },
      { type: Math.random() < 0.5 ? "combat" : "elite" },
      { type: "elite" },
      { type: "rest" },
      { type: "shop" },
      { type: "boss" },
    ];
  }

  bindEvents() {
    this.$.startBtn.addEventListener("click", () => this.startAdventure());
    this.$.endTurnBtn.addEventListener("click", () => this.endTurn());
  }

  startAdventure() {
    this.state.screen = "map";
    this.state.logs = ["冒险开始。点击进入下一层。"];
    this.state.floorIndex = -1;
    this.state.gameEnded = false;
    this.state.route = this.buildRoute();
    this.state.gold = 0;
    this.state.player.hp = this.state.player.maxHp;
    this.state.player.energy = this.state.player.maxEnergy;
    this.state.player.strength = 0;
    this.state.player.bonusStrength = 0;
    this.state.player.block = 0;
    this.state.player.weak = 0;
    this.state.player.vulnerable = 0;
    this.state.player.drawPile = [];
    this.state.player.discardPile = [];
    this.state.player.hand = [];
    this.state.rewardChoices = [];
    this.state.shop = {
      inventory: [],
      servicePrices: this.buildShopServicePriceMap(),
      services: { heal: false, focus: false, purge: false },
      purgeMode: false,
    };
    this.state.enemy = null;
    this.render();
  }

  startNextNode() {
    if (this.state.gameEnded) return;

    const nextIndex = this.state.floorIndex + 1;
    if (nextIndex >= this.state.route.length) {
      this.finishGame(true, "你征服了尖塔。今天你就是牌运之神。");
      return;
    }

    this.state.floorIndex = nextIndex;
    const node = this.state.route[nextIndex];

    this.log(`进入第 ${nextIndex + 1} 层：${formatNodeType(node.type)}`);

    if (node.type === "rest") {
      this.enterRest();
      return;
    }

    if (node.type === "shop") {
      this.enterShop();
      return;
    }

    this.startCombat(node.type);
  }

  enterRest() {
    this.state.screen = "rest";
    this.render();
  }

  leaveRest() {
    this.state.screen = "map";
    this.render();
  }

  enterShop() {
    const serviceKeys = Object.keys(SHOP_SERVICE_META);
    const forceCardDiscount = Math.random() < 0.5;
    const forcedCardIndex = forceCardDiscount ? randomInt(0, 3) : -1;
    const forcedServiceKey = forceCardDiscount ? "" : sample(serviceKeys);

    this.state.shop = {
      inventory: this.rollShopInventory(forcedCardIndex),
      servicePrices: this.rollShopServicePrices(forcedServiceKey),
      services: { heal: false, focus: false, purge: false },
      purgeMode: false,
    };
    this.state.screen = "shop";
    this.log("你来到补给商店。今日特惠已刷新。", false);
    this.render();
  }

  leaveShop() {
    this.state.shop.purgeMode = false;
    this.state.screen = "map";
    this.render();
  }

  buildShopServicePriceMap() {
    return Object.fromEntries(
      Object.entries(SHOP_SERVICE_META).map(([kind, service]) => [
        kind,
        { basePrice: service.price, price: service.price, discountRate: 0 },
      ])
    );
  }

  rollDiscountedPrice(basePrice, forceDiscount = false) {
    const discountHit = forceDiscount || Math.random() < 0.36;
    if (!discountHit) {
      return { basePrice, price: basePrice, discountRate: 0 };
    }
    const discountRate = randomInt(10, 35);
    const price = Math.max(1, Math.round(basePrice * (100 - discountRate) / 100));
    return { basePrice, price, discountRate };
  }

  rollShopInventory(forcedDiscountIndex = -1) {
    const pool = shuffle([...REWARD_POOL]).slice(0, 4);
    return pool.map((id, index) => {
      const basePrice = SHOP_CARD_PRICE[CARD_LIBRARY[id].rarity] || 58;
      const pricing = this.rollDiscountedPrice(basePrice, index === forcedDiscountIndex);
      return {
        id,
        sold: false,
        ...pricing,
      };
    });
  }

  rollShopServicePrices(forcedDiscountKey = "") {
    return Object.fromEntries(
      Object.entries(SHOP_SERVICE_META).map(([kind, service]) => {
        const pricing = this.rollDiscountedPrice(service.price, kind === forcedDiscountKey);
        return [kind, pricing];
      })
    );
  }

  buyShopCard(index) {
    if (this.state.screen !== "shop") return;
    const offer = this.state.shop.inventory[index];
    if (!offer || offer.sold) return;

    if (this.state.gold < offer.price) {
      this.log(`金币不足，购买 ${CARD_LIBRARY[offer.id].name} 需要 ${offer.price} 金币。`, false);
      return;
    }

    this.state.gold -= offer.price;
    this.state.player.deck.push(offer.id);
    offer.sold = true;
    this.log(`在商店购买了 ${CARD_LIBRARY[offer.id].name}（-${offer.price} 金币）。`);
    this.render();
  }

  buyShopService(kind) {
    if (this.state.screen !== "shop") return;
    const service = SHOP_SERVICE_META[kind];
    if (!service) return;
    if (this.state.shop.services[kind]) return;

    const pricing = this.state.shop.servicePrices[kind] || {
      basePrice: service.price,
      price: service.price,
      discountRate: 0,
    };

    if (this.state.gold < pricing.price) {
      this.log(`金币不足，${service.label} 需要 ${pricing.price} 金币。`, false);
      return;
    }

    if (kind === "heal") {
      if (this.state.player.hp >= this.state.player.maxHp) {
        this.log("当前血量已满，补给包先省着。", false);
        return;
      }
      const before = this.state.player.hp;
      this.state.player.hp = Math.min(this.state.player.maxHp, this.state.player.hp + 18);
      const healed = this.state.player.hp - before;
      this.state.gold -= pricing.price;
      this.state.shop.services.heal = true;
      this.log(`购买补给包，恢复 ${healed} 点生命（-${pricing.price} 金币）。`);
      this.render();
      return;
    }

    if (kind === "focus") {
      this.state.gold -= pricing.price;
      this.state.player.bonusStrength += 1;
      this.state.shop.services.focus = true;
      this.log(`购买战术研修，本局起始力量 +1（-${pricing.price} 金币）。`);
      this.render();
      return;
    }

    if (kind === "purge") {
      this.state.shop.purgeMode = true;
      this.log(`已启用剪牌服务（${pricing.price} 金币），请选择要删除的牌。`, false);
      this.render();
    }
  }

  purgeDeckCard(cardId) {
    if (this.state.screen !== "shop") return;
    if (!this.state.shop.purgeMode || this.state.shop.services.purge) return;

    const service = SHOP_SERVICE_META.purge;
    if (!service) return;
    const pricing = this.state.shop.servicePrices.purge || {
      basePrice: service.price,
      price: service.price,
      discountRate: 0,
    };
    if (this.state.gold < pricing.price) {
      this.log(`金币不足，${service.label} 需要 ${pricing.price} 金币。`, false);
      this.state.shop.purgeMode = false;
      this.render();
      return;
    }

    const idx = this.state.player.deck.findIndex((id) => id === cardId);
    if (idx < 0) {
      this.log("该卡牌已不在牌库中，请重新选择。", false);
      this.render();
      return;
    }

    this.state.player.deck.splice(idx, 1);
    this.state.gold -= pricing.price;
    this.state.shop.services.purge = true;
    this.state.shop.purgeMode = false;
    this.log(`剪牌完成：移除了 ${CARD_LIBRARY[cardId].name}（-${pricing.price} 金币）。`);
    this.render();
  }

  cancelPurgeMode() {
    if (this.state.screen !== "shop") return;
    if (!this.state.shop.purgeMode) return;
    this.state.shop.purgeMode = false;
    this.log("已取消本次剪牌。", false);
    this.render();
  }

  startCombat(type) {
    const template = this.createEnemyTemplate(type);
    const hpBoost = this.state.floorIndex * (type === "boss" ? 4 : type === "elite" ? 3 : 2);

    this.state.enemy = {
      name: template.name,
      maxHp: template.hp + hpBoost,
      hp: template.hp + hpBoost,
      strength: type === "elite" ? 1 : type === "boss" ? 2 : 0,
      block: 0,
      weak: 0,
      vulnerable: 0,
      intents: template.intents,
      cycle: !!template.cycle,
      intentIndex: 0,
      currentIntent: null,
      type,
    };

    const p = this.state.player;
    p.drawPile = shuffle(p.deck.map((id) => this.createCard(id)));
    p.discardPile = [];
    p.hand = [];
    p.energy = p.maxEnergy;
    p.strength = p.bonusStrength;
    p.block = 0;
    p.weak = 0;
    p.vulnerable = 0;

    this.state.screen = "combat";
    this.state.turn = "player";
    this.initSceneParticles();
    this.rollEnemyIntent();
    this.drawCards(5);
    const persona = this.getEnemyPersona(this.state.enemy);
    this.log(`遭遇 ${this.state.enemy.name} · ${persona.title}。`);
    this.log(`${this.state.enemy.name}：${persona.taunt}`, false);
    this.announceMove(`${this.state.enemy.name}（${persona.title}）出现了！`);
    if (type === "boss") {
      this.playBossIntro(this.state.enemy.name);
    }
    this.log("你的回合开始。", false);
    this.render();
  }

  createEnemyTemplate(type) {
    return structuredClone(sample(ENEMY_LIBRARY[type]));
  }

  createCard(cardId) {
    const base = CARD_LIBRARY[cardId];
    return {
      uid: this.cardUid += 1,
      id: base.id,
      name: base.name,
      kind: base.kind,
      cost: base.cost,
      desc: base.desc,
      rarity: base.rarity,
      effects: structuredClone(base.effects),
    };
  }

  rollEnemyIntent() {
    const enemy = this.state.enemy;
    if (!enemy) return;

    if (enemy.cycle) {
      enemy.currentIntent = structuredClone(enemy.intents[enemy.intentIndex % enemy.intents.length]);
      enemy.intentIndex += 1;
      return;
    }

    enemy.currentIntent = structuredClone(sample(enemy.intents));
  }

  drawCards(count) {
    const p = this.state.player;
    for (let i = 0; i < count; i += 1) {
      if (p.hand.length >= MAX_HAND_SIZE) {
        this.log("手牌已满，抽到的牌被弃置。", false);
        if (p.drawPile.length === 0 && p.discardPile.length > 0) {
          p.drawPile = shuffle([...p.discardPile]);
          p.discardPile = [];
        }
        if (p.drawPile.length > 0) {
          p.discardPile.push(p.drawPile.pop());
        }
        continue;
      }

      if (p.drawPile.length === 0) {
        if (p.discardPile.length === 0) break;
        p.drawPile = shuffle([...p.discardPile]);
        p.discardPile = [];
        this.log("弃牌堆已洗回抽牌堆。", false);
      }

      p.hand.push(p.drawPile.pop());
    }
  }

  playCard(cardUid) {
    if (this.state.screen !== "combat" || this.state.turn !== "player") return;
    const p = this.state.player;
    const idx = p.hand.findIndex((c) => c.uid === cardUid);
    if (idx < 0) return;

    const card = p.hand[idx];
    if (p.energy < card.cost) {
      this.log(`能量不足，无法打出 ${card.name}。`, false);
      this.render();
      return;
    }

    p.energy -= card.cost;
    this.log(`打出：${card.name}`);
    this.announceMove(`你发动了 ${card.name}`);
    if (card.kind === "attack") {
      this.triggerCombatEffect("cast-attack", "enemy");
    } else {
      this.triggerCombatEffect("cast-skill", "player");
    }

    for (const effect of card.effects) {
      this.resolveEffect(effect, "player", card.name);
      if (!this.state.enemy || this.state.enemy.hp <= 0) break;
    }

    p.hand.splice(idx, 1);
    p.discardPile.push(card);

    if (this.state.enemy && this.state.enemy.hp <= 0) {
      this.handleCombatVictory();
      return;
    }

    this.render();
  }

  resolveEffect(effect, sourceType, sourceName = "") {
    const isPlayerSource = sourceType === "player";
    const source = isPlayerSource ? this.state.player : this.state.enemy;
    const target = this.resolveTarget(effect.target, sourceType);

    if (!source) return;

    if (effect.op === "attack") {
      if (!target) return;
      const hits = effect.hits || 1;
      const sourceSide = isPlayerSource ? "player" : "enemy";
      const targetSide = target === this.state.player ? "player" : "enemy";

      for (let i = 0; i < hits; i += 1) {
        if (!target || target.hp <= 0) break;
        this.triggerFighterAnimation(sourceSide, "anim-attack");
        this.triggerCombatEffect("slash", targetSide);
        const damage = this.calculateDamage(effect.value, source, target);
        const { dealt, blocked } = this.takeDamage(target, damage);

        if (blocked > 0) {
          this.triggerFighterAnimation(targetSide, "anim-block");
          this.showDamageFloat(targetSide, `挡 ${blocked}`, "block");
        }
        if (dealt > 0) {
          this.triggerFighterAnimation(targetSide, "anim-hit");
          this.showDamageFloat(targetSide, `-${dealt}`, "damage");
        }

        const hitText = hits > 1 ? `（第 ${i + 1} 击）` : "";
        this.log(`${sourceName || "攻击"}${hitText} 造成 ${dealt} 点伤害${blocked > 0 ? `（被格挡 ${blocked}）` : ""}。`, false);
      }
      return;
    }

    if (effect.op === "block") {
      if (!target) return;
      target.block += effect.value;
      const targetSide = target === this.state.player ? "player" : "enemy";
      this.triggerFighterAnimation(targetSide, "anim-block");
      this.triggerCombatEffect("shield", targetSide);
      this.showDamageFloat(targetSide, `+${effect.value} 护`, "block");
      this.log(`${isPlayerSource ? "你" : this.state.enemy.name} 获得 ${effect.value} 点格挡。`, false);
      return;
    }

    if (effect.op === "draw") {
      this.drawCards(effect.value);
      this.triggerCombatEffect("sigil", isPlayerSource ? "player" : "enemy");
      this.log(`抽 ${effect.value} 张牌。`, false);
      return;
    }

    if (effect.op === "status") {
      if (!target) return;
      target[effect.status] += effect.value;
      const targetSide = target === this.state.player ? "player" : "enemy";
      this.triggerCombatEffect("sigil", targetSide);
      const statusName = effect.status === "weak" ? "虚弱" : "易伤";
      const who = target === this.state.player ? "你" : this.state.enemy.name;
      this.log(`${who} 获得 ${effect.value} 层${statusName}。`, false);
      return;
    }

    if (effect.op === "strength") {
      if (!target) return;
      target.strength += effect.value;
      const targetSide = target === this.state.player ? "player" : "enemy";
      this.triggerCombatEffect("buff", targetSide);
      const who = target === this.state.player ? "你" : this.state.enemy.name;
      this.log(`${who} 力量 +${effect.value}。`, false);
      return;
    }

    if (effect.op === "heal") {
      if (!target) return;
      const before = target.hp;
      target.hp = Math.min(target.maxHp, target.hp + effect.value);
      const healDone = target.hp - before;
      const targetSide = target === this.state.player ? "player" : "enemy";
      if (healDone > 0) {
        this.showDamageFloat(targetSide, `+${healDone}`, "heal");
        this.triggerCombatEffect("heal", targetSide);
      }
      this.log(`${target === this.state.player ? "你" : this.state.enemy.name} 恢复 ${healDone} 点生命。`, false);
    }
  }

  resolveTarget(targetFlag, sourceType) {
    if (!targetFlag || targetFlag === "self") {
      return sourceType === "player" ? this.state.player : this.state.enemy;
    }
    if (targetFlag === "enemy") {
      return sourceType === "player" ? this.state.enemy : this.state.player;
    }
    if (targetFlag === "player") return this.state.player;
    return null;
  }

  calculateDamage(base, source, target) {
    let dmg = Math.max(0, base + (source.strength || 0));
    if ((source.weak || 0) > 0) dmg = Math.floor(dmg * 0.75);
    if ((target.vulnerable || 0) > 0) dmg = Math.floor(dmg * 1.5);
    return Math.max(0, dmg);
  }

  takeDamage(target, amount) {
    const blocked = Math.min(target.block, amount);
    target.block -= blocked;
    const dealt = Math.max(0, amount - blocked);
    target.hp = Math.max(0, target.hp - dealt);
    return { dealt, blocked };
  }

  getFighterElement(side) {
    return side === "player" ? this.$.playerSpriteWrap : this.$.enemySpriteWrap;
  }

  getSpriteElement(side) {
    return side === "player" ? this.$.playerPortrait : this.$.enemyPortrait;
  }

  getDamageFloatElement(side) {
    return side === "player" ? this.$.playerDamageFloat : this.$.enemyDamageFloat;
  }

  retriggerClass(el, className) {
    if (!el) return;
    el.classList.remove(className);
    void el.offsetWidth;
    el.classList.add(className);
  }

  triggerFighterAnimation(side, animationClass) {
    this.retriggerClass(this.getFighterElement(side), animationClass);
    this.retriggerClass(this.getSpriteElement(side), animationClass);
  }

  showDamageFloat(side, text, type = "damage") {
    const el = this.getDamageFloatElement(side);
    if (!el) return;

    el.textContent = text;
    el.classList.remove("damage", "block", "heal", "show");
    el.classList.add(type);
    void el.offsetWidth;
    el.classList.add("show");
  }

  announceMove(text) {
    if (!this.$.moveBanner) return;
    this.$.moveBanner.textContent = text;
    this.$.moveBanner.classList.remove("idle");
    this.$.moveBanner.classList.add("active");

    if (this.moveBannerTimer) {
      clearTimeout(this.moveBannerTimer);
    }

    this.moveBannerTimer = setTimeout(() => {
      if (!this.$.moveBanner) return;
      this.$.moveBanner.classList.remove("active");
      this.$.moveBanner.classList.add("idle");
      this.$.moveBanner.textContent = "等待行动…";
    }, 1100);
  }

  initSceneParticles() {
    const container = this.$.sceneParticles;
    if (!container) return;

    const amount = 16;
    container.innerHTML = "";
    for (let i = 0; i < amount; i += 1) {
      const dot = document.createElement("span");
      dot.className = "scene-particle";
      dot.style.setProperty("--x", `${randomInt(2, 96)}%`);
      dot.style.setProperty("--size", `${randomInt(4, 11)}px`);
      dot.style.setProperty("--delay", `${(Math.random() * 3.4).toFixed(2)}s`);
      dot.style.setProperty("--duration", `${(4.8 + Math.random() * 4.2).toFixed(2)}s`);
      dot.style.setProperty("--drift", `${randomInt(-28, 28)}px`);
      dot.style.setProperty("--alpha", `${(0.2 + Math.random() * 0.45).toFixed(2)}`);
      container.appendChild(dot);
    }
  }

  playBossIntro(enemyName) {
    const panel = this.$.bossIntro;
    if (!panel) return;

    panel.innerHTML = `
      <div class="boss-intro-mark">BOSS</div>
      <div class="boss-intro-title">${enemyName}</div>
      <div class="boss-intro-sub">塔顶领域已开启 · 请集中精神</div>
    `;

    panel.classList.remove("active");
    void panel.offsetWidth;
    panel.classList.add("active");

    if (this.bossIntroTimer) clearTimeout(this.bossIntroTimer);
    this.bossIntroTimer = setTimeout(() => {
      panel.classList.remove("active");
    }, 2300);
  }

  renderStatusTags(container, unit) {
    if (!container || !unit) return;

    const tags = [
      {
        key: "block",
        label: "格挡",
        value: unit.block || 0,
        desc: "优先抵消受到的伤害",
      },
      {
        key: "strength",
        label: "力量",
        value: unit.strength || 0,
        desc: "每层让攻击伤害 +1",
      },
      {
        key: "vulnerable",
        label: "易伤",
        value: unit.vulnerable || 0,
        desc: "受到伤害 ×1.5",
      },
      {
        key: "weak",
        label: "虚弱",
        value: unit.weak || 0,
        desc: "造成伤害 ×0.75",
      },
    ].filter((tag) => tag.value > 0);

    if (tags.length === 0) {
      container.innerHTML = '<span class="status-empty">无状态</span>';
      return;
    }

    container.innerHTML = tags
      .map((tag) => `<span class="status-tag ${tag.key}" title="${tag.desc}">${tag.label}<span class="value">${tag.value}</span></span>`)
      .join("");
  }

  renderCardHtml(card, options = {}) {
    const {
      clickable = false,
      locked = false,
      extraClass = "",
      dataAttrKey = "",
      dataAttrValue = "",
      count = null,
    } = options;

    const cardMeta = CARD_FACE_META[card.id] || { title: "秘术", glyph: "✦" };
    const classes = [
      "card",
      "card-face",
      `rarity-${card.rarity || "common"}`,
      `kind-${card.kind || "skill"}`,
      `art-${card.id}`,
    ];

    if (clickable) classes.push("clickable");
    if (locked) classes.push("locked");
    if (extraClass) classes.push(extraClass);

    const dataAttr = dataAttrKey ? ` data-${dataAttrKey}="${dataAttrValue}"` : "";
    const countText = count ? ` x${count}` : "";

    return `
      <article class="${classes.join(" ")}"${dataAttr}>
        <div class="card-head">
          <span class="card-type">${formatCardKind(card.kind)}</span>
          <span class="cost">${card.cost}</span>
        </div>
        <div class="card-art">
          <span class="card-art-glyph">${cardMeta.glyph}</span>
          <span class="card-art-title">${cardMeta.title}</span>
        </div>
        <div class="title">
          <span>${card.name}${countText}</span>
          <span class="rarity-tag">${formatCardRarity(card.rarity)}</span>
        </div>
        <div class="desc">${card.desc}</div>
      </article>
    `;
  }

  updateHpBar(fillEl, textEl, hp, maxHp) {
    if (!fillEl || !textEl || maxHp <= 0) return;
    const ratio = Math.max(0, Math.min(1, hp / maxHp));
    fillEl.style.width = `${Math.round(ratio * 100)}%`;
    fillEl.classList.remove("mid", "low");
    if (ratio <= 0.3) {
      fillEl.classList.add("low");
    } else if (ratio <= 0.6) {
      fillEl.classList.add("mid");
    }
    textEl.textContent = `${hp} / ${maxHp}`;
  }

  updateEnemyPortraitStyle(type) {
    if (!this.$.enemyPortrait) return;
    this.$.enemyPortrait.classList.remove(
      "enemy-portrait-combat",
      "enemy-portrait-elite",
      "enemy-portrait-boss"
    );
    this.$.enemyPortrait.classList.add(`enemy-portrait-${type}`);
  }

  applyBattleSceneTheme(type) {
    const scene = this.$.battleView?.querySelector(".battle-scene");
    if (!scene) return;
    scene.classList.remove("enemy-combat", "enemy-elite", "enemy-boss");
    scene.classList.add(`enemy-${type}`);
  }

  getEnemyAvatarTheme(enemy) {
    if (!enemy) return ENEMY_AVATAR_THEME.default;
    return ENEMY_AVATAR_THEME[enemy.name] || ENEMY_AVATAR_THEME.default;
  }

  getEnemyPersona(enemy) {
    const theme = this.getEnemyAvatarTheme(enemy);
    return {
      title: theme.title || "未知威胁",
      taunt: theme.taunt || "黑暗中有什么盯上了你。",
      profile: theme.profile || "default",
    };
  }

  buildEnemyFeatureSvg(theme) {
    if (theme.profile === "beast") {
      return `
        <path d="M38 42l10-16 7 17" fill="${theme.frame}" />
        <path d="M90 42l-10-16-7 17" fill="${theme.frame}" />
        <path d="M48 66c4 8 10 12 16 12s12-4 16-12" fill="none" stroke="${theme.eye}" stroke-width="3" stroke-linecap="round" />
        <path d="M58 70l-4 7m16-7l4 7" stroke="${theme.eye}" stroke-width="2" stroke-linecap="round" />
      `;
    }

    if (theme.profile === "skeleton") {
      return `
        <path d="M45 64h38" stroke="${theme.eye}" stroke-width="2" />
        <path d="M47 71h34" stroke="${theme.eye}" stroke-width="2" />
        <path d="M52 64v8m8-8v8m8-8v8m8-8v8" stroke="${theme.eye}" stroke-width="1.5" />
        <path d="M46 41c5-7 11-10 18-10s13 3 18 10" fill="none" stroke="${theme.glow}" stroke-width="2.5" stroke-linecap="round" />
      `;
    }

    if (theme.profile === "slime") {
      return `
        <ellipse cx="64" cy="72" rx="18" ry="10" fill="${theme.glow}" opacity="0.35" />
        <path d="M44 46c3-10 9-15 20-15s17 5 20 15" fill="none" stroke="${theme.eye}" stroke-width="2.6" stroke-linecap="round" />
        <circle cx="54" cy="56" r="3" fill="#1a2a22" />
        <circle cx="74" cy="56" r="3" fill="#1a2a22" />
      `;
    }

    if (theme.profile === "warlord") {
      return `
        <path d="M38 41l8-14 8 14" fill="${theme.glow}" opacity="0.82" />
        <path d="M90 41l-8-14-8 14" fill="${theme.glow}" opacity="0.82" />
        <path d="M46 41h36" stroke="${theme.eye}" stroke-width="2" opacity="0.75" />
        <path d="M49 68c5 6 10 9 15 9s10-3 15-9" fill="none" stroke="${theme.eye}" stroke-width="2.8" stroke-linecap="round" />
      `;
    }

    if (theme.profile === "priest") {
      return `
        <path d="M42 44c5-9 12-13 22-13s17 4 22 13" fill="none" stroke="${theme.glow}" stroke-width="3" stroke-linecap="round" />
        <path d="M53 70c4-5 7-7 11-7s7 2 11 7" fill="none" stroke="${theme.eye}" stroke-width="2.4" stroke-linecap="round" />
        <circle cx="64" cy="80" r="7" fill="none" stroke="${theme.glow}" stroke-width="1.6" opacity="0.78" />
      `;
    }

    if (theme.profile === "reaper") {
      return `
        <path d="M36 44c5-12 13-20 28-20" fill="none" stroke="${theme.glow}" stroke-width="3" stroke-linecap="round" />
        <path d="M92 44c-5-12-13-20-28-20" fill="none" stroke="${theme.glow}" stroke-width="3" stroke-linecap="round" />
        <path d="M50 67c4 8 8 11 14 11s10-3 14-11" fill="none" stroke="${theme.eye}" stroke-width="2.6" stroke-linecap="round" />
        <path d="M64 30v10" stroke="${theme.eye}" stroke-width="2" />
      `;
    }

    return `<path d="M44 43c4-8 10-12 20-12s16 4 20 12" fill="none" stroke="${theme.glow}" stroke-width="3" stroke-linecap="round" />`;
  }

  buildEnemyAvatarDataUri(enemy) {
    const theme = this.getEnemyAvatarTheme(enemy);
    const tierMark = enemy?.type === "boss" ? "♛" : enemy?.type === "elite" ? "◆" : "•";

    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128">
      <defs>
        <radialGradient id="halo" cx="50%" cy="30%" r="72%">
          <stop offset="0%" stop-color="${theme.glow}" stop-opacity="0.85" />
          <stop offset="100%" stop-color="${theme.base}" stop-opacity="0" />
        </radialGradient>
        <linearGradient id="mask" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${theme.frame}" />
          <stop offset="100%" stop-color="${theme.base}" />
        </linearGradient>
      </defs>
      <rect width="128" height="128" rx="18" fill="#0e1524" />
      <circle cx="64" cy="54" r="52" fill="url(#halo)" />
      <path d="M24 108c9-23 23-34 40-34s31 11 40 34" fill="${theme.frame}" opacity="0.68" />
      <ellipse cx="64" cy="54" rx="35" ry="33" fill="url(#mask)" stroke="${theme.glow}" stroke-width="2" />
      <circle cx="52" cy="53" r="5" fill="${theme.eye}" />
      <circle cx="76" cy="53" r="5" fill="${theme.eye}" />
      ${this.buildEnemyFeatureSvg(theme)}
      <text x="64" y="90" fill="${theme.glow}" font-size="24" text-anchor="middle" font-family="Arial, PingFang SC, sans-serif">${theme.sigil}</text>
      <text x="64" y="20" fill="${theme.eye}" font-size="13" text-anchor="middle" font-family="Arial, PingFang SC, sans-serif">${tierMark}</text>
    </svg>`;

    return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
  }

  updateEnemyPortrait(enemy) {
    if (!this.$.enemyPortrait) return;
    if (!enemy) {
      this.$.enemyPortrait.src = "./assets/enemy.svg";
      this.$.enemyPortrait.alt = "敌人角色形象";
      return;
    }
    const persona = this.getEnemyPersona(enemy);
    this.$.enemyPortrait.src = this.buildEnemyAvatarDataUri(enemy);
    this.$.enemyPortrait.alt = `${enemy.name}·${persona.title}`;
    this.updateEnemyPortraitStyle(enemy.type);
  }

  updatePlayerPortrait() {
    if (this.$.playerPortrait) {
      this.$.playerPortrait.src = "./assets/hero.svg";
      this.$.playerPortrait.alt = "怪盗旅者立绘";
    }
    if (this.$.playerNameTag) {
      this.$.playerNameTag.textContent = "怪盗旅者";
    }
  }

  updateHandLimit() {
    if (!this.$.handLimitStat) return;
    const handSize = this.state.player.hand.length;
    this.$.handLimitStat.textContent = `${handSize} / ${MAX_HAND_SIZE}`;
    this.$.handLimitStat.classList.toggle("full", handSize >= MAX_HAND_SIZE);
  }

  triggerCombatEffect(type, side = "center") {
    const layer = this.$.effectLayer;
    if (!layer) return;

    const effect = document.createElement("span");
    effect.className = `combat-fx fx-${type} side-${side}`;
    effect.style.setProperty("--y", `${randomInt(26, 74)}%`);
    effect.style.setProperty("--rot", `${randomInt(-30, 30)}deg`);

    if (side === "player") {
      effect.style.setProperty("--x", `${randomInt(18, 36)}%`);
    } else if (side === "enemy") {
      effect.style.setProperty("--x", `${randomInt(64, 82)}%`);
    } else {
      effect.style.setProperty("--x", `${randomInt(44, 56)}%`);
    }

    layer.appendChild(effect);
    setTimeout(() => effect.remove(), 620);
  }

  endTurn() {
    if (this.state.screen !== "combat" || this.state.turn !== "player") return;

    const p = this.state.player;
    p.discardPile.push(...p.hand);
    p.hand = [];

    this.log("你结束了回合。");

    this.state.turn = "enemy";
    this.enemyTurn();

    if (this.state.screen !== "combat") {
      this.render();
      return;
    }

    this.startPlayerTurn();
    this.render();
  }

  startPlayerTurn() {
    const p = this.state.player;
    p.block = 0;
    p.energy = p.maxEnergy;
    if (p.weak > 0) p.weak -= 1;
    if (p.vulnerable > 0) p.vulnerable -= 1;
    this.state.turn = "player";
    this.drawCards(5);
    this.log("你的回合开始。", false);
  }

  enemyTurn() {
    const enemy = this.state.enemy;
    if (!enemy || enemy.hp <= 0) return;

    enemy.block = 0;
    if (enemy.weak > 0) enemy.weak -= 1;
    if (enemy.vulnerable > 0) enemy.vulnerable -= 1;

    const intent = enemy.currentIntent;
    this.log(`${enemy.name} 使用【${intent.name}】。`);
    this.announceMove(`${enemy.name} 使用 ${intent.name}`);

    for (const effect of intent.effects) {
      this.resolveEffect(effect, "enemy", intent.name);
      if (this.state.player.hp <= 0) {
        this.finishGame(false, "你倒在了尖塔深处。下把会更欧。");
        return;
      }
    }

    this.rollEnemyIntent();
  }

  handleCombatVictory() {
    const nodeType = this.state.route[this.state.floorIndex].type;
    const gain = nodeType === "boss" ? 120 : nodeType === "elite" ? randomInt(35, 50) : randomInt(18, 30);
    this.state.gold += gain;

    this.log(`击败 ${this.state.enemy.name}，获得 ${gain} 金币。`);

    if (nodeType === "boss") {
      this.finishGame(true, "你击败了塔顶掠魂者，完成了一次漂亮的网页端爬塔。");
      return;
    }

    this.state.rewardChoices = this.rollRewardChoices();
    this.state.enemy = null;
    this.state.screen = "reward";
    this.render();
  }

  rollRewardChoices() {
    const pool = shuffle([...REWARD_POOL]);
    return pool.slice(0, 3).map((id) => CARD_LIBRARY[id]);
  }

  pickReward(cardId) {
    if (this.state.screen !== "reward") return;
    if (cardId) {
      this.state.player.deck.push(cardId);
      this.log(`获得新卡：${CARD_LIBRARY[cardId].name}`);
    } else {
      this.log("你跳过了奖励。", false);
    }
    this.state.rewardChoices = [];
    this.state.screen = "map";
    this.render();
  }

  restAction(kind) {
    if (this.state.screen !== "rest") return;
    const p = this.state.player;

    if (kind === "heal") {
      const heal = Math.ceil(p.maxHp * 0.3);
      const before = p.hp;
      p.hp = Math.min(p.maxHp, p.hp + heal);
      this.log(`营火休息：恢复 ${p.hp - before} 点生命。`);
    }

    if (kind === "focus") {
      p.bonusStrength += 1;
      this.log("营火冥想：本局战斗起始力量 +1。", false);
    }

    this.leaveRest();
  }

  finishGame(isWin, text) {
    this.state.gameEnded = true;
    this.state.screen = "ending";
    this.state.enemy = null;
    this.state.player.hand = [];
    this.state.player.drawPile = [];
    this.state.player.discardPile = [];

    this.$.endingView.innerHTML = `
      <h2>${isWin ? "冒险成功" : "冒险失败"}</h2>
      <p>${text}</p>
      <p>最终层数：${Math.max(this.state.floorIndex + 1, 0)} / ${this.state.route.length}，金币：${this.state.gold}</p>
      <button id="restartBtn" class="btn primary">重新开始</button>
    `;

    const restartBtn = this.$.endingView.querySelector("#restartBtn");
    restartBtn.addEventListener("click", () => this.startAdventure());

    this.render();
  }

  log(text, withPrefix = true) {
    const prefix = withPrefix ? `[${new Date().toLocaleTimeString("zh-CN", { hour12: false })}] ` : "";
    this.state.logs.unshift(`${prefix}${text}`);
    if (this.state.logs.length > 120) this.state.logs.length = 120;
  }

  render() {
    const floorNow = Math.max(this.state.floorIndex + 1, 0);
    this.$.floorLabel.textContent = `层数：${floorNow} / ${this.state.route.length}`;
    this.$.goldLabel.textContent = `金币：${this.state.gold}`;

    this.updatePlayerPortrait();
    this.updateHandLimit();

    this.renderPanelVisibility();
    this.renderMap();
    this.renderRest();
    this.renderReward();
    this.renderShop();
    this.renderBattle();
    this.renderDeck();
    this.renderLogs();
  }

  renderPanelVisibility() {
    this.$.introView.classList.toggle("hidden", this.state.screen !== "intro");
    this.$.mapView.classList.toggle("hidden", this.state.screen !== "map");
    this.$.battleView.classList.toggle("hidden", this.state.screen !== "combat");
    this.$.rewardView.classList.toggle("hidden", this.state.screen !== "reward");
    this.$.restView.classList.toggle("hidden", this.state.screen !== "rest");
    this.$.shopView.classList.toggle("hidden", this.state.screen !== "shop");
    this.$.endingView.classList.toggle("hidden", this.state.screen !== "ending");
  }

  renderMap() {
    const current = this.state.floorIndex;
    const isMap = this.state.screen === "map";

    const nodesHtml = this.state.route
      .map((node, i) => {
        const classes = ["node"];
        if (i < current) classes.push("done");
        if (i === current + 1 && isMap) classes.push("current");
        if (i === current && !isMap) classes.push("current");

        return `
          <div class="${classes.join(" ")}">
            <strong>第 ${i + 1} 层</strong>
            <span class="badge ${getNodeBadgeClass(node.type)}">${formatNodeType(node.type)}</span>
          </div>
        `;
      })
      .join("");

    const nextBtn = isMap
      ? `<button id="nextNodeBtn" class="btn primary stage-next-btn">${this.state.floorIndex < 0 ? "进入第 1 层" : "进入下一层"}</button>`
      : "";

    this.$.mapView.innerHTML = `
      <h3>冒险路线</h3>
      <p class="stage-subtitle">路线展示仅供参考，推进和选择统一在中间完成（含商店层）。</p>
      <div class="stage-route-grid">${nodesHtml}</div>
      <div class="stage-action">${nextBtn}</div>
    `;

    const nextNodeBtn = this.$.mapView.querySelector("#nextNodeBtn");
    if (nextNodeBtn) {
      nextNodeBtn.addEventListener("click", () => this.startNextNode());
    }
  }

  renderRest() {
    if (this.state.screen !== "rest") {
      this.$.restView.innerHTML = "";
      return;
    }

    this.$.restView.innerHTML = `
      <h3>营火 · 灰烬驿站</h3>
      <div class="rest-hero">
        <div class="rest-logo" aria-hidden="true">
          <span class="rest-ring"></span>
          <span class="rest-flame">✦</span>
          <span class="rest-spark rest-spark-a"></span>
          <span class="rest-spark rest-spark-b"></span>
        </div>
        <div class="rest-copy">
          <p>你在火边短暂停留，热浪裹着铁锈味。今晚要养伤，还是继续磨刀？</p>
        </div>
      </div>
      <div class="rest-actions">
        <button id="restHealBtn" class="btn rest-btn rest-heal">休息 · 恢复 30% 最大生命</button>
        <button id="restFocusBtn" class="btn rest-btn rest-focus">冥想 · 本局战斗起始力量 +1</button>
      </div>
    `;

    this.$.restView.querySelector("#restHealBtn").addEventListener("click", () => this.restAction("heal"));
    this.$.restView.querySelector("#restFocusBtn").addEventListener("click", () => this.restAction("focus"));
  }

  renderReward() {
    if (this.state.screen !== "reward") {
      this.$.rewardView.innerHTML = "";
      return;
    }

    const options = this.state.rewardChoices
      .map((card) =>
        this.renderCardHtml(card, {
          clickable: true,
          extraClass: "reward-card",
          dataAttrKey: "card-id",
          dataAttrValue: card.id,
        })
      )
      .join("");

    this.$.rewardView.innerHTML = `
      <h3>战斗奖励</h3>
      <p>从以下卡牌中选择 1 张加入牌库：</p>
      <div class="reward-options">${options}</div>
      <button id="skipRewardBtn" class="btn">跳过</button>
    `;

    this.$.rewardView.querySelectorAll(".reward-card").forEach((el) => {
      el.addEventListener("click", () => this.pickReward(el.dataset.cardId));
    });

    this.$.rewardView.querySelector("#skipRewardBtn").addEventListener("click", () => this.pickReward(null));
  }

  renderShop() {
    if (this.state.screen !== "shop") {
      this.$.shopView.innerHTML = "";
      return;
    }

    const cardsHtml = this.state.shop.inventory
      .map((offer, index) => {
        const card = CARD_LIBRARY[offer.id];
        const discountChip = offer.discountRate > 0 ? `<span class="discount-chip">-${offer.discountRate}%</span>` : "";
        const priceLabel = offer.discountRate > 0
          ? `<span class="price-now">${offer.price} 金币</span><span class="price-old">${offer.basePrice}</span>`
          : `<span class="price-now">${offer.price} 金币</span>`;
        return `
          <div class="shop-item ${offer.sold ? "sold" : ""}">
            ${discountChip}
            ${this.renderCardHtml(card, { locked: offer.sold, extraClass: "shop-card" })}
            <button class="btn shop-buy-btn" data-shop-card-index="${index}" ${offer.sold ? "disabled" : ""}>
              ${offer.sold ? "已购买" : `购买 · ${priceLabel}`}
            </button>
          </div>
        `;
      })
      .join("");

    const serviceHtml = Object.entries(SHOP_SERVICE_META)
      .map(([kind, service]) => {
        const bought = this.state.shop.services[kind];
        const isPurging = kind === "purge" && this.state.shop.purgeMode && !bought;
        const busyWithPurge = this.state.shop.purgeMode && kind !== "purge";
        const pricing = this.state.shop.servicePrices[kind] || {
          basePrice: service.price,
          price: service.price,
          discountRate: 0,
        };
        const label = bought
          ? "已购买"
          : isPurging
            ? "选择要删除的牌…"
            : pricing.discountRate > 0
              ? `<span class="price-now">${pricing.price} 金币</span><span class="price-old">${pricing.basePrice}</span>`
              : `${pricing.price} 金币`;
        const discountChip = pricing.discountRate > 0 ? `<span class="discount-chip service">-${pricing.discountRate}%</span>` : "";
        return `
          <div class="shop-service ${bought ? "sold" : ""} ${isPurging ? "active" : ""}">
            <div>
              <strong>${service.label}</strong>
              <p>${service.desc}</p>
            </div>
            <div class="shop-service-action">
              ${discountChip}
              <button class="btn" data-shop-service="${kind}" ${bought || busyWithPurge ? "disabled" : ""}>
                ${label}
              </button>
            </div>
          </div>
        `;
      })
      .join("");

    let purgePanel = "";
    if (this.state.shop.purgeMode && !this.state.shop.services.purge) {
      const purgePricing = this.state.shop.servicePrices.purge || {
        basePrice: SHOP_SERVICE_META.purge.price,
        price: SHOP_SERVICE_META.purge.price,
        discountRate: 0,
      };
      const counts = this.state.player.deck.reduce((acc, id) => {
        acc[id] = (acc[id] || 0) + 1;
        return acc;
      }, {});
      const purgeCards = Object.entries(counts)
        .sort((a, b) => CARD_LIBRARY[a[0]].cost - CARD_LIBRARY[b[0]].cost)
        .map(([id, count]) => this.renderCardHtml(CARD_LIBRARY[id], {
          clickable: true,
          extraClass: "purge-card",
          dataAttrKey: "purge-card-id",
          dataAttrValue: id,
          count,
        }))
        .join("");

      purgePanel = `
        <div class="shop-purge-panel">
          <h4>剪牌进行中</h4>
          <p>选择 1 张要永久移除的卡牌（将消耗 <strong>${purgePricing.price}</strong> 金币）。</p>
          <div class="shop-purge-grid">${purgeCards}</div>
          <button id="cancelPurgeBtn" class="btn">取消剪牌</button>
        </div>
      `;
    }

    this.$.shopView.innerHTML = `
      <h3>黑市商店</h3>
      <p>当前金币：<strong>${this.state.gold}</strong>。买完记得继续爬塔。</p>
      <div class="shop-grid">${cardsHtml}</div>
      <h4>服务区</h4>
      <div class="shop-services">${serviceHtml}</div>
      ${purgePanel}
      <button id="leaveShopBtn" class="btn primary">离开商店</button>
    `;

    this.$.shopView.querySelectorAll("[data-shop-card-index]").forEach((el) => {
      el.addEventListener("click", () => this.buyShopCard(Number(el.dataset.shopCardIndex)));
    });

    this.$.shopView.querySelectorAll("[data-shop-service]").forEach((el) => {
      el.addEventListener("click", () => this.buyShopService(el.dataset.shopService));
    });

    this.$.shopView.querySelectorAll("[data-purge-card-id]").forEach((el) => {
      el.addEventListener("click", () => this.purgeDeckCard(el.dataset.purgeCardId));
    });

    const cancelPurgeBtn = this.$.shopView.querySelector("#cancelPurgeBtn");
    if (cancelPurgeBtn) {
      cancelPurgeBtn.addEventListener("click", () => this.cancelPurgeMode());
    }

    this.$.shopView.querySelector("#leaveShopBtn").addEventListener("click", () => this.leaveShop());
  }

  renderBattle() {
    if (this.state.screen !== "combat" || !this.state.enemy) {
      this.$.handView.innerHTML = "";
      if (this.$.moveBanner) {
        this.$.moveBanner.classList.remove("active");
        this.$.moveBanner.classList.add("idle");
        this.$.moveBanner.textContent = "等待行动…";
      }
      this.updateEnemyPortrait(null);
      this.applyBattleSceneTheme("combat");
      if (this.$.effectLayer) this.$.effectLayer.innerHTML = "";
      if (this.$.bossIntro) this.$.bossIntro.classList.remove("active");
      if (this.$.playerStatusTags) this.$.playerStatusTags.innerHTML = "";
      if (this.$.enemyStatusTags) this.$.enemyStatusTags.innerHTML = "";
      if (this.$.enemyFlavorTag) this.$.enemyFlavorTag.textContent = "等待敌人出现";
      return;
    }

    const p = this.state.player;
    const e = this.state.enemy;

    this.$.energyStat.textContent = `能量 ${p.energy}/${p.maxEnergy}`;
    this.renderIntentChip(e.currentIntent, e, p);

    this.renderStatusTags(this.$.playerStatusTags, p);
    this.renderStatusTags(this.$.enemyStatusTags, e);

    const enemyPersona = this.getEnemyPersona(e);
    if (this.$.enemyNameTag) this.$.enemyNameTag.textContent = e.name;
    if (this.$.enemyLevelTag) this.$.enemyLevelTag.textContent = `${formatEnemyType(e.type)} Lv.${this.state.floorIndex + 1}`;
    if (this.$.enemyFlavorTag) this.$.enemyFlavorTag.textContent = enemyPersona.title;
    if (this.$.playerLevelTag) this.$.playerLevelTag.textContent = `Lv.${Math.max(1, Math.floor((this.state.floorIndex + 2) / 2))}`;

    this.updateHpBar(this.$.playerHpFill, this.$.playerHpText, p.hp, p.maxHp);
    this.updateHpBar(this.$.enemyHpFill, this.$.enemyHpText, e.hp, e.maxHp);
    this.applyBattleSceneTheme(e.type);
    this.updateEnemyPortrait(e);

    this.$.drawBtn.textContent = `抽牌堆 ${p.drawPile.length}`;
    this.$.discardBtn.textContent = `弃牌堆 ${p.discardPile.length}`;

    this.$.endTurnBtn.disabled = this.state.turn !== "player";

    this.$.handView.innerHTML = p.hand
      .map((card) => {
        const canPlay = this.state.turn === "player" && p.energy >= card.cost;
        return this.renderCardHtml(card, {
          clickable: canPlay,
          locked: !canPlay,
          dataAttrKey: canPlay ? "card-uid" : "",
          dataAttrValue: card.uid,
        });
      })
      .join("");

    this.$.handView.querySelectorAll("[data-card-uid]").forEach((el) => {
      el.addEventListener("click", () => this.playCard(Number(el.dataset.cardUid)));
    });
  }

  getIntentCompactData(intent, enemy, player) {
    if (!intent || !intent.effects) {
      return { icon: "◎", value: "-", type: "neutral", detail: "等待敌方行动" };
    }

    const attacks = intent.effects.filter((ef) => ef.op === "attack");
    if (attacks.length > 0) {
      const attackTotal = attacks.reduce((sum, ef) => {
        const perHit = this.calculateDamage(ef.value, enemy, player);
        return sum + perHit * (ef.hits || 1);
      }, 0);
      const single = attacks.length === 1 ? attacks[0] : null;
      const value = single && (single.hits || 1) > 1
        ? `${this.calculateDamage(single.value, enemy, player)}×${single.hits}`
        : `${attackTotal}`;
      return {
        icon: "⚔",
        value,
        type: "attack",
        detail: this.describeIntent(intent),
      };
    }

    const blockTotal = intent.effects
      .filter((ef) => ef.op === "block")
      .reduce((sum, ef) => sum + ef.value, 0);
    if (blockTotal > 0) {
      return {
        icon: "🛡",
        value: `${blockTotal}`,
        type: "block",
        detail: this.describeIntent(intent),
      };
    }

    const statusEffect = intent.effects.find((ef) => ef.op === "status");
    if (statusEffect) {
      return {
        icon: statusEffect.status === "weak" ? "⬇" : "◉",
        value: `${statusEffect.value}`,
        type: statusEffect.status,
        detail: this.describeIntent(intent),
      };
    }

    const healTotal = intent.effects
      .filter((ef) => ef.op === "heal")
      .reduce((sum, ef) => sum + ef.value, 0);
    if (healTotal > 0) {
      return {
        icon: "✚",
        value: `${healTotal}`,
        type: "heal",
        detail: this.describeIntent(intent),
      };
    }

    const strengthTotal = intent.effects
      .filter((ef) => ef.op === "strength")
      .reduce((sum, ef) => sum + ef.value, 0);
    if (strengthTotal > 0) {
      return {
        icon: "⬆",
        value: `${strengthTotal}`,
        type: "strength",
        detail: this.describeIntent(intent),
      };
    }

    return { icon: "✦", value: "?", type: "neutral", detail: this.describeIntent(intent) };
  }

  renderIntentChip(intent, enemy, player) {
    if (!this.$.enemyIntent) return;
    const compact = this.getIntentCompactData(intent, enemy, player);
    this.$.enemyIntent.className = `hud-substat intent-mini intent-${compact.type}`;
    this.$.enemyIntent.title = compact.detail;
    this.$.enemyIntent.innerHTML = `<span class="intent-icon">${compact.icon}</span><span class="intent-value">${compact.value}</span>`;
  }

  describeIntent(intent) {
    if (!intent) return "-";

    const parts = intent.effects.map((ef) => {
      if (ef.op === "attack") return `攻击 ${ef.value}${ef.hits ? `x${ef.hits}` : ""}`;
      if (ef.op === "block") return `格挡 ${ef.value}`;
      if (ef.op === "status") return `${ef.status === "weak" ? "虚弱" : "易伤"} ${ef.value}`;
      if (ef.op === "strength") return `力量 +${ef.value}`;
      if (ef.op === "heal") return `恢复 ${ef.value}`;
      return ef.op;
    });

    return `${intent.name}（${parts.join("，")}）`;
  }

  renderDeck() {
    const counts = this.state.player.deck.reduce((acc, id) => {
      acc[id] = (acc[id] || 0) + 1;
      return acc;
    }, {});

    const html = Object.entries(counts)
      .sort((a, b) => CARD_LIBRARY[a[0]].cost - CARD_LIBRARY[b[0]].cost)
      .map(([id, count]) => {
        const card = CARD_LIBRARY[id];
        return this.renderCardHtml(card, { count });
      })
      .join("");

    this.$.deckView.innerHTML = html;
  }

  renderLogs() {
    this.$.logView.innerHTML = this.state.logs.map((item) => `<div class="log-item">${item}</div>`).join("");
  }
}

new AbyssSpireGame();
