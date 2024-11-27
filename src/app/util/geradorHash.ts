import * as CryptoJS from 'crypto-js';

export function gerarHash(senha: string) {
    return CryptoJS.SHA512(senha).toString();
}