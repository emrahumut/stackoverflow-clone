import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Answer } from 'src/app/models/answer';
import { User } from 'src/app/models/user';
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
  @Input() user: User;

  newAnswerForm: FormGroup;
  ckeConfig: any = null;
  likeConfig: any;
  likeCount: Number = 0;
  likeType: string = "answer";

  constructor(
    private router: Router,
    private questionsService: QuestionsService,
    private snakebar: SnackbarService,
    private route: ActivatedRoute,
    private answersService: AnswersService,
  ) { }

  ngOnInit(): void {
    this.newAnswerForm = new FormGroup({
      content: new FormControl('', [Validators.required])
    });

    this.likeConfig = {
      likeCheck: null,
      btnColor: "accent"
    }

    this.ckeConfig = {
      allowedContent: false,
      extraPlugins: 'divarea',
      forcePasteAsPlainText: true
    };
  }

  addAnswer() {
    this.answersService.addNewAnswer(this.newAnswerForm.value, this.route.snapshot.paramMap.get("id"))
      .subscribe(d => {
        this.answers.push(d.data);
      })

    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
    this.snakebar.openSnackBar("Your answer has been added successfully!", "X")
  }

  likeAnswer(questionId: string, answerId: string) {
    this.answersService.likeAnswer(questionId, answerId)
      .subscribe(d => {
        let answer = this.answers.find(a => a._id === answerId)
        answer.likeCount = d.likeCount
      });
  }

}
