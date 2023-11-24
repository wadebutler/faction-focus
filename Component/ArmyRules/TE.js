import { StyleSheet, View } from "react-native";
import FFText from "../../Component/Global/FFText";

export default TE = ({ rule }) => {
    return (
        <View style={styles.container}>
            {rule.size.map((item, index) => {
                return (
                    <FFText style={styles.text} key={index}>
                        {item}
                    </FFText>
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
    },
    text: {
        marginBottom: 10,
    },
});
