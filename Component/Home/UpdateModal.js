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
                <FFText>
                    A big thanks to KushPatel from the discord for doing the
                    points for da boys! so enjoy some orky goodness!
                </FFText>

                <A style={styles.linkText} href="https://discord.gg/v3kszadk">
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
