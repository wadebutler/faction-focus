import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useRecoilState } from "recoil";
import { listArmyState } from "../../Atoms";
import Bar from "../../Component/ListBuilder/Bar";

export default function ListBuilder() {
    const [list, setList] = useRecoilState(listArmyState);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{list.title}</Text>

            <Bar title={"HQ"} />
            <Bar title={"Battleline"} />
            <Bar title={"Infantry"} />
            <Bar title={"Character"} />
            <Bar title={"Vehicle"} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        textAlign: "center",
        marginTop: 40,
        paddingBottom: 10,
        fontSize: 20,
    },
    bar: {
        backgroundColor: "orange",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        paddingRight: 20,
        paddingLeft: 20,
    },
});
