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
  readonly inputCode = signal("")
  readonly outputText = signal("")
  decodeService = inject(EncodeDecodeService);

  decode() {
    this.outputText.set(this.decodeService.decode(this.inputCode()))
  }
}
