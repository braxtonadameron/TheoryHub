import { NgModule } from '@angular/core';
import { 
  MatGridListModule,
  MatCardModule,
  MatExpansionModule,
  MatDialogModule,
  MatDialog,
  MatStepperModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatRadioModule
} from '@angular/material';

@NgModule({
  imports: [
    MatGridListModule,
    MatCardModule,
    MatExpansionModule,
    MatDialogModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatRadioModule
  ],
  exports: [
    MatGridListModule,
    MatCardModule,
    MatExpansionModule,
    MatDialogModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatRadioModule
  ]
})
export class MaterialModule { }
