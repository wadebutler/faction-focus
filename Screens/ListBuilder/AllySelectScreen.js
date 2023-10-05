import { StyleSheet, View, Text } from "react-native";
import { useRecoilState } from "recoil";
import { orgIdState, listArmyState, allyRosterState } from "../../Atoms";
import { useEffect, useState } from "react";
import UnitSelectBar from "../../Component/ListBuilder/UnitSelectBar";

export default function AllySelect() {
    const [orgId, setOrgId] = useRecoilState(orgIdState);
    const [list, setList] = useRecoilState(listArmyState);
    const [allyRoster, setAllyRoster] = useRecoilState(allyRosterState);
    const [units, setUnits] = useState(null);

    useEffect(() => {
        setUnits([...allyRoster.roster]);
    }, []);

    return (
        <View style={styles.container}>
            {units?.map((item, index) => {
                return <UnitSelectBar item={item} key={index} />;
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
