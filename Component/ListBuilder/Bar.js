import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useRecoilState } from "recoil";
import { orgIdState } from "../../Atoms";
import PlusIcon from "../Icons/PlusIcon";
import FFText from "../FFText";

export default function Bar({ title }) {
    const navigation = useNavigation();
    const [orgId, setOrgId] = useRecoilState(orgIdState);

    const handleNavigation = () => {
        if (title === "Allies") {
            navigation.navigate("Ally");
        } else {
            setOrgId(title);
            navigation.navigate("UnitSelect");
        }
    };

    return (
        <TouchableOpacity onPress={() => handleNavigation()} style={styles.bar}>
            <FFText>{title}</FFText>

            <View style={styles.button}>
                <PlusIcon />
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
