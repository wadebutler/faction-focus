import * as Clipboard from "expo-clipboard";

export const handleCopy = async (item) => {
    let title = `${item.title} - ${item.name} ${item.points.name}[${item.points.value}]`;
    let tempCharacter = [];
    let tempBattleline = [];
    let tempInfantry = [];
    let tempBeast = [];
    let tempVehicle = [];
    let tempAlly = [];

    item.roster.map((unit) => {
        let tempMeleeArr = [];
        let tempGunArr = [];
        let tempUnit = `${unit.name} - ${unit.points[unit.modelCountIndex]}`;

        unit?.melee?.map((wpn) => {
            if (wpn.active) {
                tempMeleeArr.push(wpn.name);
            }
        });

        unit?.ranged?.map((wpn) => {
            if (wpn.active) {
                tempGunArr.push(wpn.name);
            }
        });

        if (unit.org === "Character" && unit.factionKey.includes(item.name)) {
            if (tempMeleeArr.length === 0) {
                tempCharacter.push(`
              ${tempUnit}
              ${tempGunArr.toString()}
              ${""}`);
            } else if (tempGunArr.length === 0) {
                tempCharacter.push(`
              ${tempUnit}
              ${tempMeleeArr.toString()}
              ${""}`);
            } else {
                tempCharacter.push(`
              ${tempUnit}
              ${tempGunArr.toString()}
              ${tempMeleeArr.toString()}
              ${""}`);
            }
        } else if (
            unit.org === "Battleline" &&
            unit.factionKey.includes(item.name)
        ) {
            if (tempMeleeArr.length === 0) {
                tempBattleline.push(`
              ${tempUnit}
              ${tempGunArr.toString()}
              ${""}`);
            } else if (tempGunArr.length === 0) {
                tempBattleline.push(`
              ${tempUnit}
              ${tempMeleeArr.toString()}
              ${""}`);
            } else {
                tempBattleline.push(`
              ${tempUnit}
              ${tempGunArr.toString()}
              ${tempMeleeArr.toString()}
              ${""}`);
            }
        } else if (
            unit.org === "Infantry" &&
            unit.factionKey.includes(item.name)
        ) {
            if (tempMeleeArr.length === 0) {
                tempInfantry.push(`
              ${tempUnit}
              ${tempGunArr.toString()}
              ${""}`);
            } else if (tempGunArr.length === 0) {
                tempInfantry.push(`
              ${tempUnit}
              ${tempMeleeArr.toString()}
              ${""}`);
            } else {
                tempInfantry.push(`
              ${tempUnit}
              ${tempGunArr.toString()}
              ${tempMeleeArr.toString()}
              ${""}`);
            }
        } else if (
            unit.org === "Beast" &&
            unit.factionKey.includes(item.name)
        ) {
            if (tempMeleeArr.length === 0) {
                tempBeast.push(`
              ${tempUnit}
              ${tempGunArr.toString()}
              ${""}`);
            } else if (tempGunArr.length === 0) {
                tempBeast.push(`
              ${tempUnit}
              ${tempMeleeArr.toString()}
              ${""}`);
            } else {
                tempBeast.push(`
              ${tempUnit}
              ${tempGunArr.toString()}
              ${tempMeleeArr.toString()}
              ${""}`);
            }
        } else if (
            unit.org === "Vehicle" &&
            unit.factionKey.includes(item.name)
        ) {
            if (tempMeleeArr.length === 0) {
                tempVehicle.push(`${tempUnit}${tempGunArr.toString()}${""}`);
            } else if (tempGunArr.length === 0) {
                tempVehicle.push(`
              ${tempUnit}
              ${tempMeleeArr.toString()}
              ${""}`);
            } else {
                tempVehicle.push(`
              ${tempUnit}
              ${tempGunArr.toString()}
              ${tempMeleeArr.toString()}
              ${""}`);
            }
        } else {
            if (tempMeleeArr.length === 0) {
                tempAlly.push(`
              ${tempUnit}
              ${tempGunArr.toString()}
              ${""}`);
            } else if (tempGunArr.length === 0) {
                tempAlly.push(`
              ${tempUnit}
              ${tempMeleeArr.toString()}
              ${""}`);
            } else {
                tempAlly.push(`
              ${tempUnit}
              ${tempGunArr.toString()}
              ${tempMeleeArr.toString()}
              ${""}`);
            }
        }
    });

    let tempRoster = [
        ...tempCharacter,
        ...tempBattleline,
        ...tempInfantry,
        ...tempBeast,
        ...tempVehicle,
        ...tempAlly,
    ];

    // console.log(`${title}${tempRoster.join("")}`);

    await Clipboard.setStringAsync(`
    ${title}
    ${tempRoster.join("")}
    `);
};
