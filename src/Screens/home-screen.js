import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Home() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
                <Text>Add New</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    button: {
        position: "absolute",
        bottom: 20,
        backgroundColor: "orange",
        width: "90%",
        padding: 10,
        alignItems: "center",
        borderRadius: 4,
    },
});
