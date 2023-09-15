import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useRecoilState } from "recoil";
import { orgIdState } from "../../Atoms";

export default function Bar({ title }) {
    const navigation = useNavigation();
    const [orgId, setOrgId] = useRecoilState(orgIdState);

    const handleNavigation = () => {
        setOrgId(title);
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
