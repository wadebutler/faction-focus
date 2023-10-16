import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function GoBack({ color }) {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.container}
        >
            <AntDesign
                name="arrowleft"
                size={30}
                color={color ? color : "black"}
            />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        left: 5,
        top: 10,
        zIndex: 1,
    },
});
