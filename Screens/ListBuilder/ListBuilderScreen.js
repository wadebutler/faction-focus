import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useRecoilState } from "recoil";
import { listArmyState } from "../../Atoms";
import Bar from "../../Component/ListBuilder/Bar";
import RuleBar from "../../Component/ListBuilder/RuleBar";
import UnitList from "../../Component/ListBuilder/UnitList";
import PointCalculator from "../../Component/ListBuilder/PointCalculator";
import AllyBar from "../../Component/ListBuilder/AllyBar";

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
                <RuleBar title={"Army Rule"} item={list.rule} />
                <RuleBar title={"Detachment Rules"} item={list.detachment} />

                <Bar title={"Character"} />
                {list?.roster.map((item, index) => {
                    if (
                        item.org === "Character" &&
                        list.name === item.factionKey[0]
                    ) {
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

                <Bar title={"Battleline"} />
                {list?.roster.map((item, index) => {
                    if (
                        item.org === "Battleline" &&
                        list.name === item.factionKey[0]
                    ) {
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
                    if (
                        item.org === "Infantry" &&
                        list.name === item.factionKey[0]
                    ) {
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

                <Bar title={"Vehicle"} />
                {list?.roster.map((item, index) => {
                    if (
                        item.org === "Vehicle" &&
                        list.name === item.factionKey[0]
                    ) {
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

                <Bar title={"Fortification"} />
                {list?.roster.map((item, index) => {
                    if (
                        item.org === "Fortification" &&
                        list.name === item.factionKey[0]
                    ) {
                        return (
                            <UnitList
                                org={"Fortification"}
                                unit={item}
                                key={index}
                                id={index}
                            />
                        );
                    }
                })}
                {/* {list?.allies.map((item, index) => {
                    return (
                        <AllyBar
                            key={index}
                            id={item.id}
                            keyword={item.keyword}
                        />
                    );
                })} */}
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
        padding: 10,
        borderBottomWidth: 1,
        flexDirection: "row",
        justifyContent: "space-between",
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
