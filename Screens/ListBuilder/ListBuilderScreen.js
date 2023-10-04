import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useRecoilState } from "recoil";
import { listArmyState } from "../../Atoms";
import Bar from "../../Component/ListBuilder/Bar";
import RuleBar from "../../Component/ListBuilder/RuleBar";
import UnitList from "../../Component/ListBuilder/UnitList";
import PointCalculator from "../../Component/ListBuilder/PointCalculator";

export default function ListBuilder() {
    const [list, setList] = useRecoilState(listArmyState);

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    style={styles.title}
                >
                    {list?.title}
                </Text>

                <PointCalculator />
            </View>

            <ScrollView>
                {console.log(list)}
                <RuleBar title={"Army Rule"} item={list.rule} />
                <RuleBar title={"Detachment Rules"} item={list.detachment} />

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
        maxWidth: "70%",
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
