import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { QuestionService } from '../../survey/question.service';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss']
})
export class EditDialogComponent implements OnInit {
  question: any;

  constructor(
     public dialogRef: MatDialogRef<EditDialogComponent>,
     private questionService: QuestionService,
     @Inject(MAT_DIALOG_DATA) public data: any) {}

   onNoClick(): void {
     this.dialogRef.close();
   }

   ngOnInit() {
     this.question = [];
     this.questionService.getQuestion(this.data.id)
     .subscribe((data: any) => {
       console.log(data);
       this.question = data[0];
     });
   }

   saveQuestion() {
     this.questionService.saveQuestion(this.question)
      .then(() => {
        this.onNoClick();
      })
      .catch(err => {
        console.log(err);
        this.onNoClick();
      });
   }

}
