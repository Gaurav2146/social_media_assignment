import { NgModule } from '@angular/core';
import {MatTooltipModule} from '@angular/material/tooltip';

const MaterialComponents = [
  MatTooltipModule
]

@NgModule({
  imports: [MaterialComponents],
  exports :[MaterialComponents]
})
export class MaterialModule { }
