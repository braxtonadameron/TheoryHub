import { Component, OnInit } from '@angular/core';

// Firestore stuff
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from "angularfire2/firestore";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

import { theory } from '../theory/theory.component';

@Component({
  selector: 'theories',
  templateUrl: 'theories.component.html',
  styleUrls: ['./theories.component.css']
})

export class TheoriesComponent implements OnInit {
  
  panelOpenState: boolean = false;

  theoriesCollection: AngularFirestoreCollection<theory>;
  theories: Observable<theory[]>;
  selectedTheory: theory;

  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
    this.theoriesCollection = this.afs.collection('theories') // reference
    this.theories = this.theoriesCollection.valueChanges()    // observable of theories
  }

  select(theory: theory) {
    this.selectedTheory = theory;
  }
}