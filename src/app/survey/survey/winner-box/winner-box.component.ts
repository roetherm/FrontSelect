import { Component, OnInit, Input } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-winner-box',
  templateUrl: './winner-box.component.html',
  styleUrls: ['./winner-box.component.scss']
})
export class WinnerBoxComponent implements OnInit {

  @Input() framework: any;

  constructor(
    private spinner: NgxSpinnerService,
  ) { }

  ngOnInit(): void {
    this.spinner.hide();
  }

}
