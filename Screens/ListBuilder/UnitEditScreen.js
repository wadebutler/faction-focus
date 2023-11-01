import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { useRecoilState } from "recoil";
import UnitStatRow from "../../Component/UnitView/UnitStatRow";
import WargearSelect from "../../Component/UnitEdit/WargearSelect";
import { useNavigation } from "@react-navigation/native";
import Enhancements from "../../Component/UnitEdit/Enhancements";
import LeaderRule from "../../Component/UnitEdit/LeaderRule";
import { unitEditState, listArmyState } from "../../Atoms";
import WarlordCheckbox from "../../Component/UnitEdit/WarlordCheckbox";
import UnitSize from "../../Component/UnitEdit/UnitSize";
import ViewIcon from "../../Component/Icons/ViewIcon";
import Marks from "../../Component/UnitEdit/Marks";
import CSMMark from "../../Component/UnitEdit/CSMMark";

export default function UnitEdit() {
    const [unitEdit, setEditView] = useRecoilState(unitEditState);
    const [list, setList] = useRecoilState(listArmyState);
    const navigation = useNavigation();

    return (
        <ScrollView>
            <TouchableOpacity
                onPress={() => navigation.navigate("ViewUnit")}
                style={styles.button}
            >
                <ViewIcon />
            </TouchableOpacity>

            <UnitStatRow unit={unitEdit.unit} />

            {unitEdit.unit.org !== "Character" ||
            !unitEdit.unit.factionKey.includes(list.name) ? null : (
                <WarlordCheckbox />
            )}

            {unitEdit.unit.modelCount.length === 1 ? null : <UnitSize />}

            {unitEdit.unit.org === "Infantry" ||
            unitEdit.unit.org === "Battleline" ? (
                <LeaderRule />
            ) : null}

            {!unitEdit.unit.allegiance ? null : <Marks />}
            <CSMMark />

            {!unitEdit.unit.ranged ? null : (
                <WargearSelect unit={unitEdit.unit} type={"ranged"} />
            )}

            {!unitEdit.unit.melee ? null : (
                <WargearSelect unit={unitEdit.unit} type={"melee"} />
            )}

            {unitEdit.unit.org === "Character" &&
            unitEdit.unit.keywords.includes("Epic Hero") === false &&
            unitEdit.unit.factionKey.includes(list.name) ? (
                <Enhancements />
            ) : null}
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
