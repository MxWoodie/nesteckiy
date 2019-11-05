import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {
  @Input() book: Book;
  @Output() onDelete = new EventEmitter();

  constructor(private bookService: BookService) { }

  ngOnInit() {
  }

  onDeleteClick() {
    this.bookService.deleteBook(this.book.id).subscribe(data => this.onDelete.emit());
  }
}
