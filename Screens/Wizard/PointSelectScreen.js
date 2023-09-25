import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { armyBuilderState } from "../../Atoms";
import { useRecoilState } from "recoil";
import points from "../../Archive/points.json";

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
                        <Text style={styles.text}>{item.name}</Text>
                        <Text>{item.value}</Text>
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item.uid}
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
        backgroundColor: "orange",
        marginBottom: 40,
        paddingVertical: 30,
        paddingHorizontal: 60,
        borderRadius: 4,
    },
    text: {
        paddingRight: 60,
    },
});
