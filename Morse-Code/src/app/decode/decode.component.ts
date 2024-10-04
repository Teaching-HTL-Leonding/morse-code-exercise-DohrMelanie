import { Component, signal, inject } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { EncodeDecodeService } from '../encode-decode.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-decode',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './decode.component.html',
  styleUrl: './decode.component.css'
})
export class DecodeComponent {
  readonly inputCode = signal("");
  readonly outputText = signal("");
  readonly shouldDecode = signal(false);
  readonly errorMessage = signal("");
  decodeService = inject(EncodeDecodeService);

  decode() {
    console.log("Decoding");
    if (!this.isValid()) {
      this.shouldDecode.set(false);
      this.outputText.set("");
      return;
    }
    this.errorMessage.set("");
    this.shouldDecode.set(true);
    let outputText = this.decodeService.decode(this.inputCode());
    if (outputText.startsWith("Invalid")) {
      this.errorMessage.set(outputText);
      this.shouldDecode.set(false);
    } else {
      this.outputText.set(outputText);
    }
  }

  isValid(): boolean {
    if (this.inputCode() === "") {
      this.errorMessage.set("Please enter a code to decode.");
      return false;
    } else {
      for (let i = 0; i < this.inputCode().length; i++) {
        if (this.inputCode().charAt(i) !== "." && this.inputCode().charAt(i) !== "-" && this.inputCode().charAt(i) !== " " && this.inputCode().charAt(i) !== "/") {
          this.errorMessage.set("Invalid character in code. Please only use '.' '-' ' ' and '/'.");
          return false;
        }
      }
    }
    return true;
  }
}
