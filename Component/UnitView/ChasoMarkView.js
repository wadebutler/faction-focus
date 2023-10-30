import { StyleSheet, View } from "react-native";
import FFText from "../Global/FFText";
import { useRecoilState } from "recoil";
import { listArmyState } from "../../Atoms";

export default function ChaosMarkView({ item }) {
    const [list, setList] = useRecoilState(listArmyState);

    return (
        <View style={{ marginHorizontal: 10 }}>
            <FFText style={styles.abilityName}>Mark of Chaos - {item}</FFText>

            {list.detachment.select.options.map((mark, index) => {
                if (mark.title === item) {
                    return (
                        <FFText key={index} style={styles.effectText}>
                            {mark.effect}
                        </FFText>
                    );
                }
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    abilityName: {
        color: "#fff",
        backgroundColor: "#000",
        textAlign: "center",
        padding: 4,
        borderTopRightRadius: 4,
        borderTopLeftRadius: 4,
    },
    effectText: {
        padding: 10,
        backgroundColor: "orange",
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
        marginBottom: 20,
    },
});
