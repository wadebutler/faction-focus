import { StyleSheet, Text, View } from "react-native";

export default function KeywordView({ keywords }) {
    return (
        <View style={styles.keywordContainer}>
            <Text style={{ fontSize: 12 }}>Keywords: </Text>
            {keywords.map((word, index) => {
                return (
                    <Text key={index} style={styles.keyText}>
                        {word}
                    </Text>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    keywordContainer: {
        flexDirection: "row",
        paddingTop: 5,
        paddingBottom: 5,
        alignItems: "center",
        flexWrap: "wrap",
        marginHorizontal: 10,
        marginBottom: 15,
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
