import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-gewichtung-dialog',
  templateUrl: './gewichtung-dialog.component.html',
  styleUrls: ['./gewichtung-dialog.component.scss']
})
export class GewichtungDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<GewichtungDialogComponent>,
  ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  openNewTab() {
    window.open('/model', '_blank');
    this.onNoClick();
  }

}
