import { StyleSheet, Text, View, FlatList } from "react-native";
import { useRecoilState } from "recoil";
import { useNavigation } from "@react-navigation/native";
import { ruleState } from "../../Atoms";

export default function RuleView() {
    const [rule, setRule] = useRecoilState(ruleState);

    console.log(rule);

    return (
        <View>
            <Text>{rule.name}</Text>
            <Text>{rule.effect}</Text>

            <FlatList
                data={rule.range}
                renderItem={({ item }) => (
                    <View style={{ marginVertical: 10 }}>
                        <Text>Battle Round {item.round}</Text>
                        <Text>Contagion Range = {item.range}"</Text>
                    </View>
                )}
                keyExtractor={(item) => item.round}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        position: "absolute",
        right: 10,
        top: 15,
    },
});
