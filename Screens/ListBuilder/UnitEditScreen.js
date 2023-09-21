import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { useRecoilState } from "recoil";
import { unitViewState } from "../../Atoms";
import UnitStatRow from "../../Component/UnitView/UnitStatRow";
import WeaponStats from "../../Component/UnitView/WeaponStats";
import AbilityView from "../../Component/UnitView/AbilityView";
import KeywordView from "../../Component/UnitView/KeywordView";

export default function UnitEdit() {
    const [unitView, setUnitView] = useRecoilState(unitViewState);

    return (
        <View>
            <UnitStatRow unit={unitView} name={unitView?.name} />
        </View>
    );
}

const styles = StyleSheet.create({});
