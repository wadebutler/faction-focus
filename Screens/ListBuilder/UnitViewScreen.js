import { ScrollView, StyleSheet } from "react-native";
import { useRecoilState } from "recoil";
import { unitViewState } from "../../Atoms";
import UnitStatRow from "../../Component/UnitView/UnitStatRow";
import WeaponStats from "../../Component/UnitView/WeaponStats";
import AbilityView from "../../Component/UnitView/AbilityView";
import KeywordView from "../../Component/UnitView/KeywordView";
import { useEffect } from "react";

export default function UnitView() {
    const [unitView, setUnitView] = useRecoilState(unitViewState);

    useEffect(() => {}, [unitView]);

    return (
        <ScrollView>
            <UnitStatRow unit={unitView} name={unitView?.name} />
            <AbilityView ability={unitView.ability} />
            <WeaponStats weapon={unitView.ranged} type={"r"} />
            <WeaponStats weapon={unitView.melee} type={"m"} />
            <KeywordView
                keywords={unitView.keywords}
                factionKey={unitView.factionKey}
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({});
