import { StyleSheet, View, TouchableOpacity, FlatList } from "react-native";
import { CheckBox } from "@rneui/themed";
import { useRecoilState } from "recoil";
import { listArmyState, unitViewState, unitEditState } from "../../Atoms";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import FFText from "../Global/FFText";
import { SortByName } from "../../Utils/Sort";

export default function Enhancements() {
    const [list, setList] = useRecoilState(listArmyState);
    const [unitEdit, setUnitEdit] = useRecoilState(unitEditState);
    const [unitView, setUnitView] = useRecoilState(unitViewState);
    const [enhancement, setEnhancment] = useState(list.detachment.enhancements);
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
            leader: unitEdit.unit.leader,
            points: [...unitEdit.unit.points],
            ranged: unitEdit.unit.ranged ? [...unitEdit.unit.ranged] : null,
            enhancement: {
                name: item.name,
                active: num,
                cost: item.cost,
                effect: item.effect,
            },
        };

        if (num === checked) {
            delete tempUnit.enhancement;
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
        unitEdit?.unit?.enhancement?.active
            ? setChecked(unitEdit.unit.enhancement.active)
            : setChecked(null);
    }, [unitEdit]);

    const enhancementBox = (item, enhanceIndex) => {
        return (
            <TouchableOpacity
                style={{ marginTop: -6 }}
                onPress={() => handleCheck(enhanceIndex, item)}
            >
                <CheckBox
                    title={`${item.name} - ${item.cost} points`}
                    onPress={() => handleCheck(enhanceIndex, item)}
                    checked={checked === enhanceIndex}
                    checkedColor="#0F0"
                    containerStyle={{ marginBottom: 0 }}
                    size={30}
                    uncheckedColor="gray"
                />

                <FFText
                    style={[
                        styles.check,
                        enhanceIndex === enhancement.length
                            ? {
                                  borderBottomLeftRadius: 5,
                                  borderBottomRightRadius: 5,
                              }
                            : null,
                    ]}
                >
                    {item.effect}
                </FFText>
            </TouchableOpacity>
        );
    };

    return (
        <View style={{ marginBottom: 20 }}>
            <FFText style={styles.title}>Enhancements</FFText>

            <FlatList
                scrollEnabled={false}
                data={enhancement}
                renderItem={({ item, index }) =>
                    enhancementBox(item, index + 1)
                }
                keyExtractor={(item) => item.name}
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
        paddingHorizontal: 10,
        paddingBottom: 10,
    },
});
