import { StyleSheet } from "react-native";
import { CheckBox } from "@rneui/themed";
import { useRecoilState } from "recoil";
import { listArmyState, unitViewState, unitEditState } from "../../Atoms";
import { useEffect, useState } from "react";
import { SortByName } from "../../Utils/Sort";
import { handleUnitUpload } from "../../Utils/Upload";

export default function LeaderCheckbox({ item, id }) {
    const [list, setList] = useRecoilState(listArmyState);
    const [unitEdit, setUnitEdit] = useRecoilState(unitEditState);
    const [unitView, setUnitView] = useRecoilState(unitViewState);
    const [checked, setChecked] = useState(false);

    const handleCheck = () => {
        let removeUnit = [...unitEdit.unit.ability.leader];
        let tempRoster = [...list.roster];
        let tempUnit = {
            unit: {
                ...unitEdit.unit,
                ability: {
                    ...unitEdit.unit.ability,
                    leader: unitEdit.unit.ability.leader.some(
                        (e) => e.id === id
                    )
                        ? handleRemove(removeUnit)
                        : [
                              ...unitEdit.unit.ability.leader,
                              { name: item.name, id: id },
                          ],
                },
            },
            unitId: unitEdit.unitId,
        };

        tempRoster.splice(tempUnit.unitId, 1, tempUnit.unit);

        const sortRoster = SortByName(tempRoster);
        const tempList = { ...list, roster: sortRoster };

        setUnitView(tempUnit.unit);
        setUnitEdit(tempUnit);
        setList(tempList);
        setChecked(!checked);

        handleUnitUpload(tempList);
    };

    const handleRemove = (arr) => {
        return arr.filter((x) => x.id !== id);
    };

    useEffect(() => {
        list.roster.map((unit, index) => {
            if (index === unitEdit.unitId)
                unit?.ability?.leader?.map((ldr) => {
                    if (ldr.id === id) {
                        setChecked(true);
                    }
                });
        });
    }, [list]);

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
