import { StyleSheet, Text, View } from "react-native";

export default function AbilityView({ ability, org }) {
    return (
        <View>
            {!ability?.core ? null : (
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
                <Text style={styles.dashText}>{ability?.faction}</Text>
            </View>

            {org === "HQ" || org === "Character" ? (
                <View>
                    <Text style={styles.datasheetText}>Leader Abilities:</Text>

                    <View style={styles.datasheetContainer}>
                        <Text style={styles.abilityName}>
                            {ability?.leader.name}
                        </Text>
                        <Text style={styles.effectText}>
                            {ability?.leader.effect}
                        </Text>
                    </View>
                </View>
            ) : ability?.leader.length === 0 ? null : (
                <View>
                    <Text style={styles.datasheetText}>Leader Abilities:</Text>
                    {ability?.leader.map((item, index) => {
                        return (
                            <View key={index} style={styles.datasheetContainer}>
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

            {!ability?.data ? null : (
                <View>
                    <Text style={styles.datasheetText}>
                        Datasheet Abilities:
                    </Text>
                    {ability?.data.map((item, index) => {
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
    dataContainer: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        flexDirection: "row",
        borderBottomWidth: 1,
        alignItems: "center",
    },
    datasheetContainer: {
        marginBottom: 5,
        paddingHorizontal: 10,
    },
    datasheetText: {
        marginBottom: 5,
        paddingLeft: 10,
    },
    dashText: {
        borderWidth: 1,
        borderColor: "#000",
        borderStyle: "dashed",
        borderRadius: 4,
        paddingBottom: 1,
        paddingHorizontal: 4,
        marginRight: 6,
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
