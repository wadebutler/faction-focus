import AsyncStorage from "@react-native-async-storage/async-storage";

export const handleUnitUpload = async (list) => {
    const tempArr = [];
    const tempData = await AsyncStorage.getItem("lists");
    const listData = tempData ? await JSON.parse(tempData) : null;

    listData.map((listItem) => {
        if (listItem.uid !== list.uid) {
            tempArr.push(listItem);
        }
    });
    tempArr.push(list);
    const data = await JSON.stringify(tempArr);
    await AsyncStorage.setItem("lists", data);
};
