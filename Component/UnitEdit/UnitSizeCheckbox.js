import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { CheckBox } from "@rneui/themed";
import { useRecoilState } from "recoil";
import { listArmyState, unitEditState, unitViewState } from "../../Atoms";
import { SortByName } from "../../Utils/Sort";
import { handleUnitUpload } from "../../Utils/Upload";

export default function UnitSizeCheckbox({ item, keyId }) {
    const [list, setList] = useRecoilState(listArmyState);
    const [unitEdit, setUnitEdit] = useRecoilState(unitEditState);
    const [unitView, setUnitView] = useRecoilState(unitViewState);
    const [checked, setChecked] = useState();

    const handleCheck = () => {
        let tempRoster = [...list.roster];
        let tempUnit = {
            unit: {
                ...unitEdit.unit,
                modelCountIndex: keyId,
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
