import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../book';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {
  @Input() book: Book;

  constructor(private communicationService: CommunicationService) { }

  ngOnInit() {
  }

  onDeleteClick() {
    this.communicationService.removeBook(this.book.id);
  }
}
