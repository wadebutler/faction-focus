import { StyleSheet, TouchableOpacity, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRecoilState } from "recoil";
import { useNavigation } from "@react-navigation/native";
import { unitViewState, listArmyState, unitEditState } from "../../Atoms";
import FFText from "../FFText";

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
        let tempRoster = JSON.parse(JSON.stringify(tempObj));
        tempRoster.roster.splice(id, 1);

        if (unit.org === "Character") {
            tempRoster?.roster?.map((item, index) => {
                if (item.org === "Battleline" || item.org === "infantry") {
                    item?.ability?.leader?.map((x, i) => {
                        if (x.unit === unit.name) {
                            item.ability.leader.splice(i, 1);
                        }
                    });
                }
            });
        }

        const tempData = await AsyncStorage.getItem("lists");
        const listData = tempData ? await JSON.parse(tempData) : null;
        const tempArr = [];

        listData.map((listItem) => {
            if (listItem.uid !== list.uid) {
                tempArr.push(listItem);
            }
        });

        tempArr.push(tempRoster);

        const data = await JSON.stringify(tempArr);
        await AsyncStorage.setItem("lists", data);
        setList(tempRoster);
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
                <FFText
                    style={{
                        maxWidth: "80%",
                        fontSize: 15,
                        fontWeight: "bold",
                    }}
                >
                    {unit?.name}
                </FFText>

                <FFText style={{ fontSize: 15, fontWeight: "bold" }}>
                    {unit?.points[unit.modelCountIndex]} points
                </FFText>
            </View>

            {!unit?.ability?.leader
                ? null
                : !unit?.ability?.leader.length
                ? null
                : unit?.ability?.leader.map((item, index) => {
                      return (
                          <FFText key={index} style={styles.leaderText}>
                              {item.unit}
                          </FFText>
                      );
                  })}

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={() => handleEdit(unit, id)}
                    style={styles.button}
                >
                    <FFText>Edit</FFText>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => handleDuplicate()}
                    style={styles.button}
                >
                    <FFText>Dup</FFText>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => handleDelete()}
                    style={styles.button}
                >
                    <FFText>Del</FFText>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 30,
        paddingHorizontal: 10,
    },
    buttonContainer: {
        flexDirection: "row",
    },
    button: {
        borderWidth: 1,
        width: "33.3%",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
    },
    leaderText: {
        paddingLeft: 10,
        paddingBottom: 10,
    },
});
