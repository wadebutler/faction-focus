import { StyleSheet, View, Text } from "react-native";
import { useRecoilState } from "recoil";
import { orgIdState, listArmyState, allyRosterState } from "../../Atoms";
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
                    tempArr = [...army.roster];
                }
            });
        });

        setUnits(tempArr);
    }, []);

    return (
        <View style={styles.container}>
            {units?.map((unit, index) => {
                return <UnitSelectBar item={unit} key={index} />;
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
        backgroundColor: "#000",
    },
});
