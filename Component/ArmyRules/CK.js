import { StyleSheet, View } from "react-native";
import FFText from "../../Component/Global/FFText";

export default CK = ({ rule, walker }) => {
    return (
        <View>
            <View style={styles.walker}>
                <FFText style={{ fontWeight: "bold" }}>{walker.name}</FFText>
                <FFText>{walker.effect}</FFText>
            </View>

            <View style={styles.walker}>
                {rule.map((item, index) => {
                    return (
                        <View style={{ marginBottom: 20 }} key={index}>
                            <FFText style={{ fontWeight: "bold" }}>
                                Battle Round {item.round} Onwards
                            </FFText>

                            <FFText
                                style={{
                                    fontWeight: "bold",
                                    paddingVertical: 5,
                                }}
                            >
                                {item.name}
                            </FFText>

                            <FFText>{item.effect}</FFText>
                        </View>
                    );
                })}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    walker: {
        borderWidth: 1,
        padding: 10,
        borderRadius: 4,
        marginBottom: 20,
    },
});
