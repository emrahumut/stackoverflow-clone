import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { defer, of } from 'rxjs';
import { mergeMap, find, skip, filter, delay, map, mergeAll, concatMap } from 'rxjs/operators';
import { Question } from 'src/app/models/question';
import { QuestionsService, ResponseModel } from 'src/app/services/questions.service';
import { TokenService } from 'src/app/services/token.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-question-detail-body',
  templateUrl: './question-detail-body.component.html',
  styleUrls: ['./question-detail-body.component.css']
})
export class QuestionDetailBodyComponent implements OnInit {

  @Input() question;
  @Input() user;
  checkLog: boolean;


  constructor(
    private questionsService: QuestionsService,
    private tokenService: TokenService,
  ) { }

  ngOnInit(): void {
    this.checkLog = this.tokenService.isLoggedIn();
  }

  like() {
    this.questionsService.likeQuestion(this.question._id)
    .subscribe(d => {
      this.question.likeCount = d.data.likeCount
    });
  }

}
