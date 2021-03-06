import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeIn, fadeOut } from 'ng-animate';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss'],
  animations: [
    trigger('fade', [
      transition('void => *', useAnimation(fadeIn, {})),
      transition('* => void', useAnimation(fadeOut, {}))
    ])
  ],
})
export class SurveyComponent implements OnInit {

  status = 'welcome';
  data: any;

  constructor() { }

  ngOnInit() {
  }

  checkStatus(status: string) {
    this.status = status;
  }

  handleData(data: any) {
    data.sort((a: { grade: number; }, b: { grade: number; }) => {
      return a.grade - b.grade;
    });
    this.data = data;
    this.status = 'finished';
  }

}
