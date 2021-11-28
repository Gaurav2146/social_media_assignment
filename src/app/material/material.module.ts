import { NgModule } from '@angular/core';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
const MaterialComponents = [
  MatTooltipModule,
  MatDialogModule
]

@NgModule({
  imports: [MaterialComponents],
  exports :[MaterialComponents]
})
export class MaterialModule { }
