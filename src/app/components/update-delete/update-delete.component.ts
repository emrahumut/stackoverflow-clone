import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnswersService } from 'src/app/services/answers.service';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-update-delete',
  templateUrl: './update-delete.component.html',
  styleUrls: ['./update-delete.component.css']
})
export class UpdateDeleteComponent implements OnInit {

  constructor(
    private questionsService: QuestionsService,
    private answersService: AnswersService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }
  

}
