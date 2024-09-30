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
  readonly inputText = signal("")
  readonly outputCode = signal("")
  decodeService = inject(EncodeDecodeService);

  encode() {
    this.outputCode.set(this.decodeService.encode(this.inputText()))
  }
}
