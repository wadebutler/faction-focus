import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useRecoilState } from "recoil";
import { ruleState } from "../../Atoms";
import ViewIcon from "../Icons/ViewIcon";

export default function RuleBar({ title, item }) {
    const navigation = useNavigation();
    const [rule, setRule] = useRecoilState(ruleState);

    const handleNavigation = (rule) => {
        setRule(rule);
        navigation.navigate("Rule");
    };

    return (
        <TouchableOpacity
            onPress={() => handleNavigation(item)}
            style={styles.bar}
        >
            <Text>{title}</Text>

            <View style={styles.button}>
                <ViewIcon />
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
