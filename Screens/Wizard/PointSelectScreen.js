import { StyleSheet, TouchableOpacity, View, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { armyBuilderState } from "../../Atoms";
import { useRecoilState } from "recoil";
import points from "../../Archive/points.json";
import FFText from "../../Component/Global/FFText";

export default function PointSelect() {
    const navigation = useNavigation();
    const [army, setArmy] = useRecoilState(armyBuilderState);

    const handleSelect = (item) => {
        let tempObj = { ...army };
        tempObj.points = item;
        setArmy(tempObj);
        navigation.navigate("DetachmentSelect");
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={points}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.itemContainer}
                        onPress={() => handleSelect(item)}
                    >
                        <FFText style={styles.text}>{item.name}</FFText>
                        <FFText>{item.value}</FFText>
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item.value}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        paddingTop: 40,
    },
    itemContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#69a1bf",
        marginBottom: 40,
        paddingVertical: 30,
        paddingHorizontal: 60,
        borderRadius: 4,
    },
    text: {
        paddingRight: 60,
    },
});
