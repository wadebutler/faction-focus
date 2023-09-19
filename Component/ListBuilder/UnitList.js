import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRecoilState } from "recoil";
import { listArmyState } from "../../Atoms";
import { orgIdState } from "../../Atoms";
import { useEffect, useState } from "react";

export default function UnitList({ org, unit, id }) {
    const [list, setList] = useRecoilState(listArmyState);

    // const handleDelete = (unit) => {
    //     let tempObj = {
    //         army: list.army,
    //         detachment: list.detachment,
    //         id: list.id,
    //         points: list.points,
    //         roster: [...list.roster],
    //         title: list.title,
    //         uid: list.uid,
    //     };
    // };

    return (
        <TouchableOpacity style={styles.container} key={id}>
            <View>
                <Text style={{ maxWidth: 200 }}>{unit?.name}</Text>

                <Text>{unit?.points} points</Text>
            </View>

            <View style={styles.buttonContainer}>
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
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
    },
    buttonContainer: {
        flexDirection: "row",
    },
    button: {
        borderWidth: 1,
        borderRadius: 4,
        width: 50,
        height: 50,
        marginLeft: 15,
        alignItems: "center",
        justifyContent: "center",
    },
});
