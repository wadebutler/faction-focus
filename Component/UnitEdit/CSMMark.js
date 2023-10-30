import { StyleSheet, View, TouchableOpacity, FlatList } from "react-native";
import { CheckBox } from "@rneui/themed";
import { useRecoilState } from "recoil";
import { listArmyState, unitViewState, unitEditState } from "../../Atoms";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import FFText from "../Global/FFText";
import { SortByName } from "../../Utils/Sort";

export default function CSMMark() {
    const [list, setList] = useRecoilState(listArmyState);
    const [unitEdit, setUnitEdit] = useRecoilState(unitEditState);
    const [unitView, setUnitView] = useRecoilState(unitViewState);
    const [checked, setChecked] = useState(null);

    const handleCheck = async (key, num) => {
        const tempId = unitEdit.unitId;
        let tempObj = {
            name: list.name,
            allies: list.allies ? [...list.allies] : null,
            detachment: { ...list.detachment },
            id: list.id,
            points: { ...list.points },
            roster: [...list.roster],
            title: list.title,
            rule: list.rule.length ? [...list.rule] : list.rule,
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
            leader: unitEdit.unit.leader ? unitEdit.unit.leader : null,
            points: [...unitEdit.unit.points],
            ranged: unitEdit.unit.ranged ? [...unitEdit.unit.ranged] : null,
            enhancement: !unitEdit.unit.enhancement
                ? null
                : { ...unitEdit.unit.enhancement },
        };

        if (unitEdit.unit.allegianceKey === key) {
            tempUnit.allegianceKey = null;
        } else {
            tempUnit.allegianceKey = key;
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
            setChecked(key);
        }
    };

    useEffect(() => {
        unitEdit.unit.allegianceKey === null
            ? setChecked(null)
            : setChecked(unitEdit.unit.allegianceKey);
    }, [checked]);

    if (
        list.id !== "CSM" ||
        unitEdit.unit.keywords.includes("Epic Hero") ||
        !unitEdit.unit.factionKey.includes(list.name)
    ) {
        return null;
    }

    const chaosMarks = (item, chaosIndex) => {
        return (
            <TouchableOpacity
                onPress={() => handleCheck(item.title, chaosIndex)}
            >
                <CheckBox
                    title={`${item.title}`}
                    onPress={() => handleCheck(item.title, chaosIndex)}
                    checked={checked === item.title}
                    checkedColor="#0F0"
                    containerStyle={{ margin: 0, marginBottom: -10 }}
                    size={30}
                    uncheckedColor="gray"
                />

                <FFText
                    style={[
                        styles.check,
                        list.detachment.select.options.length !== chaosIndex + 1
                            ? null
                            : styles.lastItem,
                    ]}
                >
                    {item.effect}
                </FFText>
            </TouchableOpacity>
        );
    };

    return (
        <View style={{ marginTop: 10 }}>
            <FFText style={styles.title}>Mark of Chaos</FFText>

            <FlatList
                scrollEnabled={false}
                data={list.detachment.select.options}
                renderItem={({ item, index }) => chaosMarks(item, index)}
                keyExtractor={(item) => item.title}
            />
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
    lastItem: {
        paddingBottom: 10,
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
    },
});
