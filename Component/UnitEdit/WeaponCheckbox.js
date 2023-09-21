import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { CheckBox } from "@rneui/themed";
import { useRecoilState } from "recoil";
import { unitViewState } from "../../Atoms";

export default function WeaponCheckbox({ keyId, item, disabled, last }) {
    const [checked, setChecked] = useState(item.active);

    const handleCheck = () => {
        if (disabled === 1) {
            return;
        } else {
            setChecked(!checked);
        }
    };

    return (
        <CheckBox
            key={keyId}
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
