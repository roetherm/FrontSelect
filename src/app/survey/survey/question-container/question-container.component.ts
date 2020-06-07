import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RatingService } from '../../rating.service';
import { QuestionService } from '../../question.service';
import { Observable } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-question-container',
  templateUrl: './question-container.component.html',
  styleUrls: ['./question-container.component.scss']
})
export class QuestionContainerComponent implements OnInit {

  @Output() data = new EventEmitter<any>();

  allQuestions: Array<any>;
  allRatings: Array<any> = [];

  currentRating = 0;

  selectedQuestion: any;
  selectedId = 1;

  joker = 1;
  activeJoker = false;

  constructor(
    private ratingService: RatingService,
    private questionService: QuestionService,
    private spinner: NgxSpinnerService,
  ) { }

  ngOnInit(): void {
    this.spinner.show();
    this.getQuestions();
  }

  getQuestions() {
    this.questionService.getItems()
    .subscribe((data: any) => {
      this.allQuestions = data;
      this.selectQuestion();
      this.spinner.hide();
    });
  }

  selectQuestion() {
    this.activeJoker = false;
    this.currentRating = 0;
    const newQuestion = this.allQuestions.find(question => question.id === this.selectedId);
    this.selectedQuestion = newQuestion;
    this.checkQuestion();
  }

  checkQuestion() {
    if (this.allRatings.length > 0) {
      const currentQuestion = this.allRatings.find(el => el.id === this.selectedId);
      if (currentQuestion) {
        if (this.selectedQuestion.reverse) {
          switch (currentQuestion.rating) {
            case 1:
              this.currentRating = 8;
              break;
            case 2:
              this.currentRating = 5;
              break;
            case 5:
              this.currentRating = 2;
              break;
            case 8:
              this.currentRating = 1;
              break;
            case 21:
              this.currentRating = 1;
              this.activeJoker = true;
              break;
            default:
              this.currentRating = currentQuestion.rating;
          }
        } else {
          this.currentRating = currentQuestion.rating;
          if (currentQuestion.rating === 21) {
            this.activeJoker = true;
          }
        }
      }
    }
  }

  changeQuestion(type: string) {
    if (type === 'next') {
      this.selectedId ++;
    } else if (type === 'before') {
      this.selectedId --;
    }
    this.selectQuestion();
  }

  checkClick() {
    if (this.joker !== 0) {
      if (!this.activeJoker) {
        this.currentRating = 0;
        const index = this.allRatings.findIndex(el => el.id === this.selectedId);
        if (index >= 0) {
          this.allRatings.splice(index, 1);
        } else {
        }
        this.joker --;
      } else {
        this.joker ++;
        this.currentRating = 0;
        const index = this.allRatings.findIndex(el => el.id === this.selectedId);
        if (index >= 0) {
          this.allRatings.splice(index, 1);
        }
      }
    } else if (this.joker === 0 && this.activeJoker === true) {
      this.joker ++;
      this.currentRating = 0;
      const index = this.allRatings.findIndex(el => el.id === this.selectedId);
      if (index >= 0) {
        this.allRatings.splice(index, 1);
      }
    } else {
      this.activeJoker = true;
    }
  }

  handleRating(rating: number) {
    if (this.activeJoker) {
      rating = 21;
    } else if (this.selectedQuestion.reverse) {
      switch (rating) {
        case 1:
          rating = 8;
          break;
        case 2:
          rating = 5;
          break;
        case 5:
          rating = 2;
          break;
        case 8:
          rating = 1;
          break;
        default:
          rating = rating;
      }
    }

    const index = this.allRatings.findIndex(el => el.id === this.selectedId);
    if (index >= 0) {
      this.allRatings.splice(index, 1);
    } else {
    }

    this.allRatings.push({
      id: this.selectedId,
      rating,
    });

    if (this.selectedId !== this.allQuestions.length) {
      this.changeQuestion('next');
    } else {
      console.log(this.allRatings);
      this.spinner.show();
      this.ratingService.sendData(this.allRatings)
      .subscribe((data: any) => {
        this.data.emit(data);
      });
    }
  }

}
