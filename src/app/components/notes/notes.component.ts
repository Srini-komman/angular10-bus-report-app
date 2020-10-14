import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  notesFormGroup: FormGroup;
  public notesData = [];
  constructor(private formBuilder: FormBuilder) { }

  submitNotes(): void {
    console.log(this.notesFormGroup.value);
    this.notesData.push(this.notesFormGroup.get('notesArea').value);
    // Here we need to implement asynchronous call to back end.
    // We need to write seprate service to handle back end,
    // for time being I am setting it back to null as we don't have a backend service available to save notes.
    this.notesData = null;
  }
  ngOnInit(): void {
    this.notesFormGroup = this.formBuilder.group({
      notesArea: ['', Validators.required]
    });
  }

}
