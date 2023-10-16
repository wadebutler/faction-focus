import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { CheckBox } from "@rneui/themed";
import { useRecoilState } from "recoil";
import { listArmyState, unitEditState, unitViewState } from "../../Atoms";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SortUnits } from "../../Utils/Sort";

export default function UnitSizeCheckbox({ item, keyId }) {
    const [list, setList] = useRecoilState(listArmyState);
    const [unitEdit, setUnitEdit] = useRecoilState(unitEditState);
    const [unitView, setUnitView] = useRecoilState(unitViewState);
    const [checked, setChecked] = useState();

    const handleCheck = async () => {
        const tempId = unitEdit.unitId;
        let tempObj = {
            name: list.name,
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
            name: unitEdit.unit.name,
            org: unitEdit.unit.org,
            modelCountIndex: unitEdit.unit.modelCountIndex,
            points: [...unitEdit.unit.points],
            ranged: unitEdit.unit.ranged ? [...unitEdit.unit.ranged] : null,
        };

        if (!checked) {
            tempUnit.modelCountIndex = keyId;
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
        const sortUnit = SortUnits(tempObj.roster);
        tempObj.roster = sortUnit;
        setList(tempObj);
        setUnitEdit(unit);
        setUnitView(tempUnit);
        setChecked(!checked);
    };

    useEffect(() => {
        if (unitEdit.unit.modelCountIndex === keyId) {
            setChecked(true);
        } else {
            setChecked(false);
        }
    }, [unitEdit]);

    return (
        <CheckBox
            title={item}
            checked={checked}
            checkedColor="#0F0"
            containerStyle={[
                styles.check,
                unitEdit.unit.modelCount.length === keyId + 1
                    ? { ...styles.last }
                    : null,
            ]}
            onPress={() => handleCheck()}
            size={30}
            uncheckedColor="gray"
        />
    );
}

const styles = StyleSheet.create({
    check: {
        width: "95%",
        margin: 0,
        justifyContent: "space-between",
    },
    last: {
        borderBottomRightRadius: 4,
        borderBottomLeftRadius: 4,
    },
});
