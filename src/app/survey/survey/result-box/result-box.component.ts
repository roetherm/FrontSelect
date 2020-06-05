import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-result-box',
  templateUrl: './result-box.component.html',
  styleUrls: ['./result-box.component.scss']
})
export class ResultBoxComponent implements OnInit {

  @Input() name: string;
  @Input() grade: string;
  @Input() text: string;

  constructor() { }

  ngOnInit(): void {
  }

}
