import * as SecureStore from 'expo-secure-store';

interface StoredData<T> {
  data: T;
}

/**
 * Get an item from AsyncStorage
 * @param {string} key - item key
 * @returns {Promise<T | null>}
 */
export const getItem = async <T>(key: string): Promise<T | null> => {
  try {
    const storedValue: string | null = await SecureStore.getItemAsync(key);
    if (storedValue) {
      try {
        const parsed: StoredData<T> = JSON.parse(storedValue);
        if (parsed && parsed.data) {
          return parsed.data;
        }
        return null;
      } catch {
        return null;
      }
    }
    return null;
  } catch {
    return null;
  }
};

/**
 * Delete an item in AsyncStorage
 * @param {string} key - key value for the item
 * @returns {Promise<void>}
 */
export const removeItem = async (key: string): Promise<void> => SecureStore.deleteItemAsync(key);

/**
 * Store an item in AsyncStorage
 * @param {string} key - key value for the item
 * @param {T} item - an item to store
 * @returns {Promise<void>}
 */
export const setItem = async <T>(key: string, item: T): Promise<void> => SecureStore.setItemAsync(
  key,
  JSON.stringify({
    data: item,
  } as StoredData<T>),
);

// Keys for the store
export const storeKeys = {
  markers: 'markers',
  PINCodeHash: 'pincodehash',
  PINExists: 'pinexists',
} as const;
