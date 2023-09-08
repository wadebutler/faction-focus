import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Bar({ title }) {
    const navigation = useNavigation();

    return (
        <View style={styles.bar}>
            <Text>{title}</Text>

            <TouchableOpacity
                onPress={() => navigation.navigate("UnitSelect")}
                style={styles.button}
            >
                <Text>+</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    bar: {
        backgroundColor: "orange",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: 30,
    },
    button: {
        height: 50,
        width: 80,
        alignItems: "center",
        justifyContent: "center",
    },
});
