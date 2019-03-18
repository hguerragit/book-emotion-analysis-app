import CryptoJS from 'crypto-js';

export const decrypt = (ciphertext, iv, secretKey) => {
	const passphrase = CryptoJS.enc.Utf8.parse(secretKey);
	const decrypted = CryptoJS.AES.decrypt(ciphertext, passphrase, { 
  		mode: CryptoJS.mode.CBC, 
  		iv: CryptoJS.enc.Utf8.parse(iv), 
  		padding: CryptoJS.pad.Pkcs7 
	});

    return decrypted.toString(CryptoJS.enc.Utf8);
};

export default decrypt;