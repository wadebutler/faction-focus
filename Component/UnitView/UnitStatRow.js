import { StyleSheet, View, Dimensions } from "react-native";
import FFText from "../Global/FFText";
import GoBack from "../Global/GoBack";

export default function UnitStatRow({ unit }) {
    return (
        <View style={styles.container}>
            <GoBack />
            <FFText line={1} style={styles.unitNameText}>
                {unit?.name}
            </FFText>

            {!unit.data ? null : (
                <View style={styles.statRow}>
                    <View style={styles.container}>
                        <FFText style={styles.text}>M</FFText>
                        <FFText style={styles.textStat}>
                            {unit.data.movement}
                        </FFText>
                    </View>

                    <View style={styles.container}>
                        <FFText style={styles.text}>T</FFText>
                        <FFText style={styles.textStat}>
                            {unit.data.toughness}
                        </FFText>
                    </View>

                    <View style={styles.container}>
                        <FFText style={styles.text}>SV</FFText>
                        <FFText style={styles.textStat}>
                            {unit.data.save}
                        </FFText>
                    </View>

                    {!unit.data.invulnerable ? null : (
                        <View style={styles.container}>
                            <FFText style={styles.text}>INV</FFText>
                            <FFText style={styles.textStat}>
                                {unit.data.invulnerable}
                            </FFText>
                        </View>
                    )}

                    <View style={styles.container}>
                        <FFText style={styles.text}>W</FFText>
                        <FFText style={styles.textStat}>
                            {unit.data.wounds}
                        </FFText>
                    </View>

                    <View style={styles.container}>
                        <FFText style={styles.text}>LD</FFText>
                        <FFText style={styles.textStat}>
                            {unit.data.leadership}
                        </FFText>
                    </View>

                    <View style={styles.container}>
                        <FFText style={styles.text}>OC</FFText>
                        <FFText style={styles.textStat}>{unit.data.oc}</FFText>
                    </View>
                </View>
            )}
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
        backgroundColor: "#69a1bf",
        width: Dimensions.get("window").width,
        justifyContent: "space-between",
        padding: 10,
    },
    text: {
        fontSize: 20,
    },
    textStat: {
        fontSize: 20,
        backgroundColor: "#000",
        borderRadius: 4,
        color: "#fff",
        textAlign: "center",
        width: 45,
        padding: 5,
        marginTop: 5,
        flexWrap: "wrap",
    },
});
