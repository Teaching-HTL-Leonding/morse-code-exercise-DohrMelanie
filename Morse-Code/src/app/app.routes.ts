import { Routes } from '@angular/router';
import { DecodeComponent} from './decode/decode.component';
import { EncodeComponent} from './encode/encode.component';

export const routes: Routes = [
  {"path": "decode", "component": DecodeComponent},
  {"path": "encode", "component": EncodeComponent},
  {"path": "", "redirectTo": "/encode", "pathMatch": "full"}
];
