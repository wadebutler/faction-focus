import { StyleSheet, TouchableOpacity, View } from "react-native";
import FFText from "../Global/FFText";
import { A } from "@expo/html-elements";
import CloseIcon from "../Icons/CloseIcon";

export default function Modal({ expand, handleExpand }) {
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
                <FFText style={{ marginTop: 20 }}>
                    this data was updated as of October 25, 2023
                </FFText>

                <View style={{ marginVertical: 20 }}>
                    <FFText>Factions added</FFText>
                    <FFText>-Thousand sons</FFText>
                </View>

                <FFText>
                    if data is missing try deleting the unit or list and
                    re-adding it otherwise you can use one of the below contact
                    methods
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
