import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';

// Material imports
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { CardComponent } from './card/card.component';
import { HighlightPipe } from './highlight.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgxSpinnerModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatCardModule,
    MatTooltipModule,
    MatDialogModule,
    MatSlideToggleModule,
  ],
  exports: [
    FormsModule,
    NgxSpinnerModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    CardComponent,
    HighlightPipe,
    MatTooltipModule,
    MatDialogModule,
    MatSlideToggleModule,
  ],
  declarations: [
    CardComponent,
    HighlightPipe,
  ],
})
export class SharedModule { }
