import { ScrollView, StyleSheet, View } from "react-native";
import { useRecoilState } from "recoil";
import { orgIdState, listArmyState } from "../../Atoms";
import data from "../../Archive/index.json";
import { useEffect, useState } from "react";
import UnitSelectBar from "../../Component/ListBuilder/UnitSelectBar";
import GoBack from "../../Component/Global/GoBack";

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
        <ScrollView style={styles.container}>
            <GoBack color={"white"} />

            <View style={{ marginTop: 40 }}>
                {units?.map((item, index) => {
                    if (item.org === orgId) {
                        return <UnitSelectBar item={item} key={index} />;
                    }
                })}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
        paddingBottom: 20,
        backgroundColor: "#000",
    },
});
