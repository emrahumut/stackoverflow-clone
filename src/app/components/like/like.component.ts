import { Component, Input, OnInit } from '@angular/core';
import { AnswersService } from 'src/app/services/answers.service';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  @Input() data;
  @Input() type: string;

  constructor(
    private questionsService: QuestionsService,
    private answersService: AnswersService
  ) { }

  ngOnInit(): void {
  }

  like() {
    if (this.type === "question") {
      this.questionsService.likeQuestion(this.data._id)
        .subscribe(d => {
          console.log(d);
          this.data.likeCount = d.likeCounts
        });
    }
    if (this.type === "answer") {
      this.answersService.likeAnswer(this.data.question, this.data._id)
        .subscribe(d => {
          this.data.likeCount = d.likeCount
        });
    }
  }
}
