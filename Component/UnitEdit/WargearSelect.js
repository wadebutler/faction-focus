import { StyleSheet, View } from "react-native";
import WeaponCheckbox from "./WeaponCheckbox";
import FFText from "../FFText";

export default function WargearSelect({ unit, type }) {
    return (
        <View
            style={
                type === "ranged" || unit.ranged === null || !unit.ranged
                    ? { marginVertical: 10 }
                    : { marginBottom: 10 }
            }
        >
            <FFText
                style={[
                    styles.title,
                    type === "ranged" ? { marginTop: 0 } : null,
                ]}
            >
                {type === "ranged" ? "Ranged" : "Melee"}
            </FFText>
            {type === "ranged"
                ? unit?.ranged.map((item, index) => {
                      return (
                          <WeaponCheckbox
                              key={index}
                              keyId={index}
                              item={item}
                              type={type}
                              disabled={unit?.ranged.length}
                          />
                      );
                  })
                : unit?.melee.map((item, index) => {
                      return (
                          <WeaponCheckbox
                              key={index}
                              keyId={index}
                              item={item}
                              type={type}
                              disabled={unit?.melee.length}
                          />
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
