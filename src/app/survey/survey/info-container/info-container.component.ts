import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RatingService } from '../../rating.service';

@Component({
  selector: 'app-info-container',
  templateUrl: './info-container.component.html',
  styleUrls: ['./info-container.component.scss']
})
export class InfoContainerComponent {

  @Input() type: string;
  @Input() data: any;
  @Output() status = new EventEmitter<any>();

  constructor(
    private ratingService: RatingService,
  ) { }

  sendStatus(status: string) {
    this.status.emit(status);
  }

}
