import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRecoilState } from "recoil";
import { listArmyState } from "../../Atoms";
import { orgIdState } from "../../Atoms";

export default function UnitSelectBar({ item }) {
    const [list, setList] = useRecoilState(listArmyState);
    const [orgId, setOrgId] = useRecoilState(orgIdState);

    const handleAdd = async (unit) => {
        let tempObj = {
            army: list.army,
            detachment: list.detachment,
            id: list.id,
            points: list.points,
            roster: [...list.roster],
            title: list.title,
            uid: list.uid,
        };
        tempObj.roster.push(unit);

        const tempData = await AsyncStorage.getItem("lists");
        const listData = tempData ? await JSON.parse(tempData) : null;
        let tempArr = [];

        listData.map((listItem) => {
            if (listItem.uid !== list.uid) {
                tempArr.push(listItem);
            }
        });

        tempArr.push(tempObj);

        const data = await JSON.stringify(tempArr);
        await AsyncStorage.setItem("lists", data);
        setList(tempObj);
    };

    return (
        <TouchableOpacity onPress={() => handleAdd(item)} style={styles.button}>
            <Text>{item.name}</Text>

            <View style={{ flexDirection: "row" }}>
                <Text>+</Text>
                <Text style={{ marginRight: 10 }}> {item.points} points</Text>
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
