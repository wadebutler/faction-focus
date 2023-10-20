import { StyleSheet, View } from "react-native";
import FFText from "../../Component/Global/FFText";
import { Entypo } from "@expo/vector-icons";

export default CD = ({ rule }) => {
    return (
        <View style={styles.container}>
            <View style={{ marginBottom: 10 }}>
                {rule.range.map((item) => {
                    return (
                        <View style={{ flexDirection: "row", marginRight: 10 }}>
                            <Entypo name="dot-single" size={24} color="black" />
                            <FFText style={{ marginBottom: 10 }}>{item}</FFText>
                        </View>
                    );
                })}
            </View>

            <View style={{ marginBottom: 20 }}>
                <FFText style={styles.title}>{rule.manifest.name}</FFText>
                <FFText style={{ marginLeft: 10 }}>
                    {rule.manifest.effect}
                </FFText>
            </View>

            <View style={{ marginBottom: 20 }}>
                <FFText style={styles.title}>{rule.terror.name}</FFText>
                <FFText style={{ marginLeft: 10 }}>{rule.terror.effect}</FFText>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: -20,
        marginBottom: 20,
        marginLeft: -10,
    },
    title: {
        fontSize: 20,
        textAlign: "center",
        marginBottom: 10,
    },
});
