import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRecoilState } from "recoil";
import { listArmyState } from "../../Atoms";
import { orgIdState } from "../../Atoms";
import { useEffect, useState } from "react";

export default function UnitList({ org, unit, id }) {
    const [list, setList] = useRecoilState(listArmyState);

    return (
        <View key={id}>
            <View style={styles.titleContainer}>
                <Text style={{ maxWidth: 200 }}>{unit?.name}</Text>

                <Text>{unit?.points} points</Text>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text>View</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text>Edit</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text>Dup</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text>Del</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        paddingTop: 20,
    },
    buttonContainer: {
        flexDirection: "row",
    },
    button: {
        borderWidth: 1,
        width: "25%",
        height: 40,
        alignItems: "center",
        justifyContent: "center",
    },
});
