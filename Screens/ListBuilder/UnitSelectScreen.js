import { StyleSheet, View, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useRecoilState } from "recoil";
import { orgIdState } from "../../Atoms";
import { listArmyState } from "../../Atoms";
import data from "../../Archive/index.json";
import { useEffect, useState } from "react";
import UnitSelectBar from "../../Component/ListBuilder/UnitSelectBar";

export default function UnitSelect() {
    const [orgId, setOrgId] = useRecoilState(orgIdState);
    const [list, setList] = useRecoilState(listArmyState);
    const [units, setUnits] = useState(null);

    useEffect(() => {
        data.map((item) => {
            if (item.id === list.id) {
                setUnits(item.roster);
            }
        });
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                data={units}
                renderItem={({ item }) => {
                    console.log(item);
                    if (item.org === orgId) {
                        return <UnitSelectBar item={item} />;
                    }
                }}
                keyExtractor={(item) => item.uid}
            />
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
