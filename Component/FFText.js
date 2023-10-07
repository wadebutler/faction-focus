import { StyleSheet, Text } from "react-native";

export default function FFText(props) {
    return <Text style={[props.style, styles.text]}>{props.children}</Text>;
}

const styles = StyleSheet.create({
    text: {},
});
