import { StyleSheet, Text, View, FlatList } from "react-native";

export default function AbilityView({ ability }) {
    return (
        <View style={styles.container}>
            {!ability.core ? null : (
                <View style={styles.dataContainer}>
                    <Text>Core: </Text>

                    <FlatList
                        data={ability.core}
                        renderItem={({ item }) => (
                            <Text style={styles.dashText}>{item}</Text>
                        )}
                        keyExtractor={(index) => index}
                    />
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

                    <FlatList
                        data={ability.data}
                        renderItem={({ item }) => (
                            <View style={styles.datasheetContainer}>
                                <Text style={styles.abilityName}>
                                    {item.name}
                                </Text>

                                <Text style={styles.effectText}>
                                    {item.effect}
                                </Text>
                            </View>
                        )}
                        keyExtractor={(index) => index}
                    />
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
        color: "#fff",
        backgroundColor: "#000",
        textAlign: "center",
        padding: 4,
        borderTopRightRadius: 4,
        borderTopLeftRadius: 4,
    },
    effectText: {
        padding: 10,
        backgroundColor: "orange",
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
    },
});
