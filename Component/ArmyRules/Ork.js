import { StyleSheet, View } from "react-native";
import FFText from "../Global/FFText";

export default Ork = ({ rule }) => {
    return rule.select.map((item) => {
        return <FFText style={styles.container}>{item}</FFText>;
    });
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        paddingHorizontal: 10,
    },
});
