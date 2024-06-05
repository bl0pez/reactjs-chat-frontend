import { LocalStorageKeys } from "@/interfaces";

export const setLocalStorage = <T>(key: LocalStorageKeys, value: T) => {
    localStorage.setItem(key, JSON.stringify(value));
}

export const getLocalStorage = <T>(key: LocalStorageKeys): T | null => {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
}

export const removeLocalStorage = (key: LocalStorageKeys) => {
    localStorage.removeItem(key);
}