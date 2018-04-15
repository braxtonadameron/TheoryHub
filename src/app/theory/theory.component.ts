import { Component, OnInit, Input } from '@angular/core';

import { MatDialog, MatButton, MatButtonToggle } from '@angular/material';
import { SurveyComponent } from '../survey/survey.component';

export interface theory {
  evidence: string[];
  scores: number[];
  summary: string;
  title: string;
  type: string;
  id?: string;
}

@Component({
  selector: 'theory',
  templateUrl: 'theory.component.html',
  styleUrls: ['./theory.component.css']
})

export class TheoryComponent implements OnInit {
  
  @Input() theory: theory
  score: number = 0;

  constructor(public dialog: MatDialog) { }

  ngOnInit() { }

  openDialog(theory: theory): void {
    let dialogRef = this.dialog.open(SurveyComponent, {
      width: '600px',
      data: { theory: this.theory, score: this.score }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Submitting survey...');
    });
  }
}