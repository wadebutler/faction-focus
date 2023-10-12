import { StyleSheet, View } from "react-native";
import FFText from "../Global/FFText";

export default function UnitStatRow({ unit }) {
    const data = unit?.data;

    return (
        <View style={styles.container}>
            <FFText style={styles.unitNameText}>{unit?.name}</FFText>

            <View style={styles.statRow}>
                <View style={styles.container}>
                    <FFText style={styles.text}>M</FFText>
                    <FFText style={styles.textStat}>{data?.movement}"</FFText>
                </View>

                <View style={styles.container}>
                    <FFText style={styles.text}>T</FFText>
                    <FFText style={styles.textStat}>{data?.toughness}</FFText>
                </View>

                <View style={styles.container}>
                    <FFText style={styles.text}>SV</FFText>
                    <FFText style={styles.textStat}>{data?.save}+</FFText>
                </View>

                {!data?.invulnerable ? null : (
                    <View style={styles.container}>
                        <FFText style={styles.text}>INV</FFText>
                        <FFText style={styles.textStat}>
                            {data?.invulnerable}+
                        </FFText>
                    </View>
                )}

                <View style={styles.container}>
                    <FFText style={styles.text}>W</FFText>
                    <FFText style={styles.textStat}>{data?.wounds}</FFText>
                </View>

                <View style={styles.container}>
                    <FFText style={styles.text}>LD</FFText>
                    <FFText style={styles.textStat}>{data?.leadership}+</FFText>
                </View>

                <View style={styles.container}>
                    <FFText style={styles.text}>OC</FFText>
                    <FFText style={styles.textStat}>{data?.oc}</FFText>
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
        backgroundColor: "orange",
        width: "100%",
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
        width: 45,
        textAlign: "center",
        paddingVertical: 5,
        marginTop: 5,
    },
});
