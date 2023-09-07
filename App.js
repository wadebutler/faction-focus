import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RecoilRoot } from "recoil";
import Home from "./Screens/home-screen";
import ArmySelect from "./Screens/Wizard/army-select-screen";
import ListBuilder from "./Screens/list-builder-screen";
import DetachmentSelect from "./Screens/Wizard/detachment-select-screen";
import PointSelect from "./Screens/Wizard/point-select-screen";
import Confirm from "./Screens/Wizard/confirm-screen";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <RecoilRoot>
            <NavigationContainer>
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
                </Stack.Navigator>
            </NavigationContainer>
        </RecoilRoot>
    );
}

// const styles = StyleSheet.create({

// });
