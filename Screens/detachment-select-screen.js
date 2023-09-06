import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    FlatList,
    TextInput,
} from "react-native";
import { useState } from "react";
import { selectedArmyState } from "../Atoms";
import { useRecoilState } from "recoil";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function DetachmentSelect() {
    const [army, setArmy] = useRecoilState(selectedArmyState);
    const [listName, setListName] = useState("");
    const [selectedDetachment, setSelectedDetachment] = useState("");
    const navigation = useNavigation();

    const detachmentItem = (item, index) => {
        return (
            <TouchableOpacity
                onPress={() => setSelectedDetachment(item.name)}
                style={[
                    styles.select,
                    index + 1 === army.detachments.length
                        ? { marginBottom: 80 }
                        : null,
                ]}
            >
                <Text>{item?.name}</Text>

                <Text>Rule: {item.rule}</Text>

                <Text>Effect: {item.effect}</Text>
            </TouchableOpacity>
        );
    };

    const handleCreateArmy = async () => {
        const tempData = await AsyncStorage.getItem("lists");
        const listData = tempData ? JSON.parse(tempData) : null;
        const tempArr = listData ? [...listData] : [];
        const armyObj = {
            army: army.name,
            id: tempArr.length,
            uid: army.id,
            name: listName,
        };

        await tempArr.push(armyObj);
        const data = await JSON.stringify(tempArr);

        await AsyncStorage.setItem("lists", data);
        navigation.navigate("Home");
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={(e) => {
                    setListName(e);
                }}
                value={listName}
            />

            <Text>{army.name}</Text>

            <Text>{selectedDetachment}</Text>

            <FlatList
                data={army.detachments}
                renderItem={({ item, index }) => detachmentItem(item, index)}
                keyExtractor={(item) => item.id}
            />

            <TouchableOpacity
                disabled={listName === "" ? true : false}
                style={[
                    styles.button,
                    listName === "" || selectedDetachment === ""
                        ? { backgroundColor: "red" }
                        : null,
                ]}
                onPress={() => handleCreateArmy()}
            >
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
        borderColor: "black",
        borderWidth: 1,
        padding: 10,
        borderRadius: 4,
    },
});
