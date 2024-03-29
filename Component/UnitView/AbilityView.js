import { StyleSheet, View } from "react-native";
import FFText from "../Global/FFText";
import { useRecoilState } from "recoil";
import { listArmyState } from "../../Atoms";

export default function AbilityView({ ability, org }) {
    const [list, setList] = useRecoilState(listArmyState);

    return (
        <View>
            {!ability?.core ? null : (
                <View style={styles.dataContainer}>
                    <FFText>Core: </FFText>
                    {ability.core.map((item, index) => {
                        return (
                            <FFText style={styles.dashText} key={index}>
                                {item}
                            </FFText>
                        );
                    })}
                </View>
            )}

            {!ability?.faction ? null : (
                <View style={styles.dataContainer}>
                    <FFText>Faction Ability: </FFText>
                    {ability?.faction.map((item, index) => (
                        <FFText key={index} style={styles.dashText}>
                            {item}
                        </FFText>
                    ))}
                </View>
            )}

            {org === "Character" ? (
                !ability?.leader || ability?.leader.length === 0 ? null : (
                    <View style={styles.container}>
                        <FFText>Leader Abilities:</FFText>
                        {ability?.leader.map((item, index) => {
                            return (
                                <View
                                    style={
                                        typeof item.effect === "string"
                                            ? null
                                            : { marginTop: 10 }
                                    }
                                    key={index}
                                >
                                    <FFText style={styles.abilityName}>
                                        {item.name}
                                    </FFText>
                                    {typeof item.effect === "string" ? (
                                        <FFText style={styles.effectText}>
                                            {item.effect}
                                        </FFText>
                                    ) : (
                                        item.effect.map((effectItem, index) => {
                                            return (
                                                <FFText
                                                    style={
                                                        item.effect.length ===
                                                        index + 1
                                                            ? styles.effectText
                                                            : styles.effectListText
                                                    }
                                                >
                                                    {effectItem}
                                                </FFText>
                                            );
                                        })
                                    )}
                                </View>
                            );
                        })}
                    </View>
                )
            ) : !ability?.leader || ability?.leader.length === 0 ? null : (
                <View style={{ paddingHorizontal: 10 }}>
                    <FFText>Leader Abilities:</FFText>
                    {ability?.leader?.map((item) => {
                        return list.roster[item.id].ability.leader.map(
                            (ablty, index) => {
                                return (
                                    <View
                                        style={{ marginBottom: 10 }}
                                        key={index}
                                    >
                                        <FFText style={styles.abilityName}>
                                            {ablty.name}
                                        </FFText>

                                        <FFText style={styles.effectText}>
                                            {ablty.effect}
                                        </FFText>
                                    </View>
                                );
                            }
                        );
                    })}
                </View>
            )}

            {!ability?.data || ability?.data.length === 0 ? null : (
                <View style={styles.container}>
                    <FFText>Datasheet Abilities:</FFText>
                    {ability?.data.map((item, index) => {
                        return (
                            <View key={index}>
                                {!item.name ? null : (
                                    <FFText style={styles.abilityName}>
                                        {item.name}
                                    </FFText>
                                )}
                                <FFText
                                    style={
                                        item.name
                                            ? styles.effectText
                                            : styles.effectNoTitle
                                    }
                                >
                                    {item.effect}
                                </FFText>
                            </View>
                        );
                    })}
                </View>
            )}

            {!ability?.wargear ? null : (
                <View style={styles.container}>
                    <FFText>Wargear Abilities:</FFText>
                    {ability.wargear.map((item, index) => {
                        if (item.name !== null || item.effect !== null) {
                            return (
                                <View
                                    style={
                                        ability.wargear.length > 1 &&
                                        index !== 0
                                            ? { marginTop: 10 }
                                            : null
                                    }
                                    key={index}
                                >
                                    <FFText style={styles.abilityName}>
                                        {item.name}
                                    </FFText>
                                    <FFText style={styles.effectText}>
                                        {item.effect}
                                    </FFText>
                                </View>
                            );
                        }
                    })}
                </View>
            )}

            {!ability?.damaged ? null : (
                <View style={styles.container}>
                    <FFText style={styles.abilityName}>
                        Damaged {ability.damaged.range[0]}-
                        {ability.damaged.range[1]} Wounds Remaining
                    </FFText>
                    <FFText style={styles.effectText}>
                        {ability.damaged.effect}
                    </FFText>
                </View>
            )}

            {!ability?.Primarch ? null : (
                <View style={styles.container}>
                    <FFText style={styles.abilityName}>
                        {ability.Primarch.title}
                    </FFText>

                    <FFText style={{ backgroundColor: "#69a1bf", padding: 10 }}>
                        {ability.Primarch.effect}
                    </FFText>

                    {ability.Primarch.abilities.map((item, index) => {
                        return (
                            <View key={index}>
                                <FFText style={styles.PrimarchAbilityName}>
                                    {item.name}
                                </FFText>

                                <FFText
                                    style={
                                        ability.Primarch.abilities.length ===
                                        index + 1
                                            ? styles.effectText
                                            : styles.PrimarchEffectText
                                    }
                                >
                                    {item.effect}
                                </FFText>
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
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    dataContainer: {
        padding: 10,
        flexDirection: "row",
        borderBottomWidth: 1,
        alignItems: "center",
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
        backgroundColor: "#69a1bf",
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
    },
    effectListText: {
        padding: 10,
        backgroundColor: "#69a1bf",
    },
    PrimarchAbilityName: {
        color: "#fff",
        backgroundColor: "#000",
        textAlign: "center",
        padding: 4,
    },
    PrimarchEffectText: {
        padding: 10,
        backgroundColor: "#69a1bf",
    },
    effectNoTitle: {
        padding: 10,
        backgroundColor: "#69a1bf",
        borderRadius: 4,
        marginTop: 10,
    },
});
