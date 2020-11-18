import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pipe } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { Answer } from 'src/app/models/answer';
import { Question } from 'src/app/models/question';
import { User } from 'src/app/models/user';
import { AnswersService } from 'src/app/services/answers.service';
import { QuestionsService } from 'src/app/services/questions.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css']
})
export class QuestionDetailComponent implements OnInit {

  question: Question;
  user: User;
  answers: Answer[];

  constructor(
    private questionsService: QuestionsService,
    private usersService: UsersService,
    private answersService: AnswersService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.questionsService.getQuestionById(this.route.snapshot.paramMap.get("id"))
      .pipe(
        map(question => {
          this.question = question.data;
          return question.data;
        }),
        mergeMap(question => this.usersService.getUserById(question.user)
          .pipe(
            map(user => {
              this.user = user.data;
              return question._id;
            }),
            mergeMap(questionId => this.answersService.getAnswers(questionId)
              .pipe(
                map(answers => {
                  this.answers = answers.data;
                  console.log(this.answers)
                  return answers;
                })
              )
            )
          )),
      )
      .subscribe(question => {
        console.log(question);
      });
  }
}
