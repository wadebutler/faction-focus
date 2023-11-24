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

            <FFText style={styles.container}>{rule.effect}</FFText>

            {!rule?.restrictions ? null : (
                <View style={styles.sizeContainer}>
                    {rule.restrictions.map((item, index) => {
                        return (
                            <FFText style={styles.sizeItem} key={index}>
                                {item}
                            </FFText>
                        );
                    })}
                </View>
            )}

            {!rule?.size ? null : (
                <View style={styles.sizeContainer}>
                    {rule.size.map((item, index) => {
                        return (
                            <FFText style={styles.sizeItem} key={index}>
                                {item}
                            </FFText>
                        );
                    })}
                </View>
            )}

            {!rule?.select ? null : (
                <View>
                    <FFText style={styles.detachmentRule}>{rule.rule}</FFText>

                    <View style={styles.ruleContainer}>
                        {!rule?.select.rule ? null : (
                            <FFText style={styles.marginBig}>
                                {rule?.select.rule}
                            </FFText>
                        )}

                        {rule?.select.options.map((item, index) => {
                            return (
                                <View style={styles.marginSmall} key={index}>
                                    {!item.title ? null : (
                                        <FFText>{item.title}</FFText>
                                    )}
                                    {!item.effect ? null : (
                                        <FFText>{item.effect}</FFText>
                                    )}
                                </View>
                            );
                        })}

                        {!rule.restrictions ? null : (
                            <View>
                                <FFText
                                    style={{
                                        paddingBottom: 5,
                                        fontWeight: "bold",
                                    }}
                                >
                                    Restrictions
                                </FFText>

                                {rule.restrictions.map((item, index) => {
                                    return (
                                        <FFText
                                            key={index}
                                            style={{ paddingBottom: 10 }}
                                        >
                                            {item}
                                        </FFText>
                                    );
                                })}
                            </View>
                        )}
                    </View>
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
            )}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    ruleContainer: {
        borderWidth: 1,
        marginHorizontal: 10,
        padding: 10,
        borderBottomRightRadius: 4,
        borderBottomLeftRadius: 4,
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
    detachmentRule: {
        marginHorizontal: 10,
        textTransform: "uppercase",
        fontWeight: "bold",
        backgroundColor: "#000",
        color: "#fff",
        padding: 5,
        textAlign: "center",
        borderTopRightRadius: 4,
        borderTopLeftRadius: 4,
    },
    sizeContainer: {
        marginHorizontal: 10,
        marginBottom: 10,
    },
    sizeItem: {
        fontWeight: "bold",
        paddingBottom: 5,
    },
});
