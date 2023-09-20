import { atom } from "recoil";

export const armyBuilderState = atom({
    key: "armyBuilderState",
    default: {},
});

export const listArmyState = atom({
    key: "listArmyState",
    default: null,
});

export const orgIdState = atom({
    key: "orgIdState",
    default: "",
});

export const unitViewState = atom({
    key: "unitViewState",
    default: "",
});
