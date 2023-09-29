import { StyleSheet, Text, View } from "react-native";
import { useRecoilState } from "recoil";
import { listArmyState, unitEditState } from "../../Atoms";
import LeaderCheckbox from "./LeaderCheckbox";
import { useEffect } from "react";

export default function LeaderRule() {
    const [list, setList] = useRecoilState(listArmyState);
    const [unitEdit, setUnitEdit] = useRecoilState(unitEditState);

    // useEffect(() => {}, [unitEdit]);

    return (
        <View style={{ marginTop: 10 }}>
            <Text style={styles.title}>Assign Leader</Text>

            {list.roster.map((item, index) => {
                if (
                    (item.org === "HQ" &&
                        item.leader.includes(unitEdit.unit.name)) ||
                    (item.org === "Character" &&
                        item.leader.includes(unitEdit.unit.name))
                ) {
                    return <LeaderCheckbox key={index} item={item} />;
                }
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        backgroundColor: "#000",
        width: "95%",
        marginLeft: 10,
        color: "#fff",
        textAlign: "center",
        paddingVertical: 10,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
    },
    check: {
        width: "95%",
        margin: 0,
        justifyContent: "space-between",
    },
});
