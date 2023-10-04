import { StyleSheet, Text, View } from "react-native";
import { unitEditState } from "../../Atoms";
import { useRecoilState } from "recoil";
import UnitSizeCheckbox from "./UnitSizeCheckbox";

export default function UnitSize() {
    const [unitEdit, setEditView] = useRecoilState(unitEditState);

    return (
        <View style={{ marginTop: 10 }}>
            <Text style={styles.title}>Unit Size</Text>

            {unitEdit?.unit.modelCount.map((item, index) => {
                return (
                    <UnitSizeCheckbox key={index} item={item} keyId={index} />
                );
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
});
