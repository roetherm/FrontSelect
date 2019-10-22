import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';

// Material imports
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgxSpinnerModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [
    FormsModule,
    NgxSpinnerModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
  ],
})
export class SharedModule { }
