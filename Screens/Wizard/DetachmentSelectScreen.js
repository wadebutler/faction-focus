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
import FFText from "../../Component/Global/FFText";

export default function DetachmentSelect() {
    const [army, setArmy] = useRecoilState(armyBuilderState);
    const [detachments, setDetachments] = useState(null);
    const [select, setSelect] = useState(null);
    const navigation = useNavigation();

    useEffect(() => {
        index.map((item) => {
            if (item.id === army.id) {
                setDetachments(item.detachments);
            }
        });
    }, []);

    const handleSelect = (item) => {
        setSelect(item);
    };

    const handleConfirm = () => {
        let tempObj = { ...army };
        tempObj.detachment = select;
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
                        style={[
                            styles.button,
                            item.id === select?.id
                                ? { borderWidth: 1 }
                                : { borderWidth: 1, borderColor: "orange" },
                        ]}
                    >
                        <FFText style={{ paddingTop: 10, fontWeight: "bold" }}>
                            {item.name}
                        </FFText>
                        <FFText
                            style={{ paddingVertical: 10, fontWeight: "bold" }}
                        >
                            Rule: {item.rule}
                        </FFText>

                        {select === null ? null : (
                            <View style={{ paddingBottom: 10 }}>
                                <FFText style={{ paddingBottom: 10 }}>
                                    Effect: {item.effect}
                                </FFText>
                                <FFText>{item.select.rule}</FFText>

                                {item.select.options.map((item, index) => {
                                    return (
                                        <View key={index}>
                                            <FFText
                                                style={{
                                                    fontWeight: "bold",
                                                    paddingTop: 10,
                                                }}
                                            >
                                                {item.title}
                                            </FFText>
                                            <FFText>{item.effect}</FFText>
                                        </View>
                                    );
                                })}
                            </View>
                        )}
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id}
            />

            <TouchableOpacity
                disabled={select === null ? true : false}
                style={[
                    styles.confirmButton,
                    select === null ? { backgroundColor: "red" } : null,
                ]}
                onPress={() => handleConfirm()}
            >
                <FFText>Select Detachment</FFText>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    button: {
        backgroundColor: "orange",
        margin: 10,
        paddingHorizontal: 10,
        borderRadius: 4,
    },
    confirmButton: {
        position: "absolute",
        bottom: 20,
        backgroundColor: "orange",
        width: "90%",
        padding: 10,
        alignItems: "center",
        borderRadius: 4,
    },
});
