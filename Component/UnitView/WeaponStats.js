import { StyleSheet, View } from "react-native";
import FFText from "../Global/FFText";

export default function WeaponStats({ weapon, type }) {
    return (
        <View>
            {type !== "r" ? null : weapon.every(
                  (item) => item.active === false
              ) ? null : (
                <FFText style={styles.typeText}>Ranged</FFText>
            )}

            {type !== "m" ? null : weapon.every(
                  (item) => item.active === false
              ) ? null : (
                <FFText style={styles.typeText}>Melee</FFText>
            )}
            {weapon.map((item, index) => {
                if (item.active) {
                    return (
                        <View style={styles.wpnContainer} key={index}>
                            <FFText style={styles.nameText}>{item.name}</FFText>

                            <View style={styles.statRow}>
                                <View style={styles.statContainer}>
                                    <FFText style={styles.text}>Range</FFText>
                                    {item.range === "m" ? (
                                        <FFText style={styles.text}>
                                            Melee
                                        </FFText>
                                    ) : (
                                        <FFText style={styles.text}>
                                            {item.range}"
                                        </FFText>
                                    )}
                                </View>

                                <View style={styles.statContainer}>
                                    <FFText style={styles.text}>A</FFText>
                                    <FFText style={styles.text}>
                                        {item.data.a}
                                    </FFText>
                                </View>

                                {!item.data.bs ? null : (
                                    <View style={styles.statContainer}>
                                        <FFText style={styles.text}>BS</FFText>
                                        <FFText style={styles.text}>
                                            {item.data.bs}
                                        </FFText>
                                    </View>
                                )}

                                {!item.data.ws ? null : (
                                    <View style={styles.statContainer}>
                                        <FFText style={styles.text}>WS</FFText>
                                        <FFText style={styles.text}>
                                            {item.data.ws}
                                        </FFText>
                                    </View>
                                )}

                                <View style={styles.statContainer}>
                                    <FFText style={styles.text}>S</FFText>
                                    <FFText style={styles.text}>
                                        {item.data.s}
                                    </FFText>
                                </View>

                                <View style={styles.statContainer}>
                                    <FFText style={styles.text}>AP</FFText>
                                    <FFText style={styles.text}>
                                        {item.data.ap}
                                    </FFText>
                                </View>

                                <View style={styles.statContainer}>
                                    <FFText style={styles.text}>D</FFText>
                                    <FFText style={styles.text}>
                                        {item.data.d}
                                    </FFText>
                                </View>
                            </View>

                            {!item.data.keywords.length ? null : (
                                <View style={styles.keywordContainer}>
                                    <FFText
                                        style={{
                                            fontSize: 12,
                                            marginBottom: 8,
                                        }}
                                    >
                                        Keywords:{" "}
                                    </FFText>
                                    {item.data.keywords.map((word, index) => {
                                        return (
                                            <FFText
                                                key={index}
                                                style={styles.keyText}
                                            >
                                                {word}
                                            </FFText>
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
    nameText: {
        padding: 10,
        backgroundColor: "#000",
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
    },
    typeText: {
        backgroundColor: "orange",
        padding: 10,
        fontSize: 16,
    },
    text: {
        fontWeight: "bold",
        fontSize: 16,
    },
    wpnContainer: {
        borderBottomWidth: 1,
    },
    statRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#cfcfcf",
    },
    statContainer: {
        alignItems: "center",
        margin: 15,
    },
    keywordContainer: {
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap",
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    keyText: {
        fontSize: 12,
        borderWidth: 1,
        borderColor: "#000",
        borderStyle: "dashed",
        borderRadius: 4,
        marginLeft: 4,
        paddingLeft: 4,
        paddingRight: 2,
    },
});
