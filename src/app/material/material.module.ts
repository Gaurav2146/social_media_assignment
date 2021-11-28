import { NgModule } from '@angular/core';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
const MaterialComponents = [
  MatTooltipModule,
  MatDialogModule,
  MatSnackBarModule
]

@NgModule({
  imports: [MaterialComponents],
  exports :[MaterialComponents]
})
export class MaterialModule { }
