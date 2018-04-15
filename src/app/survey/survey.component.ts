import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

// Firestore stuff
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from "angularfire2/firestore";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

import { MatDialogRef, MAT_DIALOG_DATA, MatInput, MatButton, MatButtonToggle, MatRadioButton, MatRadioGroup } from '@angular/material';

interface survey {
  questions: question[];
}

interface question {
  question: string;
  value: number;
}

@Component({
  selector: 'survey',
  templateUrl: 'survey.component.html'
})

export class SurveyComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;

  surveysCollection: AngularFirestoreCollection<survey>;
  surveys: Observable<survey[]>;

  questions: string[] = [
  ];

  options1: string[] = [
    "Very unlikely",
    "Unlikely",
    "Likely",
    "Very likely"
  ]
  options2: string[] = [
    "Not even a little",
    "Not well",
    "Well",
    "Very Well"
  ]
  options3: string[] = [
    "Yes",
    "No",
  ]
  options4: string[] = [
    "Very inaccurate",
    "Inaccurate",
    "Accurate",
    "Very Accurate"
  ]

  constructor(private afs: AngularFirestore,
    public dialogRef: MatDialogRef<SurveyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.surveysCollection = this.afs.collection('surveys'); // reference
    this.surveys = this.surveysCollection.valueChanges();
    this.getQuestions();
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
    this.fourthFormGroup = this._formBuilder.group({
      fourthCtrl: ['', Validators.required]
    });
    this.fifthFormGroup = this._formBuilder.group({
      fifthCtrl: ['', Validators.required]
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  submit() {

  }

  getQuestions() {
    this.surveys.forEach(survey => {
        survey.forEach(element => {
          element.questions.map(data => {
            this.questions[this.questions.length] = data.question;
          });
        });
      });
  }
}