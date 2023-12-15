import { Entypo } from "@expo/vector-icons";

export default function TrashIcon({ color }) {
    return <Entypo name="trash" size={24} color={color ? color : "white"} />;
}
