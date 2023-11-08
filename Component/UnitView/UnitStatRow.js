import { StyleSheet, View, FlatList, Dimensions } from "react-native";
import FFText from "../Global/FFText";
import GoBack from "../Global/GoBack";

export default function UnitStatRow({ unit }) {
    return (
        <View style={styles.container}>
            <GoBack />
            <FFText line={1} style={styles.unitNameText}>
                {unit?.name}
            </FFText>

            <FlatList
                scrollEnabled={false}
                data={unit.data}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.statRow}>
                            <View style={styles.container}>
                                <FFText style={styles.text}>M</FFText>
                                <FFText style={styles.textStat}>
                                    {item.movement}
                                </FFText>
                            </View>

                            <View style={styles.container}>
                                <FFText style={styles.text}>T</FFText>
                                <FFText style={styles.textStat}>
                                    {item.toughness}
                                </FFText>
                            </View>

                            <View style={styles.container}>
                                <FFText style={styles.text}>SV</FFText>
                                <FFText style={styles.textStat}>
                                    {item.save}
                                </FFText>
                            </View>

                            {!item.invulnerable ? null : (
                                <View style={styles.container}>
                                    <FFText style={styles.text}>INV</FFText>
                                    <FFText style={styles.textStat}>
                                        {item.invulnerable}
                                    </FFText>
                                </View>
                            )}

                            <View style={styles.container}>
                                <FFText style={styles.text}>W</FFText>
                                <FFText style={styles.textStat}>
                                    {item.wounds}
                                </FFText>
                            </View>

                            <View style={styles.container}>
                                <FFText style={styles.text}>LD</FFText>
                                <FFText style={styles.textStat}>
                                    {item.leadership}
                                </FFText>
                            </View>

                            <View style={styles.container}>
                                <FFText style={styles.text}>OC</FFText>
                                <FFText style={styles.textStat}>
                                    {item.oc}
                                </FFText>
                            </View>
                        </View>
                    );
                }}
                keyExtractor={(item, index) => index}
            />
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
        backgroundColor: "orange",
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
        paddingVertical: 5,
        marginTop: 5,
    },
});
