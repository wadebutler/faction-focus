import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ArmyCard from "../Component/Home/ArmyCard";

export default function Home() {
    const navigation = useNavigation();
    const [armyList, setArmyList] = useState(null);

    const fetchData = async () => {
        const data = await AsyncStorage.getItem("lists");
        const tempArr = await JSON.parse(data);
        setArmyList(tempArr);
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

    useEffect(() => {
        fetchData();
    }, [armyList]);

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                {armyList?.map((item) => {
                    return (
                        <ArmyCard
                            id={item.uid}
                            item={item}
                            handleDelete={handleDelete}
                        />
                    );
                })}
            </ScrollView>

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
    },
    scrollContainer: {
        alignItems: "center",
        paddingTop: 80,
        paddingBottom: 80,
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
});
