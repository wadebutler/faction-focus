import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RecoilRoot } from "recoil";
import Home from "./Screens/home-screen";
import ArmySelect from "./Screens/Wizard/ArmySelectScreen";
import ListBuilder from "./Screens/ListBuilder/ListBuilderScreen";
import DetachmentSelect from "./Screens/Wizard/DetachmentSelectScreen";
import PointSelect from "./Screens/Wizard/PointSelectScreen";
import Confirm from "./Screens/Wizard/ConfirmScreen";
import UnitSelect from "./Screens/ListBuilder/UnitSelectScreen";
import ViewUnit from "./Screens/ListBuilder/UnitViewScreen";
import EditUnit from "./Screens/ListBuilder/UnitEditScreen";
import { StatusBar } from "react-native";
import Detachment from "./Screens/ListBuilder/DetachmentScreen";
import AllySelect from "./Screens/ListBuilder/AllySelectScreen";
import ArmyRule from "./Screens/ListBuilder/ArmyRuleScreen";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <RecoilRoot>
            <NavigationContainer>
                <StatusBar backgroundColor={"#000"} />
                <Stack.Navigator>
                    <Stack.Screen
                        name="Home"
                        component={Home}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="PointSelect"
                        component={PointSelect}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="ArmySelect"
                        component={ArmySelect}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="DetachmentSelect"
                        component={DetachmentSelect}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Confirm"
                        component={Confirm}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="ListBuilder"
                        component={ListBuilder}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="UnitSelect"
                        component={UnitSelect}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="ViewUnit"
                        component={ViewUnit}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="EditUnit"
                        component={EditUnit}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Detachment"
                        component={Detachment}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Rule"
                        component={ArmyRule}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Ally"
                        component={AllySelect}
                        options={{ headerShown: false }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </RecoilRoot>
    );
}
