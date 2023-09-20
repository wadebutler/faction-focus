import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { useRecoilState } from "recoil";
import { listArmyState } from "../../Atoms";
import Bar from "../../Component/ListBuilder/Bar";
import UnitList from "../../Component/ListBuilder/UnitList";

export default function ListBuilder() {
    const [list, setList] = useRecoilState(listArmyState);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{list?.title}</Text>

            <ScrollView>
                <Bar title={"HQ"} />
                {list?.roster.map((item, index) => {
                    if (item.org === "HQ") {
                        return <UnitList org={"HQ"} unit={item} id={index} />;
                    }
                })}

                <Bar title={"Battleline"} />
                {list?.roster.map((item, index) => {
                    if (item.org === "Battleline") {
                        return (
                            <UnitList
                                org={"Battleline"}
                                unit={item}
                                id={index}
                            />
                        );
                    }
                })}

                <Bar title={"Infantry"} />
                {list?.roster.map((item, index) => {
                    if (item.org === "Infantry") {
                        return (
                            <UnitList org={"Infantry"} unit={item} id={index} />
                        );
                    }
                })}

                <Bar title={"Character"} />
                {list?.roster.map((item, index) => {
                    if (item.org === "Character") {
                        return (
                            <UnitList
                                org={"Character"}
                                unit={item}
                                id={index}
                            />
                        );
                    }
                })}

                <Bar title={"Vehicle"} />
                {list?.roster.map((item, index) => {
                    if (item.org === "Vehicle") {
                        return (
                            <UnitList org={"Vehicle"} unit={item} id={index} />
                        );
                    }
                })}
            </ScrollView>
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
        borderBottomWidth: 1,
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
