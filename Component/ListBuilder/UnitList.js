import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRecoilState } from "recoil";
import { listArmyState } from "../../Atoms";
import { useNavigation } from "@react-navigation/native";
import { unitViewState } from "../../Atoms";

export default function UnitList({ org, unit, id }) {
    const navigation = useNavigation();
    const [list, setList] = useRecoilState(listArmyState);
    const [unitView, setViewUnit] = useRecoilState(unitViewState);

    const handleDelete = async () => {
        let tempObj = {
            army: list.army,
            detachment: list.detachment,
            id: list.id,
            points: list.points,
            roster: [...list.roster],
            title: list.title,
            uid: list.uid,
        };

        tempObj.roster.splice(id, 1);

        const tempData = await AsyncStorage.getItem("lists");
        const listData = tempData ? await JSON.parse(tempData) : null;
        const tempArr = [];

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

    const handleNavigate = (item) => {
        setViewUnit(item);
        navigation.navigate("ViewUnit");
    };

    return (
        <TouchableOpacity onPress={() => handleNavigate(unit)} key={id}>
            <View style={styles.titleContainer}>
                <Text style={{ maxWidth: 200 }}>{unit?.name}</Text>

                <Text>{unit?.points} points</Text>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text>Edit</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text>Dup</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => handleDelete()}
                    style={styles.button}
                >
                    <Text>Del</Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        paddingTop: 30,
        paddingBottom: 30,
    },
    buttonContainer: {
        flexDirection: "row",
    },
    button: {
        borderWidth: 1,
        width: "33.3%",
        // width: "25%",
        height: 40,
        alignItems: "center",
        justifyContent: "center",
    },
});
