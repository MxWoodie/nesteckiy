import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CommunicationService } from '../communication.service';
import { Book } from '../book';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  private addBookForm;

  constructor(
    private communicationService: CommunicationService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.addBookForm = this.formBuilder.group({
      name: '',
      description: ''
    });
  }

  onSubmit(book: Book) {
    this.communicationService.addBook(book);
    this.addBookForm.reset(); 
  }

}
