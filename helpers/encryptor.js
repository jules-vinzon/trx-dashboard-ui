import crypto from 'crypto';

export function encryptRequest(data, key) {
    const jsonString = JSON.stringify(data);
    const buffer = Buffer.from(jsonString, 'utf8');
    const encrypted = crypto.publicEncrypt(key, buffer);
    return encrypted.toString('hex');;
}