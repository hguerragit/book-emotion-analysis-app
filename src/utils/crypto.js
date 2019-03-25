import CryptoJS from 'crypto-js';

export function decrypt(ciphertext, passphrase, iv) {
    var decrypted = CryptoJS.AES.decrypt(
    	ciphertext,
      	CryptoJS.enc.Utf8.parse(passphrase),
	    { 
	    	mode: CryptoJS.mode.CBC, 
	        iv: CryptoJS.enc.Utf8.parse(iv), 
	        padding: CryptoJS.pad.Pkcs7 
	    }
    );

    return decrypted.toString(CryptoJS.enc.Utf8);
}

export default decrypt;