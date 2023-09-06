import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RecoilRoot } from "recoil";
import Home from "./Screens/home-screen";
import ArmySelect from "./Screens/army-select-screen";
import ListBuilder from "./Screens/list-builder-screen";
import DetachmentSelect from "./Screens/detachment-select-screen";

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
