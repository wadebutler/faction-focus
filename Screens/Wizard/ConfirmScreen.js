import { StyleSheet, TouchableOpacity, View, TextInput } from "react-native";
import { useState } from "react";
import { armyBuilderState } from "../../Atoms";
import { useRecoilState } from "recoil";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import FFText from "../../Component/Global/FFText";

export default function Confirm() {
    const [army, setArmy] = useRecoilState(armyBuilderState);
    const [listName, setListName] = useState("");
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

            <View style={styles.summaryContainer}>
                <FFText style={styles.text}>{army.name}</FFText>

                <FFText style={styles.text}>{army.detachment.name}</FFText>

                <FFText style={styles.text}>{army.points.name}</FFText>
                <FFText style={{ paddingBottom: 5 }}>
                    {army.points.value} points
                </FFText>
            </View>

            <TouchableOpacity
                disabled={listName === "" ? true : false}
                style={[
                    styles.button,
                    listName === "" ? { backgroundColor: "red" } : null,
                ]}
                onPress={() => handleCreateArmy()}
            >
                <FFText>Create Army</FFText>
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
    summaryContainer: {
        backgroundColor: "#69a1bf",
        width: "80%",
        padding: 10,
        borderBottomRightRadius: 4,
        borderBottomLeftRadius: 4,
    },
    input: {
        borderWidth: 1,
        borderBottomColor: "#69a1bf",
        borderTopRightRadius: 4,
        borderTopLeftRadius: 4,
        padding: 10,
        width: "80%",
        textAlign: "center",
    },
    text: {
        paddingBottom: 10,
    },
    button: {
        position: "absolute",
        bottom: 20,
        backgroundColor: "#69a1bf",
        width: "90%",
        padding: 10,
        alignItems: "center",
        borderRadius: 4,
    },
});
