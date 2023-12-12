import { StyleSheet, View } from "react-native";
import FFText from "../Global/FFText";

export default function KeywordView({ keywords, factionKey }) {
    return (
        <View style={{ marginTop: 10 }}>
            <View style={[styles.keywordContainer, { marginBottom: 5 }]}>
                <FFText style={{ fontSize: 12 }}>Faction Keywords: </FFText>
                <FFText style={styles.keyText}>{factionKey[0]}</FFText>
            </View>

            <View style={[styles.keywordContainer, { marginBottom: 15 }]}>
                <FFText style={{ fontSize: 12 }}>Keywords: </FFText>
                {keywords?.map((word, index) => {
                    return (
                        <FFText key={index} style={styles.keyText}>
                            {word}
                        </FFText>
                    );
                })}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    keywordContainer: {
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap",
        marginHorizontal: 10,
    },
    keyText: {
        fontSize: 12,
        borderWidth: 1,
        borderColor: "#000",
        borderStyle: "dashed",
        borderRadius: 4,
        paddingTop: 2,
        paddingBottom: 1,
        paddingHorizontal: 4,
        marginLeft: 4,
        marginVertical: 4,
    },
});
