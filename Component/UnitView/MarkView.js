import { StyleSheet, View } from "react-native";
import FFText from "../Global/FFText";

export default function MarkView({ item }) {
    return (
        <View style={{ marginHorizontal: 10 }}>
            <FFText style={styles.abilityName}>
                Daemonic Allegiance - {item.key}
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
