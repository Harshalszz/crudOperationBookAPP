import { Component } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-show-lend-book',
  templateUrl: './show-lend-book.component.html',
  styleUrls: ['./show-lend-book.component.css']
})
export class ShowLendBookComponent {
    public lendBook$ : any;

    constructor(private book: BookService){}

    ngOnInit(){
      this.getAllLendedBooks();
    }

    getAllLendedBooks(){
      this.book.getLendedBooks().subscribe((res)=>{
        this.lendBook$ = res;
      })
    }
}
