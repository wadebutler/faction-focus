import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    FlatList,
} from "react-native";
import Archive from "../../Archive/index.json";
import { useNavigation } from "@react-navigation/native";
import { armyBuilderState } from "../../Atoms";
import { useRecoilState } from "recoil";

export default function ArmySelectScreen() {
    const navigation = useNavigation();
    const [army, setArmy] = useRecoilState(armyBuilderState);

    const armyListItem = (item) => {
        const handleSelect = () => {
            let tempObj = {
                army: item.name,
                rule: item.rule,
                id: item.id,
            };

            setArmy(tempObj);
            navigation.navigate("PointSelect");
        };

        return (
            <TouchableOpacity
                onPress={() => handleSelect(item)}
                style={styles.button}
            >
                <Text style={styles.text}>{item.name}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={Archive}
                renderItem={({ item }) => armyListItem(item)}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: "10%",
    },
    button: {
        backgroundColor: "orange",
        padding: 10,
        margin: 10,
        borderRadius: 4,
    },
    text: {
        textAlign: "center",
    },
});
