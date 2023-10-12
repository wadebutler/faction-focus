import { StyleSheet, View, ScrollView } from "react-native";
import { useRecoilState } from "recoil";
import { ruleState, listArmyState } from "../../Atoms";
import FFText from "../../Component/Global/FFText";

export default function ArmyRule() {
    const [rule, setRule] = useRecoilState(ruleState);
    const [list, setList] = useRecoilState(listArmyState);

    const DGRule = () => {
        return !rule?.range
            ? null
            : rule?.range.map((item, index) => {
                  return (
                      <View key={index}>
                          <FFText>
                              {Object.keys(item)[0]} = {Object.values(item)[0]}
                          </FFText>
                          <FFText>
                              {Object.keys(item)[1]} = {Object.values(item)[1]}
                          </FFText>
                      </View>
                  );
              });
    };

    return (
        <View style={styles.container}>
            <FFText style={styles.title}>{rule?.name}</FFText>
            <FFText style={styles.marginBig}>{rule?.effect}</FFText>

            {list.id !== "DG" ? null : DGRule()}
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
        marginVertical: 20,
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
