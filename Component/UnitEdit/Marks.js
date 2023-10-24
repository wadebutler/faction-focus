import { StyleSheet, View, TouchableOpacity } from "react-native";
import { CheckBox } from "@rneui/themed";
import { useRecoilState } from "recoil";
import { listArmyState, unitViewState, unitEditState } from "../../Atoms";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import FFText from "../Global/FFText";
import { SortByName } from "../../Utils/Sort";

export default function Marks() {
    const [list, setList] = useRecoilState(listArmyState);
    const [unitEdit, setUnitEdit] = useRecoilState(unitEditState);
    const [unitView, setUnitView] = useRecoilState(unitViewState);
    const [checked, setChecked] = useState(null);

    const handleCheck = async (num, item) => {
        const tempId = unitEdit.unitId;
        let tempObj = {
            name: list.name,
            allies: list.allies ? [...list.allies] : null,
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
            allegiance: !unitEdit.unit.allegiance
                ? null
                : [...unitEdit.unit.allegiance],
            allegianceKey: !unitEdit.unit.allegianceKey
                ? null
                : unitEdit.unit.allegianceKey,
            data: { ...unitEdit.unit.data },
            factionKey: [...unitEdit.unit.factionKey],
            keywords: [...unitEdit.unit.keywords],
            melee: unitEdit.unit.melee ? [...unitEdit.unit.melee] : null,
            modelCount: [...unitEdit.unit["modelCount"]],
            name: unitEdit.unit.name,
            org: unitEdit.unit.org,
            modelCountIndex: unitEdit.unit.modelCountIndex,
            leader: unitEdit.unit.leader,
            points: [...unitEdit.unit.points],
            ranged: unitEdit.unit.ranged ? [...unitEdit.unit.ranged] : null,
            enhancement: !unitEdit.unit.enhancement
                ? null
                : { ...unitEdit.unit.enhancement },
        };

        if (num === checked) {
            tempUnit.allegianceKey = null;
        } else {
            tempUnit.allegianceKey = num;
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
        const sortArr = SortByName(tempObj.roster);
        tempObj.roster = sortArr;

        setList(tempObj);
        setUnitEdit(unit);
        setUnitView(tempUnit);
        if (num !== checked) {
            setChecked(num);
        }
    };

    useEffect(() => {
        unitEdit.unit.allegianceKey === null
            ? setChecked(null)
            : setChecked(unitEdit.unit.allegianceKey);
    }, [unitEdit]);

    return (
        <View style={{ marginBottom: 20 }}>
            <FFText style={styles.title}>Daemonic Allegiance</FFText>

            <TouchableOpacity
                onPress={() => handleCheck(0, unitEdit.unit.allegiance[0])}
            >
                <CheckBox
                    title={`${unitEdit.unit.allegiance[0].key}`}
                    onPress={() => handleCheck(0, unitEdit.unit.allegiance[0])}
                    checked={checked === 0}
                    checkedColor="#0F0"
                    containerStyle={{ margin: 0, marginBottom: -10 }}
                    size={30}
                    uncheckedColor="gray"
                />

                <FFText style={styles.check}>
                    {unitEdit.unit.allegiance[0].effect}
                </FFText>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => handleCheck(1, unitEdit.unit.allegiance[1])}
            >
                <CheckBox
                    title={`${unitEdit.unit.allegiance[1].key}`}
                    onPress={() => handleCheck(1, unitEdit.unit.allegiance[1])}
                    checked={checked === 1}
                    checkedColor="#0F0"
                    containerStyle={{ margin: 0, marginBottom: -10 }}
                    size={30}
                    uncheckedColor="gray"
                />

                <FFText style={styles.check}>
                    {unitEdit.unit.allegiance[1].effect}
                </FFText>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => handleCheck(2, unitEdit.unit.allegiance[2])}
            >
                <CheckBox
                    title={`${unitEdit.unit.allegiance[2].key}`}
                    onPress={() => handleCheck(2, unitEdit.unit.allegiance[2])}
                    checked={checked === 2}
                    checkedColor="#0F0"
                    containerStyle={{ margin: 0, marginBottom: -10 }}
                    size={30}
                    uncheckedColor="gray"
                />

                <FFText style={styles.check}>
                    {unitEdit.unit.allegiance[2].effect}
                </FFText>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => handleCheck(3, unitEdit.unit.allegiance[3])}
            >
                <CheckBox
                    title={`${unitEdit.unit.allegiance[3].key}`}
                    onPress={() => handleCheck(3, unitEdit.unit.allegiance[3])}
                    checked={checked === 3}
                    checkedColor="#0F0"
                    containerStyle={{ margin: 0, marginBottom: -10 }}
                    size={30}
                    uncheckedColor="gray"
                />

                <FFText style={[styles.check, { paddingBottom: 10 }]}>
                    {unitEdit.unit.allegiance[3].effect}
                </FFText>
            </TouchableOpacity>
        </View>
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
        marginHorizontal: 10,
        backgroundColor: "#fff",
        marginTop: -1,
        paddingHorizontal: 10,
    },
});
