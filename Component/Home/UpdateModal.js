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
                    eventually this is only a temporary solution. any other
                    questions can be directed to the below reddit post or you
                    can contact Jank Hammer at the Below email.
                </FFText>

                <View style={{ marginBottom: 10 }}>
                    <FFText>Factions added</FFText>
                    <FFText>-Orks</FFText>
                </View>

                <A
                    style={styles.linkText}
                    href="https://www.reddit.com/r/deathguard40k/comments/17fj32p/help_from_my_stinky_brothers/"
                >
                    Post on Reddit
                </A>

                <A style={styles.linkText} href="mailto:jankxhammer@gmail.com">
                    Email Jank Hammer
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
