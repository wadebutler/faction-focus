import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useRecoilState } from "recoil";
import { listArmyState, allyRosterState } from "../../Atoms";
import { useEffect, useState } from "react";
import data from "../../Archive/index.json";
import PlusIcon from "../Icons/PlusIcon";

export default function AllyBar({ id, keyword }) {
    const navigation = useNavigation();
    const [allyRoster, setAllyRoster] = useRecoilState(allyRosterState);
    const [allies, setAllies] = useState(null);
    const [list, setList] = useRecoilState(listArmyState);

    const handleNavigation = () => {
        let tempObj = { keyword: keyword, roster: allies.roster };
        setAllyRoster(tempObj);
        navigation.navigate("Ally");
    };

    useEffect(() => {
        data.map((item) => {
            if (item.id === id) {
                setAllies(item);
            }
        });
    }, []);

    return (
        <TouchableOpacity onPress={() => handleNavigation()} style={styles.bar}>
            <Text>Ally {allies?.name}</Text>

            <View style={styles.button}>
                <PlusIcon />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    bar: {
        backgroundColor: "orange",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: 30,
    },
    button: {
        height: 50,
        width: 80,
        alignItems: "center",
        justifyContent: "center",
    },
});
