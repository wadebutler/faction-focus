import { StyleSheet, Text, View } from "react-native";

export default function AbilityView({ ability, org }) {
    console.log(ability);
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
                {ability?.faction.map((item) => (
                    <Text key={item} style={styles.dashText}>
                        {item}
                    </Text>
                ))}
            </View>

            {org === "Character" ? (
                <View>
                    <Text style={styles.datasheetText}>Leader Abilities:</Text>

                    {!ability?.leader ? null : (
                        <View style={styles.datasheetContainer}>
                            <Text style={styles.abilityName}>
                                {ability?.leader.name}
                            </Text>
                            <Text style={styles.effectText}>
                                {ability?.leader.effect}
                            </Text>
                        </View>
                    )}
                </View>
            ) : ability?.leader?.length === 0 ? null : (
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

            {!ability.Primarch ? null : (
                <View style={{ marginTop: 5 }}>
                    <Text style={styles.datasheetText}>
                        {ability.Primarch.title}
                    </Text>
                    <Text style={styles.datasheetText}>
                        {ability.Primarch.effect}
                    </Text>
                    {ability.Primarch.abilities.map((item, index) => {
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

            {!ability.damaged ? null : (
                <View style={styles.damageContainer}>
                    <Text style={styles.abilityName}>
                        Damaged {ability.damaged.range[0]}-
                        {ability.damaged.range[1]} Wounds Remaining
                    </Text>
                    <Text style={styles.effectText}>
                        {ability.damaged.effect}
                    </Text>
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
    damageContainer: {
        marginVertical: 5,
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
