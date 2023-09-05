import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    FlatList,
} from "react-native";
import ArmyList from "../../Archive/army-list.json";

export default function ArmyListScreen() {
    const armyListItem = (item) => {
        return (
            <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>{item?.name}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={ArmyList}
                renderItem={({ item }) => armyListItem(item)}
                keyExtractor={(item) => item?.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 60,
    },
    button: {
        backgroundColor: "orange",
        padding: 10,
        margin: 10,
        borderRadius: 4,
    },
    text: {
        textAlign: "center",
    },
});
