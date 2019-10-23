import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stepper-question',
  templateUrl: './stepper-question.component.html',
  styleUrls: ['./stepper-question.component.scss']
})
export class StepperQuestionComponent implements OnInit {
  amount = [1, 2, 3, 4, 5, 6, 7, 8, 6, 5, 4, 4, 4, 3, 4, 7];

  constructor() { }

  ngOnInit() {
  }

}
