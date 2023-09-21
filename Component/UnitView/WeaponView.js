import { StyleSheet, Text, View } from "react-native";

export default function WeaponView({ weapon, type }) {
    return (
        <View style={styles.container}>
            {type === "r" ? <Text style={styles.typeText}>Ranged</Text> : null}
            {type === "m" ? <Text style={styles.typeText}>Melee</Text> : null}
            {weapon.map((item) => {
                if (item.active) {
                    return (
                        <View style={styles.wpnContainer}>
                            <Text style={{ paddingTop: 5 }}>{item.name}</Text>

                            <View style={styles.statRow}>
                                <View style={styles.statContainer}>
                                    <Text>Range</Text>
                                    {item.range === "m" ? (
                                        <Text>Melee</Text>
                                    ) : (
                                        <Text>{item.range}"</Text>
                                    )}
                                </View>
                                <View style={styles.statContainer}>
                                    <Text>A</Text>
                                    <Text>{item.data.a}</Text>
                                </View>
                                {!item.data.bs ? null : (
                                    <View style={styles.statContainer}>
                                        <Text>BS</Text>
                                        <Text>{item.data.bs}</Text>
                                    </View>
                                )}
                                {!item.data.ws ? null : (
                                    <View style={styles.statContainer}>
                                        <Text>WS</Text>
                                        <Text>{item.data.ws}</Text>
                                    </View>
                                )}
                                <View style={styles.statContainer}>
                                    <Text>S</Text>
                                    <Text>{item.data.s}</Text>
                                </View>
                                <View style={styles.statContainer}>
                                    <Text>AP</Text>
                                    <Text>{item.data.ap}</Text>
                                </View>
                                <View style={styles.statContainer}>
                                    <Text>D</Text>
                                    <Text>{item.data.d}</Text>
                                </View>
                            </View>

                            {!item.data.keywords ? null : (
                                <View style={styles.keywordContainer}>
                                    <Text style={{ fontSize: 12 }}>
                                        Keywords:{" "}
                                    </Text>
                                    {item.data.keywords.map((word, index) => {
                                        return (
                                            <Text style={styles.keyText}>
                                                {word}
                                            </Text>
                                        );
                                    })}
                                </View>
                            )}
                        </View>
                    );
                }
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    typeText: {
        backgroundColor: "orange",
        padding: 10,
    },
    wpnContainer: {
        paddingHorizontal: 10,
        paddingBottom: 10,
        borderBottomWidth: 1,
    },
    statRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 10,
    },
    statContainer: {
        alignItems: "center",
    },
    keywordContainer: {
        flexDirection: "row",
        paddingTop: 5,
        alignItems: "center",
        flexWrap: "wrap",
    },
    keyText: {
        fontSize: 12,
        borderWidth: 1,
        borderColor: "#000",
        borderStyle: "dashed",
        borderRadius: 4,
        paddingTop: 2,
        paddingBottom: 1,
        paddingHorizontal: 4,
        marginLeft: 4,
        marginBottom: 4,
    },
});
