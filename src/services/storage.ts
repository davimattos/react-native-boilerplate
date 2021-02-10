import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

export default function useLocalStorage(key: string) {
  const [currentValue, setCurrentValue] = useState<string | any>(() =>
    getData(key),
  );

  useEffect(() => {
    !!currentValue && storeData(key, currentValue);
  }, [key, currentValue]);

  return { currentValue, setCurrentValue };
}

const getData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return;
    }
  } catch (e) {
    console.log(e);
  }
};

const storeData = async (key: string, value: any) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.log(e);
  }
};
