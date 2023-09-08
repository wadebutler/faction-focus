import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function UnitSelect() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text>Unit Select</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
