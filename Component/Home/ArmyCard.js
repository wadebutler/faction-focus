import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { listArmyState } from "../../Atoms";

export default function ArmyCard({ item, handleDelete, id }) {
    const navigation = useNavigation();
    const [confirm, setConfirm] = useState(false);
    const [list, setList] = useRecoilState(listArmyState);

    const handleSelect = (listItem) => {
        setList(listItem);
        navigation.navigate("ListBuilder");
    };

    return (
        <TouchableOpacity
            key={id}
            style={styles.container}
            onPress={() => handleSelect(item)}
        >
            <View>
                <Text>{item.title}</Text>
                <Text>{item.army}</Text>
                <Text>{item?.detachment?.name}</Text>
                <Text>{item?.points?.value} Points</Text>
            </View>

            {confirm ? (
                <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity
                        onPress={() => handleDelete(item.uid)}
                        style={[
                            styles.trash,
                            { backgroundColor: "green", marginRight: 10 },
                        ]}
                    >
                        <Text style={{ color: "#fff" }}>Y</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setConfirm(false)}
                        style={[styles.trash, { backgroundColor: "red" }]}
                    >
                        <Text style={{ color: "#fff" }}>X</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <TouchableOpacity
                    onPress={() => setConfirm(true)}
                    style={styles.trash}
                >
                    <Text style={{ color: "#fff" }}>T</Text>
                </TouchableOpacity>
            )}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        borderColor: "#000",
        borderWidth: 1,
        width: "90%",
        paddingTop: 20,
        paddingBottom: 20,
        borderRadius: 4,
        marginBottom: 20,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    trash: {
        backgroundColor: "#000",
        borderRadius: 4,
        padding: 15,
        width: 60,
        alignItems: "center",
        justifyContent: "center",
    },
});
