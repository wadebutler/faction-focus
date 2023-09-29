import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { CheckBox } from "@rneui/themed";
import { useRecoilState } from "recoil";
import { listArmyState, unitViewState, unitEditState } from "../../Atoms";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";

export default function Enhancements() {
    const [list, setList] = useRecoilState(listArmyState);
    const [unitEdit, setUnitEdit] = useRecoilState(unitEditState);
    const [unitView, setUnitView] = useRecoilState(unitViewState);
    const [enhancement, setEnhancment] = useState(list.detachment.enhancements);
    const [checked, setChecked] = useState(unitEdit?.unit?.enhancement?.active);

    const handleCheck = async (num, item) => {
        const tempId = unitEdit.unitId;
        let tempObj = {
            army: list.army,
            detachment: { ...list.detachment },
            id: list.id,
            points: { ...list.points },
            roster: [...list.roster],
            title: list.title,
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
            points: unitEdit.unit.points,
            ranged: unitEdit.unit.ranged ? [...unitEdit.unit.ranged] : null,
            enhancement: {
                name: item.name,
                active: num,
                cost: item.cost,
                effect: item.effect,
            },
        };

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
        setUnitEdit(unit);
        setUnitView(tempUnit);
        setChecked(num);
    };

    return (
        <View style={{ marginBottom: 20 }}>
            <Text style={styles.title}>Enhancements</Text>

            <TouchableOpacity onPress={() => handleCheck(0, enhancement[0])}>
                <CheckBox
                    title={`${enhancement[0].name} - ${enhancement[0].cost} points`}
                    onPress={() => handleCheck(0, enhancement[0])}
                    checked={checked === 0}
                    checkedColor="#0F0"
                    containerStyle={{ margin: 0 }}
                    size={30}
                    uncheckedColor="gray"
                />

                <Text style={styles.check}>{enhancement[0].effect}</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handleCheck(1, enhancement[1])}>
                <CheckBox
                    title={`${enhancement[1].name} - ${enhancement[1].cost} points`}
                    onPress={() => handleCheck(1, enhancement[1])}
                    checked={checked === 1}
                    checkedColor="#0F0"
                    containerStyle={{ margin: 0 }}
                    size={30}
                    uncheckedColor="gray"
                />

                <Text style={styles.check}>{enhancement[1].effect}</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handleCheck(2, enhancement[2])}>
                <CheckBox
                    onPress={() => handleCheck(2, enhancement[2])}
                    title={`${enhancement[2].name} - ${enhancement[2].cost} points`}
                    checked={checked === 2}
                    checkedColor="#0F0"
                    containerStyle={{ margin: 0 }}
                    size={30}
                    uncheckedColor="gray"
                />

                <Text style={styles.check}>{enhancement[2].effect}</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handleCheck(3, enhancement[3])}>
                <CheckBox
                    onPress={() => handleCheck(3, enhancement[3])}
                    title={`${enhancement[3].name} - ${enhancement[3].cost} points`}
                    checked={checked === 3}
                    checkedColor="#0F0"
                    containerStyle={{ margin: 0 }}
                    size={30}
                    uncheckedColor="gray"
                />

                <Text style={styles.check}>{enhancement[3].effect}</Text>
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
        paddingBottom: 10,
        paddingHorizontal: 10,
    },
});
