import { ScrollView, StyleSheet, View } from "react-native";
import { useRecoilState } from "recoil";
import { listArmyState, allyRosterState } from "../../Atoms";
import { useEffect, useState } from "react";
import data from "../../Archive/index.json";
import UnitSelectBar from "../../Component/ListBuilder/UnitSelectBar";

export default function AllySelect() {
    const [list, setList] = useRecoilState(listArmyState);
    const [allyRoster, setAllyRoster] = useRecoilState(allyRosterState);
    const [units, setUnits] = useState(null);

    useEffect(() => {
        let tempArr = [];

        list.allies.map((ally) => {
            data.map((army) => {
                if (ally.id === army.id) {
                    army.roster.map((unit) => {
                        if (ally.keyword) {
                            if (unit.keywords.includes(ally.keyword)) {
                                tempArr.push(unit);
                            }
                        } else {
                            tempArr.push(unit);
                        }
                    });
                }
            });
        });

        setUnits(tempArr);
    }, []);

    return (
        <ScrollView style={styles.container}>
            {units?.map((unit, index) => {
                return <UnitSelectBar item={unit} key={index} />;
            })}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
        backgroundColor: "#000",
    },
});
