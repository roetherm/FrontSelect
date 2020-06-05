import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';

// Material imports
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
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
    MatCardModule,
    MatTooltipModule,
  ],
  exports: [
    FormsModule,
    NgxSpinnerModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    CardComponent,
    HighlightPipe,
    MatTooltipModule,
  ],
  declarations: [
    CardComponent,
    HighlightPipe,
  ],
})
export class SharedModule { }
