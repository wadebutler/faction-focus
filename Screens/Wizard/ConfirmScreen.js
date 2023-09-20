import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    FlatList,
    TextInput,
} from "react-native";
import { useEffect, useState } from "react";
import { armyBuilderState } from "../../Atoms";
import { useRecoilState } from "recoil";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Confirm() {
    const [army, setArmy] = useRecoilState(armyBuilderState);
    const [listName, setListName] = useState("");
    const [selectedDetachment, setSelectedDetachment] = useState("");
    const navigation = useNavigation();

    const handleCreateArmy = async () => {
        const tempData = await AsyncStorage.getItem("lists");
        const listData = tempData ? JSON.parse(tempData) : null;
        const tempArr = listData ? [...listData] : [];
        let tempObj = { ...army };
        tempObj.uid = Date.now();
        tempObj.title = listName;
        tempObj.roster = [];
        await tempArr.push(tempObj);
        const data = await JSON.stringify(tempArr);
        await AsyncStorage.setItem("lists", data);
        navigation.navigate("Home");
    };

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Name"
                style={styles.input}
                onChangeText={(e) => {
                    setListName(e);
                }}
                value={listName}
            />

            <Text>{army.army}</Text>

            <Text>{army.detachment.name}</Text>

            <View>
                <Text>{army.points.name}</Text>
                <Text>{army.points.value} points</Text>
            </View>

            <TouchableOpacity
                disabled={listName === "" ? true : false}
                style={[
                    styles.button,
                    listName === "" ? { backgroundColor: "red" } : null,
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
