import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRecoilState } from "recoil";
import { useNavigation } from "@react-navigation/native";
import { unitViewState, listArmyState, unitEditState } from "../../Atoms";

export default function UnitList({ unit, id }) {
    const navigation = useNavigation();
    const [list, setList] = useRecoilState(listArmyState);
    const [unitView, setUnitView] = useRecoilState(unitViewState);
    const [unitEdit, setUnitEdit] = useRecoilState(unitEditState);

    const handleDelete = async () => {
        let tempObj = {
            name: list.name,
            allies: [...list.allies],
            detachment: list.detachment,
            id: list.id,
            points: list.points,
            roster: [...list.roster],
            title: list.title,
            rule: list.rule,
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

    const handleDuplicate = async () => {
        let tempObj = {
            name: list.name,
            allies: [...list.allies],
            detachment: list.detachment,
            id: list.id,
            points: list.points,
            roster: [...list.roster],
            title: list.title,
            rule: list.rule,
            uid: list.uid,
        };

        tempObj.roster.push(unit);

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

    const handleView = (item) => {
        setUnitView(item);
        navigation.navigate("ViewUnit");
    };

    const handleEdit = (item, id) => {
        let unit = { unit: item, unitId: id };
        setUnitEdit(unit);
        navigation.navigate("EditUnit");
    };
    return (
        <TouchableOpacity onPress={() => handleView(unit)} id={id}>
            <View style={styles.titleContainer}>
                <Text style={{ maxWidth: "80%" }}>{unit?.name}</Text>

                <Text>{unit?.points[unit.modelCountIndex]} points</Text>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={() => handleEdit(unit, id)}
                    style={styles.button}
                >
                    <Text>Edit</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => handleDuplicate()}
                    style={styles.button}
                >
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
