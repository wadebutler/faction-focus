import { StyleSheet, View } from "react-native";
import FFText from "../../Component/Global/FFText";

export default DG = ({ rule }) => {
    return rule.map((item, index) => {
        return (
            <View style={styles.container} key={index}>
                <FFText>
                    {Object.keys(item)[0]} = {Object.values(item)[0]}
                </FFText>
                <FFText>
                    {Object.keys(item)[1]} = {Object.values(item)[1]}
                </FFText>
            </View>
        );
    });
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    walker: {
        borderWidth: 1,
        padding: 10,
        borderRadius: 4,
        marginBottom: 20,
    },
});
