import { Component } from '@angular/core';
import { signal, inject } from '@angular/core';
import { EncodeDecodeService } from '../encode-decode.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-encode',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './encode.component.html',
  styleUrl: './encode.component.css'
})
export class EncodeComponent {
  readonly inputText = signal("");
  readonly outputCode = signal("");
  readonly shouldEncode = signal(false);
  decodeService = inject(EncodeDecodeService);

  encode() {
    for (let i = 0; i < this.inputText().length; i++) {
      let char = this.inputText().charAt(i);
      if (char !== ' ' && (char < 'A' || char > 'Z')) {
        console.log("Invalid character: " + char);
        this.shouldEncode.set(false);
        return;
      }
    }
    this.shouldEncode.set(true);
    this.outputCode.set(this.decodeService.encode(this.inputText()));
  }
}
