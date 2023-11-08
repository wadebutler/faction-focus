import { useState } from "react";
import { StyleSheet } from "react-native";
import { CheckBox } from "@rneui/themed";
import { useRecoilState } from "recoil";
import { listArmyState, unitViewState, unitEditState } from "../../Atoms";
import { SortByName } from "../../Utils/Sort";
import { handleUnitUpload } from "../../Utils/Upload";

export default function WeaponCheckbox({ keyId, item, disabled, type }) {
    const [checked, setChecked] = useState(item.active);
    const [list, setList] = useRecoilState(listArmyState);
    const [unitEdit, setUnitEdit] = useRecoilState(unitEditState);
    const [unitView, setUnitView] = useRecoilState(unitViewState);

    const handleCheck = () => {
        let tempRoster = [...list.roster];
        let tempUnit = {
            unit: {
                ...unitEdit.unit,
                [type]: [...unitEdit.unit[type]],
            },
            unitId: unitEdit.unitId,
        };
        let tempWpn = {
            active: !item.active,
            data: { ...item.data },
            name: item.name,
            range: item.range,
        };

        tempUnit.unit[type].splice(keyId, 1, tempWpn);
        tempRoster.splice(tempUnit.unitId, 1, tempUnit.unit);

        const sortRoster = SortByName(tempRoster);
        const tempList = { ...list, roster: sortRoster };

        setUnitView(tempUnit.unit);
        setUnitEdit(tempUnit);
        setList(tempList);
        setChecked(!checked);
        handleUnitUpload(tempList);
    };

    return (
        <CheckBox
            title={item.name}
            checked={checked}
            checkedColor="#0F0"
            containerStyle={[
                styles.check,
                disabled === keyId + 1 ? { ...styles.last } : null,
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
