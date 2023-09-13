import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { unitSelectListState } from "../../Atoms";
import { useRecoilState } from "recoil";
import UnitCard from "../../Component/ListBuilder/UnitCard";

export default function UnitSelect() {
    const navigation = useNavigation();
    const [unitList, setUnitList] = useRecoilState(unitSelectListState);

    return (
        <View style={styles.container}>
            {Object.entries(unitList).map((item) => {
                // if (item[0] !== "id") {
                //     console.log(item);

                // }
                return <UnitCard item={item} key={item.name} />;
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
