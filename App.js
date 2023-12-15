import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
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
import Stratagems from "./Screens/ListBuilder/Stratagems";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import ScoreIcon from "./Component/Icons/ScoreIcon";
import ListIcon from "./Component/Icons/ListIcon";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
    const ListStack = () => {
        return (
            <Stack.Navigator>
                <Stack.Screen name="Home" options={{ headerShown: false }}>
                    {(props) => <Home {...props} />}
                </Stack.Screen>

                <Stack.Screen
                    name="PointSelect"
                    options={{ headerShown: false }}
                >
                    {(props) => <PointSelect {...props} />}
                </Stack.Screen>

                <Stack.Screen
                    name="ArmySelect"
                    options={{ headerShown: false }}
                >
                    {(props) => <ArmySelect {...props} />}
                </Stack.Screen>

                <Stack.Screen
                    name="DetachmentSelect"
                    options={{ headerShown: false }}
                >
                    {(props) => <DetachmentSelect {...props} />}
                </Stack.Screen>

                <Stack.Screen name="Confirm" options={{ headerShown: false }}>
                    {(props) => <Confirm {...props} />}
                </Stack.Screen>

                <Stack.Screen
                    name="ListBuilder"
                    options={{ headerShown: false }}
                >
                    {(props) => <ListBuilder {...props} />}
                </Stack.Screen>

                <Stack.Screen
                    name="UnitSelect"
                    options={{ headerShown: false }}
                >
                    {(props) => <UnitSelect {...props} />}
                </Stack.Screen>

                <Stack.Screen name="ViewUnit" options={{ headerShown: false }}>
                    {(props) => <ViewUnit {...props} />}
                </Stack.Screen>

                <Stack.Screen name="EditUnit" options={{ headerShown: false }}>
                    {(props) => <EditUnit {...props} />}
                </Stack.Screen>

                <Stack.Screen
                    name="Detachment"
                    options={{ headerShown: false }}
                >
                    {(props) => <Detachment {...props} />}
                </Stack.Screen>

                <Stack.Screen name="Rule" options={{ headerShown: false }}>
                    {(props) => <ArmyRule {...props} />}
                </Stack.Screen>

                <Stack.Screen name="Ally" options={{ headerShown: false }}>
                    {(props) => <AllySelect {...props} />}
                </Stack.Screen>

                <Stack.Screen name="Strats" options={{ headerShown: false }}>
                    {(props) => <Stratagems {...props} />}
                </Stack.Screen>
            </Stack.Navigator>
        );
    };

    const ScoreStack = () => {
        return (
            <Stack.Navigator>
                <Stack.Screen
                    name="Score"
                    component={() => {
                        return (
                            <View>
                                <Text>Score</Text>
                            </View>
                        );
                    }}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        );
    };

    return (
        <RecoilRoot>
            <StatusBar backgroundColor={"#000"} />
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen
                        name="list"
                        component={ListStack}
                        options={{
                            tabBarIcon: () => <ListIcon />,
                            headerShown: false,
                        }}
                    />

                    <Tab.Screen
                        name="score"
                        component={ScoreStack}
                        options={{
                            tabBarIcon: () => <ScoreIcon />,
                            headerShown: false,
                        }}
                    />
                </Tab.Navigator>
            </NavigationContainer>
        </RecoilRoot>
    );
}
