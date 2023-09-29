import { StyleSheet, Text, View } from "react-native";

export default function KeywordView({ keywords, factionKey }) {
    return (
        <View>
            <View style={[styles.keywordContainer, { marginBottom: 5 }]}>
                <Text style={{ fontSize: 12 }}>Faction Keywords: </Text>
                {factionKey?.map((item, index) => {
                    return (
                        <Text style={styles.keyText} key={index}>
                            {item}
                        </Text>
                    );
                })}
            </View>

            <View style={[styles.keywordContainer, { marginBottom: 15 }]}>
                <Text style={{ fontSize: 12 }}>Keywords: </Text>
                {keywords?.map((word, index) => {
                    return (
                        <Text key={index} style={styles.keyText}>
                            {word}
                        </Text>
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
