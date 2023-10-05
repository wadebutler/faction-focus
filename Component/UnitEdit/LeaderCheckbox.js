import { StyleSheet } from "react-native";
import { CheckBox } from "@rneui/themed";
import { useRecoilState } from "recoil";
import { listArmyState, unitViewState, unitEditState } from "../../Atoms";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

export default function LeaderCheckbox({ item }) {
    const [list, setList] = useRecoilState(listArmyState);
    const [unitEdit, setUnitEdit] = useRecoilState(unitEditState);
    const [unitView, setUnitView] = useRecoilState(unitViewState);
    const [checked, setChecked] = useState(false);

    const handleCheck = async () => {
        const tempId = unitEdit.unitId;
        let tempObj = {
            army: list.army,
            allies: [...list.allies],
            detachment: { ...list.detachment },
            id: list.id,
            points: { ...list.points },
            roster: [...list.roster],
            title: list.title,
            rule: list.rule,
            uid: list.uid,
        };
        let tempUnit = {
            ability: { ...unitEdit.unit.ability },
            data: { ...unitEdit.unit.data },
            factionKey: [...unitEdit.unit.factionKey],
            keywords: [...unitEdit.unit.keywords],
            melee: unitEdit.unit.melee ? [...unitEdit.unit.melee] : null,
            modelCount: [...unitEdit.unit["modelCount"]],
            leader: unitEdit.unit.leader ? [...unitEdit.unit.leader] : [],
            name: unitEdit.unit.name,
            org: unitEdit.unit.org,
            modelCountIndex: unitEdit.unit.modelCountIndex,
            points: [...unitEdit.unit.points],
            ranged: unitEdit.unit.ranged ? [...unitEdit.unit.ranged] : null,
        };
        let tempAbility = {
            unit: item.name,
            name: item.ability.leader.name,
            effect: item.ability.leader.effect,
        };

        if (!checked) {
            tempUnit.ability.leader = [...tempUnit.ability.leader, tempAbility];
        } else {
            let ldrArr = [];

            tempUnit.ability.leader.map((char) => {
                if (char.unit !== item.name) {
                    ldrArr.push(char);
                }
            });

            tempUnit.ability.leader = [...ldrArr];
        }

        tempObj.roster.splice(tempId, 1, tempUnit);

        const tempData = await AsyncStorage.getItem("lists");
        const listData = tempData ? await JSON.parse(tempData) : null;
        const tempArr = [];

        listData.map((listItem) => {
            if (listItem.uid !== list.uid) {
                tempArr.push(listItem);
            }
        });

        tempArr.push(tempObj);

        const data = await JSON.stringify(tempArr);
        await AsyncStorage.setItem("lists", data);

        let unit = { unit: tempUnit, unitId: tempId };
        setList(tempObj);
        setUnitView(tempUnit);
        setUnitEdit(unit);
        setChecked(!checked);
    };

    useEffect(() => {
        list.roster.map((unit, index) => {
            if (index === unitEdit.unitId) {
                if (unit?.ability?.leader.some((e) => e?.unit === item.name)) {
                    setChecked(true);
                }
            }
        });
    }, []);

    return (
        <CheckBox
            title={item.name}
            checked={checked}
            checkedColor="#0F0"
            containerStyle={styles.check}
            onPress={() => handleCheck()}
            size={30}
            uncheckedColor="gray"
        />
    );
}

const styles = StyleSheet.create({
    title: {
        backgroundColor: "#000",
        width: "95%",
        marginLeft: 10,
        color: "#fff",
        textAlign: "center",
        paddingVertical: 10,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
    },
    check: {
        width: "95%",
        margin: 0,
        justifyContent: "space-between",
    },
});
