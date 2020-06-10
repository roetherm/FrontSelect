import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryRoutingModule } from './history-routing-module';
import { HistoryListComponent } from './history-list/history-list.component';
import { SharedModule } from '../shared/shared.module';
import { SummaryDialogComponent } from './summary-dialog/summary-dialog.component';




@NgModule({
  declarations: [HistoryListComponent, SummaryDialogComponent],
  imports: [
    CommonModule,
    HistoryRoutingModule,
    SharedModule
  ],
  entryComponents: [
    SummaryDialogComponent
  ]
})
export class HistoryModule { }
