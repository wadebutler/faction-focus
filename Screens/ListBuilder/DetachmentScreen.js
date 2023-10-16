import { StyleSheet, View, ScrollView } from "react-native";
import { useRecoilState } from "recoil";
import { ruleState } from "../../Atoms";
import FFText from "../../Component/Global/FFText";
import GoBack from "../../Component/Global/GoBack";

export default function Detachment() {
    const [rule, setRule] = useRecoilState(ruleState);

    return (
        <ScrollView>
            <GoBack />

            <FFText style={styles.title}>{rule?.name}</FFText>

            {!rule?.select ? null : (
                <View style={styles.container}>
                    <FFText style={styles.marginBig}>
                        {rule?.select.rule}
                    </FFText>

                    {rule?.select.options.map((item, index) => {
                        return (
                            <View style={styles.marginSmall} key={index}>
                                <FFText>{item.title}</FFText>
                                <FFText>{item.effect}</FFText>
                            </View>
                        );
                    })}
                </View>
            )}

            {!rule?.stratagems ? null : (
                <View style={styles.container}>
                    <FFText style={styles.title}>Stratagems</FFText>

                    {rule?.stratagems.map((item, index) => {
                        return (
                            <View style={styles.stratContainer} key={index}>
                                <FFText style={styles.stratTitle}>
                                    {item.cost}cp - {item.name} - {item.type}
                                </FFText>

                                <FFText style={styles.stratText}>
                                    <FFText style={{ fontWeight: "bold" }}>
                                        WHEN:
                                    </FFText>{" "}
                                    {item.when}
                                </FFText>
                                <FFText style={styles.stratText}>
                                    <FFText style={{ fontWeight: "bold" }}>
                                        TARGET:
                                    </FFText>{" "}
                                    {item.target}
                                </FFText>
                                <FFText style={styles.stratText}>
                                    <FFText style={{ fontWeight: "bold" }}>
                                        EFFECT:
                                    </FFText>{" "}
                                    {item.effect}
                                </FFText>
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
        marginVertical: 10,
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
