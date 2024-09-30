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
    return "";
  }
}
