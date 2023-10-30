import { ScrollView, StyleSheet } from "react-native";
import { useRecoilState } from "recoil";
import { unitViewState, listArmyState } from "../../Atoms";
import UnitStatRow from "../../Component/UnitView/UnitStatRow";
import WeaponStats from "../../Component/UnitView/WeaponStats";
import AbilityView from "../../Component/UnitView/AbilityView";
import KeywordView from "../../Component/UnitView/KeywordView";
import EnhancementView from "../../Component/UnitView/EnhancementView";
import MarkView from "../../Component/UnitView/MarkView";
import ChaosMarkView from "../../Component/UnitView/ChasoMarkView";

export default function UnitView() {
    const [unitView, setUnitView] = useRecoilState(unitViewState);
    const [list, setList] = useRecoilState(listArmyState);

    return (
        <ScrollView>
            <UnitStatRow unit={unitView} name={unitView?.name} />

            <AbilityView ability={unitView.ability} org={unitView.org} />

            {!unitView.enhancement ? null : (
                <EnhancementView item={unitView.enhancement} />
            )}

            {!unitView?.allegiance ? null : (
                <MarkView item={unitView.allegiance[unitView.allegianceKey]} />
            )}

            {unitView?.allegianceKey &&
            unitView.factionKey.includes(list.name) ? (
                <ChaosMarkView item={unitView.allegianceKey} />
            ) : null}

            {!unitView?.ranged ? null : (
                <WeaponStats weapon={unitView.ranged} type={"r"} />
            )}

            {!unitView.melee ? null : (
                <WeaponStats weapon={unitView.melee} type={"m"} />
            )}

            <KeywordView
                keywords={unitView.keywords}
                factionKey={unitView.factionKey}
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({});
