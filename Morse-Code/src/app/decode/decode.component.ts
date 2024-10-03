import { Component, signal, inject } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { EncodeDecodeService } from '../encode-decode.service';

@Component({
  selector: 'app-decode',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './decode.component.html',
  styleUrl: './decode.component.css'
})
export class DecodeComponent {
  readonly inputCode = signal("");
  readonly outputText = signal("");
  readonly shouldDecode = signal(false);
  decodeService = inject(EncodeDecodeService);

  decode() {
    console.log("Decoding");
    if (!this.isValid()) {
      this.shouldDecode.set(false);
      return;
    }
    this.shouldDecode.set(true);
    this.outputText.set(this.decodeService.decode(this.inputCode()));
  }

  isValid(): boolean {
    if (this.inputCode() === "") {
      return false;
    } else {
      for (let i = 0; i < this.inputCode().length; i++) {
        if (this.inputCode().charAt(i) !== "." && this.inputCode().charAt(i) !== "-" && this.inputCode().charAt(i) !== " " && this.inputCode().charAt(i) !== "/") {
          return false;
        }
      }
    }
    return true;
  }
}
