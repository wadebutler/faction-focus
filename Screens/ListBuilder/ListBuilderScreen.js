import { ScrollView, StyleSheet, View } from "react-native";
import { useRecoilState } from "recoil";
import { listArmyState } from "../../Atoms";
import Bar from "../../Component/ListBuilder/Bar";
import RuleBar from "../../Component/ListBuilder/RuleBar";
import UnitCard from "../../Component/ListBuilder/UnitCard";
import PointCalculator from "../../Component/ListBuilder/PointCalculator";
import FFText from "../../Component/Global/FFText";
import data from "../../Archive/index.json";
import { useEffect, useState } from "react";
import GoBack from "../../Component/Global/GoBack";
import strats from "../../Archive/strats.json";

export default function ListBuilder() {
    const [list, setList] = useRecoilState(listArmyState);
    const [orgList, setOrgList] = useState([]);

    useEffect(() => {
        let tempList = [];

        data.map((army) => {
            if (army.id === list.id) {
                army.roster.map((unit) => {
                    if (!tempList.includes(unit.org)) {
                        tempList.push(unit.org);
                    }
                });
            }
        });

        setOrgList(tempList);
    }, []);

    return (
        <View style={styles.container}>
            <GoBack />

            <View style={styles.titleContainer}>
                <FFText line={1} style={styles.title}>
                    {list?.title}
                </FFText>

                <PointCalculator />
            </View>

            <ScrollView>
                <RuleBar title={"Army Rule"} item={list.rule} />
                <RuleBar title={"Detachment Rules"} item={list.detachment} />
                <RuleBar title={"Core Stratagems"} item={strats} />

                {!orgList.includes("Character") ? null : (
                    <View>
                        <Bar title={"Character"} />
                        {list?.roster.map((item, index) => {
                            if (
                                item.org === "Character" &&
                                item.factionKey.includes(list.name)
                            ) {
                                return (
                                    <UnitCard
                                        unit={item}
                                        key={index}
                                        id={index}
                                    />
                                );
                            }
                        })}
                    </View>
                )}

                {!orgList.includes("Battleline") ? null : (
                    <View>
                        <Bar title={"Battleline"} />
                        {list?.roster.map((item, index) => {
                            if (
                                item.org === "Battleline" &&
                                item.factionKey.includes(list.name)
                            ) {
                                return (
                                    <UnitCard
                                        unit={item}
                                        key={index}
                                        id={index}
                                    />
                                );
                            }
                        })}
                    </View>
                )}

                {!orgList.includes("Infantry") ? null : (
                    <View>
                        <Bar title={"Infantry"} />
                        {list?.roster.map((item, index) => {
                            if (
                                item.org === "Infantry" &&
                                item.factionKey.includes(list.name)
                            ) {
                                return (
                                    <UnitCard
                                        unit={item}
                                        key={index}
                                        id={index}
                                    />
                                );
                            }
                        })}
                    </View>
                )}

                {!orgList.includes("Mounted") ? null : (
                    <View>
                        <Bar title={"Mounted"} />
                        {list?.roster.map((item, index) => {
                            if (
                                item.org === "Mounted" &&
                                item.factionKey.includes(list.name)
                            ) {
                                return (
                                    <UnitCard
                                        unit={item}
                                        key={index}
                                        id={index}
                                    />
                                );
                            }
                        })}
                    </View>
                )}

                {!orgList.includes("Vehicle") ? null : (
                    <View>
                        <Bar title={"Vehicle"} />
                        {list?.roster.map((item, index) => {
                            if (
                                item.org === "Vehicle" &&
                                item.factionKey.includes(list.name)
                            ) {
                                return (
                                    <UnitCard
                                        unit={item}
                                        key={index}
                                        id={index}
                                    />
                                );
                            }
                        })}
                    </View>
                )}

                {!orgList.includes("Beast") ? null : (
                    <View>
                        <Bar title={"Beast"} />
                        {list?.roster.map((item, index) => {
                            if (
                                item.org === "Beast" &&
                                item.factionKey.includes(list.name)
                            ) {
                                return (
                                    <UnitCard
                                        unit={item}
                                        key={index}
                                        id={index}
                                    />
                                );
                            }
                        })}
                    </View>
                )}

                {!orgList.includes("Monster") ? null : (
                    <View>
                        <Bar title={"Monster"} />
                        {list?.roster.map((item, index) => {
                            if (
                                item.org === "Monster" &&
                                item.factionKey.includes(list.name)
                            ) {
                                return (
                                    <UnitCard
                                        unit={item}
                                        key={index}
                                        id={index}
                                    />
                                );
                            }
                        })}
                    </View>
                )}

                {list.id !== "TE" ? null : (
                    <View>
                        <Bar title={"Drones"} />
                        {list?.roster.map((item, index) => {
                            if (
                                item.org === "Drones" &&
                                item.factionKey.includes(list.name)
                            ) {
                                return (
                                    <UnitCard
                                        unit={item}
                                        key={index}
                                        id={index}
                                    />
                                );
                            }
                        })}
                    </View>
                )}

                {!list.allies ? null : (
                    <View>
                        <Bar title={"Allies"} />
                        {list?.roster.map((item, index) => {
                            if (!item.factionKey.includes(list.name)) {
                                return (
                                    <UnitCard
                                        unit={item}
                                        key={index}
                                        id={index}
                                    />
                                );
                            }
                        })}
                    </View>
                )}

                {/* {!orgList.includes("Fortification") ? null : (
                    <View>
                        <Bar title={"Fortification"} />
                        {list?.roster.map((item, index) => {
                            if (
                                item.org === "Fortification" &&
                                item.factionKey.includes(list.name)
                            ) {
                                return (
                                    <UnitCard
                                        unit={item}
                                        key={index}
                                        id={index}
                                    />
                                );
                            }
                        })}
                    </View>
                )} */}
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
        paddingLeft: 40,
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
        backgroundColor: "#69a1bf",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        paddingHorizontal: 20,
    },
});
