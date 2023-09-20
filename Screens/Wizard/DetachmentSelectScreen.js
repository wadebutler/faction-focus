import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    FlatList,
    TextInput,
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
            {detachments?.map((item, index) => {
                return (
                    <TouchableOpacity
                        key={index}
                        onPress={() => handleSelect(item)}
                        style={styles.select}
                    >
                        <Text>{item.name}</Text>

                        <Text>Rule: {item.rule}</Text>

                        <Text>Effect: {item.effect}</Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        paddingTop: "10%",
    },
    text: {
        color: "black",
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: "70%",
        textAlign: "center",
    },
    button: {
        position: "absolute",
        bottom: 20,
        backgroundColor: "orange",
        width: "90%",
        padding: 10,
        alignItems: "center",
        borderRadius: 4,
    },
    select: {
        margin: 10,
        borderColor: "black",
        borderWidth: 1,
        padding: 10,
        borderRadius: 4,
    },
});
