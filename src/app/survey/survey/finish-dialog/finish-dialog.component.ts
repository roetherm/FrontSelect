import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-finish-dialog',
  templateUrl: './finish-dialog.component.html',
  styleUrls: ['./finish-dialog.component.scss']
})
export class FinishDialogComponent implements OnInit {
  status = 'go';

  constructor(
    public dialogRef: MatDialogRef<FinishDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {
    }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
