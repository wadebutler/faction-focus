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
            {points.map((item, index) => {
                return (
                    <TouchableOpacity
                        key={index}
                        onPress={() => handleSelect(item)}
                    >
                        <Text>{item.name}</Text>
                        <Text>{item.value}</Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});
