import AsyncStorage from '@react-native-async-storage/async-storage';

const setData = async (token: any, value: any) => {
    try {
        await AsyncStorage.setItem(token, JSON.stringify(value));
        return true;
    } catch (e) {
        return false;
    }
};

const getData = async (token: any) => {
    try {
        const jsonValue = await AsyncStorage.getItem(token);
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        return null;
    }
};

const removeData = async (token: any) => {
    try {
        await AsyncStorage.removeItem(token);
    } catch (e) {
        return null;
    }
};

export default { setData, getData, removeData };
