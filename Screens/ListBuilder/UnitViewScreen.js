import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useRecoilState } from "recoil";
import { orgIdState } from "../../Atoms";
import { listArmyState } from "../../Atoms";
import data from "../../Archive/index.json";
import { useEffect, useState } from "react";
import UnitSelectBar from "../../Component/ListBuilder/UnitSelectBar";
import { unitViewState } from "../../Atoms";
import UnitStatRow from "../../Component/UnitView/UnitStatRow";
import WeaponView from "../../Component/UnitView/WeaponView";
import AbilityView from "../../Component/UnitView/AbilityView";
import KeywordView from "../../Component/UnitView/KeywordView";

export default function UnitViewUnit() {
    const [unitView, setUnitView] = useRecoilState(unitViewState);

    return (
        <ScrollView>
            <UnitStatRow unit={unitView} name={unitView?.name} />
            <AbilityView ability={unitView.ability} />
            <WeaponView weapon={unitView.ranged} type={"r"} />
            <WeaponView weapon={unitView.melee} type={"m"} />
            <KeywordView keywords={unitView.keywords} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({});
