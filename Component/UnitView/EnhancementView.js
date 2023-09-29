import { StyleSheet, Text, View } from "react-native";

export default function EnhancementView({ item }) {
    return (
        <View style={{ marginHorizontal: 10 }}>
            <Text style={{ paddingBottom: 5 }}>Enhancement:</Text>
            <Text style={styles.abilityName}>
                {item.name} - {item.cost}
            </Text>

            <Text style={styles.effectText}>{item.effect}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
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
        marginBottom: 20,
    },
});
