import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BookService } from '../book.service';

@Component({
  selector: 'app-lend',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './lend.component.html',
  styleUrls: ['./lend.component.css']
})
export class LendComponent {

  FormData!: FormGroup;

  constructor(
    private builder: FormBuilder,
    private book: BookService,
    // private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.FormData = this.builder.group({
      name: new FormControl(''),
      bookTitle: new FormControl(''),
      bookAuthor: new FormControl(''),
      lendingDate: new FormControl(''),
      returnDate: new FormControl(''),
    });
  }

  reset() {
    this.FormData = this.builder.group({
      name: new FormControl(''),
      bookTitle: new FormControl(''),
      bookAuthor: new FormControl(''),
      lendingDate: new FormControl(''),
      returnDate: new FormControl(''),
    });
  }

  onSubmit(formData: any) {
    this.book.lendBook(formData).subscribe((res) => {
      alert("Lended success")
      //this.toastr.success('Successful 💃');
      setTimeout(() => {
        this.reset();
      }, 2000);
    });
  }

}
