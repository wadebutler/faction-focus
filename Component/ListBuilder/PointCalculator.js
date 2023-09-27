import { StyleSheet, Text, View } from "react-native";
import { useRecoilState } from "recoil";
import { listArmyState } from "../../Atoms";
import { useEffect, useState } from "react";

export default function PointCalculator() {
    const [list, setList] = useRecoilState(listArmyState);
    const [points, setPoints] = useState(0);

    useEffect(() => {
        let tempArr = [];
        list.roster.map((item) => {
            tempArr.push(item.points);

            if (item.enhancement) {
                tempArr.push(item.enhancement.cost);
            }
        });

        let value = tempArr.reduce((a, b) => a + b, 0);

        setPoints(value);
    }, [list]);

    return (
        <View style={styles.pointContainer}>
            <Text>{points}</Text>
            <Text style={styles.pointSeperator}>/</Text>
            <Text>{list.points.value}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    titleContainer: {
        textAlign: "center",
        marginTop: 10,
        paddingBottom: 10,
        borderBottomWidth: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    title: {
        fontSize: 20,
    },
    pointContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    pointSeperator: {
        paddingHorizontal: 4,
        fontSize: 20,
    },
    bar: {
        backgroundColor: "orange",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        paddingHorizontal: 20,
    },
});
