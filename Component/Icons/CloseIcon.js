import { AntDesign } from "@expo/vector-icons";

export default function CloseIcon({ color }) {
    return <AntDesign name="close" size={24} color={color ? color : "white"} />;
}
