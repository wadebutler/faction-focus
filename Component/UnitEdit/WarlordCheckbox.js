import { StyleSheet } from "react-native";
import { CheckBox } from "@rneui/themed";
import { useRecoilState } from "recoil";
import { listArmyState, unitViewState, unitEditState } from "../../Atoms";
import { useEffect, useState } from "react";
import { SortByName } from "../../Utils/Sort";
import { handleUnitUpload } from "../../Utils/Upload";

export default function WarlordCheckbox() {
    const [list, setList] = useRecoilState(listArmyState);
    const [unitEdit, setUnitEdit] = useRecoilState(unitEditState);
    const [unitView, setUnitView] = useRecoilState(unitViewState);
    const [checked, setChecked] = useState(null);

    const handleCheck = () => {
        let tempRoster = [...list.roster];
        let tempUnit = {
            unit: {
                ...unitEdit.unit,
                warlord: unitEdit.unit.warlord === false ? true : false,
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
        setChecked(unitEdit.unit.warlord);
    }, [list]);

    return (
        <CheckBox
            title={"Warlord"}
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
    check: {
        width: "95%",
        margin: 0,
        marginTop: 10,
        borderRadius: 4,
    },
});
