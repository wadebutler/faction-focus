import { StyleSheet, Text, View, ScrollView } from "react-native";
import { useRecoilState } from "recoil";
import { ruleState } from "../../Atoms";

export default function RuleView() {
    const [rule, setRule] = useRecoilState(ruleState);

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>{rule?.name}</Text>
            <Text style={styles.marginBig}>{rule?.effect}</Text>

            {!rule?.range
                ? null
                : rule?.range.map((item, index) => {
                      return (
                          <View key={index}>
                              <Text>
                                  {Object.keys(item)[0]} ={" "}
                                  {Object.values(item)[0]}
                              </Text>
                              <Text>
                                  {Object.keys(item)[1]} ={" "}
                                  {Object.values(item)[1]}
                              </Text>
                          </View>
                      );
                  })}

            {!rule?.select ? null : (
                <View>
                    <Text style={styles.marginBig}>{rule?.select.rule}</Text>

                    {rule?.select.options.map((item, index) => {
                        return (
                            <View style={styles.marginSmall} key={index}>
                                <Text>{item.title}</Text>
                                <Text>{item.effect}</Text>
                            </View>
                        );
                    })}
                </View>
            )}

            {!rule?.stratagems ? null : (
                <View style={{ marginTop: -20 }}>
                    <Text style={styles.title}>Stratagems</Text>

                    {rule?.stratagems.map((item, index) => {
                        return (
                            <View style={styles.marginBig} key={index}>
                                <Text style={styles.stratTitle}>
                                    {item.cost}cp - {item.name} - {item.type}
                                </Text>

                                <Text style={styles.stratText}>
                                    WHEN: {item.when}
                                </Text>
                                <Text style={styles.stratText}>
                                    TARGET: {item.target}
                                </Text>
                                <Text style={styles.stratText}>
                                    EFFECT: {item.effect}
                                </Text>
                            </View>
                        );
                    })}
                </View>
            )}
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
        marginVertical: 20,
    },
    marginBig: {
        marginBottom: 30,
    },
    marginSmall: {
        marginBottom: 20,
    },
    stratTitle: {
        textTransform: "uppercase",
        marginTop: 5,
        fontWeight: "bold",
    },
    stratText: {
        marginVertical: 5,
    },
});
