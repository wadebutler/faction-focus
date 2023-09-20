import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useRecoilState } from "recoil";
import { orgIdState } from "../../Atoms";
import { listArmyState } from "../../Atoms";
import data from "../../Archive/index.json";
import { useEffect, useState } from "react";
import UnitSelectBar from "../ListBuilder/UnitSelectBar";
import { unitViewState } from "../../Atoms";

export default function AbilityView() {
    return <View></View>;
}

const styles = StyleSheet.create({});
