import { StyleSheet, Text, View, FlatList } from "react-native";
import WeaponCheckbox from "./WeaponCheckbox";

export default function WargearSelect({ unit, type }) {
    return (
        <View style={{ marginBottom: 20 }}>
            <Text
                style={[
                    styles.title,
                    type === "ranged" ? { marginTop: 20 } : null,
                ]}
            >
                {type === "ranged" ? "Ranged" : "Melee"}
            </Text>
            {type === "ranged" ? (
                <FlatList
                    data={unit?.ranged}
                    renderItem={({ item, index }) => (
                        <WeaponCheckbox
                            keyId={index}
                            item={item}
                            type={type}
                            disabled={unit?.ranged.length}
                        />
                    )}
                    keyExtractor={(item) => item?.uid}
                />
            ) : (
                <FlatList
                    data={unit?.melee}
                    renderItem={({ item, index }) => (
                        <WeaponCheckbox
                            keyId={index}
                            item={item}
                            type={type}
                            disabled={unit?.ranged.length}
                        />
                    )}
                    keyExtractor={(item) => item?.uid}
                />
            )}
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
