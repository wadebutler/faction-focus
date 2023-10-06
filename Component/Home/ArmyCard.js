import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { listArmyState } from "../../Atoms";
import TrashIcon from "../Icons/TrashIcon";
import CheckIcon from "../Icons/CheckIcon";
import CloseIcon from "../Icons/CloseIcon";

export default function ArmyCard({ item, handleDelete }) {
    const navigation = useNavigation();
    const [confirm, setConfirm] = useState(false);
    const [list, setList] = useRecoilState(listArmyState);

    const handleSelect = (listItem) => {
        setConfirm(false);
        setList(listItem);
        navigation.navigate("ListBuilder");
    };

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => handleSelect(item)}
        >
            <View>
                <Text>{item.title}</Text>
                <Text>{item.name}</Text>
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
                        <CheckIcon />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setConfirm(false)}
                        style={[styles.trash, { backgroundColor: "red" }]}
                    >
                        <CloseIcon />
                    </TouchableOpacity>
                </View>
            ) : (
                <TouchableOpacity
                    onPress={() => setConfirm(true)}
                    style={styles.trash}
                >
                    <TrashIcon />
                </TouchableOpacity>
            )}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        borderRadius: 4,
        marginBottom: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 20,
        backgroundColor: "orange",
    },
    trash: {
        backgroundColor: "#000",
        borderRadius: 4,
        padding: 15,
        width: 60,
        height: 60,
        alignItems: "center",
        justifyContent: "center",
    },
});
