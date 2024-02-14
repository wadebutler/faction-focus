import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { listArmyState, copyRosterState } from "../../Atoms";
import TrashIcon from "../Icons/TrashIcon";
import CheckIcon from "../Icons/CheckIcon";
import CloseIcon from "../Icons/CloseIcon";
import FFText from "../Global/FFText";
import { SortByName } from "../../Utils/Sort";
import Clip from "../Icons/ClipboardIcon";
import * as Clipboard from "expo-clipboard";

export default function ArmyCard({ item, handleDelete }) {
    const navigation = useNavigation();
    const [confirm, setConfirm] = useState(false);
    const [list, setList] = useRecoilState(listArmyState);

    const handleSelect = (listItem) => {
        setConfirm(false);
        const sort = SortByName(listItem.roster);
        const data = { ...listItem };
        data.roster = sort;
        setList(data);
        navigation.navigate("ListBuilder");
    };

    const handleCopy = async () => {
        let title = `${item.title} - ${item.name} ${item.points.name}[${item.points.value}]`;
        let tempRoster = [];

        item.roster.map((unit) => {
            let tempUnit = `${unit.name} - ${
                unit.points[unit.modelCountIndex]
            }`;
            let tempMeleeArr = [];
            let tempGunArr = [];

            unit?.melee?.map((wpn) => {
                if (wpn.active) {
                    tempMeleeArr.push(wpn.name);
                }
            });

            unit?.ranged?.map((wpn) => {
                if (wpn.active) {
                    tempGunArr.push(wpn.name);
                }
            });

            if (tempMeleeArr.length === 0) {
                tempRoster.push(`
                ${tempUnit}
                ${tempGunArr.toString()}
                ${""}`);
            } else if (tempGunArr.length === 0) {
                tempRoster.push(`
                ${tempUnit}
                ${tempMeleeArr.toString()}
                ${""}`);
            } else {
                tempRoster.push(`
                ${tempUnit}
                ${tempMeleeArr.toString()}
                ${tempGunArr.toString()}
                ${""}`);
            }
        });

        await Clipboard.setStringAsync(`
        ${title}
        ${tempRoster.join("")}
        `);
    };

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => handleSelect(item)}
        >
            <View>
                <FFText>{item.title}</FFText>
                <FFText>{item.name}</FFText>
                <FFText>{item?.detachment?.name}</FFText>
                <FFText>{item?.points?.value} Points</FFText>
            </View>

            <View style={styles.rowContainer}>
                {confirm ? null : (
                    <TouchableOpacity
                        onPress={() => handleCopy()}
                        style={[styles.trash, { marginRight: 10 }]}
                    >
                        <Clip />
                    </TouchableOpacity>
                )}

                {confirm ? (
                    <View style={styles.rowContainer}>
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
            </View>
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
        backgroundColor: "#69a1bf",
    },
    rowContainer: {
        flexDirection: "row",
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
