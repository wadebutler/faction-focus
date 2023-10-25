import { StyleSheet, View } from "react-native";
import FFText from "../../Component/Global/FFText";

export default CSM = ({ rule }) => {
    console.log(rule);
    return rule.map((item, index) => {
        return (
            <View key={index} style={{ padding: 10 }}>
                <FFText style={styles.title}>{item.name}</FFText>
                <FFText>{item.effect}</FFText>

                {!item.select ? null : (
                    <View style={{ paddingVertical: 10 }}>
                        {!item.select
                            ? null
                            : item.select.map((option, i) => {
                                  return <FFText key={i}>{option}</FFText>;
                              })}
                    </View>
                )}

                {!item.fail ? null : <FFText>{item.fail}</FFText>}

                {!item.units ? null : (
                    <View style={{ paddingVertical: 10 }}>
                        {item.units.map((unit, i) => {
                            return <FFText key={i}>{unit}</FFText>;
                        })}
                    </View>
                )}

                {!item.limitRule ? null : <FFText>{item.limitRule}</FFText>}

                {!item.limit ? null : (
                    <View style={{ paddingVertical: 10 }}>
                        {item.limit.map((limit, i) => {
                            return <FFText key={i}>{limit}</FFText>;
                        })}
                    </View>
                )}
            </View>
        );
    });
};

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        textAlign: "center",
        marginBottom: 10,
    },
});
