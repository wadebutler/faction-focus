import { StyleSheet, TouchableOpacity, View } from "react-native";
import FFText from "../Global/FFText";
import { A } from "@expo/html-elements";

export default function UpdateModal({ expand, handleExpand }) {
    return (
        <View
            style={[
                styles.modalContainer,
                !expand ? { height: 0 } : { height: "100%" },
            ]}
        >
            <View style={styles.container}>
                <FFText>-did some bug fixes to leader checkbox</FFText>
                <FFText>-put core strats in alphabetical order</FFText>
                <FFText>
                    -copy army list to clipboard button V2 now live!
                </FFText>

                <A style={styles.linkText} href="https://discord.gg/nQESuGNB">
                    Join the Discord
                </A>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        paddingHorizontal: 10,
    },
    linkText: {
        marginTop: 10,
        color: "blue",
        fontSize: 20,
    },
    closeButton: {
        position: "absolute",
        right: 10,
        top: 40,
    },
});
