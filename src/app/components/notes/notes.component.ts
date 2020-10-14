import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  public notesData = [];
  public notesInput: string;
  constructor() { }

  submitNotes(): void {
    if (this.notesInput) {
      this.notesData.push(this.notesInput);
    }

    // Here we need to implement asynchronous call to back end.
    // We need to write seprate service to handle back end,
    // for time being I am setting it back to null as we don't have a backend service available to save notes.
    this.notesData = null;
  }
  ngOnInit(): void {
  }

}
