import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useRecoilState } from "recoil";
import { ruleState } from "../../Atoms";

export default function RuleBar({ title, item }) {
    const navigation = useNavigation();
    const [rule, setRule] = useRecoilState(ruleState);

    const handleNavigation = () => {
        setRule(item);
        navigation.navigate("Rule");
    };

    return (
        <TouchableOpacity onPress={() => handleNavigation()} style={styles.bar}>
            <Text>{title}</Text>

            <View style={styles.button}>
                <Text>view</Text>
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
