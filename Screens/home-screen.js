import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Home() {
    const navigation = useNavigation();
    const [armyList, setArmyList] = useState(null);

    const fetchData = async () => {
        const data = await AsyncStorage.getItem("lists");
        const tempArr = JSON.parse(data);
        setArmyList(tempArr);
    };

    useEffect(() => {
        fetchData();
    }, [armyList]);

    return (
        <View style={styles.container}>
            {armyList?.map((item, index) => {
                return <Text key={index}>{item.name}</Text>;
            })}
            <TouchableOpacity
                onPress={() => navigation.navigate("ArmySelect")}
                style={styles.button}
            >
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
