import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { QuestionsService } from 'src/app/services/questions.service';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-newquestion',
  templateUrl: './newquestion.component.html',
  styleUrls: ['./newquestion.component.css']
})
export class NewquestionComponent implements OnInit {

  newQuestionForm: FormGroup;
  ckeConfig:any

  constructor(private router: Router, private questionsService: QuestionsService, private snackbar: SnackbarService) { }

  ngOnInit(): void {

    this.newQuestionForm = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.minLength(10)]),
      content: new FormControl('', [Validators.required, Validators.minLength(20)]),
    });

    this.ckeConfig = {
      allowedContent: false,
      extraPlugins: 'divarea',
      forcePasteAsPlainText: true
    };

  }

  // Adding a new question
  newQuestion() {
    if (this.newQuestionForm.valid) {
      this.questionsService.addQuestion(this.newQuestionForm.value).subscribe(data => {
        this.snackbar.openSnackBar('Your question have been saved successfully', 'X')
        console.log(data);
      }, err => console.log(err));
    }
  }


}
