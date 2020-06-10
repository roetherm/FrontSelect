import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-summary-dialog',
  templateUrl: './summary-dialog.component.html',
  styleUrls: ['./summary-dialog.component.scss']
})
export class SummaryDialogComponent {

  displayedColumns: string[] = ['Id', 'Thema', 'Gewichtung'];


  constructor(
    public dialogRef: MatDialogRef<SummaryDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
