import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useRecoilState } from "recoil";
import { ruleState } from "../../Atoms";
import ViewIcon from "../Icons/ViewIcon";
import FFText from "../Global/FFText";

export default function RuleBar({ title, item }) {
    const navigation = useNavigation();
    const [rule, setRule] = useRecoilState(ruleState);

    const handleNavigation = (rule) => {
        setRule(rule);

        if (title === "Army Rule") {
            navigation.navigate("Rule");
        } else {
            navigation.navigate("Detachment");
        }
    };

    return (
        <TouchableOpacity
            onPress={() => handleNavigation(item)}
            style={styles.bar}
        >
            <FFText>{title}</FFText>

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
        paddingLeft: 10,
    },
    button: {
        height: 50,
        width: 80,
        alignItems: "center",
        justifyContent: "center",
    },
});
