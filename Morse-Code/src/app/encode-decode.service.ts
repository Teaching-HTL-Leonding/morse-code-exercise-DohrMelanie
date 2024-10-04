import { Injectable, output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EncodeDecodeService {

  readonly morseCode = [
    /* A */ '.-',
    /* B */ '-...',
    /* C */ '-.-.',
    /* D */ '-..',
    /* E */ '.',
    /* F */ '..-.',
    /* G */ '--.',
    /* H */ '....',
    /* I */ '..',
    /* J */ '.---',
    /* K */ '-.-',
    /* L */ '.-..',
    /* M */ '--',
    /* N */ '-.',
    /* O */ '---',
    /* P */ '.--.',
    /* Q */ '--.-',
    /* R */ '.-.',
    /* S */ '...',
    /* T */ '-',
    /* U */ '..-',
    /* V */ '...-',
    /* W */ '.--',
    /* X */ '-..-',
    /* Y */ '-.--',
    /* Z */ '--..',
  ];

  constructor() { }
  encode(inputText: string): string {
    let outputCode: string = "";
    inputText = inputText.trim();
    if (!inputText || inputText.length === 0) {
      return "";
    }
    for (let i = 0; i < inputText.length; i++) {
      let char = inputText.charAt(i);
      if (char === ' ') {
        outputCode += ' / ';
        continue;
      } else {
        let index = char.charCodeAt(0) - 'A'.charCodeAt(0);
        outputCode += this.morseCode[index] + " ";
      }
    }
    return outputCode;
  }

  decode(inputCode: string): string {
    let outputText: string = "";
    inputCode = inputCode.trim();
    let codeWords = inputCode.split('/');
    for (let codeWord of codeWords) {
      let codeChars = codeWord.trim().split(' ');
      for (let codeChar of codeChars) {
        let index = this.morseCode.indexOf(codeChar);
        if (index === -1) {
          return "Invalid Morse code: " + codeChar;
        }
        outputText += String.fromCharCode('A'.charCodeAt(0) + index);
      }
      outputText += " ";
    }
    return outputText;
  }
}
