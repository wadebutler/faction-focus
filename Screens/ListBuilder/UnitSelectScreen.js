import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useRecoilState } from "recoil";
import { orgIdState } from "../../Atoms";
import { listArmyState } from "../../Atoms";
import data from "../../Archive/index.json";
import { useEffect, useState } from "react";
import UnitSelectBar from "../../Component/ListBuilder/UnitSelectBar";

export default function UnitSelect() {
    const navigation = useNavigation();
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
            {units?.map((item, index) => {
                if (item.org === orgId) {
                    return <UnitSelectBar item={item} id={index} />;
                }
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40,
        backgroundColor: "#000",
    },
});