import * as Crypto from 'expo-crypto';

export const hash = (value: string): Promise<string> => Crypto.digestStringAsync(
  Crypto.CryptoDigestAlgorithm.SHA512,
  value,
);

export const compare = async (hashed: string, plaintext: string): Promise<boolean> => {
  const forComparison = await hash(plaintext);

  return hashed === forComparison;
};
