import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function ArmyCard({ item }) {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => navigation.navigate("ListBuilder")}
        >
            <View>
                <Text>{item.title}</Text>
                <Text>{item.army}</Text>
                <Text>{item?.detachment?.name}</Text>
                <Text>{item?.points?.value} Points</Text>
            </View>

            <TouchableOpacity style={styles.dots}>
                <Text>...</Text>
            </TouchableOpacity>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        borderColor: "#000",
        borderWidth: 1,
        width: "90%",
        paddingBottom: 40,
        borderRadius: 4,
        marginBottom: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    dots: {
        backgroundColor: "red",
        width: 40,
        alignItems: "center",
        justifyContent: "center",
    },
});
