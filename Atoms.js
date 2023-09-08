import { atom } from "recoil";

export const armyBuilderState = atom({
    key: "armyBuilderState",
    default: {},
});

export const listArmyState = atom({
    key: "listArmyState",
    default: null,
});

export const rosterArmyState = atom({
    key: "rosterArmyState",
    default: null,
});
