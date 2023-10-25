import { StyleSheet, TouchableOpacity, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRecoilState } from "recoil";
import { listArmyState } from "../../Atoms";
import { useEffect, useState } from "react";
import PlusIcon from "../Icons/PlusIcon";
import FFText from "../Global/FFText";
import { SortByName } from "../../Utils/Sort";

export default function UnitSelectBar({ item }) {
    const [list, setList] = useRecoilState(listArmyState);
    const [disabled, setDisabled] = useState(true);

    const handleAdd = async (unit) => {
        let tempObj = {
            name: list.name,
            allies: list.allies ? [...list.allies] : null,
            detachment: list.detachment,
            id: list.id,
            points: list.points,
            roster: [...list.roster],
            title: list.title,
            rule: item.rule.length ? [...item.rule] : item.rule,
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

        const sortArr = SortByName(tempObj.roster);
        tempObj.roster = sortArr;

        setList(tempObj);
    };

    useEffect(() => {
        list.roster.map((unit) => {
            if (unit.name === item.name) {
                setDisabled(false);
            }
        });
    }, [list]);

    return (
        <TouchableOpacity
            onPress={() => handleAdd(item)}
            style={[styles.button, { opacity: disabled ? 0.7 : 1 }]}
        >
            <FFText style={styles.maxText}>{item?.name}</FFText>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <PlusIcon />
                <FFText style={{ marginRight: 10 }}>
                    {" "}
                    {item?.points[item?.modelCountIndex]} points
                </FFText>
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
    maxText: {
        flexWrap: "wrap",
        maxWidth: "80%",
    },
});
