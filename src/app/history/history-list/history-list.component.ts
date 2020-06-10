import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HistoryService } from './../history.service';
import { Store } from '@ngrx/store';
import { SummaryDialogComponent } from './../summary-dialog/summary-dialog.component';


@Component({
  selector: 'app-history-list',
  templateUrl: './history-list.component.html',
  styleUrls: ['./history-list.component.scss']
})
export class HistoryListComponent implements OnInit {

  displayedColumns: string[] = ['time', '1place', '2place', '3place', '4place', '5place', '6place', 'summary'];
  allResults = [];

  constructor(
    private historyService: HistoryService,
    private store: Store<any>,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.store.select('user').subscribe((data: any) => {
      if (data.key !== '') {
        this.historyService.getItems(data.key).subscribe((results: any) => {
          results.sort((a: any, b: any) => {
            return b.time - a.time;
          });
          this.allResults = results;
        });
      }
    });
  }

  openDialog(element: any): void {
   const dialogRef = this.dialog.open(SummaryDialogComponent, {
     width: '900px',
     height: '900px',
     data: element
   });

   dialogRef.afterClosed().subscribe(result => {
   });
 }


}
