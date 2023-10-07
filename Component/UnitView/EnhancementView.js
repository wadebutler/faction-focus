import { StyleSheet, View } from "react-native";
import FFText from "../FFText";

export default function EnhancementView({ item }) {
    return (
        <View style={{ marginHorizontal: 10 }}>
            <FFText style={{ paddingBottom: 5 }}>Enhancement:</FFText>
            <FFText style={styles.abilityName}>
                {item.name} - {item.cost}
            </FFText>

            <FFText style={styles.effectText}>{item.effect}</FFText>
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
