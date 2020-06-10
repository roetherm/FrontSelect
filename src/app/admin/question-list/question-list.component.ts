import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../survey/question.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {

  allQuestions = [];
  displayedColumns: string[] = ['id', 'headline', 'reverse', 'question', 'edit'];

  constructor(
    private questionService: QuestionService,
    private spinner: NgxSpinnerService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.spinner.show();
    this.questionService.getItems()
    .subscribe((data: any) => {
      this.allQuestions = data;
      this.spinner.hide();
    });
  }

  editQuestion(id: number) {
    this.openDialog(id);
  }

  openDialog(id: number): void {
  const dialogRef = this.dialog.open(EditDialogComponent, {
    width: '900px',
    height: '900px',
    data: {id}
  });

  dialogRef.afterClosed().subscribe(() => {
  });
}

}
