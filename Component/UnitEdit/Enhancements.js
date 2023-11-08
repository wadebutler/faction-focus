import { StyleSheet, View, TouchableOpacity, FlatList } from "react-native";
import { CheckBox } from "@rneui/themed";
import { useRecoilState } from "recoil";
import { listArmyState, unitViewState, unitEditState } from "../../Atoms";
import { useEffect, useState } from "react";
import FFText from "../Global/FFText";
import { SortByName } from "../../Utils/Sort";
import { handleUnitUpload } from "../../Utils/Upload";

export default function Enhancements() {
    const [list, setList] = useRecoilState(listArmyState);
    const [unitEdit, setUnitEdit] = useRecoilState(unitEditState);
    const [unitView, setUnitView] = useRecoilState(unitViewState);
    const [enhancement, setEnhancment] = useState(list.detachment.enhancements);
    const [checked, setChecked] = useState(null);

    const handleCheck = (num, item) => {
        let tempRoster = [...list.roster];
        let tempUnit = {
            unit: {
                ...unitEdit.unit,
                enhancement: {
                    name: item.name,
                    active: num,
                    cost: item.cost,
                    effect: item.effect,
                },
            },
            unitId: unitEdit.unitId,
        };

        if (num === checked) {
            delete tempUnit.unit.enhancement;
        }

        tempRoster.splice(tempUnit.unitId, 1, tempUnit.unit);

        const sortRoster = SortByName(tempRoster);
        const tempList = { ...list, roster: sortRoster };

        setUnitView(tempUnit.unit);
        setUnitEdit(tempUnit);
        setList(tempList);

        if (num !== checked) {
            setChecked(num);
        }

        handleUnitUpload(tempList);
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
