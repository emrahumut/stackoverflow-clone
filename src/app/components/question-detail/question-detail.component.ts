import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap } from 'rxjs/operators';
import { Question } from 'src/app/models/question';
import { User } from 'src/app/models/user';
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

  constructor(
    private questionsService: QuestionsService,
    private usersService: UsersService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  getQuestionData(data) {
    this.question = data;
    console.log(data);
  }
}
