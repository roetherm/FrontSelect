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
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { CardComponent } from './card/card.component';
import { HighlightPipe } from './highlight.pipe';
import { SnackbarComponent } from './snackbar/snackbar.component';

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
    MatSnackBarModule,
    MatDialogModule,
    MatTabsModule,
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
    MatSnackBarModule,
    MatDialogModule,
    MatSlideToggleModule,
    MatTabsModule,
    SnackbarComponent,
  ],
  declarations: [
    CardComponent,
    HighlightPipe,
    SnackbarComponent,
  ],
})
export class SharedModule { }
