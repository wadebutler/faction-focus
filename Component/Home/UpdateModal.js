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
                    IMPORTANT USER NOTICE
                </FFText>
                <FFText>
                    due to persistant issues when adding new units and data I
                    did an update to the apps functionality and this will
                    require you to delete and re-add your lists. I'm hoping this
                    update will mean no more deleting lists going forward, at
                    least until a major dataslate change.
                </FFText>

                <View style={{ marginVertical: 20 }}>
                    <FFText>Factions added</FFText>
                    <FFText>-Thousand sons</FFText>
                    <FFText>-Chaos Space Marines</FFText>
                    <FFText>-Leagues of Votann</FFText>
                </View>

                <View style={{ marginBottom: 20 }}>
                    <FFText>Units added</FFText>
                    <FFText>-Forge World Chaos Knights</FFText>
                </View>

                <FFText style={{ marginBottom: 10 }}>
                    if data is missing or not updated try deleting the unit or
                    list and re-adding, the app will update all your lists
                    eventually this is only a temporary solution. any other
                    questions can be directed to the below reddit post or you
                    can contact Jank Hammer at the Below email.
                </FFText>

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
