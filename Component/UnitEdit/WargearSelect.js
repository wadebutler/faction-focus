import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { CheckBox } from "@rneui/themed";
import { useRecoilState } from "recoil";
import { unitViewState } from "../../Atoms";
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
