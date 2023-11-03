import { StyleSheet, View } from "react-native";
import FFText from "../Global/FFText";

export default LV = ({ rule }) => {
    return (
        <View style={styles.container}>
            <FFText>{rule.tokens.rule}</FFText>

            <View style={styles.tokenContainer}>
                <FFText style={styles.titleText}>
                    {rule.tokens.one.name} - {rule.tokens.one.cost} Token
                </FFText>

                <FFText>{rule.tokens.one.effect}</FFText>
            </View>

            <View style={styles.tokenContainer}>
                <FFText style={styles.titleText}>
                    {rule.tokens.two.name} - {rule.tokens.two.cost} Token
                </FFText>

                <FFText>{rule.tokens.two.effect}</FFText>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        marginTop: -10,
    },
    tokenContainer: {
        paddingTop: 15,
    },
    titleText: {
        fontWeight: "bold",
    },
});
