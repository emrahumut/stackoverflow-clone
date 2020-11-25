import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Question } from 'src/app/models/question';
import { QuestionsService } from 'src/app/services/questions.service';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-question-edit',
  templateUrl: './question-edit.component.html',
  styleUrls: ['./question-edit.component.css']
})
export class QuestionEditComponent implements OnInit {

  editQuestionForm: FormGroup;
  ckeConfig:any;
  question: Question;
  questionId: string = this.route.snapshot.paramMap.get('id');
  constructor(
    private questionsService: QuestionsService,
    private route : ActivatedRoute,
    private snackbar: SnackbarService
  ) { }

  ngOnInit(): void {
    this.questionsService.getQuestionById(this.questionId).subscribe(d => {
      this.question = d.data;
      this.editQuestionForm.controls['title'].setValue(this.question.title)
      this.editQuestionForm.controls['content'].setValue(this.question.content)

    });
    this.editQuestionForm = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.minLength(10)]),
      content: new FormControl('', [Validators.required, Validators.minLength(20)]),
    });

    this.ckeConfig = {
      allowedContent: false,
      extraPlugins: 'divarea',
      forcePasteAsPlainText: true
    };
  }

  updateQuestion() {
    if (this.editQuestionForm.valid) {
      this.questionsService.updateQuestion(this.questionId,this.editQuestionForm.value).subscribe(data => {
        this.snackbar.openSnackBar('Your question has been updated successfully', 'X')
      }, err => console.log(err));
    }
  }

}
