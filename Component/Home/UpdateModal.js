import { StyleSheet, TouchableOpacity, View } from "react-native";
import FFText from "../Global/FFText";
import { A } from "@expo/html-elements";
import CloseIcon from "../Icons/CloseIcon";

export default function UpdateModal({ expand, handleExpand }) {
    return (
        <View
            style={[
                styles.modalContainer,
                !expand ? { height: 0 } : { height: "100%" },
            ]}
        >
            {!expand ? null : (
                <TouchableOpacity
                    onPress={handleExpand}
                    style={styles.closeButton}
                >
                    <CloseIcon color={"black"} />
                </TouchableOpacity>
            )}

            <View style={styles.container}>
                <FFText style={{ marginVertical: 20 }}>
                    if data is missing or not updated try deleting the unit or
                    list and re-adding, the app will update all your lists
                    eventually this is only a temporary solution.
                </FFText>

                {/* <View style={{ marginBottom: 10 }}>
                    <FFText>Factions added</FFText>
                    <FFText>-Orks</FFText>
                </View> */}

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
