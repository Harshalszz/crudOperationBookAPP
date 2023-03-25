import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BookService } from '../book.service';
//import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-update-book',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit{

  FormData !: FormGroup;
  isloading!: boolean;
  book$ !: any;
  id!: any;

  constructor(
    private builder : FormBuilder,
    private book : BookService,
    private route : ActivatedRoute
  ){}

  ngOnInit(){
    this.route.paramMap.subscribe((params)=>{

      this.id = params.get('id');
      this.book.getBook(this.id).subscribe((res)=>{
        this.book$ =res;
        this.FormData.patchValue(this.updateFormValues())
      })

    })

    this.FormData = this.builder.group({
      author: new FormControl(''),
      country: new FormControl(''),
      language: new FormControl(''),
      pages: new FormControl(''),
      title: new FormControl(''),
      year: new FormControl(''),
    })
  }


  onSubmit(formData :any){
    this.book.updateBook(this.id, formData).subscribe((res)=>{
      //alert("updated successfully");
      console.log("Updated")

      setTimeout(()=>{
        location.href ='/';

      },2000)
    })
  }

  updateFormValues(){
    return {
      author: this.book$.author,
      country: this.book$.country,
      language: this.book$.language,
      pages: this.book$.pages,
      title: this.book$.title,
      year: this.book$.year,
    }
  }


}
