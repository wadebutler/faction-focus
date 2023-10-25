import { StyleSheet, View } from "react-native";
import FFText from "../../Component/Global/FFText";

export default WE = ({ rule }) => {
    return rule.map((item, index) => {
        return (
            <View style={styles.stratContainer} key={index}>
                <FFText style={styles.stratTitle}>
                    {item.name} - {item.cost}
                </FFText>

                <FFText style={styles.stratText}>{item.effect}</FFText>
            </View>
        );
    });
};

const styles = StyleSheet.create({
    stratContainer: {
        marginBottom: 20,
        borderWidth: 1,
        borderRadius: 4,
        marginHorizontal: 10,
    },
    stratTitle: {
        textTransform: "uppercase",
        fontWeight: "bold",
        backgroundColor: "#000",
        color: "#fff",
        padding: 5,
    },
    stratText: {
        margin: 10,
    },
});
