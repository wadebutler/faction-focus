import { ScrollView, StyleSheet, TouchableOpacity, Text } from "react-native";
import { useRecoilState } from "recoil";
import { unitViewState } from "../../Atoms";
import UnitStatRow from "../../Component/UnitView/UnitStatRow";
import WargearSelect from "../../Component/UnitEdit/WargearSelect";
import { useNavigation } from "@react-navigation/native";

export default function UnitEdit() {
    const [unitView, setUnitView] = useRecoilState(unitViewState);
    const navigation = useNavigation();

    return (
        <ScrollView>
            <TouchableOpacity
                onPress={() => navigation.navigate("ViewUnit")}
                style={styles.button}
            >
                <Text>View</Text>
            </TouchableOpacity>

            <UnitStatRow unit={unitView} />
            <WargearSelect type={"r"} />
            <WargearSelect type={"m"} />
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
