import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Answer } from 'src/app/models/answer';
import { AnswersService } from 'src/app/services/answers.service';
import { QuestionsService, ResponseModel } from 'src/app/services/questions.service';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-answers-section',
  templateUrl: './answers-section.component.html',
  styleUrls: ['./answers-section.component.css']
})
export class AnswersSectionComponent implements OnInit {

  @Input() answers;
  @Input() isLogged;

  editQuestionForm: FormGroup;
  ckeConfig: any;
  likeCount: Number;
  type: string = "answer"; 

  constructor(
    private router: Router,
    private questionsService: QuestionsService,
    private snakebar: SnackbarService,
    private route: ActivatedRoute,
    private answersService: AnswersService,

  ) { }

  ngOnInit(): void {
    this.editQuestionForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      content: new FormControl('', [Validators.required])
    });

    this.ckeConfig = {
      allowedContent: false,
      extraPlugins: 'divarea',
      forcePasteAsPlainText: true
    };
  }

  addAnswer () {
    // adding answer section.
  }

  likeAnswer(questionId:string, answerId:string) {
    this.answersService.likeAnswer(questionId, answerId)
    .subscribe(d => {
      let answer = this.answers.find(a => a._id === answerId)
      answer.likeCount = d.likeCount
    });   
  }
 
 }
