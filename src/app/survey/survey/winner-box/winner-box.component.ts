import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-winner-box',
  templateUrl: './winner-box.component.html',
  styleUrls: ['./winner-box.component.scss']
})
export class WinnerBoxComponent implements OnInit {

  @Input() framework: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.framework);
  }

}
