import { ScrollView, StyleSheet, View } from "react-native";
import { useRecoilState } from "recoil";
import { ruleState, listArmyState } from "../../Atoms";
import FFText from "../../Component/Global/FFText";
import GoBack from "../../Component/Global/GoBack";
import DG from "../../Component/ArmyRules/DG";
import CK from "../../Component/ArmyRules/CK";
import CD from "../../Component/ArmyRules/CD";
import TS from "../../Component/ArmyRules/TS";
import WE from "../../Component/ArmyRules/WE";
import CSM from "../../Component/ArmyRules/CSM";
import LV from "../../Component/ArmyRules/LV";
import DE from "../../Component/ArmyRules/DE";
import TE from "../../Component/ArmyRules/TE";
import Ork from "../../Component/ArmyRules/Ork";

export default function ArmyRule() {
    const [rule, setRule] = useRecoilState(ruleState);
    const [list, setList] = useRecoilState(listArmyState);

    return (
        <ScrollView>
            <GoBack />

            {list.id === "CSM" ? null : (
                <View>
                    <FFText style={styles.title}>{rule?.name}</FFText>
                    <FFText style={styles.marginBig}>{rule?.effect}</FFText>
                </View>
            )}

            {list.id !== "DG" ? null : <DG rule={rule.range} />}
            {list.id !== "CK" ? null : (
                <CK rule={rule.range} walker={rule.walker} />
            )}
            {list.id !== "CD" ? null : <CD rule={rule} />}
            {list.id !== "TS" ? null : <TS rule={rule.spells} />}
            {list.id !== "WE" ? null : <WE rule={rule.rolls} />}
            {list.id !== "CSM" ? null : <CSM rule={rule} />}
            {list.id !== "LV" ? null : <LV rule={rule} />}
            {list.id !== "DE" ? null : <DE rule={rule} />}
            {list.id !== "TE" ? null : <TE rule={rule} />}
            {list.id !== "O" ? null : <Ork rule={rule} />}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    title: {
        fontSize: 20,
        textAlign: "center",
        marginBottom: 10,
        paddingTop: 10,
    },
    marginBig: {
        marginBottom: 30,
        paddingHorizontal: 10,
    },
    marginSmall: {
        marginBottom: 20,
    },
    stratContainer: {
        marginBottom: 30,
        borderWidth: 1,
        borderRadius: 4,
    },
    stratTitle: {
        textTransform: "uppercase",
        fontWeight: "bold",
        backgroundColor: "#000",
        color: "#fff",
        padding: 5,
    },
    stratText: {
        margin: 10,
    },
});
