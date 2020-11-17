import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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

  @Output() elm: EventEmitter<any> = new EventEmitter<any>();

  question: any;
  checkLog: boolean;
  user: any;
  userId: string;

  constructor(

    private route: ActivatedRoute,
    private questionsService: QuestionsService,
    private tokenService: TokenService,
    private usersService: UsersService
  ) { }

  ngOnInit(): void {

    this.checkLog = this.tokenService.isLoggedIn();
    this.getQuestion();
  }

  getQuestion() {
    this.questionsService
      .getQuestionById(this.route.snapshot.paramMap.get("id"))
      .toPromise()
      .then((q: ResponseModel) => {
        this.question = q.data;
        this.elm.emit(this.question);
        this.getUser(q.data.user);
      });
  }

  getUser(id: string) {
    this.usersService.getUserById(id).subscribe(q => {
      this.user = q.data;
    });
  }

  like() {
    this.questionsService.likeQuestion(this.question._id)
    .subscribe(d => {
      this.question.likeCount = d.data.likeCount
    });
  }

}
