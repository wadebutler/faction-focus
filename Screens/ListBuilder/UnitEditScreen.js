import { ScrollView, StyleSheet, TouchableOpacity, Text } from "react-native";
import { useRecoilState } from "recoil";
import { unitViewState } from "../../Atoms";
import { unitEditState } from "../../Atoms";
import UnitStatRow from "../../Component/UnitView/UnitStatRow";
import WargearSelect from "../../Component/UnitEdit/WargearSelect";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";

export default function UnitEdit() {
    const [unitEdit, setEditView] = useRecoilState(unitEditState);
    const navigation = useNavigation();

    return (
        <ScrollView>
            <TouchableOpacity
                onPress={() => navigation.navigate("ViewUnit")}
                style={styles.button}
            >
                <Text>View</Text>
            </TouchableOpacity>

            <UnitStatRow unit={unitEdit.unit} />
            <WargearSelect unit={unitEdit.unit} type={"ranged"} />
            <WargearSelect unit={unitEdit.unit} type={"melee"} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    button: {
        position: "absolute",
        right: 10,
        top: 15,
    },
});
