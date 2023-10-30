import { StyleSheet, TouchableOpacity, View, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useCallback, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ArmyCard from "../Component/Home/ArmyCard";
import { useFocusEffect } from "@react-navigation/native";
import FFText from "../Component/Global/FFText";
import { SortByTitle } from "../Utils/Sort";
import { A } from "@expo/html-elements";
import UpdateModal from "../Component/Home/UpdateModal";

export default function Home() {
    const navigation = useNavigation();
    const [armyList, setArmyList] = useState(null);
    const [expand, setExpand] = useState(false);

    const fetchData = async () => {
        const data = await AsyncStorage.getItem("lists");
        const tempArr = await JSON.parse(data);
        const sortArr = SortByTitle(tempArr);
        setArmyList(sortArr);
    };

    const handleDelete = async (uid) => {
        const tempArr = [...armyList];
        const newArr = [];

        await tempArr.map((list) => {
            if (list.uid !== uid) {
                newArr.push(list);
            }
        });

        const data = await JSON.stringify(newArr);
        await AsyncStorage.setItem("lists", data);
        setArmyList(newArr);
    };

    const handleExpand = () => {
        setExpand(!expand);
    };

    useFocusEffect(
        useCallback(() => {
            fetchData();
        }, [])
    );

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={handleExpand}
                style={styles.updateButton}
            >
                <FFText>Latest Update Notes</FFText>
            </TouchableOpacity>

            <UpdateModal expand={expand} handleExpand={handleExpand} />

            <View
                style={[
                    styles.modalContainer,
                    !expand ? { height: 0 } : { height: "100%" },
                ]}
            >
                <View style={{ marginTop: 40, paddingHorizontal: 10 }}>
                    <FFText>
                        this data was updated as of October 25, 2023
                    </FFText>

                    <FFText>Factions added</FFText>
                    <FFText>-Thousand sons</FFText>

                    <FFText>
                        if data is missing try deleting the unit or list and
                        re-adding it otherwise you can use one of the below
                        contact methods
                    </FFText>

                    <A href="https://google.com">Go to Google</A>
                </View>
            </View>

            <View style={{ marginTop: 50 }}>
                <FlatList
                    data={armyList}
                    renderItem={({ item }) => (
                        <ArmyCard
                            keyId={item.uid}
                            item={item}
                            handleDelete={handleDelete}
                        />
                    )}
                    keyExtractor={(item) => item?.uid}
                />
            </View>

            <TouchableOpacity
                onPress={() => navigation.navigate("ArmySelect")}
                style={styles.button}
            >
                <FFText>Add New</FFText>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    button: {
        position: "absolute",
        bottom: 0,
        backgroundColor: "orange",
        width: "100%",
        height: 60,
        alignItems: "center",
        justifyContent: "center",
    },
    updateButton: {
        backgroundColor: "red",
        position: "absolute",
        top: 0,
        width: "100%",
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "orange",
    },
    modalContainer: {},
});
