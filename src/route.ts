/** Data for the fixed route and its enemy waves. Wave order is significant. */
export type EnemyKind = "drone" | "dart" | "turret" | "lancer";
export type Formation = "line" | "vee" | "column" | "pincer";

export interface Wave {
  at: number;
  kind: EnemyKind;
  count: number;
  formation: Formation;
  x?: number;
  spacing?: number;
}

export interface Sector {
  name: string;
  subtitle: string;
  length: number;
  deadline: number;
  waves: readonly Wave[];
  boss?: boolean;
}

export const SECTORS: readonly Sector[] = [
  {
    name: "Outer Drift",
    subtitle: "Scouts ahead",
    length: 1560,
    deadline: 1800,
    waves: [
      {
        at: 60,
        kind: "drone",
        count: 4,
        formation: "line",
        x: 240,
        spacing: 64,
      },
      {
        at: 360,
        kind: "drone",
        count: 5,
        formation: "vee",
        x: 168,
        spacing: 44,
      },
      {
        at: 660,
        kind: "drone",
        count: 5,
        formation: "vee",
        x: 312,
        spacing: 44,
      },
      {
        at: 960,
        kind: "drone",
        count: 6,
        formation: "line",
        x: 240,
        spacing: 64,
      },
      { at: 1200, kind: "drone", count: 4, formation: "column", x: 120 },
      { at: 1260, kind: "drone", count: 4, formation: "column", x: 360 },
    ],
  },
  {
    name: "Shatter Belt",
    subtitle: "Divers incoming",
    length: 1800,
    deadline: 2040,
    waves: [
      {
        at: 60,
        kind: "drone",
        count: 6,
        formation: "vee",
        x: 240,
        spacing: 44,
      },
      {
        at: 300,
        kind: "dart",
        count: 4,
        formation: "line",
        x: 240,
        spacing: 64,
      },
      { at: 600, kind: "dart", count: 5, formation: "column", x: 144 },
      { at: 720, kind: "dart", count: 5, formation: "column", x: 336 },
      {
        at: 1020,
        kind: "drone",
        count: 7,
        formation: "line",
        x: 240,
        spacing: 64,
      },
      {
        at: 1140,
        kind: "dart",
        count: 5,
        formation: "vee",
        x: 240,
        spacing: 44,
      },
      {
        at: 1440,
        kind: "dart",
        count: 6,
        formation: "line",
        x: 240,
        spacing: 64,
      },
    ],
  },
  {
    name: "Gun Lanes",
    subtitle: "Turrets online",
    length: 1920,
    deadline: 2160,
    waves: [
      {
        at: 60,
        kind: "turret",
        count: 1,
        formation: "line",
        x: 240,
        spacing: 64,
      },
      {
        at: 240,
        kind: "drone",
        count: 6,
        formation: "vee",
        x: 240,
        spacing: 44,
      },
      {
        at: 540,
        kind: "turret",
        count: 2,
        formation: "line",
        x: 240,
        spacing: 64,
      },
      { at: 840, kind: "dart", count: 6, formation: "column", x: 240 },
      {
        at: 1080,
        kind: "turret",
        count: 2,
        formation: "line",
        x: 240,
        spacing: 64,
      },
      {
        at: 1140,
        kind: "drone",
        count: 6,
        formation: "line",
        x: 240,
        spacing: 64,
      },
      {
        at: 1500,
        kind: "turret",
        count: 3,
        formation: "line",
        x: 240,
        spacing: 64,
      },
    ],
  },
  {
    name: "Lancer Gate",
    subtitle: "Crossfire",
    length: 1920,
    deadline: 2160,
    waves: [
      { at: 60, kind: "lancer", count: 4, formation: "pincer" },
      {
        at: 360,
        kind: "dart",
        count: 6,
        formation: "vee",
        x: 240,
        spacing: 44,
      },
      { at: 600, kind: "lancer", count: 6, formation: "pincer" },
      {
        at: 780,
        kind: "turret",
        count: 2,
        formation: "line",
        x: 240,
        spacing: 64,
      },
      { at: 1140, kind: "lancer", count: 6, formation: "pincer" },
      {
        at: 1260,
        kind: "drone",
        count: 8,
        formation: "vee",
        x: 240,
        spacing: 44,
      },
      {
        at: 1560,
        kind: "dart",
        count: 8,
        formation: "line",
        x: 240,
        spacing: 64,
      },
    ],
  },
  {
    name: "Last Approach",
    subtitle: "Everything they have",
    length: 2040,
    deadline: 2280,
    waves: [
      {
        at: 60,
        kind: "turret",
        count: 3,
        formation: "line",
        x: 240,
        spacing: 64,
      },
      { at: 180, kind: "lancer", count: 6, formation: "pincer" },
      { at: 540, kind: "dart", count: 6, formation: "column", x: 120 },
      { at: 540, kind: "dart", count: 6, formation: "column", x: 360 },
      {
        at: 900,
        kind: "drone",
        count: 9,
        formation: "vee",
        x: 240,
        spacing: 44,
      },
      {
        at: 1020,
        kind: "turret",
        count: 2,
        formation: "line",
        x: 240,
        spacing: 64,
      },
      { at: 1320, kind: "lancer", count: 8, formation: "pincer" },
      {
        at: 1560,
        kind: "dart",
        count: 8,
        formation: "vee",
        x: 240,
        spacing: 44,
      },
    ],
  },
  {
    name: "The Warden",
    subtitle: "The Warden approaches",
    length: 0,
    deadline: 0,
    waves: [],
    boss: true,
  },
];
