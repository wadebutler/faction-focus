import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { CheckBox } from "@rneui/themed";
import { useRecoilState } from "recoil";
import { unitViewState } from "../../Atoms";
import WeaponCheckbox from "./WeaponCheckbox";

export default function WargearSelect({ type }) {
    const [unitView, setUnitView] = useRecoilState(unitViewState);

    return (
        <View style={{ marginBottom: 20 }}>
            <Text
                style={[styles.title, type === "r" ? { marginTop: 20 } : null]}
            >
                {type === "r" ? "Ranged" : "Melee"}
            </Text>
            {type === "r"
                ? unitView.ranged.map((item, index) => {
                      return (
                          <WeaponCheckbox
                              keyId={index}
                              item={item}
                              disabled={unitView.ranged.length}
                          />
                      );
                  })
                : unitView.melee.map((item, index) => {
                      return (
                          <WeaponCheckbox
                              keyId={index}
                              item={item}
                              disabled={unitView.melee.length}
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
