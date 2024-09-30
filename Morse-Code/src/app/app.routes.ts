import { Routes } from '@angular/router';
import { DecodeComponent} from './decode/decode.component';
import { EncodeComponent} from './encode/encode.component';

export const routes: Routes = [
  {"path": "decode", "component": DecodeComponent},
  {"path": "", "redirectTo": "/decode", "pathMatch": "full"},
  {"path": "encode", "component": EncodeComponent}
];
