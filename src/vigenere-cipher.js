/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');

    message = message.toUpperCase();
    key = key.toUpperCase();

    let result = '';
    let keyIndex = 0;

    for (let i = 0; i < message.length; i++) {
      const charCode = message.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) {
        const keyCharCode = key.charCodeAt(keyIndex % key.length);
        const shift = keyCharCode - 65;
        const encryptedCharCode = ((charCode - 65 + shift) % 26) + 65;
        result += String.fromCharCode(encryptedCharCode);
        keyIndex++;
      } else {
        result += message[i];
      }
    }

    return this.direct ? result : result.split('').reverse().join('');
  }

  decrypt(message, key) {
      if (!message || !key) throw new Error('Incorrect arguments!');

      message = message.toUpperCase();
      key = key.toUpperCase();

      let result = '';
      let keyIndex = 0;

      for (let i = 0; i < message.length; i++) {
        const charCode = message.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
          const keyCharCode = key.charCodeAt(keyIndex % key.length);
          const shift = keyCharCode - 65;
          const decryptedCharCode = ((charCode - 65 - shift + 26) % 26) + 65;
          result += String.fromCharCode(decryptedCharCode);
          keyIndex++;
        } else {
          result += message[i];
        }
      }

      return this.direct ? result : result.split('').reverse().join('');
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
