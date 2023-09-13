import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function UnitCard({ item }) {
    console.log(item);

    const handleAdd = () => {
        // get roster
        // add unit to roster based on ID
        // set roster to localstorage
    };

    if (item[0] === "id") return null;
    return (
        <TouchableOpacity onPress={() => handleAdd()} style={styles.button}>
            <Text>{item[0]}</Text>
            <View style={{ flexDirection: "row" }}>
                <Text style={{ marginRight: 10 }}>{item[1]["points"]}</Text>
                <Text>+</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#fff",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        margin: 10,
        borderRadius: 4,
    },
});
