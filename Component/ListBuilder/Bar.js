import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { unitSelectListState } from "../../Atoms";
import { useRecoilState } from "recoil";

export default function Bar({ title, item }) {
    const navigation = useNavigation();
    const [unitList, setUnitList] = useRecoilState(unitSelectListState);

    const handleNavigation = () => {
        setUnitList(item);
        navigation.navigate("UnitSelect");
    };

    return (
        <TouchableOpacity onPress={() => handleNavigation()} style={styles.bar}>
            <Text>{title}</Text>

            <View style={styles.button}>
                <Text>+</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    bar: {
        backgroundColor: "orange",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: 30,
    },
    button: {
        height: 50,
        width: 80,
        alignItems: "center",
        justifyContent: "center",
    },
});
