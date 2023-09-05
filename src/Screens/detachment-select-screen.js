import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    FlatList,
    TextInput,
} from "react-native";
import data from "../../Archive/Factions/death-guard.json";
import { useState } from "react";

export default function DetachmentSelect() {
    const [listName, setListName] = useState("");
    const [detachment, setDetachment] = useState(data.detachments[0]);

    const detachmentItem = (item) => {
        return (
            <TouchableOpacity
                onPress={() => setDetachment(item)}
                style={styles.select}
            >
                <Text>{item?.name}</Text>

                <Text>Rule: {item.rule}</Text>

                <Text>Effect: {item.effect}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={(e) => {
                    console.log(e), setListName(e);
                }}
                value={listName}
            />

            <Text>{data?.army_name}</Text>

            <Text>{detachment?.name}</Text>

            <FlatList
                data={data.detachments}
                renderItem={({ item }) => detachmentItem(item)}
                keyExtractor={(item) => item?.id}
            />

            <TouchableOpacity style={styles.button}>
                <Text>Create Army</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "10%",
    },
    text: {
        color: "black",
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: "70%",
        textAlign: "center",
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
    select: {
        margin: 10,
    },
});
