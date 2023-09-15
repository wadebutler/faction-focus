import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRecoilState } from "recoil";
import { listArmyState } from "../../Atoms";
import { orgIdState } from "../../Atoms";

export default function UnitCard({ item, key }) {
    const [list, setList] = useRecoilState(listArmyState);
    const [orgId, setOrgId] = useRecoilState(orgIdState);

    const handleAdd = (unit) => {
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
        console.log(tempObj);
        setList(tempObj);

        // tempList.roster = tempArr;
        // setList(tempArr);
        // let tempUnit = {
        //     name: unit[0],
        //     data: unit[1].data,
        //     model_count: unit[1]["model count"],
        //     points: unit[1].points,
        // };
        // const tempData = await AsyncStorage.getItem("lists");
        // const listData = tempData ? JSON.parse(tempData) : null;
        // const tempArr = listData ? [...listData] : [];
        // unitList["id"]
        // console.log(tempArr);
    };

    return (
        <TouchableOpacity onPress={() => handleAdd(item)} style={styles.button}>
            <Text>{item.name}</Text>
            <View style={{ flexDirection: "row" }}>
                <Text style={{ marginRight: 10 }}>{item.points}</Text>
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
