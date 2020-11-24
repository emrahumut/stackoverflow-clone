import { toTypeScript } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnswersService } from 'src/app/services/answers.service';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-update-delete',
  templateUrl: './update-delete.component.html',
  styleUrls: ['./update-delete.component.css']
})
export class UpdateComponent implements OnInit {

  id: string;
  type:string;
  constructor(
    private questionsService: QuestionsService,
    private answersService: AnswersService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.snapshot.paramMap.get('id');
    this.type = this.route.snapshot.paramMap.get('type');

    if (this.type === "question") {
      // Question edit
    }
    if(this.type === "answer") {
      // answer edit
    }
    if (this.type === "profile") {
      // profile edit
    }
  }

}
