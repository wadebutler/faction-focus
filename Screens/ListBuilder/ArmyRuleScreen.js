import { StyleSheet, View, ScrollView } from "react-native";
import { useRecoilState } from "recoil";
import { ruleState, listArmyState } from "../../Atoms";
import FFText from "../../Component/Global/FFText";
import GoBack from "../../Component/Global/GoBack";
import DG from "../../Component/ArmyRules/DG";

export default function ArmyRule() {
    const [rule, setRule] = useRecoilState(ruleState);
    const [list, setList] = useRecoilState(listArmyState);

    return (
        <View style={styles.container}>
            <GoBack />

            <FFText style={styles.title}>{rule?.name}</FFText>
            <FFText style={styles.marginBig}>{rule?.effect}</FFText>

            {list.id !== "DG" ? null : <DG rule={rule.range} />}
        </View>
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
    },
    marginBig: {
        marginBottom: 30,
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
