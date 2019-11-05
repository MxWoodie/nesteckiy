import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BookService } from '../book.service';
import { Book } from '../book';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  @Output() onAdd = new EventEmitter();

  addBookForm;

  constructor(
    private bookService: BookService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.addBookForm = this.formBuilder.group({
      name: '',
      description: ''
    });
  }

  onSubmit(book: Book) {
    console.warn(book);
    this.bookService.addBook(book).subscribe(data => this.onAdd.emit());
    this.addBookForm.reset(); 
  }

}
