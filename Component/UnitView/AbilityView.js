import { StyleSheet, Text, View } from "react-native";

export default function AbilityView({ ability }) {
    return (
        <View style={styles.container}>
            {!ability.core ? null : (
                <View style={styles.dataContainer}>
                    <Text>Core: </Text>
                    {ability.core.map((item, index) => {
                        return (
                            <Text style={styles.dashText} key={index}>
                                {item}
                            </Text>
                        );
                    })}
                </View>
            )}

            <View style={styles.dataContainer}>
                <Text>Faction Ability: </Text>
                <Text style={styles.dashText}>{ability.faction}</Text>
            </View>

            {!ability.data ? null : (
                <View>
                    <Text style={styles.datasheetText}>
                        Datasheet Abilities:
                    </Text>
                    {ability.data.map((item, index) => {
                        return (
                            <View style={styles.datasheetContainer} key={index}>
                                <Text style={styles.abilityName}>
                                    {item.name}
                                </Text>
                                <Text style={styles.effectText}>
                                    {item.effect}
                                </Text>
                            </View>
                        );
                    })}
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
    },
    dataContainer: {
        padding: 10,
        paddingTop: 0,
        paddingBottom: 15,
        flexDirection: "row",
        marginBottom: 15,

        borderBottomWidth: 1,
        alignItems: "center",
    },
    datasheetContainer: {
        marginBottom: 15,
        paddingHorizontal: 10,
    },
    datasheetText: {
        marginBottom: 15,
        paddingLeft: 10,
    },
    dashText: {
        borderWidth: 1,
        borderColor: "#000",
        borderStyle: "dashed",
        borderRadius: 4,
        paddingTop: 2,
        paddingBottom: 1,
        paddingHorizontal: 4,
    },
    abilityName: {
        borderWidth: 1,
        borderColor: "#fff",
        color: "#fff",
        backgroundColor: "#000",
        borderStyle: "dashed",
        textAlign: "center",
        borderRadius: 4,
        paddingTop: 4,
        paddingBottom: 3,
    },
    effectText: {
        paddingHorizontal: 10,
        paddingTop: 10,
    },
});
