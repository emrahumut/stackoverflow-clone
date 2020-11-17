import { Component, OnInit } from '@angular/core';
import { map, mergeMap } from 'rxjs/operators';
import { Question } from 'src/app/models/question';
import { QuestionsService } from 'src/app/services/questions.service';
import { TokenService } from 'src/app/services/token.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-top-questions',
  templateUrl: './top-questions.component.html',
  styleUrls: ['./top-questions.component.css']
})
export class TopQuestionsComponent implements OnInit {

  constructor(
    private tokenService: TokenService, 
    private questionsService: QuestionsService, 
    private usersService: UsersService) { }

  questions: Question;
  checkLog: boolean = false;
  questions2: any;
  ngOnInit(): void {
    this.checkLog = this.tokenService.isLoggedIn();
    this.getAllQuestions();
    // this.getQuestionss();
  }

  getAllQuestions() {
    this.questionsService.getAllQuestions()
    .subscribe(s => {
      this.questions = s.data;
      console.log(this.questions);
    });
  }


}
