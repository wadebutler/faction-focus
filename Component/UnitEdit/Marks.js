import { StyleSheet, View, TouchableOpacity, FlatList } from "react-native";
import { CheckBox } from "@rneui/themed";
import { useRecoilState } from "recoil";
import { listArmyState, unitViewState, unitEditState } from "../../Atoms";
import { useEffect, useState } from "react";
import FFText from "../Global/FFText";
import { SortByName } from "../../Utils/Sort";
import { handleUnitUpload } from "../../Utils/Upload";

export default function Marks() {
    const [list, setList] = useRecoilState(listArmyState);
    const [unitEdit, setUnitEdit] = useRecoilState(unitEditState);
    const [unitView, setUnitView] = useRecoilState(unitViewState);
    const [checked, setChecked] = useState(null);

    const handleCheck = (num) => {
        let tempRoster = [...list.roster];
        let tempUnit = {
            unit: {
                ...unitEdit.unit,
                allegianceKey: num === checked ? null : num,
            },
            unitId: unitEdit.unitId,
        };

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
        unitEdit.unit.allegianceKey === null
            ? setChecked(null)
            : setChecked(unitEdit.unit.allegianceKey);
    }, [unitEdit]);

    const demonMarks = (item, demonIndex) => {
        return (
            <TouchableOpacity onPress={() => handleCheck(demonIndex, item)}>
                <CheckBox
                    title={`${item.title}`}
                    onPress={() => handleCheck(demonIndex, item)}
                    checked={checked === demonIndex}
                    checkedColor="#0F0"
                    containerStyle={{ margin: 0, marginBottom: -10 }}
                    size={30}
                    uncheckedColor="gray"
                />

                <FFText
                    style={[
                        styles.check,
                        unitEdit.unit.allegiance.length !== demonIndex + 1
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
            <FFText style={styles.title}>Daemonic Allegiance</FFText>

            <FlatList
                scrollEnabled={false}
                data={unitEdit.unit.allegiance}
                renderItem={({ item, index }) => demonMarks(item, index)}
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
