import { LocalStorageKeys } from "@/interfaces";

interface SetLocalStorage<T> extends LocalStorageKeys {
  value: T;
}

export const setLocalStorage = <T>({ key, value }: SetLocalStorage<T>) => {
  localStorage.setItem(key, JSON.stringify(value));
};

interface GetLocalStorage extends LocalStorageKeys {}

export const getLocalStorage = <T>({ key }: GetLocalStorage): T | null => {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
};

interface RemoveLocalStorage extends LocalStorageKeys {}

export const removeLocalStorage = ({ key }: RemoveLocalStorage) => {
  localStorage.removeItem(key);
};
