import { StyleSheet, View } from "react-native";
import FFText from "../../Component/Global/FFText";

export default DE = ({ rule }) => {
    return (
        <View style={styles.container}>
            <FFText style={styles.title}>{rule.name}</FFText>

            <FFText style={styles.margin}>{rule.move}</FFText>

            <FFText style={styles.margin}>{rule.shoot}</FFText>

            <FFText style={{ marginTop: 10, marginBottom: 5 }}>
                You gain additional tokens based on the battle size as follows:
            </FFText>

            {rule.size.map((item, index) => {
                return (
                    <View key={index} style={styles.tokenContainer}>
                        <FFText>{item.name}</FFText>

                        <FFText style={styles.token}>{item.token}</FFText>

                        {index === 0 ? (
                            <FFText>token</FFText>
                        ) : (
                            <FFText>tokens</FFText>
                        )}
                    </View>
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: -20,
        paddingHorizontal: 10,
    },
    title: {
        fontWeight: "bold",
    },
    token: {
        marginHorizontal: 5,
        fontWeight: "bold",
    },
    tokenContainer: {
        flexDirection: "row",
    },
    margin: {
        marginVertical: 10,
    },
});
