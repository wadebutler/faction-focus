import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    FlatList,
} from "react-native";
import { useEffect, useState } from "react";
import { armyBuilderState } from "../../Atoms";
import { useRecoilState } from "recoil";
import { useNavigation } from "@react-navigation/native";
import index from "../../Archive/index.json";

export default function DetachmentSelect() {
    const [army, setArmy] = useRecoilState(armyBuilderState);
    const [detachments, setDetachments] = useState(null);
    const navigation = useNavigation();

    useEffect(() => {
        index.map((item) => {
            if (item.id === army.id) {
                setDetachments(item.detachments);
            }
        });
    }, []);

    const handleSelect = (item) => {
        let tempObj = { ...army };
        tempObj.detachment = item;
        setArmy(tempObj);
        navigation.navigate("Confirm");
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={detachments}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => handleSelect(item)}
                        style={styles.button}
                    >
                        <Text style={{ paddingTop: 10 }}>{item.name}</Text>
                        <Text style={{ paddingVertical: 10 }}>
                            Rule: {item.rule}
                        </Text>
                        <Text style={{ paddingBottom: 10 }}>
                            Effect: {item.effect}
                        </Text>
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    button: {
        backgroundColor: "orange",
        margin: 10,
        paddingHorizontal: 10,
        borderRadius: 4,
    },
});
