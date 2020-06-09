import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FrameworkService } from '../framework.service';

@Component({
  selector: 'app-edit-framework',
  templateUrl: './edit-framework.component.html',
  styleUrls: ['./edit-framework.component.scss']
})
export class EditFrameworkComponent implements OnInit {

  frameworkData = {
    grade: '',
    text: '',
    name: '',
    id: 0,
  };

  @Input() question: any;
  @Input() framework: string;
  @Output() closed = new EventEmitter<boolean>();

  constructor(
    private frameworkService: FrameworkService,
  ) { }

  ngOnInit(): void {
    this.getFramework();
  }

  onNoClick() {
    this.closed.emit(true);
  }

  saveFramework() {
    this.frameworkData.id = this.question.id;
    this.frameworkData.name = this.question.headline;
    this.frameworkService.getFrameworkKey(this.framework)
      .subscribe(data => {
        if (data[0]) {
          this.frameworkService.saveFramework(data[0].key, this.frameworkData);
        }
      });
  }

  getFramework() {
    this.frameworkService.getFramework(this.framework)
    .subscribe((data: any) => {
      if (data[0]) {
        this.frameworkService.getSubCollection(data[0].key, this.question.id)
          .subscribe((subData: any) => {
            if (subData[0]) {
              this.frameworkData = subData[0];
             }
          });
      }
    });
  }

}
