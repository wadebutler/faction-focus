import { StyleSheet, Text, View } from "react-native";

export default function UnitStatRow({ unit, name }) {
    const data = unit.data;

    return (
        <View style={styles.container}>
            <Text style={styles.unitNameText}>{name}</Text>

            <View style={styles.statRow}>
                <View style={styles.statContainer}>
                    <Text style={styles.text}>M</Text>
                    <Text style={styles.text}>{data.movement}</Text>
                </View>
                <View style={styles.statContainer}>
                    <Text style={styles.text}>T</Text>
                    <Text style={styles.text}>{data.toughness}</Text>
                </View>
                <View style={styles.statContainer}>
                    <Text style={styles.text}>SV</Text>
                    <Text style={styles.text}>{data.save}+</Text>
                </View>
                {!data.invulnerable ? null : (
                    <View style={styles.statContainer}>
                        <Text
                            style={[
                                styles.text,
                                { textTransform: "uppercase" },
                            ]}
                        >
                            Invln
                        </Text>
                        <Text style={styles.text}>{data.invulnerable}+</Text>
                    </View>
                )}
                <View style={styles.statContainer}>
                    <Text style={styles.text}>W</Text>
                    <Text style={styles.text}>{data.wounds}</Text>
                </View>
                <View style={styles.statContainer}>
                    <Text style={styles.text}>LD</Text>
                    <Text style={styles.text}>{data.leadership}</Text>
                </View>
                <View style={styles.statContainer}>
                    <Text style={styles.text}>OC</Text>
                    <Text style={styles.text}>{data.oc}</Text>
                </View>
            </View>

            <View style={styles.keywordContainer}>
                <Text style={{ fontSize: 12 }}>Keywords: </Text>
                {unit.keywords.map((word, index) => {
                    return <Text style={styles.keyText}>{word}</Text>;
                })}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        alignItems: "center",
    },
    unitNameText: {
        fontSize: 20,
    },
    statRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
        width: "100%",
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: "orange",
    },
    statContainer: {
        alignItems: "center",
    },
    text: {
        fontSize: 20,
    },
    invulContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-around",
        paddingBottom: 5,
        paddingTop: 5,
    },
    keywordContainer: {
        flexDirection: "row",
        paddingTop: 5,
        paddingBottom: 5,
        alignItems: "center",
        flexWrap: "wrap",
        marginLeft: 10,
    },
    keyText: {
        fontSize: 12,
        borderWidth: 1,
        borderColor: "#000",
        borderStyle: "dashed",
        borderRadius: 4,
        paddingTop: 2,
        paddingBottom: 1,
        paddingLeft: 4,
        paddingRight: 4,
        marginLeft: 4,
        marginBottom: 4,
    },
});
