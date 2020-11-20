import { Component, Input, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { AnswersService } from 'src/app/services/answers.service';
import { QuestionsService } from 'src/app/services/questions.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  @Input() data;
  @Input() likeType: string;
  @Input() likeConfig: any;
  isLogged: boolean = this.tokenService.isLoggedIn();
  
  constructor(
    private questionsService: QuestionsService,
    private answersService: AnswersService,
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {
  }

  like() {
    this.isLogged = this.tokenService.isLoggedIn();
    if (this.likeType === "question") {

      this.questionsService.likeQuestion(this.data._id)
        .subscribe(d => {
          console.log(d);
          this.data.likeCount = d.likeCounts
        });
    }
    else if (this.likeType === "answer") {
      console.log(this.data.likeCount)
      this.answersService.likeAnswer(this.data.question, this.data._id)
        .pipe(
          map(d=> {
            this.data.likeCount = d.likeCount
            return d
          })
        )
        .subscribe(d => {
          console.log(d)
        });
    }
  }

  isLiked() {
    if (this.isLogged) {
      this.likeConfig.likeCheck
    }
  }
}
