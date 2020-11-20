import { Component, Input, OnInit } from '@angular/core';
import { QuestionsService} from 'src/app/services/questions.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-question-detail-body',
  templateUrl: './question-detail-body.component.html',
  styleUrls: ['./question-detail-body.component.css']
})
export class QuestionDetailBodyComponent implements OnInit {

  @Input() question;
  @Input() user;
  @Input() isLogged;
  checkLog: boolean;
  likeType: string = "question"; 
  likeConfig: any;
  
  constructor(
    private questionsService: QuestionsService,
    private tokenService: TokenService,
  ) { }

  ngOnInit(): void {
    this.checkLog = this.tokenService.isLoggedIn();
    
    this.likeConfig = {
      likeCheck : null,
      btnColor: "warn"
    }
  }
}
