import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule,
  MatSelectModule,
  MatInputModule,
  MatFormFieldModule } from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule
  ],
  exports: [
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule
  ],
})
export class MaterialModule { }
