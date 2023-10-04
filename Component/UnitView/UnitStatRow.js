import { StyleSheet, Text, View } from "react-native";

export default function UnitStatRow({ unit }) {
    const data = unit?.data;

    console.log("TEST", unit, data);

    return (
        <View style={styles.container}>
            <Text style={styles.unitNameText}>{unit?.name}</Text>

            <View style={styles.statRow}>
                <View style={styles.container}>
                    <Text style={styles.text}>M</Text>
                    <Text style={styles.textStat}>{data?.movement}"</Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.text}>T</Text>
                    <Text style={styles.textStat}>{data?.toughness}</Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.text}>SV</Text>
                    <Text style={styles.textStat}>{data?.save}+</Text>
                </View>
                {!data?.invulnerable ? null : (
                    <View style={styles.container}>
                        <Text style={styles.text}>INV</Text>
                        <Text style={styles.textStat}>
                            {data?.invulnerable}+
                        </Text>
                    </View>
                )}
                <View style={styles.container}>
                    <Text style={styles.text}>W</Text>
                    <Text style={styles.textStat}>{data?.wounds}</Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.text}>LD</Text>
                    <Text style={styles.textStat}>{data?.leadership}+</Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.text}>OC</Text>
                    <Text style={styles.textStat}>{data?.oc}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },
    unitNameText: {
        fontSize: 20,
        paddingVertical: 10,
    },
    statRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        backgroundColor: "orange",
        padding: 15,
    },
    text: {
        fontSize: 20,
    },
    textStat: {
        fontSize: 20,
        backgroundColor: "#000",
        borderRadius: 4,
        color: "#fff",
        paddingVertical: 5,
        paddingHorizontal: 7,
        marginTop: 5,
    },
});
