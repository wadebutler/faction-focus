import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useRecoilState } from "recoil";
import { orgIdState } from "../../Atoms";
import { listArmyState } from "../../Atoms";
import UnitCard from "../../Component/ListBuilder/UnitCard";
import data from "../../Archive/index.json";
import { useEffect, useState } from "react";

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
            {units?.map((item) => {
                if (item.org === orgId) {
                    return <UnitCard item={item} />;
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
