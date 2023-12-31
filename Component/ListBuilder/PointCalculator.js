import { StyleSheet, View } from "react-native";
import { useRecoilState } from "recoil";
import { listArmyState } from "../../Atoms";
import { useEffect, useState } from "react";
import FFText from "../Global/FFText";

export default function PointCalculator() {
    const [list, setList] = useRecoilState(listArmyState);
    const [points, setPoints] = useState(0);

    useEffect(() => {
        let tempArr = [];
        list.roster.map((item) => {
            tempArr.push(item.points[item.modelCountIndex]);

            if (item.enhancement?.cost) {
                tempArr.push(item.enhancement.cost);
            }
        });

        let value = tempArr.reduce((a, b) => a + b, 0);

        setPoints(value);
    }, [list]);

    return (
        <View style={styles.pointContainer}>
            <FFText>{points}</FFText>
            <FFText style={styles.pointSeperator}>/</FFText>
            <FFText>{list.points.value} Points</FFText>
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
        backgroundColor: "#69a1bf",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        paddingHorizontal: 20,
    },
});
