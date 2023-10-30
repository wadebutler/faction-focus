import { StyleSheet, TouchableOpacity, View, FlatList } from "react-native";
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
                                ? { marginBottom: 70 }
                                : { borderColor: "orange" },
                        ]}
                    >
                        <FFText style={{ paddingTop: 10, fontWeight: "bold" }}>
                            {item.name}
                        </FFText>
                        <FFText
                            style={{
                                paddingVertical: 10,
                                fontWeight: "bold",
                            }}
                        >
                            Rule: {item.rule}
                        </FFText>

                        {select === null ? null : (
                            <View style={{ paddingBottom: 10 }}>
                                <FFText style={{ paddingBottom: 10 }}>
                                    Effect: {item.effect}
                                </FFText>
                                {!item.select ? null : (
                                    <FFText>{item.select.rule}</FFText>
                                )}

                                {!item.select
                                    ? null
                                    : item.select.options.map((item, index) => {
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

            <View style={{ alignItems: "center" }}>
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
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    button: {
        backgroundColor: "orange",
        borderRadius: 4,
        borderWidth: 1,
        padding: 10,
        margin: 10,
    },
    confirmButton: {
        position: "absolute",
        bottom: 10,
        backgroundColor: "orange",
        width: "95%",
        padding: 10,
        alignItems: "center",
        borderRadius: 4,
        borderWidth: 1,
    },
});
