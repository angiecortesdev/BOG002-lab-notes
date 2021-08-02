import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-create-notes',
  templateUrl: './create-notes.component.html',
  styleUrls: ['./create-notes.component.css']
})
export class CreateNotesComponent implements OnInit {
  createNote: FormGroup;
  submitted = false;
  id: string | null;
  text = 'Add Note';

  constructor(private fb: FormBuilder,
              private _noteService: NotesService,
              private router: Router,
              private toastr: ToastrService,
              private aRoute: ActivatedRoute) {
    this.createNote = this.fb.group({
      title: [null, [Validators.required]],
      note: [null, [Validators.required]]
    })
    this.id = this.aRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.edit();
  }
  addNote(){
    this.submitted = true;

    if(this.createNote.invalid){
      return;
    }
    if(this.id === null){
      this.addNote();
    }else{
      this.editNote(this.id)
    }
  }

  add(){
    const notesCreate: any = {
      title: this.createNote.value.title,
      note: this.createNote.value.note,
    }

    this._noteService.addNotes(notesCreate).then(() => {
      this.toastr.success('Note Created Successfully', 'successful note')
      this.router.navigate(['/list'])
    }).catch(error => {
      console.log(error)
    })
  }

  editNote(id: string){

    const notesCreate: any = {
      title: this.createNote.value.title,
      note: this.createNote.value.note
    }
    //console.log(notesCreate)
    this._noteService.updateNote(id, notesCreate).then(() => {
      this.toastr.info('The note was modified successfully', 'It was modified')
    })
    this.router.navigate(['/list']);
  }

  edit() {
    this.text = 'Edit Note'
    if(this.id !== null){
      this._noteService.getNote(this.id).subscribe(data => {

        console.log(this.createNote)
        //this.createNote.controls['title'].setValue(data.payload.data()['title'])
        this.createNote.setValue({
          title: data.payload.data()['title'],
          note: data.payload.data()['note']
        })
      })
    }
  }

}
