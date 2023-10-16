import { StyleSheet, View, ScrollView } from "react-native";
import { useRecoilState } from "recoil";
import { ruleState } from "../../Atoms";
import FFText from "../../Component/Global/FFText";
import GoBack from "../../Component/Global/GoBack";

export default function Stratagems() {
    const [rule, setRule] = useRecoilState(ruleState);

    return (
        <ScrollView style={{ padding: 10 }}>
            <GoBack />

            <View style={{ marginTop: 50 }}>
                {rule?.map((item, index) => {
                    return (
                        <View style={styles.stratContainer} key={index}>
                            <FFText style={styles.stratTitle}>
                                {item.cost}cp - {item.name} - {item.type}
                            </FFText>

                            {!item.when ? null : (
                                <FFText style={styles.stratText}>
                                    <FFText style={{ fontWeight: "bold" }}>
                                        WHEN:
                                    </FFText>{" "}
                                    {item.when}
                                </FFText>
                            )}

                            {!item.target ? null : (
                                <FFText style={styles.stratText}>
                                    <FFText style={{ fontWeight: "bold" }}>
                                        TARGET:
                                    </FFText>{" "}
                                    {item.target}
                                </FFText>
                            )}

                            {!item.effect ? null : (
                                <FFText style={styles.stratText}>
                                    <FFText style={{ fontWeight: "bold" }}>
                                        EFFECT:
                                    </FFText>{" "}
                                    {item.effect}
                                </FFText>
                            )}

                            {!item.restrictions ? null : (
                                <FFText style={styles.stratText}>
                                    <FFText style={{ fontWeight: "bold" }}>
                                        RESTRICTION:
                                    </FFText>{" "}
                                    {item.restrictions}
                                </FFText>
                            )}
                        </View>
                    );
                })}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    stratContainer: {
        marginBottom: 20,
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
