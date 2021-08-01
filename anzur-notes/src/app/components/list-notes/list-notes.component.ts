import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { NotesService } from 'src/app/services/notes.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-notes',
  templateUrl: './list-notes.component.html',
  styleUrls: ['./list-notes.component.css']
})
export class ListNotesComponent implements OnInit {
  notes: any[] = [];

  constructor(private _noteService: NotesService,
              private toastr: ToastrService) {
   }

  ngOnInit(): void {
    this.getNotes()
  }

  getNotes() {
    this._noteService.getNotes().subscribe(data => {
      this.notes = data.map((element: any) =>
        ({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      )
      console.log(this.notes);
    });
  }

  deleteNotes(id: string) {
    this._noteService.deleteNotes(id).then(() =>{
      this.toastr.error('La nota fue eliminada con éxito', 'Delete')
    }).catch(error => {
      console.log(error)
    })
  }

}
