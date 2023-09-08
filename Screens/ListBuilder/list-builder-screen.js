import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useRecoilState } from "recoil";
import { listArmyState } from "../../Atoms";
import Bar from "../../Component/ListBuilder/Bar";
import { rosterArmyState } from "../../Atoms";

export default function ListBuilder() {
    const [list, setList] = useRecoilState(listArmyState);
    const [roster, setRoster] = useRecoilState(rosterArmyState);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{list.title}</Text>

            <Bar title={"Rules"} />

            {roster.roster.map((item) => {
                return <Bar title={item.id} key={item.id} />;
            })}
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
