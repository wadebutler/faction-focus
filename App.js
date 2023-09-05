import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Home from "./src/Screens/home-screen";
import ArmySelect from "./src/Screens/army-select-screen";
import ListBuilder from "./src/Screens/list-builder-screen";
import DetachmentSelect from "./src/Screens/detachment-select-screen";

export default function App() {
    // return <Home />;
    // return <ArmySelect />;
    return <DetachmentSelect />;
    // return <ListBuilder />;
}

// const styles = StyleSheet.create({

// });
