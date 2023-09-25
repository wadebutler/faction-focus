import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useRecoilState } from "recoil";
import { listArmyState } from "../../Atoms";
import Bar from "../../Component/ListBuilder/Bar";
import UnitList from "../../Component/ListBuilder/UnitList";
import { useEffect } from "react";

export default function ListBuilder() {
    const [list, setList] = useRecoilState(listArmyState);

    useEffect(() => {}, [list]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{list?.title}</Text>

            <ScrollView>
                <Bar title={"HQ"} />
                {list?.roster.map((item, index) => {
                    if (item.org === "HQ") {
                        return (
                            <UnitList
                                org={"HQ"}
                                unit={item}
                                key={index}
                                id={index}
                            />
                        );
                    }
                })}

                <Bar title={"Battleline"} />
                {list?.roster.map((item, index) => {
                    if (item.org === "Battleline") {
                        return (
                            <UnitList
                                org={"Battleline"}
                                unit={item}
                                key={index}
                                id={index}
                            />
                        );
                    }
                })}

                <Bar title={"Infantry"} />
                {list?.roster.map((item, index) => {
                    if (item.org === "Infantry") {
                        return (
                            <UnitList
                                org={"Infantry"}
                                unit={item}
                                key={index}
                                id={index}
                            />
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
                                key={index}
                                id={index}
                            />
                        );
                    }
                })}

                <Bar title={"Vehicle"} />
                {list?.roster.map((item, index) => {
                    if (item.org === "Vehicle") {
                        return (
                            <UnitList
                                org={"Vehicle"}
                                unit={item}
                                key={index}
                                id={index}
                            />
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
        marginTop: 10,
        paddingBottom: 10,
        fontSize: 20,
        borderBottomWidth: 1,
    },
    bar: {
        backgroundColor: "orange",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        paddingHorizontal: 20,
    },
});
