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
                    to see the latest information you will need to delete your
                    old lists
                </FFText>

                <FFText style={{ marginVertical: 20 }}>
                    due to my personal busy schedule I will only be updating the
                    Chaos Factions, I don't have plans to maintain data for
                    other factions currently, if you want your factions added
                    back or updated reach out to me on discord.
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
