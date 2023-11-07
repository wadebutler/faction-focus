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

            {!ability.faction ? null : (
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
                <View style={styles.container}>
                    <FFText>Leader Abilities:</FFText>
                    {ability?.leader.map((item, index) => {
                        return (
                            <View key={index}>
                                <FFText style={styles.abilityName}>
                                    {item.name}
                                </FFText>
                                <FFText style={styles.effectText}>
                                    {item.effect}
                                </FFText>
                            </View>
                        );
                    })}
                </View>
            ) : (
                <View style={styles.container}>
                    <FFText>Leader Abilities:</FFText>
                    {ability?.leader?.map((item) => {
                        return list.roster.map((ldr) => {
                            if (item.name === ldr.name) {
                                if (ldr.ability.leader.length > 0) {
                                    return ldr.ability.leader.map(
                                        (ablty, index) => {
                                            return (
                                                <View
                                                    style={{ marginBottom: 10 }}
                                                    key={index}
                                                >
                                                    <FFText
                                                        style={
                                                            styles.abilityName
                                                        }
                                                    >
                                                        {ablty.name}
                                                    </FFText>
                                                    <FFText
                                                        style={
                                                            styles.effectText
                                                        }
                                                    >
                                                        {ablty.effect}
                                                    </FFText>
                                                </View>
                                            );
                                        }
                                    );
                                }
                            }
                        });
                    })}
                </View>
            )}

            {!ability?.data ? null : (
                <View style={styles.container}>
                    <FFText>Datasheet Abilities:</FFText>
                    {ability?.data.map((item, index) => {
                        return (
                            <View
                                style={
                                    ability?.data.length >= 2
                                        ? { marginTop: 10 }
                                        : null
                                }
                                key={index}
                            >
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

            {!ability.wargear ? null : (
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

            {!ability.damaged ? null : (
                <View style={{ paddingHorizontal: 10, marginBottom: 15 }}>
                    <FFText style={styles.abilityName}>
                        Damaged {ability.damaged.range[0]}-
                        {ability.damaged.range[1]} Wounds Remaining
                    </FFText>
                    <FFText style={styles.effectText}>
                        {ability.damaged.effect}
                    </FFText>
                </View>
            )}

            {!ability.Primarch ? null : (
                <View style={styles.container}>
                    <FFText style={styles.abilityName}>
                        {ability.Primarch.title}
                    </FFText>

                    <FFText style={{ backgroundColor: "orange", padding: 10 }}>
                        {ability.Primarch.effect}
                    </FFText>

                    {ability.Primarch.abilities.map((item, index) => {
                        return (
                            <View key={index}>
                                <FFText style={styles.abilityName}>
                                    {item.name}
                                </FFText>
                                <FFText style={styles.effectText}>
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
        marginVertical: 10,
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
        backgroundColor: "orange",
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
    },
    effectNoTitle: {
        padding: 10,
        backgroundColor: "orange",
        borderRadius: 4,
        marginTop: 10,
    },
});
